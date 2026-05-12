'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Briefcase, Trophy, GraduationCap, type LucideIcon } from 'lucide-react';
import { education, experiences } from '@/data/content';

const expTypeIcon: Record<string, LucideIcon> = {
  Leadership: Trophy,
  Freelance:  Briefcase,
  Internship: GraduationCap,
};

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

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
                      {/* Timeline dot */}
                      <div className="relative hidden md:flex flex-col items-center flex-shrink-0 pt-0.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center z-10"
                          style={{
                            background: exp.current ? `${exp.color}18` : 'var(--surface)',
                            border: `1px solid ${exp.current ? exp.color + '45' : 'var(--line)'}`,
                          }}>
                          <Icon size={12} style={{ color: exp.color }} />
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 card p-5 transition-all duration-200"
                        style={{ cursor: 'default' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line-strong)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'; }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="text-sm font-semibold" style={{ color: 'var(--ink-1)' }}>{exp.role}</p>
                            <p className="text-xs font-medium mt-0.5 font-mono" style={{ color: exp.color }}>{exp.org}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                              style={{
                                background: `${exp.color}12`,
                                border: `1px solid ${exp.color}22`,
                                color: exp.color,
                              }}>
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
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                  className="card p-5"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--ink-1)' }}>{edu.degree}</p>
                      <p className="text-xs font-mono mt-0.5" style={{ color: edu.color }}>{edu.institution}</p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md flex-shrink-0"
                      style={{
                        background: edu.status === 'In Progress' ? 'rgba(52,211,153,0.1)' : 'var(--surface)',
                        border: edu.status === 'In Progress' ? '1px solid rgba(52,211,153,0.2)' : '1px solid var(--line)',
                        color: edu.status === 'In Progress' ? '#34d399' : 'var(--ink-3)',
                      }}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono mb-1.5" style={{ color: 'var(--ink-3)' }}>{edu.period}</p>
                  {edu.note && <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-2)' }}>{edu.note}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
