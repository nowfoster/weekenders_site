import Link from "next/link";

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      aria-label="Weekenders by Now Foster – home"
      className={`flex shrink-0 flex-col gap-0.5 ${tone === "light" ? "text-white" : "text-brand"}`}
    >
      <span className="text-[24px] leading-[25px] font-black tracking-[-0.02em]">weekenders</span>
      <span className="text-body-s leading-[17px] font-bold">by Now Foster</span>
    </Link>
  );
}
