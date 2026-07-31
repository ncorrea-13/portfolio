import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";
import { ContactLinks } from "@/components/ContactLinks";
import { Reveal } from "@/components/Reveal";
import { experience, education } from "@/content/experience";

export default function SobreMi() {
  return (
    <>
      <h1 className="mt-4 mb-6 font-sans text-2xl font-semibold text-heading">Sobre mí</h1>

      <Reveal>
        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-start">
          <div>
            <p>
              Soy un estudiante avanzado de Ingeniería en Sistemas de Información en la
              Universidad Tecnológica Nacional, Facultad Regional Mendoza. Actualmente tengo 37/41
              materias aprobadas. Soy desarrollador full-stack en AYSAM. Me apasiona el desarrollo
              de software, y mi experiencia en Linux avanzado despertó interés en la
              infraestructura, la ciberseguridad y explotación de vulnerabilidades.
            </p>
            <p className="mt-3">
              Además, mantengo mi homeserver, donde administro infraestructura, servicios,
              contenedores, redes y privacidad aplicada a un uso diario real.
            </p>
          </div>
          <Image
            src="/foto.jpg"
            alt="Nicolás Correa"
            width={160}
            height={160}
            className="shrink-0 rounded-full border border-card-border object-cover"
          />
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Experiencia</h2>
        <ul className="space-y-2">
          {experience.map((item) => (
            <li key={item.role + item.period}>
              <strong className="font-sans text-heading">{item.role}</strong> ({item.org}),{" "}
              {item.period}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-muted">Detalle de cada rol en el CV descargable más abajo.</p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Educación</h2>
        <ul className="space-y-2">
          {education.map((item) => (
            <li key={item.title}>
              <strong className="font-sans text-heading">{item.title}</strong> ({item.org}),{" "}
              {item.period}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Habilidades blandas</h2>
        <p>
          Trabajo en equipo, comunicación efectiva, responsabilidad y adaptabilidad; sobre todo al
          pasar entre roles de desarrollo, infraestructura y de seguridad ofensiva, donde el
          contexto y las prioridades cambian rápido.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Intereses</h2>
        <p>
          Arquitectura de sistemas y sistemas operativos, sobre todo por CLI/TUI. Self-hosting y
          privacidad digital, como el motivo por el que este homeserver sigue creciendo. Seguridad
          ofensiva.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Cómo encaro el software</h2>
        <p>
          Le doy tanta importancia a cómo está construido el código como a que funcione. Mi
          principal enfoque a la hora de construir software es mantener la filosofía KISS.
          Mantener el software lo más chico posible así se puede desacoplar de forma sencilla y
          reutilizar en diferentes proyectos; a menos que la situación amerite lo contrario.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Entorno de trabajo</h2>
        <p>
          Mi día a día pasa por la terminal: Neovim como editor principal, Zellij como
          multiplexor y Yazi para manejar archivos, todo dentro de WezTerm. La mayoría de mis
          herramientas propias de uso personal las utilizo por medio de interfaces CLI o TUI, así
          puedo tenerlas disponibles en cualquier máquina. Considero que el software que utilizo
          para crear software debe ser lo más ligero y completo posible así todos los recursos de
          mi hardware se enfocan en lo que estoy construyendo.
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">CV</h2>
        <LinkButton href="/cv.pdf" external>
          Descargar CV completo (PDF)
        </LinkButton>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Proyectos</h2>
        <p>
          Ver todos mis proyectos personales y académicos en la{" "}
          <Link href="/proyectos" className="text-accent-strong hover:underline">
            página de proyectos
          </Link>
          .
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">Contacto</h2>
        <ContactLinks />
      </Reveal>
    </>
  );
}
