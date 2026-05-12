'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/data/content';

const roles = personalInfo.roles;

function useTypewriter(words: string[], speed = 75, pause = 2000) {
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
      t = setTimeout(() => { setCi(c => c - 1); setDisplay(cur.slice(0, ci - 1)); }, speed / 2.4);
    } else {
      setDel(false);
      setWi(w => (w + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } },
};

/* ── Floating tags config — positioned relative to photo area ── */
const floatingTags = [
  {
    text: 'Merit Scholar',
    color: '#34d399',
    sub: 'FAST-NUCES',
    style: { top: '4%', left: '-30%' },
    anim: { y: [0, -8, 0], x: [0, 3, 0] },
    duration: 4.5,
    delay: 0,
  },
  {
    text: '🏆 Hackathon Winner',
    color: '#fbbf24',
    sub: 'AI FEST · NED',
    style: { top: '22%', right: '-26%' },
    anim: { y: [0, 7, 0], x: [0, -3, 0] },
    duration: 5.2,
    delay: 0.7,
  },
  {
    text: 'Board Topper',
    color: '#818cf8',
    sub: 'BIEK Karachi',
    style: { bottom: '30%', left: '-32%' },
    anim: { y: [0, 6, 0], x: [0, 4, 0] },
    duration: 4.8,
    delay: 1.2,
  },
  {
    text: 'Hackathon Lead',
    color: '#38bdf8',
    sub: "DevDay · ACM NUCES",
    style: { bottom: '10%', right: '-24%' },
    anim: { y: [0, -6, 0], x: [0, -3, 0] },
    duration: 4.2,
    delay: 0.4,
  },
];

interface FloatingTagProps {
  text: string;
  color: string;
  sub: string;
  style: React.CSSProperties;
  anim: { y: number[]; x: number[] };
  duration: number;
  delay: number;
}

function FloatingTag({ text, color, sub, style, anim, duration, delay }: FloatingTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.6, duration: 0.5, ease: [0.16,1,0.3,1] }}
      className="absolute"
      style={style}
    >
      <motion.div
        animate={anim}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        className="card px-3 py-2.5 shadow-lg cursor-default select-none"
        style={{
          borderRadius: '12px',
          minWidth: '130px',
          boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${color}20`,
        }}
      >
        <p className="text-[11px] font-semibold leading-tight" style={{ color }}>
          {text}
        </p>
        <p className="text-[10px] font-mono mt-0.5 leading-tight" style={{ color: 'var(--ink-3)' }}>
          {sub}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Corner glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(56,189,248,0.07) 0%, transparent 60%)' }} />

      <div className="wrap relative z-10 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_450px] gap-14 xl:gap-20 items-center">

          {/* ── Left: Content ── */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-7">
              <span className="tag tag-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 variants={item} className="display mb-4">
              <span style={{ color: 'var(--ink-1)' }}>Anas</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--ink-1) 20%, var(--accent-light) 60%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Furqan
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={item} className="flex items-center gap-2.5 mb-6 h-8">
              <Terminal size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span className="font-mono text-base" style={{ color: 'var(--accent-light)' }}>
                {role}
                <span className="cursor-blink" />
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
                View Work <ArrowDown size={14} />
              </button>
              <a href={`mailto:${personalInfo.email}`} className="btn-ghost">
                <Mail size={14} /> Get in Touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--ink-3)' }}>
                <MapPin size={12} />{personalInfo.location}
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { href: personalInfo.github,  Icon: Github,   label: 'GitHub' },
                  { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
                    style={{ color: 'var(--ink-2)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--ink-1)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile + floating tags ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Glow */}
            <div className="absolute inset-8 rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />

            {/* Photo with gradient border */}
            <div
              className="relative"
              style={{
                padding: '2px',
                borderRadius: '24px',
                background: 'linear-gradient(140deg, rgba(99,102,241,0.65) 0%, rgba(56,189,248,0.45) 50%, rgba(99,102,241,0.35) 100%)',
              }}
            >
              <div
                className="relative w-[330px] h-[390px] rounded-[22px] overflow-hidden"
                style={{ background: 'var(--bg-card)' }}
              >
                <Image
                  src="/2.png"
                  alt="Anas Furqan"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="330px"
                />
                {/* Bottom fade overlay */}
                <div className="absolute bottom-0 inset-x-0 h-20"
                  style={{ background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 100%)' }} />
              </div>
            </div>

            {/* Floating tags — positioned around photo */}
            {floatingTags.map((tag) => (
              <FloatingTag key={tag.text} {...tag} />
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-wrap items-center gap-10 mt-16 pt-8"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          {[
            { n: '5+',  l: 'Hackathons Participated' },
            { n: '10+', l: 'Projects shipped' },
            { n: '100%', l: 'Merit scholarship' },
            { n: '2nd', l: 'BIEK Karachi' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-xl font-bold" style={{ color: 'var(--ink-1)' }}>{s.n}</div>
              <div className="text-xs mt-0.5 font-mono" style={{ color: 'var(--ink-3)' }}>{s.l}</div>
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
          <ArrowDown size={13} style={{ color: 'var(--ink-3)' }} />
        </motion.div>
        <span className="text-[10px] font-mono tracking-widest" style={{ color: 'var(--ink-3)' }}>SCROLL</span>
      </motion.div>
    </section>
  );
}
