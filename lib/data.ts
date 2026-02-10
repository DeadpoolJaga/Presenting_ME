import { BrainCircuit, CloudCog, Rocket, ShieldCheck, Sparkles, TerminalSquare } from 'lucide-react';

export const skills = [
  {
    title: 'Frontend Engineering',
    icon: Sparkles,
    items: ['Next.js 14', 'TypeScript', 'React Server Components', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Platform & Cloud',
    icon: CloudCog,
    items: ['Vercel', 'Edge Runtime', 'CI/CD', 'Observability', 'Performance Budgets']
  },
  {
    title: 'Product Velocity',
    icon: Rocket,
    items: ['Design Systems', 'A/B Testing', 'Storybook', 'Accessibility', 'Growth UX']
  },
  {
    title: 'Architecture',
    icon: BrainCircuit,
    items: ['Domain Modeling', 'API Contracts', 'Scalable Component APIs', 'Monorepos', 'Tech Strategy']
  },
  {
    title: 'Security & Quality',
    icon: ShieldCheck,
    items: ['Threat Modeling', 'OWASP', 'Automated Testing', 'SLO/SLA', 'Code Review Leadership']
  },
  {
    title: 'Developer Tooling',
    icon: TerminalSquare,
    items: ['DX Automation', 'Codemods', 'Static Analysis', 'Linting Pipelines', 'Release Tooling']
  }
];

export const experiences = [
  {
    company: 'Nova Systems',
    period: '2022 — Present',
    role: 'Senior Frontend Engineer',
    impact: 'Led a platform refresh that improved core web vitals by 38% and cut release cycle time from 10 days to 2.',
    stack: ['Next.js', 'TypeScript', 'Vercel', 'Playwright']
  },
  {
    company: 'Orbit Labs',
    period: '2020 — 2022',
    role: 'Product Engineer',
    impact: 'Designed and shipped onboarding flows that increased trial-to-paid conversion by 27%.',
    stack: ['React', 'Node.js', 'GraphQL', 'Figma']
  },
  {
    company: 'Freelance + OSS',
    period: '2018 — 2020',
    role: 'Creative Technologist',
    impact: 'Partnered with startups and open-source communities to launch polished, high-converting product experiences.',
    stack: ['Vue', 'GSAP', 'Jamstack', 'Netlify']
  }
];

export const projects = [
  {
    name: 'PulseBoard',
    summary: 'Realtime command center for growth teams with cinematic dashboard transitions.',
    result: 'Reduced analysis time by 42% for campaign operators.',
    tags: ['Realtime', 'Data Viz', 'DX'],
    color: 'from-cyan-500/30 to-blue-500/10'
  },
  {
    name: 'FlowState AI',
    summary: 'AI-assisted sprint planning tool with collaborative timeline orchestration.',
    result: 'Increased delivery predictability by 29% across 12 squads.',
    tags: ['AI', 'Productivity', 'SaaS'],
    color: 'from-fuchsia-500/25 to-violet-500/10'
  },
  {
    name: 'Atlas Commerce',
    summary: 'Composable storefront framework built for global performance at scale.',
    result: 'Improved mobile checkout completion by 18%.',
    tags: ['E-commerce', 'Performance', 'Platform'],
    color: 'from-emerald-500/30 to-teal-500/10'
  }
];
