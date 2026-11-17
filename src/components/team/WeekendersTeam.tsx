import Carousel from "./Carousel";
import PersonPhoto from "./PersonPhoto";
import EmailLink from "./EmailLink";
import { weekendersTeam } from "@/content/team";

export default function WeekendersTeam() {
  return (
    <div className="bg-white">
      <section
        aria-labelledby="team-heading"
        className="overflow-x-clip rounded-b-[24px] border-b border-line bg-white"
      >
        <div className="container-site section-y lg:py-24 lg:pr-0">
          <Carousel
            label="Weekenders team"
            intro={
              <div className="flex flex-col gap-5">
                <h2 id="team-heading" className="heading-1">
                  {weekendersTeam.title}
                </h2>
                <p className="text-body-l sm:text-body-xl">{weekendersTeam.intro}</p>
              </div>
            }
          >
            {weekendersTeam.members.map((m) => (
              <article
                key={m.name}
                className="flex w-full flex-col overflow-hidden rounded-[24px] border border-line bg-white"
              >
                <PersonPhoto image={m.image} name={m.name} className="h-[280px] shrink-0 sm:h-[320px]" />
                <div className="flex min-h-[190px] flex-1 flex-col gap-[22px] p-6">
                  <div className="flex flex-col items-start gap-1.5">
                    <h3 className="text-h5 font-semibold">{m.name}</h3>
                    <p className="text-body-m text-ink-subtle">{m.role}</p>
                    {m.pronouns && (
                      <p className="rounded-lg bg-mint px-3 py-1 text-body-s font-semibold text-brand">
                        <span className="sr-only">Pronouns: </span>
                        {m.pronouns}
                      </p>
                    )}
                  </div>
                  {m.email && <EmailLink email={m.email} />}
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
