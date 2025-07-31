'use client';

import { useState } from "react";
import Link from 'next/link';

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <main className="w-full px-6 py-10">

        {/* HERO SECTION */}
        <section className="relative py-22 px-6 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1 border border-gray-300 text-sm font-medium rounded-full relative overflow-hidden text-gray-800">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fcb69f] via-[#ffecd2] to-[#fcb69f] bg-[length:200%_200%] animate-gradient z-0" />
              <span className="relative z-10">Architect-designed. Off-grid-ready.</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Transforming the Future of Building
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From private retreats to commercial eco-developments, Pequeño redefines living for South Africa’s diverse landscapes.
            </p>

            <div className="flex justify-center gap-4 mb-10 flex-wrap">
              <a href="/onboarding">
                <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff5c36] hover:scale-105 transition duration-300">
                  Get Started
                </button>
              </a>
              <a href="/recent">
                <button className="text-gray-700 border border-orange-300 px-8 py-3 rounded-full font-semibold hover:text-black hover:scale-105 transition duration-300">
                  See Projects
                </button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["Modular Living", "Eco Conscious", "Fast Assembly"].map((tag, i) => (
                <span key={i} className="px-4 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
    <section className="w-full mt-32">
  <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
        Design Meets Durability
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Pequeño specializes in architect-led homes and retreats made for the diverse South African landscape — from sun-scorched plains to lush coastlines.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed">
        We partner with landowners, architects, and developers to deliver beautifully prefabricated, steel-framed spaces that are scalable, sustainable, and modern.
      </p>
    </div>
    <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-200">
      <img
        src="/banner3.jpg"
        alt="Modern unit"
        className="object-cover w-full h-[28rem] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 w-full h-full rounded-2xl border border-black opacity-10 pointer-events-none" />
    </div>
  </div>
</section>


        {/* OUR BUILDING SYSTEM */}
        <section className="mt-24 px-6 pb-22">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 ">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-1">Our Building System</h2>
              <p className="text-gray-600 text-lg">Lightweight steel framing, modular components, and curated finishes</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/our-system"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/system-structure.jpg",
                label: "Structure",
                title: "The Framework of the Building",
                desc: "Precision-engineered steel frames form the durable, rust-resistant skeleton of each unit—built off-site and assembled quickly on location."
              },
              {
                img: "/system-insulation.jpg",
                label: "Envelope",
                title: "Sheathing & Insulation",
                desc: "Breathable wall systems, weatherproofing layers, and high R-value insulation keep spaces efficient and protected in all climates."
              },
              {
                img: "/system-cladding.jpg",
                label: "Finish",
                title: "Exterior Cladding Options",
                desc: "Choose from natural timber, concealed-fix steel, or fiber cement panels — all customizable to reflect your site and style."
              }
            ].map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl shadow hover:shadow-md transition bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-1">{item.label}</h4>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <a href="/our-system" className="text-[#ff5c36] font-medium text-sm hover:underline">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STEEL */}
     <section className="bg-[#f5f5f5] py-20 w-full">
  <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h2 className="text-4xl font-bold leading-tight text-black">
        Realise your design ambitions<br />with Light Weight Steel
      </h2>
      <p className="text-gray-700 text-lg">
        Frames are lightweight, durable, strong, and versatile in design. Light Weight Steel’s high strength-to-weight ratio is ideal for projects that feature large spans and modern open plan spaces.
      </p>
    </div>
    <div className="rounded overflow-hidden group">
      <img
        src="/steel-framing.jpg"
        alt="Lightweight Steel Framing"
        className="w-full h-auto rounded shadow-lg transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </div>
</section>


        {/* NEWS SECTION */}
        <section className="mt-24 max-w-7xl mx-auto px-6 space-y-12 pb-22">
          {[
            {
              title: "Exploring Modular Architecture",
              desc: "A look at how modular structures are reshaping the South African landscape — fast, sustainable, and beautiful.",
              link: "/news/exploring-modular-architecture",
              img: "/images/modular.jpg"
            },
            {
              title: "Designing for Harsh Environments",
              desc: "See how we engineer steel-frame homes that withstand the heat, wind, and weather extremes of remote locations.",
              link: "/news/designing-for-environment",
              img: "/images/harsh.jpg"
            },
            {
              title: "Off-Grid Building: Our Approach",
              desc: "Our off-grid ready designs include solar, rainwater harvesting, and passive design principles.",
              link: "/news/off-grid-approach",
              img: "/images/off-grid.jpg"
            }
          ].map((item, idx) => (
            <div key={idx} className="grid md:grid-cols-3 gap-8 items-start">
              {idx === 0 ? (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold uppercase">Catch up on the latest news</h2>
                  <a href="/news" className="text-black font-medium underline hover:text-[#ff5c36] transition">
                    View more news →
                  </a>
                  <p className="text-gray-600 text-sm">
                    Insights, updates, and behind-the-scenes content from our design and construction process.
                    Built around lightweight steel framing.
                  </p>
                </div>
              ) : (
                <div></div>
              )}
              <div className="overflow-hidden rounded group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-53 object-cover rounded transition-transform duration-500 group-hover:scale-101"
                />
              </div>
              <div>
                <h4 className="text-sm uppercase text-gray-500 mb-1">Structure</h4>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <a
                  href={item.link}
                  className="text-sm font-medium underline text-black hover:text-[#ff5c36] transition"
                >
                  Read article →
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* CTA FINAL */}
        <section className="w-full bg-white py-20 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-6">
              Whether you’re a developer planning a new estate, a landowner exploring off-grid options, or just dreaming of your own cabin in nature—let’s build something great together.
            </p>
            <a
              href="/onboarding"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition"
            >
              Start Your Project
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
