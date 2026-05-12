// Achievement system — future-proof
// Add certificate images, PDFs, shields to public/achievements/
// then fill imageUrl / pdfUrl fields below.

export type AchievementType = 'certificate' | 'award' | 'scholarship' | 'competition' | 'recognition';

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;   // e.g. /achievements/cert-react.jpg
  pdfUrl?: string;     // e.g. /achievements/cert-react.pdf
  shieldUrl?: string;  // shield badge image
  trophyUrl?: string;  // trophy image
  tags?: string[];
  highlighted?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 'biek-2nd',
    type: 'competition',
    title: '2nd Position — Board Exam',
    issuer: 'BIEK (Board of Intermediate Education Karachi)',
    date: '2025',
    description: 'Secured 2nd position across Karachi in the BIEK board examinations, earning a 100% merit scholarship to FAST-NUCES.',
    highlighted: true,
    tags: ['Academic', 'Board Exam'],
  },
  {
    id: 'fast-scholarship',
    type: 'scholarship',
    title: '100% Merit Scholarship',
    issuer: 'FAST-NUCES',
    date: '2025',
    description: 'Full merit scholarship awarded for outstanding academic performance in BIEK board exams.',
    highlighted: true,
    tags: ['Scholarship', 'Academic'],
  },
  {
    id: 'hackathon-head-devday',
    type: 'recognition',
    title: 'Hackathon Head',
    issuer: "Developers' Day — ACM NUCES",
    date: '2026',
    description: "Selected to lead the Hackathon module at Developers' Day, FAST-NUCES flagship annual event.",
    tags: ['Leadership', 'ACM'],
  },
  {
    id: 'procom-co-head',
    type: 'recognition',
    title: 'AI Competitions Co-Head',
    issuer: 'PROCOM — IBA Karachi',
    date: '2025',
    description: 'Co-led the AI Grand Prix competition module at PROCOM, one of Pakistan\'s largest tech fests.',
    tags: ['Leadership', 'AI'],
  },
  {
    id: 'aptech-diploma',
    type: 'certificate',
    title: 'Advanced Diploma in Software Engineering',
    issuer: 'Aptech Learning Center',
    date: '2025',
    description: 'Completed a comprehensive 3-year advanced software engineering program covering full-stack development.',
    tags: ['Education', 'Diploma'],
  },
  {
    id: 'bwai-hackathon',
    type: 'award',
    title: 'BuildWithAI Hackathon Participant',
    issuer: 'BuildWithAI',
    date: '2024',
    description: 'Built AI Interview Coach — a real-time AI interview prep platform with 3D visualization during the hackathon.',
    tags: ['Hackathon', 'AI'],
  },
];

// Icon map for achievement types (used in UI)
export const achievementTypeConfig: Record<AchievementType, { label: string; color: string; tagClass: string }> = {
  certificate:  { label: 'Certificate',  color: '#6366f1', tagClass: 'tag-indigo'  },
  award:        { label: 'Award',         color: '#38bdf8', tagClass: 'tag-cyan'    },
  scholarship:  { label: 'Scholarship',   color: '#34d399', tagClass: 'tag-emerald' },
  competition:  { label: 'Competition',   color: '#fbbf24', tagClass: 'tag-amber'   },
  recognition:  { label: 'Recognition',   color: '#f472b6', tagClass: 'tag-rose'    },
};
