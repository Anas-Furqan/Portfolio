import { personalInfo, featuredProject, projects, techStack, experiences, education } from '@/data/content';
import { sortedAchievements, achievementTypeConfig } from '@/data/achievements';

/* ── Shared output primitives ───────────────────────────────── */

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-1 font-mono text-sm leading-relaxed">
      {children}
    </div>
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3 mt-1">
      <span style={{ color: '#6366f1' }}>──</span>
      <span className="text-xs tracking-widest uppercase" style={{ color: '#6366f1' }}>{text}</span>
      <span style={{ color: '#6366f1' }}>{'─'.repeat(Math.max(0, 30 - text.length))}</span>
    </div>
  );
}

function KV({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-baseline gap-3 py-0.5">
      <span className="font-mono text-xs w-20 flex-shrink-0" style={{ color: '#55555e' }}>{label}</span>
      <span className="font-mono text-sm" style={{ color: accent ?? '#eeeef5' }}>{value}</span>
    </div>
  );
}

/* ── Command outputs ────────────────────────────────────────── */

export function HelpOutput() {
  const cmds = [
    { cmd: 'about',        desc: 'Who I am' },
    { cmd: 'skills',       desc: 'Tech stack by category' },
    { cmd: 'projects',     desc: 'List all projects' },
    { cmd: 'achievements', desc: 'Awards & certifications' },
    { cmd: 'education',    desc: 'Education & experience' },
    { cmd: 'contact',      desc: 'Get in touch' },
    { cmd: 'clear',        desc: 'Clear terminal' },
    { cmd: 'switch',       desc: 'Switch to Professional View' },
  ];
  return (
    <Block>
      <SectionHeader text="Available Commands" />
      <div className="space-y-1">
        {cmds.map(({ cmd, desc }) => (
          <div key={cmd} className="flex items-baseline gap-4">
            <span className="font-mono text-sm w-28 flex-shrink-0" style={{ color: '#38bdf8' }}>{cmd}</span>
            <span className="text-sm" style={{ color: '#9191a8' }}>{desc}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs" style={{ color: '#55555e' }}>
        ↑/↓ history · Tab autocomplete · Click commands in guide panel
      </div>
    </Block>
  );
}

export function AboutOutput() {
  return (
    <Block>
      <SectionHeader text="About" />
      <div className="mb-4 p-4 rounded-xl" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
        <p className="font-mono text-lg font-bold" style={{ color: '#eeeef5' }}>{personalInfo.name}</p>
        <p className="font-mono text-sm mt-0.5" style={{ color: '#818cf8' }}>{personalInfo.title}</p>
        <p className="font-mono text-xs mt-0.5" style={{ color: '#55555e' }}>{personalInfo.location}</p>
      </div>
      <p className="text-sm leading-relaxed mb-4 max-w-lg" style={{ color: '#9191a8' }}>{personalInfo.bio}</p>
      <KV label="email"    value={personalInfo.email}              accent="#38bdf8" />
      <KV label="github"   value="github.com/Anas-Furqan"          accent="#818cf8" />
      <KV label="linkedin" value="linkedin.com/in/anas-furqan"     accent="#818cf8" />
    </Block>
  );
}

export function SkillsOutput() {
  const catColors: Record<string, string> = {
    Frontend: '#818cf8', 'Real-Time': '#38bdf8', Backend: '#34d399',
    Database: '#fbbf24', Blockchain: '#c084fc', Animation: '#f472b6',
  };
  return (
    <Block>
      <SectionHeader text="Tech Stack" />
      <div className="space-y-4">
        {Object.keys(techStack).map(cat => {
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

/**
 * Projects output — shows LIST ONLY.
 * Clicking a project calls onSelect(project) to open a modal.
 */
export function ProjectsOutput({ onSelect }: { onSelect: (id: string) => void }) {
  const allProjects = [
    { id: 'ligma', name: featuredProject.name, tagline: featuredProject.tagline, category: 'Flagship' },
    ...projects.map(p => ({ id: p.id, name: p.name, tagline: p.tagline, category: p.category })),
  ];

  return (
    <Block>
      <SectionHeader text={`Projects (${allProjects.length})`} />
      <div className="space-y-2">
        {allProjects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all duration-150"
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
            <span className="font-mono text-xs w-6 flex-shrink-0" style={{ color: '#55555e' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-sm font-semibold" style={{ color: '#eeeef5' }}>{p.name}</span>
              <span className="font-mono text-xs ml-2" style={{ color: '#55555e' }}>{p.tagline}</span>
            </div>
            <span className="font-mono text-xs flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: '#6366f1' }}>
              → view
            </span>
          </button>
        ))}
      </div>
      <p className="text-xs mt-3" style={{ color: '#55555e' }}>
        Click a project to view full details in a modal
      </p>
    </Block>
  );
}

export function AchievementsOutput({ onView }: { onView: (id: string) => void }) {
  return (
    <Block>
      <SectionHeader text={`Achievements (${sortedAchievements.length})`} />
      <div className="space-y-2">
        {sortedAchievements.map((a, i) => {
          const cfg = achievementTypeConfig[a.type];
          return (
            <button
              key={a.id}
              onClick={() => onView(a.id)}
              className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all duration-150"
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
              <span className="font-mono text-xs w-6 flex-shrink-0" style={{ color: '#55555e' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-sm" style={{ color: '#eeeef5' }}>{a.title}</span>
                <span className="font-mono text-xs ml-2" style={{ color: cfg.color }}>{a.issuer}</span>
              </div>
              <span className="font-mono text-xs flex-shrink-0" style={{ color: '#55555e' }}>{a.date}</span>
              <span className="font-mono text-xs flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: '#6366f1' }}>
                → view
              </span>
            </button>
          );
        })}
      </div>
    </Block>
  );
}

export function EducationOutput() {
  return (
    <Block>
      <SectionHeader text="Education" />
      <div className="space-y-4 mb-6">
        {education.map(edu => (
          <div key={edu.institution} className="pl-2 border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="font-mono text-sm font-bold" style={{ color: '#eeeef5' }}>{edu.degree}</p>
            <KV label="school" value={edu.institution} accent="#818cf8" />
            <KV label="period" value={edu.period} />
            {edu.note && <KV label="note" value={edu.note} />}
          </div>
        ))}
      </div>

      <SectionHeader text="Experience" />
      <div className="space-y-4">
        {experiences.filter(e => e.current).map(exp => (
          <div key={exp.org} className="pl-2 border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs px-1.5 py-px rounded"
                style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>
                current
              </span>
              <span className="font-mono text-sm font-semibold" style={{ color: '#eeeef5' }}>{exp.role}</span>
            </div>
            <KV label="org"    value={exp.org}    accent="#818cf8" />
            <KV label="period" value={exp.period} />
          </div>
        ))}
      </div>
    </Block>
  );
}

export function ContactOutput() {
  return (
    <Block>
      <SectionHeader text="Contact" />
      <p className="font-mono text-sm mb-4 max-w-md" style={{ color: '#9191a8' }}>
        Open to full-stack roles, hackathon collabs, and interesting problems.
      </p>
      <KV label="email"    value={personalInfo.email}               accent="#38bdf8" />
      <KV label="github"   value="github.com/Anas-Furqan"           accent="#818cf8" />
      <KV label="linkedin" value="linkedin.com/in/anas-furqan"      accent="#818cf8" />
      <KV label="whatsapp" value={personalInfo.phone}               />
      <KV label="location" value={personalInfo.location}            />
    </Block>
  );
}

export function NotFoundOutput({ cmd }: { cmd: string }) {
  return (
    <div className="font-mono text-sm" style={{ color: '#ef4444' }}>
      command not found: <span style={{ color: '#eeeef5' }}>{cmd}</span>
      <span className="ml-3" style={{ color: '#55555e' }}>— type 'help' for commands</span>
    </div>
  );
}

export const COMMAND_LIST = [
  'about', 'skills', 'projects', 'achievements', 'education', 'contact', 'help', 'clear', 'switch',
];
