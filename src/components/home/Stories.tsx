import { SmartLink } from "../ButtonLink";
import { homeStories, storyHref } from "@/content/stories";

export default function Stories() {
  return (
    <div className="bg-white">
      <section id="stories" className="scroll-mt-6 rounded-b-[24px] bg-lilac-subtle" aria-labelledby="stories-heading">
        <div className="container-site section-y flex flex-col gap-12">
          <div className="flex max-w-[590px] flex-col gap-3">
            <h2 id="stories-heading" className="heading-1">
              Weekender Stories
            </h2>
            <p className="text-body-xl font-medium text-black">
              Hear from people who&apos;ve been where you are now, and what one weekend a month has meant to them
            </p>
          </div>

          <ul className="grid gap-8 lg:grid-cols-2 lg:gap-x-[29px]">
            {homeStories.map((story) => (
              <li key={story.slug} className="flex flex-col-reverse overflow-hidden rounded-[24px] bg-white sm:flex-row lg:flex-col-reverse min-[1360px]:flex-row">
                <article className="flex flex-col justify-between gap-5 p-8 sm:w-[311px] sm:shrink-0 lg:w-auto lg:flex-1 min-[1360px]:h-[452px] min-[1360px]:w-[311px] min-[1360px]:flex-none">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <p className="text-body-s">{story.name}</p>
                      <img src="/images/icons/icon-quote.svg" alt="" aria-hidden width={61.5} height={42.6} className="mr-[5px]" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <blockquote className="text-h5 font-semibold min-[1360px]:flex min-[1360px]:min-h-[96px] min-[1360px]:items-end">
                        <p>{story.quote}</p>
                      </blockquote>
                      <p className="text-body-m text-ink-subtle">{story.summary}</p>
                    </div>
                  </div>
                  <SmartLink
                    href={storyHref(story)}
                    className="inline-flex h-11 w-[140px] items-center justify-center rounded-full bg-brand text-body-m font-bold text-white hover:brightness-110"
                    aria-label={`Read ${story.name}'s story`}
                  >
                    Read story
                  </SmartLink>
                </article>
                <div className="relative h-[280px] sm:h-auto sm:min-h-[452px] sm:flex-1 lg:h-[280px] lg:min-h-0 lg:flex-none min-[1360px]:h-auto min-[1360px]:min-h-[452px] min-[1360px]:flex-1">
                  <img
                    src={story.image?.src}
                    alt={story.image?.alt ?? ""}
                    width={600}
                    height={900}
                    loading="lazy"
                    className={`absolute inset-0 size-full object-cover ${story.image?.flip ? "-scale-x-100" : ""}`}
                    style={{ objectPosition: story.image?.position }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
