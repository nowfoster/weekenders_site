import Carousel from "./Carousel";
import PersonPhoto from "./PersonPhoto";
import { trustees } from "@/content/team";
import { links, site } from "@/content/site";

export default function Trustees() {
  return (
    <section aria-labelledby="trustees-heading" className="overflow-x-clip bg-white">
      <div className="container-site flex flex-col gap-12 py-16 lg:py-20">
        <div className="lg:-mr-[110px]">
          <Carousel
            label="Trustees"
            intro={
              <div className="flex flex-col gap-5">
                <p className="text-body-m font-bold tracking-[0.12em] text-brand uppercase">{trustees.eyebrow}</p>
                <h2 id="trustees-heading" className="heading-1">
                  {trustees.title}
                </h2>
                <div className="flex flex-col gap-7 text-body-l sm:text-body-xl">
                  {trustees.intro.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
              </div>
            }
          >
            {trustees.people.map((t) => (
              <article
                key={t.name}
                className="flex w-full flex-col overflow-hidden rounded-[24px] border border-line bg-white"
              >
                <PersonPhoto image={t.image} name={t.name} className="h-[280px] shrink-0 sm:h-[320px]" />
                <div className="flex min-h-[190px] flex-1 flex-col gap-1 p-6">
                  <h3 className="text-body-l font-semibold">{t.name}</h3>
                  <p className="text-body-m text-ink-subtle">{t.role}</p>
                  <p className="pt-2 text-body-m">{t.bio}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>

        <p className="flex flex-col gap-2 rounded-[24px] bg-mint px-6 py-5 text-body-m sm:px-8 sm:py-6 sm:text-body-l lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-1">
          <span>Now Foster is a Registered Charity in England and Wales, number {site.charityNumber}.</span>
          <a
            href={links.charityRegister}
            className="inline-flex items-center gap-1.5 font-semibold text-[#0a6b71] hover:underline"
          >
            View on the Charity Commission register
            <img src="/images/team/icon-arrow-up-right.svg" alt="" aria-hidden width={16} height={16} className="size-4" />
          </a>
        </p>
      </div>
    </section>
  );
}
