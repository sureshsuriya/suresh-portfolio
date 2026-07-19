import {
  Coffee, Leaf, Atom, Database, GitBranch, Globe,
  Terminal, Server, Layers, CheckCircle2
} from 'lucide-react';

export const projects = [
  {
    name: 'HEPTA',
    role: 'CDIS Internship — Bishop Heber College',
    desc: 'An institutional portal streamlining student record management, departmental workflows, and internal document routing for Bishop Heber College.',
    bullets: [
      'Developed a comprehensive institutional portal for managing student records and department workflows efficiently.',
      'Designed and implemented a scalable relational schema in MySQL to handle multi-departmental data.',
      'Architected secure internal document routing systems facilitating seamless communication between departments.',
    ],
    stack: ['PHP', 'MySQL'],
    github: '#',
    demo: null,
  },
  {
    name: 'FarmToHome',
    role: 'T4TEQ Internship',
    desc: 'An agricultural marketplace platform enabling direct transactions between farmers and buyers, powered by a REST API backend and a document-driven catalog.',
    bullets: [
      'Engineered a robust REST API layer to connect farmers directly to buyers, improving market accessibility.',
      'Architected the product catalog and order management system utilizing MongoDB.',
      'Designed and developed scalable endpoints for product listings, shopping cart functionality, and real-time order tracking.',
    ],
    stack: ['Django REST', 'MongoDB'],
    github: '#',
    demo: null,
  },
  {
    name: 'JobTrackr',
    role: 'Personal Build',
    desc: 'An automated job application tracking system that parses application-confirmation emails to log and visualize status changes over time.',
    bullets: [
      'Integrated the Gmail API to automatically parse and detect job application confirmation emails.',
      'Developed a Spring Boot backend to seamlessly log and update application statuses in real time.',
      'Built an intuitive React dashboard to visualize the job application pipeline and track progress effectively.',
    ],
    stack: ['Spring Boot', 'React', 'Gmail API'],
    github: '#',
    demo: null,
  },
];

export const certifications = [
  { name: 'MongoDB Schema Design Patterns & Anti-patterns', issuer: 'MongoDB (Credly)', date: 'Dec 2025' },
  { name: "From Relational Model (SQL) to MongoDB's Document Model", issuer: 'MongoDB University', date: 'Dec 2025' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', date: 'Jan 2026' },
  { name: 'Introduction to End-to-End Analytics using Microsoft Fabric', issuer: 'Microsoft', date: '2025' },
  { name: 'Discover Data Analysis', issuer: 'Microsoft Learn', date: '2025' },
  { name: 'Introduction to Object-Oriented Programming with Python', issuer: 'Microsoft Learn', date: '2024' },
  { name: 'Introduction to Python', issuer: 'Microsoft Learn', date: '2024' },
  { name: 'Programming in Python', issuer: 'T4TEQ Software Solutions', date: '2026' },
  { name: 'Backend Development with Django', issuer: 'T4TEQ Software Solutions', date: '2026' },
  { name: 'Django Full Stack Internship Certificate', issuer: 'T4TEQ Software Solutions', date: '2026' },
  { name: 'Learning Spring 6 with Spring Boot 3', issuer: 'LinkedIn Learning', date: '2025' },
  { name: 'Blockchain Basics', issuer: 'LinkedIn Learning', date: 'May 2025' },
  { name: 'Business Analysis & Process Management', issuer: 'Coursera Project Network', date: '2025' },
  { name: '5-Day AI Agents Intensive Course (Days 1–5)', issuer: 'Kaggle × Google', date: '2025' },
  { name: "GSSoC '26 Contributor Selection", issuer: 'GirlScript Foundation', date: '2026' },
];

export const workshops = [
  { name: 'DevOps Workshop', issuer: 'SRM University', date: '2022' },
  { name: 'Research Paper Writing Tools: LaTeX & Overleaf', issuer: 'CBIT, Hyderabad', date: 'Aug 2023' },
  { name: 'Web Designing Workshop', issuer: 'MarcelloTech', date: '2022' },
  { name: 'JavaScript (5-Day Course)', issuer: "Let's Upgrade", date: '2023' },
  { name: 'Paper Presentation, BOOTFEST 2k22', issuer: 'Bishop Heber College', date: '2022' },
];

export const experience = [
  {
    role: 'Co-founder',
    org: 'TripleTechPhoenix',
    period: 'Ongoing',
    detail: 'Co-founded a web development studio, managing client projects, architecting scalable solutions, and driving personal technical initiatives while actively seeking full-time opportunities.',
  },
  {
    role: 'Contributor',
    org: 'GSSoC 2026',
    period: 'Ongoing',
    detail: 'Actively contributing to open-source repositories by identifying untested code paths, writing comprehensive unit tests, improving test coverage, and resolving technical issues.',
  },
  {
    role: 'Django Full Stack Intern',
    org: 'T4TEQ Software Solutions',
    period: '2026',
    detail: 'Developed FarmToHome, an agricultural marketplace application utilizing Django REST framework and MongoDB to connect farmers with consumers.',
  },
  {
    role: 'Intern',
    org: 'CDIS, Bishop Heber College',
    period: 'Aug 2023 – Dec 2023',
    detail: 'Engineered HEPTA (Heber e-Portal Template for AQAR), an institutional web portal leveraging PHP and MySQL to manage student records and departmental document routing.',
  },
];

export const javaSkills = [
  { name: 'Java', Icon: Coffee },
  { name: 'Spring Boot', Icon: Leaf },
  { name: 'React', Icon: Atom },
  { name: 'SQL', Icon: Database },
  { name: 'DSA', Icon: GitBranch },
  { name: 'REST APIs', Icon: Globe },
];

export const pythonSkills = [
  { name: 'Python', Icon: Terminal },
  { name: 'Django REST', Icon: Server },
  { name: 'MongoDB', Icon: Layers },
  { name: 'REST APIs', Icon: Globe },
  { name: 'Testing', Icon: CheckCircle2 },
];

export const contributions = [
  {
    repo: 'Checkora',
    detail: 'Authored comprehensive unit test coverage for achievement and active-game logic in game/services.py (Issue #2180).',
    stack: 'Django',
  },
  {
    repo: 'commitpulse',
    detail: 'Identified and drafted issues for utils/time.ts test coverage, hex color validation, and SVG tooltip UI enhancements.',
    stack: 'Next.js',
  },
  {
    repo: 'StudyPlan',
    detail: 'Resolved Open Graph meta tag issues and engineered a 35-test Jest suite ensuring robust authentication logic.',
    stack: 'Node.js · SQLite · Gemini AI',
  },
  {
    repo: 'gitverse-nextjs',
    detail: 'Developed a comprehensive TypeScript test suite for geminiService.ts to ensure reliability of AI integrations.',
    stack: 'Next.js · TypeScript',
  },
];
