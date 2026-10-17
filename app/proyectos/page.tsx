import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { OwnProjects } from "@/components/OwnProjects";
import { ClientShowcase } from "@/components/ClientShowcase";
import { clientWork, ownProjects } from "@/content/projects";
import { GITHUB_URL } from "@/content/site";
import styles from "./page.module.css";
import common from "@/components/common.module.css";

export default function Proyectos() {
  return (
    <>
      <Reveal>
        <h1 className={common.pageTitle}>
          <T es="Trabajo y proyectos" en="Work and projects" />
        </h1>
        <p className={styles.lead}>
          <T
            es="Sitios que desarrollé para clientes, proyectos propios y trabajos de aprendizaje y académicos. En los open source se indica la licencia; el código está en cada repositorio."
            en="Websites I built for clients, my own projects, and learning and academic work. Open source ones list their license; the code is in each repository."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Trabajos públicos" en="Public work" />
        </h2>
        <p className={common.note}>
          <T
            es="Incluye solo trabajo que se puede ver públicamente. El software interno de mis empleos no se publica; el detalle de cada rol está en el CV."
            en="Only work that can be viewed publicly. Internal software from my jobs is not published; each role's detail is in the CV."
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
          <T es="Más en GitHub" en="More on GitHub" />
        </h2>
        <p>
          <T
            es="Además poseo varios trabajos académicos y experimentos menores. El listado completo está en mi cuenta de Github:"
            en="I have several academic assignments and small experiments. The full list is on my GitHub account:"
          />{" "}
          <a href={GITHUB_URL} className={common.link}>
            {GITHUB_URL.replace("https://", "")}
          </a>
        </p>
      </Reveal>
    </>
  );
}
