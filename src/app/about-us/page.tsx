import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import TeamTeaser from "@/components/about/TeamTeaser";
import Funding from "@/components/about/Funding";
import { ogImage, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "About us – the Weekenders story and how we're funded",
  description:
    "Weekenders was created by the charity Now Foster to make foster care mainstream. Read our story, meet the team, see how the programme is funded and support young people in care with a donation.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    type: "website",
    siteName: "Weekenders by Now Foster",
    locale: "en_GB",
    images: [ogImage],
    url: "/about-us",
    title: "About Weekenders | Now Foster",
    description: "Making foster care mainstream, so more young people in care can thrive.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "About us", item: `${siteUrl}/about-us` },
  ],
};

export default function AboutUs() {
  return (
    <>
      <SiteHeader variant="solid" current="/about-us" />
      <main id="main">
        <Hero />
        <OurStory />
        <TeamTeaser />
        <Funding />
      </main>
      <CtaBanner under="bg-lilac" />
      <Footer under="bg-[#269298]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
