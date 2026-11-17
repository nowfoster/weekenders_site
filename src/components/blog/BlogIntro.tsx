import { blogIntro } from "@/content/blog";

export default function BlogIntro() {
  return (
    <section className="rounded-b-[24px] bg-mint" aria-labelledby="page-heading">
      <div className="container-site flex flex-col gap-5 pt-0 pb-10 lg:pt-12 lg:pb-12">
        <h1
          id="page-heading"
          className="text-[36px] leading-[44px] font-bold tracking-[-0.022em] sm:text-display-2"
        >
          {blogIntro.title}
        </h1>
        <p className="max-w-[608px] text-body-xl">{blogIntro.body}</p>
      </div>
    </section>
  );
}
