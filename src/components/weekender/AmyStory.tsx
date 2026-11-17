import AmyFeature from "../stories/AmyFeature";

export default function AmyStory() {
  return (
    <div className="bg-white">
      <section className="rounded-b-[24px] bg-lilac-subtle" aria-labelledby="amy-heading">
        <AmyFeature headingId="amy-heading" className="container-site py-16 lg:pt-[164px] lg:pb-[126px]" />
      </section>
    </div>
  );
}
