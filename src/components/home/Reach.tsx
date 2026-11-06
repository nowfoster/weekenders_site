import ButtonLink from "../ButtonLink";
import PostcodeCheck from "./PostcodeCheck";
import { links, regions } from "@/content/site";

// Map panel canvas is 594 × 700 (Figma units); everything is positioned on it
// and scales together.
const W = 594;
const H = 700;
const MAP_Y = 110; // map artwork is offset 110 from the panel top

const chips = [
  { name: "Durham", x: 464, y: 227, dot: "/images/map/chipdot-durham.svg" },
  { name: "Greater Manchester", x: 70, y: 353.2, dot: "/images/map/chipdot-manchester.svg" },
  { name: "North Somerset", x: 97, y: 524, dot: "/images/map/chipdot-somerset.svg" },
  { name: "Greater London", x: 355.8, y: 532.8, dot: "/images/map/chipdot-london.svg" },
];

const markers = [
  { key: "durham", halo: [414, 263], pin: [424, 273] },
  { key: "manchester", halo: [388, 339.2], pin: [398, 349.2] },
  { key: "somerset", halo: [366, 464], pin: [376, 474] },
  { key: "london", halo: [472.8, 456.8], pin: [482.8, 466.8] },
];

function MapArt() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden>
      {/* Soft colour washes */}
      <image href="/images/map/wash-1.svg" x={240} y={-230} width={580} height={500} />
      <image href="/images/map/wash-2.svg" x={290} y={480} width={460} height={420} />
      <image href="/images/map/wash-3.svg" x={108.5 - 277} y={150 - 250.5} width={554} height={501} transform="rotate(-90 108.5 150)" />
      <image href="/images/map/wash-4.svg" x={-240} y={430} width={540} height={500} />
      {/* Great Britain */}
      <image href="/images/map/great-britain.svg" x={0} y={MAP_Y} width={602.627} height={616.688} />
      <image href="/images/map/coastline.svg" x={0} y={MAP_Y} width={594} height={600} />
      {/* Region halos, leader lines and pins */}
      {markers.map((m) => (
        <g key={m.key}>
          <image href={`/images/map/${m.key}-halo.svg`} x={m.halo[0]} y={MAP_Y + m.halo[1]} width={40} height={40} />
          <image href={`/images/map/${m.key}-line.svg`} x={0} y={MAP_Y} width={594} height={600} />
          <image href="/images/map/pin.svg" x={m.pin[0]} y={MAP_Y + m.pin[1]} width={20} height={20} />
        </g>
      ))}
    </svg>
  );
}

export default function Reach() {
  return (
    <section className="bg-white" aria-labelledby="reach-heading">
      <div className="container-site section-y flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-6 lg:w-[594px] lg:shrink-0">
          <h2 id="reach-heading" className="heading-1">
            Our reach
          </h2>
          <p className="max-w-[520px] text-body-xl">
            We&apos;re currently available across key regions in England, with more areas to come.
          </p>
          <ul className="max-w-[520px] border-t border-line-subtle pt-0" aria-label="Regions we cover">
            {regions.map((r) => (
              <li key={r.name} className="flex h-[52px] items-center gap-3.5 border-b border-line-subtle text-body-l font-semibold">
                <img src={r.dot} alt="" aria-hidden width={12} height={12} />
                {r.name}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <ButtonLink href={links.bookIntroChat}>Book an intro chat</ButtonLink>
          </div>
        </div>

        <div
          className="relative w-full max-w-[594px] overflow-hidden rounded-[24px] lg:flex-1"
          style={{
            aspectRatio: `${W} / ${H}`,
            backgroundImage: "linear-gradient(119.5deg, #d9eff1 0%, #e2f8fa 45%, #f3ecf3 100%)",
          }}
        >
          <MapArt />
          {/* Region chips */}
          {chips.map((c) => (
            <div
              key={c.name}
              aria-hidden
              className="absolute flex items-center gap-2 rounded-[12px] bg-white px-2 py-1 text-[10px] leading-[14px] font-semibold whitespace-nowrap drop-shadow-[0_8px_10px_rgba(22,64,69,0.22)] sm:px-3 sm:py-2 sm:text-body-s"
              style={{ left: `${(c.x / W) * 100}%`, top: `${((MAP_Y + c.y) / H) * 100}%` }}
            >
              <img src={c.dot} alt="" width={8} height={8} />
              {c.name}
            </div>
          ))}
          {/* Postcode checker */}
          <div className="absolute inset-x-[4.7%] top-[4%]">
            <PostcodeCheck />
          </div>
        </div>
      </div>
    </section>
  );
}
