"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

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
      className="flex flex-col items-center gap-5 py-4 text-center sm:flex-row sm:text-left"
    >
      <motion.div variants={reduce ? undefined : item}>
        <Image
          src="/foto.jpg"
          alt="Nicolás Correa"
          width={96}
          height={96}
          priority
          className="shrink-0 rounded-full border border-card-border object-cover"
        />
      </motion.div>
      <motion.div variants={reduce ? undefined : item}>
        <h1 className="font-sans text-2xl font-semibold tracking-tight text-gradient">
          Nicolás Correa
        </h1>
        <p className="font-sans text-[15px] text-accent">
          {locale === "en"
            ? "Full Stack Software Developer · Systems Administrator"
            : "Desarrollador de Software Full-stack · Administrador de Sistemas"}
        </p>
      </motion.div>
    </motion.div>
  );
}
