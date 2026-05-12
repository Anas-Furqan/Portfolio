export type AchievementType =
  | 'hackathon-win'
  | 'hackathon-runner'
  | 'competition'
  | 'certificate'
  | 'scholarship'
  | 'recognition'
  | 'academic'
  | 'group';

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  issuer: string;
  date: string;
  description: string;
  certUrl?: string;
  pdfUrl?: string;
  shieldUrl?: string;
  medalUrl?: string;
  groupedShields?: { url: string; label: string }[];
  projectName?: string;
  projectDemo?: string;
  projectGithub?: string;
  tags?: string[];
  highlighted?: boolean;
  /** Lower = shown first */
  order: number;
}

export const achievements: Achievement[] = [
  /* ──────────────────────────────────
     1. SCHOLARSHIP (highest prestige)
  ────────────────────────────────── */
  {
    id: 'fast-scholarship',
    type: 'scholarship',
    title: '100% Merit Scholarship',
    issuer: 'FAST-NUCES',
    date: '2025',
    description: 'Awarded full merit scholarship to FAST-NUCES for scoring 2nd position across Karachi in the BIEK board examinations.',
    certUrl: '/certificates/merit-scholarship.png',
    tags: ['Scholarship', 'Academic', 'FAST-NUCES'],
    highlighted: true,
    order: 1,
  },

  /* ──────────────────────────────────
     2. BOARD TOPPER
  ────────────────────────────────── */
  {
    id: 'board-top-group',
    type: 'group',
    title: 'Board Top Positions — 3 Medals',
    issuer: 'BIEK · VMA · Academic Boards',
    date: '2021 – 2025',
    description:
      'Secured top board positions across three academic milestones — VMA Matriculation, Intermediate (2nd position across Karachi in BIEK), and 1st year exams. Multiple medals and shields awarded for consistent academic excellence.',
    certUrl: '/certificates/1st-year.png',
    groupedShields: [
      { url: '/shields/board-top-1.png',      label: 'Board Top #1'  },
      { url: '/shields/board-top-2.png',      label: 'Board Top #2'  },
      { url: '/shields/board-top-3.png',      label: 'Board Top #3'  },
      { url: '/shields/vma-matric-shield.png', label: 'VMA Matric'    },
      { url: '/shields/vma-matric-medal.png',  label: 'Matric Medal'  },
      { url: '/shields/1st-year-medal.png',    label: '1st Year Medal'},
    ],
    tags: ['Board Exam', 'Top Position', 'Academic', 'BIEK'],
    highlighted: true,
    order: 2,
  },

  /* ──────────────────────────────────
     3. MAJOR HACKATHON WINS
  ────────────────────────────────── */
  {
    id: 'aifest-winner',
    type: 'hackathon-win',
    title: 'Winner — AI FEST Hackathon',
    issuer: 'NED University',
    date: '2025',
    description:
      'Won AI FEST hackathon hosted by NED University. Built CompetiConnect — a platform connecting competitors with competitions, featuring intelligent matchmaking, real-time leaderboards, and event management.',
    certUrl: '/certificates/aifest-hackathon.png',
    shieldUrl: '/shields/aifest-shield.png',
    projectName: 'CompetiConnect',
    projectDemo: 'https://competi-connect-frontend-ned.vercel.app',
    projectGithub: 'https://github.com/owaisrafiq05/CompetiConnect-Frontend-NED',
    tags: ['Hackathon', 'Winner', 'AI'],
    highlighted: true,
    order: 3,
  },
  {
    id: 'smec-runner',
    type: 'hackathon-runner',
    title: 'Runner Up — SMEC Hackathon',
    issuer: 'SMEC',
    date: '2024',
    description:
      'Secured Runner Up position at SMEC Hackathon, competing against strong teams under time pressure with a fully functional prototype.',
    certUrl: '/certificates/smec-hackathon.png',
    shieldUrl: '/shields/smec-shield.png',
    tags: ['Hackathon', 'Runner Up'],
    highlighted: true,
    order: 4,
  },

  /* ──────────────────────────────────
     4. LEADERSHIP ACHIEVEMENTS
  ────────────────────────────────── */
  {
    id: 'procom-modulecohead',
    type: 'recognition',
    title: 'AI Competitions Module Co-Head',
    issuer: 'PROCOM · FAST-NUCES Karachi',
    date: '2025',
    description:
      'Co-headed the AI Grand Prix competition module at PROCOM — one of Pakistan\'s largest tech fests. Designed AI-focused challenges and coordinated the full event pipeline.',
    shieldUrl: '/shields/procom-modulecohead-shield.png',
    tags: ['Leadership', 'PROCOM', 'AI'],
    highlighted: false,
    order: 5,
  },
  {
    id: 'devday-sp',
    type: 'recognition',
    title: "Developers' Day — Special Prize",
    issuer: "ACM NUCES",
    date: '2025',
    description:
      "Received a Special Prize at Developers' Day — FAST-NUCES's flagship annual tech event. Also serving as Hackathon Head for the 2026 edition.",
    shieldUrl: '/shields/devday-sp-shield.png',
    tags: ["DevDay", "ACM", "Special Prize"],
    highlighted: false,
    order: 6,
  },

  /* ──────────────────────────────────
     5. OTHER COMPETITION ACHIEVEMENTS
  ────────────────────────────────── */
  {
    id: 'procom-astera',
    type: 'hackathon-win',
    title: 'Winner — PROCOM Astera AgentX',
    issuer: 'PROCOM · FAST-NUCES Karachi',
    date: '2025',
    description:
      'Won PROCOM Astera AgentX competition — a prestigious competitive programming and AI development challenge. Demonstrated excellence in real-time problem-solving and innovative development.',
    pdfUrl: '/certificates/procom-astera.pdf',
    shieldUrl: '/shields/astera-winner-shield.png',
    tags: ['PROCOM', 'AgentX', 'Winner'],
    highlighted: true,
    order: 5,
  },
  {
    id: 'procom-ba',
    type: 'recognition',
    title: 'PROCOM — Best BA (Brand Ambassador)',
    issuer: 'PROCOM · FAST-NUCES Karachi',
    date: '2025',
    description:
      'Recognized as Best BA (Brand Ambassador) at PROCOM — awarded for outstanding engagement, representation, and contribution to the event ecosystem.',
    pdfUrl: '/certificates/procom-ba.pdf',
    shieldUrl: '/shields/procom-ba-shield.png',
    tags: ['PROCOM', 'Brand Ambassador'],
    highlighted: false,
    order: 7,
  },
  {
    id: 'coderscup',
    type: 'competition',
    title: 'CodersCup',
    issuer: 'CodersCup',
    date: '2024',
    description:
      'Competed at CodersCup — a competitive programming and development challenge, earning a certificate of achievement.',
    pdfUrl: '/certificates/coderscup.pdf',
    shieldUrl: '/shields/coderscup-shield.png',
    tags: ['Competitive Programming', 'CodersCup'],
    highlighted: false,
    order: 9,
  },
  {
    id: 'bwai',
    type: 'competition',
    title: 'BuildWithAI Hackathon',
    issuer: 'DHA Suffa University',
    date: '2024',
    description:
      'Participated in BuildWithAI hackathon, building AI Interview Coach — a real-time AI interview prep platform with 3D visualization, live AI feedback, and Firebase-backed session recording.',
    certUrl: '/certificates/bwai-hackathon.png',
    projectName: 'AI Interview Coach',
    projectDemo: 'https://ai-interview-bwai.vercel.app/',
    projectGithub: 'https://github.com/Anas-Furqan/AI-Interview-Coach-BWAI-Frontend',
    tags: ['Hackathon', 'AI', 'BuildWithAI'],
    highlighted: false,
    order: 10,
  },
  {
    id: 'aptech-diploma',
    type: 'certificate',
    title: 'Advanced Diploma in Software Engineering — Distinction',
    issuer: 'Aptech Learning Center',
    date: '2025',
    description:
      'Completed the Advanced Diploma in Software Engineering with Distinction — a comprehensive 3-year program covering full-stack development, algorithms, data structures, and software engineering principles.',
    certUrl: '/certificates/aptech-diploma.png',
    tags: ['Diploma', 'Software Engineering', 'Distinction'],
    highlighted: false,
    order: 11,
  },

  /* ──────────────────────────────────
     6. VORTEX (last by priority)
  ────────────────────────────────── */
  {
    id: 'vortex-winner',
    type: 'hackathon-win',
    title: 'Winner — Vortex Competition',
    issuer: 'Bahria College Karsaz',
    date: '2024',
    description:
      'Won the Vortex inter-college competition organized by Bahria College Karsaz — demonstrating engineering and problem-solving skills at a competitive inter-college level.',
    certUrl: '/certificates/vortex-winner.png',
    shieldUrl: '/shields/vortex-winner-sheild.png',
    tags: ['Competition', 'Winner', 'Inter-College'],
    highlighted: false,
    order: 12,
  },
  {
    id: 'vortex-ba',
    type: 'recognition',
    title: 'Vortex — Best BA (Brand Ambassador)',
    issuer: 'Bahria College Karsaz',
    date: '2024',
    description:
      'Recognized as Best BA (Brand Ambassador) at the Vortex inter-college competition, Bahria College Karsaz.',
    certUrl: '/certificates/vortex-ba.png',
    shieldUrl: '/shields/vortex-ba-shield.png',
    tags: ['Vortex', 'Brand Ambassador', 'Inter-College'],
    highlighted: false,
    order: 13,
  },
];

export const sortedAchievements = [...achievements].sort((a, b) => a.order - b.order);
export const highlightedAchievements = sortedAchievements.filter(a => a.highlighted);
export const regularAchievements = sortedAchievements.filter(a => !a.highlighted);

export type AchievementTypeConfig = {
  label: string;
  color: string;
  tagClass: string;
};

export const achievementTypeConfig: Record<AchievementType, AchievementTypeConfig> = {
  'hackathon-win':    { label: 'Winner 🏆',      color: '#fbbf24', tagClass: 'tag-amber'   },
  'hackathon-runner': { label: 'Runner Up 🥈',   color: '#38bdf8', tagClass: 'tag-cyan'    },
  competition:        { label: 'Competition',    color: '#818cf8', tagClass: 'tag-indigo'  },
  certificate:        { label: 'Certificate',    color: '#34d399', tagClass: 'tag-emerald' },
  scholarship:        { label: 'Scholarship ⭐', color: '#34d399', tagClass: 'tag-emerald' },
  recognition:        { label: 'Recognition',    color: '#c084fc', tagClass: 'tag-violet'  },
  academic:           { label: 'Academic',       color: '#38bdf8', tagClass: 'tag-cyan'    },
  group:              { label: 'Collection 🎖️', color: '#fbbf24', tagClass: 'tag-amber'   },
};
