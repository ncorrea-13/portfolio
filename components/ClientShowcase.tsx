"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import card from "./ProjectCard.module.css";
import styles from "./ClientShowcase.module.css";

function host(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

export function ClientShowcase({ projects }: { projects: Project[] }) {
  const { locale } = useLocale();
  const reduce = !!useReducedMotion();
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const text = (t: { es: string; en: string }) =>
    locale === "en" ? t.en : t.es;
  const project = projects[selected];

  function onKeyDown(e: React.KeyboardEvent) {
    const last = projects.length - 1;
    const keys: Record<string, number> = {
      ArrowRight: selected === last ? 0 : selected + 1,
      ArrowDown: selected === last ? 0 : selected + 1,
      ArrowLeft: selected === 0 ? last : selected - 1,
      ArrowUp: selected === 0 ? last : selected - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    setSelected(keys[e.key]);
    tabs.current[keys[e.key]]?.focus();
  }

  return (
    <div className={styles.wrap}>
      <div
        role="tablist"
        aria-label={locale === "en" ? "Client work" : "Trabajos para clientes"}
        aria-orientation="vertical"
        className={styles.tabs}
        onKeyDown={onKeyDown}
      >
        {projects.map((p, i) => (
          <button
            key={p.url}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`client-tab-${i}`}
            aria-selected={i === selected}
            aria-controls="client-panel"
            tabIndex={i === selected ? 0 : -1}
            onClick={() => setSelected(i)}
            className={styles.tab}
          >
            {i === selected && (
              <motion.span
                layoutId="client-tab-bg"
                className={styles.tabBg}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 500, damping: 40 }
                }
              />
            )}
            <span className={styles.tabName}>{text(p.name)}</span>
            <span className={styles.tabMeta}>{host(p.url)}</span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="client-panel"
        aria-labelledby={`client-tab-${selected}`}
        className={styles.panel}
      >
        <div className={styles.stage}>
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className={styles.browser}
          >
            <span className={styles.chrome}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.address}>{host(project.url)}</span>
              <span className={styles.load} />
            </span>
            {project.image && (
              <Image
                src={project.image}
                alt={`${locale === "en" ? "Screenshot of" : "Captura de"} ${text(project.name)}`}
                width={1280}
                height={800}
                sizes="(min-width: 60rem) 40rem, 100vw"
                loading="eager"
                className={styles.shot}
              />
            )}
          </a>
        </div>
        <div key={project.url} className={styles.info}>
          <div className={styles.head}>
            <h3 className={styles.name}>{text(project.name)}</h3>
            {project.role && (
              <span className={styles.role}>{text(project.role)}</span>
            )}
          </div>
          <p className={styles.desc}>{text(project.desc)}</p>
          <div className={styles.foot}>
            <div className={card.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={card.chip}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {locale === "en" ? "Visit site" : "Visitar sitio"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
