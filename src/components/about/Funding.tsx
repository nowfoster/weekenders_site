import { links, site } from "@/content/site";
import { fundingIntro, fundingSources } from "@/content/about";

export default function Funding() {
  return (
    <section className="bg-white" aria-labelledby="funding-heading">
      <div className="container-site flex flex-col gap-4 pt-14 pb-8 lg:py-20">
        <div className="flex flex-col gap-5">
          <p className="text-body-m font-bold tracking-[0.12em] text-brand uppercase">{fundingIntro.eyebrow}</p>
          <h2 id="funding-heading" className="heading-1">
            {fundingIntro.heading}
          </h2>
        </div>
        <div className="flex max-w-[590px] flex-col gap-7 text-body-l text-ink-subtle sm:text-body-xl">
          {fundingIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>

      {/* Stacked bands: each one's rounded top corners overlap the band above. */}
      <div>
        {fundingSources.map((f) => (
          <div key={f.id} className={f.under}>
            <details className={`group rounded-t-[24px] ${f.bg}`}>
              <summary className="container-site flex cursor-pointer items-start gap-3 py-6 sm:items-center sm:gap-8">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white sm:size-16">
                  <img src={f.icon} alt="" width={24} height={24} className="size-6" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <h3 className="text-h5 font-semibold tracking-[-0.017em] sm:text-h3">{f.title}</h3>
                  <span className="text-body-l font-medium sm:text-body-xl">{f.subtitle}</span>
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white sm:size-12">
                  <img src="/images/icons/icon-chevron-down.svg" alt="" width={20} height={20} className="size-5 group-open:hidden" />
                  <img src="/images/icons/icon-chevron-up.svg" alt="" width={20} height={20} className="hidden size-5 group-open:block" />
                </span>
              </summary>

              <div className="container-site flex flex-col gap-6 pb-12 sm:pl-[calc(2rem+96px)] lg:flex-row lg:gap-8 lg:pl-[calc(3rem+96px)] xl:pl-[calc(110px+96px)]">
                <div className="flex flex-col gap-6 text-body-l lg:flex-1">
                  {f.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  {f.emailLine && (
                    <p>
                      To find out more please email{" "}
                      <a href={`mailto:${site.email}`} className="underline hover:no-underline">
                        {site.email}
                      </a>
                    </p>
                  )}
                  {f.donateCta && (
                    <div>
                      <a
                        href={links.donate}
                        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-body-l font-semibold text-white transition hover:brightness-125"
                      >
                        <img src="/images/about/icon-heart-white.svg" alt="" width={24} height={24} className="size-6" />
                        {f.donateCta}
                      </a>
                    </div>
                  )}
                </div>
                {f.aside && (
                  <div
                    className={`flex flex-col gap-3 self-start rounded-[24px] p-6 lg:flex-1 ${
                      f.aside.tone === "white" ? "bg-white" : "bg-white/60"
                    } w-full`}
                  >
                    <p className="text-body-m font-bold tracking-[0.12em] uppercase">{f.aside.heading}</p>
                    <ul className="list-disc pl-6 text-body-l font-semibold">
                      {f.aside.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
