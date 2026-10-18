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
      es: "Trabajo final de carrera: plataforma de adopción y rescate animal. API REST con Express, TypeScript, PostgreSQL y Prisma, con chat en tiempo real, tests con Vitest y CI en GitHub Actions. Incluye una app mobile con Expo y un panel de administración web con Next.js.",
      en: "Final degree thesis: an animal adoption and rescue platform. REST API built with Express, TypeScript, PostgreSQL, and Prisma, with real-time chat, Vitest tests, and CI on GitHub Actions. Includes a mobile app built with Expo and a web admin panel built with Next.js.",
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
      es: "Configuración personal de Linux para Devuan 6 (Excalibur) sobre Wayland. 100% systemd-free.",
      en: "My personal Linux setup for Devuan 6 (Excalibur) on Wayland. 100% systemd-free.",
    },
    license: "MIT",
    tags: ["infra", "tui-cli"],
    stack: ["Bash", "Lua", "Neovim"],
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
      es: "Testing Automatizado sobre Thinkint Tester",
      en: "Automated Testing on Thinking Tester",
    },
    url: "https://github.com/matih1210/TPN-6-TESTING-AUTOMATIZADO",
    desc: {
      es: "Tests E2E que cubre registro, login, CRUD de contactos, validaciones y protección de rutas para la aplicación Thinking Tester Contact List.",
      en: "End to end tests covering sign up, login, contact CRUD, validations, and route protection for the Thinking Tester Contact List app.",
    },
    tags: ["testing"],
    stack: ["Node.js", "Cypress"],
    image: "/projects/Cypress.png",
  },
  {
    name: { es: "Generador de portadas de libros", en: "Book cover generator" },
    url: "https://github.com/ncorrea-13/generadorLibros",
    desc: {
      es: "cGAN y cVAE para síntesis de estructuras de texto, trabajo final de Redes Neuronales Profundas (2025), con Jupyter Notebook y Google Colab.",
      en: "cGAN and cVAE models for text structure synthesis, final project for Deep Neural Networks (2025), built with Jupyter Notebook and Google Colab.",
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
      es: "Implementación del Generador de Fibonacci Atrasado.",
      en: "An implementation of the Lagged Fibonacci Generator.",
    },
    tags: ["backend"],
    stack: ["Python", "Gradio"],
    image: "/projects/Fibonacci.png",
  },
  {
    name: {
      es: "Sistema de Stock de inventario Fullstack",
      en: "Fullstack Inventory Stock System",
    },
    url: "https://github.com/ncorrea-13/sistInventario-back",
    desc: {
      es: "Sistema de stock de inventario con la gestión de productos, proveedores, órdenes y ventas.",
      en: "An inventory stock system that manages products, suppliers, orders, and sales.",
    },
    tags: ["frontend", "backend"],
    stack: [
      "React",
      "Next.js",
      "Tailwind",
      "PrismaORM",
      "PostgreSql",
      "Express",
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
