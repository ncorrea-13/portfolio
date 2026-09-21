"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, filters } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { useLocale } from "./LocaleProvider";
import styles from "./ProjectGrid.module.css";
import common from "./common.module.css";

export function ProjectGrid() {
  const [active, setActive] = useState<string>("all");
  const { locale } = useLocale();

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={
              active === f.key
                ? `${styles.filter} ${styles.active}`
                : styles.filter
            }
          >
            {locale === "en" ? f.label.en : f.label.es}
          </button>
        ))}
      </div>
      <div className={common.projectGrid}>
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.url}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className={styles.cell}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
