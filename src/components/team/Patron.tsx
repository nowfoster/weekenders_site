import { patron } from "@/content/team";

export default function Patron() {
  return (
    <div className="bg-white">
      <section
        aria-labelledby="patron-heading"
        className="rounded-[24px] bg-lilac-subtle lg:rounded-b-none"
      >
        <div className="container-site section-y flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 lg:py-24">
          <div className="relative flex h-[400px] flex-col justify-end overflow-hidden rounded-[32px] p-4 sm:h-[590px] sm:p-6 lg:w-[480px] lg:shrink-0">
            <img
              src={patron.image.src}
              alt={patron.image.alt}
              width={patron.image.width}
              height={patron.image.height}
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-[50%_20%]"
            />
            <div
              className="relative flex flex-col gap-1 rounded-[24px] bg-white px-6 py-5 shadow-[0px_30px_60px_-30px_rgba(22,64,69,0.3)]"
              aria-hidden
            >
              <p className="text-h5 font-semibold text-brand">{patron.name}</p>
              <p className="text-body-m text-ink-subtle">{patron.role}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <h2 id="patron-heading" className="heading-1">
              {patron.title}
            </h2>
            <p className="text-h5 font-semibold sm:text-h3">{patron.name}</p>
            <div className="flex flex-col gap-6 text-body-l">
              {patron.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
