import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getContentItems } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description: "AI-native project notes from Esther."
};

export default async function ProjectsPage() {
  const projects = await getContentItems("projects");

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="A few things I keep building toward."
        description="Active experiments and project notes. Still building, still figuring things out."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
