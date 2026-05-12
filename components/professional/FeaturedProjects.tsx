'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Radio, Shield, GitBranch, Brain, Users, type LucideIcon } from 'lucide-react';
import { featuredProject, featuredProjects, moreProjects, type Project } from '@/data/content';
import ProjectModal from './ProjectModal';

const featureIcons: Record<string, LucideIcon> = {
  'CRDT Conflict Resolution': GitBranch,
  'WebSocket Infrastructure': Radio,
  'Node-Level RBAC':          Shield,
  'Event Sourcing':           GitBranch,
  'AI Text Classification':   Brain,
  'Presence Heatmaps':        Users,
};

export default function FeaturedProjects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} className="section-a section-pad" style={{ background: 'var(--bg-base)' }}>
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

        {/* ── LIGMA flagship ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16,1,0.3,1], delay: 0.08 }}
          className="card mb-5 overflow-hidden"
          style={{ borderColor: 'rgba(99,102,241,0.2)' }}
        >
          {/* Gradient top line */}
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(to right, var(--accent), #818cf8, transparent)' }} />

          {/* Window bar */}
          <div className="flex items-center justify-between px-6 py-3.5"
            style={{ borderBottom: '1px solid var(--line)', background: 'rgba(99,102,241,0.04)' }}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {['bg-red-500/40','bg-yellow-500/40','bg-green-500/40'].map(c =>
                  <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />)}
              </div>
              <span className="font-mono text-xs" style={{ color: 'var(--ink-3)' }}>ligma-dd.vercel.app</span>
            </div>
            <span className="tag tag-indigo">{featuredProject.category}</span>
          </div>

          <div className="grid lg:grid-cols-[3fr_2fr]">
            {/* Content */}
            <div className="p-7 lg:p-9">
              <h3 className="text-5xl font-black tracking-tighter mb-1"
                style={{
                  background: 'linear-gradient(135deg, var(--ink-1) 0%, #a5b4fc 50%, var(--accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                {featuredProject.name}
              </h3>
              <p className="font-mono text-sm mb-4" style={{ color: 'var(--accent)' }}>{featuredProject.fullName}</p>
              <p className="text-sm leading-relaxed max-w-lg mb-5" style={{ color: 'var(--ink-2)' }}>
                {featuredProject.description}
              </p>

              {/* Architecture */}
              <div className="flex items-start gap-2.5 rounded-xl px-4 py-3 mb-5"
                style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <GitBranch size={13} style={{ color: 'var(--ink-3)', marginTop: 2, flexShrink: 0 }} />
                <p className="text-xs" style={{ color: 'var(--ink-3)' }}>{featuredProject.architecture}</p>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-7">
                {featuredProject.tech.map(t => <span key={t} className="chip">{t}</span>)}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                  <ExternalLink size={13} /> Live Demo
                </a>
                <a href={featuredProject.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
                  <Github size={13} /> Source
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div className="p-7 lg:p-9"
              style={{ borderLeft: '1px solid var(--line)', background: 'rgba(0,0,0,0.12)' }}>
              <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: 'var(--ink-3)' }}>
                Engineering Highlights
              </p>
              <div className="space-y-4">
                {featuredProject.highlights.map(h => {
                  const Icon = featureIcons[h.label] ?? Radio;
                  return (
                    <div key={h.label} className="flex gap-3">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)' }}>
                        <Icon size={11} style={{ color: 'var(--accent-light)' }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--ink-1)' }}>{h.label}</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-3)' }}>{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: '1px solid var(--line)' }}>
                <p className="text-xs font-mono mb-1" style={{ color: 'var(--ink-3)' }}>Role</p>
                <p className="text-sm font-medium" style={{ color: 'var(--ink-2)' }}>{featuredProject.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Featured project grid (4 cards) ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={0.15 + i * 0.08} inView={inView}
              onClick={() => setSelectedProject(p)} />
          ))}
        </div>

        {/* ── Show more toggle ── */}
        <div className="text-center">
          <button
            onClick={() => setShowMore(v => !v)}
            className="btn-ghost inline-flex items-center gap-2 mb-4"
          >
            {showMore ? <><ChevronUp size={14} /> Hide</> : <><ChevronDown size={14} /> More Projects ({moreProjects.length})</>}
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {moreProjects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} delay={i * 0.06} inView={showMore}
                      onClick={() => setSelectedProject(p)} compact />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function ProjectCard({
  project, delay, inView, onClick, compact = false,
}: {
  project: Project;
  delay: number;
  inView: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.16,1,0.3,1] }}
      onClick={onClick}
      className="card card-hover cursor-pointer flex flex-col"
      style={{ padding: compact ? '20px' : '24px' }}
    >
      {/* Header badges */}
      <div className="flex items-center justify-between mb-4">
        <span className="tag"
          style={{
            background: `${project.accent}12`,
            border: `1px solid ${project.accent}22`,
            color: project.accent,
          }}>
          {project.category}
        </span>
        {project.badge && <span className="tag tag-amber">{project.badge}</span>}
        {project.event && !project.badge && (
          <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>{project.event}</span>
        )}
      </div>

      <h3 className="text-lg font-bold tracking-tight mb-1" style={{ color: 'var(--ink-1)' }}>{project.name}</h3>
      <p className="text-xs font-mono mb-3" style={{ color: project.accent }}>{project.tagline}</p>
      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--ink-2)' }}>{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, compact ? 4 : 5).map(t => <span key={t} className="chip">{t}</span>)}
        {project.tech.length > (compact ? 4 : 5) && (
          <span className="chip" style={{ color: 'var(--ink-3)' }}>+{project.tech.length - (compact ? 4 : 5)}</span>
        )}
      </div>

      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
        {project.demo && project.demo !== '#' && (
          <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: project.accent }}>
            <ExternalLink size={11} /> Demo
          </span>
        )}
        {project.github && project.github !== '#' && (
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--ink-3)' }}>
            <Github size={11} /> GitHub
          </span>
        )}
        <span className="ml-auto text-xs" style={{ color: 'var(--ink-3)' }}>View details →</span>
      </div>
    </motion.article>
  );
}
