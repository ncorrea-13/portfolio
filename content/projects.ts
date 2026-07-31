export type Project = {
  name: string;
  url: string;
  desc: string;
  license: string;
  tags: string[];
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
  },
  {
    name: "weathertui",
    url: "https://github.com/ncorrea-13/weathertui",
    desc: "Terminal User Interface basada en meteo-cli. Utiliza OpenWeatherMap para mostrar el pronóstico del tiempo en la terminal.",
    license: "GPLv3",
    tags: ["TUI/CLI"],
  },
  {
    name: "homeserver",
    url: "https://github.com/ncorrea-13/homeserver",
    desc: "Configuración y compose files de mi servidor personal. Debian Trixie + Podman rootless. El mismo servidor que hostea la página de arquitectura.",
    license: "MIT",
    tags: ["infra"],
  },
  {
    name: "dotfiles",
    url: "https://github.com/ncorrea-13/dotfiles",
    desc: "Configuración personal de Linux para Devuan 6 (Excalibur) sobre Wayland. 100% systemd-free.",
    license: "MIT",
    tags: ["infra"],
  },
  {
    name: "mailMicroservicio",
    url: "https://github.com/ncorrea-13/mailMicroservicio",
    desc: "Microservicio de correo con arquitectura RESTful, trabajo final de Arquitectura de Microservicios (2025).",
    license: "GPLv3",
    tags: ["typescript"],
  },
  {
    name: "generadorLibros",
    url: "https://github.com/ncorrea-13/generadorLibros",
    desc: "cGAN y cVAE para síntesis de estructuras de texto, trabajo final de Redes Neuronales Profundas (2025), con Jupyter Notebook y Google Colab.",
    license: "GPLv3",
    tags: ["python", "ml"],
  },
];

export const filters = [
  { key: "all", label: "Todos" },
  { key: "python", label: "Python" },
  { key: "typescript", label: "TypeScript" },
  { key: "TUI/CLI", label: "TUI/CLI" },
  { key: "infra", label: "Infraestructura" },
  { key: "ml", label: "Machine Learning" },
] as const;
