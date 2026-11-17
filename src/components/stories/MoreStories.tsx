import LoadMoreList from "./LoadMoreList";
import StoryCard from "./StoryCard";
import { stories, storiesPage, storiesPerPage } from "@/content/stories";

export default function MoreStories() {
  const { moreStories } = storiesPage;
  return (
    <div className="bg-white">
      <section aria-labelledby="more-stories-heading" className="rounded-t-[24px] bg-mint-50">
        <div className="container-site flex flex-col gap-12 py-16 lg:py-24">
          <div className="mx-auto flex max-w-[800px] flex-col gap-4 text-center">
            <h2 id="more-stories-heading" className="heading-1">
              {moreStories.title}
            </h2>
            <p className="text-body-l sm:text-body-xl">{moreStories.body}</p>
          </div>

          <LoadMoreList initial={storiesPerPage} label="Load more stories" className="grid gap-8 lg:grid-cols-2">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </LoadMoreList>
        </div>
      </section>
    </div>
  );
}
