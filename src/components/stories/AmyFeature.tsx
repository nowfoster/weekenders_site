import ButtonLink, { SmartLink } from "../ButtonLink";
import { amyStory } from "@/content/stories";

/**
 * Amy's video story: video thumbnail beside the quote and summary.
 * Used on /become-a-weekender (inside a lilac panel) and as the featured story on /stories.
 */
export default function AmyFeature({
  headingId,
  headingLevel = "h2",
  className = "",
}: {
  headingId: string;
  headingLevel?: "h2" | "h3";
  className?: string;
}) {
  const Heading = headingLevel;
  return (
    <div className={`flex flex-col gap-8 lg:flex-row lg:gap-[34px] ${className}`}>
      <SmartLink
        href={amyStory.href}
        aria-label="Watch Amy's story"
        className="group relative block aspect-[593/459] w-full overflow-hidden rounded-[24px] lg:w-1/2 lg:max-w-[593px] lg:shrink-0"
      >
        <img
          src={amyStory.image.src}
          alt={amyStory.image.alt}
          width={1200}
          height={1800}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-[50%_37%]"
        />
        <span className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
          <img src="/images/icons/icon-play.svg" alt="" width={23} height={23} className="translate-x-[3px]" />
        </span>
      </SmartLink>

      <div className="flex min-w-0 flex-col items-start gap-6 lg:max-w-[591px] lg:flex-1">
        <div className="flex h-[71px] w-full items-center justify-between">
          <p className="text-body-m">{amyStory.label}</p>
          <img src="/images/icons/icon-quote-large.svg" alt="" aria-hidden width={61.5} height={42.6} className="mr-[2px]" />
        </div>
        <div className="flex flex-col gap-8">
          <Heading id={headingId} className="heading-2">
            {amyStory.title}
          </Heading>
          <p className="text-body-xl">{amyStory.body}</p>
        </div>
        <ButtonLink href={amyStory.href} variant="lilac">
          {amyStory.cta}
        </ButtonLink>
      </div>
    </div>
  );
}
