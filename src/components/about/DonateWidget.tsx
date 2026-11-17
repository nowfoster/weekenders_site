"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { links } from "@/content/site";
import { donation } from "@/content/about";

type Frequency = "once" | "monthly";

const NUDGE_KEY = "weekenders:donate-nudge-dismissed";

function formatGBP(value: number) {
  return `£${Number.isInteger(value) ? value : value.toFixed(2)}`;
}

function donateUrl(amount: number, frequency: Frequency) {
  const url = new URL(links.donate);
  url.searchParams.set("amount", String(amount));
  url.searchParams.set("frequency", frequency);
  return url.toString();
}

/**
 * Hero donation widget ("Donate / Widget") plus the fixed "Donate / Sticky nudge",
 * which shares the chosen amount and appears once the widget has scrolled out of view.
 */
export default function DonateWidget() {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [preset, setPreset] = useState<number | null>(donation.defaultAmount);
  const [other, setOther] = useState("");

  const otherValue = Number.parseFloat(other.replace(/[£,\s]/g, ""));
  const amount = preset ?? (Number.isFinite(otherValue) ? Math.round(otherValue * 100) / 100 : NaN);
  const valid = Number.isFinite(amount) && amount >= donation.minAmount && amount <= donation.maxAmount;
  const otherInvalid = preset === null && other.trim() !== "" && !valid;

  const monthly = frequency === "monthly";
  const label = valid ? formatGBP(amount) : null;
  const impactText = preset !== null ? donation.impact[preset] : donation.impactOther;
  const href = donateUrl(valid ? amount : donation.defaultAmount, frequency);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (valid) window.location.href = href;
  }

  // Sticky nudge: show after scrolling past the widget, hide near the footer or once dismissed.
  const widgetRef = useRef<HTMLFormElement>(null);
  const [pastWidget, setPastWidget] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    let stored = false;
    try {
      stored = window.sessionStorage.getItem(NUDGE_KEY) === "1";
    } catch {}
    setDismissed(stored);

    const widget = widgetRef.current;
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === widget) {
          setPastWidget(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
        } else {
          setNearFooter(entry.isIntersecting);
        }
      }
    });
    if (widget) observer.observe(widget);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(NUDGE_KEY, "1");
    } catch {}
  }

  const showNudge = pastWidget && !nearFooter && !dismissed && valid;

  const chip =
    "flex h-12 cursor-pointer items-center justify-center rounded-[12px] border-2 border-line bg-white px-4 text-body-l font-semibold text-ink transition peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-200 peer-checked:border-brand peer-checked:bg-teal-100 peer-checked:text-brand hover:border-mint-700";

  return (
    <>
      <form
        ref={widgetRef}
        id="donate"
        action={links.donate}
        method="get"
        onSubmit={onSubmit}
        aria-labelledby="donate-heading"
        className="flex w-full flex-col gap-4 rounded-[24px] bg-white p-4 shadow-[0_30px_30px_rgba(22,64,69,0.3)] sm:p-6"
      >
        <h2 id="donate-heading" className="sr-only">
          Support Weekenders with a donation
        </h2>

        {/* Frequency toggle */}
        <fieldset className="flex gap-1 rounded-full bg-mint p-1">
          <legend className="sr-only">How often would you like to give?</legend>
          {(
            [
              { value: "once", text: "Give once" },
              { value: "monthly", text: "Monthly" },
            ] as const
          ).map((opt) => (
            <label key={opt.value} className="flex-1">
              <input
                type="radio"
                name="frequency"
                value={opt.value}
                checked={frequency === opt.value}
                onChange={() => setFrequency(opt.value)}
                className="peer sr-only"
              />
              <span className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full px-3 py-2 text-body-m font-semibold text-brand transition peer-checked:bg-white peer-checked:shadow-sm peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-200">
                {opt.value === "monthly" && (
                  <img src="/images/about/icon-heart-lilac.svg" alt="" width={20} height={20} className="size-5" />
                )}
                {opt.text}
              </span>
            </label>
          ))}
        </fieldset>

        {/* Preset amounts */}
        <fieldset>
          <legend className="sr-only">Choose an amount</legend>
          <div className="grid grid-cols-3 gap-2">
            {donation.amounts.map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="preset"
                  value={value}
                  checked={preset === value}
                  onChange={() => {
                    setPreset(value);
                    setOther("");
                  }}
                  className="peer sr-only"
                />
                <span className={chip}>{formatGBP(value)}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Other amount */}
        <div>
          <label
            className={`flex h-14 items-center gap-2 rounded-[12px] border-2 bg-white px-4 focus-within:border-brand ${
              otherInvalid ? "border-red-600" : preset === null ? "border-brand" : "border-line"
            }`}
          >
            <span className="text-h5 font-semibold text-brand" aria-hidden>
              £
            </span>
            <span className="sr-only">Other amount in pounds</span>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              placeholder="Other amount"
              value={other}
              aria-invalid={otherInvalid || undefined}
              aria-describedby={otherInvalid ? "donate-other-error" : undefined}
              onChange={(e) => {
                setOther(e.target.value);
                setPreset(e.target.value.trim() ? null : donation.defaultAmount);
              }}
              className="min-w-0 flex-1 bg-transparent text-body-l font-medium text-ink outline-none placeholder:text-ink-subtle"
            />
            <span className="text-body-s font-semibold text-ink-subtle" aria-hidden>
              GBP
            </span>
          </label>
          {otherInvalid && (
            <p id="donate-other-error" className="mt-1.5 text-body-s text-red-700">
              Please enter an amount between £{donation.minAmount} and £{donation.maxAmount.toLocaleString("en-GB")}.
            </p>
          )}
        </div>

        <input type="hidden" name="amount" value={valid ? amount : donation.defaultAmount} />

        {/* Impact message */}
        <p className="flex items-start gap-3 rounded-[12px] bg-lilac-subtle px-4 py-3 text-body-m font-medium text-brand" aria-live="polite">
          <img src="/images/about/icon-sparkle.svg" alt="" width={20} height={20} className="size-5 shrink-0" />
          <span>
            {label ? (
              <>
                <strong className="font-bold">
                  {label}
                  {monthly && " a month"}
                </strong>{" "}
                {impactText}
              </>
            ) : (
              <>Every gift {donation.impactOther}</>
            )}
          </span>
        </p>

        <button
          type="submit"
          disabled={!valid}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-body-l font-semibold text-white transition hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img src="/images/about/icon-heart-white.svg" alt="" width={24} height={24} className="size-6" />
          {label ? `Donate ${label}${monthly ? " a month" : ""}` : "Donate"}
        </button>

        <p className="text-center text-body-s text-ink-subtle">
          UK taxpayer? <strong className="font-bold text-brand">Gift Aid</strong>{" "}
          {valid ? `adds ${formatGBP(Math.round(amount * 25) / 100)}` : "adds 25%"} at no cost to you.
        </p>
      </form>

      {/* Sticky nudge (fixed, bottom-right) */}
      {showNudge && (
        <aside
          aria-label="Donation reminder"
          className="fixed inset-x-4 bottom-4 z-40 flex overflow-hidden rounded-[24px] bg-white shadow-[0_30px_60px_-30px_rgba(22,64,69,0.3),0_4px_24px_rgba(22,64,69,0.12)] sm:inset-x-auto sm:right-8 sm:bottom-8 sm:w-[360px]"
        >
          <p className="flex flex-1 items-center gap-3 p-4 text-body-m font-medium text-ink">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lilac-subtle">
              <img src="/images/about/icon-heart-lilac.svg" alt="" width={24} height={24} className="size-6" />
            </span>
            <span>
              {donation.nudge.before}{" "}
              <strong className="font-bold text-brand">
                {label}
                {monthly && " a month"}
              </strong>{" "}
              {donation.nudge.after}
            </span>
          </p>
          <div className="flex shrink-0 flex-col border-l border-line">
            <a
              href={href}
              className="flex flex-1 items-center justify-center bg-brand px-4 py-3 text-body-s font-semibold text-white hover:brightness-125"
            >
              Donate
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="flex flex-1 cursor-pointer items-center justify-center border-t border-line px-4 py-3 text-body-s font-medium text-ink-subtle hover:text-ink"
            >
              Not today
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
