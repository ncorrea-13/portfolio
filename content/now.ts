import { SERVIDOR_URL } from "@/content/site";
import { experience } from "@/content/experience";

type LocalizedText = { es: string; en: string };

export type NowItem = {
  label: LocalizedText;
  title: LocalizedText;
  detail: LocalizedText;
  href?: string;
  live?: boolean;
};

const current = experience[0];

export const now: NowItem[] = [
  {
    label: { es: "Trabajo", en: "Work" },
    title: current.role,
    detail: { es: current.org, en: current.org },
  },
  {
    label: { es: "Estudio", en: "Studying" },
    title: {
      es: "Ingeniería en Sistemas de Información",
      en: "Systems Engineering",
    },
    detail: {
      es: "UTN FRM · 37 de 42 materias",
      en: "UTN FRM · 37 of 42 subjects",
    },
  },
  {
    label: { es: "Homelab", en: "Homelab" },
    title: {
      es: "Infraestructura en producción",
      en: "Infrastructure in production",
    },
    detail: {
      es: "Activo 24/7 · estado en vivo",
      en: "Running 24/7 · live status",
    },
    href: SERVIDOR_URL,
    live: true,
  },
];
