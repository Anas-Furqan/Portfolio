'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { type Project } from '@/data/content';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="proj-backdrop"
            className="fixed inset-0 z-[80]"
            style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="proj-modal"
            className="fixed inset-0 z-[90] flex items-center justify-center p-5 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="glass-panel w-full max-w-xl rounded-2xl overflow-hidden my-auto"
              style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px var(--line-strong)' }}
            >
              {/* Color accent bar */}
              <div className="h-[3px]" style={{ background: project.accent }} />

              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-0">
                <div className="flex items-center gap-2">
                  <span className="tag" style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}25`, color: project.accent }}>
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="tag tag-amber">{project.badge}</span>
                  )}
                  {project.event && (
                    <span className="text-xs font-mono" style={{ color: 'var(--ink-3)' }}>{project.event}</span>
                  )}
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
                {/* Project image */}
                {project.image && (
                  <div className="w-full h-44 rounded-xl overflow-hidden relative"
                    style={{ border: '1px solid var(--line)' }}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="560px"
                    />
                  </div>
                )}

                {/* Name + tagline */}
                <div>
                  <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--ink-1)' }}>
                    {project.name}
                  </h2>
                  <p className="text-sm font-mono mt-1" style={{ color: project.accent }}>{project.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div>
                  <p className="text-xs font-mono mb-2" style={{ color: 'var(--ink-3)' }}>Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-1">
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
                      <Github size={13} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
