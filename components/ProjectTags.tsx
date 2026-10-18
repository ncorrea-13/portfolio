"use client";

import type { CSSProperties } from "react";
import { filters, tagTone } from "@/content/projects";
import type { Project } from "@/content/projects";
import { useLocale } from "./LocaleProvider";
import card from "./ProjectCard.module.css";

export function ProjectTags({ tags }: { tags: Project["tags"] }) {
  const { locale } = useLocale();

  return (
    <div className={card.tags}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={card.tag}
          style={{ "--tone": tagTone[tag] } as CSSProperties}
        >
          <span className={card.dot} aria-hidden="true" />
          {filters.find((f) => f.key === tag)?.label[locale]}
        </span>
      ))}
    </div>
  );
}
