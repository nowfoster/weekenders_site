import ButtonLink from "../ButtonLink";
import { links, regions } from "@/content/site";

// Map panel canvas is 594 × 626 (Figma units); everything is positioned on it
// and scales together.
const W = 594;
const H = 626;

const chips = [
  {
    name: "North East England",
    x: 393,
    y: 198.8,
    dot: "/images/map/chipdot-durham.svg",
  },
  {
    name: "Greater Manchester",
    x: 47,
    y: 353,
    dot: "/images/map/chipdot-manchester.svg",
  },
  {
    name: "South West England",
    x: 53,
    y: 551.7,
    dot: "/images/map/chipdot-somerset.svg",
  },
  {
    name: "Greater North London",
    x: 385,
    y: 536.7,
    dot: "/images/map/chipdot-london.svg",
  },
];

const markers = [
  { key: "durham", halo: [391, 262.8], line: [-23, -0.2] },
  { key: "manchester", halo: [365, 339], line: [-23, -0.2] },
  { key: "somerset", halo: [309, 495.8], line: [-48, 30.8] },
  { key: "london", halo: [449.8, 456.6], line: [-23, -0.2] },
];

function MapArt() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden>
      {/* Soft colour washes */}
      <image href="/images/map/wash-1.svg" x={240} y={-267.2} width={580} height={500} />
      <image href="/images/map/wash-2.svg" x={290} y={442.8} width={460} height={420} />
      <image
        href="/images/map/wash-3.svg"
        x={108.5 - 277}
        y={112.8 - 250.5}
        width={554}
        height={501}
        transform="rotate(-90 108.5 112.8)"
      />
      <image href="/images/map/wash-4.svg" x={-240} y={392.8} width={540} height={500} />
      {/* Great Britain */}
      <image href="/images/map/great-britain.svg" x={41} y={29.3} width={538.627} height={587.17} />
      <image href="/images/map/coastline.svg" x={41} y={42.2} width={514} height={541} />
      {/* Region halos, leader lines and pins */}
      {markers.map((m) => (
        <g key={m.key}>
          <image href={`/images/map/${m.key}-halo.svg`} x={m.halo[0]} y={m.halo[1]} width={40} height={40} />
          <image href={`/images/map/${m.key}-line.svg`} x={m.line[0]} y={m.line[1]} width={594} height={600} />
          <image href="/images/map/pin.svg" x={m.halo[0] + 10} y={m.halo[1] + 10} width={20} height={20} />
        </g>
      ))}
    </svg>
  );
}

export default function Reach() {
  return (
    <div className="bg-white">
      <section className="rounded-b-[24px] border-b border-line bg-white" aria-labelledby="reach-heading">
        <div className="container-site section-y grid gap-8 lg:grid-cols-[minmax(0,594px)_minmax(0,594px)] lg:justify-between lg:gap-x-8 lg:gap-y-6">
          <div className="flex flex-col gap-6 lg:self-end">
            <h2 id="reach-heading" className="heading-1">
              Our reach
            </h2>
            <p className="max-w-[520px] text-body-xl">
              We&apos;re currently available across key regions in England, with more areas to come.
            </p>
          </div>

          <div
            className="relative w-full max-w-[594px] overflow-hidden rounded-[24px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
            style={{
              aspectRatio: `${W} / ${H}`,
              backgroundImage: "linear-gradient(122.3deg, #d9eff1 0%, #e2f8fa 45%, #f3ecf3 100%)",
            }}
          >
            <MapArt />
            {/* Region chips */}
            {chips.map((c) => (
              <div
                key={c.name}
                aria-hidden
                className="absolute flex items-center gap-1.5 rounded-[12px] bg-white px-2 py-1 text-[9px] leading-[12px] font-semibold whitespace-nowrap drop-shadow-[0_8px_10px_rgba(22,64,69,0.22)] sm:gap-2 sm:px-3 sm:py-2 sm:text-body-s"
                style={{
                  left: `${(c.x / W) * 100}%`,
                  top: `${(c.y / H) * 100}%`,
                }}
              >
                <img src={c.dot} alt="" width={8} height={8} className="size-1.5 sm:size-2" />
                {c.name}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:self-start">
            <ul className="max-w-[520px] border-t border-line-subtle" aria-label="Regions we cover">
              {regions.map((r) => (
                <li
                  key={r.name}
                  className="flex h-[52px] items-center gap-3.5 border-b border-line-subtle text-body-l font-semibold"
                >
                  <img src={r.dot} alt="" aria-hidden width={12} height={12} />
                  {r.name}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <ButtonLink href={links.bookIntroChat} className="w-full justify-between sm:w-auto">
                Book an intro chat
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
