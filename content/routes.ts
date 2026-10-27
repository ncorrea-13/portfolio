import type { Metadata } from "next";

export const SITE_URL = "https://ncorrea.com.ar";

export const routes = [
  {
    path: "/",
    title: "Nicolás Correa · DevOps & Full Stack",
    description:
      "DevOps & Platform Engineering · Full Stack Software Developer. Portfolio, proyectos y homeserver / projects and self-hosted homeserver.",
  },
  {
    path: "/sobre-mi",
    title: "Sobre mí · About me",
    description:
      "Experiencia, educación y CV de Nicolás Correa / Experience, education and CV.",
  },
  {
    path: "/proyectos",
    title: "Proyectos · Projects",
    description:
      "Trabajos para clientes, proyectos propios y de aprendizaje / Client work, own projects and learning work.",
  },
] as const;

export function pageMetadata(path: (typeof routes)[number]["path"]): Metadata {
  const { title, description } = routes.find((r) => r.path === path)!;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
