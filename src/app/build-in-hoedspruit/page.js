'use client';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import SocialProofStrip from "@/components/SocialProofStrip";
import { Typewriter } from 'react-simple-typewriter';
import AboutSection from "@/components/AboutSection";

export default function HoedspruitPage() {
  const [showMore, setShowMore] = useState(false);

  // Main Schema for Hoedspruit
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Smart Steel Modular Homes",
    "url": "https://www.smartsteel.co.za/hoedspruit",
    "logo": "https://www.smartsteel.co.za/logo.png",
    "image": "https://www.smartsteel.co.za/hoedspruit.webp",
    "description": "Architect-designed modular lightweight steel homes in Hoedspruit, Limpopo Lowveld. Homes built for bushveld retreats, wildlife estates, and warm climate living.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hoedspruit",
      "addressRegion": "Limpopo",
      "addressCountry": "ZA"
    },
    "telephone": "+27-11-123-4567",
    "sameAs": [
      "https://www.facebook.com/smartsteel",
      "https://www.instagram.com/smartsteel",
      "https://www.linkedin.com/company/smartsteel"
    ],
    "priceRange": "R850,000 – R2,800,000+",
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Starter / Cabin",
        "description": "Basic steel frame + insulation, standard finishes. Ideal for bushveld retreats or weekend cabins in Hoedspruit.",
        "price": "850000",
        "priceCurrency": "ZAR",
        "url": "https://www.smartsteel.co.za/onboarding",
        "itemOffered": {
          "@type": "Product",
          "name": "Starter / Cabin",
          "category": "Modular Home",
          "additionalProperty": [
            {"@type":"PropertyValue","name":"Size","value":"60–90 m²"},
            {"@type":"PropertyValue","name":"Bedrooms","value":"1–2"}
          ]
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Family / Weekend Home",
        "description": "Full lightweight steel structure, excellent insulation, open-plan design, perfect for family bushveld estates.",
        "price": "1450000",
        "priceCurrency": "ZAR",
        "url": "https://www.smartsteel.co.za/onboarding",
        "itemOffered": {
          "@type": "Product",
          "name": "Family / Weekend Home",
          "category": "Modular Home",
          "additionalProperty": [
            {"@type":"PropertyValue","name":"Size","value":"120–180 m²"},
            {"@type":"PropertyValue","name":"Bedrooms","value":"3"}
          ]
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Premium / Estate",
        "description": "Luxury finishes & cladding, large open-plan living, energy-efficient, ideal for private bushveld estates or wildlife properties.",
        "price": "2800000",
        "priceCurrency": "ZAR",
        "url": "https://www.smartsteel.co.za/onboarding",
        "itemOffered": {
          "@type": "Product",
          "name": "Premium / Estate",
          "category": "Modular Home",
          "additionalProperty": [
            {"@type":"PropertyValue","name":"Size","value":"180 m²+"},
            {"@type":"PropertyValue","name":"Bedrooms","value":"4+"}
          ]
        },
        "availability": "https://schema.org/InStock"
      }
    ]
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
        {/* HERO SECTION - Personalised for Hoedspruit */}
        <section className="relative w-full h-screen flex flex-col justify-between items-center text-center text-black px-4">
          {/* Card Background - Consider using a Hoedspruit-specific image if you have one (e.g. bushveld with mountains) */}
          <div
            className="absolute left-6 right-6 top-18 bottom-6 rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url('/hoedspruit.webp')", // Replace with /hoedspruit-hero.jpg if available
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/70 via-black/0 to-transparent pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
            {/* Eyebrow - Localised */}
            <p className="text-sm font-light tracking-wider text-black">
              Architect-designed. Bushveld-ready. Off-grid capable.
            </p>

            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-lg mb-32">
              Your <span className="font-serif italic text-[#ff5c36]">Dream Home</span> in
              <span className="block">Hoedspruit</span>
              <span className="block">
                <Typewriter
                  words={['in the Bushveld', 'with Canyon Views', 'Built for Wildlife Estates', 'Off-Grid Ready', 'Tailored for Limpopo']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={2200}
                />
              </span>
              <span className="sr-only">
                Quality modular homes, architecturally designed homes, fast construction, sustainable lightweight steel homes in Hoedspruit, Limpopo
              </span>
            </h1>

            {/* Subheading + CTAs */}
            <div className="absolute bottom-[5%] w-full px-4 flex flex-col items-center">
              <p className="text-base md:text-lg text-white">
                Tailored for Hoedspruit’s bushveld lifestyle • Timeless • Sustainable
              </p>
              <p className="text-base md:text-lg text-white">
                Private homes, eco-cabins & modular designs near Kruger and Blyde River Canyon.
              </p>

              <div className="flex justify-center gap-4 flex-wrap mt-4 items-center">
                {/* Primary button */}

                {/* Secondary button */}
                <a href="/onboarding">
                  <button className="bg-white text-[#ff5c36] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#ff5c36] hover:text-white hover:scale-105 transition duration-300">
                    Get Started
                  </button>
                </a>

                {/* Arrow button */}
               
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
                  How We Build Modular Lightweight Steel Homes for Hoedspruit
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Precision steel framing designed for the Lowveld climate, wildlife estates, and off-grid living.
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
                  desc: "Precision-engineered steel frames form a durable, rust-resistant skeleton — ideal for Hoedspruit’s varied terrain and wildlife estates."
                },
                {
                  img: "/system-insulation.jpg",
                  label: "Envelope",
                  title: "Sheathing & Insulation",
                  desc: "High-performance insulation and breathable systems keep homes cool in summer and protected during Lowveld thunderstorms."
                },
                {
                  img: "/system-cladding.jpg",
                  label: "Finish",
                  title: "Exterior Cladding Options",
                  desc: "Natural timber, steel, or fiber cement — blending seamlessly with the bushveld and Drakensberg mountain views."
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

        {/* PRICING / INVESTMENT SECTION - Hoedspruit Specific */}
<section className="w-[95%] mx-auto mt-24">
  <div className="rounded-3xl border p-8 md:p-12 shadow-sm">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
        Investment Guide for Homes in Hoedspruit
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Transparent pricing for architect-designed lightweight steel homes tailored to the Lowveld and bushveld lifestyle.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Package 1 */}
      <div className="bg-white border rounded-2xl p-8 flex flex-col">
        <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Starter / Cabin</div>
        <div className="text-4xl font-bold text-gray-900 mb-1">From R850,000</div>
        <div className="text-gray-500 mb-6">~60–90 m² • 1–2 bedrooms</div>
        
        <ul className="space-y-3 text-sm flex-grow">
          <li className="flex items-start gap-2">✓ Basic steel frame + insulation</li>
          <li className="flex items-start gap-2">✓ Standard finishes</li>
          <li className="flex items-start gap-2">✓ Ideal for guest cabins or starter homes on wildlife estates</li>
        </ul>
        
        <a href="/onboarding" className="mt-8 block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
          Get Price for Your Site
        </a>
      </div>

      {/* Package 2 - Most Popular */}
      <div className="bg-white border-2 border-[#ff5c36] rounded-2xl p-8 flex flex-col relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff5c36] text-white text-xs font-bold px-6 py-1 rounded-full">
          MOST POPULAR
        </div>
        <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Family Home</div>
        <div className="text-4xl font-bold text-gray-900 mb-1">From R1.45m – R2.4m</div>
        <div className="text-gray-500 mb-6">~120–180 m² • 3 bedrooms</div>
        
        <ul className="space-y-3 text-sm flex-grow">
          <li className="flex items-start gap-2">✓ Full lightweight steel structure</li>
          <li className="flex items-start gap-2">✓ High insulation for Lowveld climate</li>
          <li className="flex items-start gap-2">✓ Customisable bushveld / modern design</li>
          <li className="flex items-start gap-2">✓ Off-grid ready options available</li>
        </ul>
        
        <a href="/onboarding" className="mt-8 block text-center bg-[#ff5c36] text-white py-3 rounded-full font-semibold hover:bg-black transition">
          Get Your Free 3D Mockup + Quote
        </a>
      </div>

      {/* Package 3 */}
      <div className="bg-white border rounded-2xl p-8 flex flex-col">
        <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Premium / Estate</div>
        <div className="text-4xl font-bold text-gray-900 mb-1">From R2.8m+</div>
        <div className="text-gray-500 mb-6">180 m²+ • 4+ bedrooms</div>
        
        <ul className="space-y-3 text-sm flex-grow">
          <li className="flex items-start gap-2">✓ Luxury finishes & cladding</li>
          <li className="flex items-start gap-2">✓ Large open-plan living with views</li>
          <li className="flex items-start gap-2">✓ Full off-grid systems (solar + water)</li>
          <li className="flex items-start gap-2">✓ Perfect for private wildlife estates near Blyde Canyon</li>
        </ul>
        
        <a href="/onboarding" className="mt-8 block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
          Discuss Your Dream Home
        </a>
      </div>
    </div>

    <div className="mt-12 text-center text-sm text-gray-500 max-w-md mx-auto">
      Prices are indicative and exclude site preparation, foundations, transport, and VAT. 
      Final cost depends on your specific site in Hoedspruit and custom choices. 
      <span className="text-black font-medium">We provide accurate quotes after a quick site assessment.</span>
    </div>
  </div>
</section>

        {/* CTA STEEL - Localised */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border-transparent border p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Realise your dream bushveld home<br />with Modular Lightweight Steel
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Lightweight steel framing is perfect for Hoedspruit — strong enough for large open-plan living, yet light for faster assembly on remote or sloped sites near the Drakensberg and Blyde Canyon.
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
                alt="Lightweight Steel Framing in Hoedspruit"
                className="w-full h-auto rounded-2xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* NEWS SECTION - unchanged, but you can localise articles later */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border p-8 md:p-12 shadow-sm space-y-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Catch up on the latest news
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Insights, updates, and behind-the-scenes from building in the Lowveld and bushveld.
                </p>
              </div>
              <a
                href="/news"
                className="mt-6 md:mt-0 inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition"
              >
                View More News
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: "Exploring Modular Architecture",
                  desc: "How modular steel homes are reshaping sustainable living in Limpopo’s bushveld.",
                  link: "/articles/modular-architecture",
                  img: "/images/modular.jpg"
                },
                {
                  title: "Designing for the Lowveld Climate",
                  desc: "Engineering homes that thrive in Hoedspruit’s heat, thunderstorms, and wildlife surroundings.",
                  link: "/news/designing-for-environment",
                  img: "/images/harsh.jpg"
                },
                {
                  title: "Off-Grid Living in Hoedspruit",
                  desc: "Solar, rainwater, and passive design for true bushveld independence.",
                  link: "/news/off-grid-approach",
                  img: "/images/off-grid.jpg"
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
                    <h4 className="text-sm uppercase text-gray-500 mb-1">News</h4>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      {item.desc}
                    </p>
                    <a
                      href={item.link}
                      className="mt-4 text-[#ff5c36] font-medium text-sm hover:underline"
                    >
                      Read article →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA - Personalised */}
        <section className="w-full bg-white py-20 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to build in Hoedspruit?</h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-6">
              Whether you want a family home on a wildlife estate, a luxury bushveld cabin, or an off-grid retreat with views of the Drakensberg or Blyde Canyon — let’s create something extraordinary together.
            </p>
            <a
              href="/onboarding"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition"
            >
              Start Your Hoedspruit Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
