"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";
import { useLocale } from "./LocaleProvider";
import { SERVIDOR_URL } from "@/content/site";

const links = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/sobre-mi", label: { es: "Sobre mí", en: "About" } },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
];

export function Nav() {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <nav className="mx-auto flex max-w-3xl items-start justify-between gap-4 px-6 pt-10 pb-6 font-sans text-sm">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-accent-strong"
                : "text-muted hover:text-accent-strong"
            }
          >
            {locale === "en" ? link.label.en : link.label.es}
          </Link>
        ))}
        <a
          href={SERVIDOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent-strong"
        >
          {locale === "en"
            ? "Homeserver architecture"
            : "Arquitectura del homeserver"}{" "}
          ↗
        </a>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <LocaleToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
