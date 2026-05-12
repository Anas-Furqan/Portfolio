'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Award, Trophy, BookOpen, Star, Medal, type LucideIcon } from 'lucide-react';
import { type Achievement, achievementTypeConfig } from '@/data/achievements';

const typeIcons: Record<string, LucideIcon> = {
  certificate:  BookOpen,
  award:        Award,
  scholarship:  Star,
  competition:  Trophy,
  recognition:  Medal,
};

interface Props {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (achievement) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [achievement]);

  return (
    <AnimatePresence>
      {achievement && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[80]"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-[90] flex items-center justify-center p-5"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="glass-panel w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)' }}
            >
              {/* Top accent */}
              {(() => {
                const cfg = achievementTypeConfig[achievement.type];
                const Icon = typeIcons[achievement.type] ?? Award;
                return (
                  <>
                    <div className="h-1 w-full" style={{ background: cfg.color }} />

                    {/* Header */}
                    <div className="flex items-start justify-between p-6 pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${cfg.color}15`, border: `1px solid ${cfg.color}25` }}>
                          <Icon size={18} style={{ color: cfg.color }} />
                        </div>
                        <span className={`tag ${cfg.tagClass}`}>{cfg.label}</span>
                      </div>
                      <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-3 hover:text-ink-1 hover:bg-white/8 transition-all duration-150"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Image / Preview area */}
                    <div className="px-6 pt-5">
                      {achievement.imageUrl ? (
                        <div className="w-full h-48 rounded-xl overflow-hidden mb-5"
                          style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-full h-32 rounded-xl flex flex-col items-center justify-center mb-5"
                          style={{ background: `${cfg.color}08`, border: `1px dashed ${cfg.color}25` }}>
                          <Icon size={28} style={{ color: cfg.color, opacity: 0.4 }} />
                          <p className="text-xs font-mono text-ink-3 mt-2">Certificate image coming soon</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6">
                      <h2 className="text-xl font-bold text-ink-1 mb-1 leading-tight">{achievement.title}</h2>
                      <p className="text-sm font-mono mb-1" style={{ color: cfg.color }}>{achievement.issuer}</p>
                      <p className="text-xs text-ink-3 font-mono mb-4">{achievement.date}</p>
                      <p className="text-sm text-ink-2 leading-relaxed mb-5">{achievement.description}</p>

                      {/* Tags */}
                      {achievement.tags && achievement.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {achievement.tags.map(t => (
                            <span key={t} className="chip">{t}</span>
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        {achievement.pdfUrl && (
                          <a href={achievement.pdfUrl} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                            <Download size={12} />
                            Download PDF
                          </a>
                        )}
                        {achievement.imageUrl && (
                          <a href={achievement.imageUrl} target="_blank" rel="noreferrer" className="btn-ghost text-xs">
                            <ExternalLink size={12} />
                            View Full
                          </a>
                        )}
                        {!achievement.pdfUrl && !achievement.imageUrl && (
                          <span className="text-xs text-ink-3 font-mono">Certificate files will be added soon</span>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
