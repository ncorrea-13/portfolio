"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

const gradients = [
  "linear-gradient(135deg, var(--accent-strong), var(--accent-warm))",
  "linear-gradient(135deg, var(--accent), var(--card-border))",
  "linear-gradient(135deg, var(--accent-warm), var(--accent-strong))",
];

function initials(name: string) {
  return name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-lg border border-card-border bg-card-bg"
    >
      <div className="aspect-video w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            width={480}
            height={270}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-sans text-2xl font-semibold text-bg/80"
            style={{ backgroundImage: gradients[index % gradients.length] }}
          >
            {initials(project.name)}
          </div>
        )}
      </div>
      <div className="p-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans font-semibold text-heading hover:text-accent-strong"
        >
          {project.name}
        </a>
        <p className="mt-1.5 text-[15px]">{project.desc}</p>
        <p className="mt-2 font-mono text-xs text-muted">{project.license}</p>
      </div>
    </motion.div>
  );
}
