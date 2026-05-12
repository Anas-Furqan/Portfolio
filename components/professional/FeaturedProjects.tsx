'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Radio, Shield, GitBranch, Brain, Users, type LucideIcon } from 'lucide-react';
import { featuredProject, projects } from '@/data/content';

const featureIcons: Record<string, LucideIcon> = {
  'CRDT Conflict Resolution': GitBranch,
  'WebSocket Infrastructure': Radio,
  'Node-Level RBAC': Shield,
  'Event Sourcing': GitBranch,
  'AI Text Classification': Brain,
  'Presence Heatmaps': Users,
};

const projectAccentConfig: Record<string, { color: string; tagClass: string }> = {
  'AI / 3D':        { color: '#818cf8', tagClass: 'tag-indigo'  },
  'Web3 / Blockchain': { color: '#38bdf8', tagClass: 'tag-cyan' },
};

export default function FeaturedProjects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" ref={ref} className="section-a section-pad">
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="label mb-3">Projects</p>
          <h2 className="heading">Work that ships</h2>
        </motion.div>

        {/* ── FLAGSHIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.1 }}
          className="card mb-5 overflow-hidden"
          style={{ borderColor: 'rgba(99,102,241,0.2)' }}
        >
          {/* Top accent line */}
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, #6366f1, #818cf8, transparent)' }} />

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-3.5"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(99,102,241,0.04)' }}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {['bg-red-500/40','bg-yellow-500/40','bg-green-500/40'].map(c => (
                  <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <span className="font-mono text-xs text-ink-3">ligma-dd.vercel.app</span>
            </div>
            <span className="tag tag-indigo">Flagship · DevDay Hackathon</span>
          </div>

          <div className="grid lg:grid-cols-[3fr_2fr]">
            {/* Left */}
            <div className="p-7 lg:p-9">
              <div className="mb-6">
                <h3 className="text-5xl font-black tracking-tighter mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #eeeef5 0%, #a5b4fc 55%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {featuredProject.name}
                </h3>
                <p className="font-mono text-sm" style={{ color: '#6366f1' }}>{featuredProject.fullName}</p>
              </div>

              <p className="text-ink-2 text-sm leading-relaxed max-w-lg mb-6">{featuredProject.description}</p>

              {/* Architecture note */}
              <div className="flex items-start gap-2.5 rounded-xl px-4 py-3 mb-6"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <GitBranch size={13} className="text-ink-3 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-ink-3">{featuredProject.architecture}</p>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-7">
                {featuredProject.tech.map(t => <span key={t} className="chip">{t}</span>)}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <a href={featuredProject.demo} target="_blank" rel="noreferrer"
                  className="btn-primary text-sm">
                  <ExternalLink size={13} />
                  Live Demo
                </a>
                <a href={featuredProject.github} target="_blank" rel="noreferrer"
                  className="btn-ghost text-sm">
                  <Github size={13} />
                  Source
                </a>
              </div>
            </div>

            {/* Right: highlights */}
            <div className="p-7 lg:p-9"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
              <p className="text-xs font-mono text-ink-3 tracking-widest uppercase mb-5">Engineering Highlights</p>
              <div className="space-y-4">
                {featuredProject.highlights.map(h => {
                  const Icon = featureIcons[h.label] ?? Radio;
                  return (
                    <div key={h.label} className="flex gap-3">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}>
                        <Icon size={11} style={{ color: '#818cf8' }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink-1 mb-0.5">{h.label}</p>
                        <p className="text-xs text-ink-3 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-xs font-mono text-ink-3 mb-1">Role</p>
                <p className="text-sm font-medium text-ink-2">{featuredProject.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Secondary projects grid ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {projects.map((p, i) => {
            const cfg = projectAccentConfig[p.category] ?? projectAccentConfig['AI / 3D'];
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.16,1,0.3,1] }}
                className="card card-hover p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`tag ${cfg.tagClass}`}>{p.category}</span>
                  {p.event && <span className="text-xs text-ink-3 font-mono">{p.event}</span>}
                </div>

                <h3 className="text-xl font-bold text-ink-1 mb-1 tracking-tight">{p.name}</h3>
                <p className="text-xs font-mono mb-3" style={{ color: cfg.color }}>{p.tagline}</p>
                <p className="text-sm text-ink-2 leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.slice(0, 5).map(t => <span key={t} className="chip">{t}</span>)}
                  {p.tech.length > 5 && <span className="chip text-ink-3">+{p.tech.length - 5}</span>}
                </div>

                <div className="flex items-center gap-2.5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150"
                    style={{ color: cfg.color }}>
                    <ExternalLink size={11} /> Live Demo
                  </a>
                  <span className="text-ink-3">·</span>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-ink-3 hover:text-ink-2 transition-colors duration-150">
                    <Github size={11} /> GitHub
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Show more toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={() => setShowMore(v => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-ink-2 hover:text-ink-1 transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {showMore ? (
              <><ChevronUp size={14} /> Show less</>
            ) : (
              <><ChevronDown size={14} /> More on GitHub</>
            )}
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
                className="overflow-hidden mt-4"
              >
                <a
                  href="https://github.com/Anas-Furqan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 btn-ghost"
                >
                  <Github size={14} />
                  github.com/Anas-Furqan
                  <ExternalLink size={11} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
