import ButtonLink from "../ButtonLink";
import ShareButton from "./ShareButton";
import { links } from "@/content/site";
import { getArticle, type Story } from "@/content/stories";

export default function StoryArticle({ story }: { story: Story }) {
  const { lead, blocks } = getArticle(story);
  return (
    <div className="container-site flex flex-col gap-12 py-12 lg:flex-row lg:items-start lg:gap-24 lg:py-24">
      <article className="flex min-w-0 flex-1 flex-col gap-6">
        <p className="text-[20px] leading-[30px] font-medium tracking-[-0.01em] sm:text-[22px] sm:leading-[34px]">{lead}</p>
        {blocks.map((block, i) => {
          if (block.type === "heading") {
            return (
              <h2 key={i} className="pt-6 text-h4 font-semibold sm:text-h3">
                {block.text}
              </h2>
            );
          }
          if (block.type === "quote") {
            return (
              <figure key={i} className="flex flex-col gap-4 rounded-[24px] bg-lilac-subtle p-6 sm:p-8">
                <img
                  src="/images/stories/icon-quote-pull.svg"
                  alt=""
                  aria-hidden
                  width={42}
                  height={29}
                  className="my-[9.6px] ml-[5px] rotate-180"
                />
                <blockquote className="text-h5 font-semibold sm:text-h4">
                  <p>{block.text}</p>
                </blockquote>
                <figcaption className="text-body-m font-semibold text-ink-subtle">{block.by}</figcaption>
              </figure>
            );
          }
          return (
            <p key={i} className="text-body-l sm:text-body-xl">
              {block.text}
            </p>
          );
        })}
      </article>

      <aside aria-label="Get involved" className="flex flex-col gap-6 lg:w-[352px] lg:shrink-0">
        <div className="flex flex-col items-start gap-4 rounded-[24px] bg-brand p-8 text-white">
          <h2 className="text-h4 font-semibold">Inspired by this story?</h2>
          <p className="text-body-l">Find out what one weekend a month could look like for you.</p>
          <ButtonLink href={links.bookIntroChat} variant="light" className="mt-2 w-full max-w-[288px] justify-between">
            Book an intro chat
          </ButtonLink>
        </div>
        <ShareButton title={`${story.name}'s story | Weekenders by Now Foster`} />
      </aside>
    </div>
  );
}
