import DonateWidget from "./DonateWidget";
import { aboutHero } from "@/content/about";

export default function Hero() {
  return (
    <>
      <section className="bg-mint" aria-labelledby="page-heading">
        <div className="container-site relative flex flex-col gap-8 pt-6 pb-12 sm:pt-12 lg:pt-20 xl:pb-20">
          <h1
            id="page-heading"
            className="text-[36px] leading-[44px] font-bold tracking-[-0.022em] sm:text-display-3 xl:max-w-[min(729px,calc(100%-432px))]"
          >
            {aboutHero.heading}
          </h1>
          {/* Below xl the widget sits under the headline; on wide screens it floats over the hero and photo. */}
          <div className="relative z-10 w-full max-w-[400px] self-center sm:self-start xl:absolute xl:top-20 xl:right-[110px] xl:w-[400px]">
            <DonateWidget />
          </div>
        </div>
      </section>

      {/* Full-bleed photo band */}
      <div className="bg-white">
        <div className="relative h-[320px] overflow-hidden rounded-b-[24px] sm:h-[440px] lg:h-[588px]">
          <img
            src={aboutHero.image}
            alt={aboutHero.imageAlt}
            width={2880}
            height={1919}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-top"
          />
          <img
            src="/images/purple-spiral.webp"
            alt=""
            aria-hidden
            width={450}
            height={450}
            className="pointer-events-none absolute top-[-114px] left-0 size-[260px] sm:size-[450px]"
          />
          <img
            src="/images/yellow-swoosh.webp"
            alt=""
            aria-hidden
            width={418}
            height={418}
            className="pointer-events-none absolute top-[40%] right-[-100px] size-[240px] sm:size-[418px] lg:top-[234px] lg:right-auto lg:left-[calc(50%+404px)]"
          />
        </div>
      </div>
    </>
  );
}
