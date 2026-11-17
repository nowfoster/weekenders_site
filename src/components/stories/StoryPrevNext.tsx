import Link from "next/link";
import { storyHref, type Story } from "@/content/stories";

function Thumbnail({ story }: { story: Story }) {
  if (story.image) {
    return (
      <img
        src={story.image.src}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        className={`size-16 shrink-0 rounded-[16px] object-cover ${story.image.flip ? "-scale-x-100" : ""}`}
        style={{ objectPosition: story.image.position }}
      />
    );
  }
  return (
    <span aria-hidden className="flex size-16 shrink-0 items-center justify-center rounded-[16px] bg-mint-500">
      <img src="/images/stories/icon-quote-brand.svg" alt="" width={42} height={29} className="rotate-180" />
    </span>
  );
}

function StoryLink({ story, direction }: { story: Story; direction: "previous" | "next" }) {
  const next = direction === "next";
  return (
    <Link
      href={storyHref(story)}
      rel={next ? "next" : "prev"}
      className={`group flex flex-1 items-center gap-6 py-8 lg:py-10 ${
        next ? "flex-row-reverse text-right lg:pl-10" : "border-b border-line lg:border-r lg:border-b-0 lg:pr-10"
      }`}
    >
      <Thumbnail story={story} />
      <span className={`flex min-w-0 flex-1 flex-col gap-1.5 ${next ? "items-end" : "items-start"}`}>
        <span className="flex items-center gap-2 text-body-m font-bold tracking-[0.12em] text-brand uppercase">
          {!next && <img src="/images/stories/icon-arrow-left.svg" alt="" width={16} height={16} />}
          {next ? "Next story" : "Previous story"}
          {next && <img src="/images/stories/icon-arrow-right.svg" alt="" width={16} height={16} />}
        </span>
        <span className="text-body-m font-semibold text-ink-subtle">{story.name}</span>
        <span className="line-clamp-2 text-h5 font-semibold group-hover:underline group-hover:underline-offset-4">
          {story.quote}
        </span>
      </span>
    </Link>
  );
}

export default function StoryPrevNext({ previous, next }: { previous: Story; next: Story }) {
  return (
    <nav aria-label="More stories" className="border-y border-line">
      <div className="container-site flex flex-col lg:flex-row">
        <StoryLink story={previous} direction="previous" />
        <StoryLink story={next} direction="next" />
      </div>
    </nav>
  );
}
