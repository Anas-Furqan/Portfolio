'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, FileText, Shield, Star, Medal, type LucideIcon, ArrowUpRight } from 'lucide-react';
import { sortedAchievements, highlightedAchievements, regularAchievements, achievementTypeConfig, type Achievement } from '@/data/achievements';
import AchievementModal from './AchievementModal';

const typeIcons: Record<string, LucideIcon> = {
  'hackathon-win':    Trophy,
  'hackathon-runner': Trophy,
  competition:        Award,
  certificate:        FileText,
  scholarship:        Star,
  recognition:        Shield,
  academic:           FileText,
  group:              Medal,
};

function AchievementCard({ a, onClick, delay, large = false }: {
  a: Achievement;
  onClick: () => void;
  delay: number;
  large?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const cfg = achievementTypeConfig[a.type];
  const Icon = typeIcons[a.type] ?? Award;

  if (large) {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay, duration: 0.55, ease: [0.16,1,0.3,1] }}
        onClick={onClick}
        className="card card-hover cursor-pointer group p-6"
        style={{ borderColor: `${cfg.color}1a` }}
      >
        {/* Top accent */}
        <div className="h-px w-16 mb-5 rounded-full" style={{ background: cfg.color }} />

        <div className="flex items-start justify-between mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${cfg.color}12`, border: `1px solid ${cfg.color}22` }}>
            <Icon size={20} style={{ color: cfg.color }} />
          </div>
          <span className={`tag ${cfg.tagClass}`}>{cfg.label}</span>
        </div>

        <h3 className="text-base font-bold leading-snug mb-1" style={{ color: 'var(--ink-1)' }}>{a.title}</h3>
        <p className="text-xs font-mono mb-2" style={{ color: cfg.color }}>{a.issuer}</p>
        <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: 'var(--ink-2)' }}>{a.description}</p>

        {a.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {a.tags.slice(0,3).map(t => <span key={t} className="chip text-[11px]">{t}</span>)}
          </div>
        )}

        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--line)' }}>
          <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>{a.date}</span>
          <span className="flex items-center gap-1 text-xs transition-colors group-hover:text-white"
            style={{ color: cfg.color }}>
            View details <ArrowUpRight size={11} />
          </span>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      onClick={onClick}
      className="card card-hover cursor-pointer p-4"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${cfg.color}10`, border: `1px solid ${cfg.color}18` }}>
          <Icon size={14} style={{ color: cfg.color }} />
        </div>
        <span className="text-[10px] font-mono" style={{ color: 'var(--ink-3)' }}>{a.date}</span>
      </div>
      <h4 className="text-sm font-semibold leading-snug mb-1 line-clamp-2" style={{ color: 'var(--ink-1)' }}>{a.title}</h4>
      <p className="text-[11px] font-mono line-clamp-1" style={{ color: 'var(--ink-3)' }}>{a.issuer}</p>
    </motion.article>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section id="awards" ref={ref} className="section-b section-pad" style={{ background: 'var(--bg-elevated)' }}>
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="label mb-3">Recognition & Awards</p>
          <h2 className="heading">Achievements</h2>
          <p className="text-sm mt-2" style={{ color: 'var(--ink-2)' }}>
            Click any card to view certificate, shield, or full details.
          </p>
        </motion.div>

        {/* Highlighted — large cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {highlightedAchievements.map((a, i) => (
            <AchievementCard
              key={a.id}
              a={a}
              onClick={() => setSelected(a)}
              delay={i * 0.08}
              large
            />
          ))}
        </div>

        {/* Regular — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {regularAchievements.map((a, i) => (
            <AchievementCard
              key={a.id}
              a={a}
              onClick={() => setSelected(a)}
              delay={0.3 + i * 0.06}
            />
          ))}

          {/* More coming placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="card p-4 flex flex-col items-center justify-center text-center"
            style={{ borderStyle: 'dashed', minHeight: '110px' }}
          >
            <Trophy size={18} className="mb-2" style={{ color: 'var(--ink-3)' }} />
            <p className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>More to add</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--ink-3)' }}>Certs · Shields · Trophies</p>
          </motion.div>
        </div>
      </div>

      <AchievementModal achievement={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
