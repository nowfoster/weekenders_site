import type { CSSProperties } from "react";

// The decorations are positioned relative to the 571 × 496 photo (Figma units)
// with percentages, so they scale with it and may spill outside its box.
const W = 571;
const H = 496;
const box = (x: number, y: number, w: number, h: number): CSSProperties => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  width: `${(w / W) * 100}%`,
  height: `${(h / H) * 100}%`,
});

/** A lilac brush stroke: a flat rectangle masked by a brush-texture PNG, then rotated. */
function Brush({
  bbox,
  w,
  h,
  rotate,
  mask,
}: {
  bbox: [number, number, number, number];
  w: number;
  h: number;
  rotate: number;
  mask: string;
}) {
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
      <div
        className="relative shrink-0"
        style={{
          width: `${(inner / s) * 100}%`,
          height: `${(inner / s) * 100}%`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <img src={src} alt="" className="absolute block size-full" style={{ inset }} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="overflow-hidden bg-mint" aria-labelledby="about-heading">
      <div className="container-site flex flex-col gap-24 pt-16 pb-24 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:pt-[252px] lg:pb-[93px]">
        <div className="flex w-full flex-col gap-8 lg:w-[618px] lg:shrink-0">
          <h2 id="about-heading" className="heading-1">
            About the weekenders programme
          </h2>
          <div className="flex flex-col gap-7 text-body-xl">
            <p>
              Weekenders helps you fit fostering in your life - building a relationship with a child. As a Weekender
              Foster Carer, you&apos;ll welcome a child into your home for one weekend a month.
            </p>
            <p>
              It&apos;s a chance to offer them warmth, stability, and new experiences — whether it&apos;s a trip to the
              park, making cookies, or just having a movie night.
            </p>
            <p className="font-bold">It&apos;s simple. It&apos;s manageable. And it changes lives.</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[571px] lg:mx-0 lg:w-[571px] lg:shrink-0 lg:translate-x-[24px]">
          <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
            <Brush
              bbox={[66.24, -264.5, 676.04, 641.56]}
              w={613.5}
              h={323.79}
              rotate={39.09}
              mask="/images/brush-mask-1.webp"
            />
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <img
                src="/images/about-baking.webp"
                alt="Children's and adults' hands cutting out cookies in flour on a kitchen table"
                width={1800}
                height={1200}
                loading="lazy"
                className="absolute top-0 left-[-24.6%] h-[114.59%] w-[149.29%] max-w-none"
              />
            </div>
            <div aria-hidden>
              <Shape
                bbox={[44, -178.47, 112.96]}
                inner={84.17}
                rotate={-26.61}
                src="/images/icons/shape-quarter-1.svg"
                inset="25% 50% 6.7% 0"
              />
              <Shape
                bbox={[-63, 50.53, 202.35]}
                inner={145}
                rotate={144.33}
                src="/images/icons/shape-ring-half.svg"
                inset="50% 0 0 0"
              />
              <Brush
                bbox={[-139.54, 252.53, 479.31, 388.61]}
                w={438.68}
                h={202.82}
                rotate={28.39}
                mask="/images/brush-mask-2.webp"
              />
              <Shape
                bbox={[473, -31.47, 112.96]}
                inner={84.17}
                rotate={-26.61}
                src="/images/icons/shape-quarter-2.svg"
                inset="25% 50% 6.7% 0"
              />
              <Shape
                bbox={[441, 300.53, 194.59]}
                inner={145}
                rotate={-26.61}
                src="/images/icons/shape-yellow-half.svg"
                inset="50% 0 0 0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
