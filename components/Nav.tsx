"use client";

import Link from "next/link";
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

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            {locale === "en" ? link.label.en : link.label.es}
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
  );
}
