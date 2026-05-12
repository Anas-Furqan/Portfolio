'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const duration = 2200;

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setDone(true), 400);
        setTimeout(onComplete, 900);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg-base)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 600px 400px at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                boxShadow: '0 0 60px rgba(99,102,241,0.2)',
              }}
            >
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AF
              </span>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent rounded-br-2xl" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm font-mono text-muted tracking-[0.2em] uppercase mb-8"
          >
            Anas Furqan
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-48 flex flex-col items-center gap-3"
          >
            <div className="w-full h-px bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4f46e5, #818cf8)',
                  width: `${progress}%`,
                }}
                transition={{ duration: 0 }}
              />
            </div>
            <span className="text-xs font-mono text-subtle tabular-nums">
              {String(progress).padStart(3, '0')}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
