export const getAssetPath = (assetPath) => {
  const configuredBase = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const basePath = configuredBase && !configuredBase.startsWith('/') ? `/${configuredBase}` : configuredBase;
  return `${basePath}${assetPath}`;
};

export const navigation = [
  { title: 'Systems', link: '#systems' },
  { title: 'Operating log', link: '#operating-log' },
  { title: 'Method', link: '#method' },
  { title: 'Background', link: '#background' },
  { title: 'Contact', link: '#contact' },
];

export const intro = {
  eyebrow: '~/so-nozaki',
  title: 'Founder-engineer shipping AI products across borders.',
  description: 'I build and operate privacy-aware SaaS, agent systems, and live communication tools from Japan and Thailand. My work turns fast-moving AI capability into products people can actually use.',
  image: getAssetPath('/images/profile.jpg'),
  status: [
    ['status', 'building'],
    ['mode', 'AI-first'],
    ['base', 'Japan ↔ Thailand'],
  ],
  actions: [
    { title: 'View systems', link: '#systems', primary: true },
    { title: 'GitHub', link: 'https://github.com/sonozaki7' },
    { title: 'Build log', link: 'https://github.com/sonozaki7#readme' },
  ],
};

export const products = [
  {
    index: '01',
    name: 'Nightforge',
    state: 'open source',
    href: 'https://github.com/sonozaki7/Nightforge',
    description: 'An autonomous software-engineering orchestrator for planning, isolated agent work, testing, release gates, and rollback.',
    tags: ['agents', 'orchestration', 'delivery'],
  },
  {
    index: '02',
    name: 'Call Jennie',
    state: 'live',
    href: 'https://call.jennielove.com',
    description: 'Private two-person meetings with separated audio, live captions, and one adaptive live interpreter.',
    tags: ['realtime', 'voice', 'translation'],
  },
  {
    index: '03',
    name: 'Qolso',
    state: 'live',
    href: 'https://qolso.com',
    description: 'A home for useful independent products and focused communities for remote workers, founders, and builders.',
    tags: ['products', 'community', 'remote work'],
  },
];

export const principles = [
  {
    command: 'ship --small',
    title: 'Short feedback loops',
    description: 'Break work into changes that can be tested, released, observed, and reversed without drama.',
  },
  {
    command: 'verify --live',
    title: 'Evidence over status',
    description: 'A passing build is not a working product. I check the real public journey and important failure paths.',
  },
  {
    command: 'guard --human',
    title: 'Authority stays clear',
    description: 'Sensitive account, payment, identity, and external-send decisions keep explicit owner control and audit trails.',
  },
  {
    command: 'learn --monthly',
    title: 'Measure the operating system',
    description: 'I track cadence, focused time, shipping density, launches, and revenue to improve how the company builds.',
  },
];

export const background = [
  {
    period: '2024 — now',
    role: 'Founder & consultant',
    place: 'Zoltraak LLC',
    description: 'Building independent AI products and delivering AI/data work across Japan, Thailand, and international teams.',
  },
  {
    period: '2023 — 2025',
    role: 'AI trainer',
    place: 'LLM and RLHF programs',
    description: 'Evaluated and improved model behavior across English, Japanese, and Thai contexts.',
  },
  {
    period: 'UBC',
    role: 'Computer Engineering',
    place: 'Vancouver, Canada',
    description: 'Built mobile, backend, safety, computer-vision, and smart-city systems; co-founded a competitive programming club.',
  },
];

export const proof = [
  ['languages', 'English · Japanese · Thai'],
  ['strength', 'full-stack product systems'],
  ['working style', 'owner-led · evidence-driven'],
  ['current edge', 'agent orchestration + realtime AI'],
];

export const contact = {
  title: 'Build something useful.',
  description: 'I am open to product conversations, technical collaboration, and focused consulting where AI can remove a real operational bottleneck.',
  links: [
    { title: 'Email', link: 'mailto:so@qolso.com' },
    { title: 'Schedule', link: 'https://calendly.com/sonozaki/30m' },
    { title: 'GitHub', link: 'https://github.com/sonozaki7' },
    { title: 'X', link: 'https://x.com/ghtght_7' },
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/sonozaki/' },
  ],
};

export const SEO = {
  title: 'So Nozaki — AI-first SaaS founder & engineer',
  description: 'So Nozaki builds and operates AI SaaS, autonomous engineering systems, and live communication products across Japan and Thailand.',
  image: 'https://sonozaki7.github.io/portfolio/images/profile.jpg',
  url: 'https://sonozaki7.github.io/portfolio/',
};

export const links = {
  title: 'So Nozaki',
  description: 'AI-first SaaS founder · product engineer · Japan ↔ Thailand',
  image: getAssetPath('/images/profile.jpg'),
  cards: contact.links,
};
