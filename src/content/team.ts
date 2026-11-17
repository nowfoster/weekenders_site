/**
 * "Meet the team" page copy. Edit this file to change people, roles or bios.
 *
 * Photos: every person can take an optional `image`. Drop a WebP headshot into
 * public/images/team/ and set e.g. `image: { src: "/images/team/sila-krohn.webp", alt: "Sila Krohn" }`.
 * Without an image, a neutral placeholder block is shown.
 * TODO: the design only has placeholder photos for the team, Journey Guides and trustees.
 */

export type PersonImage = {
  src: string;
  /** Defaults to the person's name. */
  alt?: string;
  /** CSS object-position, e.g. "50% 20%". */
  position?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  pronouns?: string;
  email?: string;
  image?: PersonImage;
};

export type JourneyGuide = {
  name: string;
  role: string;
  pronouns?: string;
  email?: string;
  quote: string;
  image?: PersonImage;
};

export type Trustee = {
  name: string;
  role: string;
  bio: string;
  image?: PersonImage;
};

export const teamHero = {
  title: "Meet the team",
  intro:
    "From the team who welcome you on your very first call, to the patron and trustees who keep us on course – meet the people behind Weekenders.",
};

export const weekendersTeam = {
  title: "Weekenders team",
  intro:
    "Our passionate Weekenders Team works across the country to make every future Weekender feel welcomed, supported and excited throughout their journey, from the very first conversation to being matched with a child and beyond.",
  members: [
    { name: "Sila Krohn", role: "Weekenders Programme Manager", pronouns: "he/him", email: "sila@nowfoster.org" },
    { name: "Neha Patel", role: "Weekenders Regional Manager – London", pronouns: "she/her", email: "neha@nowfoster.org" },
    {
      name: "Alex Smith",
      role: "Weekenders Regional Manager – South East",
      pronouns: "they/them",
      email: "alex@nowfoster.org",
    },
    {
      name: "Patty Peppermint",
      role: "Weekenders Regional Manager – North West",
      pronouns: "she/her",
      email: "patty@nowfoster.org",
    },
  ] satisfies TeamMember[] as TeamMember[],
};

export const journeyGuides = {
  title: "Weekenders Journey Guides",
  intro:
    "Our Journey Guides drive the Weekenders experience. They support people throughout the application and assessment process, helping make every step of the journey as positive and engaging as possible.",
  guides: [
    {
      name: "Kira",
      pronouns: "she/her",
      role: "Weekenders Journey Guide",
      email: "kira@nowfoster.org",
      quote:
        "As a foster carer, I’ve seen the incredible difference a consistent adult can make in a young person’s life. Now I get to help people considering Weekending explore the impact they could have, and it’s amazing to see them realise how much difference just one weekend a month can make.",
    },
    {
      name: "Freya",
      pronouns: "she/her",
      role: "Weekenders Journey Guide",
      email: "freya@nowfoster.org",
      quote:
        "Growing up in care, I benefited so much from having amazing foster carers. Now I love speaking to people considering fostering, and helping them explore the impact they could have on young people. It really is a life-changing impact!",
    },
  ] satisfies JourneyGuide[] as JourneyGuide[],
};

export const patron = {
  title: "Our Patron",
  name: "Sir John Timpson, CBE",
  role: "Patron",
  image: {
    src: "/images/team/patron-john-timpson.webp",
    alt: "Sir John Timpson smiling in front of a wall of keys",
    width: 960,
    height: 1440,
  },
  bio: [
    "Sir John Timpson, CBE is the Chairman of the family-owned Timpson retail group and a prominent champion of fostering, adoption, and social care.",
    "The Timpson Group is the UK’s most active employer of people from prison. The Alex Timpson Trust, of which Sir John is a Trustee, is the official company charity of the Timpson Group. Launched in tribute to the late Alex Timpson in 2017, it was established to support children who have had a difficult start to life.",
    "Sir John and his late wife Alex were married for 47 years. They have five children and Sir John and his wife were foster carers for 31 years during which time they fostered 90 children.",
    "In 2004 he was awarded the CBE in the Birthday Honours List for Services to the Retail Sector, and in 2017 he was awarded a knighthood for Services to Business and Fostering.",
    "Sir John was one of the earliest supporters of Now Foster and became the charity’s patron in 2026.",
  ],
};

export const trustees = {
  eyebrow: "Governance",
  title: "Our trustees",
  intro: [
    "Weekenders is a programme created by Now Foster, a charity working to reimagine fostering.",
    "Our trustees bring a wealth of experience and expertise to the charity, working with us to bring more people into fostering and help children in care build lasting relationships.",
  ],
  // TODO: the design's counter reads "01 / 04" but only shows three trustees; add the fourth here.
  people: [
    {
      name: "Andy Theedom",
      role: "Trustee",
      bio: "A Director in PwC's Local Public Services team who works with local authorities and charities across the UK.",
    },
    { name: "Mary Jackson", role: "Trustee", bio: "Chief executive of Frontline, England's largest social work charity" },
    {
      name: "Tasha Unwin",
      role: "Trustee",
      bio: "Tasha has worked as a frontline practitioner in Children's Services since 2018.",
    },
  ] satisfies Trustee[] as Trustee[],
};
