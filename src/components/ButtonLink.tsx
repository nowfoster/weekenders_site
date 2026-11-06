import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "dark" | "light" | "lilac";

const styles: Record<Variant, { pill: string; circle: string; arrow: string }> = {
  // Brand-green pill, white circle, dark arrow
  dark: { pill: "bg-brand text-white", circle: "bg-white", arrow: "/images/icons/icon-arrow-dark.svg" },
  // White pill (on photos), brand circle, white arrow
  light: { pill: "bg-white text-ink", circle: "bg-brand", arrow: "/images/icons/icon-arrow-white.svg" },
  // Lilac pill, white circle, dark arrow
  lilac: { pill: "bg-lilac text-ink", circle: "bg-white", arrow: "/images/icons/icon-arrow-dark.svg" },
};

function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

export function SmartLink({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (isExternal(href)) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

/** Pill button with circular arrow ("With icon" button in Figma). */
export default function ButtonLink({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const s = styles[variant];
  return (
    <SmartLink
      href={href}
      className={`group inline-flex h-16 shrink-0 items-center gap-4 rounded-full py-2 pr-2 pl-7 text-body-l font-semibold transition hover:brightness-110 ${s.pill} ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`flex size-12 items-center justify-center rounded-full transition-transform group-hover:rotate-45 ${s.circle}`}
        aria-hidden
      >
        <img src={s.arrow} alt="" width={20} height={20} />
      </span>
    </SmartLink>
  );
}

/** Text-only pill ("Text only" button in Figma). */
export function PillLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-body-l font-semibold whitespace-nowrap transition hover:brightness-110 ${
        tone === "dark" ? "bg-brand text-white" : "bg-white text-ink"
      } ${className}`}
    >
      {children}
    </SmartLink>
  );
}
