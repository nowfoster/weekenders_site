/**
 * Site-wide settings, links and copy. Edit this file to change content
 * without touching layout code.
 */

const NOW_FOSTER = "https://nowfoster.org";

/** Canonical origin used for SEO tags & sitemap. Netlify sets URL at build time. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "Weekenders by Now Foster",
  shortName: "Weekenders",
  description:
    "Weekenders is weekend fostering from Now Foster: welcome a child or young person in care into your home one weekend a month. Available in Greater London, Greater Manchester, Durham and North Somerset.",
  charityNumber: "1207932",
  email: "hello@nowfoster.org",
};

/** Default social share image (1200 × 630). */
export const ogImage = { url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Weekenders by Now Foster" };

export const links = {
  /** Where every "Book an intro chat" button goes (Now Foster's existing sign-up form). */
  bookIntroChat: `${NOW_FOSTER}/weekenders#landing_form`,
  readinessChecker: `${NOW_FOSTER}/readiness_checker`,
  allFaqs: `${NOW_FOSTER}/weekenders`,
  aboutUs: `${NOW_FOSTER}/about_us`,
  blog: "https://medium.com/@nowfoster",
  privacyPolicy: `${NOW_FOSTER}/privacy_policy`,
  // No standalone cookie policy exists yet on nowfoster.org; cookies are covered by the privacy policy.
  cookiePolicy: `${NOW_FOSTER}/privacy_policy`,
  modernSlavery: `${NOW_FOSTER}/modern_slavery_statement`,
  instagram: "https://www.instagram.com/nowfosteruk/",
  linkedin: "https://www.linkedin.com/company/nowfoster/",
  facebook: "http://facebook.com/nowfosterorg",
  /** TODO: replace with the URL of Amy's video once it's published. */
  amyStory: "https://medium.com/@nowfoster",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Become a Weekender", href: "/become-a-weekender" },
  { label: "Stories", href: "/#stories" },
  { label: "About us", href: links.aboutUs },
  { label: "Blog", href: links.blog },
] as const;

export const regions = [
  { name: "Durham", dot: "/images/map/dot-durham.svg", chipDot: "/images/map/chipdot-durham.svg" },
  { name: "Greater Manchester", dot: "/images/map/dot-manchester.svg", chipDot: "/images/map/chipdot-manchester.svg" },
  { name: "Greater London", dot: "/images/map/dot-london.svg", chipDot: "/images/map/chipdot-london.svg" },
  { name: "North Somerset", dot: "/images/map/dot-somerset.svg", chipDot: "/images/map/chipdot-somerset.svg" },
] as const;

export type RegionName = (typeof regions)[number]["name"];

/**
 * Rough postcode-area → region lookup for the "Check your area" widget.
 * Covers each region "and surrounding areas", so it is a guide, not a guarantee.
 */
export const postcodeAreas: Record<RegionName, string[]> = {
  Durham: ["DH", "DL", "SR", "TS", "NE"],
  "Greater Manchester": ["M", "BL", "OL", "SK", "WN", "WA"],
  "Greater London": [
    "E", "EC", "N", "NW", "SE", "SW", "W", "WC",
    "BR", "CR", "DA", "EN", "HA", "IG", "KT", "RM", "SM", "TW", "UB",
  ],
  "North Somerset": ["BS", "BA", "TA"],
};

export const howItWorks = [
  {
    step: 1,
    title: "Let's have an informal chat",
    body: "Start by having a relaxed chat with us. No pressure, no commitment – just an opportunity to ask questions, learn more, and see if Weekend fostering is right for you.",
  },
  {
    step: 2,
    title: "Get assessed, trained and matched",
    body: "We'll support you through the assessment and training process, designed to ensure you feel fully prepared.",
  },
  {
    step: 3,
    title: "Welcome a child for the weekend",
    body: "With everything in place, you'll be ready to offer a child a safe, happy space one weekend a month.",
  },
] as const;

export const stories = [
  {
    name: "Nadine",
    quote: "Fostering has been, hands down, the best thing that I have done over the past decade.",
    summary:
      "Nadine has been fostering for over a decade. She lives in North London and became a Weekender to stay involved in a way that fits around her work…",
    image: "/images/story-nadine.webp",
    imageAlt: "Nadine, smiling, with her hands clasped",
    imagePosition: "50% 50%",
    flip: true,
    href: links.blog,
  },
  {
    name: "Martin and Ruth",
    quote: "We love seeing her dream big dreams, knowing that we have been able to help her.",
    summary:
      "Martin and Ruth live in Manchester with their two children. They first welcomed a 10 year old girl for weekend stays, and three years on, she's part of the family...",
    image: "/images/story-martin-ruth.webp",
    imageAlt: "Martin and Ruth laughing together at home",
    imagePosition: "50% 50%",
    flip: false,
    href: links.blog,
  },
  {
    name: "Ali",
    quote: "She's like a big sister and a really good friend at the same time.",
    summary:
      "Ali lives in Durham and works full time. Becoming a Weekender meant he could foster without changing his week, and build a bond that's grown into something special…",
    image: "/images/story-ali.webp",
    imageAlt: "Ali smiling outdoors in a blue t-shirt",
    imagePosition: "50% 30%",
    flip: false,
    href: links.blog,
  },
  {
    name: "Ahmed",
    quote: "Fostering has been, hands down, the best thing that I have done over the past decade.",
    summary:
      "Ahmed is a teacher who wasn't sure fostering would fit around their life. One intro chat later, they're now two years into being a Weekender…",
    image: "/images/story-ahmed.webp",
    imageAlt: "Ahmed looking into the distance outdoors",
    imagePosition: "50% 50%",
    flip: false,
    href: links.blog,
  },
] as const;

export const stats = [
  {
    figure: "25,000",
    text: "is the predicted shortage of foster care families nationwide by 2028.",
    note: "Weekenders offers an entry point into fostering for people who can't commit to full-time care yet.",
    icon: "/images/icons/icon-calendar.svg",
    bg: "bg-lilac-subtle",
    wash: "#ccb4cb",
    washOpacity: 0.5,
  },
  {
    figure: "1 in 10",
    text: "children experience instability in their foster home.",
    note: "Weekenders build long-term relationships with children in care and support their full-time carers.",
    icon: "/images/icons/icon-house-heart.svg",
    bg: "bg-mint",
    wash: "#9fccd2",
    washOpacity: 0.45,
  },
  {
    figure: "Only 13%",
    text: "of care leavers go on to higher education, vs 45% of peers.",
    note: "Weekenders provides additional, consistent support and guidance for children in care.",
    icon: "/images/icons/icon-graduation-cap.svg",
    bg: "bg-butter",
    wash: "#fcd34d",
    washOpacity: 0.45,
  },
] as const;

/**
 * FAQ copy. The first answer comes from the design; the rest are DRAFT
 * answers written for launch and should be reviewed by the Now Foster team.
 */
export const faqs = [
  {
    q: "Do I need parenting experience?",
    a: "No. You don't need to have raised children to be a brilliant Weekender. We'll train you, guide you and support you at every step, so you feel prepared and confident from your very first weekend.",
  },
  {
    q: "Can I foster if I rent my home?",
    a: "Yes. Many foster carers rent. You'll need a stable home with a spare bedroom for a child to stay in, and we'll talk through anything else with you during your intro chat.",
  },
  {
    q: "Can I foster if I work full time?",
    a: "Yes – that's exactly who Weekenders is designed for. Because you foster one weekend a month, it can fit around a full-time job.",
  },
  {
    q: "Can I foster if I'm single?",
    a: "Absolutely. Weekenders come from all walks of life – single, married, in a relationship, with or without children of their own.",
  },
  {
    q: "Will I get support along the way?",
    a: "Yes. From your first chat through training, assessment and beyond, you'll have a dedicated team behind you, plus a community of other Weekenders to share experiences with.",
  },
  {
    q: "How long does it take to become a Weekender?",
    a: "It usually takes a few months from your intro chat to approval. We'll guide you through each stage and keep things moving at a pace that works for you.",
  },
] as const;

/**
 * "How to become a Weekender" steps. Step 1 detail comes from the design;
 * the descriptions for steps 2–6 are DRAFT copy to be reviewed.
 */
export const becomeSteps = [
  {
    title: "Intro chat",
    subtitle: "Have an informal chat with us",
    body: "Let's get to know each other. This is an introductory chat for anyone interested in becoming a Weekender. You'll have a video chat or a phone call with one of our Journey Guides.",
    details: [
      {
        heading: "We'll talk about",
        icon: "/images/icons/icon-chat.svg",
        items: [
          "What being a Weekender means",
          "The process of becoming a Weekender",
          "Any questions you have",
        ],
      },
      {
        heading: "Format",
        icon: "/images/icons/icon-format.svg",
        items: ["30 minutes, by video or phone"],
      },
    ],
    cta: true,
  },
  {
    title: "Home visit",
    subtitle: "We'll visit you at home to get to know you more",
    body: "One of our team will come and see you at home. It's a friendly conversation to learn more about you, your household and your support network, and to answer any new questions.",
  },
  {
    title: "Taster training",
    subtitle: "Learn with others from a coach",
    body: "Join a small group session led by an experienced coach. You'll learn what weekend fostering looks like day to day and meet other people starting their journey.",
  },
  {
    title: "Application",
    subtitle: "Submit your official application",
    body: "When you're ready, you'll complete your formal application. We'll help you gather everything you need and explain each part as you go.",
  },
  {
    title: "Assessment",
    subtitle: "Get assessed by a social worker",
    body: "A social worker will meet with you over a number of sessions to get to know you well. It's a chance to reflect on your strengths and the support you'll need.",
  },
  {
    title: "Panel",
    subtitle: "Answer questions from a panel to get approved",
    body: "Your assessment goes to a fostering panel, who'll meet you and make a recommendation. Once approved, you're ready to welcome a child for your first weekend.",
  },
] as const;
