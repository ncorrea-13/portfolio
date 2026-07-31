import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";
import { ContactLinks } from "@/components/ContactLinks";
import { TagGroup } from "@/components/TagGroup";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";

const featuredProjects = ["bw-tui", "weathertui", "homeserver", "accesoriosstina"];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <p className="my-6">
          Estudiante avanzado de Ingeniería en Sistemas de Información y desarrollador full-stack
          en AYSAM. Soy un apasionado del desarrollo de software y de la administración de ese
          software. Disfruto administrar la infraestructura donde corre el software que construí,
          intentando exprimir y aprovechar los recursos que dispongo para la mejor optimización y
          eficiencia.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        {skillGroups.map((group, i) => (
          <TagGroup key={group.label} label={group.label} tags={group.tags} index={i} />
        ))}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="my-8 flex justify-center">
          <LinkButton href="/cv.pdf" external>
            Descargar CV
          </LinkButton>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Proyectos</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects
            .filter((p) => featuredProjects.includes(p.name))
            .map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
        </div>
        <Link
          href="/proyectos"
          className="mt-3 inline-block text-sm text-accent-strong hover:underline"
        >
          Ver todos los proyectos →
        </Link>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Contacto</h2>
        <ContactLinks />
        <p className="mt-4 text-sm text-muted">
          Este sitio es solo informativo — no hay recolección de datos.
        </p>
      </Reveal>
    </>
  );
}
