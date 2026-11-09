import { pageMetadata } from "@/content/routes";
import Image from "next/image";
import { CvLink } from "@/components/CvLink";
import { ContactLinks } from "@/components/ContactLinks";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { Timeline } from "@/components/Timeline";
import { experience, education } from "@/content/experience";
import styles from "./page.module.css";
import common from "@/components/common.module.css";

export const metadata = pageMetadata("/sobre-mi");

export default function SobreMi() {
  return (
    <>
      <h1 className={`${common.pageTitle} ${common.pageTitleLoose}`}>
        <T es="Sobre mí" en="About me" />
      </h1>

      <Reveal>
        <div className={styles.intro}>
          <div className={styles.flow}>
            <p>
              <T
                es="Soy estudiante avanzado de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, Facultad Regional Mendoza, con 37 de 42 materias aprobadas. Trabajo como desarrollador de software en Rendel. Vengo del desarrollo de software, pero trabajar en Linux me terminó llevando a infraestructura y ciberseguridad."
                en="I am an advanced Systems Engineering student at Universidad Tecnológica Nacional, Facultad Regional Mendoza, with 37 of 42 subjects passed. I work as a software developer at Rendel. I come from software development, but working in Linux pulled me into infrastructure and cybersecurity."
              />
            </p>
            <p>
              <T
                es="Mantengo un homeserver con más de 10 servicios que uso todos los días, como Vaultwarden e Immich."
                en="I run a homeserver with more than 10 services I use every day, such as Vaultwarden and Immich."
              />
            </p>
          </div>
          <Image
            src="/foto.jpg"
            alt="Nicolás Correa"
            width={160}
            height={160}
            className={common.avatar}
          />
        </div>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Experiencia" en="Experience" />
        </h2>
        <Timeline
          items={experience.map((e) => ({
            title: e.role,
            org: e.org,
            period: e.period,
          }))}
        />
        <p className={common.note}>
          <T
            es="El detalle de cada rol está en el CV, más abajo."
            en="Role details are in the resume below."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Educación" en="Education" />
        </h2>
        <Timeline items={education} />
      </Reveal>

      <Reveal>
        <div className={styles.facets}>
          <div className={styles.facet}>
            <h3 className={styles.facetTitle}>
              <T es="Habilidades blandas" en="Soft skills" />
            </h3>
            <p className={styles.facetText}>
              <T
                es="Trabajo entre desarrollo e infraestructura. Aprendo herramientas nuevas por mi cuenta y explico decisiones técnicas a gente no técnica sin perder precisión."
                en="I work across development and infrastructure. I pick up new tools on my own and explain technical decisions to nontechnical people without losing precision."
              />
            </p>
          </div>
          <div className={styles.facet}>
            <h3 className={styles.facetTitle}>
              <T es="Cómo encaro el software" en="How I approach software" />
            </h3>
            <p className={styles.facetText}>
              <T
                es="Mantengo todo lo más simple posible (KISS): código chico, fácil de desacoplar y reusar. Si la situación pide otra cosa, la escucho, pero por defecto elijo lo simple."
                en="I keep everything as simple as possible (KISS): small code that's easy to decouple and reuse. If the situation calls for something else, I listen, but my default is simple."
              />
            </p>
          </div>
          <div className={styles.facet}>
            <h3 className={styles.facetTitle}>
              <T es="Stack y entorno" en="Stack and environment" />
            </h3>
            <p className={styles.facetText}>
              <T
                es="Mi día a día pasa por la terminal: Neovim como editor principal, Zellij como multiplexor y Yazi para manejar archivos, todo dentro de WezTerm. La mayoría de mis herramientas propias las uso por medio de interfaces CLI o TUI, así las tengo en cualquier máquina, sin importar el sistema ni el lenguaje."
                en="My daily work happens in the terminal: Neovim as my main editor, Zellij as multiplexer, and Yazi to manage files, all inside WezTerm. I use most of my own tools through CLI or TUI interfaces, so I have them on any machine, whatever the system or language."
              />
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={common.ctaRow}>
          <CvLink>
            <T
              es="Descargar CV completo (PDF)"
              en="Download full resume (PDF)"
            />
          </CvLink>
        </div>
      </Reveal>

      <Reveal>
        <h2 className={common.sectionTitle}>
          <T es="Contacto" en="Contact" />
        </h2>
        <ContactLinks />
      </Reveal>
    </>
  );
}
