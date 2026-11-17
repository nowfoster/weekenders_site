"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Shows the first `initial` items and reveals `step` more per "Load more" click.
 * The button disappears once every item is visible. Focus moves to the first newly shown item.
 */
export default function LoadMoreList({
  children,
  initial,
  step = initial,
  label = "Load more",
  className = "",
}: {
  children: ReactNode;
  initial: number;
  step?: number;
  label?: string;
  className?: string;
}) {
  const items = Children.toArray(children);
  const [shown, setShown] = useState(initial);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (focusIndex === null) return;
    const li = listRef.current?.children[focusIndex] as HTMLElement | undefined;
    li?.focus();
  }, [focusIndex]);

  return (
    <>
      <ul ref={listRef} className={className}>
        {items.slice(0, shown).map((item, i) => (
          <li key={i} tabIndex={-1} className="outline-offset-4">
            {item}
          </li>
        ))}
      </ul>
      {shown < items.length && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => {
              setFocusIndex(shown);
              setShown((n) => Math.min(n + step, items.length));
            }}
            className="inline-flex h-[58px] items-center justify-center rounded-full bg-brand px-8 text-body-l font-semibold whitespace-nowrap w-full text-white transition hover:brightness-110 sm:w-[213px] sm:px-5"
          >
            {label}
          </button>
        </div>
      )}
    </>
  );
}
