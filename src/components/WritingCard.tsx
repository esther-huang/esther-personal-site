import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type WritingCardProps = {
  item: ContentItem;
  hrefBase?: "/writing" | "/field-notes";
};

export function WritingCard({ item, hrefBase = "/writing" }: WritingCardProps) {
  const href = hrefBase === "/writing" ? `/writing/${item.slug}` : "#";

  return (
    <article className="border-t border-line py-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">
            {item.category ?? item.pillar ?? "Note"}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ink">
            {hrefBase === "/writing" ? (
              <Link href={href} className="transition duration-500 hover:text-bluegray">
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{item.description}</p>
        </div>
        {item.date ? <time className="text-sm text-muted">{item.date}</time> : null}
      </div>
    </article>
  );
}
