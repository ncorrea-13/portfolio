"use client";

import Image from "next/image";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import styles from "./ProjectCard.module.css";

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

export function ProjectCard({
  project,
  row = false,
}: {
  project: Project;
  row?: boolean;
}) {
  const { locale } = useLocale();
  const name = locale === "en" ? project.name.en : project.name.es;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={row ? `${styles.card} ${styles.row}` : styles.card}
    >
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image}
            alt={name}
            width={480}
            height={270}
            className={styles.img}
          />
        ) : (
          <div className={styles.fallback} aria-hidden="true">
            {initials(name)}
          </div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.head}>
          <span className={styles.name}>{name}</span>
          {project.license && (
            <span className={styles.license}>{project.license}</span>
          )}
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </div>
        {project.role && (
          <span className={styles.license}>
            {locale === "en" ? project.role.en : project.role.es}
          </span>
        )}
        <p className={styles.desc}>
          {locale === "en" ? project.desc.en : project.desc.es}
        </p>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.chip}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
