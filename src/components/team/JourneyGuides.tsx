import PersonPhoto from "./PersonPhoto";
import EmailLink from "./EmailLink";
import { journeyGuides } from "@/content/team";

export default function JourneyGuides() {
  return (
    <section aria-labelledby="guides-heading" className="bg-white">
      <div className="container-site section-y flex flex-col gap-10 lg:gap-12 lg:py-24">
        <div className="flex max-w-[800px] flex-col gap-5">
          <h2 id="guides-heading" className="heading-1">
            {journeyGuides.title}
          </h2>
          <p className="text-body-l sm:text-body-xl">{journeyGuides.intro}</p>
        </div>

        <ul className="flex flex-col gap-6 lg:gap-8">
          {journeyGuides.guides.map((g) => (
            <li key={g.name} className="flex">
              <figure className="flex w-full flex-col overflow-hidden rounded-[24px] border border-line-subtle bg-white sm:flex-row">
                <PersonPhoto image={g.image} name={g.name} className="h-[240px] shrink-0 sm:h-auto sm:w-[200px] lg:w-[280px]" />
                <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:min-h-[280px] sm:p-8 lg:px-12 lg:py-10">
                  {g.quote && (
                    <>
                      <img
                        src="/images/team/quote-mark.svg"
                        alt=""
                        aria-hidden
                        width={42}
                        height={29}
                        className="ml-[5px] h-[29px] w-[42px] rotate-180"
                      />
                      <blockquote className="max-w-[720px] text-body-xl font-semibold tracking-[-0.014em] sm:leading-6">
                        <p>{g.quote}</p>
                      </blockquote>
                    </>
                  )}
                  <figcaption className="flex flex-col items-start gap-0.5 pt-2">
                    <p className="text-body-l">
                      <span className="font-bold">{g.name}</span>
                      {g.pronouns && <span className="ml-1.5 font-semibold text-ink-subtle">({g.pronouns})</span>}
                    </p>
                    <p className="text-body-m text-ink-subtle">{g.role}</p>
                    {g.email && <EmailLink email={g.email} className="pt-2" />}
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
