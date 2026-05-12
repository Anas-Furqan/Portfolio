'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/data/content';

const roles = personalInfo.roles;

function useTypewriter(words: string[], speed = 75, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[wi];
    let t: ReturnType<typeof setTimeout>;
    if (!del && ci < cur.length) {
      t = setTimeout(() => { setCi(c => c + 1); setDisplay(cur.slice(0, ci + 1)); }, speed);
    } else if (!del && ci === cur.length) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && ci > 0) {
      t = setTimeout(() => { setCi(c => c - 1); setDisplay(cur.slice(0, ci - 1)); }, speed / 2.2);
    } else {
      setDel(false);
      setWi(w => (w + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } } };

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section id="hero" className="section-a relative min-h-screen flex items-center noise-bg overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" style={{ backgroundSize: '28px 28px' }} />

      {/* Top accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.12) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(56,189,248,0.06) 0%, transparent 65%)' }} />

      <div className="wrap relative z-10 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">
          {/* ── Left: Content ── */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Status */}
            <motion.div variants={item} className="mb-7">
              <span className="tag tag-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="display mb-4">
              {personalInfo.name.split(' ')[0]}<br />
              <span style={{
                background: 'linear-gradient(135deg, #eeeef5 30%, #818cf8 70%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {personalInfo.name.split(' ')[1]}
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={item} className="flex items-center gap-2.5 mb-6 h-8">
              <Terminal size={15} style={{ color: '#6366f1', flexShrink: 0 }} />
              <span className="font-mono text-base" style={{ color: '#818cf8' }}>
                {role}
                <span className="cursor-blink ml-0.5" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="subheading max-w-lg mb-8 leading-relaxed">
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-10">
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
                <ArrowDown size={14} />
              </button>
              <a href={`mailto:${personalInfo.email}`} className="btn-ghost">
                <Mail size={14} />
                Get in Touch
              </a>
            </motion.div>

            {/* Location + socials */}
            <motion.div variants={item} className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-sm text-ink-3">
                <MapPin size={12} />
                {personalInfo.location}
              </span>
              <div className="flex items-center gap-2">
                <a href={personalInfo.github} target="_blank" rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-2 hover:text-ink-1 hover:bg-white/6 transition-all duration-150">
                  <Github size={15} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-2 hover:text-ink-1 hover:bg-white/6 transition-all duration-150">
                  <Linkedin size={15} />
                </a>
                <a href={`mailto:${personalInfo.email}`}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-2 hover:text-ink-1 hover:bg-white/6 transition-all duration-150">
                  <Mail size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />

            {/* Photo frame */}
            <div className="relative" style={{ padding: '2px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(99,102,241,0.5) 0%, rgba(56,189,248,0.3) 50%, rgba(99,102,241,0.2) 100%)' }}>
              <div className="relative w-[340px] h-[380px] rounded-[22px] overflow-hidden" style={{ background: '#16161f' }}>
                <Image
                  src="/pic2.jpg"
                  alt="Anas Furqan"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="340px"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 inset-x-0 h-24"
                  style={{ background: 'linear-gradient(to top, #16161f 0%, transparent 100%)' }} />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-10 card px-3 py-2"
              style={{ borderRadius: '10px' }}
            >
              <p className="text-xs font-mono text-accent-light">Hackathon Lead</p>
              <p className="text-[10px] text-ink-3">ACM NUCES</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-6 bottom-16 card px-3 py-2"
              style={{ borderRadius: '10px' }}
            >
              <p className="text-xs font-mono" style={{ color: '#38bdf8' }}>FAST-NUCES</p>
              <p className="text-[10px] text-ink-3">CS — 2025</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-wrap items-center gap-8 mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { n: '3+', l: 'Hackathons led' },
            { n: '3', l: 'Production apps' },
            { n: '100%', l: 'Merit scholarship' },
            { n: '2nd', l: 'BIEK Karachi' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-xl font-bold text-ink-1">{s.n}</div>
              <div className="text-xs text-ink-3 mt-0.5">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={13} className="text-ink-3" />
        </motion.div>
        <span className="text-[10px] font-mono text-ink-3 tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
