import Image from "next/image";
import { CvLink } from "@/components/CvLink";
import { ContactLinks } from "@/components/ContactLinks";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { experience, education } from "@/content/experience";

export default function SobreMi() {
  return (
    <>
      <h1 className="mt-4 mb-6 font-sans text-2xl font-semibold text-heading">
        <T es="Sobre mí" en="About me" />
      </h1>

      <Reveal>
        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-start">
          <div>
            <p>
              <T
                es="Soy un estudiante avanzado de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, Facultad Regional Mendoza con 37 de 42 materias aprobadas. Soy desarrollador full-stack en AYSAM. Vengo del desarrollo de software, pero trabajar en Linux me terminó llevando a infraestructura y ciberseguridad."
                en="I am an advanced student of Systems Engineering at Universidad Tecnológica Nacional, Facultad Regional Mendoza. I have currently passed 37 of 42 subjects. I work as a full stack developer at AYSAM. I come from software development, but working in Linux ended up pulling me into infrastructure and cybersecurity."
              />
            </p>
            <p className="mt-3">
              <T
                es="Además, mantengo mi homeserver, donde administro infraestructura, servicios, contenedores, redes y privacidad aplicada a un uso diario real."
                en="I also maintain my homeserver, where I manage infrastructure, services, containers, networking, and privacy applied to real daily use."
              />
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
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Experiencia" en="Experience" />
        </h2>
        <ul className="space-y-2">
          {experience.map((item) => (
            <li key={item.role.es + item.period.es}>
              <strong className="font-sans text-heading">
                <T es={item.role.es} en={item.role.en} />
              </strong>{" "}
              ({item.org}), <T es={item.period.es} en={item.period.en} />
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-muted">
          <T
            es="El detalle de cada rol está en el CV que se puede descargar más abajo."
            en="See the details of each role in the resume you can download below."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Educación" en="Education" />
        </h2>
        <ul className="space-y-2">
          {education.map((item) => (
            <li key={item.title.es + item.period.es}>
              <strong className="font-sans text-heading">
                <T es={item.title.es} en={item.title.en} />
              </strong>{" "}
              ({item.org}), <T es={item.period.es} en={item.period.en} />
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Habilidades blandas" en="Soft skills" />
        </h2>
        <p>
          <T
            es="Salto bastante entre desarrollo e infraestructura, así que me acostumbré a comunicar bien y adaptarme rápido cuando cambian las prioridades. También a aprender herramientas nuevas por mi cuenta, a explicar decisiones técnicas a gente no técnica sin perder precisión, y a debuggear y decidir en situaciones donde no está todo claro."
            en="I move around a lot between development and infrastructure, so I got used to communicating clearly and adapting fast when priorities shift. That also means picking up new tools on my own, explaining technical decisions to nontechnical people without losing precision, and debugging and making decisions in situations that aren't fully clear."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Cómo encaro el software" en="How I approach software" />
        </h2>
        <p>
          <T
            es="Trato de mantener todo lo más simple posible (KISS): código chico, fácil de desacoplar y reusar. Si la situación pide otra cosa, la escucho, pero por defecto voy a lo simple."
            en="I try to keep everything as simple as possible (KISS): small code, easy to decouple and reuse. If the situation calls for something else, I listen, but by default I go simple."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Stack y entorno" en="Stack and environment" />
        </h2>
        <p>
          <T
            es="Mi día a día pasa por la terminal: Neovim como editor principal, Zellij como multiplexor y Yazi para manejar archivos, todo dentro de WezTerm. La mayoría de mis herramientas propias las uso por medio de interfaces CLI o TUI, así las tengo disponibles en cualquier máquina independientemente del sistema y el lenguaje."
            en="My daily work happens in the terminal: Neovim as my main editor, Zellij as multiplexer, and Yazi to manage files, all inside WezTerm. I use most of my own tools through CLI or TUI interfaces, so I have them available on any machine, no matter the system or language."
          />
        </p>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3"></h2>
        <div className="flex justify-center">
          <CvLink>
            <T
              es="Descargar CV completo (PDF)"
              en="Download full resume (PDF)"
            />
          </CvLink>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 mb-3 font-sans text-lg text-accent">
          <T es="Contacto" en="Contact" />
        </h2>
        <ContactLinks />
      </Reveal>
    </>
  );
}
