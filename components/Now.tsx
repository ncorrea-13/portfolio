"use client";

import { now } from "@/content/now";
import { useLocale } from "./LocaleProvider";
import styles from "./Now.module.css";

export function Now() {
  const { locale } = useLocale();
  const t = (x: { es: string; en: string }) => (locale === "en" ? x.en : x.es);

  return (
    <ul className={styles.list}>
      {now.map((item) => {
        const inner = (
          <>
            <span className={styles.label}>
              {item.live && <span className={styles.live} aria-hidden="true" />}
              {t(item.label)}
            </span>
            <span className={styles.title}>{t(item.title)}</span>
            <span className={styles.detail}>{t(item.detail)}</span>
          </>
        );
        return (
          <li key={item.label.es} className={styles.item}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cell} ${styles.link}`}
              >
                {inner}
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <div className={styles.cell}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
