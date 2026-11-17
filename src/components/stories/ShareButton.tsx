"use client";

import { useState } from "react";

/** "Share this story": native share sheet where available, otherwise copies the page link. */
export default function ShareButton({ title, label = "Share this story" }: { title: string; label?: string }) {
  const [status, setStatus] = useState("");

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (err) {
        // The user closed the share sheet: nothing more to do.
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied");
    } catch {
      setStatus("Couldn't copy the link");
    }
    window.setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="flex items-center justify-end gap-4 border-t border-line pt-8">
      <span aria-hidden className="text-body-m font-semibold text-ink-subtle">
        {status || label}
      </span>
      <span role="status" className="sr-only">
        {status}
      </span>
      <button
        type="button"
        onClick={share}
        aria-label={label}
        className="flex size-[46px] shrink-0 items-center justify-center rounded-full border-2 border-line transition hover:bg-mint"
      >
        <img src="/images/stories/icon-share.svg" alt="" width={24} height={24} />
      </button>
    </div>
  );
}
