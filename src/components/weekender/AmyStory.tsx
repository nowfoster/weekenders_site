import ButtonLink, { SmartLink } from "../ButtonLink";
import { links } from "@/content/site";

export default function AmyStory() {
  return (
    <div className="bg-white">
      <section className="rounded-b-[24px] bg-lilac-subtle" aria-labelledby="amy-heading">
        <div className="container-site flex flex-col gap-8 py-16 lg:flex-row lg:gap-[34px] lg:pt-[164px] lg:pb-[126px]">
          <SmartLink
            href={links.amyStory}
            aria-label="Watch Amy's story"
            className="group relative block aspect-[593/459] w-full overflow-hidden rounded-[24px] lg:w-[593px] lg:shrink-0"
          >
            <img
              src="/images/amy-video.webp"
              alt="Amy, smiling, sitting at a laptop at home"
              width={1200}
              height={1800}
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-[50%_37%]"
            />
            <span className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <img src="/images/icons/icon-play.svg" alt="" width={23} height={23} className="translate-x-[3px]" />
            </span>
          </SmartLink>

          <div className="flex flex-col items-start gap-6 lg:w-[591px]">
            <div className="flex h-[71px] w-full items-center justify-between">
              <p className="text-body-m">Amy&apos;s story</p>
              <img src="/images/icons/icon-quote-large.svg" alt="" aria-hidden width={61.5} height={42.6} className="mr-[2px]" />
            </div>
            <div className="flex flex-col gap-8">
              <h2 id="amy-heading" className="heading-2">
                My weekend fosterer saved my life
              </h2>
              <p className="text-body-xl">
                When Jade was 14, life at home was really hard. Every other weekend she stayed with Sue, and for those two days
                she could finally breathe. Knowing she had somewhere safe to go, with people who really wanted her, kept her
                going when nothing else did.
              </p>
            </div>
            <ButtonLink href={links.amyStory} variant="lilac">
              Watch Amy&apos;s full story
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
