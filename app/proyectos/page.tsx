import { pageMetadata } from "@/content/routes";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { OwnProjects } from "@/components/OwnProjects";
import { ClientShowcase } from "@/components/ClientShowcase";
import { clientWork, ownProjects } from "@/content/projects";
import { GITHUB_URL } from "@/content/site";
import styles from "./page.module.css";
import common from "@/components/common.module.css";

export const metadata = pageMetadata("/proyectos");

export default function Proyectos() {
  return (
    <>
      <Reveal>
        <h1 className={common.pageTitle}>
          <T es="Proyectos" en="Projects" />
        </h1>
        <p className={styles.lead}>
          <T
            es="Sitios en producción que desarrollé para clientes, proyectos propios que mantengo y trabajos de aprendizaje. Donde corresponde se indica la licencia; el código está en cada repositorio."
            en="Production sites I built for clients, my own projects that I maintain, and learning work. Where it applies the license is listed; the code is in each repository."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Trabajos públicos" en="Public work" />
        </h2>
        <p className={styles.note}>
          <T
            es="Incluye solo trabajo público. El software interno de mis empleos no se publica; el detalle de cada rol está en el CV."
            en="Public work only. Internal software from my jobs is not published; each role's detail is in the CV."
          />
        </p>
        <ClientShowcase projects={clientWork} />
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Proyectos propios" en="Own projects" />
        </h2>
        <OwnProjects projects={ownProjects} />
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T
            es="Aprendizaje y trabajos académicos"
            en="Learning and academic work"
          />
        </h2>
      </Reveal>
      <ProjectGrid />

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Todos los repositorios" en="All repositories" />
        </h2>
        <p>
          <T
            es="Hay más trabajos académicos y experimentos chicos que no están acá. Los encontrás en mi GitHub:"
            en="There are more academic assignments and small experiments not listed here. You can find them on my GitHub:"
          />{" "}
          <a href={GITHUB_URL} className={common.link}>
            {GITHUB_URL.replace("https://", "")}
          </a>
        </p>
      </Reveal>
    </>
  );
}
