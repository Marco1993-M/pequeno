"use client";

import React from "react";

import { BoltIcon, HomeModernIcon, Square3Stack3DIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function SocialProofStrip() {
  const stats = [
    { 
      label: "Stress-Free Design Journey", 
      value: "", 
      icon: <BoltIcon className="w-6 h-6 text-gray-500" /> 
    },
    { 
      label: "Designed Around Your Lifestyle", 
      value: "", 
      icon: <HomeModernIcon className="w-6 h-6 text-gray-500" /> 
    },
    { 
      label: "Better for You and the Planet", 
      value: "", 
      icon: <Square3Stack3DIcon className="w-6 h-6 text-gray-500" /> 
    },
    { 
      label: "A Smarter, Faster Build", 
      value: "", 
      icon: <ClockIcon className="w-6 h-6 text-gray-500" /> 
    },
  ];

  return (
    <section className="py-22">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-16 text-left">
        
        {/* First Column: About Us */}
        <div className="flex flex-col justify-start items-start">
          <h3 className="text-m md:text-xl font-regular  text-gray-900 mb-2">ABOUT US</h3>
        </div>

        {/* Remaining 4 Columns: Stats */}
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-start">
            <span className="text-2xl font-regular text-gray-300 mb-4">{`0${index + 1}.`}</span>
           <h3 className="text-xs md:text-lg font-normal italic text-gray-900 mb-2">{stat.label}</h3>
            <p className="text-sm text-gray-600 text-sm md:text-base leading-snug">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
