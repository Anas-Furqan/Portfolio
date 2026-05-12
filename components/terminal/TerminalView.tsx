'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, ChevronRight, Terminal } from 'lucide-react';
import {
  HelpOutput, AboutOutput, SkillsOutput, ProjectsOutput,
  AchievementsOutput, EducationOutput, ContactOutput, NotFoundOutput,
  COMMAND_LIST,
} from './commands';
import { sortedAchievements, type Achievement } from '@/data/achievements';
import { projects, featuredProject, type Project } from '@/data/content';
import AchievementModal from '@/components/professional/AchievementModal';
import ProjectModal from '@/components/professional/ProjectModal';

interface Line {
  id: string;
  type: 'input' | 'output' | 'boot';
  content: React.ReactNode;
}

interface Props { onSwitch: () => void; }

const BOOT_LINES = [
  { d: 0,    t: 'Initializing portfolio v2.1.0...' },
  { d: 250,  t: 'Loading: [skills] [projects] [achievements] [education]' },
  { d: 600,  t: '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%' },
  { d: 850,  t: '' },
  { d: 950,  t: '╔══════════════════════════════════════╗' },
  { d: 1000, t: '║      ANAS FURQAN · PORTFOLIO          ║' },
  { d: 1050, t: '║  Full Stack · Real-Time · AI · Web3   ║' },
  { d: 1100, t: '╚══════════════════════════════════════╝' },
  { d: 1250, t: '' },
  { d: 1350, t: "Type 'help' to see available commands." },
  { d: 1550, t: '' },
];

const GUIDE = [
  { title: 'Navigation', commands: [
    { cmd: 'about',   desc: 'Who I am' },
    { cmd: 'help',    desc: 'All commands' },
    { cmd: 'clear',   desc: 'Clear screen' },
  ]},
  { title: 'Portfolio', commands: [
    { cmd: 'skills',       desc: 'Tech stack' },
    { cmd: 'projects',     desc: 'All projects' },
    { cmd: 'achievements', desc: 'Awards & certs' },
    { cmd: 'education',    desc: 'Background' },
    { cmd: 'contact',      desc: 'Get in touch' },
  ]},
];

function uid() { return Math.random().toString(36).slice(2); }

export default function TerminalView({ onSwitch }: Props) {
  const [lines, setLines]       = useState<Line[]>([]);
  const [input, setInput]       = useState('');
  const [history, setHistory]   = useState<string[]>([]);
  const [histIdx, setHistIdx]   = useState(-1);
  const [booted, setBooted]     = useState(false);
  const [suggestion, setSuggest]= useState('');
  const [selAchievement, setSelAchievement] = useState<Achievement | null>(null);
  const [selProject, setSelProject]         = useState<Project | null>(null);

  const bodyRef  = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addLine = useCallback((line: Omit<Line, 'id'>) => {
    setLines(prev => [...prev, { ...line, id: uid() }]);
  }, []);

  // Boot sequence
  useEffect(() => {
    let cancelled = false;
    BOOT_LINES.forEach(({ d, t }) => {
      setTimeout(() => {
        if (!cancelled) addLine({ type: 'boot', content: t });
      }, d);
    });
    setTimeout(() => { if (!cancelled) setBooted(true); }, 1650);
    return () => { cancelled = true; };
  }, [addLine]);

  // Auto scroll
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  // Autocomplete suggestion
  useEffect(() => {
    if (!input.trim()) { setSuggest(''); return; }
    const match = COMMAND_LIST.find(c => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase());
    setSuggest(match ? match.slice(input.length) : '');
  }, [input]);

  const handleOpenProject = useCallback((id: string) => {
    let found: Project | null = null;
    if (id === 'ligma') {
      // Convert featuredProject to Project shape
      found = {
        id: 'ligma',
        name: featuredProject.name,
        tagline: featuredProject.tagline,
        description: featuredProject.description,
        tech: featuredProject.tech,
        github: featuredProject.github,
        demo: featuredProject.demo,
        image: featuredProject.image,
        category: 'Flagship',
        accent: '#6366f1',
        featured: true,
      };
    } else {
      found = projects.find(p => p.id === id) ?? null;
    }
    if (found) setSelProject(found);
  }, []);

  const handleOpenAchievement = useCallback((id: string) => {
    const a = sortedAchievements.find(x => x.id === id);
    if (a) setSelAchievement(a);
  }, []);

  const execute = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    addLine({ type: 'input', content: raw.trim() });
    setHistory(h => [raw.trim(), ...h.slice(0, 49)]);
    setHistIdx(-1);

    if (cmd === 'clear') { setLines([]); return; }
    if (cmd === 'switch' || cmd === 'exit') { onSwitch(); return; }

    let output: React.ReactNode;
    switch (cmd) {
      case 'help':         output = <HelpOutput />; break;
      case 'about':        output = <AboutOutput />; break;
      case 'skills':       output = <SkillsOutput />; break;
      case 'projects':
        output = <ProjectsOutput onSelect={handleOpenProject} />;
        break;
      case 'achievements':
        output = <AchievementsOutput onView={handleOpenAchievement} />;
        break;
      case 'education':    output = <EducationOutput />; break;
      case 'contact':      output = <ContactOutput />; break;
      default:             output = <NotFoundOutput cmd={cmd} />; break;
    }
    addLine({ type: 'output', content: output });
  }, [addLine, onSwitch, handleOpenProject, handleOpenAchievement]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      execute(input);
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) setInput(prev => prev + suggestion);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? '' : (history[idx] ?? ''));
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col" style={{ background: '#0a0a0f', fontFamily: '"JetBrains Mono", monospace' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="flex items-center gap-2">
          <Terminal size={14} style={{ color: '#6366f1' }} />
          <span className="text-xs" style={{ color: '#9191a8' }}>anas@portfolio</span>
          <span className="text-xs" style={{ color: '#55555e' }}>— terminal v2.1</span>
        </div>
        <button
          onClick={onSwitch}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all duration-150"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.18)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.1)')}
        >
          <LayoutGrid size={11} />
          Professional View
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 min-h-0">
        {/* ── Terminal ── */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Chrome */}
          <div className="flex items-center gap-2 px-5 py-3 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
            <div className="flex gap-1.5">
              {[['#ff5f57','#febc2e','#28c840']].flat().map(c => (
                <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <span className="text-xs ml-2" style={{ color: '#55555e' }}>anas@portfolio: ~</span>
          </div>

          {/* Output */}
          <div
            ref={bodyRef}
            className="flex-1 overflow-y-auto px-5 py-4"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.15) transparent' }}
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence initial={false}>
              {lines.map(line => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.13 }}
                >
                  {line.type === 'boot' && (
                    <div className="font-mono text-sm py-px"
                      style={{ color: typeof line.content === 'string' && (line.content as string).startsWith('▓') ? '#6366f1' : '#9191a8' }}>
                      {line.content}
                    </div>
                  )}
                  {line.type === 'input' && (
                    <div className="flex items-center gap-2 py-1 mt-2">
                      <span className="font-mono text-xs" style={{ color: '#55555e' }}>anas@portfolio</span>
                      <span className="font-mono text-xs" style={{ color: '#6366f1' }}>~</span>
                      <ChevronRight size={12} style={{ color: '#6366f1', flexShrink: 0 }} />
                      <span className="font-mono text-sm" style={{ color: '#eeeef5' }}>{line.content}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <div className="pb-2 pl-1">{line.content}</div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input prompt */}
            {booted && (
              <div className="flex items-center gap-2 py-1 mt-2">
                <span className="font-mono text-xs flex-shrink-0" style={{ color: '#55555e' }}>anas@portfolio</span>
                <span className="font-mono text-xs flex-shrink-0" style={{ color: '#6366f1' }}>~</span>
                <ChevronRight size={12} style={{ color: '#6366f1', flexShrink: 0 }} />
                <div className="relative flex-1 flex items-center">
                  {/* Ghost suggestion */}
                  {suggestion && (
                    <span className="absolute left-0 pointer-events-none font-mono text-sm" style={{ color: '#3a3a4a' }}>
                      {input}{suggestion}
                    </span>
                  )}
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    className="bg-transparent outline-none font-mono text-sm w-full relative z-10"
                    style={{ color: '#eeeef5', caretColor: '#6366f1' }}
                    aria-label="Terminal input"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Guide panel ── */}
        <div className="hidden lg:flex flex-col w-72 flex-shrink-0 overflow-y-auto"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.013)' }}>
          <div className="px-5 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: '#6366f1' }}>Command Guide</p>
          </div>

          <div className="px-5 py-4 space-y-6 flex-1">
            {GUIDE.map(section => (
              <div key={section.title}>
                <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: '#55555e' }}>{section.title}</p>
                <div className="space-y-1">
                  {section.commands.map(({ cmd, desc }) => (
                    <button
                      key={cmd}
                      onClick={() => { execute(cmd); inputRef.current?.focus(); }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left group transition-all duration-150"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid transparent' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                      }}
                    >
                      <span className="text-xs" style={{ color: '#38bdf8' }}>{cmd}</span>
                      <span className="text-[10px]" style={{ color: '#55555e' }}>{desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Shortcuts */}
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: '#55555e' }}>Shortcuts</p>
              <div className="space-y-1.5">
                {[['↑ / ↓','History'],['Tab','Autocomplete'],['Enter','Execute']].map(([k, d]) => (
                  <div key={k} className="flex items-center justify-between px-3 py-1.5">
                    <span className="text-xs px-1.5 py-px rounded"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#9191a8' }}>
                      {k}
                    </span>
                    <span className="text-[10px]" style={{ color: '#55555e' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-[10px]" style={{ color: '#55555e' }}>Inspired by Warp · Raycast</p>
              <p className="text-[10px] mt-0.5" style={{ color: '#55555e' }}>Click commands above to run →</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals — render on top of terminal */}
      <AchievementModal achievement={selAchievement} onClose={() => setSelAchievement(null)} />
      <ProjectModal project={selProject} onClose={() => setSelProject(null)} />
    </div>
  );
}
