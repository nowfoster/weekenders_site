import Link from "next/link";
import type { Story } from "@/content/stories";

function Dot() {
  return <span aria-hidden className="size-1 shrink-0 rounded-full bg-line" />;
}

export default function StoryHeader({ story }: { story: Story }) {
  const meta = [story.weekenderSince && `Weekender since ${story.weekenderSince}`, story.readTime].filter(Boolean) as string[];
  return (
    <div className="bg-white">
      <header className="rounded-b-[24px] bg-mint">
        <div className="container-site flex flex-col gap-8 pt-6 pb-10 lg:pb-16">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 self-start py-2 text-body-m font-semibold text-brand hover:underline hover:underline-offset-4"
          >
            <img src="/images/stories/icon-arrow-left.svg" alt="" width={16} height={16} />
            Back to all stories
          </Link>

          <div className="flex flex-col gap-5">
            <p className="text-body-m font-bold tracking-[0.12em] text-brand uppercase">Weekender story</p>
            <h1 className="max-w-[801px] text-[32px] leading-[40px] font-bold tracking-[-0.022em] sm:text-display-3">
              {story.quote}
            </h1>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-body-m">
              <span className="font-semibold">{story.name}</span>
              {meta.map((m) => (
                <span key={m} className="contents">
                  <Dot />
                  <span className="text-ink-subtle">{m}</span>
                </span>
              ))}
            </p>
          </div>

          {story.headerImage && (
            <div className="relative h-[240px] overflow-hidden rounded-[24px] sm:h-[400px] lg:h-[560px]">
              <img
                src={story.headerImage.src}
                alt={story.headerImage.alt}
                width={2432}
                height={1621}
                fetchPriority="high"
                className="absolute inset-0 size-full object-cover"
                style={{ objectPosition: story.headerImage.position }}
              />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
