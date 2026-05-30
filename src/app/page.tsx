import Link from "next/link";
import { ParticleTitle } from "@/components/ParticleTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalPanel } from "@/components/SignalPanel";
import { getContentItems } from "@/lib/content";

export default async function HomePage() {
  const projects = await getContentItems("projects");
  const writing = await getContentItems("writing");
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const recentWriting = writing.slice(0, 2);

  return (
    <main>
      <section className="mx-auto flex min-h-[52vh] max-w-[1500px] flex-col justify-center px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1500px] text-center">
          <h1 className="sr-only">
            Esther Huang
          </h1>
          <ParticleTitle
            lines={["Esther Huang"]}
          />
        </div>
      </section>

      <section className="border-y border-line bg-paper/85">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-11 sm:px-8 md:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            index="01"
            eyebrow="Current focus"
            title="Building systems that notice the hidden work between intention and action."
          />
          <div className="current-focus-content">
            <div className="hero-portrait focus-portrait" aria-label="Portrait placeholder for Esther">
              {/* TODO: Replace this placeholder with Esther's approved public photo. */}
              <div className="hero-portrait__frame">
                <div className="hero-portrait__placeholder">
                  <span>EH</span>
                </div>
              </div>
              <div className="hero-portrait__meta">
                <span>Portrait slot</span>
                <strong>Photo ready</strong>
              </div>
            </div>
            <p>
              I’m interested in how AI agents can help people navigate messy real-world contexts:
              complex workflows, long-term memory, narrative interaction, personal focus, and
              high-trust opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Featured projects"
          title="Five workstreams, one question."
          description="How can AI help real humans navigate action, memory, trust, motivation, creativity, and opportunity?"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              showDescription={false}
              showIllustrationSlot={project.slug === "branching-storytelling-agent"}
            />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-7 inline-flex text-sm font-semibold text-rust transition hover:text-ink"
        >
          See all projects
        </Link>
      </section>

      <section className="border-y border-line bg-paper/85">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-11 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            index="03"
            eyebrow="Writing & notes"
            title="A short trail of what Esther is noticing."
            description="Home stays brief. The writing page carries the deeper archive."
          />
          <div className="grid gap-4">
            <SignalPanel compact />
            <div className="rounded-lg border border-line bg-panel p-5 shadow-soft">
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">
                  Recent writing
                </p>
                <Link href="/writing" className="text-xs font-semibold text-rust transition hover:text-ink">
                  View all
                </Link>
              </div>
              {recentWriting.map((item) => (
                <article key={item.slug} className="border-t border-line py-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.category ?? item.pillar ?? "Note"}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold leading-tight text-ink">
                    <Link href={`/writing/${item.slug}`} className="transition duration-500 hover:text-bluegray">
                      {item.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bluegray">
              Contact
            </p>
            <p className="max-w-2xl text-base leading-7 text-muted">
              For AI agent work, early-stage product thinking, or technical collaboration.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-fit rounded-md border border-bluegray/30 bg-panel px-5 py-3 text-sm font-semibold text-ink transition duration-700 hover:border-bluegray/55 hover:bg-panelSoft"
          >
            Contact Esther
          </Link>
        </div>
      </section>
    </main>
  );
}
