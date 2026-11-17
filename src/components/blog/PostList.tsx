"use client";

import { useState, type ReactNode } from "react";
import { SmartLink } from "../ButtonLink";

const buttonClass =
  "inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-brand bg-white px-5 text-body-l font-semibold whitespace-nowrap text-ink transition hover:bg-mint sm:h-11 sm:w-[196px]";

/**
 * Shows the first `perPage` items; "Load more posts" reveals the next batch.
 * Once everything is visible the button links to the full blog on Medium.
 * Items are pre-rendered by the server and passed in as children.
 */
export default function PostList({
  items,
  perPage,
  moreHref,
}: {
  items: ReactNode[];
  perPage: number;
  moreHref: string;
}) {
  const [visible, setVisible] = useState(perPage);
  const hasMore = visible < items.length;

  return (
    <>
      <ul id="latest-posts-list">
        {items.slice(0, visible).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-center pt-8 sm:pt-12">
        {hasMore ? (
          <button
            type="button"
            className={buttonClass}
            aria-controls="latest-posts-list"
            onClick={() => setVisible((v) => v + perPage)}
          >
            Load more posts
          </button>
        ) : (
          <SmartLink href={moreHref} className={buttonClass}>
            Load more posts
          </SmartLink>
        )}
      </div>
    </>
  );
}
