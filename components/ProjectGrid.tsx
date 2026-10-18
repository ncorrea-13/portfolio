"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { projects, filters, tagTone } from "@/content/projects";
import type { FilterKey, Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import { ProjectTags } from "./ProjectTags";
import card from "./ProjectCard.module.css";
import styles from "./ProjectGrid.module.css";

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

function GalleryItem({ project }: { project: Project }) {
  const { locale } = useLocale();
  const text = (t: { es: string; en: string }) =>
    locale === "en" ? t.en : t.es;
  const main = project.tags[0];
  const name = text(project.name);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.item}
      style={{ "--tone": tagTone[main] ?? "var(--accent)" } as CSSProperties}
    >
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            width={640}
            height={400}
            sizes="19rem"
            className={styles.img}
            style={{ objectPosition: project.imagePosition ?? "top" }}
          />
        ) : (
          <div className={styles.fallback} aria-hidden="true">
            {initials(name)}
          </div>
        )}
      </div>
      <div className={styles.meta}>
        <ProjectTags tags={project.tags} />
        {project.license && (
          <span className={card.license}>{project.license}</span>
        )}
      </div>
      <h3 className={styles.name}>
        {name}{" "}
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </h3>
      <p className={styles.desc}>{text(project.desc)}</p>
      <div className={card.stack}>
        {project.stack.map((tech) => (
          <span key={tech} className={card.chip}>
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export function ProjectGrid() {
  const [active, setActive] = useState<FilterKey>("all");
  const { locale } = useLocale();
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(active));
  const count = (key: FilterKey) =>
    key === "all"
      ? projects.length
      : projects.filter((p) => p.tags.includes(key)).length;

  const shown = filters.filter((f) => f.key === "all" || count(f.key) >= 2);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
    measure();
  }, [active, measure]);

  function scrollBy(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className={styles.bar}>
        <div className={styles.filters}>
          {shown.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
              className={
                active === f.key
                  ? `${styles.filter} ${styles.active}`
                  : styles.filter
              }
              style={
                {
                  "--tone":
                    (f.key === "all" ? undefined : tagTone[f.key]) ??
                    "var(--accent-strong)",
                } as CSSProperties
              }
            >
              {locale === "en" ? f.label.en : f.label.es}
              <span className={styles.count}>{count(f.key)}</span>
            </button>
          ))}
        </div>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={() => scrollBy(-1)}
            disabled={edges.start}
            aria-label={locale === "en" ? "Previous" : "Anterior"}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={() => scrollBy(1)}
            disabled={edges.end}
            aria-label={locale === "en" ? "Next" : "Siguiente"}
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={track}
        className={styles.track}
        onScroll={measure}
        role="region"
        tabIndex={0}
        aria-label={
          locale === "en"
            ? "Learning and academic projects"
            : "Proyectos de aprendizaje y académicos"
        }
      >
        {visible.map((project) => (
          <GalleryItem key={project.url} project={project} />
        ))}
      </div>
    </div>
  );
}
