import type { PersonImage } from "@/content/team";

/**
 * Headshot, or a neutral grey placeholder block (as in the design) until a real photo is supplied.
 */
export default function PersonPhoto({
  image,
  name,
  className = "",
}: {
  image?: PersonImage;
  name: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className={`relative overflow-hidden bg-line ${className}`}>
        <img
          src={image.src}
          alt={image.alt ?? name}
          width={600}
          height={640}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
    );
  }
  return (
    <div className={`flex items-end justify-center bg-line ${className}`} aria-hidden>
      <img src="/images/team/placeholder-person.svg" alt="" width={64} height={64} className="size-16" />
    </div>
  );
}
