<div align="center">

# Portfolio

**Portfolio personal + página de estado del homelab en vivo**

[![CI](https://github.com/ncorrea-13/homeserver-landing/actions/workflows/ci.yml/badge.svg)](https://github.com/ncorrea-13/homeserver-landing/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[Español](README.md)** | [English](README.en.md)

</div>

---

Dos superficies públicas independientes, con deploy distinto cada una:

- **Portfolio** (raíz del repo): Next.js 16 (App Router) + TypeScript + Tailwind 4. Deploy en **Vercel**. Rutas: `/`, `/sobre-mi`, `/proyectos`.
- **[`servidor/`](servidor/)**: HTML/CSS/JS plano, sin build. Servido 24/7 desde el homeserver real vía Cloudflare Tunnel. Prueba viva de que el self-hosting es real: consume el estado de servicios de una API FastAPI externa (ver [Status API](#status-api)).

Sin backend propio, sin input de formularios persistido, nada suministrado por el usuario se refleja de vuelta. Sin superficie de inyección.

## Stack

| Capa | Tecnología |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript |
| Estilos | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Package manager | pnpm (pineado en `mise.toml`) |
| Deploy (portfolio) | Vercel, export estático |
| Deploy (`servidor/`) | Cloudflare Tunnel, servido tal cual desde el homeserver |
| CI | GitHub Actions, lint + build en push/PR a `main`/`dev` |

## Quick Start

```bash
# 1. Clonar
git clone git@github.com:ncorrea-13/homeserver-landing.git
cd homeserver-landing

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

`servidor/` no necesita build, se edita `servidor/index.html` / `servidor/style.css` directo y se sirve tal cual.

## Variables de entorno

Ninguna. El sitio no llama a ninguna API propia; `content/site.ts` tiene constantes públicas commiteadas (links de contacto). `servidor/index.html` hardcodea `STATUS_API_URL` inline; no es una env var, ya que el export es 100% estático.

## Status API

`servidor/index.html` renderiza el estado de servicios (up/down, último check) haciendo fetch a `STATUS_API_URL` (`https://status.ncorrea.com.ar/api/status`). Esa API FastAPI vive en un repo aparte ([`homelab-status`](https://github.com/ncorrea-13/homelab-status)): recibe heartbeats de Uptime Kuma vía webhook, los guarda en SQLite y expone `/api/status`. Este repo solo la consume; sin código de API ni secrets acá.

## Estructura del repo

```
app/
├── layout.tsx        
├── page.tsx           
├── sobre-mi/page.tsx  
├── proyectos/page.tsx 
└── globals.css
components/
├── Providers.tsx      
├── LocaleProvider.tsx  
├── T.tsx                
├── LocaleToggle.tsx, ThemeToggle.tsx
├── Nav.tsx, Footer.tsx, Hero.tsx, ContactLinks.tsx
├── ProjectCard.tsx, ProjectGrid.tsx, TagGroup.tsx
├── LinkButton.tsx, Reveal.tsx  
content/
├── site.ts        
├── projects.ts    
├── experience.ts  
└── skills.ts      
public/            
servidor/
├── index.html, style.css  
└── diagrama-arquitectura.svg
.github/workflows/ci.yml
mise.toml           
next.config.ts       
```

## Repo relacionado

La config de Tailscale/Cloudflare Tunnel y el resto de los compose files del homelab viven en [github.com/ncorrea-13/homeserver](https://github.com/ncorrea-13/homeserver).

---

_Mendoza, Argentina · Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
