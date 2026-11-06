import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="solid" current="" />
      <main id="main" className="bg-mint">
        <div className="container-site flex flex-col items-start gap-7 pt-16 pb-28">
          <p className="text-body-m font-bold tracking-[0.12em] text-brand">404</p>
          <h1 className="heading-1">We couldn&apos;t find that page</h1>
          <p className="max-w-[606px] text-body-xl">It may have moved. Head back to the homepage to find out about weekend fostering.</p>
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </main>
      <Footer under="bg-mint" />
    </>
  );
}
