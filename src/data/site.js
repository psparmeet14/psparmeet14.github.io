// All site content lives here. The components only render what is in this file,
// so copy, links and lists are edited in one place.

export const profile = {
  name: 'Parmeet Singh Bhogal',
  role: 'Senior Software Engineer',
  company: 'CatalystOne',
  location: 'Chandigarh, India',
  tagline: 'Senior Java backend engineer who ships production LLM features.',
  bio:
    'Eight years building and owning the workflow engine of a Nordic HCM platform — onboarding, offboarding and approvals for enterprise customers. Lately: evaluated AI features on the JVM with Spring AI.',
  photo: '/profile-photo.jpg',
  email: 'psparmeet14@gmail.com',
  github: 'https://github.com/psparmeet14',
  linkedin: 'https://linkedin.com/in/parmeet-s-bhogal-6a259715a',
  repo: 'https://github.com/psparmeet14/psparmeet14.github.io',
  // Drop resume.pdf into public/ and set this to '/resume.pdf' to show the button.
  resumeUrl: null,
}

export const work = [
  {
    label: 'Side project · Live',
    title: 'Expense Intelligence Platform',
    description:
      'A personal-finance platform with an LLM question layer: ask about your spending in plain English and get answers grounded in the ledger. Built end to end — domain model, evals, CI, deployment.',
    proof: '284 backend tests · golden-set evals · CI · read-only demo with synthetic data',
    tags: ['Java', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'Docker'],
    links: [{ label: 'Live demo', href: 'https://eip-demo.online' }],
  },
  {
    label: 'At CatalystOne · 2018 – present',
    title: 'Core HR workflow engine',
    description:
      'The module behind onboarding, offboarding and job-requisition approvals for enterprise customers across the Nordics. Owned features end to end: technical analysis, roadmap, delivery, support.',
    proof: 'Dashboard for 13,000+ employee records: from timeouts to ~2 s via partial loading, caching and SQL tuning',
    tags: ['Java', 'Spring Boot', 'MS SQL Server', 'Azure DevOps'],
    links: [],
  },
  {
    label: 'At CatalystOne',
    title: 'Monolith → Spring Boot microservice',
    description:
      'Carved a Core HR module out of the monolith into a standalone Spring Boot service with OpenAPI contracts, layered architecture, multi-environment deployments and Azure monitoring workbooks.',
    proof: 'Unit · DAO · integration · MockMvc coverage from day one',
    tags: ['Spring Boot', 'OpenAPI', 'Azure', 'Testcontainers'],
    links: [],
  },
  {
    label: 'Side project · Live',
    title: 'Daily Wisdom',
    description:
      'One quote a day on life, wealth, health and wellbeing. Today, the archive, a random pick — and nothing else. A small exercise in restraint.',
    proof: 'dailywisdom365.com',
    tags: ['JavaScript', 'Static site'],
    links: [
      { label: 'Visit', href: 'https://dailywisdom365.com' },
      { label: 'Source', href: 'https://github.com/psparmeet14/daily-quotes' },
    ],
  },
]

export const experience = [
  {
    period: 'Jan 2018 — Present',
    title: 'Senior Software Engineer',
    org: 'CatalystOne Solutions — Nordic HCM SaaS · Chandigarh, India',
    bullets: [
      'Own backend features in the Core HR Workflow module — onboarding, offboarding, job requisition — from technical analysis and roadmap to release and support.',
      'Cut workflow-dashboard load for 13,000+ records to ~2 seconds with partial loading, in-memory caching and SQL tuning.',
      'Migrated a monolith module to a Spring Boot microservice: OpenAPI contracts, layered architecture, multi-environment deployments, full test pyramid.',
      "Design APIs with OpenAPI, lead peer reviews, and contribute to the Workflow module's architecture strategy.",
    ],
  },
  {
    period: '2014 — 2018',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'RIMT University, Punjab, India',
  },
]

export const toolbox = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA / Hibernate', 'REST + OpenAPI', 'gRPC'] },
  { group: 'AI on the JVM', items: ['Spring AI', 'prompt design', 'structured outputs', 'golden-set evals', 'LLM observability'] },
  { group: 'Data', items: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'query tuning'] },
  { group: 'Delivery', items: ['Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions', 'JUnit 5', 'Mockito', 'Testcontainers'] },
  { group: 'Practices', items: ['Clean architecture', 'domain-driven design', 'SOLID', 'ADRs', 'Scrum'] },
]

// A post is shown only when it has a url. The Writing section and its nav link
// stay hidden until at least one post does.
export const posts = [
  {
    date: '',
    title: 'Performance optimization: beyond the quick fixes',
    summary: 'How a 13K-record dashboard went from timeouts to two seconds — and why measuring beat guessing.',
    url: '',
  },
  {
    date: '',
    title: 'Clean architecture: why it matters',
    summary: 'Separating domain from infrastructure, and what it buys you on a codebase that has to live for years.',
    url: '',
  },
  {
    date: '',
    title: 'Domain-driven design: speaking the language of business',
    summary: 'When the code uses the same words as the people who run the process, bugs get rarer and reviews get shorter.',
    url: '',
  },
]

export const now = {
  building: 'Adding retrieval and LLM observability to the Expense Intelligence Platform.',
  reading: 'The Psychology of Money',
  habit: 'Lifting four days a week — the same habit I bring to code: show up, small steps, measure.',
}

export const contact = {
  blurb:
    'Backend architecture, AI on the JVM, workflow automation — or a question about any of the work above. I reply within a day or two.',
}
