import type { CSSProperties } from "react";

// The collage is laid out on a 775 × 855 canvas (Figma units) and scaled with
// percentages so it stays proportional at any width.
const W = 775;
const H = 855;
const box = (x: number, y: number, w: number, h: number): CSSProperties => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  width: `${(w / W) * 100}%`,
  height: `${(h / H) * 100}%`,
});

/** A lilac brush stroke: a flat rectangle masked by a brush-texture PNG, then rotated. */
function Brush({ bbox, w, h, rotate, mask }: { bbox: [number, number, number, number]; w: number; h: number; rotate: number; mask: string }) {
  const [x, y, bw, bh] = bbox;
  return (
    <div className="absolute flex items-center justify-center" style={box(x, y, bw, bh)}>
      <div
        className="shrink-0 bg-lilac-300"
        style={{
          width: `${(w / bw) * 100}%`,
          height: `${(h / bh) * 100}%`,
          transform: `rotate(${rotate}deg) skewX(0.97deg)`,
          maskImage: `url(${mask})`,
          WebkitMaskImage: `url(${mask})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>
  );
}

/** A small rotated shape (SVG) inside its rotated bounding box. */
function Shape({
  bbox,
  inner,
  rotate,
  src,
  inset,
}: {
  bbox: [number, number, number];
  inner: number;
  rotate: number;
  src: string;
  inset: string;
}) {
  const [x, y, s] = bbox;
  return (
    <div className="absolute flex items-center justify-center" style={box(x, y, s, s)}>
      <div className="relative shrink-0" style={{ width: `${(inner / s) * 100}%`, height: `${(inner / s) * 100}%`, transform: `rotate(${rotate}deg)` }}>
        <img src={src} alt="" className="absolute block size-full" style={{ inset }} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="overflow-hidden bg-mint" aria-labelledby="about-heading">
      <div className="container-site section-y flex flex-col items-center gap-12 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col gap-8 lg:w-[618px] lg:shrink-0">
          <h2 id="about-heading" className="heading-1">
            About the weekenders programme
          </h2>
          <div className="flex flex-col gap-7 text-body-xl">
            <p>
              Weekenders helps you fit fostering in your life - building a relationship with a child. As a Weekender Foster
              Carer, you&apos;ll welcome a child into your home for one weekend a month.
            </p>
            <p>
              It&apos;s a chance to offer them warmth, stability, and new experiences — whether it&apos;s a trip to the park,
              making cookies, or just having a movie night.
            </p>
            <p className="font-bold">It&apos;s simple. It&apos;s manageable. And it changes lives.</p>
          </div>
        </div>

        <div className="w-full max-w-[560px] lg:-my-24 lg:-mr-[170px] lg:w-[775px] lg:max-w-none lg:shrink-0">
          <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }} aria-hidden>
            {/* Arch */}
            <div className="absolute rounded-t-full rounded-b-[16px] bg-teal-100" style={box(171.49, 241, 387.87, 469.85)} />
            <Brush bbox={[108, 0, 666.53, 657.5]} w={613.5} h={323.79} rotate={42.65} mask="/images/brush-mask-1.webp" />
            <img
              src="/images/about-child.webp"
              alt=""
              width={433}
              height={649}
              loading="lazy"
              className="absolute object-cover"
              style={box(154, 62, 433, 649)}
            />
            <Brush bbox={[0, 402, 558.65, 452.94]} w={511.29} h={236.4} rotate={28.39} mask="/images/brush-mask-2.webp" />
            <Shape bbox={[469, 527, 194.59]} inner={145} rotate={-26.61} src="/images/icons/shape-yellow-half.svg" inset="50% 0 0 0" />
            <Shape bbox={[113, 159.24, 112.96]} inner={84.17} rotate={-26.61} src="/images/icons/shape-quarter-1.svg" inset="25% 50% 6.7% 0" />
            <Shape bbox={[559, 255, 112.96]} inner={84.17} rotate={-26.61} src="/images/icons/shape-quarter-2.svg" inset="25% 50% 6.7% 0" />
            <Shape bbox={[77, 350, 202.35]} inner={145} rotate={144.33} src="/images/icons/shape-ring-half.svg" inset="50% 0 0 0" />
          </div>
        </div>
      </div>
    </section>
  );
}
