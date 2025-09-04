"use client";

import React from "react";
import { motion } from "framer-motion";
import { BoltIcon, HomeModernIcon, Square3Stack3DIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function SocialProofStrip() {
  const featuredStat = {
    label: "Better by Design",
    value: "Lightweight steel that outperforms traditional materials in strength, safety, and precision.",
    icon: <ShieldCheckIcon className="w-10 h-10" />,
  };

  const stats = [
    { 
      label: "Stress-Free Design Journey", 
      value: "Our proven 6-step process keeps everything clear, simple, and on track.", 
      icon: <BoltIcon className="w-8 h-8" /> 
    },
    { 
      label: "Designed Around Your Lifestyle", 
      value: "Every build tailored to how you live today — and tomorrow.", 
      icon: <HomeModernIcon className="w-8 h-8" /> 
    },
    { 
      label: "Better for You and the Planet", 
      value: "Durable, eco-friendly steel that’s strong, sustainable, and future-ready.", 
      icon: <Square3Stack3DIcon className="w-8 h-8" /> 
    },
    { 
      label: "A Smarter, Faster Build", 
      value: "60% quicker than traditional methods — and engineered for lasting quality.", 
      icon: <ClockIcon className="w-8 h-8" /> 
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gray-50">
      {/* Featured banner */}
      <motion.div
        className="max-w-6xl mx-auto mb-12 p-10 rounded-3xl bg-[#ff5c36] text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left shadow-lg"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 mr-0 md:mr-6">
          {featuredStat.icon}
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredStat.label}</h3>
          <p className="text-lg">{featuredStat.value}</p>
        </div>
      </motion.div>

      {/* Other 4 stats */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-stretch text-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-1 min-w-[250px] p-6 md:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-start items-center group"
            variants={itemVariants}
          >
            <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gray-100 rounded-full text-gray-700 group-hover:bg-[#ff5c36] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
              {stat.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {stat.label}
            </h3>
            <p className="text-gray-500 text-base">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
