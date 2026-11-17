import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import StoryHeader from "@/components/stories/StoryHeader";
import StoryArticle from "@/components/stories/StoryArticle";
import StoryPrevNext from "@/components/stories/StoryPrevNext";
import { ogImage, siteUrl } from "@/content/site";
import { getAdjacentStories, getStory, stories, storyHref } from "@/content/stories";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = getStory((await params).slug);
  if (!story) return {};
  const path = storyHref(story);
  const title = `${story.name}'s story`;
  return {
    title: `${title} – Weekender stories`,
    description: story.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: "Weekenders by Now Foster",
      locale: "en_GB",
      images: story.headerImage ? [{ url: story.headerImage.src, alt: story.headerImage.alt }] : [ogImage],
      url: path,
      title: `${title} | Now Foster`,
      description: story.quote,
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const story = getStory((await params).slug);
  if (!story) notFound();
  const { previous, next } = getAdjacentStories(story.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Stories", item: `${siteUrl}/stories` },
      { "@type": "ListItem", position: 3, name: `${story.name}'s story`, item: `${siteUrl}${storyHref(story)}` },
    ],
  };

  return (
    <>
      <SiteHeader variant="solid" current="/stories" />
      <main id="main">
        <StoryHeader story={story} />
        <StoryArticle story={story} />
        <StoryPrevNext previous={previous} next={next} />
        <div className="flex justify-center px-4 py-8">
          <Link
            href="/stories"
            className="inline-flex h-[58px] items-center justify-center rounded-full bg-brand px-8 text-body-l font-semibold whitespace-nowrap w-full text-white transition hover:brightness-110 sm:w-[213px] sm:px-5"
          >
            View all stories
          </Link>
        </div>
      </main>
      <CtaBanner under="bg-white" />
      <Footer under="bg-[#269298]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
