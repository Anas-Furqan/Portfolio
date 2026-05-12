export const personalInfo = {
  name: 'Anas Furqan',
  title: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'Real-Time Systems Builder',
    'AI-Focused Developer',
    'Hackathon Lead',
    'Systems Engineer',
    'Competitive Programmer',
  ],
  tagline: 'Building production systems at the intersection of performance, real-time collaboration, and AI.',
  location: 'Karachi, Pakistan',
  email: 'anasfurqan643@gmail.com',
  phone: '+92 317 4724801',
  github: 'https://github.com/Anas-Furqan',
  linkedin: 'https://www.linkedin.com/in/anas-furqan/',
  whatsapp: 'https://wa.me/+923174724801',
  bio: `I build systems that move fast and scale. From real-time collaborative platforms with CRDT conflict resolution to Web3 applications with on-chain mechanics — I care deeply about the architecture behind the experience.`,
};

/* ════════════════════════════════════════
   FLAGSHIP PROJECT
════════════════════════════════════════ */

export const featuredProject = {
  name: 'LIGMA',
  fullName: 'Live Interactive Group Mapping & Actions',
  tagline: 'Real-Time Collaborative Workspace',
  description:
    'A production-grade real-time collaborative brainstorming platform. Teams work together on an infinite canvas with live delta sync, CRDT conflict resolution, AI-powered task extraction, and node-level access control.',
  highlights: [
    { label: 'CRDT Conflict Resolution',  desc: 'Yjs-powered merge strategy — concurrent edits preserved, never silently overwritten' },
    { label: 'WebSocket Infrastructure',  desc: 'Socket.IO + y-socket.io with 50ms debounced delta sync across clients' },
    { label: 'Node-Level RBAC',           desc: 'Fine-grained access control per canvas element — enforced server-side on every mutation' },
    { label: 'Event Sourcing',            desc: 'Immutable append-only event log enables session replay and state reconstruction' },
    { label: 'AI Text Classification',   desc: 'Classifies canvas content into action items, decisions, questions, references' },
    { label: 'Presence Heatmaps',        desc: 'Activity density visualization across the shared canvas in real time' },
  ],
  architecture: 'Next.js frontend + Node.js/Express backend + PostgreSQL + MinIO object storage',
  tech: ['Next.js', 'TypeScript', 'Socket.IO', 'Yjs', 'Excalidraw', 'Zustand', 'PostgreSQL', 'MinIO', 'Express.js', 'JWT', 'y-webrtc', 'Framer Motion'],
  github: 'https://github.com/Anas-Furqan/LIGMA-DevDay',
  demo: 'https://ligma-dd.vercel.app/',
  image: '/projects/portfolio.PNG',
  category: 'Flagship — DevDay Hackathon',
  role: 'Full Stack Architect & Lead Developer',
};

/* ════════════════════════════════════════
   ALL PROJECTS
════════════════════════════════════════ */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
  category: string;
  accent: string;
  featured: boolean;
  event?: string;
  blockchain?: boolean;
  badge?: string;
}

export const projects: Project[] = [
  /* ── Featured ── */
  {
    id: 'ai-interview',
    name: 'AI Interview Coach',
    tagline: 'AI-powered interview preparation platform',
    description: 'Real-time AI interview coaching platform with 3D visualization, live feedback, PDF resume generation, and Firebase-backed sessions. Built during BuildWithAI hackathon.',
    tech: ['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'Firebase', 'Framer Motion', 'MUI', 'Recharts', 'jsPDF'],
    github: 'https://github.com/Anas-Furqan/AI-Interview-Coach-BWAI-Frontend',
    demo: 'https://ai-interview-bwai.vercel.app/',
    image: '/portfolio.png',
    category: 'AI / 3D',
    accent: '#818cf8',
    featured: true,
    event: 'BuildWithAI Hackathon',
  },
  {
    id: 'psl-nexus',
    name: 'PSL Nexus',
    tagline: 'Web3 cricket prediction platform on Ethereum',
    description: 'Blockchain-powered PSL cricket engagement platform. Users connect wallets via RainbowKit, make on-chain predictions, and interact with 3D match visualizations.',
    tech: ['Next.js', 'TypeScript', 'Wagmi', 'Viem', 'RainbowKit', 'React Three Fiber', 'Drei', 'GSAP', 'Framer Motion', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/Anas-Furqan/PSL-Nexus',
    demo: 'https://psl-nexus-jet.vercel.app/',
    category: 'Web3 / Blockchain',
    accent: '#38bdf8',
    featured: true,
    blockchain: true,
  },
  {
    id: 'competiconnect',
    name: 'CompetiConnect',
    tagline: 'Competitor-to-competition matchmaking platform',
    description: 'Built as part of the AI FEST winning team. A platform that connects competitors with relevant competitions using intelligent matching, real-time leaderboards, and event management.',
    tech: ['React', 'TypeScript', 'Node.js', 'TailwindCSS'],
    github: 'https://github.com/owaisrafiq05/CompetiConnect-Frontend-NED',
    demo: 'https://competi-connect-frontend-ned.vercel.app',
    category: 'AI / Web',
    accent: '#fbbf24',
    featured: true,
    event: 'AI FEST Winner 🏆',
    badge: 'Won',
  },
  {
    id: 'national-tax',
    name: 'National Tax Law Associates',
    tagline: 'Full-stack consultancy platform',
    description: 'Full-stack web application for a tax consultancy firm with dynamic content management, React frontend, Node.js backend, and MongoDB database.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'HeroUI', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Anas-Furqan/National-Tax-Frontend-TECHWON',
    demo: 'https://nationaltaxassociates.com',
    image: '/projects/national.png',
    category: 'Full Stack',
    accent: '#34d399',
    featured: true,
  },

  /* ── More projects (expandable) ── */
  {
    id: 'nail-art',
    name: 'Nail Art Studio',
    tagline: 'Elegant landing page for a nail art studio',
    description: 'Responsive, beautifully animated landing page for a nail art studio. Pure HTML/CSS/JS with custom animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Anas-Furqan/Nail-Art',
    demo: 'https://anas-furqan.github.io/Nail-Art/',
    image: '/projects/nail-art.PNG',
    category: 'Frontend',
    accent: '#f472b6',
    featured: false,
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    tagline: 'Personal developer portfolio',
    description: 'Personal portfolio built with React, Tailwind CSS, and Framer Motion — the very site you\'re viewing.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/Anas-Furqan/Portfolio',
    demo: 'https://portfolio-anasfurqan.vercel.app',
    image: '/projects/portfolio.PNG',
    category: 'Frontend',
    accent: '#818cf8',
    featured: false,
  },
  {
    id: 'khata-app',
    name: 'Cloth Inventory Management',
    tagline: 'Ledger + billing system for a cloth business',
    description: 'Full-stack Laravel + React app to manage customer ledgers, generate bills, track outstanding dues, and handle inventory for a cloth business.',
    tech: ['PHP', 'Laravel', 'React.js', 'Inertia.js', 'MySQL'],
    github: 'https://github.com/Anas-Furqan/khata-app',
    demo: '#',
    image: '/projects/khata-app.PNG',
    category: 'Full Stack',
    accent: '#34d399',
    featured: false,
  },
  {
    id: 'decorvista',
    name: 'Decor Vista',
    tagline: 'eCommerce platform for home decor',
    description: 'Full-stack eCommerce application for a home decor brand built with Laravel, featuring dynamic product management, cart, and orders.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/Anas-Furqan/DecorVIsta',
    demo: '#',
    image: '/projects/decorvista.PNG',
    category: 'Full Stack',
    accent: '#f59e0b',
    featured: false,
  },
  {
    id: 'thebook',
    name: 'The Book Platform',
    tagline: 'Author publishing & book marketplace',
    description: 'Laravel-based platform where authors register and publish books, with secure authentication, admin panel, and reader discovery features.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/Anas-Furqan/TheBook',
    demo: '#',
    image: '/projects/thebook.PNG',
    category: 'Full Stack',
    accent: '#38bdf8',
    featured: false,
  },
  {
    id: 'plantnest',
    name: 'Plant Nest',
    tagline: 'Plant eCommerce platform',
    description: 'Laravel-powered eCommerce platform dedicated to selling plants and accessories with seamless ordering and product management.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/Anas-Furqan/PlantNest',
    demo: '#',
    image: '/projects/plantnest.PNG',
    category: 'Full Stack',
    accent: '#34d399',
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const moreProjects = projects.filter(p => !p.featured);

/* ════════════════════════════════════════
   EXPERIENCE
════════════════════════════════════════ */

export const experiences = [
  {
    role: 'Hackathon Head',
    org: "Developers' Day — ACM NUCES",
    type: 'Leadership',
    period: 'Feb 2026 – Present',
    location: 'Karachi, Pakistan',
    current: true,
    points: [
      "Leading the Hackathon module for Developers' Day (FAST-NUCES flagship annual event)",
      'Managing end-to-end execution: problem statements, judge coordination, team logistics',
      'Overseeing 100+ participant hackathon operations',
    ],
    color: '#6366f1',
  },
  {
    role: 'AI Competitions Module Co-Head',
    org: 'PROCOM — IBA Karachi',
    type: 'Leadership',
    period: 'Nov 2025 – Present',
    location: 'Karachi, Pakistan',
    current: true,
    points: [
      'Co-headed the AI Grand Prix competition module at PROCOM',
      'Designed AI-focused competition challenges and coordinated event operations',
    ],
    color: '#8b5cf6',
  },
  {
    role: 'Hackathon Co-Head',
    org: 'ACM NUCES KHI',
    type: 'Leadership',
    period: 'Oct 2025 – Present',
    location: 'Karachi, Pakistan',
    current: true,
    points: [
      'Led hackathon competition execution for the ACM chapter',
      'Coordinated participants, mentors, judges, and event flow',
    ],
    color: '#06b6d4',
  },
  {
    role: 'Backend Developer',
    org: 'Techwon',
    type: 'Freelance',
    period: 'Feb 2026 – Present',
    location: 'Remote',
    current: true,
    points: [
      'Building backend APIs and scalable web systems for client projects',
      'Contributing to production-grade client solutions',
    ],
    color: '#10b981',
  },
  {
    role: 'Laravel Developer (Intern)',
    org: 'Tech Xperts',
    type: 'Internship',
    period: 'Aug 2024 – Oct 2024',
    location: 'Karachi, Pakistan',
    current: false,
    points: [
      'Built and maintained Laravel-based production applications',
      'Collaborated with senior developers on real client deliverables',
    ],
    color: '#f59e0b',
  },
];

/* ════════════════════════════════════════
   EDUCATION
════════════════════════════════════════ */

export const education = [
  {
    degree: 'B.S. Computer Science',
    institution: 'FAST-NUCES',
    period: 'July 2025 – Present',
    note: '100% Merit Scholarship — 2nd position across Karachi (BIEK)',
    status: 'In Progress',
    color: '#6366f1',
  },
  {
    degree: 'Advanced Diploma in Software Engineering',
    institution: 'Aptech Learning Center',
    period: '2022 – 2025',
    note: 'Distinction — comprehensive 3-year full-stack engineering program',
    status: 'Completed',
    color: '#8b5cf6',
  },
  {
    degree: 'Intermediate — Computer Science',
    institution: 'Bahria College Karsaz',
    period: '2023 – 2025',
    note: '2nd Position — BIEK Board, Karachi',
    status: 'Completed',
    color: '#06b6d4',
  },
  {
    degree: 'Matriculation — Computer Science',
    institution: 'Al-Badar Higher Secondary School',
    period: '2021 – 2023',
    note: 'Foundation in computer science and mathematics',
    status: 'Completed',
    color: '#10b981',
  },
];

/* ════════════════════════════════════════
   TECH STACK (REAL only)
════════════════════════════════════════ */

export const techStack = {
  Frontend: [
    { name: 'React',           level: 'Expert' },
    { name: 'Next.js',         level: 'Expert' },
    { name: 'TypeScript',      level: 'Advanced' },
    { name: 'Tailwind CSS',    level: 'Expert' },
    { name: 'Framer Motion',   level: 'Advanced' },
    { name: 'Three.js / R3F',  level: 'Intermediate' },
    { name: 'Excalidraw',      level: 'Intermediate' },
    { name: 'Zustand',         level: 'Advanced' },
    { name: 'MUI',             level: 'Intermediate' },
  ],
  'Real-Time': [
    { name: 'Socket.IO',   level: 'Advanced' },
    { name: 'Yjs (CRDT)',  level: 'Advanced' },
    { name: 'WebRTC',      level: 'Intermediate' },
    { name: 'y-socket.io', level: 'Advanced' },
    { name: 'y-webrtc',    level: 'Intermediate' },
  ],
  Backend: [
    { name: 'Node.js',     level: 'Advanced' },
    { name: 'Express.js',  level: 'Advanced' },
    { name: 'Laravel',     level: 'Advanced' },
    { name: 'PHP',         level: 'Advanced' },
    { name: 'JWT Auth',    level: 'Advanced' },
    { name: 'REST APIs',   level: 'Expert' },
  ],
  Database: [
    { name: 'PostgreSQL',  level: 'Advanced' },
    { name: 'MySQL',       level: 'Advanced' },
    { name: 'MongoDB',     level: 'Intermediate' },
    { name: 'MinIO',       level: 'Intermediate' },
    { name: 'Firebase',    level: 'Intermediate' },
  ],
  Blockchain: [
    { name: 'Wagmi',       level: 'Intermediate' },
    { name: 'Viem',        level: 'Intermediate' },
    { name: 'RainbowKit',  level: 'Intermediate' },
    { name: 'Ethereum/EVM',level: 'Intermediate' },
  ],
  Animation: [
    { name: 'Framer Motion', level: 'Advanced' },
    { name: 'GSAP',          level: 'Intermediate' },
    { name: 'CSS Animations',level: 'Expert' },
  ],
};
