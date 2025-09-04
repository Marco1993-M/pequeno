import Link from "next/link";

export const metadata = {
  title: "Architecture | Pequeño Home",
  description:
    "Customized architectural solutions and energy-efficient designs by Pequeño.",
};

export default function Architecture() {
  return (
    <main className="mx-auto" style={{ maxWidth: "85vw", width: "100%" }}>
      
      {/* Intro Text Full Width */}
      <section className="py-46">
        <div className="text-left space-y-4">
          <h1 className="font-semibold tracking-widest uppercase text-black">Architecture</h1>
          <p className="font-thin tracking-widest uppercase text-black max-w-5xl">
            At Pequeño, we are committed to providing customized architectural
            solutions and expertly designed, energy-efficient structures. Our
            team blends innovation with craftsmanship to deliver homes and spaces
            that embody timeless design, sustainability, and practicality.
            Whether it&apos;s a bespoke residential home or an off-grid cabin,
            we approach each project with meticulous attention to detail and a
            passion for excellence.
          </p>
        </div>
      </section>

      {/* Features List */}
<section className="py-8 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
    {[
      {
        title: 'Bespoke Designs',
        text: 'Tailored architectural concepts to meet your unique vision and lifestyle. We ensure every structure reflects individuality and function.',
        icon: '/icons/design.png',
      },
      {
        title: 'Sustainable Focus',
        text: 'We integrate sustainable materials, energy-efficient practices, and smart design to reduce environmental impact while enhancing comfort.',
        icon: '/icons/sustainable.png',
      },
      {
        title: 'Crafted Quality',
        text: 'Our dedication to quality means every detail — from finishes to structure — is executed with precision, care, and longevity in mind.',
        icon: '/icons/quality.png',
      },
      {
        title: 'Comprehensive Service',
        text: 'We guide clients through every step — from concept to completion — providing transparent, reliable support throughout the journey.',
        icon: '/icons/service.png',
      },
    ].map((feature, index) => (
      <div key={index} className="flex items-start gap-4">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-8 h-8 mt-1 flex-shrink-0"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
          <p className="text-gray-600">{feature.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Enquire Button */}
      <section className="mt-12 flex justify-start mb-20">
        <Link href="/enquire">
          <button className="border border-black text-black px-10 py-3 uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition">
            Enquire
          </button>
        </Link>
      </section>

      {/* Two Images Side by Side */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="h-64 overflow-hidden">
          <img src="/homes.jpg" alt="Homes" className="w-full h-full object-cover" />
        </div>
        <div className="h-64 overflow-hidden">
          <img src="/cabins.jpg" alt="Cabins" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Homes & Cabins Text */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Homes */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Spec Homes</h2>
          <p className="text-gray-700 mb-6">
            Pequeño’s bespoke homes are designed for those seeking more than just
            shelter. Thoughtfully shaped by their environment and crafted with
            precision, our homes blend functionality with timeless design. Whether
            nestled along the coast, surrounded by nature, or set in wide open
            spaces, each structure reflects sustainable materials, modern design,
            and an uncompromising attention to detail.
          </p>
          <button className="border border-black text-black px-8 py-2 uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition">
            Homes
          </button>
        </div>

        {/* Cabins */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Cabins</h2>
          <p className="text-gray-700 mb-6">
            Our architecturally designed cabins offer a refined, minimalist approach
            to compact living. Whether you dream of an off-grid escape, a boutique
            guest cabin, or a personal retreat, each structure delivers modern
            comfort, striking design, and a deep connection to the landscape.
            Available as custom builds or pre-designed models, our cabins balance
            simplicity, material honesty, and sustainability.
          </p>
          <button className="border border-black text-black px-8 py-2 uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition">
            Cabins
          </button>
        </div>

      </section>
    </main>
  );
}
