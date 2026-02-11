import { BrainCircuit, CloudCog, Rocket, ShieldCheck, Sparkles, TerminalSquare } from 'lucide-react';

export const skills = [
  {
    title: 'Programming',
    icon: TerminalSquare,
    items: ['Python', 'Java', 'C#', 'C/C++']
  },
  {
    title: 'Frontend Engineering',
    icon: Sparkles,
    items: ['Next.js', 'TypeScript', 'React Server Components', 'Tailwind CSS' ]
  },
  {
    title: 'Backend Engineering',
    icon: BrainCircuit,
    items: ['Node.js', 'Express', 'ASP.NET', 'Spring', 'Postman']
  },
  {
    title: 'Cloud',
    icon: CloudCog,
    items: ['AWS (EC2, VPC, S3, API Gateway, Cloud Formation, Dynamo DB, IAM, SQS, SNS, Lambda, Bedrock)', 'Azure']
  },
  {
    title: 'DevOps',
    icon: Rocket,
    items: ['Git', 'Jira', 'Vercel', 'Docker', 'Jenkins', 'Kubernetes', 'Kafka']
  },
  {
    title: 'Monitoring & Visualization',
    icon: ShieldCheck,
    items: ['Prometheus', 'Grafana', 'Canary', 'Tardigrade', 'Cloudwatch', 'Snitch']
  }
];

export const experiences = [
  {
    company: 'Amazon',
    period: '2025 — Present',
    role: 'Software Development Engineer',
    impact: 'Worked on large scale distributed systems that orchestrate the onboarding/offboarding flow of Amazon Flex drivers worldwide helping make orders deliver faster by maximizing delivery partners intake',
    stack: ['TypeScript', 'Java', 'AWS', "Gen AI"]
  },
  {
    company: 'Aptean',
    period: '2022 — 2023',
    role: 'Associate Software Engineer',
    impact: 'Developed and maintained an internal Full stack platform(C#, vb.NET) to automate packaging and deployment of order workflows for the Made2Manage (M2M) application across customer environments.',
    stack: ['C#', 'MSSQL', 'AWS', 'Terraform']
  }
];

export const projects = [
  {
    name: 'Stokinsights',
    summary: 'Realtime application integrating external market data APIs and dynamic chart visualization with deterministic prediction signal, stock comparision and daily digests.',
    result: 'Making Stock study easier than normal',
    tags: ['Typescript', 'Machine Learning', 'Next.js'],
    color: 'from-cyan-500/30 to-blue-500/10'
  },
  {
    name: 'Atlas Commerce',
    summary: 'Composable storefront framework built for global performance at scale.',
    result: 'Improved mobile checkout completion by 18%.',
    tags: ['E-commerce', 'Performance', 'Platform'],
    color: 'from-emerald-500/30 to-teal-500/10'
  }
];
