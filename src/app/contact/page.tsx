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
        description="Use the placeholder links below until Esther adds exact public URLs."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Link
          href={siteConfig.social.email}
          className="rounded-lg border border-line bg-white/[0.045] p-5 backdrop-blur-md transition duration-700 hover:border-bluegray/40 hover:bg-white/[0.075]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">Email</p>
          <p className="mt-3 text-lg font-semibold text-ink">hello@example.com</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            TODO: replace with Esther's preferred public email.
          </p>
        </Link>
        <Link
          href={siteConfig.social.github}
          className="rounded-lg border border-line bg-white/[0.045] p-5 backdrop-blur-md transition duration-700 hover:border-bluegray/40 hover:bg-white/[0.075]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">GitHub</p>
          <p className="mt-3 text-lg font-semibold text-ink">Project repositories</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            TODO: replace with Esther's GitHub profile or selected repos.
          </p>
        </Link>
        <Link
          href={siteConfig.social.linkedin}
          className="rounded-lg border border-line bg-white/[0.045] p-5 backdrop-blur-md transition duration-700 hover:border-bluegray/40 hover:bg-white/[0.075]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">LinkedIn</p>
          <p className="mt-3 text-lg font-semibold text-ink">Professional updates</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            TODO: replace with Esther's LinkedIn URL.
          </p>
        </Link>
        <Link
          href={siteConfig.social.x}
          className="rounded-lg border border-line bg-white/[0.045] p-5 backdrop-blur-md transition duration-700 hover:border-bluegray/40 hover:bg-white/[0.075]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">X</p>
          <p className="mt-3 text-lg font-semibold text-ink">Short build notes</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            TODO: replace with Esther's X profile if she wants it public here.
          </p>
        </Link>
      </div>
    </main>
  );
}
