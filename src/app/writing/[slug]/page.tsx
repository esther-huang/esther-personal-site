import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentItem, getContentItems } from "@/lib/content";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const writing = await getContentItems("writing");
  return writing.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WritingPageProps) {
  const { slug } = await params;

  try {
    const item = await getContentItem("writing", slug);
    return {
      title: item.title,
      description: item.description
    };
  } catch {
    return {};
  }
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  let item;

  try {
    item = await getContentItem("writing", slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link href="/writing" className="text-sm font-semibold text-rust transition hover:text-ink">
        Back to writing
      </Link>
      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">
          {item.category ?? "Writing"}
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-ink">
          {item.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{item.description}</p>
      </div>
      <article className="markdown mt-10" dangerouslySetInnerHTML={{ __html: item.html }} />
    </main>
  );
}
