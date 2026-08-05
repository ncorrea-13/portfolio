# Portfolio personal

Esta web muestra quién soy, mi experiencia y mis proyectos. Se compone de dos partes:

- **Portfolio** (raíz): TypeScript + Next.js + Tailwind, deploy en **Vercel**.
- **`servidor/`**: HTML/CSS/Js estático buscando mantenerlo simple. Es la página del homeserver que se encuentra servida 24/7 desde la infra. Es la prueba de que el hosting es real.

## Contenido

- `/`: Presentación, stack técnico, contacto
- `/sobre-mi`: Experiencia, educación, CV
- `/proyectos`: Proyectos laborales (que se pueden exponer), personales y académicos, con filtro por tecnología.
- `servidor/`: Página del servidor con su diagrama, stack, y decisiones.

## Estructura

```
app/          rutas por Next.js App Router
components/   componentes React compartidos
content/      datos tipados
public/       assets del portfolio
servidor/     HTML/CSS/JS estático
service/      unit de systemd que escribe servidor/boot.json
```

## Desarrollo

Para la administración de la app en Node.js, uso `pnpm` definida en `mise.toml`.

```bash
pnpm install
pnpm run dev
```

## Build (portfolio)

```bash
pnpm run build
```

Genera `out/` estático para Vercel.

## Deploy de `servidor/`

Se sirve tal cual vía Cloudflare Tunnel. Para su deploy se sincroniza la carpeta `servidor/` al root correspondiente. `boot.json` lo escribe `service/write-boot-time.service` en el host real.

> [!NOTE] El deploy de `servidor/` es independiente del portfolio, ya que ambos están instanciados en diferentes servidores.

## Repo relacionado

La configuración de Tailscale, los compose files y el resto de los servicios del homeserver viven en [github.com/ncorrea-13/homeserver](https://github.com/ncorrea-13/homeserver), bajo licencia MIT.

---

## Licencia

MIT - Vea [LICENSE](https://github.com/ncorrea-13/portfolio/blob/main/LICENSE") para más detalles.

_Mendoza, Argentina - Nicolás Correa ([ncorrea-13](https://github.com/ncorrea-13))_
