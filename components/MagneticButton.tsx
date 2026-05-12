'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  as = 'button',
  href,
  target,
  rel,
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-block cursor-pointer ${className}`}
      onClick={onClick}
    >
      {as === 'a' ? (
        <a href={href} target={target} rel={rel}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
