"use client";

import React from "react";
import {
  HomeModernIcon,
  Square3Stack3DIcon,
  ClockIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function SocialProofStrip() {
  const stats = [
    {
      label: "Designed Around Your Lifestyle",
      icon: <HomeModernIcon className="w-5 h-5 text-black-500" />,
    },
    {
      label: "Superior Comfort & Durability",
      icon: <Square3Stack3DIcon className="w-5 h-5 text-black-500" />,
    },
    {
      label: "A Smarter, Faster Build",
      icon: <ClockIcon className="w-5 h-5 text-black-500" />,
    },
  ];

  return (
    <>
{/* SOCIAL PROOF STRIP */}
<section className="mt-20 mb-16">
  <div className="w-[95%] mx-auto">
    <div className="rounded-3xl border border-black-100 p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
        
        {/* First Column: About Us */}
        <div className="flex flex-col">
          <h3 className="text-sm md:text-base font-medium text-black-200 tracking-wide">
            ABOUT US
          </h3>
        </div>

        {/* Remaining 3 Columns */}
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-1">
              {stat.icon}
              <span className="text-sm text-black-700">{`0${index + 1}`}</span>
            </div>
            <h3 className="text-base md:text-lg font-normal text-black-900">
              {stat.label}
            </h3>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>


{/* SHOWCASE SECTION */}
<section className="w-[95%] mx-auto mt-24">
  <div className="rounded-3xl border p-8 md:p-12 shadow-sm">

    {/* H1 on top */}
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center md:text-left">
      Thoughtfully designed for maximum space and style
    </h1>

{/* Description text above image, in 2nd and 3rd columns */}
<div className="grid grid-cols-1 md:grid-cols-3 mb-6">
  <div className="col-start-2 col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-end text-gray-600 text-sm leading-relaxed">
    <p>
     Pequeño designs and builds architect-led lightweight steel homes, cabins, and modular living spaces in South Africa. Our precision-engineered steel-framed houses marry modern design, sustainability, and rapid construction to deliver durable, energy-efficient homes that exceed traditional builds.
    </p>
    <p>
      From off-grid retreats to fully customised residential homes, Pequeño creates living spaces that are stylish, functional, and tailored to your lifestyle — whether you’re dreaming of your first home, a weekend escape, or a smart investment.
    </p>
  </div>
</div>


    {/* Grid: Features + Image */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
      
      {/* Left: Features aligned to top */}
      <div className="flex flex-col space-y-8">
        <h2 className="text-2xl md:text-3xl font-base text-gray-900 leading-tight mb-4">
          Unique features you’ll get from our packages
        </h2>

        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-[#ff5c36]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4 4-4 4" />
              </svg>
            </span>
            <p className="text-gray-700">
              <strong>Off-Grid Capabilities:</strong> Equipped with solar panels, rainwater harvesting, and composting systems for sustainable living.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#ff5c36]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4 4-4 4" />
              </svg>
            </span>
            <p className="text-gray-700">
              <strong>Economical Luxury:</strong> Smart use of space with premium finishes and efficient layouts.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#ff5c36]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4 4-4 4" />
              </svg>
            </span>
            <p className="text-gray-700">
              <strong>Modular design:</strong> Expand or adapt your Pequeño with modules that grow with your lifestyle.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#ff5c36]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4 4-4 4" />
              </svg>
            </span>
            <p className="text-gray-700">
              <strong>Latest Building Technologies:</strong> Precision-engineered lightweight steel and smart construction methods for strength and speed.
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#ff5c36]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4 4-4 4" />
              </svg>
            </span>
            <p className="text-gray-700">
              <strong>Energy Smart:</strong> Naturally efficient design with insulation and low-consumption systems to keep costs down.
            </p>
          </li>
        </ul>
      </div>

      {/* Right: Big Image */}
      <div className="col-span-2 rounded-2xl overflow-hidden">
        <img
          src="/heroC.jpg"
          alt="Microhouse showcase"
          className="w-full h-full object-cover"
        />
      </div>

    </div> {/* end of grid */}

  </div>
</section>




    </>
  );
}
