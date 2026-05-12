'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '@/data/content';

const categoryMeta: Record<string, { color: string; bg: string; border: string }> = {
  Frontend:    { color: '#818cf8', bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.18)'  },
  'Real-Time': { color: '#38bdf8', bg: 'rgba(56,189,248,0.07)',  border: 'rgba(56,189,248,0.18)'  },
  Backend:     { color: '#34d399', bg: 'rgba(52,211,153,0.07)',  border: 'rgba(52,211,153,0.18)'  },
  Database:    { color: '#fbbf24', bg: 'rgba(251,191,36,0.07)',  border: 'rgba(251,191,36,0.18)'  },
  Blockchain:  { color: '#c084fc', bg: 'rgba(192,132,252,0.07)', border: 'rgba(192,132,252,0.18)' },
  Animation:   { color: '#f472b6', bg: 'rgba(244,114,182,0.07)', border: 'rgba(244,114,182,0.18)' },
};

const allCats = Object.keys(techStack);

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [active, setActive] = useState<string | null>(null);

  const displayed = active ? [active] : allCats;

  return (
    <section id="skills" ref={ref} className="section-b section-pad">
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="label mb-3">Tech Stack</p>
            <h2 className="heading">What I build with</h2>
            <p className="text-sm text-ink-2 mt-2">Real technologies from production projects — no filler.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActive(null)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150"
              style={{
                background: active === null ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${active === null ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.08)'}`,
                color: active === null ? '#a5b4fc' : '#9191a8',
              }}
            >
              All
            </button>
            {allCats.map(cat => {
              const m = categoryMeta[cat];
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(isActive ? null : cat)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150"
                  style={{
                    background: isActive ? m.bg : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isActive ? m.border : 'rgba(255,255,255,0.08)'}`,
                    color: isActive ? m.color : '#9191a8',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Category grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayed.map((cat, ci) => {
            const m = categoryMeta[cat] ?? categoryMeta.Frontend;
            const items = techStack[cat as keyof typeof techStack] ?? [];
            return (
              <motion.div
                key={cat}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.06, duration: 0.5, ease: [0.16,1,0.3,1] }}
                className="card p-5"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-1.5 h-6 rounded-full" style={{ background: m.color }} />
                  <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: m.color }}>
                    {cat}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span
                      key={item.name}
                      className="chip"
                      style={{ cursor: 'default' }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-xs font-mono text-ink-3 mt-8"
        >
          Extracted from production repos — not a wishlist
        </motion.p>
      </div>
    </section>
  );
}
