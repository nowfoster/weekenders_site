/**
 * "Meet the team" page copy. Edit this file to change people, roles or bios.
 *
 * Team, trustees and their photos come from nowfoster.org/about_us.
 * Photos: every person can take an optional `image`. Drop a WebP headshot into
 * public/images/team/ and set e.g. `image: { src: "/images/team/sila-krohn.webp", alt: "Sila Krohn" }`.
 * Without an image, a neutral placeholder block is shown.
 * TODO: the Journey Guides (Kira, Freya) are from the design and aren't on nowfoster.org: confirm them and add photos.
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
  // From nowfoster.org/about_us (no pronouns or direct emails are published there).
  members: [
    { name: "Sara Fernandez", role: "CEO", image: { src: "/images/team/sara-fernandez.webp", alt: "Sara Fernandez" } },
    { name: "Laurie Kilby", role: "Co-founder and Social Work Practice Lead", image: { src: "/images/team/laurie-kilby.webp", alt: "Laurie Kilby" } },
    { name: "Jan Blum", role: "Experience Lead & Founding Partner", image: { src: "/images/team/jan-blum.webp", alt: "Jan Blum" } },
    { name: "Katie Waldegrave", role: "Co-founder and Partnerships Lead", image: { src: "/images/team/katie-waldegrave.webp", alt: "Katie Waldegrave" } },
    { name: "Sila Krohn", role: "Weekenders Programme Manager", image: { src: "/images/team/sila-krohn.webp", alt: "Sila Krohn" } },
    // TODO: add headshots for Sam, Molly and Amber to public/images/team/.
    { name: "Sam Partington", role: "Lead Developer" },
    { name: "Molly Chan", role: "Weekenders Programme Manager" },
    { name: "Amber Dillon", role: "Weekenders Programme Manager" },
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
  // From nowfoster.org/about_us
  people: [
    {
      name: "Andy Theedom",
      role: "Trustee",
      bio: "A Director in PwC's Local Public Services team who works with local authorities and charities across the UK, Andy brings challenge and insight based on his experience of working in and around fostering and achieving change to improve local outcomes.",
      image: { src: "/images/team/andy-theedom.webp", alt: "Andy Theedom" },
    },
    {
      name: "Mary Jackson",
      role: "Trustee",
      bio: "Chief executive of Frontline, England's largest social work charity. She was previously on the charity's senior team for over six years. She has 20+ years' experience in leadership, change management and communications at operational and strategic levels.",
      image: { src: "/images/team/mary-jackson.webp", alt: "Mary Jackson" },
    },
    {
      name: "Tasha Unwin",
      role: "Trustee",
      bio: "Tasha has worked as a frontline practitioner in Children's Services since 2018. She brings both this first hand knowledge, and her experience of fostering in her own family to Now Foster.",
      image: { src: "/images/team/tasha-unwin.webp", alt: "Tasha Unwin" },
    },
    {
      name: "Ed Baden-Powell",
      role: "Trustee",
      bio: "A senior partner at Simkins LLP, Ed is a lawyer with a wide experience of working with charities delivering opportunities for young people in challenging circumstances. Ed has also fostered and adopted, and he is keen to see more joined-up support for prospective carers.",
      image: { src: "/images/team/ed-baden-powell.webp", alt: "Ed Baden-Powell" },
    },
  ] satisfies Trustee[] as Trustee[],
};
