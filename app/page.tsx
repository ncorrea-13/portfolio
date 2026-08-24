import Link from "next/link";
import { CvLink } from "@/components/CvLink";
import { ContactLinks } from "@/components/ContactLinks";
import { TagGroup } from "@/components/TagGroup";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";

const featuredProjects = [
  "https://github.com/ncorrea-13/bw-tui",
  "https://github.com/ncorrea-13/weathertui",
  "https://homelab.ncorrea.com.ar/",
  "https://accesoriosstina.vercel.app/",
];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <p className="my-6">
          <T
            es="Estudiante de último año de Ingeniería en Sistemas de Información. Desarrollador full-stack en AYSAM. Disfruto administrar la infraestructura donde corren los sistemas que creo, intentando exprimir y aprovechar los recursos que dispongo para su mejor eficiencia."
            en="Final-year Systems Engineering student. Full stack developer at AYSAM. I enjoy managing the infrastructure my systems run on, trying to squeeze the most out of the resources I have for better efficiency."
          />
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        {skillGroups.map((group) => (
          <TagGroup
            key={group.label.es}
            label={group.label}
            tags={group.tags}
            color={group.color}
          />
        ))}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="my-8 flex justify-center">
          <CvLink>
            <T es="Descargar CV" en="Download resume" />
          </CvLink>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Proyectos destacados" en="Featured projects" />
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects
            .filter((p) => featuredProjects.includes(p.url))
            .map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
        </div>
        <Link
          href="/proyectos"
          className="mt-3 inline-block text-sm text-accent-strong hover:underline"
        >
          <T es="Ver todos →" en="See all →" />
        </Link>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Contacto" en="Contact" />
        </h2>
        <ContactLinks />
        <p className="mt-4 text-sm text-muted">
          <T
            es="Este sitio es solo informativo. No hay recolección de datos."
            en="This site is for information only. No data is collected."
          />
        </p>
      </Reveal>
    </>
  );
}
