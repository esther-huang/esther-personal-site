import { SectionHeading } from "@/components/SectionHeading";
import { WritingCard } from "@/components/WritingCard";
import { getContentItems } from "@/lib/content";

export const metadata = {
  title: "Writing",
  description: "Writing and draft essays from Esther."
};

export default async function WritingPage() {
  const writing = await getContentItems("writing");

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Writing"
        title="Public-safe notes from private thinking and project work."
        description="Short essays and observations about AI agents, workflow friction, narrative systems, focus, trust, and personal GTM."
      />
      <div>
        {writing.map((item) => (
          <WritingCard key={item.slug} item={item} />
        ))}
      </div>
    </main>
  );
}
