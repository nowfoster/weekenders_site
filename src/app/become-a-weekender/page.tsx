import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Intro from "@/components/weekender/Intro";
import AmyStory from "@/components/weekender/AmyStory";
import Checker from "@/components/weekender/Checker";
import Faqs from "@/components/weekender/Faqs";
import BecomeSteps from "@/components/weekender/BecomeSteps";
import { faqs, ogImage, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Become a Weekender – how weekend fostering works",
  description:
    "Find out how to become a Weekender foster carer: book a friendly intro chat, take the 5 minute readiness check, read answers to common questions and see the six steps to your first weekend.",
  alternates: { canonical: "/become-a-weekender" },
  openGraph: {
    type: "website",
    siteName: "Weekenders by Now Foster",
    locale: "en_GB",
    images: [ogImage],
    url: "/become-a-weekender",
    title: "Become a Weekender | Now Foster",
    description:
      "A quick, friendly call is the easiest way to see if weekend fostering could fit your life. No pressure and no commitment.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Become a Weekender", item: `${siteUrl}/become-a-weekender` },
    ],
  },
];

export default function BecomeAWeekender() {
  return (
    <>
      <SiteHeader variant="solid" current="/become-a-weekender" />
      <main id="main">
        <Intro />
        <AmyStory />
        <Checker />
        <Faqs />
        <BecomeSteps />
      </main>
      <Footer under="bg-mint-700" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
