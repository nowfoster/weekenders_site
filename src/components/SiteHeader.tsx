import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { PillLink, SmartLink } from "./ButtonLink";
import { links, nav } from "@/content/site";

type Props = {
  /** "overlay" = frosted pill floating over the hero photo; "solid" = mint bar. */
  variant: "overlay" | "solid";
  /** href of the current page, for the active underline */
  current: string;
};

export default function SiteHeader({ variant, current }: Props) {
  const overlay = variant === "overlay";
  const linkTone = overlay ? "text-white" : "text-brand";
  const activeBorder = overlay ? "border-white" : "border-ink-icon";

  const navLinks = (
    <ul className={`hidden items-center lg:flex ${overlay ? "gap-2" : "gap-8"}`}>
      {nav.map((item) => {
        const active = item.href === current;
        return (
          <li key={item.href}>
            <SmartLink
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex h-11 items-center text-body-l leading-[22px] whitespace-nowrap hover:underline hover:underline-offset-4 ${linkTone} ${
                overlay ? "px-4" : ""
              } ${active ? `border-b-2 font-semibold hover:no-underline ${activeBorder}` : "font-medium"}`}
            >
              {item.label}
            </SmartLink>
          </li>
        );
      })}
    </ul>
  );

  if (overlay) {
    return (
      <header className="absolute inset-x-0 top-4 z-30 px-4 sm:top-6 sm:px-8 lg:px-[110px]">
        <nav
          aria-label="Main"
          className="relative mx-auto flex h-[76px] max-w-[1220px] items-center justify-between rounded-full border border-white/20 bg-white/10 pr-3.5 pl-7 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.25)] backdrop-blur-[12.5px]"
        >
          <Logo tone="light" />
          {navLinks}
          <div className="hidden lg:block">
            <PillLink href={links.bookIntroChat} tone="light" className="w-[196px]">
              Book an intro chat
            </PillLink>
          </div>
          <MobileMenu tone="light" current={current} />
        </nav>
      </header>
    );
  }

  return (
    <header className="relative z-30 bg-mint">
      <nav
        aria-label="Main"
        className="container-site flex h-20 items-center justify-between lg:h-28"
      >
        <Logo tone="dark" />
        {navLinks}
        <div className="hidden lg:block">
          <PillLink href={links.bookIntroChat} tone="dark" className="w-[196px]">
            Book an intro chat
          </PillLink>
        </div>
        <MobileMenu tone="dark" current={current} />
      </nav>
    </header>
  );
}
