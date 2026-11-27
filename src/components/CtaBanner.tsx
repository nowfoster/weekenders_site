import ButtonLink from "./ButtonLink";
import { links } from "@/content/site";

/**
 * "Could you be a Weekender?" panel that sits above the footer (Figma "Panel / Book a chat").
 * `under` is the colour behind the rounded top corners (the section above).
 */
export default function CtaBanner({ under = "bg-white" }: { under?: string }) {
  return (
    <div className={under}>
      <section
        aria-labelledby="cta-banner-heading"
        className="relative isolate overflow-hidden rounded-t-[24px] bg-[#269298] px-4 py-12 text-white sm:px-8 lg:px-28"
      >
        <img
          src="/images/green-spiral-cta.webp"
          alt=""
          aria-hidden
          width={484}
          height={485}
          loading="lazy"
          className="pointer-events-none absolute -top-[110px] -left-[60px] -z-10 size-[260px] object-cover sm:-top-[155px] sm:-left-[86px] sm:size-[484px]"
        />
        <img
          src="/images/green-spiral-cta.webp"
          alt=""
          aria-hidden
          width={469}
          height={469}
          loading="lazy"
          className="pointer-events-none absolute -right-[70px] -bottom-[110px] -z-10 size-[260px] rotate-180 object-cover sm:-right-[160px] sm:-bottom-[200px] sm:size-[469px] lg:bottom-auto lg:top-[31px] lg:right-[min(calc(50%_-_769px),_-49px)]"
        />
        <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-5">
            <p className="text-body-m font-bold tracking-[0.12em] uppercase">Your story starts here</p>
            <h2 id="cta-banner-heading" className="heading-1">
              Could you be a Weekender?
            </h2>
            <p className="text-body-l sm:text-body-xl">
              Have a relaxed chat with one of our team, by phone or video. No pressure and no commitment.
            </p>
          </div>
          <ButtonLink href={links.bookIntroChat} variant="light">
            Book an intro chat
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
