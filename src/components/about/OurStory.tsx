import { links } from "@/content/site";
import { ourStory } from "@/content/about";

export default function OurStory() {
  return (
    <section className="bg-white" aria-labelledby="our-story-heading">
      <div className="container-site section-y flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-5 lg:w-[596px] lg:shrink">
          <p className="text-body-m font-bold tracking-[0.12em] text-brand uppercase">{ourStory.eyebrow}</p>
          <h2 id="our-story-heading" className="heading-1 pb-2">
            {ourStory.heading}
          </h2>
          <div className="flex flex-col gap-6 text-body-l">
            <p className="font-bold">
              Weekenders was created by{" "}
              <a href={links.nowFoster} className="underline hover:no-underline">
                Now Foster
              </a>
              , a charity on a mission to reimagine fostering.
            </p>
            {ourStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="flex flex-col gap-3 rounded-[24px] bg-mint p-6">
            <p className="text-body-l font-bold">{ourStory.regionsIntro}</p>
            <ul className="flex flex-wrap gap-3">
              {ourStory.regions.map((r) => (
                <li
                  key={r.name}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-body-m font-semibold text-brand"
                >
                  <img src={r.dot} alt="" width={12} height={12} className="size-3" />
                  {r.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative isolate flex min-h-[406px] w-full flex-col justify-end overflow-hidden rounded-[32px] p-6 sm:min-h-[560px] lg:h-[708px] lg:w-[595px] lg:shrink-0 lg:justify-start lg:p-10">
          <img
            src={ourStory.image}
            alt={ourStory.imageAlt}
            width={2200}
            height={1467}
            loading="lazy"
            className="absolute inset-0 -z-10 size-full object-cover object-[65%_50%] lg:object-center"
          />
          <div className="flex w-full max-w-[259px] flex-col gap-3 rounded-[32px] border border-white/80 bg-white/65 p-6 shadow-[0_30px_60px_-30px_rgba(22,64,69,0.3)] backdrop-blur-md">
            <span className="flex size-16 items-center justify-center rounded-full bg-teal-100">
              <img src="/images/about/icon-handshake.svg" alt="" width={32} height={32} className="size-8" />
            </span>
            <p className="flex flex-col gap-3">
              <span className="text-body-m font-bold tracking-[0.12em] uppercase">{ourStory.stat.label}</span>
              <span className="text-display-1 leading-[56px] font-bold text-brand">{ourStory.stat.figure}</span>
              <span className="text-body-l font-semibold text-brand">{ourStory.stat.caption}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
