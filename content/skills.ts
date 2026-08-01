export const skillGroups = [
  {
    label: { es: "Backend", en: "Backend" },
    tags: [
      "Java",
      "Spring Boot",
      "GraphQL",
      "RabbitMQ",
      "Node.js",
      "Express.js",
      "PL/SQL",
      "PostgreSQL",
    ],
  },
  {
    label: { es: "Infraestructura", en: "Infrastructure" },
    tags: [
      "Bash",
      "Docker",
      "Podman",
      { es: "Linux avanzado", en: "Advanced Linux" },
      { es: "Microservicios", en: "Microservices" },
      { es: "Redes", en: "Networking" },
      "Wireguard",
    ],
  },
  {
    label: { es: "Sistemas", en: "Systems" },
    tags: ["Go", "Rust"],
  },
  {
    label: { es: "Seguridad ofensiva", en: "Offensive Security" },
    tags: ["Nmap", "Burp Suite", "OSINT", "Python"],
  },
  {
    label: { es: "Frontend", en: "Frontend" },
    tags: ["JavaScript", "TypeScript", "React", "Next.js", "Oracle APEX"],
  },
] as const;
