import Link from "next/link";
import { ProjectGlyph } from "@/components/ProjectGlyph";
import type { ContentItem } from "@/lib/content";

type ProjectCardProps = {
  project: ContentItem;
  showDescription?: boolean;
  showIllustrationSlot?: boolean;
};

export function ProjectCard({
  project,
  showDescription = true,
  showIllustrationSlot = false
}: ProjectCardProps) {
  const projectHref = `/projects/${project.slug}`;
  const hasDemoLink = project.demoUrl && project.demoUrl !== "#";

  return (
    <article className="group relative flex h-full flex-col justify-between rounded-lg border border-line bg-panel p-5 shadow-soft transition duration-700 hover:-translate-y-0.5 hover:border-bluegray/35 hover:bg-panelSoft">
      <Link
        href={projectHref}
        aria-label={`Read project note for ${project.title}`}
        className="absolute inset-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-rust/45"
      />
      {showIllustrationSlot ? <ProjectIllustrationSlot title={project.title} /> : null}
      <div className="flex gap-4">
        <div className="shrink-0">
          <ProjectGlyph slug={project.slug} title={project.title} />
        </div>
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {project.status ? (
              <span className="rounded-full border border-sage/25 bg-sage/10 px-3 py-1 text-xs font-medium text-sage">
                {project.status}
              </span>
            ) : null}
            {project.pillar ? (
              <span className="rounded-full border border-bluegray/20 bg-bluegray/10 px-3 py-1 text-xs font-medium text-bluegray">
                {project.pillar}
              </span>
            ) : null}
          </div>
          <h3 className="font-serif text-2xl font-semibold leading-tight text-ink">
            {project.title}
          </h3>
          {showDescription ? (
            <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
          ) : null}
        </div>
      </div>
      <div className={showDescription ? "relative z-10 mt-6 flex flex-wrap items-center gap-3" : "relative z-10 mt-5 flex flex-wrap items-center gap-3"}>
        <Link
          href={projectHref}
          className="text-sm font-semibold text-rust transition hover:text-ink"
        >
          Read project note
        </Link>
        {hasDemoLink ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-bluegray/30 bg-paper px-3 py-1.5 text-sm font-semibold text-ink transition duration-700 hover:border-bluegray/55 hover:bg-panelSoft"
          >
            Play it
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ProjectIllustrationSlot({ title }: { title: string }) {
  return (
    <div className="project-illustration-slot mb-5" aria-label={`${title} illustration preview`}>
      <img
        src="/images/projects/branching-storytelling-agent.png"
        alt={`${title} system diagram`}
        className="project-illustration-slot__image project-illustration-slot__image--diagram"
      />
      <img
        src="/images/projects/branching-storytelling-agent-demo1.png"
        alt={`${title} demo screen`}
        className="project-illustration-slot__image project-illustration-slot__image--demo"
      />
    </div>
  );
}
