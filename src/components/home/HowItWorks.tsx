import ButtonLink from "../ButtonLink";
import { howItWorks, links } from "@/content/site";

const cards = [
  {
    // Step 1: dark card with faded, mirrored photo behind the text
    card: "bg-black text-white lg:h-[522px]",
    number: "text-white opacity-25 left-[calc(100%-94px)] top-[-150px]",
    eyebrow: "text-white",
    body: "text-white",
    photo: null,
  },
  {
    card: "bg-lilac text-ink lg:h-[569px]",
    number: "text-lilac-950 opacity-[0.12] left-[calc(100%-154px)] top-[-157px]",
    eyebrow: "text-lilac-950 tracking-[1px]",
    body: "text-ink",
    photo: { src: "/images/step2-photo.webp", w: 800, h: 1200, pos: "50% 43%", alt: "Two women chatting and laughing on a sofa" },
  },
  {
    card: "bg-brand text-white lg:h-[617px]",
    number: "text-white opacity-10 left-[calc(100%-153px)] top-[-149px]",
    eyebrow: "text-teal-200 tracking-[1px]",
    body: "text-mint-50",
    photo: { src: "/images/step3-photo.webp", w: 1000, h: 667, pos: "53% 87%", alt: "A smiling man carrying a laughing toddler on his shoulders" },
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-lilac-subtle">
      <section className="rounded-b-[24px] bg-mint" aria-labelledby="how-heading">
        <div className="container-site section-y flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 id="how-heading" className="heading-1">
              How weekenders works
            </h2>
            <p className="max-w-[794px] text-body-xl font-medium text-black">
              From your first chat to your first weekend, we&apos;ll be with you every step of the way.
            </p>
          </div>

          <ol className="grid w-full gap-6 md:mx-auto md:max-w-[480px] lg:max-w-none lg:grid-cols-3 lg:items-end">
            {howItWorks.map((step, i) => {
              const c = cards[i];
              return (
                <li
                  key={step.step}
                  className={`relative isolate flex min-h-[420px] flex-col gap-8 overflow-hidden rounded-[32px] p-8 ${c.card}`}
                >
                  {i === 0 && (
                    <img
                      src="/images/step1-photo.webp"
                      alt=""
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="absolute inset-0 -z-10 size-full -scale-x-100 object-cover object-[60%_30%] opacity-40"
                    />
                  )}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -z-10 text-[260px] leading-[260px] font-bold tracking-[-10.4px] ${c.number}`}
                  >
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-3">
                    <p className={`text-body-m font-bold ${c.eyebrow}`}>STEP {step.step}</p>
                    <h3 className="text-[24px] leading-[30px] font-semibold tracking-[-0.021em] lg:text-h3">{step.title}</h3>
                    <p className={`text-body-l ${c.body}`}>{step.body}</p>
                  </div>
                  {c.photo && (
                    <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-[24px]">
                      <img
                        src={c.photo.src}
                        alt={c.photo.alt}
                        width={c.photo.w}
                        height={c.photo.h}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                        style={{ objectPosition: c.photo.pos }}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <ButtonLink href={links.bookIntroChat}>Book an intro chat</ButtonLink>
        </div>
      </section>
    </div>
  );
}
