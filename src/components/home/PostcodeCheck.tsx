"use client";

import { useId, useState } from "react";
import { links, postcodeAreas, type RegionName } from "@/content/site";

type Result = { kind: "in"; region: RegionName } | { kind: "out" } | { kind: "invalid" } | null;

// UK postcode area = the leading letters of the outward code (e.g. "M" in M1 2AB, "SW" in SW1A 1AA).
function lookup(raw: string): Result {
  const pc = raw.toUpperCase().replace(/\s+/g, "");
  const m = pc.match(/^([A-Z]{1,2})\d[A-Z\d]?(\d[A-Z]{2})?$/);
  if (!m) return { kind: "invalid" };
  const area = m[1];
  for (const [region, areas] of Object.entries(postcodeAreas) as [RegionName, string[]][]) {
    if (areas.includes(area)) return { kind: "in", region };
  }
  return { kind: "out" };
}

export default function PostcodeCheck() {
  const id = useId();
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result>(null);

  return (
    <div className="rounded-[22px] border border-white bg-white p-2 drop-shadow-[0_20px_20px_rgba(22,64,69,0.3)] backdrop-blur-[5px]">
      <form
        className="flex flex-col gap-2.5 rounded-[16px] bg-white p-3 sm:p-4"
        onSubmit={(e) => {
          e.preventDefault();
          setResult(lookup(value));
        }}
      >
        <label htmlFor={id} className="flex items-center gap-2 text-body-s font-bold tracking-[0.12em]">
          <img src="/images/map/ellipse-blue.svg" alt="" width={7} height={7} />
          CHECK YOUR AREA
        </label>
        <div className="flex items-center gap-2 rounded-full border-[1.5px] border-line-subtle bg-white py-1 pr-1 pl-3.5 focus-within:border-teal-200">
          <img src="/images/map/icon-search.svg" alt="" width={14} height={14} />
          <input
            id={id}
            type="text"
            inputMode="text"
            autoComplete="postal-code"
            placeholder="Your postcode"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setResult(null);
            }}
            className="min-w-0 flex-1 bg-transparent text-body-m font-medium text-ink outline-none placeholder:text-ink-subtle"
          />
          <button type="submit" className="rounded-full bg-brand px-3 py-2 text-body-s font-semibold text-white hover:brightness-110">
            Search
          </button>
        </div>
        <p className="text-body-s text-ink-subtle" aria-live="polite">
          {result === null && "For example, M1 2AB"}
          {result?.kind === "invalid" && "Please enter a valid UK postcode, e.g. M1 2AB."}
          {result?.kind === "in" && (
            <span className="font-semibold text-brand">
              Good news – it looks like you&apos;re in or near our {result.region} area.{" "}
              <a href={links.bookIntroChat} className="underline">
                Book an intro chat
              </a>
            </span>
          )}
          {result?.kind === "out" && (
            <span className="text-ink">
              We&apos;re not in your area yet, but we&apos;re growing.{" "}
              <a href={`mailto:hello@nowfoster.org`} className="font-semibold underline">
                Get in touch
              </a>{" "}
              to hear when we arrive.
            </span>
          )}
        </p>
      </form>
    </div>
  );
}
