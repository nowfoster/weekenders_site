import { SmartLink } from "../ButtonLink";
import { stories } from "@/content/site";

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
            {stories.map((story) => (
              <li key={story.name} className="flex flex-col-reverse overflow-hidden rounded-[24px] bg-white sm:flex-row">
                <article className="flex flex-col justify-between gap-5 p-8 sm:w-[311px] sm:shrink-0 lg:h-[452px]">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <p className="text-body-s">{story.name}</p>
                      <img src="/images/icons/icon-quote.svg" alt="" aria-hidden width={61.5} height={42.6} className="mr-[5px]" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <blockquote className="text-h5 font-semibold lg:min-h-[96px] lg:flex lg:items-end">
                        <p>{story.quote}</p>
                      </blockquote>
                      <p className="text-body-m text-ink-subtle">{story.summary}</p>
                    </div>
                  </div>
                  <SmartLink
                    href={story.href}
                    className="inline-flex h-11 w-[140px] items-center justify-center rounded-full bg-brand text-body-m font-bold text-white hover:brightness-110"
                    aria-label={`Read ${story.name}'s story`}
                  >
                    Read story
                  </SmartLink>
                </article>
                <div className="relative h-[280px] sm:h-auto sm:min-h-[452px] sm:flex-1">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    width={600}
                    height={900}
                    loading="lazy"
                    className={`absolute inset-0 size-full object-cover ${story.flip ? "-scale-x-100" : ""}`}
                    style={{ objectPosition: story.imagePosition }}
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
