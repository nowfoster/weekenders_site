import SiteHeader from "../SiteHeader";
import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";

export default function Hero() {
  return (
    <div className="bg-mint">
      <section className="relative isolate min-h-[640px] overflow-hidden rounded-b-[24px] bg-black lg:h-[810px]">
        <SiteHeader variant="overlay" current="/" />

        {/* Photo */}
        <img
          src="/images/hero-photo.webp"
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-[70%_30%] opacity-80 lg:object-[0%_33%]"
        />
        {/* Decorative green spiral, top-left */}
        <img
          src="/images/green-spiral.webp"
          alt=""
          aria-hidden
          width={708}
          height={708}
          className="pointer-events-none absolute top-[-191px] left-0 -z-10 size-[420px] lg:size-[708px]"
        />
        {/* Scrims: left-to-right and top fade */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(270deg,rgba(22,64,69,0)_0%,rgba(22,64,69,0.45)_45%,#164045_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[148px] bg-[linear-gradient(0deg,rgba(22,64,69,0)_0%,rgba(22,64,69,0.45)_45%,#164045_100%)]"
        />
        {/* Decorative yellow swoosh, bottom-right */}
        <img
          src="/images/yellow-swoosh.webp"
          alt=""
          aria-hidden
          width={379}
          height={379}
          className="pointer-events-none absolute top-[495px] left-[1189px] -z-10 hidden size-[379px] lg:block xl:left-auto xl:right-[-128px]"
        />

        <div className="container-site flex flex-col gap-8 pt-40 pb-16 text-white lg:pt-[233px]">
          <h1 className="max-w-[1100px] text-[44px] leading-[52px] font-bold tracking-[-0.022em] sm:text-[56px] sm:leading-[68px] lg:text-display-1">
            One weekend a month.
            <br />
            A lifetime of impact.
          </h1>
          <div className="flex flex-col gap-4">
            <p className="max-w-[546px] text-[20px] leading-[26px] font-semibold tracking-[-0.019em] sm:text-h4">
              Support a child or young person in care through fostering that fits around your life.
            </p>
            <p className="max-w-[520px] text-body-m">
              Currently in Greater London, Greater Manchester, Durham, and North Somerset and surrounding areas.
            </p>
          </div>
          <div>
            <ButtonLink href={links.bookIntroChat} variant="light" className="pl-4! pr-5!">
              Book an intro chat
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
