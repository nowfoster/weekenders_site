import ButtonLink from "../ButtonLink";
import { links } from "@/content/site";
import { blogSidebar } from "@/content/blog";

export default function IntroChatCard() {
  return (
    <section
      aria-labelledby="intro-chat-heading"
      className="flex flex-col gap-4 rounded-[24px] bg-lilac-subtle p-6 sm:p-8"
    >
      <h2 id="intro-chat-heading" className="text-h5 font-semibold">
        {blogSidebar.title}
      </h2>
      <p className="text-body-l">{blogSidebar.body}</p>
      <ButtonLink href={links.bookIntroChat} className="w-full justify-between">
        Book an intro chat
      </ButtonLink>
    </section>
  );
}
