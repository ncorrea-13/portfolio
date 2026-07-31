import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { GITHUB_URL } from "@/content/site";

export default function Proyectos() {
  return (
    <>
      <Reveal>
        <h1 className="mt-4 mb-3 font-sans text-2xl font-semibold text-heading">Proyectos</h1>
        <p className="mb-6">
          Proyectos personales y académicos, la mayoría open source. Código y detalles en cada
          repositorio.
        </p>
      </Reveal>

      <ProjectGrid />

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Ver todo</h2>
        <p>
          Además de estos proyectos poseo varios trabajos académicos y experimentos menores. El
          listado completo, siempre actualizado, está en mi cuenta de Github:
        </p>
        <a href={GITHUB_URL} className="text-accent-strong hover:underline">
          {GITHUB_URL.replace("https://", "")}
        </a>
      </Reveal>
    </>
  );
}
