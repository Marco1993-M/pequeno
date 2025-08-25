"use client";

import React from "react";

export default function SocialProofStrip() {
const stats = [
  { label: "6-Step Design Process", value: "Precision Planning" },
  { label: "A have you will fall in love with", value: "Tailord Builds" },
  { label: "Eco-Friendly Materials", value: "Sustainable Choice" },
  { label: "60% quicker than traditional methods", value: "On-Time Delivery" },
];



  return (
    <section className="py-20 mb-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-center space-y-6 md:space-y-0">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
