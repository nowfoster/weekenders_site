import Link from "next/link";
import type { BlogPost } from "@/content/blog";

/**
 * One row of "Latest posts". On phones the thumbnail sits beside the title
 * with the excerpt and date running underneath; from sm up it sits to the
 * right of the whole body. The title link stretches over the row.
 */
export default function PostItem({ post }: { post: BlogPost }) {
  return (
    <article className="group relative grid grid-cols-[1fr_80px] gap-x-4 gap-y-3 border-b border-line-subtle py-6 sm:grid-cols-[1fr_176px] sm:gap-x-10 sm:py-8">
      <h3 className="col-start-1 row-start-1 text-[20px] leading-[26px] font-bold tracking-[-0.017em] sm:text-h4 sm:font-semibold">
        <Link href={post.href} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
          {post.title}
        </Link>
      </h3>
      <p className="col-span-2 row-start-2 mr-20 text-body-l text-ink sm:col-span-1 sm:text-ink-subtle sm:mr-0 sm:line-clamp-2">
        {post.excerpt}
      </p>
      <time dateTime={post.date} className="col-span-2 row-start-3 text-body-s text-ink-subtle sm:col-span-1">
        {post.displayDate}
      </time>
      <img
        src={post.image}
        alt=""
        width={720}
        height={480}
        loading="lazy"
        className="col-start-2 row-start-1 size-20 rounded-[12px] object-cover sm:row-span-3 sm:h-[118px] sm:w-[176px] sm:self-center"
      />
    </article>
  );
}
