"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, PointerEvent } from "react";
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

function GalleryItem({ project, lead }: { project: Project; lead?: boolean }) {
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
      className={lead ? `${styles.item} ${styles.lead}` : styles.item}
      style={{ "--tone": tagTone[main] ?? "var(--accent)" } as CSSProperties}
    >
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            width={640}
            height={400}
            sizes={lead ? "30rem" : "19rem"}
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
  const [edges, setEdges] = useState({
    start: true,
    end: false,
    index: 0,
    thumb: 100,
    left: 0,
  });
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ x: 0, left: 0, moved: false });

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
    const items = Array.from(el.children) as HTMLElement[];
    const max = el.scrollWidth - el.clientWidth;
    const end = el.scrollLeft >= max - 4;
    // the item sitting at the left edge: last one whose start has been reached
    const edge = el.scrollLeft + (items[0]?.offsetLeft ?? 0) + 4;
    let index = 0;
    items.forEach((item, i) => {
      if (item.offsetLeft <= edge) index = i;
    });
    setEdges({
      start: el.scrollLeft <= 4,
      end,
      index: end && max > 4 ? items.length - 1 : index,
      thumb: Math.min(100, (el.clientWidth / el.scrollWidth) * 100),
      left: (el.scrollLeft / el.scrollWidth) * 100,
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

  // Mouse drag-to-scroll; touch and pen keep their native scrolling. Window listeners
  // (not pointer capture) so link clicks still reach the cards.
  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    const el = track.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: el.scrollLeft, moved: false };
    const move = (ev: globalThis.PointerEvent) => {
      const d = drag.current;
      const dx = ev.clientX - d.x;
      if (!d.moved) {
        if (Math.abs(dx) < 5) return;
        d.moved = true;
        setDragging(true);
      }
      el.scrollLeft = d.left - dx;
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  // a drag must not count as a click on the card under the cursor
  function onClickCapture(e: MouseEvent<HTMLDivElement>) {
    if (!drag.current.moved) return;
    e.preventDefault();
    e.stopPropagation();
    drag.current.moved = false;
  }

  const scrollable = !(edges.start && edges.end);
  const pad = (n: number) => String(n).padStart(2, "0");

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
        className={
          dragging ? `${styles.track} ${styles.dragging}` : styles.track
        }
        style={
          {
            "--fade-l": edges.start ? "0px" : "1.5rem",
            "--fade-r": edges.end ? "0px" : "2.5rem",
          } as CSSProperties
        }
        onScroll={measure}
        onPointerDown={onPointerDown}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        role="region"
        tabIndex={0}
        aria-label={
          locale === "en"
            ? "Learning and academic projects"
            : "Proyectos de aprendizaje y académicos"
        }
      >
        {visible.map((project, i) => (
          <GalleryItem key={project.url} project={project} lead={i === 0} />
        ))}
      </div>
      {scrollable && (
        <div className={styles.progress} aria-hidden="true">
          <span className={styles.counter}>
            <span className={styles.counterNow}>{pad(edges.index + 1)}</span> /{" "}
            {pad(visible.length)}
          </span>
          <span className={styles.rail}>
            <span
              className={styles.thumb}
              style={{ width: `${edges.thumb}%`, left: `${edges.left}%` }}
            />
          </span>
        </div>
      )}
    </div>
  );
}
