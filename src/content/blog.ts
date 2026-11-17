/**
 * Blog page copy and posts. Posts are written on Medium and republished here at
 * /blog/<slug>. The data comes from blog-posts.json; refresh it with `npm run fetch:blog`.
 */
import { ogImage } from "./site";
import mediumPosts from "./blog-posts.json";

export const blogIntro = {
  title: "Fostering reimagined",
  body: "Helpful reads for anyone curious about weekend fostering, written by the people who know it best.",
};

export const blogSidebar = {
  title: "Thinking about becoming a Weekender?",
  body: "Ask questions and find out more with no pressure or commitment.",
};

/** How many "Latest posts" show before "Load more posts" reveals the next batch. */
export const postsPerPage = 6;

/** Shape of each entry in blog-posts.json (written by `npm run fetch:blog`). */
type MediumPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (yyyy-mm-dd) */
  date: string;
  readMinutes: number;
  /** The post's lead image from Medium */
  image: string | null;
  imageAlt: string;
  mediumUrl: string;
  tags: string[];
  /** Cleaned article HTML (allow-listed tags only, self-hosted images) */
  html: string;
};

export type BlogPost = MediumPost & {
  /** Page on this site: /blog/<slug> */
  href: string;
  /** Image for the cards on /blog (the Medium lead image unless overridden) */
  image: string;
  /** Image at the top of the post page (always the Medium lead image) */
  headerImage: string | null;
  /** Date as shown on the page, e.g. "19 Mar 2025" */
  displayDate: string;
};

/** Medium id of the post shown in the large card at the top. Falls back to the newest post. */
const FEATURED_ID = "fb597301efa4"; // "One Weekend a month could change a child's life — and yours"

/**
 * Per-post tweaks layered over the Medium data, keyed by Medium id. The featured post's
 * Medium image is a wide BBC banner that doesn't crop well in the card, so the card uses
 * the design's photo (the post page still shows the banner).
 */
const overrides: Record<string, Partial<BlogPost>> = {
  fb597301efa4: {
    image: "/images/blog/featured-one-weekend.webp",
    imageAlt: "A man in a field carrying a young child on his shoulders",
  },
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export const posts: BlogPost[] = (mediumPosts as MediumPost[]).map((p) => ({
  ...p,
  href: `/blog/${p.slug}`,
  image: p.image ?? ogImage.url,
  headerImage: p.image,
  displayDate: dateFormat.format(new Date(p.date)),
  ...overrides[p.id],
}));

export const featuredPost = posts.find((p) => p.id === FEATURED_ID) ?? posts[0];
export const latestPosts = posts.filter((p) => p !== featuredPost);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Newer and older neighbours of a post, for the links under the article. */
export function getAdjacentPosts(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  return { newer: i > 0 ? posts[i - 1] : undefined, older: i >= 0 ? posts[i + 1] : undefined };
}
