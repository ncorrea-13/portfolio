import { pageMetadata } from "@/content/routes";
import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { TagGroup } from "@/components/TagGroup";
import { OwnProjects } from "@/components/OwnProjects";
import { Hero } from "@/components/Hero";
import { Now } from "@/components/Now";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { skillGroups } from "@/content/skills";
import { ownProjects } from "@/content/projects";
import common from "@/components/common.module.css";

export const metadata = pageMetadata("/");

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
      </Reveal>
      {skillGroups.map((group, i) => (
        <Reveal key={group.label.es} delay={i * 0.06}>
          <TagGroup label={group.label} tags={group.tags} color={group.color} />
        </Reveal>
      ))}

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Proyectos destacados" en="Featured projects" />
        </h2>
        <OwnProjects projects={ownProjects} />
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
