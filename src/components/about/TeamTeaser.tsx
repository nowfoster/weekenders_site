import ButtonLink from "../ButtonLink";
import { teamTeaser } from "@/content/about";

export default function TeamTeaser() {
  return (
    <div className="bg-white">
      <section className="overflow-hidden rounded-[24px] bg-mint" aria-labelledby="team-heading">
        <div className="container-site flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="contents lg:flex lg:w-[592px] lg:shrink lg:flex-col lg:gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-body-m font-bold tracking-[0.12em] text-brand uppercase">{teamTeaser.eyebrow}</p>
              <h2 id="team-heading" className="heading-1">
                {teamTeaser.heading}
              </h2>
              <p className="text-body-l sm:text-body-xl">{teamTeaser.body}</p>
            </div>
            {/* On phones the button sits below the photos (order-last) */}
            <div className="order-last lg:order-none">
              <ButtonLink href={teamTeaser.cta.href} className="w-full justify-between sm:w-auto">
                {teamTeaser.cta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 lg:w-[592px] lg:shrink-0">
            {teamTeaser.columns.map((column, i) => (
              <div key={i} className="flex flex-col gap-3 sm:gap-4">
                {column.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative overflow-hidden rounded-[24px]"
                    style={{ aspectRatio: photo.aspect }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="absolute max-w-none"
                      style={{
                        left: `${photo.crop.left}%`,
                        top: `${photo.crop.top}%`,
                        width: `${photo.crop.width}%`,
                        height: `${photo.crop.height}%`,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
