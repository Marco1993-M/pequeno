'use client';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import SocialProofStrip from "@/components/SocialProofStrip";
import { Typewriter } from 'react-simple-typewriter';
import AboutSection from "@/components/AboutSection";

export default function DullstroomPage() {
  const [showMore, setShowMore] = useState(false);

  const buildingSystemItems = [
    {
      img: "/system-structure.jpg",
      label: "Structure",
      title: "The Framework of the Building",
      desc: "Precision-engineered steel frames create a strong, lightweight skeleton — perfect for Dullstroom’s high-altitude terrain and estates."
    },
    {
      img: "/system-insulation.jpg",
      label: "Envelope",
      title: "Sheathing & Insulation",
      desc: "Superior insulation keeps homes warm during misty winters and cool on crisp summer days — essential for the Highlands climate."
    },
    {
      img: "/system-cladding.jpg",
      label: "Finish",
      title: "Exterior Cladding Options",
      desc: "Natural timber, steel, or fiber cement cladding that blends beautifully with rolling hills, beech trees, and the Scottish-like landscape."
    }
  ];

  const newsItems = [
    {
      title: "Exploring Modular Architecture",
      desc: "How modular steel homes are bringing modern comfort to the misty Highlands of Dullstroom.",
      link: "/articles/modular-architecture",
      img: "/images/modular.jpg"
    },
    {
      title: "Designing for Cool Highlands Climate",
      desc: "Engineering well-insulated homes that stay warm through misty winters and crisp summers.",
      link: "/news/designing-for-environment",
      img: "/images/harsh.jpg"
    },
    {
      title: "Weekend Homes in Dullstroom",
      desc: "Creating the perfect trout estate or Highlands retreat for Gauteng escape-seekers.",
      link: "/news/off-grid-approach",
      img: "/images/off-grid.jpg"
    }
  ];

  // Main Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Smart Steel Modular Homes",
    "url": "https://www.smartsteel.co.za/dullstroom",
    "logo": "https://www.smartsteel.co.za/logo.png",
    "image": "https://www.smartsteel.co.za/dullstroom.webp",
    "description": "Architect-designed modular lightweight steel homes in Dullstroom, Mpumalanga Highlands. Cozy, sustainable homes built for weekend retreats, trout estates, and highland living.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dullstroom",
      "addressRegion": "Mpumalanga",
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
        "description": "Basic steel frame + insulation, standard finishes. Ideal for trout estate cabins or weekend retreats.",
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
        "description": "Full lightweight steel structure, excellent insulation, customisable Highlands/cozy design, perfect for fly-fishing estates.",
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
        "description": "Luxury finishes & cladding, large open-plan living, high-performance heating & energy efficiency, ideal for private estates in the Highlands Meander.",
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
      <main className="w-full px-0 py-0">
        {/* HERO SECTION */}
        <section className="relative w-full h-screen flex flex-col justify-between items-center text-center text-black px-4">
          <div
            className="absolute left-6 right-6 top-18 bottom-6 rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url('/dullstroom.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/70 via-black/0 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
            <p className="text-sm font-light tracking-wider text-black">
              Architect-designed. Highlands-ready. Perfectly insulated.
            </p>

            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-lg mb-32">
              Your <span className="font-serif italic text-[#ff5c36]">Dream Home</span> in
              <span className="block">Dullstroom</span>
              <span className="block">
                <Typewriter
                  words={[
                    'in the Misty Highlands',
                    'by the Trout Streams',
                    'Built for Weekend Escapes',
                    'Cozy & Sustainable',
                    'Tailored for Mpumalanga Highlands'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={2200}
                />
              </span>
              <span className="sr-only">
                Quality modular homes, architecturally designed homes, fast construction, sustainable lightweight steel homes in Dullstroom, Mpumalanga Highlands
              </span>
            </h1>

            <div className="absolute bottom-[5%] w-full px-4 flex flex-col items-center">
              <p className="text-base md:text-lg text-white">
                Tailored for Dullstroom’s cool highlands lifestyle • Timeless • Energy-efficient
              </p>
              <p className="text-base md:text-lg text-white">
                Private homes, trout estate cabins & modular retreats in the Highlands Meander.
              </p>
              <div className="flex justify-center gap-4 flex-wrap mt-4 items-center">
                <Link href="/onboarding">
                  <button className="bg-white text-[#ff5c36] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#ff5c36] hover:text-white hover:scale-105 transition duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SocialProofStrip />
        <AboutSection />

        {/* OUR BUILDING SYSTEM */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  How We Build Modular Lightweight Steel Homes for Dullstroom
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Precision steel framing designed for the cool Highlands climate, misty winters, and trout estate living.
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

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {buildingSystemItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border hover:shadow-md transition bg-white"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-1">{item.label}</h4>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                    <Link href="/our-system" className="mt-4 text-[#ff5c36] font-medium text-sm hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING / INVESTMENT SECTION - Dullstroom Specific */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border p-8 md:p-12 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Investment Guide for Homes in Dullstroom
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Transparent pricing for architect-designed lightweight steel homes tailored to the cool Highlands lifestyle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Package 1 - Starter / Cabin */}
              <div className="bg-white border rounded-2xl p-8 flex flex-col">
                <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Starter / Cabin</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">From R850,000</div>
                <div className="text-gray-500 mb-6">~60–90 m² • 1–2 bedrooms</div>
                <ul className="space-y-3 text-sm flex-grow">
                  <li className="flex items-start gap-2">✓ Basic steel frame + insulation</li>
                  <li className="flex items-start gap-2">✓ Standard finishes</li>
                  <li className="flex items-start gap-2">✓ Ideal for trout estate cabins or weekend retreats</li>
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
                <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Family / Weekend Home</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">From R1.45m – R2.4m</div>
                <div className="text-gray-500 mb-6">~120–180 m² • 3 bedrooms</div>
                <ul className="space-y-3 text-sm flex-grow">
                  <li className="flex items-start gap-2">✓ Full lightweight steel structure</li>
                  <li className="flex items-start gap-2">✓ Excellent insulation for cold misty winters</li>
                  <li className="flex items-start gap-2">✓ Customisable Highlands / cozy design</li>
                  <li className="flex items-start gap-2">✓ Perfect for fly-fishing estates</li>
                </ul>
                <a href="/onboarding" className="mt-8 block text-center bg-[#ff5c36] text-white py-3 rounded-full font-semibold hover:bg-black transition">
                  Get Your Free 3D Mockup + Quote
                </a>
              </div>

              {/* Package 3 - Premium */}
              <div className="bg-white border rounded-2xl p-8 flex flex-col">
                <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">Premium / Estate</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">From R2.8m+</div>
                <div className="text-gray-500 mb-6">180 m²+ • 4+ bedrooms</div>
                <ul className="space-y-3 text-sm flex-grow">
                  <li className="flex items-start gap-2">✓ Luxury finishes & cladding</li>
                  <li className="flex items-start gap-2">✓ Large open-plan living with views</li>
                  <li className="flex items-start gap-2">✓ High-performance heating & energy efficiency</li>
                  <li className="flex items-start gap-2">✓ Ideal for private estates in the Highlands Meander</li>
                </ul>
                <a href="/onboarding" className="mt-8 block text-center bg-black text-white py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition">
                  Discuss Your Dream Home
                </a>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500 max-w-md mx-auto">
              Prices are indicative and exclude site preparation, foundations, transport, and VAT.
              Final cost depends on your specific site in Dullstroom and custom choices.
              <span className="text-black font-medium">We provide accurate quotes after a quick site assessment.</span>
            </div>
          </div>
        </section>

        {/* CTA STEEL */}
        <section className="w-[95%] mx-auto mt-24">
          <div className="rounded-3xl border-transparent border p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Realise your dream Highlands home<br />with Modular Lightweight Steel
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Lightweight steel framing is ideal for Dullstroom — strong, fast to assemble, and highly insulatable for the cool, misty climate of the Mpumalanga Highlands.
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
                alt="Lightweight Steel Framing in Dullstroom"
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
                  Insights, updates, and behind-the-scenes from building cozy, energy-efficient homes in the Mpumalanga Highlands.
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
                  desc: "How modular steel homes are bringing modern comfort to the misty Highlands of Dullstroom.",
                  link: "/articles/modular-architecture",
                  img: "/images/modular.jpg"
                },
                {
                  title: "Designing for Cool Highlands Climate",
                  desc: "Engineering well-insulated homes that stay warm through misty winters and crisp summers.",
                  link: "/news/designing-for-environment",
                  img: "/images/harsh.jpg"
                },
                {
                  title: "Weekend Homes in Dullstroom",
                  desc: "Creating the perfect trout estate or Highlands retreat for Gauteng escape-seekers.",
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

        {/* FINAL CTA */}
        <section className="w-full bg-white py-20 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to build in Dullstroom?</h2>
            <p className="text-gray-700 max-w-xl mx-auto mb-6">
              Whether you want a cozy weekend retreat on a trout estate, a family home with misty mountain views, or a stylish Highlands cabin — let’s create something warm and wonderful together.
            </p>
            <a
              href="/onboarding"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff5c36] transition"
            >
              Start Your Dullstroom Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
