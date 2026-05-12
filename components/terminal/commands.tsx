import { personalInfo, featuredProject, projects, techStack, experiences, education } from '@/data/content';
import { achievements, achievementTypeConfig } from '@/data/achievements';

// ─── Output component helpers ─────────────────────────────────────────

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-1 font-mono text-sm leading-relaxed" style={{ color: '#9191a8' }}>
      {children}
    </div>
  );
}

function Header({ text }: { text: string }) {
  return (
    <div className="font-mono text-xs tracking-widest uppercase mb-3 mt-1" style={{ color: '#6366f1' }}>
      ── {text} ──────────────────────
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-baseline gap-3 py-0.5">
      <span className="font-mono text-xs w-20 flex-shrink-0" style={{ color: '#55555e' }}>{label}</span>
      <span className="font-mono text-sm" style={{ color: accent ?? '#eeeef5' }}>{value}</span>
    </div>
  );
}

// ─── Command outputs ──────────────────────────────────────────────────

export function HelpOutput() {
  const cmds = [
    { cmd: 'about',        desc: 'Who I am' },
    { cmd: 'skills',       desc: 'Tech stack by category' },
    { cmd: 'projects',     desc: 'All projects' },
    { cmd: 'achievements', desc: 'Awards & certifications' },
    { cmd: 'education',    desc: 'Education & experience' },
    { cmd: 'contact',      desc: 'Get in touch' },
    { cmd: 'clear',        desc: 'Clear terminal' },
    { cmd: 'switch',       desc: 'Switch to Professional View' },
  ];

  return (
    <Block>
      <Header text="Available Commands" />
      <div className="space-y-1">
        {cmds.map(({ cmd, desc }) => (
          <div key={cmd} className="flex items-baseline gap-4">
            <span className="font-mono text-sm w-28 flex-shrink-0" style={{ color: '#38bdf8' }}>{cmd}</span>
            <span className="text-sm" style={{ color: '#9191a8' }}>{desc}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs" style={{ color: '#55555e' }}>
        Tip: Press ↑/↓ for command history · Tab for autocomplete
      </div>
    </Block>
  );
}

export function AboutOutput() {
  return (
    <Block>
      <Header text="About" />
      <div className="mb-4 p-4 rounded-xl" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
        <p className="font-mono text-lg font-bold" style={{ color: '#eeeef5' }}>{personalInfo.name}</p>
        <p className="font-mono text-sm mt-0.5" style={{ color: '#818cf8' }}>{personalInfo.title}</p>
      </div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#9191a8', maxWidth: '520px' }}>{personalInfo.bio}</p>
      <Row label="location" value={personalInfo.location} />
      <Row label="email"    value={personalInfo.email}    accent="#38bdf8" />
      <Row label="github"   value="github.com/Anas-Furqan" accent="#818cf8" />
    </Block>
  );
}

export function SkillsOutput() {
  const cats = Object.keys(techStack);
  const catColors: Record<string, string> = {
    Frontend: '#818cf8', 'Real-Time': '#38bdf8', Backend: '#34d399',
    Database: '#fbbf24', Blockchain: '#c084fc', Animation: '#f472b6',
  };

  return (
    <Block>
      <Header text="Tech Stack" />
      <div className="space-y-4">
        {cats.map(cat => {
          const items = techStack[cat as keyof typeof techStack] ?? [];
          const col = catColors[cat] ?? '#818cf8';
          return (
            <div key={cat}>
              <p className="font-mono text-xs mb-1.5" style={{ color: col }}>[ {cat} ]</p>
              <div className="flex flex-wrap gap-1.5 pl-2">
                {items.map(item => (
                  <span key={item.name} className="font-mono text-xs px-2 py-0.5 rounded-md"
                    style={{ background: `${col}10`, border: `1px solid ${col}20`, color: '#9191a8' }}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Block>
  );
}

export function ProjectsOutput({
  onViewProject,
}: {
  onViewProject: (name: string, url: string) => void;
}) {
  const all = [
    { name: featuredProject.name, tagline: featuredProject.tagline, tech: featuredProject.tech.slice(0,4), demo: featuredProject.demo, github: featuredProject.github },
    ...projects.map(p => ({ name: p.name, tagline: p.tagline, tech: p.tech.slice(0,4), demo: p.demo, github: p.github })),
  ];

  return (
    <Block>
      <Header text={`Projects (${all.length})`} />
      <div className="space-y-5">
        {all.map((p, i) => (
          <div key={p.name} className="pl-2 border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs" style={{ color: '#55555e' }}>{String(i + 1).padStart(2, '0')}</span>
              <span className="font-mono text-sm font-bold" style={{ color: '#eeeef5' }}>{p.name}</span>
            </div>
            <p className="font-mono text-xs mb-1.5 pl-6" style={{ color: '#818cf8' }}>{p.tagline}</p>
            <div className="flex flex-wrap gap-1.5 pl-6 mb-2">
              {p.tech.map(t => (
                <span key={t} className="font-mono text-[10px] px-1.5 py-px rounded"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#55555e' }}>{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-6">
              <button
                className="font-mono text-xs hover:opacity-100 transition-opacity"
                style={{ color: '#6366f1', opacity: 0.9 }}
                onClick={() => onViewProject(p.name, p.demo)}
              >
                → open demo
              </button>
              <a href={p.github} target="_blank" rel="noreferrer"
                className="font-mono text-xs" style={{ color: '#55555e' }}>
                → github
              </a>
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
}

export function AchievementsOutput({
  onViewAchievement,
}: {
  onViewAchievement: (id: string) => void;
}) {
  return (
    <Block>
      <Header text={`Achievements (${achievements.length})`} />
      <div className="space-y-3">
        {achievements.map((a, i) => {
          const cfg = achievementTypeConfig[a.type];
          return (
            <div key={a.id} className="pl-2 border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-xs" style={{ color: '#55555e' }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="font-mono text-sm" style={{ color: '#eeeef5' }}>{a.title}</span>
              </div>
              <div className="pl-6 flex items-center gap-3">
                <span className="font-mono text-xs" style={{ color: cfg.color }}>{a.issuer}</span>
                <span className="font-mono text-xs" style={{ color: '#55555e' }}>{a.date}</span>
                <button
                  className="font-mono text-xs"
                  style={{ color: '#6366f1' }}
                  onClick={() => onViewAchievement(a.id)}
                >
                  → view details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Block>
  );
}

export function EducationOutput() {
  return (
    <Block>
      <Header text="Education" />
      <div className="space-y-4 mb-6">
        {education.map(edu => (
          <div key={edu.institution}>
            <p className="font-mono text-sm" style={{ color: '#eeeef5' }}>{edu.degree}</p>
            <Row label="school" value={edu.institution} accent="#818cf8" />
            <Row label="period" value={edu.period} />
            {edu.note && <Row label="note"   value={edu.note} />}
          </div>
        ))}
      </div>

      <Header text="Experience" />
      <div className="space-y-4">
        {experiences.filter(e => e.current).map(exp => (
          <div key={exp.org}>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-mono text-xs px-1.5 py-px rounded"
                style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>
                current
              </span>
              <span className="font-mono text-sm" style={{ color: '#eeeef5' }}>{exp.role}</span>
            </div>
            <Row label="org"    value={exp.org}    accent="#818cf8" />
            <Row label="period" value={exp.period} />
          </div>
        ))}
      </div>
    </Block>
  );
}

export function ContactOutput() {
  return (
    <Block>
      <Header text="Contact" />
      <p className="font-mono text-sm mb-4" style={{ color: '#9191a8' }}>
        Open to full-stack roles, hackathon collabs, and interesting problems.
      </p>
      <Row label="email"    value={personalInfo.email}               accent="#38bdf8" />
      <Row label="github"   value="github.com/Anas-Furqan"           accent="#818cf8" />
      <Row label="linkedin" value="linkedin.com/in/anas-furqan"      accent="#0a66c2" />
      <Row label="phone"    value={personalInfo.phone}               />
      <Row label="location" value={personalInfo.location}            />
    </Block>
  );
}

export function NotFoundOutput({ cmd }: { cmd: string }) {
  return (
    <div className="font-mono text-sm" style={{ color: '#ef4444' }}>
      command not found: <span style={{ color: '#eeeef5' }}>{cmd}</span>
      <span className="ml-3" style={{ color: '#55555e' }}>— type 'help' for available commands</span>
    </div>
  );
}

// ─── All commands registry ────────────────────────────────────────────
export const COMMAND_LIST = [
  'about', 'skills', 'projects', 'achievements', 'education', 'contact', 'help', 'clear', 'switch',
];
