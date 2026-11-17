import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BlogIntro from "@/components/blog/BlogIntro";
import BlogFeed from "@/components/blog/BlogFeed";
import { links, ogImage, site, siteUrl } from "@/content/site";
import { blogIntro, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog – helpful reads about weekend fostering",
  description:
    "Helpful reads for anyone curious about weekend fostering, written by the people who know it best: guides, carer stories and news from the Weekenders team at Now Foster.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    siteName: "Weekenders by Now Foster",
    locale: "en_GB",
    images: [ogImage],
    url: "/blog",
    title: "Fostering reimagined – the Weekenders blog | Now Foster",
    description: blogIntro.body,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${blogIntro.title} – the Weekenders blog`,
    description: blogIntro.body,
    url: `${siteUrl}/blog`,
    sameAs: links.blog,
    publisher: { "@type": "NGO", name: site.name, url: `${siteUrl}/` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      image: `${siteUrl}${p.image}`,
      url: `${siteUrl}${p.href}`,
      author: { "@type": "Organization", name: "Now Foster" },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    ],
  },
];

export default function Blog() {
  return (
    <>
      <SiteHeader variant="solid" current="/blog" />
      <main id="main">
        <BlogIntro />
        <BlogFeed />
      </main>
      <Footer under="bg-white" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
