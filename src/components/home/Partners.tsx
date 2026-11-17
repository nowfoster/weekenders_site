// Each logo sits in a 174.5 × 60 cell (Figma units); `box` is the logo's
// [x, y, width, height] within the cell, converted to percentages so the
// whole cell scales with the grid column.
const CELL_W = 174.5;
const CELL_H = 60;

type Partner = {
  name: string;
  src: string;
  box: [number, number, number, number];
  /** Logo PNG is used as an alpha mask and filled black (as in the design). */
  mask?: boolean;
  /** Cell background (Hertfordshire's logo sits on a teal tile). */
  tile?: string;
};

const partners: Partner[] = [
  {
    name: "Durham County Council",
    src: "/images/partners/durham.svg",
    box: [12, 0, 150, 64],
  },
  {
    name: "Brent Council",
    src: "/images/partners/brent.svg",
    box: [18, 5, 139, 54],
  },
  {
    name: "Haringey Council",
    src: "/images/partners/haringey.webp",
    box: [18, 5, 138, 54],
  },
  {
    name: "Islington Council",
    src: "/images/partners/islington.webp",
    box: [0, 7, 174, 50.96],
    mask: true,
  },
  {
    name: "Enfield Council",
    src: "/images/partners/enfield.svg",
    box: [24, 0, 126, 63],
  },
  {
    name: "Royal Borough of Greenwich",
    src: "/images/partners/greenwich.svg",
    box: [32, 0, 109.75, 53.67],
  },
  {
    name: "Southwark Council",
    src: "/images/partners/southwark.svg",
    box: [22.62, 3.34, 130.24, 53.31],
  },
  {
    name: "Waltham Forest Council",
    src: "/images/partners/waltham-forest.svg",
    box: [29.09, 0, 115.6, 59.9],
  },
  {
    name: "Bromley Council",
    src: "/images/partners/bromley.webp",
    box: [34.1, -2, 107.31, 67.6],
  },
  {
    name: "London Borough of Merton",
    src: "/images/partners/merton.webp",
    box: [1, 12, 172.4, 39],
    mask: true,
  },
  {
    name: "Newham London",
    src: "/images/partners/newham.webp",
    box: [20, 0, 135, 60],
  },
  {
    name: "Hertfordshire County Council",
    src: "/images/partners/hertfordshire.webp",
    box: [35, -20, 104, 104],
    tile: "bg-[#0b5258]",
  },
];

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export default function Partners() {
  return (
    <section className="bg-white" aria-labelledby="partners-heading">
      <div className="container-site section-y flex flex-col items-center gap-8 lg:gap-12">
        <h2 id="partners-heading" className="heading-1 text-center">
          Our partners
        </h2>
        <ul className="grid w-full max-w-[1217px] grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-[34px] lg:grid-cols-6 lg:gap-y-14">
          {partners.map((p) => {
            const [x, y, w, h] = p.box;
            const style = {
              left: pct(x, CELL_W),
              top: pct(y, CELL_H),
              width: pct(w, CELL_W),
              height: pct(h, CELL_H),
            };
            return (
              <li
                key={p.name}
                className={`relative overflow-hidden ${p.tile ? `rounded-[8px] ${p.tile}` : ""}`}
                style={{ aspectRatio: `${CELL_W} / ${CELL_H}` }}
              >
                {p.mask ? (
                  <div
                    role="img"
                    aria-label={p.name}
                    className="absolute bg-black"
                    style={{
                      ...style,
                      maskImage: `url(${p.src})`,
                      WebkitMaskImage: `url(${p.src})`,
                      maskSize: "100% 100%",
                      WebkitMaskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                  />
                ) : (
                  <img
                    src={p.src}
                    alt={p.name}
                    loading="lazy"
                    className="absolute max-w-none object-cover"
                    style={style}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
