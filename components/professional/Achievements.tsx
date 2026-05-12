'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, BookOpen, Star, Medal, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { achievements, achievementTypeConfig, type Achievement } from '@/data/achievements';
import AchievementModal from './AchievementModal';

const typeIcons: Record<string, LucideIcon> = {
  certificate:  BookOpen,
  award:        Award,
  scholarship:  Star,
  competition:  Trophy,
  recognition:  Medal,
};

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [selected, setSelected] = useState<Achievement | null>(null);

  const highlighted = achievements.filter(a => a.highlighted);
  const rest = achievements.filter(a => !a.highlighted);

  return (
    <section id="awards" ref={ref} className="section-b section-pad">
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="label mb-3">Achievements</p>
          <h2 className="heading">Recognition</h2>
          <p className="text-sm text-ink-2 mt-2">Click any card to view certificate or details.</p>
        </motion.div>

        {/* Highlighted achievements — larger cards */}
        {highlighted.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {highlighted.map((a, i) => {
              const cfg = achievementTypeConfig[a.type];
              const Icon = typeIcons[a.type] ?? Award;
              return (
                <motion.button
                  key={a.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16,1,0.3,1] }}
                  onClick={() => setSelected(a)}
                  className="card card-hover text-left p-6 group cursor-pointer"
                  style={{ borderColor: `${cfg.color}20` }}
                >
                  {/* Top accent */}
                  <div className="h-px w-16 mb-4 rounded-full" style={{ background: cfg.color }} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${cfg.color}12`, border: `1px solid ${cfg.color}20` }}>
                      <Icon size={18} style={{ color: cfg.color }} />
                    </div>
                    <span className={`tag ${cfg.tagClass}`}>{cfg.label}</span>
                  </div>

                  <h3 className="text-base font-bold text-ink-1 mb-1 leading-snug">{a.title}</h3>
                  <p className="text-xs font-mono mb-3" style={{ color: cfg.color }}>{a.issuer}</p>
                  <p className="text-sm text-ink-2 leading-relaxed line-clamp-2 mb-4">{a.description}</p>

                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="text-xs font-mono text-ink-3">{a.date}</span>
                    <span className="flex items-center gap-1 text-xs transition-colors duration-150 group-hover:text-ink-1"
                      style={{ color: cfg.color }}>
                      View details
                      <ArrowUpRight size={11} />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Rest — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {rest.map((a, i) => {
            const cfg = achievementTypeConfig[a.type];
            const Icon = typeIcons[a.type] ?? Award;
            return (
              <motion.button
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: [0.16,1,0.3,1] }}
                onClick={() => setSelected(a)}
                className="card card-hover text-left p-4 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${cfg.color}10`, border: `1px solid ${cfg.color}18` }}>
                    <Icon size={14} style={{ color: cfg.color }} />
                  </div>
                  <span className="text-[10px] font-mono text-ink-3">{a.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-ink-1 mb-1 leading-snug line-clamp-2">{a.title}</h4>
                <p className="text-[11px] font-mono text-ink-3 line-clamp-1">{a.issuer}</p>
              </motion.button>
            );
          })}

          {/* "More coming" placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="card p-4 flex flex-col items-center justify-center text-center"
            style={{ borderStyle: 'dashed', minHeight: '120px' }}
          >
            <Trophy size={18} className="text-ink-3 mb-2" />
            <p className="text-xs text-ink-3 font-mono">More coming</p>
            <p className="text-[10px] text-ink-3 mt-0.5">Certs · Shields · Trophies</p>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AchievementModal achievement={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
