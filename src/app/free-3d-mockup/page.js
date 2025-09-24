"use client";

// pages/free-3d-mockup.js
import React from "react";
import { User, Mail, FileText } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Free3DMockup() {
  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  // Collect selected pill features
  const features = Array.from(form.features)
    .filter((input) => input.checked)
    .map((input) => input.value)
    .join(", ");

  const templateParams = {
    user_name: form.name.value,
    user_email: form.email.value,
    project_features: features,
    project_description: form.project.value,
  };

  emailjs
    .send(
      "service_7sp2v1f",      // replace with your EmailJS service ID
      "template_1idwqcf",     // replace with your EmailJS template ID
      templateParams,
      "CN4db3HoeMcAONo2F"       // replace with your EmailJS public key
    )
    .then(
      () => {
        alert("Your free 3D mockup request has been sent!");
        form.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-36 relative overflow-hidden animated-grid-bg">
      {/* 3D Mockup Previews */}
      <img
        src="/mockup1.png"
        alt="3D Mockup Preview"
        className="absolute top-25 left-10 w-32 opacity-90 rotate-[-10deg] pointer-events-none"
      />
      <img
        src="/mockup2.png"
        alt="3D Mockup Preview"
        className="absolute bottom-16 right-16 w-60 opacity-95 rotate-[5deg] pointer-events-none"
      />

      {/* Background hints */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-10 text-3xl text-gray-900 font-handwriting opacity-30 rotate-[-10deg]">
          
        </span>
        <span className="absolute top-40 right-16 text-2xl text-gray-900 font-handwriting opacity-25 rotate-[5deg]">
          
        </span>
        <span className="absolute bottom-32 left-1/3 text-2xl text-gray-900 font-handwriting opacity-20 rotate-[10deg]">
          
        </span>
        <span className="absolute bottom-20 right-1/4 text-3xl text-gray-900 font-handwriting opacity-15 rotate-[-5deg]">
         
        </span>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl w-full text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-san-serif font-bold text-gray-900 mb-4">
          Get Your Free 3D Mockup
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Visualize your project before construction. Submit your project details and receive a tailored 3D mockup from our design team.
        </p>
      </section>

      {/* Form Section */}
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 relative z-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-1" htmlFor="name">
              <User className="mr-2 w-4 h-4 text-gray-400" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-1" htmlFor="email">
              <Mail className="mr-2 w-4 h-4 text-gray-400" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Project Preferences */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <FileText className="mr-2 w-4 h-4 text-gray-400" /> Project Preferences
            </label>

            {/* Pill Buttons */}
            <div className="flex flex-wrap gap-x-2 gap-y-6 mb-4">
              {[
                "Cabin",
                "Single Bedrooms",
                "3+ Bedrooms",
                "Gable Roof",
                "Flat Roof",
                "Barndominium",
                "Second Floor",
                "Open Plan",
              ].map((feature) => (
                <label key={feature} className="cursor-pointer relative">
                  <input
                    type="checkbox"
                    name="features"
                    value={feature}
                    className="peer absolute w-0 h-0 opacity-0"
                  />
                  <span
                    className="px-4 py-2 rounded-full border border-gray-300 text-sm bg-gray-50
                               hover:bg-orange-50 hover:border-orange-400
                               peer-checked:bg-orange-50 peer-checked:border-orange-400 transition"
                  >
                    {feature}
                  </span>
                </label>
              ))}
            </div>

            {/* Freeform Description */}
            <textarea
              id="project"
              name="project"
              placeholder="Add any additional details about your project..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff5c36] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-white hover:text-[#ff5c36] hover:scale-105 transition duration-300"
          >
            Request Free Mockup
          </button>
        </form>
      </section>

      {/* Optional Footer / Info */}
      <section className="mt-12 text-center max-w-2xl text-gray-600 relative z-10">
        <p className="text-sm">
          Our team will review your submission and create a 3D mockup tailored to your project. No strings attached.
        </p>
      </section>
    </div>
  );
}
