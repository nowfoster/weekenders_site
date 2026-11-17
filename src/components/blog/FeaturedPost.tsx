import Link from "next/link";
import type { BlogPost } from "@/content/blog";

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-[24px] bg-lilac-subtle sm:flex-row">
      <div className="relative h-[256px] sm:h-auto sm:min-h-[340px] sm:w-[45%] sm:shrink-0 xl:w-[344px]">
        <img
          src={post.image}
          alt={post.imageAlt}
          width={1400}
          height={933}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:p-10">
        <p className="text-body-s font-bold tracking-[0.12em] text-ink-subtle uppercase">Feature post</p>
        <h2 className="text-h4 font-bold sm:text-h3 sm:font-semibold">
          <Link
            href={post.href}
            className="after:absolute after:inset-0 after:rounded-[24px] hover:underline hover:underline-offset-4"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-body-l">{post.excerpt}</p>
        <time dateTime={post.date} className="text-body-s text-ink-subtle">
          {post.displayDate}
        </time>
      </div>
    </article>
  );
}
