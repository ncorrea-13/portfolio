<div align="center">

# Portfolio

**Personal portfolio + live homelab status page**

[![CI](https://github.com/ncorrea-13/homeserver-landing/actions/workflows/ci.yml/badge.svg)](https://github.com/ncorrea-13/homeserver-landing/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Español](README.md) | **[English](README.en.md)**

</div>

---

Two independent public surfaces, each with its own deploy:

- **Portfolio** (repo root): Next.js 16 (App Router) + TypeScript + Tailwind 4. Deployed on **Vercel**. Routes: `/`, `/sobre-mi`, `/proyectos`.
- **[`servidor/`](servidor/)**: plain HTML/CSS/JS, no build. Served 24/7 from the real homeserver via Cloudflare Tunnel. Live proof that the self-hosting is real: it fetches service status from an external FastAPI (see [Status API](#status-api)).

No backend of its own, no persisted form input, nothing user-supplied gets reflected back. No injection surface.

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript |
| Styles | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Package manager | pnpm (pinned in `mise.toml`) |
| Deploy (portfolio) | Vercel, static export |
| Deploy (`servidor/`) | Cloudflare Tunnel, served as-is from the homeserver |
| CI | GitHub Actions, lint + build on push/PR to `main`/`dev` |

## Quick Start

```bash
# 1. Clone
git clone git@github.com:ncorrea-13/homeserver-landing.git
cd homeserver-landing

# 2. Install (pnpm pinned via mise.toml)
pnpm install

# 3. Dev server
pnpm dev
# → http://localhost:3000
```

### Build

```bash
pnpm build   # next build → static export in out/
pnpm start   # serve out/ locally to sanity-check the export
```

`servidor/` needs no build; edit `servidor/index.html` / `servidor/style.css` directly and it's served as-is.

## Environment variables

None. The site calls no external API of its own; `content/site.ts` holds public constants committed to the repo (contact links). `servidor/index.html` hardcodes `STATUS_API_URL` inline; not an env var, since the export is fully static.

## Status API

`servidor/index.html` renders service status (up/down, last check) by fetching `STATUS_API_URL` (`https://status.ncorrea.com.ar/api/status`). That FastAPI lives in a separate repo ([`homelab-status`](https://github.com/ncorrea-13/homelab-status)): it receives Uptime Kuma heartbeats via webhook, stores them in SQLite, and exposes `/api/status`. This repo only consumes it; no API code or secrets here.

## Project Structure

```
app/
├── layout.tsx        # Root layout: Providers (theme+locale), Nav, Footer
├── page.tsx           # Home: hero, stack, contact
├── sobre-mi/page.tsx  # Experience, education, CV
├── proyectos/page.tsx # Project grid with tag filter
└── globals.css
components/
├── Providers.tsx       # ThemeProvider (next-themes) + LocaleProvider
├── LocaleProvider.tsx  # ES/EN Context, persisted in localStorage
├── T.tsx                # <T es="…" en="…" /> inline translation helper
├── LocaleToggle.tsx, ThemeToggle.tsx
├── Nav.tsx, Footer.tsx, Hero.tsx, ContactLinks.tsx
├── ProjectCard.tsx, ProjectGrid.tsx, TagGroup.tsx
├── LinkButton.tsx, Reveal.tsx  # Reveal = scroll-in animation (framer-motion)
content/
├── site.ts        # constants: contact URLs, SERVIDOR_URL
├── projects.ts     # Project[] - name, url, desc {es,en}, tags, stack, image
├── experience.ts   # work experience, {es,en} fields
└── skills.ts        # tech stack shown on the home page
public/             # portfolio assets (cv.pdf and foto.jpg gitignored)
servidor/
├── index.html, style.css   # architecture page, no build step
└── diagrama-arquitectura.svg
.github/workflows/ci.yml
mise.toml            # pinned pnpm version
next.config.ts        # output: "export", images.unoptimized
```

## Related repo

Tailscale/Cloudflare Tunnel config and the rest of the homelab compose files live in [github.com/ncorrea-13/homeserver](https://github.com/ncorrea-13/homeserver).

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
