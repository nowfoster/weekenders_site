#!/usr/bin/env node
/**
 * Pulls Now Foster's posts from Medium's RSS feed into the site.
 *
 *   npm run fetch:blog
 *
 * Writes src/content/blog-posts.json (metadata plus each post's cleaned article HTML,
 * rendered at /blog/<slug>) and saves every image as WebP to public/images/blog/medium/.
 * Commit both. Medium's feed only includes the
 * 10 most recent posts; older posts already in the JSON are kept.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const FEED = "https://medium.com/feed/@nowfoster";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const JSON_OUT = path.join(ROOT, "src/content/blog-posts.json");
const IMG_DIR = path.join(ROOT, "public/images/blog/medium");
const IMG_URL_PREFIX = "/images/blog/medium";
const EXCERPT_MAX = 200;

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const decode = (s) =>
  s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : +e.slice(1));
    return ENTITIES[e] ?? m;
  });
const text = (html) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").replace(/\s+([,.;:!?)])/g, "$1").trim();
const cdata = (s) => s?.replace(/^<!\[CDATA\[|\]\]>$/g, "") ?? "";
const tag = (xml, name) => cdata(xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1]);

function truncate(s, max) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s—–-]+$/, "")}…`;
}

/** First standfirst/paragraph with real text, skipping image captions. */
function excerptOf(html) {
  for (const m of html.matchAll(/<(h4|p)>([\s\S]*?)<\/\1>/g)) {
    const t = text(m[2]);
    if (t.length > 40) return truncate(t, EXCERPT_MAX);
  }
  return "";
}

async function downloadImage(src, file) {
  // Medium's image CDN can resize and convert, so we get 1400px-wide WebP directly.
  const dest = path.join(IMG_DIR, file);
  if (!existsSync(dest)) {
    const res = await fetch(`https://miro.medium.com/v2/resize:fit:1400/format:webp/${src.split("/").pop()}`);
    if (!res.ok) throw new Error(`Image ${src}: HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  }
  return `${IMG_URL_PREFIX}/${file}`;
}

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const normalise = (s) => text(s).toLowerCase().replace(/[^a-z0-9]+/g, "");

/** Medium heading levels shift down one: the page's <h1> is the post title. */
const TAG_MAP = { h3: "h2", h4: "h3", p: "p", ul: "ul", ol: "ol", li: "li", strong: "strong", b: "strong", em: "em", i: "em",
  a: "a", br: "br", blockquote: "blockquote", figure: "figure", figcaption: "figcaption", img: "img", hr: "hr" };

/**
 * Turns Medium's feed HTML into clean, self-hosted article HTML:
 * drops the tracking pixel, a leading heading that repeats the title and the lead image
 * (shown in the page header), downloads inline images, rewrites links between Now Foster
 * posts to their pages on this site, and keeps only a small allow-list of tags/attributes.
 */
async function articleHtml(raw, { id, title, leadSrc }, slugsById) {
  let html = raw.replace(/<img[^>]*medium\.com\/_\/stat[^>]*>/g, "");
  html = html.replace(/^\s*<h3>([\s\S]*?)<\/h3>/, (m, inner) => (normalise(inner) === normalise(title) ? "" : m));
  if (leadSrc) {
    const lead = leadSrc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(`<figure><img[^>]*src="${lead}"[^>]*>(<figcaption>[\\s\\S]*?</figcaption>)?</figure>`), "");
  }

  // Medium's subtitle (a leading <h4>) becomes the article's lead paragraph.
  html = html.replace(/^\s*<h4>([\s\S]*?)<\/h4>/, "<p>$1</p>");

  let n = 0;
  const images = new Map();
  for (const [, src] of html.matchAll(/<img[^>]*src="([^"]+)"/g)) {
    if (!images.has(src)) images.set(src, await downloadImage(src, `${id}-${++n}.webp`));
  }

  const out = html.replace(/<(\/?)([a-z0-9]+)([^>]*)>/gi, (m, close, name, attrs) => {
    const tag = TAG_MAP[name.toLowerCase()];
    if (!tag) return "";
    if (close) return `</${tag}>`;
    const attr = (a) => decode(attrs.match(new RegExp(`\\s${a}="([^"]*)"`))?.[1] ?? "");
    if (tag === "img") {
      const src = images.get(attr("src"));
      return src ? `<img src="${src}" alt="${escapeAttr(attr("alt"))}" loading="lazy">` : "";
    }
    if (tag === "a") {
      let href = attr("href").split("?source=")[0];
      const own = href.match(/medium\.com\/@nowfoster\/[^/?#]*-([0-9a-f]{8,})/);
      if (own && slugsById.has(own[1])) href = `/blog/${slugsById.get(own[1])}`;
      return `<a href="${escapeAttr(href)}">`;
    }
    return `<${tag}>`;
  });

  return out.replace(/<p>\s*(<br>\s*)*<\/p>/g, "").replace(/<figure>\s*<\/figure>/g, "").trim();
}

async function main() {
  const res = await fetch(FEED, { headers: { "User-Agent": "Mozilla/5.0 (weekenders-site build script)" } });
  if (!res.ok) throw new Error(`Feed: HTTP ${res.status}`);
  const xml = await res.text();
  await mkdir(IMG_DIR, { recursive: true });
  const existing = existsSync(JSON_OUT) ? JSON.parse(await readFile(JSON_OUT, "utf8")) : [];

  const items = xml
    .split("<item>")
    .slice(1)
    .map((item) => {
      const link = tag(item, "link").split("?")[0];
      const lastSegment = link.split("/").pop();
      const id = lastSegment.split("-").pop(); // Medium's post id, e.g. ce64ee33e9b8
      return { item, link, id, slug: lastSegment.slice(0, -(id.length + 1)) || id };
    });
  const slugsById = new Map([...existing, ...items].map((p) => [p.id, p.slug]));

  const fetched = [];
  for (const { item, link, id, slug } of items) {
    const raw = tag(item, "content:encoded");
    const title = decode(tag(item, "title"));
    const img = raw.match(/<img[^>]*src="(https:\/\/cdn-images[^"]+)"/);
    const alt = decode(raw.match(/<img[^>]*src="https:\/\/cdn-images[^"]+"[^>]*alt="([^"]*)"|<img[^>]*alt="([^"]*)"[^>]*src="https:\/\/cdn-images/)?.slice(1).find(Boolean) ?? "");
    const html = await articleHtml(raw, { id, title, leadSrc: img?.[1] }, slugsById);
    const words = text(html).split(" ").length;
    fetched.push({
      id,
      slug,
      title,
      excerpt: excerptOf(raw),
      date: new Date(tag(item, "pubDate")).toISOString().slice(0, 10),
      readMinutes: Math.max(1, Math.round(words / 230)),
      image: img ? await downloadImage(img[1], `${id}.webp`) : null,
      imageAlt: alt,
      mediumUrl: link,
      tags: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => cdata(m[1])),
      html,
    });
  }

  // Keep older posts that have dropped out of the 10-item feed.
  const ids = new Set(fetched.map((p) => p.id));
  const posts = [...fetched, ...existing.filter((p) => !ids.has(p.id))].sort((a, b) => b.date.localeCompare(a.date));

  await writeFile(JSON_OUT, `${JSON.stringify(posts, null, 2)}\n`);
  console.log(`Saved ${posts.length} posts (${fetched.length} from the feed) to ${path.relative(ROOT, JSON_OUT)}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
