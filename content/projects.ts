type LocalizedText = { es: string; en: string };

export type Project = {
  name: string;
  url: string;
  desc: LocalizedText;
  license?: string;
  tags: string[];
  stack: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    name: "accesoriosstina",
    url: "https://accesoriosstina.vercel.app/",
    desc: {
      es: "Página web para AccesoriossTina, un emprendimiento de accesorios que cuenta con autenticación de usuarios, gestión de insumos y control de stock.",
      en: "A website for AccesoriossTina, an accessories business featuring user authentication, supplies management, and stock control.",
    },
    tags: ["frontend"],
    stack: ["React", "Next.js", "Tailwind"],
    image: "/projects/accesorioss.png",
  },
  {
    name: "weathertui",
    url: "https://github.com/ncorrea-13/weathertui",
    desc: {
      es: "Terminal User Interface basada en meteo-cli. Utiliza OpenWeatherMap para mostrar el pronóstico del tiempo en la terminal.",
      en: "A terminal user interface based on meteo-cli. It uses OpenWeatherMap to show the weather forecast in the terminal.",
    },
    license: "GPLv3",
    tags: ["tui-cli"],
    stack: ["Go", "Bubbletea"],
    image: "/projects/weathertui.png",
  },
  {
    name: "bw-tui",
    url: "https://github.com/ncorrea-13/bw-tui",
    desc: {
      es: "Terminal User Interface que funciona como wrapper para utilizar Bitwarden desde la terminal.",
      en: "A terminal user interface that wraps Bitwarden so you can use it from the terminal.",
    },
    license: "GPLv3",
    tags: ["tui-cli"],
    stack: ["Rust", "Ratatui"],
    image: "/projects/bw-tui.png",
  },
  {
    name: "homeserver/homelab",
    url: "https://github.com/ncorrea-13/homeserver",
    desc: {
      es: "Configuración y compose files de mi servidor personal. El mismo servidor que hostea la página de arquitectura.",
      en: "Configuration and compose files for my personal server. The same server that hosts the architecture page.",
    },
    license: "MIT",
    tags: ["infra"],
    stack: ["WireGuard", "Containers", "Bash", "Systemd"],
    image: "/projects/homelab.jpg",
  },
  {
    name: "dotfiles",
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
    name: "Microservicio de mail",
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
    name: "Testing Automatizado sobre Thinkint Tester",
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
    name: "generadorLibros",
    url: "https://github.com/ncorrea-13/generadorLibros",
    desc: {
      es: "cGAN y cVAE para síntesis de estructuras de texto, trabajo final de Redes Neuronales Profundas (2025), con Jupyter Notebook y Google Colab.",
      en: "cGAN and cVAE models for text structure synthesis, final project for Deep Neural Networks (2025), built with Jupyter Notebook and Google Colab.",
    },
    license: "GPLv3",
    tags: ["frontend", "ml"],
    stack: ["Python", "PyTorch", "Streamlit"],
    image: "/projects/generador.png",
  },
  {
    name: "Generador de números pseudoaleatorios",
    url: "https://huggingface.co/spaces/ncorrea-13/generadorFibonacci",
    desc: {
      es: "Implementación del Generador de Fibonacci Atrasado.",
      en: "An implementation of the Lagged Fibonacci Generator.",
    },
    tags: ["frontend", "backend"],
    stack: ["Python", "Gradio"],
    image: "/projects/Fibonacci.png",
  },
  {
    name: "Sistema de Stock de inventario Fullstack",
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
    name: "Asap Consultores",
    url: "https://www.asapconsultores.com.ar/",
    desc: {
      es: "Página para la empresa ASAP Consultores estilo landing page informativa.",
      en: "A landing page style website for the company ASAP.",
    },
    tags: ["frontend"],
    stack: ["React", "Next.js", "Tailwind"],
    image: "/projects/ASAP.png",
  },
  {
    name: "BugsLessDesign",
    url: "https://bugs-less-design.vercel.app/",
    desc: {
      es: "Página del equipo de BugsLess Design. Permite el contacto fácil con la empresa y obtener información sobre los servicios ofrecidos.",
      en: "The website for the BugsLess Design team. It offers an easy way to contact the company and learn about their services.",
    },
    tags: ["frontend"],
    stack: ["React", "Redux", "Tailwind"],
    image: "/projects/BugsLessDesign.png",
  },
  {
    name: "vineyard",
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

export const filters = [
  { key: "all", label: { es: "Todos", en: "All" } },
  { key: "backend", label: { es: "Backend", en: "Backend" } },
  { key: "frontend", label: { es: "Frontend", en: "Frontend" } },
  { key: "infra", label: { es: "Infraestructura", en: "Infrastructure" } },
  { key: "tui-cli", label: { es: "TUI/CLI", en: "TUI/CLI" } },
  { key: "testing", label: { es: "Testing", en: "Testing" } },
  { key: "ml", label: { es: "ML", en: "ML" } },
] as const;
