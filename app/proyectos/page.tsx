import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { GITHUB_URL } from "@/content/site";
import styles from "./page.module.css";
import common from "@/components/common.module.css";

export default function Proyectos() {
  return (
    <>
      <Reveal>
        <h1 className={common.pageTitle}>
          <T es="Proyectos" en="Projects" />
        </h1>
        <p className={styles.lead}>
          <T
            es="Proyectos en los que he participado. Aquellos open source incluye la referencia de su licencia. Código y detalles en cada repositorio."
            en="Projects I have worked on. The open source ones include a license reference. Code and details are in each repository."
          />
        </p>
      </Reveal>

      <ProjectGrid />

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Ver todo" en="See everything" />
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
