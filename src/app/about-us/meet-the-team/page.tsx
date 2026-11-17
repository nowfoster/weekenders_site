import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import TeamHero from "@/components/team/TeamHero";
import WeekendersTeam from "@/components/team/WeekendersTeam";
import JourneyGuides from "@/components/team/JourneyGuides";
import Patron from "@/components/team/Patron";
import Trustees from "@/components/team/Trustees";
import { ogImage, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Meet the team",
  description:
    "Meet the people behind Weekenders: the Weekenders team and Journey Guides who support you from your first call, our patron Sir John Timpson CBE, and the Now Foster trustees.",
  alternates: { canonical: "/about-us/meet-the-team" },
  openGraph: {
    type: "website",
    siteName: "Weekenders by Now Foster",
    locale: "en_GB",
    images: [ogImage],
    url: "/about-us/meet-the-team",
    title: "Meet the Weekenders team | Now Foster",
    description:
      "From the team who welcome you on your very first call, to the patron and trustees who keep us on course – meet the people behind Weekenders.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "About us", item: `${siteUrl}/about-us` },
    { "@type": "ListItem", position: 3, name: "Meet the team", item: `${siteUrl}/about-us/meet-the-team` },
  ],
};

export default function MeetTheTeam() {
  return (
    <>
      <SiteHeader variant="solid" current="/about-us/meet-the-team" />
      <main id="main">
        <TeamHero />
        <WeekendersTeam />
        <JourneyGuides />
        <Patron />
        <Trustees />
      </main>
      <CtaBanner under="bg-white" />
      <Footer under="bg-[#269298]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
