'use client';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import SocialProofStrip from "@/components/SocialProofStrip";
import { Typewriter } from 'react-simple-typewriter';
import AboutSection from "@/components/AboutSection";

export default function PretoriaPage() {
  const [showMore, setShowMore] = useState(false);

  // Main Schema for Pretoria
const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Smart Steel Modular Homes",
  "url": "https://www.smartsteel.co.za/pretoria",
  "logo": "https://www.smartsteel.co.za/logo.png",
  "image": "https://www.smartsteel.co.za/pretoria.webp",
  "description": "Architect-designed modular lightweight steel homes in Pretoria, Gauteng. Homes built for suburban living, modern family estates, and energy-efficient urban dwellings.",
  "telephone": "+27-11-123-4567",

  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pretoria",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA"
  },

  "areaServed": {
    "@type": "City",
    "name": "Pretoria"
  },

  "sameAs": [
    "https://www.facebook.com/smartsteel",
    "https://www.instagram.com/smartsteel",
    "https://www.linkedin.com/company/smartsteel"
  ],

  "priceRange": "R850,000 – R2,800,000+",

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Modular Home Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Starter / Townhouse",
        "description": "Basic steel frame + insulation, standard finishes. Ideal for entry-level suburban homes in Pretoria.",
        "price": "850000",
        "priceCurrency": "ZAR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smartsteel.co.za/onboarding"
      },
      {
        "@type": "Offer",
        "name": "Family / Suburban Home",
        "description": "Full lightweight steel structure with open-plan living, ideal for modern family estates in Pretoria.",
        "price": "1450000",
        "priceCurrency": "ZAR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smartsteel.co.za/onboarding"
      },
      {
        "@type": "Offer",
        "name": "Premium / Executive",
        "description": "Luxury finishes, large open-plan layouts, and energy-efficient design for executive homes in Pretoria.",
        "price": "2800000",
        "priceCurrency": "ZAR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smartsteel.co.za/onboarding"
      }
    ]
  }
};

  return (
    <div className="min-h-screen text-gray-900 font-sans">
      {/* JSON-LD Schema */}
      <Script
        id="hoedspruit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

            <main className="w-full px-0 py-0">
        {/* HERO SECTION - Personalised for Pretoria */}
        <section className="relative w-full h-screen flex flex-col justify-between items-center text-center text-black px-4">
          <div
            className="absolute left-6 right-6 top-18 bottom-6 rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url('/pretoria.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/70 via-black/0 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
            <p className="text-sm font-light tracking-wider text-black">
              Architect-designed. Modern. Energy-efficient.
            </p>

            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-lg mb-32">
              Your <span className="font-serif italic text-[#ff5c36]">Dream Home</span> in
              <span className="block">Pretoria</span>
              <span className="block">
                <Typewriter
                  words={['in Suburban Estates', 'Modern Family Living', 'Energy-Efficient', 'Tailored for Gauteng', 'Quick Build']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={2200}
                />
              </span>
              <span className="sr-only">
                Quality modular homes, architecturally designed, sustainable lightweight steel homes in Pretoria, Gauteng
              </span>
            </h1>

            <div className="absolute bottom-[5%] w-full px-4 flex flex-col items-center">
              <p className="text-base md:text-lg text-white">
                Timeless, sustainable, and perfect for Pretoria suburbs.
              </p>
              <p className="text-base md:text-lg text-white">
                Family homes, executive estates & modern modular designs.
              </p>

              <div className="flex justify-center gap-4 flex-wrap mt-4 items-center">
                <a href="/onboarding">
                  <button className="bg-white text-[#ff5c36] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#ff5c36] hover:text-white hover:scale-105 transition duration-300">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <SocialProofStrip />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* OUR BUILDING SYSTEM - Slightly localised */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  How We Build Modular Lightweight Steel Homes for Pretoria
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Precision steel framing designed for urban and suburban sites, modern family living, and energy-efficient homes.
                </p>
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

            {/* Grid of features - unchanged but fits well */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  img: "/system-structure.jpg",
                  label: "Structure",
                  title: "The Framework of the Building",
                  desc: "Precision-engineered steel frames form a durable, rust-resistant skeleton — ideal for Pretoria's urban and suburban settings."
                },
                {
                  img: "/system-insulation.jpg",
                  label: "Envelope",
                  title: "Sheathing & Insulation",
                  desc: "High-performance insulation and breathable systems keep homes cool in summer and protected during Pretoria's summer thunderstorms."
                },
                {
                  img: "/system-cladding.jpg",
                  label: "Finish",
                  title: "Exterior Cladding Options",
                  desc: "Durable steel, fiber cement, or timber cladding blending with modern suburban aesthetics."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border hover:shadow-md transition bg-white"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                      {item.label}
                    </h4>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      {item.desc}
                    </p>
                    <a
                      href="/our-system"
                      className="mt-4 text-[#ff5c36] font-medium text-sm hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* PRICING / INVESTMENT SECTION */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border p-8 md:p-12 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Investment Guide for Homes in Pretoria
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Transparent pricing for architect-designed lightweight steel homes tailored to Pretoria suburbs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="bg-white border rounded-2xl p-8 flex flex-col">
                <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Starter / Townhouse</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">From R850,000</div>
                <div className="text-gray-500 mb-6">~60–90 m² • 1–2 bedrooms</div>
                
                <ul className="space-y-3 text-sm flex-grow">
                  <li className="flex items-start gap-2">✓ Basic steel frame + insulation</li>
                  <li className="flex items-start gap-2">✓ Standard finishes</li>
                  <li className="flex items-start gap-2">✓ Ideal for entry-level suburban homes</li>
                </ul>
                
                <a href="/onboarding" className="mt-8 block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
                  Get Price for Your Site
                </a>
              </div>

              {/* Package 2 */}
              <div className="bg-white border-2 border-[#ff5c36] rounded-2xl p-8 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff5c36] text-white text-xs font-bold px-6 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Family Home</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">From R1.45m – R2.4m</div>
                <div className="text-gray-500 mb-6">~120–180 m² • 3 bedrooms</div>
                
                <ul className="space-y-3 text-sm flex-grow">
                  <li className="flex items-start gap-2">✓ Full lightweight steel structure</li>
                  <li className="flex items-start gap-2">✓ High insulation for Gauteng climate</li>
                  <li className="flex items-start gap-2">✓ Customisable modern designs</li>
                  <li className="flex items-start gap-2">✓ Energy-efficient options available</li>
                </ul>
                
                <a href="/onboarding" className="mt-8 block text-center bg-[#ff5c36] text-white py-3 rounded-full font-semibold hover:bg-black transition">
                  Get Your Free 3D Mockup + Quote
                </a>
              </div>

              {/* Package 3 */}
              <div className="bg-white border rounded-2xl p-8 flex flex-col">
                <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Premium / Executive</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">From R2.8m+</div>
                <div className="text-gray-500 mb-6">180 m²+ • 4+ bedrooms</div>
                
                <ul className="space-y-3 text-sm flex-grow">
                  <li className="flex items-start gap-2">✓ Luxury finishes & cladding</li>
                  <li className="flex items-start gap-2">✓ Large open-plan living</li>
                  <li className="flex items-start gap-2">✓ Energy-efficient systems</li>
                  <li className="flex items-start gap-2">✓ Perfect for suburban executive estates</li>
                </ul>
                
                <a href="/onboarding" className="mt-8 block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
                  Discuss Your Dream Home
                </a>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500 max-w-md mx-auto">
              Prices are indicative and exclude site preparation, foundations, transport, and VAT. 
              Final cost depends on your specific site in Pretoria and custom choices. 
              <span className="text-black font-medium">We provide accurate quotes after a quick site assessment.</span>
            </div>
          </div>
        </section>


        {/* CTA STEEL - Localised */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border-transparent border p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Realise your dream suburban home<br />with Modular Lightweight Steel
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Lightweight steel framing is perfect for Pretoria — strong enough for large open-plan living, yet light for faster assembly on remote or sloped sites.
              </p>
              <Link
                href="/our-system"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition"
              >
                Explore Our System
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden group">
              <img
                src="/steel-framing.jpg"
                alt="Lightweight Steel Framing in Pretoria"
                className="w-full h-auto rounded-2xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

               {/* NEWS SECTION */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border p-8 md:p-12 shadow-sm space-y-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Catch up on the latest news
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Insights, updates, and behind-the-scenes from building in Pretoria and Gauteng suburbs.
                </p>
              </div>
              <a href="/news" className="mt-6 md:mt-0 inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
                View More News
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Modern Modular Architecture",
                  desc: "How modular steel homes are reshaping sustainable suburban living in Pretoria.",
                  link: "/articles/modular-architecture",
                  img: "/images/modular.jpg"
                },
                {
                  title: "Designing for Gauteng Climate",
                  desc: "Engineering homes that thrive in Pretoria’s hot summers and chilly winters.",
                  link: "/news/designing-for-environment",
                  img: "/images/harsh.jpg"
                },
                {
                  title: "Energy-Efficient Living",
                  desc: "Solar, water-smart, and insulated homes for modern Pretoria households.",
                  link: "/news/off-grid-approach",
                  img: "/images/off-grid.jpg"
                }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col overflow-hidden rounded-2xl border hover:shadow-md transition bg-white">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-sm uppercase text-gray-500 mb-1">News</h4>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                    <a href={item.link} className="mt-4 text-[#ff5c36] font-medium text-sm hover:underline">Read article →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

 {/* FINAL CTA */}
        <section className="w-full bg-white py-20 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to build in Pretoria?</h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-6">
              Whether you want a family home in a modern suburb, a luxury executive estate, or an energy-efficient modular retreat — let’s create something extraordinary together.
            </p>
            <a href="/onboarding" className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
              Start Your Pretoria Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
