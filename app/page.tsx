import { LinkButton } from "@/components/LinkButton";
import { ContactLinks } from "@/components/ContactLinks";
import { TagGroup } from "@/components/TagGroup";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/content/skills";
import { SERVIDOR_URL } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <p className="my-6">
          Estudiante avanzado de Ingeniería en Sistemas de Información y desarrollador full-stack
          en AYSAM. Soy un apasionado del desarrollo de software y de la administración de ese
          software. Disfruto administrar la infraestructura donde corre el software que construí,
          intentando exprimir y aprovechar los recursos que dispongo para la mejor optimización y
          eficiencia.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        {skillGroups.map((group) => (
          <TagGroup key={group.label} label={group.label} tags={group.tags} />
        ))}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="my-8 flex flex-wrap gap-3">
          <LinkButton href="/cv.pdf" external>
            Descargar CV
          </LinkButton>
          <LinkButton href="/proyectos">Ver proyectos</LinkButton>
          <LinkButton href="/sobre-mi">Sobre mí</LinkButton>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Destacado</h2>
        <p>
          Actualmente me encuentro trabajando con infraestructura self-hosted, contenedores y
          privacidad aplicada a un uso diario real. Mantengo mi propio homeserver corriendo 24/7
          con{" "}
          <a href="https://tailscale.com" className="text-accent-strong hover:underline">
            Tailscale
          </a>
          , expuesto puntualmente vía Funnel.
        </p>
        <p className="mt-3">
          El detalle técnico completo, incluyendo el diagrama de arquitectura y el uptime en vivo
          del server real, está en{" "}
          <a
            href={SERVIDOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-strong hover:underline"
          >
            la página de arquitectura del homeserver ↗
          </a>
          . Su configuración se puede encontrar{" "}
          <a
            href="https://github.com/ncorrea-13/homeserver"
            className="text-accent-strong hover:underline"
          >
            en github
          </a>
          .
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Contacto</h2>
        <ContactLinks />
        <p className="mt-4 text-sm text-muted">
          Este sitio es solo informativo — no hay recolección de datos.
        </p>
      </Reveal>
    </>
  );
}
