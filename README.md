# Portfolio personal

Portfolio público: quién soy, mi experiencia y mis proyectos. Dos superficies independientes, un solo repo:

- **Portfolio** (raíz) — Next.js + TypeScript + Tailwind, export estático, deploy en **Vercel**.
- **`servidor/`** — página de arquitectura del homeserver + uptime en vivo, HTML/CSS plano sin build, servida 24/7 por **Tailscale Funnel** desde el homeserver real. Es la única prueba de que el self-hosting es real, por eso no vive en Vercel.

## Por qué estático

Sin backend, sin formularios ni cookies: no hay lógica de servidor ni input de usuario, así que no hay superficie de inyección que auditar. Misma filosofía en las dos partes: exponer lo mínimo posible.

## Contenido

- `/` — presentación, stack técnico, contacto
- `/sobre-mi` — experiencia, educación, CV descargable
- `/proyectos` — proyectos personales y académicos, con filtro por tecnología
- `servidor/` — arquitectura del homeserver: diagrama, stack, decisiones y trade-offs, más el contador de uptime real

## Estructura

```
app/          rutas del portfolio (Next.js App Router)
components/   componentes React compartidos
content/      datos tipados (proyectos, experiencia, skills, links)
public/       assets del portfolio (cv.pdf, foto.jpg, capturas de proyectos)
servidor/     página estática de arquitectura, deploy aparte vía Funnel
service/      unit de systemd que escribe servidor/boot.json en el host real
```

## Desarrollo

Versión de `pnpm` pineada en `mise.toml`.

```bash
pnpm install
pnpm run dev
```

## Build (portfolio)

```bash
pnpm run build
```

Genera `out/` estático (`output: 'export'` en `next.config.ts`). Es lo que Vercel deploya; configurar el proyecto de Vercel con Root Directory en la raíz del repo.

## Deploy de `servidor/`

Sin build. Se sirve tal cual desde el homeserver real vía Tailscale Funnel — copiar/sincronizar la carpeta `servidor/` al doc root correspondiente. `boot.json` lo escribe `service/write-boot-time.service` en el host real (`DOC_ROOT` debe apuntar ahí).

## Repo relacionado

La configuración de Tailscale, los compose files y el resto de los servicios del homeserver viven en [github.com/ncorrea-13/homeserver](https://github.com/ncorrea-13/homeserver), bajo licencia MIT.
