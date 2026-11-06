import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";

// Photo collage positions on the 1440 × 748 desktop canvas (Figma units).
const W = 1440;
const H = 748;
const photos = [
  { src: "/images/social-beach.webp", alt: "A parent walking two young children along the shoreline", x: 242, y: 3, w: 243, h: 254, round: "rounded-b-[24px]", pos: "50% 50%" },
  { src: "/images/social-walk.webp", alt: "A family walking hand in hand along a woodland path", x: 860, y: 2, w: 342, h: 254, round: "rounded-b-[24px]", pos: "50% 60%" },
  { src: "/images/social-kitchen.webp", alt: "A girl smiling while baking", x: -120, y: 112, w: 243, h: 320, round: "rounded-[24px]", pos: "19% 50%" },
  { src: "/images/social-reading.webp", alt: "A father reading a picture book with a toddler", x: 1317, y: 112, w: 243, h: 320, round: "rounded-[24px]", pos: "60% 0%" },
  { src: "/images/social-toddler.webp", alt: "A toddler reaching out on a sunny day", x: 138, y: 506, w: 347, h: 242, round: "rounded-t-[24px]", pos: "50% 50%" },
  { src: "/images/social-friends.webp", alt: "Three friends laughing together", x: 1061, y: 494, w: 243, h: 254, round: "rounded-t-[24px]", pos: "62% 33%" },
];

export default function SocialMedia() {
  return (
    <section className="bg-white" aria-labelledby="social-heading">
      <div className="relative overflow-hidden rounded-[24px] bg-mint">
        {/* Desktop: scattered collage around the headline */}
        <div className="relative mx-auto hidden max-w-[1440px] lg:block" style={{ aspectRatio: `${W} / ${H}` }}>
          {photos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={`absolute object-cover ${p.round}`}
              style={{
                left: `${(p.x / W) * 100}%`,
                top: `${(p.y / H) * 100}%`,
                width: `${(p.w / W) * 100}%`,
                height: `${(p.h / H) * 100}%`,
                objectPosition: p.pos,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 px-4 py-16 text-center lg:absolute lg:inset-x-0 lg:top-[43.5%] lg:p-0">
          <h2 id="social-heading" className="text-[36px] leading-[44px] font-bold tracking-[-0.022em] sm:text-display-2">
            Little updates, big moments
          </h2>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[20px] leading-[26px] font-semibold tracking-[-0.019em] sm:text-h4">Follow us on social media</p>
            <div className="pt-4">
              <ButtonLink href={links.instagram} variant="lilac">
                Follow @nowfosteruk
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: simple photo grid */}
        <ul className="grid grid-cols-2 gap-3 px-4 pb-4 sm:grid-cols-3 lg:hidden" aria-hidden>
          {photos.map((p) => (
            <li key={p.src} className="aspect-[4/5] overflow-hidden rounded-[20px]">
              <img src={p.src} alt="" loading="lazy" className="size-full object-cover" style={{ objectPosition: p.pos }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
