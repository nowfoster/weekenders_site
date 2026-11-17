/**
 * Weekender stories: the cards on the home page and /stories, and the article pages at /stories/<slug>.
 *
 * Only Justice and Zanab's story has full article copy in the design. The other stories render a
 * short article built from their card summary and quote until their full articles are written
 * (add an `article` to each one when the copy is ready).
 */

import { links } from "./site";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; by: string };

export type Story = {
  slug: string;
  /** Who the story is about, e.g. "Martin and Ruth" */
  name: string;
  /** Pull quote, used as the card quote and the article title */
  quote: string;
  /** Card teaser */
  summary: string;
  /** Portrait photo for cards (omit for text-only cards) */
  image?: {
    src: string;
    alt: string;
    /** CSS object-position */
    position: string;
    /** Mirror the photo horizontally on cards */
    flip?: boolean;
  };
  /** Wide photo for the article header (omit to show no photo) */
  headerImage?: { src: string; alt: string; position: string };
  weekenderSince?: string;
  readTime?: string;
  /** Full article. Without one, the page shows the summary and the quote. */
  article?: { lead: string; blocks: ArticleBlock[] };
  /** Show this story in the home page "Weekender Stories" section */
  onHome?: boolean;
};

export const stories: Story[] = [
  {
    slug: "nadine",
    name: "Nadine",
    quote: "Fostering has been, hands down, the best thing that I have done over the past decade.",
    summary:
      "Nadine has been fostering for over a decade. She lives in North London and became a Weekender to stay involved in a way that fits around her work…",
    image: {
      src: "/images/story-nadine.webp",
      alt: "Nadine, smiling, with her hands clasped",
      position: "50% 50%",
      flip: true,
    },
    headerImage: { src: "/images/stories/nadine-wide.webp", alt: "Nadine, smiling, with her hands clasped", position: "50% 30%" },
    onHome: true,
  },
  {
    slug: "martin-and-ruth",
    name: "Martin and Ruth",
    quote: "We love seeing her dream big dreams, knowing that we have been able to help her.",
    summary:
      "Martin and Ruth live in Manchester with their two children. They first welcomed a 10 year old girl for weekend stays, and three years on, she's part of the family...",
    image: {
      src: "/images/story-martin-ruth.webp",
      alt: "Martin and Ruth laughing together at home",
      position: "50% 50%",
    },
    headerImage: {
      src: "/images/stories/family-beach-wide.webp",
      alt: "A father holding a toddler up on his shoulders on the beach while a woman laughs beside them",
      position: "50% 58%",
    },
    onHome: true,
  },
  {
    slug: "leah",
    name: "Leah",
    quote: "It's the one weekend where I don't have to worry about anything. I just get to be me.",
    summary:
      "Leah has stayed with her Weekenders every month for two years. They taught her to ride a bike, and she taught them how to bake properly.",
  },
  {
    slug: "ali",
    name: "Ali",
    quote: "She's like a big sister and a really good friend at the same time.",
    summary:
      "Ali lives in Durham and works full time. Becoming a Weekender meant he could foster without changing his week, and build a bond that's grown into something special…",
    image: {
      src: "/images/story-ali.webp",
      alt: "Ali smiling outdoors in a blue t-shirt",
      position: "50% 30%",
    },
    headerImage: { src: "/images/stories/ali-wide.webp", alt: "Ali smiling outdoors in a blue t-shirt", position: "50% 30%" },
    onHome: true,
  },
  {
    slug: "ahmed",
    name: "Ahmed",
    quote: "Fostering has been, hands down, the best thing that I have done over the past decade.",
    summary:
      "Ahmed is a teacher who wasn't sure fostering would fit around their life. One intro chat later, they're now two years into being a Weekender…",
    image: {
      src: "/images/story-ahmed.webp",
      alt: "Ahmed looking into the distance outdoors",
      position: "50% 50%",
    },
    headerImage: { src: "/images/stories/ahmed-wide.webp", alt: "Ahmed looking into the distance outdoors", position: "50% 30%" },
    onHome: true,
  },
  {
    slug: "sam",
    name: "Sam",
    quote: "They always remember what I feel like. It feels like someone's actually listening.",
    summary:
      "Sam spends one weekend a month with Priya and her partner. Their Saturday football and Sunday pancakes have become a tradition.",
  },
  {
    slug: "justice-and-zanab",
    name: "Justice and Zanab",
    quote: "We love seeing her dream big dreams, knowing that we have been able to help her.",
    summary:
      "Justice and Zanab live in Durham with their two young sons and both work full time. Becoming Weekenders meant they could foster together without changing their week.",
    headerImage: {
      src: "/images/stories/family-beach-wide.webp",
      alt: "Justice lifting a toddler up on his shoulders on the beach while Zanab laughs beside them",
      position: "50% 58%",
    },
    weekenderSince: "2023",
    readTime: "4 min read",
    article: {
      lead: "Justice and Zanab live in Durham with their two young sons and both work full time. Becoming Weekenders meant they could foster together without changing their week, and build a bond that's grown into something special for the whole family.",
      blocks: [
        {
          type: "paragraph",
          text: "We'd talked about fostering for years, but with two busy jobs and two small boys, we always assumed it wasn't for families like ours. The intro chat changed our minds in about ten minutes.",
        },
        {
          type: "paragraph",
          text: "The team explained that Weekenders is planned well ahead, so we'd always know which weekend was coming up. That was what made it feel possible for us.",
        },
        { type: "heading", text: "Finding our rhythm" },
        {
          type: "paragraph",
          text: "It took a few months to find our feet. Now our weekends just work. Justice takes her climbing, Zanab bakes with her, and the boys rope her into every board game going. She beats all of us.",
        },
        {
          type: "quote",
          text: "We thought we'd be the ones giving something. We didn't realise how much she'd give back to our family.",
          by: "Zanab",
        },
        { type: "heading", text: "Advice for anyone thinking about it" },
        {
          type: "paragraph",
          text: "Just have the chat, and have it together. You don't have to have it all figured out, and nobody expects you to. The support is there from day one, for both of you.",
        },
      ],
    },
  },
];

export const storyHref = (story: Story) => `/stories/${story.slug}`;

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}

/** Previous and next stories, wrapping around at either end. */
export function getAdjacentStories(slug: string) {
  const i = stories.findIndex((s) => s.slug === slug);
  const n = stories.length;
  return { previous: stories[(i - 1 + n) % n], next: stories[(i + 1) % n] };
}

/** Article body for a story; falls back to the card summary and quote when there's no full article yet. */
export function getArticle(story: Story): { lead: string; blocks: ArticleBlock[] } {
  if (story.article) return story.article;
  return {
    lead: story.summary.replace(/\s*(…|\.\.\.)$/, "."),
    blocks: [{ type: "quote", text: story.quote, by: story.name }],
  };
}

export const homeStories = stories.filter((s) => s.onHome);

/** Number of story cards shown on /stories before "Load more stories". */
export const storiesPerPage = 6;

export const storiesPage = {
  hero: {
    title: ["One weekend a month.", "Hundreds of stories."],
    body: "Hear from carers and young people about what weekend fostering has meant to them. Every story is different, but they all started with a simple chat.",
    image: {
      src: "/images/stories/stories-hero.webp",
      alt: "A man, a woman and a toddler in a red coat exploring the water's edge on a beach",
    },
  },
  moreStories: {
    title: "More Weekender stories",
    body: "Hear from people who've been where you are now, and what one weekend a month has meant to them.",
  },
};

/** Amy's video story: featured on /stories and on /become-a-weekender. */
export const amyStory = {
  label: "Amy's story",
  title: "My weekend fosterer saved my life",
  body: "When Jade was 14, life at home was really hard. Every other weekend she stayed with Sue, and for those two days she could finally breathe. Knowing she had somewhere safe to go, with people who really wanted her, kept her going when nothing else did.",
  cta: "Watch Amy's full story",
  href: links.amyStory,
  image: { src: "/images/amy-video.webp", alt: "Amy, smiling, sitting at a laptop at home" },
};
