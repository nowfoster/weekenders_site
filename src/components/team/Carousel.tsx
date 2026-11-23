"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

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
 * the buttons step one card at a time and stop once the last card is fully in view.
 * Pagination dots show one dot per reachable scroll position.
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
  /** Scroll offsets the carousel can stop at: each card's start, up to the point where the last card is in view. */
  const [stops, setStops] = useState<number[]>([0]);
  const [index, setIndex] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const els = Array.from(track.children) as HTMLElement[];
    if (!els.length) return;
    const origin = els[0].offsetLeft;
    const max = track.scrollWidth - track.clientWidth;
    const next = els.map((el) => el.offsetLeft - origin).filter((x) => x < max - 2);
    if (max > 2) next.push(max);
    if (!next.length) next.push(0);
    let nearest = 0;
    next.forEach((x, i) => {
      if (Math.abs(x - track.scrollLeft) < Math.abs(next[nearest] - track.scrollLeft)) nearest = i;
    });
    setStops((prev) => (prev.length === next.length && prev.every((x, i) => x === next[i]) ? prev : next));
    setIndex(nearest);
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
    if (!track || stops[i] === undefined) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: stops[i], behavior: reduce ? "auto" : "smooth" });
  };

  const pages = stops.length;
  const prevDisabled = index === 0;
  const nextDisabled = index >= pages - 1;
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
          className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 [--card:min(300px,calc(100vw_-_64px))] [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:scroll-pl-0 lg:pl-0 [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <li
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              className="flex w-(--card) shrink-0 snap-start last:snap-end"
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {/* Phones/tablets: arrows at either side with the dots centred between. Desktop: arrows, then dots beneath. */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 lg:col-start-1 lg:row-start-2 lg:grid-cols-[auto_auto] lg:justify-start lg:gap-y-6 lg:self-start lg:pt-8">
        <button
          type="button"
          className={`col-start-1 row-start-1 ${button}`}
          onClick={() => goTo(index - 1)}
          disabled={prevDisabled}
          aria-label="Previous"
        >
          <Arrow dir="prev" />
        </button>
        <button
          type="button"
          className={`col-start-3 row-start-1 lg:col-start-2 ${button}`}
          onClick={() => goTo(index + 1)}
          disabled={nextDisabled}
          aria-label="Next"
        >
          <Arrow dir="next" />
        </button>
        <div className="col-start-2 row-start-1 flex items-center justify-center gap-2 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:justify-start">
          {pages > 1 &&
            stops.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to position ${i + 1} of ${pages}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-brand" : "w-2.5 bg-line hover:bg-teal-200"}`}
              />
            ))}
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing position {index + 1} of {pages}
        </p>
      </div>
    </div>
  );
}
