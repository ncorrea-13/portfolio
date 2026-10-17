"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import card from "./ProjectCard.module.css";
import styles from "./OwnProjectCard.module.css";

function shortUrl(url: string) {
  const { host, pathname } = new URL(url);
  return (host + pathname).replace(/\/$/, "");
}

export function OwnProjectCard({ project }: { project: Project }) {
  const { locale } = useLocale();
  const name = locale === "en" ? project.name.en : project.name.es;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={styles.card}
    >
      <div className={styles.window}>
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.address}>{shortUrl(project.url)}</span>
        </div>
        {project.image && (
          <Image
            src={project.image}
            alt={name}
            width={640}
            height={400}
            className={styles.shot}
          />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.head}>
          <span className={styles.name}>{name}</span>
          {project.license && (
            <span className={card.license}>{project.license}</span>
          )}
        </div>
        <p className={styles.desc}>
          {locale === "en" ? project.desc.en : project.desc.es}
        </p>
        <div className={card.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={card.chip}>
              {tech}
            </span>
          ))}
        </div>
        <span className={styles.open}>
          {locale === "en" ? "Open project" : "Abrir proyecto"} ↗
        </span>
      </div>
    </motion.a>
  );
}
