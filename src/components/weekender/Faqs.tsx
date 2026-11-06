import { PillLink } from "../ButtonLink";
import { faqs, links } from "@/content/site";

export default function Faqs() {
  return (
    <div className="bg-white">
      <section className="overflow-hidden rounded-[24px] border-b border-line" aria-labelledby="faq-heading">
        <div className="container-site section-y flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-8">
          <div className="flex flex-col items-start gap-5 lg:w-[581px] lg:shrink-0">
            <p className="text-body-m font-bold tracking-[0.12em] text-brand">FAQS</p>
            <h2 id="faq-heading" className="heading-2">
              Questions people ask before becoming a Weekender
            </h2>
            <div className="pt-3">
              <PillLink href={links.allFaqs} className="h-12 w-[196px]">
                See all FAQs
              </PillLink>
            </div>
          </div>

          <div className="border-t border-line-subtle lg:w-[593px] lg:shrink-0">
            {faqs.map((f, i) => (
              <details key={f.q} name="faq" open={i === 0} className="group border-b border-line-subtle">
                <summary className="flex cursor-pointer items-center gap-6 py-7">
                  <h3 className="flex-1 text-body-xl font-bold">{f.q}</h3>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-mint group-open:bg-brand">
                    <img src="/images/icons/icon-plus.svg" alt="" width={16} height={16} className="group-open:hidden" />
                    <img src="/images/icons/icon-close.svg" alt="" width={16} height={16} className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="pr-16 pb-7 text-body-l text-ink-subtle">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
