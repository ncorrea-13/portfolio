"use client";

import Image from "next/image";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import card from "./ProjectCard.module.css";
import styles from "./OwnProjects.module.css";

export function OwnProjects({ projects }: { projects: Project[] }) {
  const { locale } = useLocale();
  const [lead, ...rest] = projects;
  const text = (t: { es: string; en: string }) =>
    locale === "en" ? t.en : t.es;

  return (
    <div className={styles.wrap}>
      <a
        href={lead.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.lead}
      >
        {lead.image && (
          <Image
            src={lead.image}
            alt=""
            fill
            sizes="(min-width: 48rem) 48rem, 100vw"
            className={styles.leadImg}
          />
        )}
        <div className={styles.scrim}>
          <span className={styles.kicker}>
            {locale === "en" ? "Featured" : "Destacado"}
          </span>
          <span className={styles.leadName}>{text(lead.name)}</span>
          <p className={styles.leadDesc}>{text(lead.desc)}</p>
          <div className={styles.meta}>
            <div className={card.stack}>
              {lead.stack.map((tech) => (
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

      <ul className={styles.index}>
        {rest.map((project) => (
          <li key={project.url}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.row}
            >
              <div className={styles.rowHead}>
                <span className={styles.rowName}>{text(project.name)}</span>
                {project.license && (
                  <span className={card.license}>{project.license}</span>
                )}
              </div>
              <div className={styles.rowBody}>
                <p className={styles.rowDesc}>{text(project.desc)}</p>
                <div className={card.stack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={card.chip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
