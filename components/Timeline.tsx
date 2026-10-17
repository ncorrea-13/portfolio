"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import styles from "./Timeline.module.css";

type LocalizedText = { es: string; en: string };
type Entry = { title: LocalizedText; org: string; period: LocalizedText };

export function Timeline({ items }: { items: readonly Entry[] }) {
  const { locale } = useLocale();
  const reduce = useReducedMotion();
  const t = (x: LocalizedText) => (locale === "en" ? x.en : x.es);

  return (
    <ol className={styles.list}>
      {items.map((item, i) => {
        const ongoing = /presente|present/i.test(item.period.es);
        return (
          <motion.li
            key={item.title.es + item.period.es}
            className={styles.row}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              delay: reduce ? 0 : i * 0.06,
              ease: "easeOut",
            }}
          >
            <span className={styles.period}>
              {ongoing && <span className={styles.live} aria-hidden="true" />}
              {t(item.period)}
            </span>
            <div>
              <span className={styles.title}>{t(item.title)}</span>
              <span className={styles.org}>{item.org}</span>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
