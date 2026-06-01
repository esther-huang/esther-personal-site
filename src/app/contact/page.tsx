import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact Esther."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="For AI agent work, early-stage product thinking, or technical collaboration."
        description="Find Esther through the public links below."
      />

      <div className="grid gap-5 md:grid-cols-3">
        <Link
          href={siteConfig.social.github}
          className="rounded-lg border border-line bg-panel p-5 shadow-soft transition duration-700 hover:border-bluegray/35 hover:bg-panelSoft"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">GitHub</p>
          <p className="mt-3 text-lg font-semibold text-ink">Project repositories</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Code, experiments, and selected project work.
          </p>
        </Link>
        <Link
          href={siteConfig.social.linkedin}
          className="rounded-lg border border-line bg-panel p-5 shadow-soft transition duration-700 hover:border-bluegray/35 hover:bg-panelSoft"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">LinkedIn</p>
          <p className="mt-3 text-lg font-semibold text-ink">Professional updates</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Background, public work, and professional context.
          </p>
        </Link>
        <Link
          href={siteConfig.social.x}
          className="rounded-lg border border-line bg-panel p-5 shadow-soft transition duration-700 hover:border-bluegray/35 hover:bg-panelSoft"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">X</p>
          <p className="mt-3 text-lg font-semibold text-ink">Short build notes</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Concise notes on AI systems, product judgment, and building.
          </p>
        </Link>
      </div>
    </main>
  );
}
