import Link from "next/link";
import { teamHero } from "@/content/team";

export default function TeamHero() {
  return (
    <section className="bg-mint" aria-labelledby="page-heading">
      <div className="container-site flex flex-col gap-8 pt-12 pb-16 lg:gap-10 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-body-m">
            <li>
              <Link href="/about-us" className="font-semibold text-[#0a6b71] hover:underline">
                About us
              </Link>
            </li>
            <li aria-hidden className="font-medium text-ink-subtle">
              /
            </li>
            <li>
              <span aria-current="page" className="font-medium text-ink-subtle">
                Meet the team
              </span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-24">
          <h1
            id="page-heading"
            className="text-[36px] leading-[44px] font-bold tracking-[-0.022em] sm:text-display-3 lg:flex-1"
          >
            {teamHero.title}
          </h1>
          <p className="text-body-l sm:text-body-xl lg:flex-1">{teamHero.intro}</p>
        </div>
      </div>
    </section>
  );
}
