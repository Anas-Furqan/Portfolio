'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Trophy, Award, FileText, Shield, Github, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { type Achievement, achievementTypeConfig } from '@/data/achievements';

const typeIcons: Record<string, LucideIcon> = {
  'hackathon-win':    Trophy,
  'hackathon-runner': Trophy,
  competition:        Award,
  certificate:        FileText,
  scholarship:        Award,
  recognition:        Shield,
  academic:           FileText,
  group:              Trophy,
};

function CertImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  const isHeic = src.toLowerCase().endsWith('.heic');

  if (err || isHeic) {
    return (
      <div
        className="w-full h-48 rounded-xl flex flex-col items-center justify-center gap-3"
        style={{ background: 'var(--surface)', border: '1px dashed var(--line-strong)' }}
      >
        <FileText size={28} style={{ color: 'var(--ink-3)' }} />
        <div className="text-center">
          <p className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>
            {isHeic ? 'HEIC — Open in Safari or download' : 'Preview unavailable'}
          </p>
        </div>
        <a
          href={src}
          download
          className="btn-ghost text-xs py-1.5 px-3"
        >
          <Download size={11} />
          Download
        </a>
      </div>
    );
  }

  return (
    <div className="w-full h-52 rounded-xl overflow-hidden relative"
      style={{ border: '1px solid var(--line)' }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setErr(true)}
        sizes="500px"
      />
    </div>
  );
}

function PdfEmbed({ src }: { src: string }) {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid var(--line)' }}>
      <iframe
        src={src}
        className="w-full"
        style={{ height: '280px', background: 'var(--bg-card)' }}
        title="Certificate PDF"
      />
      <div className="flex items-center justify-between px-3 py-2"
        style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)' }}>
        <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>PDF Certificate</span>
        <a href={src} target="_blank" rel="noreferrer" className="btn-ghost text-xs py-1 px-3">
          <ExternalLink size={11} />
          Open
        </a>
      </div>
    </div>
  );
}

function ShieldGrid({ shields }: { shields: { url: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-mono mb-3" style={{ color: 'var(--ink-3)' }}>Physical Awards Collection</p>
      <div className="grid grid-cols-3 gap-2">
        {shields.map((s, i) => {
          const [err, setErr] = useState(false);
          const isHeic = s.url.toLowerCase().endsWith('.heic');
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 p-2 rounded-xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
            >
              {!err && !isHeic ? (
                <div className="relative w-12 h-12">
                  <Image src={s.url} alt={s.label} fill className="object-contain"
                    onError={() => setErr(true)} sizes="48px" />
                </div>
              ) : (
                <div className="w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-dim)' }}>
                  <Shield size={20} style={{ color: 'var(--accent-light)' }} />
                </div>
              )}
              <p className="text-[10px] font-mono text-center" style={{ color: 'var(--ink-3)' }}>{s.label}</p>
              {(isHeic || err) && (
                <a href={s.url} download className="text-[9px] font-mono"
                  style={{ color: 'var(--accent-light)' }}>↓ dl</a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface Props {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: Props) {
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

        return (
          <>
            {/* Backdrop */}
            <motion.div
              key="ach-backdrop"
              className="fixed inset-0 z-[80]"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              key="ach-modal"
              className="fixed inset-0 z-[90] flex items-center justify-center p-5 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="glass-panel w-full max-w-lg rounded-2xl overflow-hidden my-auto"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px var(--line-strong)' }}
              >
                {/* Accent top bar */}
                <div className="h-[3px] w-full" style={{ background: cfg.color }} />

                {/* Header */}
                <div className="flex items-start justify-between p-5 pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${cfg.color}15`, border: `1px solid ${cfg.color}25` }}>
                      <Icon size={18} style={{ color: cfg.color }} />
                    </div>
                    <span className={`tag ${cfg.tagClass}`}>{cfg.label}</span>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
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
                <div className="p-5 space-y-4">
                  {/* Title */}
                  <div>
                    <h2 className="text-lg font-bold leading-tight" style={{ color: 'var(--ink-1)' }}>
                      {achievement.title}
                    </h2>
                    <p className="text-sm font-mono mt-0.5" style={{ color: cfg.color }}>{achievement.issuer}</p>
                    <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--ink-3)' }}>{achievement.date}</p>
                  </div>

                  {/* PDF embed */}
                  {achievement.pdfUrl && <PdfEmbed src={achievement.pdfUrl} />}

                  {/* Certificate image */}
                  {achievement.certUrl && !achievement.pdfUrl && (
                    <CertImage src={achievement.certUrl} alt={achievement.title} />
                  )}

                  {/* Shield (single) */}
                  {achievement.shieldUrl && !achievement.groupedShields && (
                    <div className="flex items-center gap-4 p-3 rounded-xl"
                      style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                      <div className="relative w-14 h-14 flex-shrink-0">
                        <ShieldSingle src={achievement.shieldUrl} />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-semibold" style={{ color: 'var(--ink-2)' }}>Physical Shield</p>
                        <a href={achievement.shieldUrl} download
                          className="text-[11px] font-mono" style={{ color: 'var(--accent-light)' }}>
                          Download image
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Grouped shields */}
                  {achievement.groupedShields && (
                    <ShieldGrid shields={achievement.groupedShields} />
                  )}

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

                  {/* Project links */}
                  {achievement.projectName && (
                    <div className="p-3 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                      <p className="text-xs font-mono mb-2" style={{ color: 'var(--ink-3)' }}>Related Project</p>
                      <p className="text-sm font-semibold mb-2" style={{ color: 'var(--ink-1)' }}>{achievement.projectName}</p>
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

                  {/* Download actions */}
                  {(achievement.certUrl || achievement.pdfUrl) && (
                    <div className="flex items-center gap-2 pt-1">
                      {achievement.pdfUrl && (
                        <a href={achievement.pdfUrl} target="_blank" rel="noreferrer" className="btn-ghost text-xs py-1.5 px-3">
                          <ExternalLink size={11} /> Open PDF
                        </a>
                      )}
                      {achievement.certUrl && (
                        <a href={achievement.certUrl} download className="btn-ghost text-xs py-1.5 px-3">
                          <Download size={11} /> Download Cert
                        </a>
                      )}
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

function ShieldSingle({ src }: { src: string }) {
  const [err, setErr] = useState(false);
  const isHeic = src.toLowerCase().endsWith('.heic');

  if (err || isHeic) {
    return (
      <div className="w-14 h-14 flex items-center justify-center rounded-xl"
        style={{ background: 'var(--accent-dim)' }}>
        <Shield size={22} style={{ color: 'var(--accent-light)' }} />
      </div>
    );
  }

  return (
    <Image src={src} alt="Shield" fill className="object-contain"
      onError={() => setErr(true)} sizes="56px" />
  );
}
