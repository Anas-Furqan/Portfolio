'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, LayoutGrid } from 'lucide-react';

const links = [
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Awards',    href: '#awards'    },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
];

interface Props {
  onSwitch?: () => void;
}

export default function Navbar({ onSwitch }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
        className="fixed top-0 inset-x-0 z-40 flex justify-center px-5 pt-4"
      >
        <div
          className="flex items-center gap-6 px-4 py-2.5 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(12,12,17,0.9)' : 'rgba(12,12,17,0.5)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
            boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.6)' : 'none',
          }}
        >
          {/* Logo */}
          <button onClick={() => go('#hero')} className="flex items-center gap-2.5 flex-shrink-0 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}
            >
              AF
            </div>
            <span className="text-sm font-semibold text-ink-1 hidden sm:block">Anas Furqan</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="px-3 py-1.5 text-sm text-ink-2 hover:text-ink-1 rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a href="https://github.com/Anas-Furqan" target="_blank" rel="noreferrer"
              className="w-8 h-8 hidden sm:flex items-center justify-center rounded-lg text-ink-2 hover:text-ink-1 hover:bg-white/5 transition-all duration-150">
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/anas-furqan/" target="_blank" rel="noreferrer"
              className="w-8 h-8 hidden sm:flex items-center justify-center rounded-lg text-ink-2 hover:text-ink-1 hover:bg-white/5 transition-all duration-150">
              <Linkedin size={15} />
            </a>

            {onSwitch && (
              <button
                onClick={onSwitch}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: '#9191a8' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#eeeef5';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#9191a8';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                <LayoutGrid size={11} />
                Switch
              </button>
            )}

            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-ink-2 hover:text-ink-1 hover:bg-white/5 transition-all duration-150"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl p-3"
            style={{ background: 'rgba(17,17,24,0.97)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="w-full text-left px-4 py-3 text-sm text-ink-2 hover:text-ink-1 hover:bg-white/5 rounded-xl transition-all duration-150">
                {l.label}
              </button>
            ))}
            <div className="h-px bg-white/5 mx-4 my-2" />
            <div className="flex gap-3 px-4 py-2">
              <a href="https://github.com/Anas-Furqan" target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-ink-2 hover:text-ink-1 transition-colors">
                <Github size={13} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/anas-furqan/" target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-ink-2 hover:text-ink-1 transition-colors">
                <Linkedin size={13} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
