import type { MetadataRoute } from "next";
import { getContentItems } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const staticRoutes = ["", "/about", "/projects", "/writing", "/contact"];

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, writing] = await Promise.all([
    getContentItems("projects"),
    getContentItems("writing")
  ]);

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: now
    })),
    ...writing.map((item) => ({
      url: absoluteUrl(`/writing/${item.slug}`),
      lastModified: item.date ? new Date(item.date) : now
    }))
  ];
}
