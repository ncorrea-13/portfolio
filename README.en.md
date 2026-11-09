<div align="center">

# Portfolio

**Personal portfolio + Homelab documentation**

[![CI](https://github.com/ncorrea-13/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ncorrea-13/portfolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Español](README.md) | **[English](README.en.md)**

</div>

---

This repo holds two complementary websites:

- **Portfolio**: TypeScript + React + Next.js. Deployed on Vercel.
- **Servidor**: plain HTML/CSS/JS. Deployed on the homelab via Cloudflare Tunnel. CD by polling.
  No backend of its own, no persisted form input, nothing user-supplied gets reflected back. No injection surface.

The homelab site shows service status through an API (`https://status.ncorrea.com.ar/api/status`), which lives in another repo.

## Stack

| Layer           | Tech                                                    |
| --------------- | ------------------------------------------------------- |
| Frontend        | Next.js 16, React 19, TypeScript                        |
| Styles          | CSS                                                     |
| Package manager | pnpm                                                    |
| CI              | GitHub Actions, lint + build on push/PR to `main`/`dev` |
| CD (portfolio)  | Vercel                                                  |
| CD (servidor)   | Cloudflare Tunnel, deploy by pull                       |

## Quick Start

```bash
# 1. Clone
git clone git@github.com:ncorrea-13/portfolio.git
cd portfolio

# 2. Install (pnpm pinned via mise.toml)
pnpm install

# 3. Dev server
pnpm dev
# → http://localhost:3000
```

### Build

```bash
pnpm build   # next build → static export in out/
pnpm start   # serve out/ locally to check the export
```

## Status API

The documentation shows service status (up or down, and since when) with a `fetch` to `STATUS_API_URL` (`https://status.ncorrea.com.ar/api/status`). That API lives in [`homelab-status`](https://github.com/ncorrea-13/homelab-status): it receives Uptime Kuma heartbeats by webhook, stores them in SQLite, and exposes `/api/status`.

## Project Structure

```
app/
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── sobre-mi/page.tsx
├── proyectos/page.tsx
└── globals.css
components/
├── Providers.tsx, LocaleProvider.tsx, T.tsx
├── LocaleToggle.tsx, ThemeToggle.tsx
├── Nav.tsx, Footer.tsx, Hero.tsx, Now.tsx, ContactLinks.tsx
├── Timeline.tsx, ClientShowcase.tsx, OwnProjects.tsx
├── ProjectGrid.tsx, ProjectTags.tsx, TagGroup.tsx
└── LinkButton.tsx, CvLink.tsx, Reveal.tsx
content/
├── site.ts, routes.ts
├── projects.ts, experience.ts
└── now.ts, skills.ts
public/
servidor/
├── index.html, style.css
└── diagrama-arquitectura-claro.svg, diagrama-arquitectura-oscuro.svg
.github/workflows/ci.yml
mise.toml
next.config.ts
```

## Related repo

Tailscale/Cloudflare Tunnel config and the rest of the homelab compose files live in [github.com/ncorrea-13/homeserver](https://github.com/ncorrea-13/homeserver).

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
