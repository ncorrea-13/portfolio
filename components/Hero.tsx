"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import styles from "./Hero.module.css";
import common from "./common.module.css";

const container = (reduce: boolean) => ({
  hidden: {},
  show: {
    transition: reduce ? {} : { staggerChildren: 0.12, delayChildren: 0.05 },
  },
});

// The static export renders "hidden" into the HTML, so with reduced motion it still has to
// animate to "show" (instantly) or the hero stays at opacity 0.
const item = (reduce: boolean) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 0.5, ease: "easeOut" as const },
  },
});

export function Hero() {
  const reduce = !!useReducedMotion();
  const { locale } = useLocale();

  return (
    <motion.div
      variants={container(reduce)}
      initial="hidden"
      animate="show"
      className={styles.hero}
    >
      <motion.div variants={item(reduce)}>
        <Image
          src="/foto.jpg"
          alt="Nicolás Correa"
          width={96}
          height={96}
          priority
          className={common.avatar}
        />
      </motion.div>
      <motion.div variants={item(reduce)}>
        <h1 className={styles.title}>Nicolás Correa</h1>
        <p className={styles.subtitle}>
          {locale === "en"
            ? "DevOps & Platform Engineering · Full Stack Software Developer"
            : "DevOps & Platform Engineering · Desarrollador de Software Full-stack"}
        </p>
      </motion.div>
    </motion.div>
  );
}
