# AGENTS.md - homeserver-landing (portfolio + servidor)

## Visión general

Repo con dos superficies públicas independientes, deploy distinto cada una.

- **Portfolio** (raíz) - Next.js 16 (App Router) + TypeScript + Tailwind 4, `output: "export"` (estático puro, sin SSR/API routes). Deploy en **Vercel**. Rutas: `/`, `/sobre-mi`, `/proyectos`.
- **`servidor/`** - HTML/CSS/JS plano, sin build. Deploy vía Cloudflare Tunnel, corriendo 24/7 en el homeserver real. Prueba viva de que el self-hosting es real (contador de uptime leído de `boot.json`).

No es el homeserver real: Tailscale/Cloudflare Tunnel no están acá, ni los compose files de los demás servicios (viven en github.com/ncorrea-13/homeserver). Verificar exposición real (headers, doc root, estado del tunnel) se hace en el servidor, no en este repo.

Sitio 100% estático en ambas superficies: sin backend propio, sin formularios que persistan datos, sin input de usuario reflejado. No hay superficie de inyección (XSS/SQLi/RCE) porque no hay lógica de servidor en el portfolio.

## Stack

| Capa            | Servicio/lib                    | Notas                                                    |
| --------------- | ------------------------------- | -------------------------------------------------------- |
| Frontend        | Next.js 16 (App Router)         | React 19 + TypeScript, `output: "export"` → `out/`       |
| Estilos         | Tailwind CSS 4                  | vía `@tailwindcss/postcss`                               |
| Animación       | framer-motion                   | usado en `Reveal.tsx` y transiciones puntuales           |
| Tema            | next-themes                     | toggle claro/oscuro (`ThemeToggle.tsx`)                  |
| Idioma          | Context propio                  | ES/EN, sin librería de i18n - ver "Internacionalización" |
| Deploy          | Vercel (portfolio)              | build estático, sin runtime de servidor                  |
| Deploy          | Cloudflare Tunnel (`servidor/`) | archivos servidos tal cual en el homeserver real         |
| Package manager | pnpm (pineado en `mise.toml`)   | -                                                        |
| CI              | GitHub Actions                  | lint + build en cada push/PR a `main`/`dev`              |

No hay test runner configurado (no hay lógica de negocio que testear - es contenido + presentación). No agregar Vitest/Jest sin que aparezca lógica real que lo justifique.

## Estructura del repo

```
/
├── app/
│   ├── layout.tsx        # Root layout: Providers (theme+locale), Nav, Footer
│   ├── page.tsx           # Home: Hero, stack, contacto
│   ├── sobre-mi/page.tsx  # Experiencia, educación, CV
│   ├── proyectos/page.tsx # Grid de proyectos con filtro por tag
│   └── globals.css
├── components/
│   ├── Providers.tsx       # Envuelve ThemeProvider (next-themes) + LocaleProvider
│   ├── LocaleProvider.tsx  # Context ES/EN propio, persiste en localStorage
│   ├── T.tsx                # <T es="…" en="…" /> - helper de traducción inline
│   ├── LocaleToggle.tsx, ThemeToggle.tsx
│   ├── Nav.tsx, Footer.tsx, Hero.tsx, ContactLinks.tsx
│   ├── ProjectCard.tsx, ProjectGrid.tsx, TagGroup.tsx
│   ├── LinkButton.tsx, Reveal.tsx  # Reveal = scroll-in animado (framer-motion)
├── content/
│   ├── site.ts        # constantes: URLs de contacto, SERVIDOR_URL
│   ├── projects.ts    # Project[] - name, url, desc {es,en}, tags, stack, image
│   ├── experience.ts  # experiencia laboral, campos {es,en} por texto
│   └── skills.ts       # stack técnico mostrado en el home
├── public/             # assets del portfolio (cv.pdf y foto.jpg gitignored)
├── servidor/
│   ├── index.html, style.css   # página de arquitectura, sin build
│   └── diagrama-arquitectura.svg
├── service/             # unit de systemd que escribe servidor/boot.json - NO se ejecuta desde este repo, es la fuente para copiar al homeserver real (ver service/README.md)
├── .github/workflows/ci.yml
├── mise.toml            # versión de pnpm pineada
├── next.config.ts        # output: "export", images.unoptimized
├── CLAUDE.md
└── README.md
```

## Internacionalización (ES/EN)

Ya implementado, no es una idea a futuro:

- `LocaleProvider` (`components/LocaleProvider.tsx`): Context con `locale: "es" | "en"`, persiste en `localStorage` bajo la key `"locale"`, sincroniza entre pestañas vía evento `storage` + evento custom `locale-change`. `getServerSnapshot()` devuelve siempre `"es"` (el SSR/export estático no puede leer `localStorage`), así que el primer render en el cliente puede "flashear" ES antes de hidratar con la preferencia real - comportamiento esperado, no un bug.
- `<T es="…" en="…" />` (`components/T.tsx`): forma preferida de texto bilingüe embebido en JSX. Contenido más largo o estructurado (arrays en `content/*.ts`) usa el shape `{ es: string; en: string }` in-line en vez de `T`.
- `LocaleToggle.tsx`: botón EN/ES en el header. Usa `useSyncExternalStore` con un snapshot server/cliente distinto (`mounted`) para evitar mismatch de hidratación - no simplificar quitando ese guard.
- Contenido tipado en `content/*.ts` sigue el mismo patrón `LocalizedText = { es: string; en: string }` que `T` - mantenerlo consistente si se agrega contenido nuevo, no mezclar con una lib de i18n externa (next-intl, etc.) para esto: el alcance (3 rutas, texto fijo) no lo justifica.

## Convenciones de código

- TypeScript estricto (`strict: true` en `tsconfig.json`).
- Server Components por defecto; `"use client"` solo donde hace falta interactividad real (tema, idioma, animaciones con framer-motion, filtro de proyectos).
- `output: "export"` es una restricción dura: nada de Server Actions, API routes, ni nada que dependa de un runtime de servidor en producción - el build tiene que poder servirse como archivos estáticos puros en Vercel.
- Contenido (textos, links, proyectos, experiencia) vive en `content/*.ts`, tipado - no hardcodear strings de contenido dentro de componentes de `app/`/`components/` salvo texto puramente estructural (labels de UI que no son "contenido del portfolio").
- Todo texto visible al usuario final va bilingüe (`T` o `LocalizedText`) - no agregar texto solo en español o solo en inglés.
- Commits en español, formato convencional: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- `servidor/`: se edita `index.html`/`style.css` directo, sin pipeline de build - lo que está en el archivo es lo que se sirve. No portarlo a React/Next: página única, estado mínimo (tema + fetch de `boot.json`), ya resuelto en vanilla JS - un build no se justifica.

## Variables de entorno

No hay `.env` - el sitio no llama APIs externas ni tiene secrets; `content/site.ts` son constantes públicas commiteadas (URLs de contacto). `service/.env.example` es del systemd unit (`DOC_ROOT`), propio del homeserver real, no de este build.

## Comandos

```bash
pnpm install
pnpm dev            # next dev
pnpm build          # next build → genera out/ (export estático)
pnpm start          # next start (solo para probar out/ local; prod es estático en Vercel)
pnpm lint           # eslint
pnpm exec tsc --noEmit
```

## CI (`.github/workflows/ci.yml`)

En cada push a `main`/`dev` y en cada PR: `pnpm install --frozen-lockfile` → `pnpm run lint` → `pnpm run build`. No corre `tsc --noEmit` como paso separado (el build de Next ya tipa-chequea) ni tests (no hay ninguno configurado). Si se agrega lógica no trivial (parseo, cálculo), sumar Vitest y un paso de test acá, no antes.

## Deploy

- **Portfolio**: push a `main` → deploy automático en Vercel (preview en PRs). Build genera `out/` estático.
- **`servidor/`**: sin CI/CD - se sincroniza la carpeta `servidor/` a mano al doc root real vía Cloudflare Tunnel. `boot.json` lo escribe `service/write-boot-time.service` en el host, no se versiona (gitignored).

## Cosas a evitar

- No convertir `servidor/` en Next.js/React ni sumarle build - es una sola página con estado mínimo (tema + fetch de `boot.json`), ya resuelto en vanilla JS.
- No usar Server Actions/API routes en el portfolio - rompe `output: "export"`.
- No commitear `public/cv.pdf`, `public/foto.jpg` ni `servidor/boot.json` (gitignored a propósito, son archivos personales/generados).
- No agregar una librería de i18n externa para el toggle ES/EN - el Context propio (`LocaleProvider` + `T`) ya cubre el alcance de 3 rutas con texto fijo.
- No asumir que este repo tiene acceso a la config real del homeserver (Tailscale/Funnel/Cloudflare Tunnel, compose files) - vive en github.com/ncorrea-13/homeserver.
- No ejecutar ni testear `service/` desde este repo - es la fuente para copiar al servidor real, no corre acá.
