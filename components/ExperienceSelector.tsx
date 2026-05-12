'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Terminal, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onSelect: (mode: string) => void;
}

const options = [
  {
    id: 'professional',
    icon: LayoutGrid,
    label: 'Professional',
    sub: 'Recruiter-friendly',
    description: 'Clean, fast portfolio with premium design. Every section, instantly accessible.',
    features: ['Instant load', 'All sections & projects', 'Smooth animations'],
    accent: '#6366f1',
    border: 'rgba(99,102,241,0.2)',
    bg: 'rgba(99,102,241,0.06)',
    recommended: true,
  },
  {
    id: 'terminal',
    icon: Terminal,
    label: 'Terminal',
    sub: 'Developer experience',
    description: 'Interactive CLI interface. Navigate the portfolio with commands — built for developers.',
    features: ['Command-driven navigation', 'Keyboard shortcuts', 'Warp-inspired design'],
    accent: '#38bdf8',
    border: 'rgba(56,189,248,0.2)',
    bg: 'rgba(56,189,248,0.05)',
    recommended: false,
  },
];

export default function ExperienceSelector({ onSelect }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: '#0c0c11' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Radial accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 tag tag-indigo mb-5">
            <Sparkles size={10} />
            Portfolio
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-ink-1 mb-2">
            Choose your experience
          </h1>
          <p className="text-ink-2 text-sm">Two ways to explore the same work.</p>
        </motion.div>

        {/* Options */}
        <div className="grid sm:grid-cols-2 gap-4">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.button
                key={opt.id}
                onClick={() => onSelect(opt.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative text-left p-6 rounded-2xl cursor-pointer group"
                style={{ background: opt.bg, border: `1px solid ${opt.border}` }}
              >
                {opt.recommended && (
                  <div
                    className="absolute -top-px left-6 right-6 h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${opt.accent}, transparent)` }}
                  />
                )}
                {opt.recommended && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold px-3 py-0.5 rounded-full"
                    style={{ background: opt.accent, color: '#fff' }}
                  >
                    Recommended
                  </span>
                )}

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${opt.accent}15`, border: `1px solid ${opt.accent}25` }}
                >
                  <Icon size={18} style={{ color: opt.accent }} />
                </div>

                <div className="mb-3">
                  <h3 className="text-base font-semibold text-ink-1">{opt.label}</h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: opt.accent }}>{opt.sub}</p>
                </div>

                <p className="text-sm text-ink-2 leading-relaxed mb-5">{opt.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-ink-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: opt.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: opt.accent }}
                >
                  Enter
                  <ArrowRight size={12} />
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-ink-3 text-xs font-mono mt-7"
        >
          Switch between modes at any time
        </motion.p>
      </div>
    </motion.div>
  );
}
