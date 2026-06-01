import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentItem, getContentItems } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getContentItems("projects");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    const project = await getContentItem("projects", slug);
    return {
      title: project.title,
      description: project.description
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  let project;

  try {
    project = await getContentItem("projects", slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Link href="/projects" className="text-sm font-semibold text-rust transition hover:text-ink">
        Back to projects
      </Link>
      <div className="mt-8 max-w-3xl">
        <div className="mb-5 flex flex-wrap gap-2">
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
        <h1 className="font-serif text-5xl font-semibold leading-tight text-ink">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{project.description}</p>
        {project.githubUrl || project.demoUrl ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl ? (
              <ProjectActionLink href={project.githubUrl} label="GitHub" />
            ) : null}
            {project.demoUrl ? (
              <ProjectActionLink href={project.demoUrl} label="Demo" />
            ) : null}
          </div>
        ) : null}
      </div>
      {project.heroImage ? (
        <figure className="project-detail-figure mt-10">
          <img
            src={project.heroImage}
            alt={project.heroImageAlt ?? `${project.title} project image`}
            className="project-detail-figure__image"
          />
          <figcaption>{project.heroImageAlt ?? `${project.title} project image`}</figcaption>
        </figure>
      ) : null}
      <article
        className="markdown mt-10 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
    </main>
  );
}

function ProjectActionLink({ href, label }: { href: string; label: string }) {
  const isPlaceholder = href === "#";

  if (isPlaceholder) {
    return (
      <span className="rounded-md border border-line bg-panel px-4 py-2 text-sm font-semibold text-muted">
        {label} link TODO
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-md border border-bluegray/30 bg-panel px-4 py-2 text-sm font-semibold text-ink transition duration-700 hover:border-bluegray/55 hover:bg-panelSoft"
    >
      {label}
    </a>
  );
}
