'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, LayoutGrid, Sun, Moon, Download } from 'lucide-react';

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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('af-theme');
    const isLight = saved === 'light';
    setTheme(isLight ? 'light' : 'dark');
    if (isLight) document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('af-theme', next);
    if (next === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
  }, [theme]);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? 'var(--bg-nav)'
    : 'rgba(12,12,17,0.45)';
  const navBorder = scrolled ? 'var(--line-strong)' : 'var(--line)';
  const navShadow = scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none';

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
        className="fixed top-0 inset-x-0 z-40 flex justify-center px-5 pt-4"
      >
        <div
          className="flex items-center gap-5 px-4 py-2.5 rounded-2xl"
          style={{
            background: navBg,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${navBorder}`,
            boxShadow: navShadow,
            transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Logo */}
          <button onClick={() => go('#hero')} className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
              }}
            >
              AF
            </div>
            <span className="text-sm font-semibold hidden sm:block" style={{ color: 'var(--ink-1)' }}>
              Anas Furqan
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="px-3 py-1.5 text-sm rounded-lg transition-all duration-150"
                style={{ color: 'var(--ink-2)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Anas-Furqan"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 hidden sm:flex items-center justify-center rounded-lg transition-all duration-150"
              style={{ color: 'var(--ink-2)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/anas-furqan/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 hidden sm:flex items-center justify-center rounded-lg transition-all duration-150"
              style={{ color: 'var(--ink-2)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <Linkedin size={15} />
            </a>

            {/* Resume button */}
            <a
              href="/Anas_Furqan_Resume.docx"
              download
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#a5b4fc',
              }}
              title="Download Resume"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.2)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.3)';
              }}
            >
              <Download size={13} />
              Resume
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ color: 'var(--ink-2)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {onSwitch && (
              <button
                onClick={onSwitch}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-150"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  color: 'var(--ink-2)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--surface-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                }}
              >
                <LayoutGrid size={11} />
                Switch
              </button>
            )}

            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
              style={{ color: 'var(--ink-2)' }}
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
            className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl p-3"
            style={{
              background: 'var(--bg-elevated)',
              backdropFilter: 'blur(24px)',
              border: '1px solid var(--line-strong)',
            }}
          >
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="w-full text-left px-4 py-3 text-sm rounded-xl transition-all duration-150"
                style={{ color: 'var(--ink-2)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                {l.label}
              </button>
            ))}
            <div className="h-px mx-4 my-2" style={{ background: 'var(--line)' }} />
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex gap-3">
                <a href="https://github.com/Anas-Furqan" target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: 'var(--ink-2)' }}>
                  <Github size={13} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/anas-furqan/" target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: 'var(--ink-2)' }}>
                  <Linkedin size={13} /> LinkedIn
                </a>
              </div>
              <button onClick={toggleTheme}
                className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--ink-2)' }}>
                {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
