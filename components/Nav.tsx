"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";
import { useLocale } from "./LocaleProvider";
import { SERVIDOR_URL } from "@/content/site";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/sobre-mi", label: { es: "Sobre mí", en: "About" } },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
];

export function Nav() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const reduce = useReducedMotion();

  return (
    <header className={styles.bar}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.prompt} aria-hidden="true">
            &gt;_
          </span>
          ncorrea
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={
                pathname === link.href
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              {locale === "en" ? link.label.en : link.label.es}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className={styles.underline}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 500, damping: 40 }
                  }
                />
              )}
            </Link>
          ))}
          <a href={SERVIDOR_URL} className={styles.link}>
            Homelab
          </a>
        </div>
        <div className={styles.toggles}>
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
