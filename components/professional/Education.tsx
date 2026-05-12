'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Trophy, GraduationCap, X, Download, ExternalLink, FileText, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { education, experiences } from '@/data/content';

const expTypeIcon: Record<string, LucideIcon> = {
  Leadership: Trophy,
  Freelance:  Briefcase,
  Internship: GraduationCap,
};

/* ── Diploma documents ── */
interface DiplomaDoc { label: string; certUrl?: string; pdfUrl?: string; }

const diplomaDocs: Record<string, DiplomaDoc> = {
  'Aptech Learning Center': {
    label: 'Diploma Certificate — Distinction',
    certUrl: '/certificates/aptech-diploma.png',
  },
  'Bahria College Karsaz': {
    label: '1st Year Certificate',
    certUrl: '/certificates/1st-year.png',
  },
  'FAST-NUCES': {
    label: 'Merit Scholarship Certificate',
    certUrl: '/certificates/merit-scholarship.png',
  },
};

function DiplomaModal({ edu, onClose }: { edu: typeof education[0] | null; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = edu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [edu]);

  const doc = edu ? diplomaDocs[edu.institution] : null;

  return (
    <AnimatePresence>
      {edu && doc && (
        <>
          <motion.div
            key="diploma-bg"
            className="fixed inset-0 z-[80]"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />
          <motion.div
            key="diploma-panel"
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28, ease: [0.16,1,0.3,1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="glass-panel w-full max-w-md rounded-2xl overflow-hidden my-auto"
              style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px var(--line-strong)' }}
            >
              <div className="h-[3px]" style={{ background: edu.color }} />
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--ink-1)' }}>{edu.degree}</h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: edu.color }}>{edu.institution}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
                  style={{ color: 'var(--ink-3)', background: 'var(--surface)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)'; }}
                >
                  <X size={15} />
                </button>
              </div>

              <div className="px-4 pb-4 space-y-4">
                <p className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>{doc.label}</p>

                {doc.certUrl && (
                  <div className="rounded-xl overflow-hidden relative"
                    style={{ border: '1px solid var(--line)' }}>
                    <div className="relative" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={doc.certUrl}
                        alt={doc.label}
                        fill
                        className="object-contain p-2"
                        sizes="400px"
                        priority
                      />
                    </div>
                    <div className="flex items-center justify-between px-3 py-2"
                      style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)' }}>
                      <p className="text-xs" style={{ color: 'var(--ink-3)' }}>{edu.period}</p>
                      <a href={doc.certUrl} download className="btn-ghost text-xs py-1 px-3">
                        <Download size={11} /> Download
                      </a>
                    </div>
                  </div>
                )}

                {edu.note && (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{edu.note}</p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [diplomaEdu, setDiplomaEdu] = useState<typeof education[0] | null>(null);

  return (
    <section id="education" ref={ref} className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="label mb-3">Background</p>
          <h2 className="heading">Education & Experience</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10">
          {/* ── Experience timeline ── */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-7" style={{ color: 'var(--ink-3)' }}>
              Leadership & Work
            </p>
            <div className="relative">
              <div className="absolute left-[13px] top-0 bottom-8 w-px hidden md:block"
                style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.04))' }} />
              <div className="space-y-4">
                {experiences.map((exp, i) => {
                  const Icon = expTypeIcon[exp.type] ?? Briefcase;
                  return (
                    <motion.div
                      key={`${exp.org}-${i}`}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16,1,0.3,1] }}
                      className="flex gap-4"
                    >
                      <div className="relative hidden md:flex flex-col items-center flex-shrink-0 pt-0.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center z-10"
                          style={{
                            background: exp.current ? `${exp.color}18` : 'var(--surface)',
                            border: `1px solid ${exp.current ? exp.color + '45' : 'var(--line)'}`,
                          }}>
                          <Icon size={12} style={{ color: exp.color }} />
                        </div>
                      </div>

                      <div className="flex-1 card p-5"
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line-strong)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'; }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="text-sm font-semibold" style={{ color: 'var(--ink-1)' }}>{exp.role}</p>
                            <p className="text-xs font-mono mt-0.5" style={{ color: exp.color }}>{exp.org}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                              style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}22`, color: exp.color }}>
                              {exp.type}
                            </span>
                            {exp.current && (
                              <span className="flex items-center gap-1 text-[11px] font-mono" style={{ color: '#34d399' }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>{exp.period}</span>
                          <span style={{ color: 'var(--ink-3)' }}>·</span>
                          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--ink-3)' }}>
                            <MapPin size={10} />{exp.location}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {exp.points.map((p, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--ink-2)' }}>
                              <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: exp.color }} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Education cards ── */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-7" style={{ color: 'var(--ink-3)' }}>
              Education
            </p>
            <div className="space-y-3">
              {education.map((edu, i) => {
                const hasDoc = !!diplomaDocs[edu.institution];
                return (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                    className={`card p-5 ${hasDoc ? 'card-hover' : ''}`}
                    onClick={() => hasDoc && setDiplomaEdu(edu)}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--ink-1)' }}>{edu.degree}</p>
                        <p className="text-xs font-mono mt-0.5" style={{ color: edu.color }}>{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                          style={{
                            background: edu.status === 'In Progress' ? 'rgba(52,211,153,0.1)' : 'var(--surface)',
                            border: edu.status === 'In Progress' ? '1px solid rgba(52,211,153,0.2)' : '1px solid var(--line)',
                            color: edu.status === 'In Progress' ? '#34d399' : 'var(--ink-3)',
                          }}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-mono mb-2" style={{ color: 'var(--ink-3)' }}>{edu.period}</p>
                    {edu.note && <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--ink-2)' }}>{edu.note}</p>}

                    {/* View diploma button */}
                    {hasDoc && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <FileText size={11} style={{ color: edu.color }} />
                        <span className="text-[11px] font-mono" style={{ color: edu.color }}>
                          View Certificate →
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <DiplomaModal edu={diplomaEdu} onClose={() => setDiplomaEdu(null)} />
    </section>
  );
}
