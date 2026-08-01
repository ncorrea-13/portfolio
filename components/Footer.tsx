import { T } from "./T";

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 font-sans text-xs text-muted">
      <hr className="mb-6 border-border" />
      <T
        es="Última actualización: Agosto 2026"
        en="Last updated: August 2026"
      />{" "}
      ·{" "}
      <a
        href="https://github.com/ncorrea-13/portfolio/blob/main/LICENSE"
        className="text-accent-strong hover:underline"
      >
        MIT License
      </a>
    </footer>
  );
}
