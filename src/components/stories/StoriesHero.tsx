import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";
import { storiesPage } from "@/content/stories";

export default function StoriesHero() {
  const { hero } = storiesPage;
  return (
    <section aria-labelledby="stories-hero-heading" className="bg-white">
      <div className="bg-mint">
        <div className="container-site flex flex-col items-start gap-7 pt-12 pb-16 lg:pt-20 lg:pb-[108px]">
          <h1
            id="stories-hero-heading"
            className="text-[36px] leading-[44px] font-bold tracking-[-0.022em] text-black sm:text-display-3"
          >
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>
          <p className="max-w-[606px] text-body-l font-medium sm:text-body-xl">{hero.body}</p>
          <ButtonLink href={links.bookIntroChat}>Book an intro chat</ButtonLink>
        </div>
      </div>

      <div className="relative h-[280px] overflow-hidden rounded-b-[24px] sm:h-[420px] lg:h-[588px]">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          width={2880}
          height={1920}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-[50%_45%]"
        />
        <img
          src="/images/purple-spiral.webp"
          alt=""
          aria-hidden
          width={450}
          height={450}
          className="pointer-events-none absolute -top-[60px] left-0 size-[220px] object-cover sm:size-[320px] lg:-top-[114px] lg:size-[450px]"
        />
        <img
          src="/images/yellow-swoosh.webp"
          alt=""
          aria-hidden
          width={418}
          height={418}
          className="pointer-events-none absolute top-[55%] left-[calc(100%-110px)] size-[200px] object-cover sm:size-[300px] lg:top-[234px] lg:left-[calc(50%+404px)] lg:size-[418px]"
        />
      </div>
    </section>
  );
}
