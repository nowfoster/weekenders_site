import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function PersonCard({ name, role, quote, image }: { name: string; role: string; quote: string; image: string }) {
  return (
    <div className="sm:w-min">
      <Image className="w-full sm:w-[200px] sm:max-w-[200px]" alt={name} src={image} width={200} height={200} />
      <h3 className="text-brand-green font-heading font-bold text-lg mt-2">{name}</h3>
      <p className="text-gray-600 mt-1 font-body">{role}</p>
      <p className="mt-3 font-body">{quote}</p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-green">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-12 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h1 className="font-heading text-center font-bold text-white text-3xl sm:text-5xl mb-12 mt-20">
              Our mission is to mainstream foster care so more amazing people will empower and inspire young people in care.
            </h1>
          </div>
        </div>
      </div>

      {/* Our values */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h2 className="font-heading text-center font-bold text-brand-green text-2xl sm:text-3xl mb-8 mt-12">Our values</h2>
            <p className="font-body text-brand-green text-xl sm:text-2xl text-center mb-10">
              We are committed to amplifying the voices of those with care experience, ensuring their insights and perspectives shape our initiatives. By working closely with public sector organisations that prioritise service over profit, we enhance our impact and reach. Collaboration with like-minded organisations is central to our approach, fostering a united effort towards common goals. While we aim to be disruptive in challenging the status quo, we always prioritise the safety and well-being of the people we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Who we are */}
      <div className="bg-brand-gray">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <div className="font-body text-md sm:text-lg">
            <h2 className="font-heading text-center font-bold text-brand-green text-2xl sm:text-3xl mb-8 mt-12">Who we are</h2>
            <p className="font-body text-brand-green text-xl sm:text-2xl text-center mb-10">
              We are a team of innovative social workers, designers, and entrepreneurs who want to change how fostering is done. We have over 20 years&apos; experience in public sector transformation and bring a mix of lived experience, social work expertise, and specialisation in service and digital product design.
            </p>
            <div className="grid md:grid-cols-2 gap-4 gap-x-8">
              <div className="font-body">
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-heading">Deep sector knowledge</h3>
                    <p>We have deep public sector and fostering knowledge in the team, so we know where the system needs fixing to give children and young people better chances in life</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-heading">Applied sector knowledge</h3>
                    <p>We bring lived experience as foster carers and have a network of care-experienced advisors around us to ensure that we design the right things in the right way.</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-heading">People centred design approach</h3>
                    <p>We take a people centred approach to designing services and digital products that stand out and make a difference for the people we are designing for.</p>
                  </div>
                </div>
              </div>
              <Image alt="The NowFoster team" src="/images/team.png" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>

      {/* What we offer */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-brand-green text-3xl sm:text-5xl">What we offer</h2>
          <p className="font-body text-brand-green text-xl sm:text-2xl text-center">
            We are keen to partner with Local Authorities and not-for-profit organisation that align with our values and wants to change how fostering can be transformed to achieve better outcomes for children and young people.
          </p>
          <div className="font-body text-md sm:text-lg">
            <div className="grid md:grid-cols-2 gap-4 gap-x-8">
              <div className="font-body">
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-heading">Designing new fostering initiatives</h3>
                    <p>We will work with you to design and implement innovative initiatives and programmes (like Weekenders) that make a real difference for foster carers and children.</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-heading">Transforming fostering services</h3>
                    <p>We will help you to improve and transform your current services to create a better service experience for children, foster carers and professionals.</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-heading">Building digital fostering products</h3>
                    <p>We have experience in designing digital products for the public sector and want to use that expertise to build technology that underpins outstanding experiences.</p>
                  </div>
                </div>
              </div>
              <Image alt="A service design session" src="/images/service-design.png" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>

      {/* How we're funded */}
      <div className="bg-brand-gray">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-brand-green text-3xl sm:text-5xl">How we&apos;re funded</h2>
          <p className="font-body text-brand-green text-xl sm:text-2xl text-center">
            Our fostering charity is funded through philanthropic contributions and grants. Generous donations from individuals and philanthropic organisations form the backbone of our financial support, enabling us to run our services and programs. All funding is exclusively dedicated to impacting the lives of foster children and families.
          </p>
        </div>
      </div>

      {/* Our team */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-brand-green text-3xl sm:text-5xl">Our team</h2>
          <p className="font-body text-brand-green text-xl sm:text-2xl text-center">
            Now Foster is a team of innovative social workers, designers and entrepreneurs who want to change how fostering is done.
          </p>
          <div className="font-body text-md sm:text-lg">
            <div className="flex flex-wrap justify-center gap-8">
              <PersonCard
                name="Sara Fernadez"
                role="CEO"
                quote={`"I've been fostering since my mid twenties and it's been the most fun and rewarding thing I have ever done - nothing has taught more about the world and myself than being alongside children in care."`}
                image="/images/sara-fernandez.png"
              />
              <PersonCard
                name="Laurie Kilby"
                role="Social Work Practice Lead"
                quote={`"A newly qualified foster carer, social worker and teacher are all part of who I am and encompass what I stand for. The system has been broken for so long, the time for change is NOW!"`}
                image="/images/laurie-kilby.png"
              />
              <PersonCard
                name="Jan Blum"
                role="Service Design Lead"
                quote={`"My parents fostered when I was a kid and I loved growing up with teenagers around me. There was always an adventure. As a design professional I aim to use my skills to even the playing field as much as I can for those who have had a tougher start."`}
                image="/images/jan-blum.png"
              />
              <PersonCard
                name="Katie Waldegrave"
                role="Partnerships Lead"
                quote={`"I began my career as a teacher; I know that without stability and love, it's impossible for children to learn and thrive. Having started Now Teach - a charity to help career-changers teach - I've seen how many of us are seeking a greater sense of purpose"`}
                image="/images/katie-waldegrave.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Advisors */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 sm:py-20 lg:px-8 flex flex-col gap-y-10 justify-center items-center">
          <h2 className="font-heading text-center font-bold text-brand-green text-3xl sm:text-5xl">Advisors</h2>
          <div className="font-body text-md sm:text-lg">
            <div className="flex flex-wrap justify-center gap-8">
              <PersonCard
                name="Andy Theedom"
                role="Trustee"
                quote="A Director in PwC's Local Public Services team who works with local authorities and charities across the UK, Andy brings challenge and insight based on his experience of working in and around fostering and achieving change to improve local outcomes."
                image="/images/andy-theedom.png"
              />
              <PersonCard
                name="Claire Chamberline"
                role="Strategic Adviser"
                quote="Experienced Director of Children's Services and advisor to local and national organisations across the UK, Clare supports Now Foster through her wealth of practice experience and senior network in the sector."
                image="/images/claire-chamberline.png"
              />
              <PersonCard
                name="Dominic Campbell"
                role="Strategic Adviser"
                quote="Having spent his career working with government and launching startups, Dominic has a passion for developing public services fit for the digital age, above in children and families services. He is the founder of FutureGov and Impossible Ideas Inc."
                image="/images/dominic-campbell.png"
              />
              <PersonCard
                name="Jess LeWatt"
                role="Strategic Advisor"
                quote="Experienced advisor to governments in Australia and the UK on organisation design and delivery of digitally enabled social services, Jess helps the Now Foster team with operations, governance and strategy. Partner in Impossible Ideas Inc."
                image="/images/jess-lewatt.png"
              />
              <PersonCard
                name="Mary Jackson"
                role="Trustee"
                quote="Chief executive of Frontline, England's largest social work charity. She was previously on the charity's senior team for over six years. She has 20+ years' experience in leadership, change management and communications at operational and strategic levels"
                image="/images/mary-jackson.png"
              />
              <PersonCard
                name="Tasha Unwin"
                role="Trustee"
                quote="Tasha has worked as a frontline practitioner in Children's Services since 2018. She brings both this first hand knowledge, and her experience of fostering in her own family to Now Foster"
                image="/images/tasha-unwin.png"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
