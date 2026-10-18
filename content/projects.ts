import { SERVIDOR_URL } from "@/content/site";

type LocalizedText = { es: string; en: string };
export type FilterKey = (typeof filters)[number]["key"];
type Tag = Exclude<FilterKey, "all">;
export type Project = {
  name: LocalizedText;
  url: string;
  desc: LocalizedText;
  license?: string;
  tags: Tag[];
  stack: string[];
  image?: string;
  imagePosition?: string;
  facts?: { value: string; label: LocalizedText }[];
  role?: LocalizedText;
};

export const projects: Project[] = [
  {
    name: { es: "PetHood", en: "PetHood" },
    url: "https://github.com/Pethood-project",
    desc: {
      es: "Trabajo final de carrera: plataforma de adopción y rescate animal. API REST con chat en tiempo real, app mobile con Expo y panel de administración web con Next.js, con tests y CI.",
      en: "Final degree thesis: an animal adoption and rescue platform. REST API with real-time chat, a mobile app built with Expo, and a web admin panel built with Next.js, with tests and CI.",
    },
    license: "",
    tags: ["backend", "frontend", "mobile"],
    stack: [
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "Expo",
    ],
    image: "/projects/pethood.png",
  },
  {
    name: { es: "Mis dotfiles personales", en: "My personal dotfiles" },
    url: "https://github.com/ncorrea-13/dotfiles",
    desc: {
      es: "Config personal de Linux sobre Devuan 6 con OpenRC y Sway, 100% systemd-free. Un install.sh enlaza todo en $HOME y respalda lo existente. Incluye Zsh, Neovim, Zellij y WezTerm.",
      en: "Personal Linux setup on Devuan 6 with OpenRC and Sway, 100% systemd-free. An install.sh links everything into $HOME and backs up existing files. Includes Zsh, Neovim, Zellij, and WezTerm.",
    },
    license: "MIT",
    tags: ["infra", "tui-cli"],
    stack: ["Devuan", "OpenRC", "Sway", "Bash", "Zsh", "Lua", "Neovim"],
    image: "/projects/dotfiles.png",
  },
  {
    name: { es: "Microservicio de mail", en: "Mail microservice" },
    url: "https://github.com/ncorrea-13/mailMicroservicio",
    desc: {
      es: "Microservicio de correo con arquitectura RESTful que se complementa con el Eccommerce del trabajo final de Arquitectura de Microservicios (2025).",
      en: "A mail microservice with a RESTful architecture, built to complement the e-commerce project from the Microservices Architecture course (2025).",
    },
    license: "GPLv3",
    tags: ["backend"],
    stack: ["TypeScript", "Node.js", "Express"],
  },
  {
    name: {
      es: "Testing Automatizado sobre Thinking Tester",
      en: "Automated Testing on Thinking Tester",
    },
    url: "https://github.com/matih1210/TPN-6-TESTING-AUTOMATIZADO",
    desc: {
      es: "Suite E2E con Cypress: 19 casos que cubren registro, login y logout, CRUD de contactos, validaciones de campos obligatorios y protección de rutas sin sesión.",
      en: "Cypress E2E suite: 19 test cases covering sign up, login and logout, contact CRUD, required-field validations, and route protection without a session.",
    },
    tags: ["testing"],
    stack: ["Node.js", "Cypress"],
    image: "/projects/Cypress.png",
  },
  {
    name: { es: "Generador de portadas de libros", en: "Book cover generator" },
    url: "https://github.com/ncorrea-13/generadorLibros",
    desc: {
      es: "BookCoverAI: generador de portadas de libros por género con una cGAN y una cVAE, entrenadas con el dataset Book30. La app en Streamlit permite elegir el género, el modelo y la cantidad de imágenes, e incluye un juego con niveles de dificultad para adivinar el género de la portada generada.",
      en: "BookCoverAI: a book cover generator by genre using a cGAN and a cVAE, trained on the Book30 dataset. The Streamlit app lets you pick the genre, the model, and the number of images, and includes a game with difficulty levels where you guess the genre of the generated cover.",
    },
    license: "GPLv3",
    tags: ["ml", "frontend"],
    stack: ["Python", "PyTorch", "Streamlit"],
    image: "/projects/generador.png",
  },
  {
    name: {
      es: "Generador de números pseudoaleatorios",
      en: "Pseudo-random number generator",
    },
    url: "https://huggingface.co/spaces/ncorrea-13/generadorFibonacci",
    desc: {
      es: "Generador de números pseudoaleatorios con Fibonacci atrasado. Incluye transformada inversa, aceptación-rechazo y tests estadísticos como Kolmogorov-Smirnov y Chi-cuadrado, con interfaz en Gradio.",
      en: "Pseudo-random number generator using Lagged Fibonacci. Includes inverse transform, acceptance-rejection, and statistical tests such as Kolmogorov-Smirnov and Chi-square, with a Gradio interface.",
    },
    tags: ["backend"],
    stack: ["Python", "Gradio"],
    image: "/projects/Fibonacci.png",
  },
  {
    name: {
      es: "Sistema de gestión de inventario",
      en: "Inventory management system",
    },
    url: "https://github.com/ncorrea-13/sistInventario-back",
    desc: {
      es: "Gestión de inventario con modelos de lote fijo e intervalo fijo, lote óptimo, punto de pedido y stock de seguridad. Incluye proveedores, órdenes de compra, ventas y un cron que genera órdenes automáticamente.",
      en: "Inventory management with fixed-lot and fixed-interval models, optimal lot size, reorder point, and safety stock. Includes suppliers, purchase orders, sales, and a cron job that generates orders automatically.",
    },
    tags: ["frontend", "backend"],
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    name: { es: "vineyard", en: "vineyard" },
    url: "https://ecommerce-blue-chi.vercel.app/",
    desc: {
      es: "Proyecto de tienda para una bodega de vinos. La aplicación incluye un catálogo de productos, un sistema de registro y autenticación de usuarios.",
      en: "An online store for a winery. The app includes a product catalog and a user registration and authentication system.",
    },
    tags: ["frontend", "backend"],
    stack: ["React", "Redux", "Tailwind"],
    image: "/projects/vineyard.png",
  },
];

export const ownProjects: Project[] = [
  {
    name: { es: "Rolboard", en: "Rolboard" },
    url: "https://rolboard.ncorrea.com.ar/",
    desc: {
      es: "App para dirigir campañas de rol de mesa: sesiones, arcos, NPCs, locaciones, facciones y tracker de combate. Corre como web, escritorio (Windows y Linux) y Android, e indexa el frontmatter de un vault de Obsidian. Con CI y releases automatizados.",
      en: "App for running tabletop RPG campaigns: sessions, arcs, NPCs, locations, factions, and a combat tracker. Runs as a web app, on desktop (Windows and Linux), and on Android, and indexes an Obsidian vault's frontmatter. With CI and automated releases.",
    },
    license: "MIT",
    tags: ["backend", "frontend"],
    stack: ["Go", "SQLite", "React", "TypeScript", "Wails", "Docker"],
    image: "/projects/rolboard.jpg",
  },
  {
    name: { es: "Bw-tui", en: "Bw-tui" },
    url: "https://github.com/ncorrea-13/bw-tui",
    desc: {
      es: "TUI en Rust sobre el CLI oficial de Bitwarden: bóveda, edición de ítems, generador de contraseñas y limpieza del portapapeles. Funciona en Wayland y WSL2. Con CI, binarios en cada release y Dependabot.",
      en: "Rust TUI on top of the official Bitwarden CLI: vault browsing, item editing, a password generator, and clipboard clearing. Works on Wayland and WSL2. With CI, binaries on every release, and Dependabot.",
    },
    license: "GPLv3",
    tags: ["tui-cli"],
    stack: ["Rust", "Ratatui"],
    imagePosition: "left top",
    image: "/projects/bw-tui.png",
  },
  {
    name: { es: "Weathertui", en: "Weathertui" },
    url: "https://github.com/ncorrea-13/weathertui",
    desc: {
      es: "TUI en Go que muestra el clima actual de una ciudad con datos de OpenWeatherMap, con configuración guiada en el primer arranque. Con CI, binarios en cada release y Dependabot.",
      en: "Go TUI that shows a city's current weather from OpenWeatherMap data, with guided setup on first run. With CI, binaries on every release, and Dependabot.",
    },
    license: "GPLv3",
    tags: ["tui-cli"],
    stack: ["Go", "Bubbletea"],
    image: "/projects/weathertui.png",
  },
  {
    name: { es: "Homelab", en: "Homelab" },
    url: SERVIDOR_URL,
    desc: {
      es: "Homelab real, 24/7, en cuatro equipos. Más de 10 servicios como pods de Podman rootless con systemd, accesibles solo por Tailscale a través de Caddy, con DNS por Unbound sobre DoT y puertos cerrados en la LAN. Backups diarios y semanales en discos dedicados con restore probado, laboratorio de VMs aislado de la red y estado en vivo con Uptime Kuma.",
      en: "A real homelab running 24/7 on four devices. 10+ services as rootless Podman pods under systemd, reachable only over Tailscale through Caddy, with DNS via Unbound over DoT and LAN ports closed. Daily and weekly backups on dedicated disks with tested restores, a VM lab isolated from the network, and live status through Uptime Kuma.",
    },
    license: "MIT",
    tags: ["infra"],
    stack: [
      "Podman",
      "Systemd",
      "Caddy",
      "Tailscale",
      "Cloudflare",
      "Pi-hole",
      "Unbound",
      "KVM",
      "Uptime Kuma",
    ],
    imagePosition: "center 52%",
    facts: [
      { value: "4", label: { es: "equipos", en: "devices" } },
      { value: "10+", label: { es: "servicios", en: "services" } },
      { value: "24/7", label: { es: "en producción", en: "in production" } },
    ],
    image: "/projects/homelab.jpg",
  },
];

const developer = { es: "Desarrollador", en: "Developer" };

export const clientWork: Project[] = [
  {
    name: { es: "AccesoriossTina", en: "AccesoriossTina" },
    url: "https://accesoriosstina.vercel.app/",
    desc: {
      es: "Desarrollo del sitio de AccesoriossTina, con autenticación de usuarios, gestión de insumos y control de stock.",
      en: "Development of the AccesoriossTina website, with user authentication, supplies management, and stock control.",
    },
    role: developer,
    tags: [],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "/projects/accesorioss.png",
  },
  {
    name: { es: "ASAP Consultores", en: "ASAP Consultores" },
    url: "https://www.asapconsultores.com.ar/",
    desc: {
      es: "Desarrollo del sitio institucional de ASAP Consultores: presentación de la empresa y sus servicios.",
      en: "Development of the corporate website for ASAP Consultores, presenting the company and its services.",
    },
    role: developer,
    tags: [],
    stack: ["React", "Next.js", "Tailwind"],
    image: "/projects/ASAP.png",
  },
  {
    name: { es: "BugsLess Design", en: "BugsLess Design" },
    url: "https://bugs-less-design.vercel.app/",
    desc: {
      es: "Desarrollo del sitio de BugsLess Design: canal de contacto y presentación de los servicios del equipo.",
      en: "Development of the BugsLess Design website: a contact channel and overview of the team's services.",
    },
    role: developer,
    tags: [],
    stack: ["React", "Vite", "Tailwind", "Three.js"],
    image: "/projects/BugsLessDesign.png",
  },
];

export const filters = [
  { key: "all", label: { es: "Todos", en: "All" } },
  { key: "backend", label: { es: "Backend", en: "Backend" } },
  { key: "frontend", label: { es: "Frontend", en: "Frontend" } },
  { key: "infra", label: { es: "Infraestructura", en: "Infrastructure" } },
  { key: "mobile", label: { es: "Mobile", en: "Mobile" } },
  { key: "tui-cli", label: { es: "TUI/CLI", en: "TUI/CLI" } },
  { key: "testing", label: { es: "Testing", en: "Testing" } },
  { key: "ml", label: { es: "Machine Learning", en: "Machine Learning" } },
] as const;

export const tagTone: Record<Tag, string> = {
  backend: "var(--accent)",
  frontend: "var(--tag-frontend)",
  infra: "var(--tag-infra)",
  mobile: "var(--tag-mobile)",
  "tui-cli": "var(--tag-devops)",
  testing: "var(--tag-security)",
  ml: "var(--tag-prompt)",
};
