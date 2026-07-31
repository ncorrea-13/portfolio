export type Project = {
  name: string;
  url: string;
  desc: string;
  // Opcional: proyectos sin repo público (ej. sitios de cliente) no tienen license.
  license?: string;
  tags: string[];
  // Stack principal, mostrado como pie de card (ej. lenguaje/framework core).
  stack: string[];
  // Opcional: poner el archivo en public/projects/<archivo> y completar acá,
  // ej. "/projects/bw-tui.png". Sin imagen, la card muestra un degradado.
  image?: string;
};

export const projects: Project[] = [
  {
    name: "bw-tui",
    url: "https://github.com/ncorrea-13/bw-tui",
    desc: "Terminal User Interface que funciona como wrapper para utilizar Bitwarden desde la terminal.",
    license: "GPLv3",
    tags: ["TUI/CLI"],
    stack: ["Rust", "Ratatui"],
    image: "/projects/bw-tui.png",
  },
  {
    name: "weathertui",
    url: "https://github.com/ncorrea-13/weathertui",
    desc: "Terminal User Interface basada en meteo-cli. Utiliza OpenWeatherMap para mostrar el pronóstico del tiempo en la terminal.",
    license: "GPLv3",
    tags: ["TUI/CLI"],
    stack: ["Go"],
    image: "/projects/weathertui.png",
  },
  {
    name: "homeserver",
    url: "https://github.com/ncorrea-13/homeserver",
    desc: "Configuración y compose files de mi servidor personal. Debian Trixie + Podman rootless. El mismo servidor que hostea la página de arquitectura.",
    license: "MIT",
    tags: ["infra"],
    stack: ["Podman", "Debian", "systemd"],
    image: "/projects/homeserver.jpeg",
  },
  {
    name: "dotfiles",
    url: "https://github.com/ncorrea-13/dotfiles",
    desc: "Configuración personal de Linux para Devuan 6 (Excalibur) sobre Wayland. 100% systemd-free.",
    license: "MIT",
    tags: ["infra"],
    stack: ["Neovim", "Zellij", "Wayland"],
    image: "/projects/dotfiles.png",
  },
  {
    name: "accesoriosstina",
    url: "https://accesoriosstina.vercel.app/",
    desc: "Página web para un emprendimiento de accesorios, con catálogo de productos.",
    tags: ["frontend"],
    stack: ["Next.js", "Tailwind"],
    image: "/projects/accesorioss.png",
  },
  {
    name: "mailMicroservicio",
    url: "https://github.com/ncorrea-13/mailMicroservicio",
    desc: "Microservicio de correo con arquitectura RESTful, trabajo final de Arquitectura de Microservicios (2025).",
    license: "GPLv3",
    tags: ["typescript"],
    stack: ["TypeScript", "Node.js", "Express"],
  },
  {
    name: "generadorLibros",
    url: "https://github.com/ncorrea-13/generadorLibros",
    desc: "cGAN y cVAE para síntesis de estructuras de texto, trabajo final de Redes Neuronales Profundas (2025), con Jupyter Notebook y Google Colab.",
    license: "GPLv3",
    tags: ["python", "ml"],
    stack: ["Python", "PyTorch"],
    image: "/projects/generador.png",
  },
];

export const filters = [
  { key: "all", label: "Todos" },
  { key: "python", label: "Python" },
  { key: "typescript", label: "TypeScript" },
  { key: "frontend", label: "Frontend" },
  { key: "TUI/CLI", label: "TUI/CLI" },
  { key: "infra", label: "Infraestructura" },
  { key: "ml", label: "Machine Learning" },
] as const;
