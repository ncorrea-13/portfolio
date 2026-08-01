import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { GITHUB_URL } from "@/content/site";

export default function Proyectos() {
  return (
    <>
      <Reveal>
        <h1 className="mt-4 mb-3 font-sans text-2xl font-semibold text-heading">
          <T es="Proyectos" en="Projects" />
        </h1>
        <p className="mb-6">
          <T
            es="Proyectos en los que he participado. Aquellos open source incluye la referencia de su licencia. Código y detalles en cada repositorio."
            en="Projects I have worked on. The open source ones include a license reference. Code and details are in each repository."
          />
        </p>
      </Reveal>

      <ProjectGrid />

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Ver todo" en="See everything" />
        </h2>
        <p>
          <T
            es="Además de estos proyectos poseo varios trabajos académicos y experimentos menores. El listado completo, siempre actualizado, está en mi cuenta de Github:"
            en="Besides these projects, I have several academic assignments and small experiments. The full list, always up to date, is on my GitHub account:"
          />{" "}
          <a href={GITHUB_URL} className="text-accent-strong hover:underline">
            {GITHUB_URL.replace("https://", "")}
          </a>
        </p>
      </Reveal>
    </>
  );
}
