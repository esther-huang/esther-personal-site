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
        title="Short pieces from along the way."
        description="Thinking out loud while building AI systems."
      />
      <div>
        {writing.map((item) => (
          <WritingCard key={item.slug} item={item} />
        ))}
      </div>
    </main>
  );
}
