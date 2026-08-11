"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, filters } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { useLocale } from "./LocaleProvider";

export function ProjectGrid() {
  const [active, setActive] = useState<string>("all");
  const { locale } = useLocale();

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2 font-sans">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={
              active === f.key
                ? "rounded-full px-3.5 py-1 text-[13px] text-bg"
                : "rounded-full border border-border px-3.5 py-1 text-[13px] text-text hover:border-accent-strong hover:text-heading"
            }
            style={
              active === f.key
                ? {
                    backgroundImage:
                      "linear-gradient(135deg, var(--accent-strong), var(--accent-warm))",
                  }
                : undefined
            }
          >
            {locale === "en" ? f.label.en : f.label.es}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.url}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
