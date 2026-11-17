import FeaturedPost from "./FeaturedPost";
import PostItem from "./PostItem";
import PostList from "./PostList";
import IntroChatCard from "./IntroChatCard";
import { links } from "@/content/site";
import { featuredPost, latestPosts, postsPerPage } from "@/content/blog";

export default function BlogFeed() {
  return (
    <div className="container-site flex flex-col gap-14 pt-10 pb-12 sm:pt-14 xl:flex-row xl:items-start xl:gap-24">
      <div className="min-w-0 flex-1">
        <FeaturedPost post={featuredPost} />

        <section aria-labelledby="latest-posts-heading">
          <div className="flex items-center justify-between gap-4 border-b border-line-subtle pt-14 pb-4 sm:pt-16">
            <h2 id="latest-posts-heading" className="text-[28px] leading-9 font-bold tracking-[-0.022em] sm:text-h4 sm:font-semibold">
              Latest posts
            </h2>
            <p className="text-body-m text-ink-subtle">
              {latestPosts.length} {latestPosts.length === 1 ? "post" : "posts"}
            </p>
          </div>
          <PostList
            items={latestPosts.map((post) => <PostItem key={post.date + post.title} post={post} />)}
            perPage={postsPerPage}
            moreHref={links.blog}
          />
        </section>
      </div>

      <aside className="xl:sticky xl:top-8 xl:w-[352px] xl:shrink-0">
        <IntroChatCard />
      </aside>
    </div>
  );
}
