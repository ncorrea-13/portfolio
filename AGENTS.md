# AGENTS.md - homeserver-landing (portfolio + servidor)

## Overview

The repo holds two independent public surfaces, each with its own deploy.

- **Portfolio** (root) - Next.js 16 (App Router) + TypeScript, `output: "export"` (pure static, no SSR/API routes). Deployed on **Vercel**. Routes: `/`, `/sobre-mi`, `/proyectos`.
- **`servidor/`** - plain HTML/CSS/JS, no build. Deployed through a Cloudflare Tunnel, running 24/7 on the real homeserver. Live proof that the self-hosting is real (service status comes from a `fetch` to an external Go API, see "Status API").

This is not the real homeserver: Tailscale/Cloudflare Tunnel are not here, nor are the compose files of the other services (they live in github.com/ncorrea-13/homeserver). Verifying the real exposure (headers, doc root, tunnel state) happens on the server, not in this repo.

Both surfaces are 100% static: no backend of their own, no forms that persist data, no reflected user input. There is no injection surface (XSS/SQLi/RCE) because the portfolio has no server logic.

## Stack

| Layer           | Service/lib                     | Notes                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------ |
| Frontend        | Next.js 16 (App Router)         | React 19 + TypeScript, `output: "export"` → `out/`     |
| Styles          | Plain CSS                       | `app/globals.css` + CSS modules, no framework          |
| Animation       | framer-motion                   | used in `Reveal.tsx`, `Hero.tsx` and a few transitions |
| Theme           | next-themes                     | light/dark toggle (`ThemeToggle.tsx`)                  |
| Language        | Own Context                     | ES/EN, no i18n library - see "Internationalization"    |
| Deploy          | Vercel (portfolio)              | static build, no server runtime                        |
| Deploy          | Cloudflare Tunnel (`servidor/`) | files served as-is on the real homeserver              |
| Package manager | pnpm (pinned in `mise.toml`)    | -                                                      |
| CI              | GitHub Actions                  | lint + build on every push/PR to `main`/`dev`          |

There is no test runner (there is no business logic to test - it is content + presentation). Do not add Vitest/Jest until real logic shows up that justifies it.

## Repo structure

```
/
├── app/
│   ├── layout.tsx             # Root layout: Providers (theme+locale), Nav, Footer
│   ├── page.tsx               # Home: Hero, Now strip, stack, own projects, contact
│   ├── sobre-mi/page.tsx      # Experience and education timelines, text rows, CV
│   ├── proyectos/page.tsx     # Public work showcase, own projects, learning gallery
│   └── globals.css            # Design tokens (see "Code conventions")
├── components/
│   ├── Providers.tsx          # Wraps ThemeProvider (next-themes) + LocaleProvider
│   ├── LocaleProvider.tsx     # Own ES/EN Context, persisted in localStorage
│   ├── T.tsx                  # <T es="…" en="…" /> - inline translation helper
│   ├── LocaleToggle.tsx, ThemeToggle.tsx
│   ├── Nav.tsx, Footer.tsx, Hero.tsx, Now.tsx, ContactLinks.tsx
│   ├── Timeline.tsx           # Experience/education rows
│   ├── ClientShowcase.tsx     # Tabbed browser-window showcase for public client work
│   ├── OwnProjects.tsx        # Featured posters + hardware card for own projects
│   ├── ProjectGrid.tsx        # Filterable scroll-snap gallery for learning work
│   ├── TagGroup.tsx, LinkButton.tsx, CvLink.tsx
│   ├── Reveal.tsx             # Animated scroll-in (framer-motion)
│   └── *.module.css           # One CSS module per component
├── content/
│   ├── site.ts                # Constants: contact URLs, SERVIDOR_URL
│   ├── projects.ts            # Project[] (own, client, learning), filters, tag tones
│   ├── experience.ts          # Work experience and education, {es,en} per text
│   ├── now.ts                 # The Work / Studying / Homelab strip on the home
│   └── skills.ts              # Technical stack shown on the home
├── public/                    # Portfolio assets (cv.pdf and foto.jpg are gitignored)
├── servidor/
│   ├── index.html, style.css  # Technical documentation page, no build
│   └── diagrama-arquitectura-claro.svg, diagrama-arquitectura-oscuro.svg
├── .github/workflows/ci.yml
├── mise.toml                  # Pinned pnpm version
├── next.config.ts             # output: "export", images.unoptimized
├── CLAUDE.md
└── README.md
```

## Internationalization (ES/EN)

Already implemented, not a future idea:

- `LocaleProvider` (`components/LocaleProvider.tsx`): Context with `locale: "es" | "en"`, persisted in `localStorage` under the key `"locale"`, synced across tabs through the `storage` event plus a custom `locale-change` event. `getServerSnapshot()` always returns `"es"` (SSR/static export cannot read `localStorage`), so the first client render may "flash" ES before hydrating with the real preference - expected behavior, not a bug.
- `<T es="…" en="…" />` (`components/T.tsx`): preferred way to embed bilingual text in JSX. Longer or structured content (arrays in `content/*.ts`) uses the inline `{ es: string; en: string }` shape instead of `T`.
- `LocaleToggle.tsx`: EN/ES button in the header. It uses `useSyncExternalStore` with different server/client snapshots (`mounted`) to avoid a hydration mismatch - do not simplify it by removing that guard.
- Typed content in `content/*.ts` follows the same `LocalizedText = { es: string; en: string }` pattern as `T` - keep it consistent when adding content, and do not mix in an external i18n library (next-intl, etc.): the scope (3 routes, fixed text) does not justify it.

## Status API (Go)

`servidor/index.html` renders the service status (up/down, since when the status changed) by calling `fetch` on `STATUS_API_URL` (`https://status.ncorrea.com.ar/api/status`, hardcoded in the inline `<script>`). The Go API lives in a **separate repo** (`homelab-status`, outside this repo), not here:

- It receives Uptime Kuma heartbeats through a webhook (`/webhook/kuma`), stores them in SQLite (`services` + `events`) and exposes `/api/status` with the latest state per service.
- It replaces the old `boot.json` + systemd unit (`service/`, already removed from this repo): there is no local uptime counter anymore, only the real state of the services monitored by Kuma.
- CORS is restricted to `https://homelab.ncorrea.com.ar` in the API - if `servidor/` is ever served from another origin, adjust it there, not here. The same restriction means the portfolio origin cannot read this API from the browser.
- This repo only consumes that API through `fetch`; it neither has nor needs the API code or the admin secret.

## Code conventions

- Strict TypeScript (`strict: true` in `tsconfig.json`).
- Server Components by default; `"use client"` only where real interactivity is needed (theme, language, framer-motion animations, tabs, project filter).
- `output: "export"` is a hard constraint: no Server Actions, no API routes, nothing that depends on a server runtime in production - the build has to be servable as pure static files on Vercel.
- Content (texts, links, projects, experience) lives in typed `content/*.ts` files - do not hardcode content strings inside `app/`/`components/` unless it is purely structural text (UI labels that are not "portfolio content").
- All text visible to the end user is bilingual (`T` or `LocalizedText`) - never add text in only Spanish or only English.
- Design tokens live in `app/globals.css`, including `--live`, the only complementary accent: use it only for "live/operational/ongoing". `servidor/style.css` duplicates the tokens by hand because it is served as loose files: if one changes, change the other.
- Commits are written in English, conventional format, `type: short description in infinitive form` (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`). One logical change per commit.
- `servidor/`: edit `index.html`/`style.css` directly, with no build pipeline - what is in the file is what gets served. Do not port it to React/Next: it is a single page with minimal state (theme + fetch to the Status API), already solved in vanilla JS - a build is not justified.

## Environment variables

There is no `.env` - the site calls no external APIs and has no secrets; `content/site.ts` holds public, committed constants (contact URLs).

## Commands

```bash
pnpm install
pnpm dev            # next dev
pnpm build          # next build → generates out/ (static export)
pnpm start          # next start (only to test out/ locally; prod is static on Vercel)
pnpm lint           # eslint
pnpm exec tsc --noEmit
```

## CI (`.github/workflows/ci.yml`)

On every push to `main`/`dev` and on every PR: `pnpm install --frozen-lockfile` → `pnpm run lint` → `pnpm run build`. It does not run `tsc --noEmit` as a separate step (the Next build already type-checks) nor tests (none are configured). If non-trivial logic is added (parsing, calculations), add Vitest and a test step here, not before.

## Deploy

- **Portfolio**: push to `main` → automatic deploy on Vercel (preview on PRs). The build generates a static `out/`.
- **`servidor/`**: CD by polling, not push-based - a systemd timer (`deploy-check.timer`, in the separate `homeserver` repo, running on the Raspberry Pi) checks every 5 minutes the latest commit of `main` in this repo through the GitHub API. If it differs from the SHA saved in `.deployed-sha`, the script (`deploy-check-docs.sh`) downloads with `curl` the files of `servidor/` (`index.html`, `style.css`, `diagrama-arquitectura-claro.svg`, `diagrama-arquitectura-oscuro.svg`) straight from GitHub raw into the real doc root. There is no manual sync or webhook - the timer/service/env definition lives in `homeserver/raspberry/deploy-check/`, outside this repo. If a new file is added to `servidor/`, it must be added to that script too. Service state is consumed from the Status API (Go, separate repo) instead of the old `boot.json`/systemd unit.

## Things to avoid

- Do not turn `servidor/` into Next.js/React or add a build to it - it is a single page with minimal state (theme + fetch to the Status API), already solved in vanilla JS.
- Do not use Server Actions/API routes in the portfolio - it breaks `output: "export"`.
- Do not commit `public/cv.pdf` or `public/foto.jpg` (gitignored on purpose, they are personal files).
- Do not bring the `homelab-status` API code into this repo - it lives separately, and this repo only consumes it through `fetch` to `/api/status`.
- Do not add an external i18n library for the ES/EN toggle - the own Context (`LocaleProvider` + `T`) already covers the scope of 3 routes with fixed text.
- Do not assume this repo has access to the real homeserver config (Tailscale/Funnel/Cloudflare Tunnel, compose files) - it lives in github.com/ncorrea-13/homeserver.
- Do not publish internal or confidential work from employers in `/proyectos`: that page lists public work only; role details belong in the CV.
