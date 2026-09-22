"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import styles from "./Hero.module.css";
import common from "./common.module.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const { locale } = useLocale();

  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      animate={reduce ? undefined : "show"}
      className={styles.hero}
    >
      <motion.div variants={reduce ? undefined : item}>
        <Image
          src="/foto.jpg"
          alt="Nicolás Correa"
          width={96}
          height={96}
          priority
          className={common.avatar}
        />
      </motion.div>
      <motion.div variants={reduce ? undefined : item}>
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
