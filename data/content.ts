export const personalInfo = {
  name: 'Anas Furqan',
  title: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'Real-Time Systems Builder',
    'AI-Focused Developer',
    'Hackathon Lead',
    'Systems Engineer',
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

export const featuredProject = {
  name: 'LIGMA',
  fullName: 'Live Interactive Group Mapping & Actions',
  tagline: 'Real-Time Collaborative Workspace',
  description:
    'A production-grade real-time collaborative brainstorming platform. Teams work together on an infinite canvas with live delta sync, conflict resolution, and AI-powered task extraction.',
  highlights: [
    { label: 'CRDT Conflict Resolution', desc: 'Yjs-powered merge strategy — concurrent edits preserved, never silently overwritten' },
    { label: 'WebSocket Infrastructure', desc: 'Socket.IO + y-socket.io with 50ms debounced delta sync across clients' },
    { label: 'Node-Level RBAC', desc: 'Fine-grained access control per canvas element — enforced server-side on every mutation' },
    { label: 'Event Sourcing', desc: 'Immutable append-only event log enables session replay and state reconstruction' },
    { label: 'AI Text Classification', desc: 'Classifies canvas content into action items, decisions, questions, references' },
    { label: 'Presence Heatmaps', desc: 'Activity density visualization across the shared canvas in real time' },
  ],
  architecture: 'Next.js frontend + Node.js/Express backend + PostgreSQL + MinIO object storage',
  tech: [
    'Next.js', 'TypeScript', 'Socket.IO', 'Yjs', 'Excalidraw',
    'Zustand', 'PostgreSQL', 'MinIO', 'Express.js', 'JWT',
    'y-webrtc', 'y-indexeddb', 'Framer Motion',
  ],
  github: 'https://github.com/Anas-Furqan/LIGMA-DevDay',
  demo: 'https://ligma-dd.vercel.app/',
  category: 'Flagship — DevDay Hackathon',
  role: 'Full Stack Architect & Lead Developer',
};

export const projects = [
  {
    id: 'ai-interview',
    name: 'AI Interview Coach',
    tagline: 'Conversational AI interview prep platform',
    description:
      'An AI-powered interview coaching platform with 3D visualization, real-time feedback, and Firebase-backed sessions. Built during BuildWithAI hackathon.',
    tech: ['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'Firebase', 'Framer Motion', 'MUI', 'Recharts'],
    github: 'https://github.com/Anas-Furqan/AI-Interview-Coach-BWAI-Frontend',
    demo: 'https://ai-interview-bwai.vercel.app/',
    category: 'AI / 3D',
    accent: '#6366f1',
    event: 'BuildWithAI Hackathon',
  },
  {
    id: 'psl-nexus',
    name: 'PSL Nexus',
    tagline: 'Web3 cricket prediction platform on Ethereum',
    description:
      'A blockchain-powered PSL cricket engagement platform. Users connect wallets, make on-chain predictions, and interact with 3D visualizations of match data.',
    tech: ['Next.js', 'TypeScript', 'Wagmi', 'Viem', 'RainbowKit', 'React Three Fiber', 'Drei', 'GSAP', 'Framer Motion', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/Anas-Furqan/PSL-Nexus',
    demo: 'https://psl-nexus-jet.vercel.app/',
    category: 'Web3 / Blockchain',
    accent: '#22d3ee',
    blockchain: true,
  },
];

export const experiences = [
  {
    role: 'Hackathon Head',
    org: "Developers' Day — ACM NUCES",
    type: 'Leadership',
    period: 'Feb 2026 – Present',
    location: 'Karachi, Pakistan',
    current: true,
    points: [
      "Leading the Hackathon module for Developers' Day (FAST-NUCES flagship event)",
      'Managing end-to-end event execution, judge coordination, and team operations',
      'Overseeing 100+ participant hackathon logistics and problem statements',
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
      'Co-Head of AI Grand Prix — PROCOM AI competition module',
      'Designed and executed AI-focused competition challenges',
      'Ensured smooth cross-team coordination and operations',
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
      'Building backend APIs and scalable web systems',
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
      'Collaborated with senior developers on real client projects',
    ],
    color: '#f59e0b',
  },
];

export const education = [
  {
    degree: 'B.S. Computer Science',
    institution: 'FAST-NUCES',
    period: 'July 2025 – Present',
    note: '100% Merit Scholarship — 2nd position in Karachi (BIEK)',
    status: 'In Progress',
    color: '#6366f1',
  },
  {
    degree: 'Advanced Diploma in Software Engineering',
    institution: 'Aptech Learning Center',
    period: '2022 – 2025',
    note: 'Comprehensive full-stack software engineering program',
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
];

export const techStack = {
  Frontend: [
    { name: 'React', level: 'Expert' },
    { name: 'Next.js', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'Framer Motion', level: 'Advanced' },
    { name: 'Three.js / R3F', level: 'Intermediate' },
    { name: 'Excalidraw', level: 'Intermediate' },
    { name: 'Zustand', level: 'Advanced' },
  ],
  'Real-Time': [
    { name: 'Socket.IO', level: 'Advanced' },
    { name: 'Yjs (CRDT)', level: 'Advanced' },
    { name: 'WebRTC', level: 'Intermediate' },
    { name: 'y-socket.io', level: 'Advanced' },
  ],
  Backend: [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'JWT Auth', level: 'Advanced' },
    { name: 'REST APIs', level: 'Expert' },
  ],
  Database: [
    { name: 'PostgreSQL', level: 'Advanced' },
    { name: 'MinIO', level: 'Intermediate' },
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
  ],
  Blockchain: [
    { name: 'Wagmi', level: 'Intermediate' },
    { name: 'Viem', level: 'Intermediate' },
    { name: 'RainbowKit', level: 'Intermediate' },
    { name: 'Ethereum / EVM', level: 'Intermediate' },
  ],
  Animation: [
    { name: 'Framer Motion', level: 'Advanced' },
    { name: 'GSAP', level: 'Intermediate' },
    { name: 'CSS Animations', level: 'Expert' },
  ],
};
