import Logo from "./Logo";
import { SmartLink } from "./ButtonLink";
import { links, site } from "@/content/site";

const columns = [
  {
    title: "Now Foster",
    items: [
      { label: "Weekenders", href: "/become-a-weekender" },
      { label: "About us", href: links.aboutUs },
      { label: "Blog", href: links.blog },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "LinkedIn", href: links.linkedin },
      { label: "Instagram", href: links.instagram },
      { label: "Facebook", href: links.facebook },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy policy", href: links.privacyPolicy },
      { label: "Cookie policy", href: links.cookiePolicy },
      { label: "Anti-slavery statement", href: links.modernSlavery },
    ],
  },
];

/** `under` is the colour of the section above, visible behind the rounded top corners. */
export default function Footer({ under = "bg-white" }: { under?: string }) {
  return (
    <div className={under}>
      <footer className="overflow-hidden rounded-t-[24px] bg-brand text-white">
        <div className="container-site pt-16 lg:pt-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-10">
              <Logo tone="light" />
              <p className="max-w-[272px] text-body-m">
                <strong className="font-bold">Fostering reimagined.</strong>
                <br />
                Now Foster is a Registered Charity in England and Wales number {site.charityNumber}.
              </p>
              <img
                src="/images/cyber-essentials.webp"
                alt="Cyber Essentials Plus certified"
                width={129}
                height={91}
                loading="lazy"
                className="-ml-[31px] h-[91px] w-[129px] object-cover"
              />
            </div>
            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-8">
              {columns.map((col) => (
                <div key={col.title} className="lg:w-[187px]">
                  <h2 className="text-body-m font-bold">{col.title}</h2>
                  <ul className="mt-4 flex flex-col gap-4 text-body-m">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <SmartLink href={item.href} className="hover:underline">
                          {item.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Large watermark wordmark */}
          <img
            src="/images/icons/footer-logo.svg"
            alt=""
            aria-hidden
            width={1206}
            height={273}
            loading="lazy"
            className="mt-12 mb-14 h-auto w-full max-w-[1212px] opacity-5 lg:mt-[-20px]"
          />
        </div>
      </footer>
    </div>
  );
}
