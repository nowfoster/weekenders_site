"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "prev" ? "M19 12H5M11 18L5 12L11 6" : "M5 12H19M13 18L19 12L13 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Horizontal scroll-snap card carousel (Figma "Weekenders team" / "Trustees").
 * On desktop the intro + controls sit in a left column and the cards bleed off the right edge;
 * on smaller screens the cards sit under the intro with the controls below them.
 * The track scrolls natively (touch, trackpad, Shift+wheel, arrow keys when focused);
 * the buttons step one card at a time.
 */
export default function Carousel({
  label,
  intro,
  children,
}: {
  /** Accessible name for the carousel, e.g. "Weekenders team members". */
  label: string;
  intro: ReactNode;
  /** One child per slide (a card). */
  children: ReactNode;
}) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(count <= 1);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const els = Array.from(track.children) as HTMLElement[];
    if (!els.length) return;
    const origin = els[0].offsetLeft;
    let nearest = 0;
    els.forEach((el, i) => {
      if (Math.abs(el.offsetLeft - origin - track.scrollLeft) < Math.abs(els[nearest].offsetLeft - origin - track.scrollLeft)) {
        nearest = i;
      }
    });
    setIndex(nearest);
    setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const els = Array.from(track.children) as HTMLElement[];
    if (!els[i]) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: els[i].offsetLeft - els[0].offsetLeft, behavior: reduce ? "auto" : "smooth" });
  };

  const prevDisabled = index === 0;
  const nextDisabled = index >= count - 1 || atEnd;
  const button =
    "flex size-14 items-center justify-center rounded-full border-2 bg-white transition enabled:border-brand enabled:text-brand enabled:hover:bg-mint disabled:border-line disabled:text-line";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="flex flex-col gap-8 lg:grid lg:grid-cols-[384px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:gap-y-0"
    >
      <div className="lg:col-start-1 lg:row-start-1">{intro}</div>

      {/* Bleeds to the viewport edge: past the phone gutters, and past the 1440px column on wide screens */}
      <div className="-mx-4 sm:-mx-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mr-[min(0px,calc(720px_-_50vw))]">
        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label={`${label}, scroll horizontally`}
          className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-4 pr-[calc(100%_-_var(--card)_-_16px)] pl-4 [--card:min(300px,calc(100vw_-_64px))] [scrollbar-width:none] sm:scroll-pl-8 sm:pr-[calc(100%_-_var(--card)_-_32px)] sm:pl-8 lg:scroll-pl-0 lg:pr-[calc(100%_-_var(--card))] lg:pl-0 [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <li
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              className="flex w-(--card) shrink-0 snap-start"
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3 lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-8">
        <button type="button" className={button} onClick={() => goTo(index - 1)} disabled={prevDisabled} aria-label="Previous">
          <Arrow dir="prev" />
        </button>
        <button type="button" className={button} onClick={() => goTo(index + 1)} disabled={nextDisabled} aria-label="Next">
          <Arrow dir="next" />
        </button>
        <p className="pl-2 text-body-l font-medium text-ink-subtle" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Showing </span>
          <span className="font-semibold text-brand">{pad(index + 1)}</span> <span aria-hidden>/</span>
          <span className="sr-only">of</span> {pad(count)}
        </p>
      </div>
    </div>
  );
}
