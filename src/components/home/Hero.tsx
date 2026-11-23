import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";

export default function Hero() {
  return (
    <div className="bg-mint">
      <section className="relative isolate min-h-[540px] overflow-hidden rounded-b-[24px] bg-black lg:h-[810px]">
        {/* Photo */}
        <img
          src="/images/hero-photo.webp"
          alt=""
          width={2400}
          height={1350}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full max-w-none object-cover object-[75%_50%] opacity-80 lg:-top-[7.9%] lg:-left-[8.5%] lg:h-[125.5%] lg:w-[125.5%]"
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

        <div className="container-site flex flex-col gap-6 pt-12 pb-10 text-white sm:gap-8 sm:pt-24 sm:pb-16 lg:pt-[233px]">
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
              Currently welcoming Weekenders across North London, Greater Manchester, North East England and South West England.
            </p>
          </div>
          <div>
            <ButtonLink href={links.bookIntroChat} variant="light">
              Book an intro chat
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
