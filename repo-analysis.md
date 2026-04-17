# Portfolio Repo Analysis

> Scanned all 69 GitHub repos for **Prince2412k2** on April 17, 2026.
> Excluded: forks, empty repos, dead/abandoned projects, config/notes repos.

---

## 📊 Summary

| Metric | Count |
|--------|-------|
| Total repos | 69 |
| Private | 35 |
| Public | 34 |
| Forks | 1 (spreadsheet-agent) |
| Dead/excluded | 8 |
| Portfolio-worthy | 16 |

### Profile Strengths

- **Systems-level builder** — built a mini-PaaS (harbr) with Docker orchestration, deploy pipelines, auth, SSE
- **AI/ML integration** — RAG pipelines, vector DBs (Qdrant, ChromaDB), LLMs (Groq, Ollama, Gemini), agent orchestration (CrewAI)
- **Full-stack breadth** — Django, FastAPI, Next.js, React, Supabase, PostgreSQL, Docker in real combinations
- **Terminal/CLI craft** — Go TUI (Bubble Tea), Python TUI (curses), multiple CLI tools
- **Ships to prod** — Vercel deployments, Docker Compose setups, real deployment flows

---

## 🥇 Tier 1 — Flagships (Must Showcase)

### 1. [harbr](https://github.com/Prince2412k2/harbr) — 🔒 Private

**Your magnum opus. A full deployment platform (Coolify/Netlify-like).**

289 files. Go backend with JWT auth, Docker orchestration, deploy pipelines & queues, SQL migrations, SSE events, audit logging + Next.js frontend (app management, deploy queue, env editor, live logs, routing, domains) + a Go TUI client.

| | |
|---|---|
| **Stack** | Go, Next.js, TypeScript, PostgreSQL, Docker |
| **Size** | 289 files |
| **Last updated** | April 2026 |
| **Status** | Actively developed |
| **Action** | ⚠️ **Make public** — this is your strongest project |

---

### 2. [genai_blog](https://github.com/Prince2412k2/genai_blog) (Markdown Muse) — ✅ Public

**AI-powered blog platform — polished and shipped.**

Rich BlockNote editor, AI content + tag generation, Supabase auth, admin dashboard, public blog views with shareable URLs.

| | |
|---|---|
| **Stack** | React, TypeScript, Supabase, BlockNote, Tailwind, shadcn |
| **Size** | 1,424 KB |
| **Live demo** | [https://md-muse.vercel.app](https://md-muse.vercel.app) |
| **Status** | Complete, deployed |

---

### 3. [crewai-frontend](https://github.com/Prince2412k2/crewai-frontend) — ✅ Public

**Production-grade CrewAI backend with real-time agent orchestration.**

Auto-discovers crews, concurrent execution (ThreadPoolExecutor), WebSocket real-time streaming, pause/resume/stop control plane, SQLite event persistence, downloadable HTML snapshots. Ships 3 crews: research, blog writer, web artifact builder.

| | |
|---|---|
| **Stack** | Python, FastAPI, WebSocket, CrewAI, SQLite |
| **Files** | ~65 |
| **Last updated** | April 2026 |
| **Status** | Active |

---

### 4. [social-media](https://github.com/Prince2412k2/social-media) — ✅ Public

**Pinterest-style social media app at production scale.**

229 files. Django backend with GitHub + Google OAuth, React frontend with masonry grid, modals, sidebar. Full Docker Compose setup.

| | |
|---|---|
| **Stack** | Django, React, TypeScript, PostgreSQL, Docker |
| **Size** | 229 files |
| **Status** | Complete |

---

## 🥈 Tier 2 — Strong Supporting Projects

### 5. [coolify_logs](https://github.com/Prince2412k2/coolify_logs) — ✅ Public

**Docker Log Gateway — real devops tooling.**

Admin UI to manage API keys + container access, REST + WebSocket API for live logs, user web UI, cross-platform CLI installable via pipx/uv.

| | |
|---|---|
| **Stack** | Python, Docker, WebSocket |
| **Last updated** | March 2026 |
| **Status** | Actively maintained |

---

### 6. [context_machine](https://github.com/Prince2412k2/context_machine) — ✅ Public

**RAG chat-with-documents application.**

Clean service/schema architecture. FastAPI backend with Qdrant vector DB, Groq LLM, FastEmbed, Supabase auth. React frontend with document upload, chat, markdown rendering.

| | |
|---|---|
| **Stack** | React, FastAPI, Qdrant, Supabase, Groq |
| **Size** | 145 files |
| **Status** | Complete |

---

### 7. [gitswitch](https://github.com/Prince2412k2/gitswitch) — ✅ Public

**Go CLI to manage multiple git identities.**

Stores profiles as TOML, interactively picks one, applies name/email/SSH key to local repo config. Never touches global gitconfig. Polished README, clean Go project structure.

| | |
|---|---|
| **Stack** | Go, TOML |
| **Size** | 15 files |
| **Last updated** | April 2026 |
| **Status** | Shipped |

---

### 8. [harbr-tui](https://github.com/Prince2412k2/harbr-tui) — ✅ Public

**Go TUI client for the Harbr deployment platform.**

Apps list with sidebar, live log streaming with follow mode, env var editor with masked secrets, deploy queue with animated progress bars, domains overview.

| | |
|---|---|
| **Stack** | Go, Bubble Tea, Lipgloss |
| **Status** | Complete, companion to harbr |

---

### 9. [vcs](https://github.com/Prince2412k2/vcs) — ✅ Public ⭐1

**Git-like version control system built from scratch.**

Implements init, commit, log, checkout, merge, reset, cat-file. No magic, no network — just raw plumbing. Great conversation starter for interviews.

| | |
|---|---|
| **Stack** | Python |
| **Stars** | 1 |
| **Status** | Complete |

---

### 10. [VectorShift_Assignment](https://github.com/Prince2412k2/VectorShift_Assignment) — 🔒 Private

**Integration platform with multiple third-party services.**

Airtable, HubSpot, Notion, Slack integrations with React frontend and Python backend.

| | |
|---|---|
| **Stack** | Python, React |
| **Size** | 32 files |

---

## 🥉 Tier 3 — Solid Additions

| # | Repo | Vis | What | Stack |
|---|------|-----|------|-------|
| 11 | [Noter](https://github.com/Prince2412k2/Noter) | ✅ | TUI note app with DuckDB, nvim integration, git version history, system notifications | Python, DuckDB, curses |
| 12 | [scribe-craft-61](https://github.com/Prince2412k2/scribe-craft-61) | 🔒 | Blog platform with admin + viewer layouts | React, TypeScript |
| 13 | [static_site_gen](https://github.com/Prince2412k2/static_site_gen) | ✅ | Markdown parser + DOM converter built from scratch | Python |
| 14 | [Pyman](https://github.com/Prince2412k2/Pyman) | ✅ | TUI Python env manager with UV + curses | Python |
| 15 | [ecom](https://github.com/Prince2412k2/ecom) | ✅ | Next.js ecommerce site | Next.js, TypeScript |
| 16 | [orbit](https://github.com/Prince2412k2/orbit) | ✅ | Campaign/task management with Kanban board (WIP — no backend yet) | React, TypeScript |

---

## ❌ Excluded — Dead / Not Portfolio Material

### Dead Projects (confirmed by owner)
| Repo | Reason |
|------|--------|
| lore-scroll-reader | Dead |
| gts | Dead |
| GreenRoute | Dead |
| doodle-meet | Dead |
| context-canvas-91 | Dead |
| Bookish | Dead |
| Book_Visualizer | Dead |
| Artemis | Dead |

### Not Portfolio Material
| Repo | Reason |
|------|--------|
| Portfolio, Resume, dotfiles | Meta/config |
| Basic_Calculator, tic_tac_toe, snake, Asteroids, Poppy, todo, noder, pomodoro-cli, cli-physics | Small/learning projects |
| code-agregrator, env-activator, Ascii_Art_gen, fake_serve, TestServer | Tiny utilities |
| eval, keyword, doc_ai, autocomplete | Empty/no readme/unclear |
| go_practice, p5, DSA, algos, NOTES, Obsidian | Practice/notes |
| pedros ("lala"), galary | Unfinished/joke |
| Lightwell | Incomplete — minimal backend, scaffolded frontend |
| moon_ds_downloader, Rickshaw_Detection, version_control_demo | Niche or empty |
| minor_project, libman | Very small |
| frontend-focus-hub, blocknote-style-lab, inspo-grid-lab, quiet-book-reader | Lovable-generated scaffolds |
| spreadsheet-agent | Fork |
| pyman.bak | Backup |
| bmad_local | Unclear purpose |
| boot_rag | Minimal RAG pipeline |
| RAG_Chatbot | Superseded by newer projects |

---

## 🎯 Recommended Portfolio (Top 6)

| # | Project | One-liner | Key tech |
|---|---------|-----------|----------|
| 1 | **harbr** | Full deployment platform (mini PaaS) | Go, Next.js, PostgreSQL, Docker |
| 2 | **genai_blog** | AI-powered blog platform | React, Supabase, AI |
| 3 | **crewai-frontend** | AI agent orchestration with real-time control | FastAPI, CrewAI, WebSocket |
| 4 | **social-media** | Full-stack social media app at scale | Django, React, Postgres, Docker |
| 5 | **coolify_logs** | Docker log gateway with WebSocket streaming | Python, Docker, WebSocket |
| 6 | **context_machine** | RAG chat-with-documents | FastAPI, Qdrant, Groq |

**Coverage:** Systems engineering · AI/ML · Full-stack web · DevOps/tooling · CS fundamentals

### Bench (bring in to replace or add depth)
- `gitswitch` — sharp Go CLI, shows tooling skills
- `harbr-tui` — Go TUI companion
- `vcs` — git internals knowledge
- `Noter` — TUI + DuckDB
- `orbit` — once backend is built

### Key Action Item
> **Make `harbr` public.** It's 289 files of a full deployment platform — the single most impressive project in your GitHub. It alone elevates the entire portfolio.
