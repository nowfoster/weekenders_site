import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { stories, storyHref } from "@/content/stories";
import { posts } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  });
  return [
    page("/", 1),
    page("/become-a-weekender", 0.9),
    page("/stories", 0.8),
    ...stories.map((s) => page(storyHref(s), 0.6)),
    page("/about-us", 0.7),
    page("/about-us/meet-the-team", 0.5),
    page("/blog", 0.6),
    ...posts.map((p) => ({ ...page(p.href, 0.5), lastModified: new Date(p.date) })),
  ];
}
