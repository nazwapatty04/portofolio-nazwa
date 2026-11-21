export type StickerCategory = 'data-office' | 'ui-design' | 'productivity';

export interface SoftwareSticker {
  id: string;
  label: string;
  sublabel?: string;
  emoji?: string;
  category: StickerCategory;
  info: string;
  detail: string;
  ariaLabel: string;
  tooltip: string;
  tiltClass: string;
  surfaceClass: string;
  labelClass: string;
}

export interface ExperienceItem {
  id: string;
  badgeLabel: string;
  organization: string;
  period: string;
  role: string;
  description: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  program: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  filterKey: 'financial' | 'uiux' | 'media';
  year: string;
  title: string;
  summary: string;
  tools: string;
  role: string;
  overview: string;
  deliverables: string[];
  outcome: string;
}

export interface CompetencyItem {
  id: string;
  title: string;
  description: string;
}

export const PROFILE = {
  fullName: 'Nazwa Sharifa Aprilia Patty',
  nickname: 'Wawa',
  role: 'Information System Undergraduate',
  institutionShort: 'ITPLN Jakarta',
  email: 'nazwapatty4@gmail.com',
  location: 'Ambon, Maluku / Jakarta, Indonesia',
  instagramHandle: '@nazwaptty',
  instagramUrl: 'https://instagram.com/nazwaptty',
  phoneDisplay: '+62 895-XXXX-XXXX',
  wordmarkUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDU_fmF-PtVsNTBVY39Q44D2sRVxn8xtkYwp__BkVmVa6Wmbh0Fo_unK2gCOgA5-PRthTws4BmnC-n_RS_BmY2icsimH6dyK7mEM__I-MiWI5fgr_EUs6ua_7ophJsOJwbnMKREtaDDt05Wxf3TNN7BMAgWFZ5gqmPeBBBJO6M4EXCbXTS-oHIoB8HWtZ0v_XeKckjvz1jgyzkv_VF02U6QV2cQlGPJnPKZdCEyXWY',
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDUi5wLRNveHFHy1X3Eb5jiyZaSvcxdu-BlVG-cxDLuRCltOD3nrr_N4_HXrS7UZv64zlmDU-UAWFMpgZF_0YlWH7w5eui89tmbZnSTbQS8_7aWfSelOIYMRPpB9WjaIpi6wmqQ1sYzVPLtcrLjE496HFRfZukcMFJhYYqbe1f83ai2CXhyFiYBny81tqZ_ih0GbIHwYMJa1TPc1Ls20pIpfGc0xL3x53JUl38umirhx-J8FpgileNE',
};

export const SOFTWARE_STICKERS: SoftwareSticker[] = [
  {
    id: 'excel',
    label: 'Excel',
    emoji: '📊',
    category: 'data-office',
    info: 'Excel · Financial Models & Ledgers',
    detail: 'Automated cashflow trackers, pivot summaries, and treasurer audit ledgers.',
    ariaLabel: 'Microsoft Excel: Financial Models and Ledgers',
    tooltip: 'Excel — Financial Models & Ledgers',
    tiltClass: '-rotate-2',
    surfaceClass: 'bg-gradient-to-br from-emerald-500 to-green-700 text-white',
    labelClass: 'text-xs uppercase font-syne font-bold tracking-tight',
  },
  {
    id: 'figma',
    label: 'FIGMA',
    emoji: '✦',
    category: 'ui-design',
    info: 'Figma · UI Wireframing & Components',
    detail: 'Interactive prototypes, student dashboard wireframes, and component libraries.',
    ariaLabel: 'Figma: UI Wireframing and Components',
    tooltip: 'Figma — UI Wireframing & Components',
    tiltClass: 'rotate-1',
    surfaceClass: 'bg-[#1E1E1E] text-white',
    labelClass: 'text-xs uppercase font-syne font-bold text-[#F24E1E]',
  },
  {
    id: 'canva',
    label: 'Canva',
    category: 'ui-design',
    info: 'Canva · Social Visuals & Infographics',
    detail: 'Campaign posters, event carousels, and clean educational infographic layouts.',
    ariaLabel: 'Canva: Social Visuals and Infographics',
    tooltip: 'Canva — Social Visuals & Infographics',
    tiltClass: '-rotate-1',
    surfaceClass: 'bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] text-white font-extrabold',
    labelClass: 'font-bubble text-sm font-bold',
  },
  {
    id: 'notion',
    label: 'Notion',
    emoji: '📋',
    category: 'productivity',
    info: 'Notion · Workspace & Knowledge Base',
    detail: 'Centralized organization wikis, sprint boards, and coursework trackers.',
    ariaLabel: 'Notion: Workspace and Knowledge Base',
    tooltip: 'Notion — Workspace & Knowledge Base',
    tiltClass: 'rotate-2',
    surfaceClass: 'bg-zinc-900 text-white',
    labelClass: 'font-syne text-xs uppercase font-bold text-amber-200',
  },
  {
    id: 'capcut',
    label: 'CapCut',
    emoji: '✂️',
    category: 'ui-design',
    info: 'CapCut · Video Reels & Motion',
    detail: 'Short-form campaign editing, motion captions, and pacing for youth outreach.',
    ariaLabel: 'CapCut: Video Reels and Motion',
    tooltip: 'CapCut — Video Reels & Motion',
    tiltClass: '-rotate-2',
    surfaceClass: 'bg-neutral-950 text-white',
    labelClass: 'font-syne text-xs uppercase font-bold',
  },
  {
    id: 'webdev',
    label: '</>',
    sublabel: 'Web Dev',
    category: 'ui-design',
    info: 'HTML/CSS · Web Prototyping Basics',
    detail: 'Semantic HTML structure, responsive grids, and editorial web layout styling.',
    ariaLabel: 'HTML and CSS: Web Prototyping Basics',
    tooltip: 'HTML/CSS — Web Prototyping',
    tiltClass: 'rotate-1',
    surfaceClass: 'bg-burgundy text-starburst',
    labelClass: 'font-mono text-xs font-bold',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'pmr',
    badgeLabel: "'23-25",
    organization: 'Red Cross Teen (PMR) — Palang Merah Remaja',
    period: '2023 – 2025',
    role: 'General Treasurer (Bendahara Umum)',
    description:
      'Managed organizational budgeting, transparent cashflow accounting, fundraising initiatives, and fund distribution for school health services, humanitarian drills, and youth leadership training.',
  },
  {
    id: 'itpln-community',
    badgeLabel: '2026',
    organization: 'Information System Student Community (ITPLN)',
    period: '2026 – Present',
    role: 'Active Member & Academic Project Contributor',
    description:
      'Engaged in faculty workshops on enterprise databases, IT system modeling, and collaborative UI/UX application prototyping.',
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'itpln',
    period: '2026 – NOW',
    institution: 'Institut Teknologi PLN (ITPLN) Jakarta',
    program: 'Bachelor of Information System · Faculty of Telematics and Energy',
  },
  {
    id: 'sman11',
    period: '2023 – 2026',
    institution: 'SMA Negeri 11 Ambon',
    program: 'High School Diploma · Mathematics & Natural Sciences Track',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'treasury-ledger',
    category: 'FINANCIAL SYSTEM',
    filterKey: 'financial',
    year: '2024',
    title: 'Student Organization Treasury Ledger',
    summary:
      'Automated Google Sheets & Excel accounting database designed for PMR youth chapter to track event cashflows, budget allocation forecasts, and proof-of-payment auditing.',
    tools: 'Excel · Formulas · Reporting',
    role: 'System Designer & General Treasurer',
    overview:
      'Built a structured multi-sheet financial tracking ledger to eliminate manual reconciliation errors across school health drives, fundraising events, and monthly membership dues.',
    deliverables: [
      'Automated income/expense ledger with category validation & running balance formulas',
      'Monthly audit summary template with receipt reference indexing',
      'Event budget forecast vs. actual variance dashboard for committee review',
    ],
    outcome:
      'Delivered 100% transparent end-of-term financial reporting across 2023–2025 organizational cycles.',
  },
  {
    id: 'energy-monitor',
    category: 'UI/UX PROTOTYPE',
    filterKey: 'uiux',
    year: '2025',
    title: 'Campus Electricity & Energy Monitor',
    summary:
      'Conceptual interactive dashboard created in Figma for ITPLN students to monitor laboratory power consumption, green energy savings, and reserve study slots.',
    tools: 'Figma · Wireframing · UX Flow',
    role: 'UI/UX Designer & System Analyst',
    overview:
      'Designed an academic student-portal concept bridging telematics & energy awareness—allowing students to check lab occupancy, track kilowatt usage trends, and book workstation slots.',
    deliverables: [
      'End-to-end user flow & low-to-high fidelity wireframes in Figma',
      'Modular component system for energy cards, reservation states, and lab alerts',
      'Interactive prototype demonstrating mobile & desktop responsive breakpoints',
    ],
    outcome:
      'Presented as a faculty-aligned Information Systems concept uniting sustainability metrics with student utility.',
  },
  {
    id: 'health-campaign',
    category: 'DIGITAL MEDIA',
    filterKey: 'media',
    year: '2024',
    title: 'Health Awareness & First Aid Campaign',
    summary:
      'Integrated visual identity campaign comprising infographic posters, social media carousels, and short educational video guides for regional youth healthcare events.',
    tools: 'Canva · CapCut · Visuals',
    role: 'Visual Communication & Media Lead',
    overview:
      'Created an approachable, youth-friendly visual communication kit for first-aid readiness and school health education, pairing punchy infographic hierarchy with short motion reels.',
    deliverables: [
      'Print-ready A3 educational posters and event signage templates',
      'Multi-slide Instagram carousel series covering first-aid essentials',
      'Short-form CapCut informational video reels with clear caption pacing',
    ],
    outcome:
      'Boosted student participation and streamlined event onboarding materials across regional PMR activities.',
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'financial',
    title: 'Financial Governance',
    description:
      'Proficient in organizational fund allocation, operational ledger oversight, audit verification, and transparent reporting standards.',
  },
  {
    id: 'systems',
    title: 'Systems Thinking',
    description:
      'Foundations in database structuring, entity relationship modeling, business process documentation, and IT system life-cycles.',
  },
  {
    id: 'visual',
    title: 'Visual Communication',
    description:
      'Competent in digital storytelling, Figma UI mockups, infographics with Canva, and video post-production for engagement.',
  },
];
