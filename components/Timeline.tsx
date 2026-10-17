"use client";

import { useLocale } from "./LocaleProvider";
import styles from "./Timeline.module.css";

type LocalizedText = { es: string; en: string };
type Entry = { title: LocalizedText; org: string; period: LocalizedText };

export function Timeline({ items }: { items: readonly Entry[] }) {
  const { locale } = useLocale();
  const t = (x: LocalizedText) => (locale === "en" ? x.en : x.es);

  return (
    <ol className={styles.list}>
      {items.map((item) => {
        const ongoing = /presente|present/i.test(item.period.es);
        return (
          <li key={item.title.es + item.period.es} className={styles.row}>
            <span className={styles.period}>
              {ongoing && <span className={styles.live} aria-hidden="true" />}
              {t(item.period)}
            </span>
            <div>
              <span className={styles.title}>{t(item.title)}</span>
              <span className={styles.org}>{item.org}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
