import Link from "next/link";
import { storyHref, type Story } from "@/content/stories";

const readStory =
  "inline-flex h-11 w-[140px] shrink-0 items-center justify-center rounded-full bg-brand text-body-m font-bold text-white hover:brightness-110";

/** Story card for the /stories grid: copy beside a photo, or text only when the story has no photo. */
export default function StoryCard({ story }: { story: Story }) {
  const { image } = story;

  if (!image) {
    return (
      <article className="flex h-full flex-col justify-between gap-8 rounded-[24px] bg-white p-8 sm:p-10 lg:h-[452px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-body-m font-semibold">{story.name}</h3>
            <img src="/images/icons/icon-quote.svg" alt="" aria-hidden width={61.5} height={42.6} className="mr-[5px]" />
          </div>
          <blockquote className="text-h5 font-semibold">
            <p>{story.quote}</p>
          </blockquote>
          <p className="text-body-l opacity-80">{story.summary}</p>
        </div>
        <Link href={storyHref(story)} className={readStory} aria-label={`Read ${story.name}'s story`}>
          Read story
        </Link>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col-reverse overflow-hidden rounded-[24px] bg-white sm:flex-row">
      <div className="flex flex-col justify-between gap-5 p-8 sm:w-[311px] sm:shrink-0 lg:h-[452px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-body-s">{story.name}</h3>
            <img src="/images/icons/icon-quote.svg" alt="" aria-hidden width={61.5} height={42.6} className="mr-[5px]" />
          </div>
          <div className="flex flex-col gap-5">
            <blockquote className="text-h5 font-semibold lg:flex lg:min-h-[96px] lg:items-end">
              <p>{story.quote}</p>
            </blockquote>
            <p className="text-body-m text-ink-subtle">{story.summary}</p>
          </div>
        </div>
        <Link href={storyHref(story)} className={readStory} aria-label={`Read ${story.name}'s story`}>
          Read story
        </Link>
      </div>
      <div className="relative h-[280px] sm:h-auto sm:min-h-[452px] sm:flex-1">
        <img
          src={image.src}
          alt={image.alt}
          width={600}
          height={900}
          loading="lazy"
          className={`absolute inset-0 size-full object-cover ${image.flip ? "-scale-x-100" : ""}`}
          style={{ objectPosition: image.position }}
        />
      </div>
    </article>
  );
}
