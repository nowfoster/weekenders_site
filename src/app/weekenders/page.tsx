"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Weekenders() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("landing_form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-green">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-12 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <div className="grid md:grid-cols-2 gap-4 gap-x-8">
              <div className="font-body">
                <h1 className="font-heading text-left font-bold text-white text-5xl sm:text-7xl mb-12">
                  One weekend a month. A lifetime of impact.
                </h1>
                <p className="font-body text-white text-xl sm:text-2xl text-left mb-10">
                  Make a difference through fostering that fits your lifestyle. Become a Weekender and support a child or young person in care - one weekend a time.
                </p>
                <p className="font-body text-white text-xl sm:text-2xl text-left mb-10">
                  Available across Greater London, Durham and North Somerset.
                </p>
                <a
                  onClick={scrollToForm}
                  className="bg-brand-pink border-2 border-brand-pink rounded-full text-brand-green font-heading font-semibold px-5 sm:px-12 py-2 text-xl cursor-pointer"
                  href="#landing_form"
                >
                  Book a chat
                </a>
              </div>
              <Image alt="Two teenagers; one looking delighted holding a budgie" src="/images/jenga.png" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>

      {/* What is the Weekender Programme? */}
      <div className="bg-brand-mint">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h2 className="font-heading text-left font-bold text-brand-green text-2xl sm:text-3xl mb-8">
              What is the Weekender Programme?
            </h2>
            <p className="font-body font-bold text-brand-green text-md sm:text-lg mb-8 mt-8">
              Weekenders helps you fit fostering in your life - building a relationship with a child
            </p>
            <p className="font-body text-brand-green text-md sm:text-lg mb-8 mt-8">
              As a Weekender Foster Carer, you&apos;ll welcome a child into your home for one weekend a month. It&apos;s a chance to offer them warmth, stability, and new experiences — whether it&apos;s a trip to the park, making cookies, or just having a movie night.
            </p>
            <p className="font-body font-bold text-brand-green text-md sm:text-lg mt-8">
              It&apos;s simple. It&apos;s manageable. And it changes lives.
            </p>
          </div>
        </div>
      </div>

      {/* How does it work? */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h2 className="font-heading text-left font-bold text-brand-green text-2xl sm:text-3xl mb-8">
              How does it work?
            </h2>
            <p className="font-body text-brand-green text-md sm:text-lg mb-8 mt-8">
              We know that opening your home to a child, even just for a weekend, is a big step. That&apos;s why we&apos;re with you from the very first conversation, making sure you feel informed, supported, and confident.
            </p>
            <p className="font-body font-bold text-brand-green text-md sm:text-lg mb-8 mt-8">
              All you need is one spare bedroom and the ability to commit to a long-term relationship - we&apos;ll take care of the rest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-brand-mint p-6 text-brand-green rounded">
                <div className="text-5xl font-bold text-brand-pink mb-4">01</div>
                <div className="font-bold mb-4">Let&apos;s have an informal chat</div>
                <div>Start by having a relaxed chat with us. No pressure, no commitment—just an opportunity to ask questions, learn more, and see if Weekend fostering is right for you.</div>
              </div>
              <div className="bg-brand-mint text-brand-green p-6 rounded">
                <div className="text-5xl font-bold text-brand-pink mb-4">02</div>
                <div className="font-bold mb-4">Get assessed, trained & matched</div>
                <div>We&apos;ll support you through the assessment and training process, designed to ensure you feel fully prepared.</div>
              </div>
              <div className="bg-brand-mint text-brand-green p-6 rounded">
                <div className="text-5xl font-bold text-brand-pink mb-4">03</div>
                <div className="font-bold mb-4">Welcome a child for the weekend</div>
                <div>With everything in place, you&apos;ll be ready to offer a child a safe, happy space one weekend a month.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-brand-pink">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <blockquote className="italic font-bold text-xl sm:text-3xl text-brand-green mb-2">
              &ldquo;I was nervous at first, but Now Foster made sure I felt completely supported. My weekends with Liam are the best part of my month.&rdquo;
            </blockquote>
            <div className="text-brand-green">Sarah, Weekender Foster Carer</div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <div className="grid md:grid-cols-2 gap-4 gap-x-8">
              <div className="font-body">
                <h2 className="font-heading text-left font-bold text-brand-green text-2xl sm:text-3xl mb-8">FAQs</h2>

                <h3 className="text-left font-bold text-brand-green text-md sm:text-lg mb-8 mt-8">1. Do I need parenting experience?</h3>
                <p className="font-body text-brand-green text-md sm:text-lg mb-8">
                  You don&apos;t need to have raised children before to be an amazing Weekender. We&apos;ll train you, guide you, and support you every step of the way to make sure you feel prepared and confident.
                </p>

                <h3 className="text-left font-bold text-brand-green text-md sm:text-lg mb-8 mt-8">2. Can I foster if I rent my home?</h3>
                <p className="font-body text-brand-green text-md sm:text-lg mb-8">
                  Yes, of course! As long as you have a spare room, whether you rent or own your home doesn&apos;t matter.
                </p>

                <h3 className="text-left font-bold text-brand-green text-md sm:text-lg mb-8 mt-8">3. Can I foster if I work full-time?</h3>
                <p className="font-body text-brand-green text-md sm:text-lg">
                  Absolutely! Weekend fostering is designed to fit into your life, even with a busy work week.
                </p>
              </div>
              <Image alt="Cartoon of girl feeding an ice-cream to a giraffe" src="/images/zoo.png" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>

      {/* Are you ready? */}
      <div className="bg-brand-mint">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h2 className="font-heading text-left font-bold text-brand-green text-2xl sm:text-3xl mb-8">
              Are you ready to become a Weekender?
            </h2>
            <p className="font-body text-brand-green text-md sm:text-lg mb-8 mt-8">
              If you&apos;re curious about weekend fostering but not quite ready to commit to a chat - start with our{" "}
              <Link className="font-bold hover:underline" href="/readiness_checker">Readiness Checker</Link>.
              It&apos;s a quick, friendly guide that helps you understand what fostering one weekend a month could look like, and whether it might be a good fit for your life.
            </p>
            <h3 className="text-left font-bold text-brand-green text-md sm:text-lg mb-8 mt-8">Ready to talk now?</h3>
            <p className="font-body text-brand-green text-md sm:text-lg mb-8 mt-8">
              Go ahead and scroll down to book a no-pressure intro call using the form below. We&apos;ll answer your questions and walk you through the next steps.
            </p>
            <div className="mt-10 sm:mt-16 flex flex-wrap gap-4">
              <a
                onClick={scrollToForm}
                className="bg-brand-pink border-2 border-brand-pink rounded-full text-brand-green font-heading font-semibold px-5 sm:px-12 py-2 text-xl cursor-pointer"
                href="#landing_form"
              >
                Book a chat
              </a>
              <Link className="bg-white border-2 border-brand-pink rounded-full text-brand-green font-heading font-semibold px-5 sm:px-12 py-2 text-xl" href="/readiness_checker">
                Try the readiness checker
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white" id="landing_form">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h2 className="font-heading text-left font-bold text-brand-green text-2xl sm:text-3xl mb-8">
              Take the first step towards becoming a Weekender
            </h2>
            <p className="font-body text-brand-green text-md sm:text-lg mb-8 mt-8">
              Filling out this form doesn&apos;t commit you to anything - it&apos;s just the first step in exploring if becoming a Weekender is the right fit for you. Once you submit, you&apos;ll be able to book a call with one of our team members. This is a relaxed, no-pressure chat where we&apos;ll answer your questions, learn more about you, and help you understand what fostering one weekend a month could look like.
            </p>

            <form className="max-w-3xl flex flex-col gap-y-4">
              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="first_name">
                  First name <span className="ml-1 text-brand-pink">*</span>
                </label>
                <div className="mt-1">
                  <input type="text" id="first_name" required className="w-full border-3 border-brand-green rounded-md" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="last_name">
                  Last name <span className="ml-1 text-brand-pink">*</span>
                </label>
                <div className="mt-1">
                  <input type="text" id="last_name" required className="w-full border-3 border-brand-green rounded-md" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="phone_number">
                  Phone number <span className="ml-1 text-brand-pink">*</span>
                </label>
                <div className="mt-1">
                  <input type="text" id="phone_number" required className="w-full border-3 border-brand-green rounded-md" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="email">
                  Email <span className="ml-1 text-brand-pink">*</span>
                </label>
                <div className="mt-1">
                  <input type="text" id="email" required className="w-full border-3 border-brand-green rounded-md" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-green" htmlFor="postcode">
                  Postcode <span className="ml-1 text-brand-pink">*</span>
                </label>
                <div className="mt-1">
                  <input type="text" id="postcode" required className="w-full border-3 border-brand-green rounded-md" />
                </div>
              </div>

              <fieldset>
                <legend className="text-sm font-semibold text-brand-green">
                  Do you have a spare bedroom? <span className="ml-1 text-brand-pink">*</span>
                </legend>
                <div className="mt-1 flex flex-col gap-2">
                  <label className="bg-brand-gray px-4 py-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                    <div className="relative flex items-center mx-3">
                      <input type="radio" name="spare_bedroom" value="yes" className="peer sr-only" />
                      <span className="absolute bg-black w-4 h-4 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="absolute border-black border-3 w-7 h-7 rounded-full duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </div>
                    <span className="text-sm font-medium">Yes</span>
                  </label>
                  <label className="bg-brand-gray px-4 py-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                    <div className="relative flex items-center mx-3">
                      <input type="radio" name="spare_bedroom" value="no" className="peer sr-only" />
                      <span className="absolute bg-black w-4 h-4 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="absolute border-black border-3 w-7 h-7 rounded-full duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </div>
                    <span className="text-sm font-medium">No</span>
                  </label>
                  <label className="bg-brand-gray px-4 py-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                    <div className="relative flex items-center mx-3">
                      <input type="radio" name="spare_bedroom" value="maybe" className="peer sr-only" />
                      <span className="absolute bg-black w-4 h-4 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="absolute border-black border-3 w-7 h-7 rounded-full duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </div>
                    <span className="text-sm font-medium">Maybe (e.g. I could potentially convert a room)</span>
                  </label>
                </div>
              </fieldset>

              <div>
                <button
                  type="submit"
                  className="bg-brand-green border-brand-green text-white px-8 py-2 text-xl font-heading rounded-full flex gap-x-4 items-center border-2 text-nowrap"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
