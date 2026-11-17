import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import HowItWorks from "@/components/home/HowItWorks";
import Stories from "@/components/home/Stories";
import Impact from "@/components/home/Impact";
import Reach from "@/components/home/Reach";
import Partners from "@/components/home/Partners";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import { ogImage } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Weekenders – foster one weekend a month | Now Foster" },
  description:
    "One weekend a month. A lifetime of impact. Weekenders lets you support a child or young person in care through fostering that fits around your life. Book a free, no-pressure intro chat.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Weekenders by Now Foster",
    locale: "en_GB",
    images: [ogImage],
    url: "/",
    title: "Weekenders – one weekend a month, a lifetime of impact",
    description:
      "Support a child or young person in care through fostering that fits around your life. Now welcoming Weekenders across North London, Greater Manchester, North East England and South West England.",
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader variant="solid" current="/" />
      <main id="main">
        <Hero />
        <About />
        <HowItWorks />
        <Stories />
        <Impact />
        <Reach />
        <Partners />
      </main>
      <CtaBanner under="bg-white" />
      <Footer under="bg-[#269298]" />
    </>
  );
}
