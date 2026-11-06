/**
 * "Our partners" — the design currently shows 12 placeholder circles.
 * Swap the placeholder image for partner logos when they're available.
 */
export default function Partners() {
  return (
    <section className="bg-white" aria-labelledby="partners-heading">
      <div className="container-site section-y flex flex-col items-center gap-8">
        <h2 id="partners-heading" className="heading-1 text-center">
          Our partners
        </h2>
        <img
          src="/images/icons/partners-placeholder.svg"
          alt=""
          aria-hidden
          width={1216}
          height={387}
          loading="lazy"
          className="h-auto w-full max-w-[1216px] lg:ml-4"
        />
      </div>
    </section>
  );
}
