"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { SERVIDOR_URL } from "@/content/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/proyectos", label: "Proyectos" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-6 pt-10 pb-6 font-sans text-sm">
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
          {link.label}
        </Link>
      ))}
      <a
        href={SERVIDOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-accent-strong"
      >
        Arquitectura del homeserver ↗
      </a>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
}
