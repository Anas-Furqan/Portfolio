import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiCode,
  FiCoffee,
  FiHeart,
  FiTarget,
  FiAward,
  FiUsers,
  FiGlobe,
  FiBook,
  FiUser,
  FiHome,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
} from 'react-icons/fi';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaWordpress,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiJquery,
  SiInertia,
  SiDotnet,
  SiMysql,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si';

// Hero Section
export const heroTexts = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Creative Thinker',
];

export const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Anas-Furqan', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anas-furqan/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:anasfurqan643@gmail.com', label: 'Email' },
];

// About Section
export const stats = [
  { number: '3+', label: 'Years Experience', icon: FiCode },
  { number: '10+', label: 'Projects Completed', icon: FiTarget },
  { number: '100%', label: 'Client Satisfaction', icon: FiHeart },
  { number: '\u221E', label: 'Cups of Coffee', icon: FiCoffee },
];

export const highlights = [
  {
    icon: FiAward,
    title: 'Problem Solver',
    description: 'Analytical approach to complex technical challenges',
  },
  {
    icon: FiUsers,
    title: 'Team Player',
    description: 'Excellent collaboration and communication skills',
  },
  {
    icon: FiGlobe,
    title: 'Global Mindset',
    description: 'Experience working with international teams',
  },
];

export const aboutSkills = [
  { name: 'Frontend Development', percentage: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend Development', percentage: 90, color: 'from-violet-500 to-purple-500' },
  { name: 'Database Design', percentage: 85, color: 'from-emerald-500 to-teal-500' },
  { name: 'DevOps & Deployment', percentage: 80, color: 'from-orange-500 to-amber-500' },
];

export const coreTechnologies = [
  'React',
  'Laravel',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Docker',
];

// Skills Section
export const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    skills: [
      { name: 'React.js', icon: FaReact, level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', icon: SiTypescript, level: 90, color: 'from-blue-600 to-blue-700' },
      { name: 'JavaScript', icon: FaJs, level: 95, color: 'from-yellow-400 to-yellow-500' },
      { name: 'HTML5', icon: FaHtml5, level: 98, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', icon: FaCss3Alt, level: 92, color: 'from-blue-500 to-blue-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: 'from-purple-500 to-purple-600' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs',
    skills: [
      { name: 'Laravel', icon: FaLaravel, level: 88, color: 'from-red-500 to-red-600' },
      { name: 'Node.js', icon: FaNodeJs, level: 85, color: 'from-green-500 to-green-600' },
      { name: 'PHP', icon: FaPhp, level: 90, color: 'from-purple-500 to-purple-600' },
      { name: 'ASP.NET', icon: SiDotnet, level: 80, color: 'from-purple-600 to-purple-700' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: 'from-blue-500 to-blue-600' },
      { name: 'MySQL', icon: SiMysql, level: 88, color: 'from-blue-600 to-blue-700' },
      { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'from-green-500 to-green-600' },
    ],
  },
  {
    title: 'Tools & Others',
    description: 'Essential tools and technologies for development',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 92, color: 'from-orange-500 to-red-500' },
      { name: 'GitHub', icon: FaGithub, level: 90, color: 'from-gray-700 to-gray-800' },
      { name: 'Inertia.js', icon: SiInertia, level: 85, color: 'from-purple-500 to-purple-600' },
      { name: 'WordPress', icon: FaWordpress, level: 80, color: 'from-blue-500 to-blue-600' },
      { name: 'jQuery', icon: SiJquery, level: 85, color: 'from-blue-500 to-blue-600' },
    ],
  },
];

export const additionalSkills = [
  'REST APIs',
  'GraphQL',
  'Docker',
  'AWS',
  'Firebase',
  'Redux',
  'Next.js',
  'Vue.js',
  'Sass',
  'Webpack',
  'Jest',
  'Cypress',
];

// Education Section
export const education = [
  {
    degree: 'Bachelors in Computer Science',
    institute: 'FAST-NUCES',
    duration: 'July 2025 - Present',
    description:
      'Got 100% Scholarship because of my second position in whole Karachi in BIEK. Pursuing comprehensive computer science education with focus on software engineering, algorithms, and modern development practices.',
    icon: FiHome,
    status: 'In Progress',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    degree: 'Advance Diploma in Software Engineering',
    institute: 'Aptech Learning Garden Center',
    duration: '2022 - 2025',
    description:
      'Comprehensive software engineering program covering modern development practices, algorithms, and full-stack development.',
    icon: FiCode,
    status: 'Completed',
    color: 'from-violet-500 to-purple-500',
  },
  {
    degree: 'Intermediate \u2013 Computer Science',
    institute: 'Bahria College Karsaz',
    duration: '2023 - 2025',
    description:
      'Got Second Position in BIEK.Advanced computer science studies with focus on programming fundamentals and software development principles.',
    icon: FiUser,
    status: 'Completed',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    degree: 'Matriculation \u2013 Computer Science',
    institute: 'Al-Badar Higher Secondary School',
    duration: '2021 - 2023',
    description: 'Foundation in computer science and mathematics, establishing core academic principles.',
    icon: FiBook,
    status: 'Completed',
    color: 'from-orange-500 to-amber-500',
  },
];

export const certifications = [
  {
    name: 'React.js Development',
    issuer: 'Meta',
    date: '2024',
    icon: FiAward,
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Web Development Fundamentals',
    issuer: 'freeCodeCamp',
    date: '2023',
    icon: FiAward,
    color: 'from-green-600 to-green-700',
  },
  {
    name: 'JavaScript Algorithms',
    issuer: 'HackerRank',
    date: '2023',
    icon: FiAward,
    color: 'from-yellow-600 to-orange-600',
  },
];

// Leadership & Professional Experience
export const experiences = [
  {
    role: 'Hackathon Head',
    organization: "Developers' Day - ACM NUCES",
    type: 'Seasonal',
    duration: 'Feb 2026 – Present',
    location: 'Karachi, Pakistan',
    description: [
      "Leading the Hackathon module for Developers' Day",
      'Managing overall event execution, coordination, and planning',
    ],
    skills: [],
    color: 'from-blue-500 to-cyan-500',
    current: true,
  },
  {
    role: 'AI Competitions Module Co-Head',
    organization: 'PROCOM',
    type: 'Seasonal',
    duration: 'Nov 2025 – Present',
    location: 'Karachi, Pakistan (Hybrid)',
    description: [
      'Co-Head – AI Grand Prix (PROCOM)',
      'Planned and executed AI-focused competition module',
      'Ensured smooth coordination and operations',
    ],
    skills: ['Web Development', 'Machine Learning'],
    color: 'from-violet-500 to-purple-500',
    current: true,
  },
  {
    role: 'Hackathon Co-Head',
    organization: 'ACM NUCES KHI',
    type: 'Seasonal',
    duration: 'Oct 2025 – Present',
    location: 'Karachi, Pakistan (Hybrid)',
    description: [
      'Led hackathon competition execution',
      'Coordinated teams, mentors, and event flow',
    ],
    skills: ['Event Management', 'Team Management'],
    color: 'from-emerald-500 to-teal-500',
    current: true,
  },
  {
    role: 'Back End Developer',
    organization: 'Techwon',
    type: 'Freelance',
    duration: 'Feb 2026 – Present',
    location: 'Remote',
    description: [
      'Working on backend systems and APIs',
      'Contributing to scalable web solutions',
    ],
    skills: [],
    color: 'from-orange-500 to-amber-500',
    current: true,
  },
  {
    role: 'Laravel Developer (Intern)',
    organization: 'Tech Xperts',
    type: 'Internship',
    duration: 'Aug 2024 – Oct 2024',
    location: 'Karachi, Pakistan (Hybrid)',
    description: [
      'Worked on Laravel-based projects',
      'Gained hands-on experience in real-world development',
      'Collaborated with team on production-level tasks',
    ],
    skills: [],
    color: 'from-red-500 to-rose-500',
    current: false,
  },
];

// Projects Section
export const projects = [
  {
    title: 'National Tax Law Associates',
    description:
      'A full-stack web application for a tax consultancy firm, built with React and Node.js, featuring dynamic content management and responsive design.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Hero UI', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/projects/national.png',
    github: 'https://github.com/Anas-Furqan/National-Tax-Frontend-TECHWON',
    demo: 'nationaltaxassociates.com',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Nail Art Studio',
    description:
      'A responsive and elegant landing page for a nail art studio, crafted with modern web technologies and beautiful animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/nail-art.PNG',
    github: 'https://github.com/Anas-Furqan/Nail-Art',
    demo: 'https://anas-furqan.github.io/Nail-Art/',
    category: 'Frontend',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React, Tailwind, Framer Motion, and fully responsive layout with modern design.',
    tech: ['React.js', 'Tailwind', 'Framer Motion'],
    image: '/projects/portfolio.PNG',
    github: 'https://github.com/Anas-Furqan/Portfolio',
    demo: 'https://portfolio-anasfurqan.vercel.app',
    category: 'Frontend',
    featured: true,
  },
  {
    title: 'Cloth Inventory Management',
    description:
      'A full-stack Laravel + React-based app to manage customer ledgers, generate bills, and track outstanding dues.',
    tech: ['PHP', 'Laravel', 'React.js', 'Inertia.js', 'MySQL'],
    image: '/projects/khata-app.PNG',
    github: 'https://github.com/Anas-Furqan/khata-app',
    demo: '#',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Decor Vista',
    description:
      'A full-stack eCommerce web application for a home decor brand, built with Laravel featuring dynamic product management.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/decorvista.PNG',
    github: 'https://github.com/Anas-Furqan/DecorVIsta',
    demo: '#',
    category: 'Full Stack',
    featured: false,
  },
  {
    title: 'The Book Platform',
    description:
      'A Laravel-based platform where authors can register and publish their books, featuring secure authentication.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/thebook.PNG',
    github: 'https://github.com/Anas-Furqan/TheBook',
    demo: '#',
    category: 'Full Stack',
    featured: false,
  },
  {
    title: 'Plant Nest',
    description:
      'A Laravel-powered eCommerce platform dedicated to selling plants and related accessories with seamless experience.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/projects/plantnest.PNG',
    github: 'https://github.com/Anas-Furqan/PlantNest',
    demo: '#',
    category: 'Full Stack',
    featured: false,
  },
  {
    title: 'Task Management App',
    description:
      'A modern task management application built with React and Node.js, featuring real-time updates and team collaboration.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    category: 'Full Stack',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with real-time data, interactive charts, and location-based forecasts.',
    tech: ['React.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    category: 'Frontend',
    featured: false,
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat application with user authentication, file sharing, and group chat functionality.',
    tech: ['React.js', 'Socket.io', 'Express.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    github: '#',
    demo: '#',
    category: 'Full Stack',
    featured: false,
  },
];

export const projectCategories = ['All', 'Frontend', 'Full Stack'];

// Contact Section
export const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'anasfurqan643@gmail.com',
    href: 'mailto:anasfurqan643@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+92 317 4724801',
    href: 'tel:+923174724801',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Pakistan',
    href: '#',
  },
];

export const contactSocialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/Anas-Furqan',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anas-furqan/',
    color: 'hover:text-blue-600',
  },
  {
    icon: FiMessageSquare,
    label: 'WhatsApp',
    href: 'https://wa.me/+923174724801',
    color: 'hover:text-green-600',
  },
];

// Footer Section
export const footerSocialLinks = [
  { icon: FiGithub, href: 'https://github.com/Anas-Furqan', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anas-furqan/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:anasfurqan643@gmail.com', label: 'Email' },
];

export const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Navigation
export const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
