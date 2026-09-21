"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import styles from "./ProjectCard.module.css";

const gradients = [
  "linear-gradient(135deg, var(--accent-strong), var(--accent-warm))",
  "linear-gradient(135deg, var(--accent), var(--card-border))",
  "linear-gradient(135deg, var(--accent-warm), var(--accent-strong))",
];

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
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
          <div
            className={styles.fallback}
            style={{ backgroundImage: gradients[index % gradients.length] }}
          >
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
        </div>
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
    </motion.a>
  );
}
