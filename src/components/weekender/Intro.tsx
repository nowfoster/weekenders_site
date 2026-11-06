import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";

export default function Intro() {
  return (
    <>
      <section className="bg-mint" aria-labelledby="page-heading">
        <div className="container-site flex flex-col gap-7 pt-12 pb-16 lg:pt-20 lg:pb-[108px]">
          <h1 id="page-heading" className="heading-1 text-black">
            Let&apos;s start with a conversation
          </h1>
          <p className="max-w-[606px] text-body-xl font-medium">
            A quick, friendly call is the easiest way to see if weekend fostering could fit your life. We&apos;ll talk you
            through how Weekenders works and answer any questions, with no pressure and no commitment.
          </p>
          <div>
            <ButtonLink href={links.bookIntroChat}>Book an intro chat</ButtonLink>
          </div>
        </div>
      </section>

      {/* Full-bleed photo band */}
      <div className="bg-lilac-subtle">
        <div className="relative h-[320px] overflow-hidden rounded-b-[24px] sm:h-[440px] lg:h-[588px]">
          <img
            src="/images/conversation-photo.webp"
            alt="A woman smiling while chatting on the phone at home"
            width={2400}
            height={1600}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[70%_0%] lg:object-top"
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
