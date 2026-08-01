export type Project = {
  name: string;
  url: string;
  desc: string;
  license?: string;
  tags: string[];
  stack: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    name: "bw-tui",
    url: "https://github.com/ncorrea-13/bw-tui",
    desc: "Terminal User Interface que funciona como wrapper para utilizar Bitwarden desde la terminal.",
    license: "GPLv3",
    tags: ["tui-cli"],
    stack: ["Rust", "Ratatui"],
    image: "/projects/bw-tui.png",
  },
  {
    name: "weathertui",
    url: "https://github.com/ncorrea-13/weathertui",
    desc: "Terminal User Interface basada en meteo-cli. Utiliza OpenWeatherMap para mostrar el pronóstico del tiempo en la terminal.",
    license: "GPLv3",
    tags: ["tui-cli"],
    stack: ["Go", "Bubbletea"],
    image: "/projects/weathertui.png",
  },
  {
    name: "homeserver",
    url: "https://github.com/ncorrea-13/homeserver",
    desc: "Configuración y compose files de mi servidor personal. Debian Trixie + Podman rootless. El mismo servidor que hostea la página de arquitectura.",
    license: "MIT",
    tags: ["infra"],
    stack: ["WireGuard", "Containers", "Bash", "systemd"],
    image: "/projects/homeserver.jpeg",
  },
  {
    name: "dotfiles",
    url: "https://github.com/ncorrea-13/dotfiles",
    desc: "Configuración personal de Linux para Devuan 6 (Excalibur) sobre Wayland. 100% systemd-free.",
    license: "MIT",
    tags: ["infra", "tui-cli"],
    stack: ["Bash", "Lua", "Neovim"],
    image: "/projects/dotfiles.png",
  },
  {
    name: "accesoriosstina",
    url: "https://accesoriosstina.vercel.app/",
    desc: "Página web para un emprendimiento de accesorios, con catálogo de productos.",
    tags: ["frontend"],
    stack: ["React", "Next.js", "Tailwind"],
    image: "/projects/accesorioss.png",
  },
  {
    name: "vineyard",
    url: "https://ecommerce-blue-chi.vercel.app/",
    desc: "Tienda para una bodega de vinos. La aplicación incluye un catálogo de productos, un sistema de registro y autenticación de usuarios.",
    tags: ["frontend", "backend"],
    stack: ["React", "Redux", "Tailwind"],
    image: "/projects/vineyard.png",
  },
  {
    name: "Asap Consultores",
    url: "https://www.asapconsultores.com.ar/",
    desc: "Página estilo landing page para la empresa ASAP.",
    tags: ["frontend"],
    stack: ["React", "Next.js", "Tailwind"],
    image: "/projects/ASAP.png",
  },
  {
    name: "BugsLessDesign",
    url: "https://bugs-less-design.vercel.app/",
    desc: "Página del equipo de BugsLess Design. Permite el contacto fácil con la empresa y obtener información sobre los servicios ofrecidos.",
    tags: ["frontend"],
    stack: ["React", "Redux", "Tailwind"],
    image: "/projects/BugsLessDesign.png",
  },
  {
    name: "Testing Automatizado sobre Thinkint Tester",
    url: "https://github.com/matih1210/TPN-6-TESTING-AUTOMATIZADO",
    desc: "Tests E2E que cubre registro, login, CRUD de contactos, validaciones y protección de rutas para la aplicación Thinking Tester Contact List.",
    tags: ["testing"],
    stack: ["Node.js", "Cypress"],
    image: "/projects/Cypress.png",
  },
  {
    name: "Generador de números pseudoaleatorios",
    url: "https://huggingface.co/spaces/ncorrea-13/generadorFibonacci",
    desc: "Implementación del Generador de Fibonacci Atrasado.",
    tags: ["frontend", "backend"],
    stack: ["Python", "Gradio"],
    image: "/projects/Fibonacci.png",
  },
  {
    name: "Sistema de Stock de inventario Fullstack",
    url: "https://github.com/ncorrea-13/sistInventario-back",
    desc: "Sistema de stock de inventario con la gestión de productos, proveedores, órdenes y ventas.",
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
    name: "Microservicio de mail",
    url: "https://github.com/ncorrea-13/mailMicroservicio",
    desc: "Microservicio de correo con arquitectura RESTful que se complementa con el Eccommerce del trabajo final de Arquitectura de Microservicios (2025).",
    license: "GPLv3",
    tags: ["backend"],
    stack: ["TypeScript", "Node.js", "Express"],
  },
  {
    name: "generadorLibros",
    url: "https://github.com/ncorrea-13/generadorLibros",
    desc: "cGAN y cVAE para síntesis de estructuras de texto, trabajo final de Redes Neuronales Profundas (2025), con Jupyter Notebook y Google Colab.",
    license: "GPLv3",
    tags: ["frontend", "ml"],
    stack: ["Python", "PyTorch", "Streamlit"],
    image: "/projects/generador.png",
  },
];

export const filters = [
  { key: "all", label: "Todos" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "infra", label: "Infraestructura" },
  { key: "tui-cli", label: "TUI/CLI" },
  { key: "testing", label: "Testing" },
  { key: "ml", label: "ML" },
] as const;
