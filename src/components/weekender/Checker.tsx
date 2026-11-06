import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";

function Chip({ label, dot, className }: { label: string; dot: string; className: string }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-[12px] bg-white px-3 py-2 text-body-s font-medium whitespace-nowrap drop-shadow-[0_8px_10px_rgba(22,64,69,0.18)] ${className}`}
    >
      <img src={dot} alt="" width={7} height={7} />
      {label}
    </div>
  );
}

function Option({ label, state }: { label: string; state: "selected" | "default" | "faded" }) {
  return (
    <div
      className={`flex h-10 items-center gap-2.5 rounded-[12px] px-3 text-body-s font-medium ${
        state === "selected" ? "bg-mint-400" : "border-[1.5px] border-line-subtle bg-white"
      } ${state === "faded" ? "opacity-45" : ""}`}
    >
      {state === "selected" ? (
        <img src="/images/checker/radio-checked.svg" alt="" width={16} height={16} />
      ) : (
        <span className="size-4 rounded-full border-[1.5px] border-brand" />
      )}
      {label}
    </div>
  );
}

/** Static illustration of the readiness checker (579 × 449 canvas). */
function CheckerMockup() {
  return (
    <div className="relative h-[225px] w-[290px] sm:h-[404px] sm:w-[521px] md:h-[449px] md:w-[579px]" aria-hidden>
      <div className="absolute top-0 left-0 h-[449px] w-[579px] origin-top-left scale-50 sm:scale-90 md:scale-100">
        <div className="absolute top-0 left-[41px] h-[449px] w-[538px] overflow-hidden rounded-[24px] bg-mint">
          <img src="/images/checker/wash-1.svg" alt="" className="absolute top-[-230px] left-[246px] h-[460px] w-[520px] max-w-none" />
          <img src="/images/checker/wash-2.svg" alt="" className="absolute top-[140px] left-[-204px] h-[460px] w-[500px] max-w-none" />
          <img src="/images/checker/wash-3.svg" alt="" className="absolute top-[220px] left-[246px] h-[360px] w-[400px] max-w-none" />

          {/* Question card */}
          <div className="absolute top-[37px] left-[32px] flex h-[345px] w-[290px] flex-col justify-center rounded-[22px] border border-white bg-white p-2 shadow-[0_20px_40px_-18px_rgba(22,64,69,0.3)]">
            <div className="rounded-[16px] bg-white p-[18px]">
              <p className="flex items-center gap-2 text-body-s font-semibold text-brand">
                <img src="/images/checker/ellipse.svg" alt="" width={7} height={7} />
                READINESS CHECKER
              </p>
              <div className="flex gap-1 pt-3 pb-3.5">
                <span className="h-[5px] flex-1 rounded-[9px] bg-brand" />
                <span className="h-[5px] flex-1 rounded-[9px] bg-brand" />
                <span className="h-[5px] flex-1 rounded-[9px] bg-brand" />
                <span className="h-[5px] flex-1 rounded-[9px] bg-line-subtle" />
              </div>
              <p className="text-body-l font-semibold">Could you keep one weekend a month free?</p>
              <div className="flex flex-col gap-2.5 pt-3">
                <Option label="Yes, most months" state="selected" />
                <Option label="Some months, it depends" state="default" />
                <Option label="I'm not sure yet" state="faded" />
              </div>
              <div className="pt-[11px]">
                <div className="flex h-11 items-center justify-between border-t border-line-subtle pt-2.5">
                  <p className="text-body-s text-ink-subtle">Question 3 of 4</p>
                  <span className="flex items-center gap-2 rounded-full bg-brand py-1 pr-1 pl-3 text-body-s font-semibold text-white">
                    Continue
                    <span className="flex size-[22px] items-center justify-center rounded-[11px] bg-white">
                      <img src="/images/checker/icon-arrow-mini.svg" alt="" width={10} height={10} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Result card */}
          <div className="absolute top-[166px] left-[259px] flex h-[243px] w-[247px] flex-col justify-center rounded-[22px] border border-white bg-white p-2 shadow-[0_20px_40px_-18px_rgba(22,64,69,0.3)]">
            <div className="flex flex-col gap-3 rounded-[16px] bg-white p-[18px]">
              <p className="py-1 text-body-s font-medium text-ink-subtle">Your result:</p>
              <p className="h-[49px] w-[198px] rounded-[4px] bg-lilac-subtle px-2.5 py-[7px] text-body-m font-bold text-brand">
                Weekenders could work for you!
              </p>
              <p className="text-body-m font-bold">Your summary:</p>
              <ul className="flex flex-col gap-[7px] pb-1">
                {["You're 21 or over", "You have a spare room", "One weekend a month free"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-body-s font-medium">
                    <img src="/images/checker/icon-tick.svg" alt="" width={16} height={16} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Chip label="Do I need a spare room?" dot="/images/checker/dot-1.svg" className="top-[40px] left-[397px]" />
        <Chip label="What if I work full time?" dot="/images/checker/dot-2.svg" className="top-[95px] left-[461px]" />
        <Chip label="Am I old enough to foster?" dot="/images/checker/dot-3.svg" className="top-[400px] left-0" />
      </div>
    </div>
  );
}

export default function Checker() {
  return (
    <div className="bg-white">
      <section className="overflow-hidden rounded-[24px] border-b border-line" aria-labelledby="checker-heading">
        <div className="container-site section-y flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-8">
          <div className="flex w-full flex-col items-start gap-[26px] lg:w-[591px] lg:shrink-0">
            <h2 id="checker-heading" className="heading-2">
              Just curious? Start here
            </h2>
            <p className="text-body-xl">
              Our quick online checker walks you through what fostering one weekend a month really involves, so you can see if
              it feels right for you.
            </p>
            <ButtonLink href={links.readinessChecker} variant="lilac">
              Take the 5 minute check
            </ButtonLink>
          </div>
          <CheckerMockup />
        </div>
      </section>
    </div>
  );
}
