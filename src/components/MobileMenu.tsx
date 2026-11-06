"use client";

import { useEffect, useState } from "react";
import { SmartLink } from "./ButtonLink";
import { links, nav } from "@/content/site";

export default function MobileMenu({ tone, current }: { tone: "light" | "dark"; current: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`flex size-11 items-center justify-center rounded-full ${
          tone === "light" ? "bg-white text-brand" : "bg-brand text-white"
        }`}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-5" aria-hidden>
          {open ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full mt-2 rounded-[24px] bg-white p-3 shadow-[0_20px_40px_-12px_rgba(22,64,69,0.35)]"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <SmartLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={item.href === current ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3 text-body-l text-brand hover:bg-mint ${
                    item.href === current ? "bg-mint font-semibold" : "font-medium"
                  }`}
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
          <SmartLink
            href={links.bookIntroChat}
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-brand text-body-l font-semibold text-white"
          >
            Book an intro chat
          </SmartLink>
        </div>
      )}
    </div>
  );
}
