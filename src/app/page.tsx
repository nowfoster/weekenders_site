import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-green">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-12 justify-center items-center">
          <h1 className="font-heading text-center font-bold text-white text-5xl sm:text-7xl">
            Fostering Reimagined.
          </h1>
          <p className="font-body text-white text-xl sm:text-2xl text-center">
            Now Foster is a charity that enables more people to experience the joy of fostering. We work with public sector organisations across the UK to reimagine fostering and empower brilliant foster carers to support children and young people.
          </p>
          <div className="font-body text-md sm:text-lg">
            <Link className="bg-brand-pink border-2 border-brand-pink rounded-full text-brand-green font-heading font-semibold px-5 sm:px-12 py-2 text-xl" href="/readiness_checker">
              Get started
            </Link>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-brand-pink">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-brand-green text-3xl sm:text-5xl">
            Our mission:
          </h2>
          <p className="font-body text-brand-green text-xl sm:text-2xl text-center">
            To mainstream foster care so more amazing people will empower and inspire young people in care.
          </p>
        </div>
      </div>

      {/* Image */}
      <Image
        src="/images/hands-colouring.jpg"
        alt="children playing with pens"
        width={1920}
        height={1080}
        sizes="100vw"
        className="w-full"
      />

      {/* What we do */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-brand-green text-3xl sm:text-5xl">
            What we do
          </h2>
          <p className="font-body text-brand-green text-xl sm:text-2xl text-center">
            We are an innovation partner for the foster care sector, developing groundbreaking approaches that disrupt traditional models and modernise services.
          </p>
          <div className="font-body text-md sm:text-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-8">
              <div className="bg-brand-gray rounded p-8">
                <Image src="/images/pink_plus.svg" alt="" width={40} height={40} />
                <h3 className="font-bold text-brand-green text-xl sm:text-2xl mt-4">
                  Designing fostering initiatives
                </h3>
                <p className="mt-2">
                  We design and implement innovative initiatives and programmes that make a real difference for foster carers and children.
                </p>
              </div>
              <div className="bg-brand-gray rounded p-8">
                <Image src="/images/3pink_1green_plus.svg" alt="" width={40} height={40} />
                <h3 className="font-bold text-brand-green text-xl sm:text-2xl mt-4">
                  Transforming fostering services
                </h3>
                <p className="mt-2">
                  We partner with fostering services to create a better service experience for children, foster carers, social workers and other professionals.
                </p>
              </div>
              <div className="bg-brand-gray rounded p-8">
                <Image src="/images/2pink_2green_plus.svg" alt="" width={40} height={40} />
                <h3 className="font-bold text-brand-green text-xl sm:text-2xl mt-4">
                  Building digital fostering products
                </h3>
                <p className="mt-2">
                  We use our digital expertise and lived experience to build digital technology that enables outstanding experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why fostering matters */}
      <div className="bg-brand-green">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-white text-3xl sm:text-5xl">
            Why fostering matters
          </h2>
          <div className="font-body text-md sm:text-lg">
            <div className="border-8 border-brand-pink text-white rounded-xl p-12 grid sm:grid-cols-3 gap-12 text-center">
              <div>
                <div className="font-heading text-3xl sm:text-5xl text-center">25,000</div>
                <div className="mt-4">
                  is the shortage of foster care families by 2026. The need for foster carers has never been greater
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-5xl text-center">1 in 3</div>
                <div className="mt-4">
                  siblings are separated in foster care. The main reason: not enough bedrooms
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-5xl text-center">13%</div>
                <div className="mt-4">
                  of care experienced young people enter higher education, compared to 45% of their peers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
