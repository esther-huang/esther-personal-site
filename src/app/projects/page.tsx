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
        title="AI systems for action, memory, narrative, focus, and opportunity."
        description="These are framed as active explorations and project notes. They are not inflated into products, launches, or traction claims."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
