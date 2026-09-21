"use client";

import { useLocale } from "./LocaleProvider";
import styles from "./TagGroup.module.css";

type LocalizedText = { es: string; en: string };
type Tag = string | LocalizedText;

function resolve(text: LocalizedText, locale: "es" | "en") {
  return locale === "en" ? text.en : text.es;
}

export function TagGroup({
  label,
  tags,
  color,
}: {
  label: LocalizedText;
  tags: readonly Tag[];
  color: string;
}) {
  const { locale } = useLocale();

  return (
    <div className={styles.group}>
      <p className={styles.label}>
        <span className={styles.dot} style={{ backgroundColor: color }} />
        {resolve(label, locale)}
      </p>
      <div className={styles.tags}>
        {tags.map((tag) => {
          const text = typeof tag === "string" ? tag : resolve(tag, locale);
          const key = typeof tag === "string" ? tag : tag.es;
          return (
            <span
              key={key}
              className={styles.tag}
              style={{ borderColor: color }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
