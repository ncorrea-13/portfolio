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
            es="Sitios que hice para clientes, proyectos propios que mantengo y trabajos de aprendizaje. Las tarjetas muestran la licencia cuando existe, y el código está en cada repositorio."
            en="Sites I built for clients, my own projects that I maintain, and learning work. Cards show the license when there is one, and the code lives in each repository."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Trabajos públicos" en="Public work" />
        </h2>
        <p className={styles.note}>
          <T
            es="Solo trabajo público. El software interno de mis empleos no lo publico; el detalle de cada rol está en el CV."
            en="Public work only. I don't publish the internal software from my jobs; each role's details are in the resume."
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
