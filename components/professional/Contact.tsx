'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/content';

const socials = [
  { label: 'GitHub',    handle: '@Anas-Furqan',       href: personalInfo.github,   icon: Github,        accent: '#eeeef5' },
  { label: 'LinkedIn',  handle: '/in/anas-furqan',    href: personalInfo.linkedin, icon: Linkedin,      accent: '#0a66c2' },
  { label: 'WhatsApp',  handle: '+92 317 4724801',    href: personalInfo.whatsapp, icon: MessageCircle, accent: '#25d366' },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="section-b section-pad relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />

      <div className="wrap relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="label mb-3">Contact</p>
          <h2 className="heading mb-4">Let&apos;s build something</h2>
          <p className="subheading max-w-sm mx-auto text-base">
            Open to interesting roles, hackathon collabs, and backend / full-stack opportunities.
          </p>
        </motion.div>

        {/* Email block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.16,1,0.3,1] }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="card p-5 flex items-center justify-between gap-3"
            style={{ borderColor: 'rgba(99,102,241,0.2)', background: 'rgba(99,102,241,0.05)' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}>
                <Mail size={15} style={{ color: '#818cf8' }} />
              </div>
              <div>
                <p className="text-[11px] font-mono text-ink-3 mb-0.5">Email</p>
                <p className="text-sm font-medium text-ink-1">{personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={copy}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-150"
                style={{
                  background: copied ? 'rgba(52,211,153,0.12)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${copied ? 'rgba(52,211,153,0.25)' : 'rgba(255,255,255,0.08)'}`,
                  color: copied ? '#34d399' : '#9191a8',
                }}
              >
                {copied ? <><Check size={11} />Copied</> : <><Copy size={11} />Copy</>}
              </button>
              <a href={`mailto:${personalInfo.email}`} className="btn-primary text-xs py-1.5 px-3">
                Send
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid sm:grid-cols-3 gap-3 max-w-xl mx-auto"
        >
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}
                className="card card-hover flex flex-col items-center gap-2.5 p-5 text-center"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <Icon size={16} className="text-ink-2" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-1">{s.label}</p>
                  <p className="text-[11px] font-mono text-ink-3 mt-0.5">{s.handle}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="text-center mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)', color: '#a5b4fc' }}>
              AF
            </div>
            <span className="text-sm font-semibold text-ink-1">Anas Furqan</span>
          </div>
          <p className="text-xs font-mono text-ink-3">Next.js · Framer Motion · Tailwind CSS</p>
          <p className="text-xs font-mono text-ink-3 mt-1">Karachi, Pakistan · {new Date().getFullYear()}</p>
        </motion.div>
      </div>
    </section>
  );
}
