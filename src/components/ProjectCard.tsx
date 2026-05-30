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
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col justify-between rounded-lg border border-line bg-panel p-5 shadow-soft transition duration-700 hover:-translate-y-0.5 hover:border-bluegray/35 hover:bg-panelSoft"
    >
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
      <span className={showDescription ? "mt-6 text-sm font-semibold text-rust transition group-hover:text-ink" : "mt-5 text-sm font-semibold text-rust transition group-hover:text-ink"}>
        Read project note
      </span>
    </Link>
  );
}

function ProjectIllustrationSlot({ title }: { title: string }) {
  return (
    <div className="project-illustration-slot mb-5" aria-label={`${title} illustration placeholder`}>
      {/* TODO: Replace this placeholder with Esther's approved project illustration. */}
      <div className="project-illustration-slot__grid" aria-hidden="true" />
      <div className="project-illustration-slot__node project-illustration-slot__node--one" />
      <div className="project-illustration-slot__node project-illustration-slot__node--two" />
      <div className="project-illustration-slot__node project-illustration-slot__node--three" />
      <div className="project-illustration-slot__copy">
        <span>Illustration slot</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
