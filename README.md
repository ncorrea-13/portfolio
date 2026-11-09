<div align="center">

# Portfolio

**Portfolio personal + Documentación del homelab**

[![CI](https://github.com/ncorrea-13/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ncorrea-13/portfolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[Español](README.md)** | [English](README.en.md)

</div>

---

Este repositorio reúne dos sitios web que se complementan:

- **Portfolio**: TypeScript + React + Next.js. Deploy en Vercel.
- **Servidor**: HTML/CSS/JS plano. Deploy en homelab vía Cloudflare Tunnel. CD por polling.
  Sin backend propio, sin input de formularios persistido, nada suministrado por el usuario se refleja de vuelta. Sin superficie de inyección.

El sitio del homelab muestra el estado de los servicios con una API (`https://status.ncorrea.com.ar/api/status`) que vive en otro repo.

## Stack

| Capa            | Tecnología                                             |
| --------------- | ------------------------------------------------------ |
| Frontend        | Next.js 16, React 19, TypeScript                       |
| Estilos         | CSS                                                    |
| Package manager | pnpm                                                   |
| CI              | GitHub Actions, lint + build en push/PR a `main`/`dev` |
| CD (portfolio)  | Vercel                                                 |
| CD (servidor)   | Cloudflare Tunnel, Deploy por pull                     |

## Quick Start

```bash
# 1. Clonar
git clone git@github.com:ncorrea-13/portfolio.git
cd portfolio

# 2. Instalar (pnpm pineado vía mise.toml)
pnpm install

# 3. Servidor de desarrollo
pnpm dev
# → http://localhost:3000
```

### Build

```bash
pnpm build   # next build → export estático en out/
pnpm start   # sirve out/ local para verificar el export
```

## Status API

La documentación muestra el estado de los servicios (operativo o caído, y desde cuándo) con un `fetch` a `STATUS_API_URL` (`https://status.ncorrea.com.ar/api/status`). Esa API vive en [`homelab-status`](https://github.com/ncorrea-13/homelab-status): recibe heartbeats de Uptime Kuma por webhook, los guarda en SQLite y expone `/api/status`.

## Estructura del repo

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

## Repo relacionado

La config de Tailscale/Cloudflare Tunnel y el resto de los compose files del homelab viven en [github.com/ncorrea-13/homeserver](https://github.com/ncorrea-13/homeserver).

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
