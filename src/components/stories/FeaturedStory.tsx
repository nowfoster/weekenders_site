import AmyFeature from "./AmyFeature";

export default function FeaturedStory() {
  return (
    <section aria-labelledby="featured-story-heading" className="bg-white">
      <div className="container-site section-y flex flex-col gap-10 lg:gap-16">
        <h2 id="featured-story-heading" className="heading-1 text-center">
          Featured story
        </h2>
        <AmyFeature headingId="amy-heading" headingLevel="h3" />
      </div>
    </section>
  );
}
