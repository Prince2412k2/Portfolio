export const BIO_QUOTE =
  'You will catch me putting 2 days into developing a tool that will save me 2 seconds and 4 clicks.';

export const SOCIAL = {
  github:   'https://github.com/Prince2412k2',
  linkedin: 'https://www.linkedin.com/in/prince2412k2',
  resume:   'https://prince2412k2.github.io/Resume/resume.pdf',
};

export const EXPERIENCE = [
  {
    title: 'AI-ML Associate',
    place: 'Gateway Corp',
    description: 'Building AI-driven developer tooling and internal infrastructure.',
    period: '2025 — present',
    active: true,
  },
  {
    title: 'ML-AI Intern',
    place: 'Innoventa Technologies',
    description:
      'Built a GenAI book-reading app that generates illustrated picture books and audio narrations end-to-end.',
    period: '2024',
    active: false,
  },
  {
    title: 'B.Tech — AI & ML',
    place: 'Silver Oak University',
    description: 'Graduated May 2025 with a 9.1 GPA.',
    period: '2021 — 2025',
    active: false,
  },
];

/* Main shipped projects */
export const PROJECTS = [
  {
    id: 'harbr',
    name: 'harbr',
    tagline: 'A full deployment platform — Coolify/Netlify, built from scratch',
    description:
      '289 files. Go backend with Docker orchestration, deploy pipelines & queues, JWT auth, SSE events, SQL migrations. Next.js frontend for app management, live logs, env editing, domain routing. Plus a Go TUI client.',
    stack: ['Go', 'Next.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    status: 'active',
    isPrivate: true,
    href: 'https://github.com/Prince2412k2/harbr',
    demo: null,
  },
  {
    id: 'crewai',
    name: 'crewai-frontend',
    tagline: 'AI agent orchestration with real-time control',
    description:
      'Production-grade CrewAI backend. Auto-discovers crews, concurrent execution via ThreadPoolExecutor, WebSocket streaming, pause/resume/stop control plane, SQLite event persistence, downloadable HTML snapshots.',
    stack: ['Python', 'FastAPI', 'CrewAI', 'WebSocket', 'SQLite'],
    status: 'active',
    isPrivate: false,
    href: 'https://github.com/Prince2412k2/crewai-frontend',
    demo: null,
  },
  {
    id: 'genai-blog',
    name: 'genai_blog',
    tagline: 'AI-powered blog platform — shipped',
    description:
      'Rich BlockNote editor, AI content & tag generation, Supabase auth, admin dashboard, public blog views with shareable URLs. Deployed on Vercel.',
    stack: ['React', 'TypeScript', 'Supabase', 'BlockNote', 'Tailwind'],
    status: 'complete',
    isPrivate: false,
    href: 'https://github.com/Prince2412k2/genai_blog',
    demo: 'https://md-muse.vercel.app',
  },
  {
    id: 'ecom',
    name: 'Ecom',
    tagline: 'Full-stack e-commerce with SSR and Stripe payments',
    description:
      'Next.js e-commerce with server-side rendering, secure Stripe checkout, product management, and a modern store UX. Deployed live.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    status: 'complete',
    isPrivate: false,
    href: 'https://github.com/Prince2412k2/ecom',
    demo: 'https://ecom-sand-omega.vercel.app',
  },
  {
    id: 'social-media',
    name: 'social-media',
    tagline: 'Pinterest-scale social app, full Docker setup',
    description:
      '229 files. Django backend with GitHub & Google OAuth, React frontend with masonry grid and modals, PostgreSQL, full Docker Compose.',
    stack: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    status: 'complete',
    isPrivate: false,
    href: 'https://github.com/Prince2412k2/social-media',
    demo: null,
  },
  {
    id: 'context-machine',
    name: 'context_machine',
    tagline: 'RAG — chat with your documents',
    description:
      'Clean service/schema architecture. FastAPI + Qdrant vector DB + Groq LLM + FastEmbed + Supabase auth. React frontend with streaming chat and markdown rendering.',
    stack: ['FastAPI', 'React', 'Qdrant', 'Groq', 'Supabase'],
    status: 'complete',
    isPrivate: false,
    href: 'https://github.com/Prince2412k2/context_machine',
    demo: null,
  },
];

/* Dev tools — the ones built FOR developers */
export const DEVTOOLS = [
  {
    id: 'gitswitch',
    name: 'gitswitch',
    cmd: 'gitswitch',
    tagline: 'Switch git identities without touching global config',
    description:
      'Stores profiles as TOML, interactively picks one, applies name / email / SSH key to the local repo. Never writes to your global gitconfig.',
    stack: ['Go', 'TOML'],
    href: 'https://github.com/Prince2412k2/gitswitch',
  },
  {
    id: 'coolify-logs',
    name: 'coolify_logs',
    cmd: 'docker-logs',
    tagline: 'Live Docker log gateway with WebSocket streaming',
    description:
      'Admin UI for API key & container access. REST + WebSocket live log API. Cross-platform CLI installable via pipx or uv. Replaces SSH tunnels.',
    stack: ['Python', 'FastAPI', 'Docker', 'WebSocket'],
    href: 'https://github.com/Prince2412k2/coolify_logs',
  },
  {
    id: 'harbr-tui',
    name: 'harbr-tui',
    cmd: 'harbr',
    tagline: 'Full TUI client for the Harbr deploy platform',
    description:
      'App list + sidebar, live log streaming with follow mode, env var editor with masked secrets, deploy queue with animated progress bars, domain overview.',
    stack: ['Go', 'Bubble Tea', 'Lipgloss'],
    href: 'https://github.com/Prince2412k2/harbr-tui',
  },
  {
    id: 'vcs',
    name: 'vcs',
    cmd: 'vcs',
    tagline: 'Git-like version control built from scratch',
    description:
      'Implements init, commit, log, checkout, merge, reset, cat-file. No magic, no network — raw plumbing only. Built to understand what Git actually does.',
    stack: ['Python'],
    href: 'https://github.com/Prince2412k2/vcs',
  },
  {
    id: 'noter',
    name: 'noter',
    cmd: 'noter',
    tagline: 'TUI note app with DuckDB, git history, nvim',
    description:
      'DuckDB-backed note storage, nvim editor integration, full git version history per note, desktop system notifications. Terminal-native workflow.',
    stack: ['Python', 'DuckDB', 'curses'],
    href: 'https://github.com/Prince2412k2/Noter',
  },
  {
    id: 'pyman',
    name: 'pyman',
    cmd: 'pyman',
    tagline: 'TUI Python environment manager powered by UV',
    description:
      'Manage venvs, install packages, switch interpreters — all from a clean curses TUI. UV under the hood for near-instant installs.',
    stack: ['Python', 'uv', 'curses'],
    href: 'https://github.com/Prince2412k2/Pyman',
  },
];

export const STACK = [
  {
    label: 'Languages',
    items: ['Go', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Django', 'Node.js', 'WebSocket', 'REST', 'SSE'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    label: 'Data & AI',
    items: ['PostgreSQL', 'Qdrant', 'ChromaDB', 'CrewAI', 'Groq', 'Ollama'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'Docker Compose', 'Supabase', 'Vercel', 'Linux'],
  },
  {
    label: 'CLI / TUI',
    items: ['Bubble Tea', 'Lipgloss', 'curses', 'uv', 'pipx'],
  },
];
