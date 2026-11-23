import Link from "next/link";
import ButtonLink from "../ButtonLink";
import ShareButton from "../stories/ShareButton";
import { links } from "@/content/site";
import { blogSidebar, type BlogPost } from "@/content/blog";

function Dot() {
  return <span aria-hidden className="size-1 shrink-0 rounded-full bg-line" />;
}

/** Mint header with back link, title, date/read time and the post's lead image (same pattern as story pages). */
export function PostHeader({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white">
      <header className="rounded-b-[24px] bg-mint">
        <div className="container-site flex flex-col gap-8 pt-6 pb-10 lg:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start py-2 text-body-m font-semibold text-brand hover:underline hover:underline-offset-4"
          >
            <img src="/images/stories/icon-arrow-left.svg" alt="" width={16} height={16} />
            Back to all posts
          </Link>

          <div className="flex flex-col gap-5">
            <p className="text-body-m font-bold tracking-[0.12em] text-brand uppercase">Blog</p>
            <h1 className="max-w-[900px] text-[32px] leading-[40px] font-bold tracking-[-0.022em] sm:text-display-3">
              {post.title}
            </h1>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-body-m">
              <span className="font-semibold">Now Foster</span>
              <Dot />
              <time dateTime={post.date} className="text-ink-subtle">
                {post.displayDate}
              </time>
              <Dot />
              <span className="text-ink-subtle">{post.readMinutes} min read</span>
            </p>
          </div>

          {post.headerImage && (
            // Medium images vary in shape (photos, banners), so show them uncropped.
            <img
              src={post.headerImage}
              alt={post.imageAlt}
              width={1400}
              height={788}
              fetchPriority="high"
              className="h-auto max-h-[640px] w-full rounded-[24px] object-cover"
            />
          )}
        </div>
      </header>
    </div>
  );
}

export function PostBody({ post }: { post: BlogPost }) {
  return (
    <div className="container-site flex flex-col gap-12 py-12 lg:flex-row lg:items-start lg:gap-24 lg:py-24">
      <article className="min-w-0 flex-1">
        {/* Allow-listed HTML produced by scripts/fetch-medium.mjs from Now Foster's own Medium feed */}
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <p className="mt-12 border-t border-line pt-6 text-body-m text-ink-subtle">
          First published on{" "}
          <a href={post.mediumUrl} className="font-semibold text-brand underline underline-offset-4">
            Medium
          </a>
          .
        </p>
      </article>

      <aside aria-label="Get involved" className="flex flex-col gap-6 lg:sticky lg:top-8 lg:w-[352px] lg:shrink-0">
        <div className="flex flex-col items-start gap-4 rounded-[24px] bg-lilac-subtle p-8">
          <h2 className="text-h5 font-semibold">{blogSidebar.title}</h2>
          <p className="text-body-l">{blogSidebar.body}</p>
          <ButtonLink href={links.bookIntroChat} className="mt-2 w-full max-w-[288px] justify-between">
            Book an intro chat
          </ButtonLink>
        </div>
        <ShareButton title={`${post.title} | Weekenders by Now Foster`} label="Share this post" />
      </aside>
    </div>
  );
}

/** Newer / older post links under the article. */
export function PostPrevNext({ newer, older }: { newer?: BlogPost; older?: BlogPost }) {
  if (!newer && !older) return null;
  const item = (post: BlogPost, label: string, align: "left" | "right") => (
    <Link
      href={post.href}
      className={`group flex flex-1 flex-col gap-2 px-4 py-8 sm:px-8 lg:px-12 xl:px-[110px] ${align === "right" ? "sm:items-end sm:text-right" : ""}`}
    >
      <span className="text-body-s font-bold tracking-[0.12em] text-brand uppercase">{label}</span>
      <span className="text-h5 font-semibold group-hover:underline group-hover:underline-offset-4">{post.title}</span>
    </Link>
  );
  return (
    <nav aria-label="More posts" className="flex flex-col divide-y divide-line border-y border-line sm:flex-row sm:divide-x sm:divide-y-0">
      {newer ? item(newer, "← Newer post", "left") : <span className="hidden flex-1 sm:block" />}
      {older ? item(older, "Older post →", "right") : <span className="hidden flex-1 sm:block" />}
    </nav>
  );
}
