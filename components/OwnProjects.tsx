"use client";

import Image from "next/image";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import card from "./ProjectCard.module.css";
import styles from "./OwnProjects.module.css";

type Localized = { es: string; en: string };

function Poster({ project, lead }: { project: Project; lead?: boolean }) {
  const { locale } = useLocale();
  const text = (t: Localized) => (locale === "en" ? t.en : t.es);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={lead ? `${styles.poster} ${styles.lead}` : styles.poster}
    >
      {project.image && (
        <Image
          src={project.image}
          alt=""
          fill
          sizes={
            lead
              ? "(min-width: 60rem) 57rem, 100vw"
              : "(min-width: 48rem) 28rem, 100vw"
          }
          className={styles.img}
          style={{ objectPosition: project.imagePosition ?? "top" }}
        />
      )}
      <div className={styles.scrim}>
        {lead && (
          <span className={styles.kicker}>
            {locale === "en" ? "Featured" : "Destacado"}
          </span>
        )}
        <span className={styles.head}>
          <span className={styles.name}>{text(project.name)}</span>
          {project.license && (
            <span className={card.license}>{project.license}</span>
          )}
        </span>
        <p className={styles.desc}>{text(project.desc)}</p>
        <div className={styles.meta}>
          <div className={card.stack}>
            {project.stack.map((tech) => (
              <span key={tech} className={card.chip}>
                {tech}
              </span>
            ))}
          </div>
          <span className={styles.cta}>
            {locale === "en" ? "Open project" : "Abrir proyecto"}{" "}
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </a>
  );
}

function Hardware({ project }: { project: Project }) {
  const { locale } = useLocale();
  const text = (t: Localized) => (locale === "en" ? t.en : t.es);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.hardware}
    >
      <div className={styles.photo}>
        {project.image && (
          <Image
            src={project.image}
            alt={locale === "en" ? "The homelab rack" : "El rack del homelab"}
            fill
            sizes="(min-width: 48rem) 24rem, 100vw"
            className={styles.photoImg}
            style={{ objectPosition: project.imagePosition ?? "center" }}
          />
        )}
      </div>
      <div className={styles.hwBody}>
        <span className={styles.status}>
          <span className={styles.live} aria-hidden="true" />
          {locale === "en" ? "In production" : "En producción"}
        </span>
        <span className={styles.hwName}>{text(project.name)}</span>
        <p className={styles.hwDesc}>{text(project.desc)}</p>
        {project.facts && (
          <dl className={styles.facts}>
            {project.facts.map((fact) => (
              <div key={fact.value} className={styles.fact}>
                <dt className={styles.factLabel}>{text(fact.label)}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className={card.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={card.chip}>
              {tech}
            </span>
          ))}
        </div>
        <span className={styles.cta}>
          {locale === "en" ? "Open homelab docs" : "Abrir documentación"}{" "}
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );
}

export function OwnProjects({ projects }: { projects: Project[] }) {
  const [lead, ...rest] = projects;
  const hardware = rest.find((p) => p.facts);
  const software = rest.filter((p) => !p.facts);

  return (
    <div className={styles.wrap}>
      <Poster project={lead} lead />
      <div className={styles.tiles}>
        {software.map((project) => (
          <Poster key={project.url} project={project} />
        ))}
      </div>
      {hardware && <Hardware project={hardware} />}
    </div>
  );
}
