import ButtonLink from "../ButtonLink";
import { becomeSteps, links } from "@/content/site";

// Each band gets progressively deeper green (light-green/100 → /700).
const bands = ["bg-mint-100", "bg-mint", "bg-mint-400", "bg-mint-500", "bg-mint-600", "bg-mint-700"];

export default function BecomeSteps() {
  return (
    <section className="bg-white" aria-labelledby="steps-heading">
      <div className="container-site flex flex-col gap-6 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <h2 id="steps-heading" className="heading-2">
          How to become a Weekender
        </h2>
        <p className="max-w-[596px] text-body-xl">
          Six simple steps from your first chat to your first weekend. We&apos;ll be with you the whole way.
        </p>
      </div>

      <ol>
        {becomeSteps.map((step, i) => (
          <li key={step.title} className={bands[i]}>
            <details name="become-steps" open={i === 0} className="group container-site">
              <summary className="flex cursor-pointer items-center gap-4 py-7 sm:gap-8">
                <span className="w-12 shrink-0 text-[32px] leading-[40px] font-bold tracking-[-0.022em] sm:w-[120px] sm:text-h1" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-[22px] leading-[28px] font-semibold tracking-[-0.021em] sm:text-h3">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </span>
                  <span className="text-body-l font-medium opacity-80 sm:text-body-xl">{step.subtitle}</span>
                </h3>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[24px] bg-white">
                  <img src="/images/icons/icon-chevron-down.svg" alt="" width={20} height={20} className="group-open:hidden" />
                  <img src="/images/icons/icon-chevron-up.svg" alt="" width={20} height={20} className="hidden group-open:block" />
                </span>
              </summary>

              <div className="flex flex-col gap-8 pb-12 sm:pl-[152px] lg:flex-row">
                <div className="flex flex-1 flex-col items-start gap-6">
                  <p className="text-body-l">{step.body}</p>
                  {"cta" in step && step.cta && <ButtonLink href={links.bookIntroChat}>Book an intro chat</ButtonLink>}
                </div>
                {"details" in step && step.details && (
                  <div className="flex flex-col gap-6 rounded-[20px] bg-white p-7 lg:w-[378px] lg:shrink-0">
                    {step.details.map((d) => (
                      <div key={d.heading} className="flex flex-col gap-2">
                        <h4 className="flex items-center gap-2.5 text-body-l font-semibold">
                          <img src={d.icon} alt="" width={18} height={18} />
                          {d.heading}
                        </h4>
                        <ul className="list-disc pl-6 text-body-l text-ink-subtle">
                          {d.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
