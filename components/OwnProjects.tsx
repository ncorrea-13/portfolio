"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import card from "./ProjectCard.module.css";
import styles from "./OwnProjects.module.css";

type Localized = { es: string; en: string };

function Poster({ project }: { project: Project }) {
  const { locale } = useLocale();
  const text = (t: Localized) => (locale === "en" ? t.en : t.es);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.poster} ${styles.lead}`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={`${locale === "en" ? "Screenshot of" : "Captura de"} ${text(project.name)}`}
          fill
          sizes="(min-width: 60rem) 57rem, 100vw"
          className={styles.img}
          style={{ objectPosition: project.imagePosition ?? "top" }}
        />
      )}
      <div className={styles.scrim}>
        <span className={styles.kicker}>
          {locale === "en" ? "Featured" : "Destacado"}
        </span>
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

const ROTATE_MS = 6000;

function Slide({
  project,
  index,
  total,
  active,
}: {
  project: Project;
  index: number;
  total: number;
  active: boolean;
}) {
  const { locale } = useLocale();
  const text = (t: Localized) => (locale === "en" ? t.en : t.es);
  const pad = (n: number) => String(n).padStart(2, "0");
  const reduce = !!useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active && !reduce) v.play().catch(() => {});
    else v.pause();
  }, [active, reduce]);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.slide}
      inert={!active}
    >
      <div className={styles.slideMedia}>
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video.src}
            poster={project.video.poster}
            className={styles.vid}
            muted
            loop
            playsInline
            preload={index === 0 ? "auto" : "none"}
            aria-hidden="true"
          />
        ) : (
          project.image && (
          <Image
            src={project.image}
            alt={`${locale === "en" ? "Screenshot of" : "Captura de"} ${text(project.name)}`}
            fill
            sizes="(min-width: 48rem) 30rem, 100vw"
            loading={index === 0 ? "eager" : "lazy"}
            className={styles.img}
            style={{ objectPosition: project.imagePosition ?? "top" }}
          />
          )
        )}
      </div>
      <div className={styles.scrim}>
        <span className={styles.kicker}>
          {pad(index + 1)} / {pad(total)}
        </span>
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

// Vertical carousel: slides stacked in a column, the track slides up one step every ROTATE_MS.
// Pauses while the pointer or focus is inside; no autoplay with reduced motion.
function Showcase({ projects }: { projects: Project[] }) {
  const { locale } = useLocale();
  const reduce = !!useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projects.length;

  useEffect(() => {
    if (reduce || paused || total < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % total), ROTATE_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduce, total]);

  return (
    <section
      className={styles.stage}
      aria-roledescription="carousel"
      aria-label={locale === "en" ? "Terminal projects" : "Proyectos de terminal"}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={styles.track}
        style={{ "--i": index } as CSSProperties}
      >
        {projects.map((project, i) => (
          <Slide
            key={project.url}
            project={project}
            index={i}
            total={total}
            active={i === index}
          />
        ))}
      </div>
      <div className={styles.dots}>
        {projects.map((project, i) => (
          <button
            key={project.url}
            type="button"
            className={i === index ? `${styles.dot} ${styles.dotOn}` : styles.dot}
            aria-label={`${i + 1} / ${total}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export function OwnProjects({ projects }: { projects: Project[] }) {
  const [lead, ...rest] = projects;
  const hardware = rest.find((p) => p.facts);
  const software = rest.filter((p) => !p.facts);

  return (
    <div className={styles.wrap}>
      <Poster project={lead} />
      {hardware && <Hardware project={hardware} />}
      <Showcase projects={software} />
    </div>
  );
}
