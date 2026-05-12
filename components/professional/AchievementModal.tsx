'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Trophy, Award, FileText, Shield, Star, Medal, Github, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { type Achievement, achievementTypeConfig } from '@/data/achievements';

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

type MediaView = 'cert' | 'shield' | 'shields';

function PdfViewer({ src }: { src: string }) {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid var(--line)' }}>
      <iframe
        src={src}
        className="w-full"
        style={{ height: '260px', background: 'var(--bg-card)' }}
        title="Certificate PDF"
      />
      <div className="flex items-center justify-between px-3 py-2"
        style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)' }}>
        <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>PDF Certificate</span>
        <a href={src} target="_blank" rel="noreferrer" className="btn-ghost text-xs py-1 px-3">
          <ExternalLink size={11} /> Open Full
        </a>
      </div>
    </div>
  );
}

function ImageViewer({ src, alt, downloadName }: { src: string; alt: string; downloadName?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.16,1,0.3,1] }}
      className="w-full rounded-xl overflow-hidden relative"
      style={{ border: '1px solid var(--line)', background: 'var(--bg-card)' }}
    >
      <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2"
          sizes="520px"
          priority
        />
      </div>
      <div className="flex items-center justify-between px-3 py-2"
        style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)' }}>
        <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>{alt}</span>
        <a href={src} download={downloadName} className="btn-ghost text-xs py-1 px-3">
          <Download size={11} /> Download
        </a>
      </div>
    </motion.div>
  );
}

function ShieldGrid({ shields }: { shields: { url: string; label: string }[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      {selected ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-1.5 text-xs mb-3 transition-colors"
            style={{ color: 'var(--accent-light)' }}
          >
            ← Back to collection
          </button>
          <ImageViewer src={selected} alt="Shield" />
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xs font-mono mb-3" style={{ color: 'var(--ink-3)' }}>
            Physical Awards Collection · Click to enlarge
          </p>
          <div className="grid grid-cols-3 gap-2">
            {shields.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setSelected(s.url)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all duration-200"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-dim)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                }}
              >
                <div className="relative w-14 h-14">
                  <Image src={s.url} alt={s.label} fill className="object-contain" sizes="56px" />
                </div>
                <p className="text-[10px] font-mono text-center leading-tight" style={{ color: 'var(--ink-3)' }}>
                  {s.label}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ── Media toggle tab component ── */
function MediaToggle({
  view,
  onChange,
  hasCert,
  hasShield,
  hasShields,
}: {
  view: MediaView;
  onChange: (v: MediaView) => void;
  hasCert: boolean;
  hasShield: boolean;
  hasShields: boolean;
}) {
  const opts: { key: MediaView; label: string }[] = [];
  if (hasCert) opts.push({ key: 'cert', label: 'Certificate' });
  if (hasShield) opts.push({ key: 'shield', label: 'Shield' });
  if (hasShields) opts.push({ key: 'shields', label: 'Collection' });
  if (opts.length < 2) return null;

  return (
    <div className="flex p-1 rounded-xl gap-1" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
      {opts.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className="flex-1 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200"
          style={{
            background: view === key ? 'var(--accent)' : 'transparent',
            color: view === key ? '#fff' : 'var(--ink-2)',
            boxShadow: view === key ? '0 2px 8px rgba(99,102,241,0.35)' : 'none',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

interface Props {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: Props) {
  const [view, setView] = useState<MediaView>('cert');

  // Reset view when achievement changes
  useEffect(() => {
    if (!achievement) return;
    if (achievement.certUrl || achievement.pdfUrl) setView('cert');
    else if (achievement.shieldUrl) setView('shield');
    else if (achievement.groupedShields) setView('shields');
  }, [achievement?.id]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = achievement ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [achievement]);

  return (
    <AnimatePresence>
      {achievement && (() => {
        const cfg = achievementTypeConfig[achievement.type];
        const Icon = typeIcons[achievement.type] ?? Award;
        const hasCert = !!(achievement.certUrl || achievement.pdfUrl);
        const hasShield = !!achievement.shieldUrl;
        const hasShields = !!(achievement.groupedShields?.length);

        return (
          <>
            {/* Backdrop */}
            <motion.div
              key="ach-bg"
              className="fixed inset-0 z-[80]"
              style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(12px)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              key="ach-panel"
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.28, ease: [0.16,1,0.3,1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="glass-panel w-full max-w-lg rounded-2xl overflow-hidden my-auto"
                style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.75), 0 0 0 1px var(--line-strong)' }}
              >
                {/* Accent bar */}
                <div className="h-[3px]" style={{ background: cfg.color }} />

                {/* Header */}
                <div className="flex items-start justify-between p-5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cfg.color}15`, border: `1px solid ${cfg.color}28` }}>
                      <Icon size={18} style={{ color: cfg.color }} />
                    </div>
                    <div>
                      <span className={`tag ${cfg.tagClass}`}>{cfg.label}</span>
                      <p className="text-[11px] font-mono mt-1" style={{ color: 'var(--ink-3)' }}>{achievement.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150 flex-shrink-0"
                    style={{ color: 'var(--ink-3)', background: 'var(--surface)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--surface-hover)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                    }}
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Body */}
                <div className="px-5 pb-5 space-y-4">
                  {/* Title + issuer */}
                  <div>
                    <h2 className="text-lg font-bold leading-tight mb-1" style={{ color: 'var(--ink-1)' }}>
                      {achievement.title}
                    </h2>
                    <p className="text-sm font-mono" style={{ color: cfg.color }}>{achievement.issuer}</p>
                  </div>

                  {/* Media toggle */}
                  <MediaToggle
                    view={view}
                    onChange={setView}
                    hasCert={hasCert}
                    hasShield={hasShield}
                    hasShields={hasShields}
                  />

                  {/* Media area */}
                  <AnimatePresence mode="wait">
                    {view === 'cert' && (
                      <motion.div
                        key="view-cert"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {achievement.pdfUrl
                          ? <PdfViewer src={achievement.pdfUrl} />
                          : achievement.certUrl
                          ? <ImageViewer src={achievement.certUrl} alt="Certificate" downloadName="certificate.png" />
                          : null
                        }
                      </motion.div>
                    )}
                    {view === 'shield' && achievement.shieldUrl && (
                      <motion.div
                        key="view-shield"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ImageViewer src={achievement.shieldUrl} alt="Shield / Trophy" downloadName="shield.png" />
                      </motion.div>
                    )}
                    {view === 'shields' && achievement.groupedShields && (
                      <motion.div
                        key="view-shields"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ShieldGrid shields={achievement.groupedShields} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                    {achievement.description}
                  </p>

                  {/* Tags */}
                  {achievement.tags && achievement.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {achievement.tags.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                  )}

                  {/* Related project */}
                  {achievement.projectName && (
                    <div className="p-3.5 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                      <p className="text-xs font-mono mb-2" style={{ color: 'var(--ink-3)' }}>Related Project</p>
                      <p className="text-sm font-semibold mb-3" style={{ color: 'var(--ink-1)' }}>{achievement.projectName}</p>
                      <div className="flex items-center gap-2">
                        {achievement.projectDemo && (
                          <a href={achievement.projectDemo} target="_blank" rel="noreferrer" className="btn-primary text-xs py-1.5 px-3">
                            <ExternalLink size={11} /> Live Demo
                          </a>
                        )}
                        {achievement.projectGithub && (
                          <a href={achievement.projectGithub} target="_blank" rel="noreferrer" className="btn-ghost text-xs py-1.5 px-3">
                            <Github size={11} /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        );
      })()}
    </AnimatePresence>
  );
}
