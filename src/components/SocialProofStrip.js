"use client";

import React from "react";
import { HomeModernIcon, Square3Stack3DIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';

export default function SocialProofStrip() {
  const stats = [
    { label: "Designed Around Your Lifestyle", value: "", icon: <HomeModernIcon className="w-6 h-6 text-gray-500" /> },
    { label: "Better for You and the Planet", value: "", icon: <Square3Stack3DIcon className="w-6 h-6 text-gray-500" /> },
    { label: "A Smarter, Faster Build", value: "", icon: <ClockIcon className="w-6 h-6 text-gray-500" /> },
  ];

  return (
    <>
      {/* SOCIAL PROOF STRIP */}
      <section className="mt-20 mb-2">
        <div className="w-[95%] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-36 text-left">
          
          {/* First Column: About Us */}
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 tracking-wide mb-2">ABOUT US</h3>
          </div>

          {/* Remaining 3 Columns: Stats */}
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-semibold text-gray-400 mb-2">{`0${index + 1}.`}</span>
              <h3 className="text-sm md:text-lg font-normal italic text-gray-900 mb-1">{stat.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5-COLUMN ABOUT/IMAGES SECTION */}
      <section className="w-[95%] mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-36 items-center">

 {/* Column 1: Top-left image */}
<div className="relative group w-3/4 overflow-hidden rounded-2xl shadow-lg self-start">
  <div className="relative w-full aspect-[2/2] overflow-hidden">
    <img
      src="/banner3.jpg"
      alt="Top left"
      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
    />
    <img
      src="/banner3-hover.jpg"
      alt="Top left hover"
      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />
  </div>
</div>


          {/* Columns 2–4: Paragraph + CTA */}
          <div className="col-span-2 flex flex-col justify-center space-y-16 text-left">


            <p className="text-gray-600 text-xl leading-relaxed">
              <span className="font-serif italic">Quality modular homes</span> often face challenges with longevity and adaptability across South Africa's diverse landscapes. <span className="font-serif italic">Pequeño</span> is trusted by landowners, architects, and developers to deliver <span className="font-serif italic">architect-designed</span>, prefabricated, and lightweight steel homes that are <span className="font-serif italic">modern</span>, resilient, and fast to construct. Our <span className="font-serif italic">steel-framed, sustainable homes</span> are fully scalable and built to last, combining <span className="font-serif italic">sleek design</span> with <span className="font-serif italic">durability</span> to create living spaces that thrive in any environment.
            </p>

            <a href="/onboarding">
              <button className="bg-[#ff5c36] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-[#ff5c36] hover:scale-105 transition duration-300">
                Get Started
              </button>
            </a>
          </div>

{/* Column 5: Bottom-right image with text */}
<div className="flex flex-col items-start space-y-2 self-end w-3/4 ml-auto">
  {/* Icon above the text */}
  <BoltIcon className="w-5 h-5 text-[#ff5c36] mb-1" />

  {/* Text above the image */}
  <p className="text-sm md:text-base font-thin text-gray-700 text-left">
    Technology meets <span className="font-serif font-bold">Design</span>
  </p>

  {/* Image container */}
  <div className="relative group w-full overflow-hidden rounded-2xl shadow-lg">
    <div className="relative w-full aspect-[2/1] overflow-hidden">
      <img
        src="/banner3-hover.jpg"
        alt="Bottom right"
        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />
      <img
        src="/banner3.jpg"
        alt="Bottom right hover"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
}
