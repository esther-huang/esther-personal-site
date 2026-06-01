import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type ContentType = "projects" | "writing" | "field-notes";

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  status?: string;
  date?: string;
  category?: string;
  pillar?: string;
  order?: number;
  featured?: boolean;
  draft?: boolean;
  tags: string[];
  body: string;
  html: string;
};

const contentRoot = path.join(process.cwd(), "content");

async function markdownToHtml(markdown: string) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

export async function getContentItems(type: ContentType): Promise<ContentItem[]> {
  const dir = path.join(contentRoot, type);
  const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".md"));
  const items = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      return getContentItem(type, slug);
    })
  );

  return items.filter((item) => !item.draft).sort((a, b) => {
    if (a.order !== undefined || b.order !== undefined) {
      return (a.order ?? 999) - (b.order ?? 999);
    }

    return (b.date ?? "").localeCompare(a.date ?? "");
  });
}

export async function getContentItem(type: ContentType, slug: string): Promise<ContentItem> {
  const filePath = path.join(contentRoot, type, `${slug}.md`);
  const file = await fs.readFile(filePath, "utf8");
  const parsed = matter(file);
  const data = parsed.data;

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    status: data.status ? String(data.status) : undefined,
    date: data.date ? String(data.date) : undefined,
    category: data.category ? String(data.category) : undefined,
    pillar: data.pillar ? String(data.pillar) : undefined,
    order: typeof data.order === "number" ? data.order : undefined,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    body: parsed.content,
    html: await markdownToHtml(parsed.content)
  };
}
