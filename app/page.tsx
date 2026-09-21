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
import styles from "./page.module.css";
import common from "@/components/common.module.css";

const featuredProjects = [
  "https://github.com/ncorrea-13/bw-tui",
  "https://github.com/Pethood-project",
  "https://homelab.ncorrea.com.ar/",
  "https://github.com/ncorrea-13/rolboard",
];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <p className={styles.intro}>
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
        <div className={common.ctaRow}>
          <CvLink>
            <T es="Descargar CV" en="Download resume" />
          </CvLink>
        </div>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Proyectos destacados" en="Featured projects" />
        </h2>
        <div className={common.projectGrid}>
          {projects
            .filter((p) => featuredProjects.includes(p.url))
            .map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
        </div>
        <Link href="/proyectos" className={`${common.link} ${common.seeAll}`}>
          <T es="Ver todos →" en="See all →" />
        </Link>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Contacto" en="Contact" />
        </h2>
        <ContactLinks />
        <p className={`${common.note} ${common.noteLg}`}></p>
      </Reveal>
    </>
  );
}
