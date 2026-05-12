export type AchievementType =
  | 'hackathon-win'
  | 'hackathon-runner'
  | 'competition'
  | 'certificate'
  | 'scholarship'
  | 'recognition'
  | 'academic'
  | 'group'; // grouped multi-achievements

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  issuer: string;
  date: string;
  description: string;
  /** Certificate image path — supports .png .HEIC */
  certUrl?: string;
  /** Certificate PDF path */
  pdfUrl?: string;
  /** Physical shield / trophy image */
  shieldUrl?: string;
  /** Physical medal image */
  medalUrl?: string;
  /** Multiple shields for grouped achievements */
  groupedShields?: { url: string; label: string }[];
  /** Related project (for hackathons) */
  projectName?: string;
  projectDemo?: string;
  projectGithub?: string;
  tags?: string[];
  highlighted?: boolean;
  /** Sort order — lower = first */
  order?: number;
}

export const achievements: Achievement[] = [
  /* ────── HACKATHON WINS ────── */
  {
    id: 'aifest-winner',
    type: 'hackathon-win',
    title: '🏆 Winner — AI FEST Hackathon',
    issuer: 'AI FEST · NED University',
    date: '2025',
    description: 'Won AI FEST hackathon hosted by NED University, building CompetiConnect — a platform connecting competitors with competitions, featuring real-time matchmaking and leaderboards.',
    certUrl: '/certificates/aifest-hackathon.png',
    shieldUrl: '/shields/aifest-shield.HEIC',
    projectName: 'CompetiConnect',
    projectDemo: 'https://competi-connect-frontend-ned.vercel.app',
    projectGithub: 'https://github.com/owaisrafiq05/CompetiConnect-Frontend-NED',
    tags: ['AI', 'React', 'Hackathon', 'Winner'],
    highlighted: true,
    order: 1,
  },
  {
    id: 'vortex-winner',
    type: 'hackathon-win',
    title: '🏆 Winner — Vortex Competition',
    issuer: 'Vortex',
    date: '2024',
    description: 'Won the Vortex competition — demonstrating engineering and problem-solving at a competitive level. Also received Best Among (BA) recognition.',
    certUrl: '/certificates/vortex-winner.HEIC',
    shieldUrl: '/shields/vortex-winner-sheild.HEIC',
    tags: ['Competition', 'Winner'],
    highlighted: true,
    order: 2,
  },

  /* ────── RUNNER UP / HONORABLE ────── */
  {
    id: 'smec-runner',
    type: 'hackathon-runner',
    title: '🥈 Runner Up — SMEC Hackathon',
    issuer: 'SMEC',
    date: '2024',
    description: 'Secured Runner Up position at SMEC Hackathon, competing against strong teams under time pressure.',
    certUrl: '/certificates/smec-hackathon.HEIC',
    shieldUrl: '/shields/smec-shield.HEIC',
    tags: ['Hackathon', 'Runner Up'],
    highlighted: true,
    order: 3,
  },

  /* ────── PROCOM ────── */
  {
    id: 'procom-astera',
    type: 'competition',
    title: 'PROCOM — Astera Track',
    issuer: 'PROCOM · IBA Karachi',
    date: '2025',
    description: 'Competed and achieved recognition at PROCOM\'s Astera track — one of Pakistan\'s largest annual tech fests held at IBA Karachi.',
    pdfUrl: '/certificates/procom-astera.pdf',
    shieldUrl: '/shields/astera-winner-shield.HEIC',
    tags: ['PROCOM', 'IBA', 'Competition'],
    highlighted: false,
    order: 5,
  },
  {
    id: 'procom-ba',
    type: 'competition',
    title: 'PROCOM — Best Among (BA)',
    issuer: 'PROCOM · IBA Karachi',
    date: '2025',
    description: 'Received Best Among (BA) recognition at PROCOM. Also served as AI Competitions Module Co-Head, planning and running the AI Grand Prix module.',
    pdfUrl: '/certificates/procom-ba.pdf',
    shieldUrl: '/shields/procom-ba-shield.HEIC',
    tags: ['PROCOM', 'BA', 'Leadership'],
    highlighted: false,
    order: 6,
  },
  {
    id: 'procom-modulecohead',
    type: 'recognition',
    title: 'AI Competitions Module Co-Head',
    issuer: 'PROCOM · IBA Karachi',
    date: '2025',
    description: 'Co-headed the AI Grand Prix competition module at PROCOM, designing challenges and coordinating events.',
    shieldUrl: '/shields/procom-modulecohead-shield.HEIC',
    tags: ['Leadership', 'PROCOM', 'AI'],
    highlighted: false,
    order: 7,
  },

  /* ────── CODERSCUP ────── */
  {
    id: 'coderscup',
    type: 'competition',
    title: 'CodersCup',
    issuer: 'CodersCup',
    date: '2024',
    description: 'Participated and achieved recognition at CodersCup — a competitive programming and development challenge.',
    pdfUrl: '/certificates/coderscup.pdf',
    shieldUrl: '/shields/coderscup-shield.HEIC',
    tags: ['Competitive Programming', 'CodersCup'],
    highlighted: false,
    order: 8,
  },

  /* ────── DEVDAY ────── */
  {
    id: 'devday-sp',
    type: 'recognition',
    title: "Developers' Day — Special Prize",
    issuer: "Developers' Day · ACM NUCES",
    date: '2025',
    description: "Received Special Prize at Developers' Day. Also serving as Hackathon Head for the same event in 2026.",
    shieldUrl: '/shields/devday-sp-shield.HEIC',
    tags: ['DevDay', 'ACM', 'Special Prize'],
    highlighted: false,
    order: 9,
  },

  /* ────── BWAI ────── */
  {
    id: 'bwai',
    type: 'competition',
    title: 'BuildWithAI Hackathon',
    issuer: 'BuildWithAI',
    date: '2024',
    description: 'Participated in BuildWithAI hackathon, building AI Interview Coach — a real-time AI interview prep platform with 3D visualization and Firebase-backed sessions.',
    certUrl: '/certificates/bwai-hackathon.png',
    projectName: 'AI Interview Coach',
    projectDemo: 'https://ai-interview-bwai.vercel.app/',
    projectGithub: 'https://github.com/Anas-Furqan/AI-Interview-Coach-BWAI-Frontend',
    tags: ['AI', 'Hackathon'],
    highlighted: false,
    order: 10,
  },

  /* ────── ACADEMIC ────── */
  {
    id: 'fast-scholarship',
    type: 'scholarship',
    title: '100% Merit Scholarship — FAST-NUCES',
    issuer: 'FAST-NUCES',
    date: '2025',
    description: 'Awarded full merit scholarship to FAST-NUCES for exceptional BIEK board performance — 2nd position across Karachi.',
    certUrl: '/certificates/merit-scholarship.HEIC',
    tags: ['Scholarship', 'Academic', 'FAST-NUCES'],
    highlighted: true,
    order: 4,
  },
  {
    id: 'aptech-diploma',
    type: 'certificate',
    title: 'Advanced Diploma in Software Engineering — Distinction',
    issuer: 'Aptech Learning Center',
    date: '2025',
    description: 'Completed the Advanced Diploma in Software Engineering with Distinction — comprehensive 3-year program covering full-stack development, algorithms, and software engineering principles.',
    certUrl: '/certificates/aptech-diploma.HEIC',
    tags: ['Diploma', 'Software Engineering', 'Distinction'],
    highlighted: false,
    order: 11,
  },
  {
    id: 'vortex-ba',
    type: 'competition',
    title: 'Vortex — Best Among (BA)',
    issuer: 'Vortex',
    date: '2024',
    description: 'Received Best Among (BA) recognition at Vortex competition.',
    certUrl: '/certificates/vortex-ba.HEIC',
    shieldUrl: '/shields/vortex-ba-shield.HEIC',
    tags: ['Vortex', 'BA'],
    highlighted: false,
    order: 12,
  },

  /* ────── BOARD TOP (GROUPED) ────── */
  {
    id: 'board-top-group',
    type: 'group',
    title: 'Board Top Positions — 3× Medals',
    issuer: 'BIEK · VMA · Academic Boards',
    date: '2021 – 2025',
    description: 'Secured top board positions across three academic milestones — VMA Matriculation, Intermediate (BIEK 2nd position across Karachi), and 1st year exams. Multiple medals and shields awarded.',
    groupedShields: [
      { url: '/shields/board-top-1.HEIC',     label: 'Board Top #1' },
      { url: '/shields/board-top-2.HEIC',     label: 'Board Top #2' },
      { url: '/shields/board-top-3.HEIC',     label: 'Board Top #3' },
      { url: '/shields/vma-matric-shield.HEIC', label: 'VMA Matric' },
      { url: '/shields/vma-matric-medal.HEIC',  label: 'Matric Medal' },
      { url: '/shields/1st-year-medal.HEIC',    label: '1st Year Medal' },
    ],
    certUrl: '/certificates/1st-year.HEIC',
    tags: ['Board Exam', 'Top Position', 'Academic'],
    highlighted: true,
    order: 4,
  },
];

// Sorted by order
export const sortedAchievements = [...achievements].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const highlightedAchievements = sortedAchievements.filter(a => a.highlighted);
export const regularAchievements = sortedAchievements.filter(a => !a.highlighted);

/* ────── Type config ────── */
export type AchievementTypeConfig = {
  label: string;
  color: string;
  tagClass: string;
};

export const achievementTypeConfig: Record<AchievementType, AchievementTypeConfig> = {
  'hackathon-win':    { label: 'Winner 🏆',      color: '#fbbf24', tagClass: 'tag-amber'   },
  'hackathon-runner': { label: 'Runner Up 🥈',   color: '#38bdf8', tagClass: 'tag-cyan'    },
  'competition':      { label: 'Competition',    color: '#818cf8', tagClass: 'tag-indigo'  },
  'certificate':      { label: 'Certificate',    color: '#34d399', tagClass: 'tag-emerald' },
  'scholarship':      { label: 'Scholarship ⭐', color: '#34d399', tagClass: 'tag-emerald' },
  'recognition':      { label: 'Recognition',    color: '#c084fc', tagClass: 'tag-violet'  },
  'academic':         { label: 'Academic',       color: '#38bdf8', tagClass: 'tag-cyan'    },
  'group':            { label: 'Collection 🎖️', color: '#fbbf24', tagClass: 'tag-amber'   },
};
