import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { PostBody, PostHeader, PostPrevNext } from "@/components/blog/PostArticle";
import { ogImage, site, siteUrl } from "@/content/site";
import { getAdjacentPosts, getPost, posts } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_GB",
      url: post.href,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.headerImage ? [{ url: post.headerImage, alt: post.imageAlt }] : [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { newer, older } = getAdjacentPosts(post.slug);
  const url = `${siteUrl}${post.href}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: post.headerImage ? `${siteUrl}${post.headerImage}` : undefined,
      url,
      mainEntityOfPage: url,
      keywords: post.tags.join(", "),
      author: { "@type": "Organization", name: "Now Foster" },
      publisher: { "@type": "NGO", name: "Now Foster", url: `${siteUrl}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <SiteHeader variant="solid" current="/blog" />
      <main id="main">
        <PostHeader post={post} />
        <PostBody post={post} />
        <PostPrevNext newer={newer} older={older} />
        <div className="flex justify-center px-4 py-8">
          <Link
            href="/blog"
            className="inline-flex h-[58px] w-full items-center justify-center rounded-full bg-brand px-8 text-body-l font-semibold whitespace-nowrap text-white transition hover:brightness-110 sm:w-[213px] sm:px-5"
          >
            View all posts
          </Link>
        </div>
      </main>
      <CtaBanner under="bg-white" />
      <Footer under="bg-[#269298]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
