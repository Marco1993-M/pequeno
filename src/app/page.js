'use client';

import { useState } from "react";
import Link from 'next/link';
import SocialProofStrip from "@/components/SocialProofStrip";
import { Typewriter } from 'react-simple-typewriter'

export default function Page() {
  const [showMore, setShowMore] = useState(false);

return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
    <main className="w-full px-0 py-0">

{/* HERO SECTION */}
<section
  className="relative w-full h-screen flex flex-col justify-between items-center text-center text-black px-4"
>
  {/* Card Background */}
  <div
    className="absolute left-6 right-6 top-18 bottom-6 rounded-3xl overflow-hidden shadow-xl"
    style={{
      backgroundImage: "url('/heroB.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Overlay Gradient */}
  <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/70 via-black/0 to-transparent pointer-events-none"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
    {/* Eyebrow */}
    <p className="text-sm font-light tracking-wider text-black">
      Architect-designed. Off-grid-ready.
    </p>

    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-lg mb-32">
      Your <span className="font-serif italic text-[#ff5c36]">Dream Home</span>
      <span className="block">
        <Typewriter
          words={['Simplified', 'Tailored', 'Built To Love', 'Built To Last']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </span>
      <span className="sr-only">
        Quality modular homes, architecturally designed homes, fast construction, sustainable modular homes, lightweight steel homes
      </span>
    </h1>

    {/* Just above the fold → Subheading + CTAs */}
    <div className="absolute bottom-[5%] w-full px-4 flex flex-col items-center">
      <p className="text-base md:text-lg text-white">Tailored. Timeless. Sustainable</p>
      <p className="text-base md:text-lg text-white">Private houses, cabins, modular & more.</p>

      <div className="flex justify-center gap-4 flex-wrap mt-4 items-center">
        <a href="/onboarding">
          <button className="bg-[#ff5c36] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-[#ff5c36] hover:scale-105 transition duration-300">
            Get Started
          </button>
        </a>
        <a href="/recent">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-black/90 shadow-md hover:bg-white hover:text-[#ff5c36] transition duration-300">
            <span className="text-lg">→</span>
          </button>
        </a>
      </div>
    </div>
  </div>
</section>


   {/* Social proof strip */}
      <SocialProofStrip />

        {/* ABOUT SECTION */}
    <section className="w-full mt-20">
  <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    <div className="space-y-8">
     <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
  <span className="font-serif italic">Design</span> Meets <span className="font-serif italic">Durability</span>
</h2>

      <p className="text-gray-600 text-lg leading-relaxed">
       Quality modular homes often face challenges with longevity and adaptability across South Africa&apos;s diverse landscapes. Pequeño is trusted by landowners, architects, and developers to deliver architect-designed, prefabricated, and lightweight steel homes that are modern, resilient, and fast to construct. Our steel-framed, sustainable homes are fully scalable and built to last, combining sleek design with durability to create living spaces that thrive in any environment.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed">
        Trusted by landowners, architects, and developers to craft homes and retreats that stand out and last.
      </p>
    </div>
    <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-200">
<div className="relative w-full aspect-[16/9] overflow-hidden group">
  {/* Default image */}
  <img
    src="/banner3.jpg"
    alt="Modern unit"
    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
  />

  {/* Hover image */}
  <img
    src="/banner3-hover.jpg"
    alt="Modern unit alternate"
    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-800 group-hover:opacity-100"
  />
</div>

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
              link: "/articles/modular-architecture",
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
