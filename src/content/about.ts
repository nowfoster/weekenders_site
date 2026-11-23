/**
 * Copy and data for the About us page (/about-us).
 */

export const aboutHero = {
  heading: "Making foster care mainstream, so more young people in care can thrive.",
  image: "/images/about/hero-friends.webp",
  imageAlt: "A group of friends laughing together with their arms around each other",
};

export const ourStory = {
  eyebrow: "Our story",
  heading: "The Weekenders story in a nutshell",
  paragraphs: [
    "With more foster carers leaving than joining, and thousands of children in care needing more people in their corner, we knew something needed to change. So we brought together people with experience in social work, fostering, recruitment, charity, service design and technology to ask a different question: what if more people could foster in a way that worked around their lives?",
    "The result was Weekenders. A new way of fostering that gives children in care the chance to build lasting relationships with another trusted adult, while opening up fostering to people who might never have considered it possible. Our first Weekenders were recruited in partnership with Newham Council in 2024. Since then, we've grown to work with over 57 local authorities across the country.",
  ],
  regionsIntro: "We’re running Weekenders across four regions in the UK:",
  regions: [
    { name: "Greater North London", dot: "/images/about/dot-teal.svg" },
    { name: "North East England", dot: "/images/about/dot-amber.svg" },
    { name: "Greater Manchester", dot: "/images/about/dot-lilac.svg" },
    { name: "South West England", dot: "/images/about/dot-green.svg" },
  ],
  stat: { label: "We work with", figure: "57+", caption: "Partner local authorities" },
  image: "/images/about/story-conversation.webp",
  imageAlt: "A smiling woman with curly hair talking with someone across a table",
};

export const teamTeaser = {
  eyebrow: "Our team",
  heading: "Meet the team",
  body: "Our passionate team works across the country to make every future Weekender feel welcomed, supported and excited, from the very first conversation to being matched with a child and beyond.",
  cta: { label: "Meet the team", href: "/about-us/meet-the-team" },
  /**
   * Two columns of photos. `crop` reproduces the Figma crop: the image's
   * left/top/width/height as percentages of its tile.
   */
  columns: [
    [
      {
        src: "/images/about/team-downing-street.webp",
        alt: "Two members of the Now Foster team outside 10 Downing Street",
        aspect: "288 / 284",
        crop: { left: -27.43, top: -46.13, width: 137.85, height: 186.38 },
      },
      {
        src: "/images/about/team-event.webp",
        alt: "The Now Foster team and supporters lined up for a photo at an event",
        aspect: "288 / 220",
        crop: { left: -12.42, top: 0, width: 135.95, height: 100 },
      },
    ],
    [
      {
        src: "/images/about/team-workshop.webp",
        alt: "People sitting around a table during a Weekenders workshop",
        aspect: "288 / 220",
        crop: { left: -20.47, top: -15.78, width: 134, height: 131.56 },
      },
      {
        src: "/images/about/team-south-west.webp",
        alt: "Members of the Weekenders team smiling outdoors on a sunny evening",
        aspect: "288 / 284",
        crop: { left: -14.7, top: -9.86, width: 157.75, height: 119.98 },
      },
    ],
  ],
};

export const fundingIntro = {
  eyebrow: "Our funding",
  heading: "How Weekenders is funded",
  paragraphs: [
    "The Weekender Programme is charitable and our work is made possible thanks to a mix of local government partnerships, DfE funding and generous supporters who believe in what we're trying to achieve.",
    "We're enormously grateful to everyone who backs our work, helping us bring more people into fostering and give more children in care the chance to build lasting relationships with people who care about them.",
  ],
};

export type FundingSource = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  /** Band colour; `under` is the previous band's colour, showing behind the rounded top corners. */
  bg: string;
  under: string;
  paragraphs: string[];
  /** Adds "To find out more please email <site.email>" after the paragraphs. */
  emailLine?: boolean;
  aside?: { heading: string; items: string[]; tone: "translucent" | "white" };
  donateCta?: string;
};

/**
 * Funding accordion. The Local Authority and Individual donations copy comes from
 * the design. The Philanthropic and DfE panels are collapsed in the design, so
 * their copy is DRAFT and should be reviewed by the Now Foster team.
 */
export const fundingSources: FundingSource[] = [
  {
    id: "local-authority",
    title: "Local Authority and hub partnerships",
    subtitle: "Working with councils and fostering agencies",
    icon: "/images/about/icon-building.svg",
    bg: "bg-lilac-subtle",
    under: "bg-white",
    paragraphs: [
      "Now Foster and the Weekenders team work in partnership with local authorities and selected independent fostering agencies. For each Weekender who goes to the approval panel, Now Foster receives a recruitment fee, which is reinvested into the Weekenders programme.",
      "We are enormously grateful for support from a number of trusts, foundations and individual donors including the ones listed below and a number of others who choose to remain anonymous.",
    ],
    emailLine: true,
    aside: {
      heading: "Working with",
      items: ["57 local authorities", "Selected not for profit fostering agencies"],
      tone: "translucent",
    },
  },
  {
    id: "philanthropic",
    title: "Philanthropic funding",
    subtitle: "Partners who share our vision",
    icon: "/images/about/icon-users.svg",
    bg: "bg-lilac-300",
    under: "bg-lilac-subtle",
    // DRAFT copy: not in the design.
    paragraphs: [
      "Trusts, foundations and philanthropic partners help us test new ideas, reach more people and build the support that surrounds every Weekender. Their backing lets us invest in the parts of the programme that fees and grants don't cover.",
    ],
    emailLine: true,
  },
  {
    id: "dfe",
    title: "DfE grant via Fostering Hubs and RCCs",
    subtitle: "Scaling Weekenders across the UK",
    icon: "/images/about/icon-government.svg",
    bg: "bg-[#d5b8d2]",
    under: "bg-lilac-300",
    // DRAFT copy: not in the design.
    paragraphs: [
      "Department for Education grant funding, delivered through Fostering Hubs and Regional Care Co-operatives (RCCs), is helping us bring Weekenders to more local authorities so more children in care can benefit.",
    ],
  },
  {
    id: "individual",
    title: "Individual donations",
    subtitle: "People like you, giving once or every month",
    icon: "/images/about/icon-heart.svg",
    bg: "bg-lilac",
    under: "bg-[#d5b8d2]",
    paragraphs: [
      "Every donation helps us reach, train and support more Weekenders, so more young people in care have someone in their corner. Monthly gifts are especially valuable because they let us plan ahead.",
    ],
    donateCta: "Make a donation",
    aside: {
      heading: "Ways to give",
      items: [
        "One-off or monthly donations",
        "Gift Aid adds 25% at no extra cost to you",
        "Cancel a monthly gift at any time",
      ],
      tone: "white",
    },
  },
];

/** Donation widget. Preset amounts in pounds, in the order shown (two rows of three). */
export const donation = {
  amounts: [100, 50, 25, 15, 10, 5],
  defaultAmount: 25,
  minAmount: 1,
  maxAmount: 10000,
  /**
   * Impact line for each preset. PLACEHOLDER copy (only the £25 line is in the
   * design): Now Foster to confirm figures before launch.
   */
  impact: {
    100: "could help cover the training a new Weekender needs before their first weekend.",
    50: "could fund a day out for a young person and their Weekender.",
    25: "could pay for a welcome pack for a young person’s first Weekend.",
    15: "could buy books and games for a young person’s weekend stays.",
    10: "could pay for art and craft supplies for a weekend together.",
    5: "could help cover a hot chocolate stop on a weekend walk.",
  } as Record<number, string>,
  impactOther: "helps us reach, train and support more Weekenders.",
  nudge: { before: "Complete your", after: "gift to help a young person in care thrive" },
};
