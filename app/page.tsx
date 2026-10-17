import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { TagGroup } from "@/components/TagGroup";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { Now } from "@/components/Now";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { skillGroups } from "@/content/skills";
import { projects } from "@/content/projects";
import common from "@/components/common.module.css";

const featuredProjects = [
  "https://github.com/ncorrea-13/bw-tui",
  "https://github.com/Pethood-project",
  "https://homelab.ncorrea.com.ar/",
  "https://rolboard.ncorrea.com.ar/",
];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <Now />
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Stack" en="Stack" />
        </h2>
        {skillGroups.map((group) => (
          <TagGroup
            key={group.label.es}
            label={group.label}
            tags={group.tags}
            color={group.color}
          />
        ))}
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
