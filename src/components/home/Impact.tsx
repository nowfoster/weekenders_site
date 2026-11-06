import ButtonLink from "../ButtonLink";
import { links, stats } from "@/content/site";

export default function Impact() {
  return (
    <div className="bg-white">
      <section className="rounded-b-[24px] border-b border-line bg-white" aria-labelledby="impact-heading">
        <div className="container-site section-y flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 id="impact-heading" className="heading-1">
              A weekend can make a big difference
            </h2>
            <p className="max-w-[768px] text-body-xl font-medium">
              Weekenders give children and young people in care a safe, supportive home at the weekends - helping build
              stability, stronger relationships and brighter futures.
            </p>
          </div>

          <ul className="grid w-full gap-6 lg:grid-cols-3">
            {stats.map((s) => (
              <li key={s.figure} className={`relative isolate flex flex-col justify-between gap-6 overflow-hidden rounded-[32px] p-8 ${s.bg}`}>
                {/* Brush-stroke wash */}
                <div
                  aria-hidden
                  className="absolute top-[6px] left-[-125px] -z-10 h-[342px] w-[633px]"
                  style={{
                    backgroundColor: s.wash,
                    opacity: s.washOpacity,
                    maskImage: "url(/images/brush-mask-stat.webp)",
                    WebkitMaskImage: "url(/images/brush-mask-stat.webp)",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                  }}
                />
                <div className="flex items-start gap-6">
                  <img src={s.icon} alt="" aria-hidden width={64} height={64} className="size-12 shrink-0 lg:size-16" />
                  <p className="flex flex-col gap-1">
                    <strong className="text-[40px] leading-[50px] font-bold tracking-[-0.022em] whitespace-nowrap text-brand lg:text-display-3">
                      {s.figure}
                    </strong>
                    <span className="text-body-xl">{s.text}</span>
                  </p>
                </div>
                <p className="rounded-[24px] bg-white px-6 py-5 text-center text-body-l font-medium">{s.note}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3 text-center">
            <h3 className="text-[24px] leading-[30px] font-semibold tracking-[-0.021em] sm:text-h3">Could you be a Weekender?</h3>
            <p className="text-body-l">Find out more about weekend fostering and how you could help.</p>
            <div className="pt-4">
              <ButtonLink href={links.bookIntroChat}>Book an intro chat</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
