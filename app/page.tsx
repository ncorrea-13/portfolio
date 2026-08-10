import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";
import { ContactLinks } from "@/components/ContactLinks";
import { TagGroup } from "@/components/TagGroup";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";

const featuredProjects = [
  "bw-tui",
  "weathertui",
  "homeserver/homelab",
  "accesoriosstina",
];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <p className="my-6">
          <T
            es="Estudiante avanzado de Ingeniería en Sistemas de Información y desarrollador full-stack en AYSAM. Soy un apasionado del desarrollo de software y de la administración de ese software. Disfruto administrar la infraestructura donde corre el software que construí, intentando exprimir y aprovechar los recursos que dispongo para la mejor optimización y eficiencia."
            en="Advanced Systems Engineering student and full stack developer at AYSAM. I am passionate about building software and about running it. I enjoy managing the infrastructure my software runs on, and I try to make the most of the resources I have for better performance and efficiency."
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
          <LinkButton href="/cv.pdf" external>
            <T es="Descargar CV" en="Download resume" />
          </LinkButton>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Proyectos" en="Projects" />
        </h2>
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
          <T es="Ver todos los proyectos →" en="See all projects →" />
        </Link>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Contacto" en="Contact" />
        </h2>
        <ContactLinks />
        <p className="mt-4 text-sm text-muted">
          <T
            es="Este sitio es solo informativo — no hay recolección de datos."
            en="This site is for information only. No data is collected."
          />
        </p>
      </Reveal>
    </>
  );
}
