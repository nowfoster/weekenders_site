import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import StoriesHero from "@/components/stories/StoriesHero";
import FeaturedStory from "@/components/stories/FeaturedStory";
import MoreStories from "@/components/stories/MoreStories";
import { ogImage, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Weekender stories – real experiences of weekend fostering",
  description:
    "Hear from Weekenders and young people about what one weekend a month of fostering has meant to them. Every story is different, but they all started with a simple chat.",
  alternates: { canonical: "/stories" },
  openGraph: {
    type: "website",
    siteName: "Weekenders by Now Foster",
    locale: "en_GB",
    images: [ogImage],
    url: "/stories",
    title: "Weekender stories | Now Foster",
    description: "One weekend a month. Hundreds of stories. Hear what weekend fostering has meant to carers and young people.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Stories", item: `${siteUrl}/stories` },
  ],
};

export default function StoriesPage() {
  return (
    <>
      <SiteHeader variant="solid" current="/stories" />
      <main id="main">
        <StoriesHero />
        <FeaturedStory />
        <MoreStories />
      </main>
      <CtaBanner under="bg-mint-50" />
      <Footer under="bg-[#269298]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
