"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ButtonLink, { SmartLink } from "./ButtonLink";
import { links, nav } from "@/content/site";
import { isActive } from "@/lib/isActive";

/**
 * Phone and tablet menu: a full-screen brand-green panel with a white logo, white links,
 * an outlined white close button and a white "Book an intro chat" button.
 * Rendered into <body> so the frosted header's backdrop-filter can't trap it inside the header pill.
 */
export default function MobileMenu({ tone, current }: { tone: "light" | "dark"; current: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Close when the page changes (e.g. after tapping the logo or a link).
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    // Close if the window is widened past the point where the desktop nav shows.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      document.body.style.overflow = overflow;
      openButton.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={openButton}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`flex size-11 items-center justify-center rounded-full ${
          tone === "light" ? "bg-white text-brand" : "bg-brand text-white"
        }`}
      >
        <span className="sr-only">Open menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-5" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-brand text-white lg:hidden"
          >
            <div className="container-site flex h-20 shrink-0 items-center justify-between sm:h-28">
              <Logo tone="light" />
              <button
                ref={closeButton}
                type="button"
                onClick={close}
                className="flex size-11 items-center justify-center rounded-full border border-white text-white hover:bg-white/10"
              >
                <span className="sr-only">Close menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-5" aria-hidden>
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav aria-label="Main" className="container-site flex flex-1 flex-col gap-10 pt-6 pb-10 sm:pt-10">
              <ul className="flex flex-col gap-2">
                {nav.map((item) => {
                  const active = isActive(item.href, current);
                  return (
                    <li key={item.href}>
                      <SmartLink
                        href={item.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`inline-block py-2 text-h4 text-white sm:text-h3 ${
                          active ? "font-bold underline decoration-2 underline-offset-8" : "font-semibold hover:underline hover:underline-offset-8"
                        }`}
                      >
                        {item.label}
                      </SmartLink>
                    </li>
                  );
                })}
              </ul>
              {/* Anchored to the bottom of the screen, full width */}
              <div onClick={close} className="mt-auto">
                <ButtonLink href={links.bookIntroChat} variant="light" className="w-full justify-between">
                  Book an intro chat
                </ButtonLink>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
