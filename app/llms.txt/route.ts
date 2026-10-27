import { routes, SITE_URL } from "@/content/routes";
import { clientWork, ownProjects } from "@/content/projects";
import { GITHUB_URL, LINKEDIN_URL, SERVIDOR_URL } from "@/content/site";

export const dynamic = "force-static";

const link = (name: string, url: string, desc: string) =>
  `- [${name}](${url}): ${desc}`;

export function GET() {
  const body = [
    "# Nicolás Correa",
    "",
    `> ${routes[0].description}`,
    "",
    "## Pages",
    ...routes.map((r) => link(r.title, `${SITE_URL}${r.path}`, r.description)),
    "",
    "## Own projects",
    ...ownProjects.map((p) => link(p.name.en, p.url, p.desc.en)),
    "",
    "## Client work",
    ...clientWork.map((p) => link(p.name.en, p.url, p.desc.en)),
    "",
    "## Links",
    link("Homelab", SERVIDOR_URL, "Self-hosted homeserver documentation"),
    link("GitHub", GITHUB_URL, "Source code"),
    link("LinkedIn", LINKEDIN_URL, "Professional profile"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
