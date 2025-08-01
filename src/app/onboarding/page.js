'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';


const SERVICE_ID = 'service_7sp2v1f';
const TEMPLATE_ID = 'template_31rth73';
const PUBLIC_KEY = 'CN4db3HoeMcAONo2F';

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const templateParams = {
      structureType: form.structureType.value,
      location: form.location.value,
      purpose: form.purpose.value,
      capacity: form.capacity.value,
      features: form.features.value,
      timeline: form.timeline.value,
      budget: form.budget.value,
      turnkey: form.turnkey.value,
      landOwned: form.landOwned.value,
      servicesAvailable: form.servicesAvailable.value,
      contact: form.contact.value,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert('Submission failed. Please try again.');
      });
  };

  const styledSelect = (name, label, options, required = false) => (
    <div>
      <label className="block font-semibold mb-2">{label}</label>
      <div className="relative">
        <select
          name={name}
          required={required}
          className="w-full border border-black rounded-md px-4 py-3 pr-10 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8l4 4 4-4" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (submitted) {
    return (
      <main className="min-h-screen font-sans text-gray-800 px-6 py-24 bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Thank you!</h1>
          <p>We have received your project info and will be in touch soon.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="font-sans text-gray-800 px-6 py-20 bg-white">
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Start Your Project</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Complete the form below to begin the process. We work with landowners, architects, and developers to design modern, sustainable structures that suit your site and vision.
        </p>
      </section>

      {/* Onboarding Form */}
      <section className="max-w-3xl mx-auto px-4 py-10 border rounded-lg bg-gray-50">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {styledSelect("structureType", "1. What kind of structure are you interested in? *", [
            "Luxury Cabin",
            "Off-grid Home",
            "Guest Accommodation Unit",
            "Short-Term Rental Unit"
          ], true)}

          {/* Location */}
          <div>
            <label className="block font-semibold mb-2">2. Where will the structure be located? *</label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Robertson, Western Cape (Farm)"
              className="w-full border border-black px-4 py-3 rounded-md focus:outline-none"
            />
          </div>

          {styledSelect("purpose", "3. What is the main purpose of the structure? *", [
            "Tourism / Guest Use",
            "Primary Residence",
            "Weekend Retreat",
            "Rental Income Property"
          ], true)}

          {styledSelect("capacity", "4. How many people should it accommodate?", [
            "2-person (Couple)",
            "4-person (Small Family)",
            "6-person (Extended Family)",
            "Custom Layout"
          ])}

          {styledSelect("features", "5. Specific features or styles in mind? *", [
            "Solar Power & Off-Grid Systems",
            "Wood-Burning Stove & Fireplace",
            "Minimalist / Scandinavian Design",
            "Rustic Natural Materials"
          ], true)}

          {styledSelect("timeline", "6. Ideal timeline to get started? *", [
            "Immediately",
            "Within 3 months",
            "3–6 months",
            "Next year"
          ], true)}

          {styledSelect("budget", "7. Estimated budget (excluding land) *", [
            "Under R500,000",
            "R500,000 – R1,000,000",
            "R1,000,000 – R2,000,000",
            "Over R2,000,000"
          ], true)}

          {styledSelect("turnkey", "8. Turnkey or White Box? *", [
            "Turnkey (fully finished)",
            "White Box (for fit-out)",
            "Hybrid or Phased Build",
            "Not Sure Yet"
          ], true)}

          {styledSelect("landOwned", "9. Do you already own the land? *", [
            "Yes",
            "No",
            "In Process",
            "Undecided"
          ], true)}

          {styledSelect("servicesAvailable", "10. Existing services on-site?", [
            "Full Municipal Services",
            "Water & Solar Only",
            "Off-grid (No Services)",
            "Not Sure Yet"
          ])}

          {/* Contact */}
          <div>
            <label className="block font-semibold mb-2">11. Contact Details *</label>
            <textarea
              name="contact"
              required
              className="w-full border border-black px-4 py-3 rounded-md min-h-[100px] focus:outline-none"
              placeholder="Full name, email, phone number"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition w-full"
            >
              {loading ? "Submitting..." : "Submit Project Info"}
            </button>
          </div>
        </form>
      </section>

       {/* Explore More */}
      <section className="max-w-7xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6 text-left">Explore more</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/architecture" className="border rounded-md p-6 hover:bg-gray-50 transition block">
            <h3 className="font-semibold text-lg text-black">Our Architecture →</h3>
            <p className="text-sm mt-1 text-gray-700">
              Discover how Pequeño blends innovation, design, and sustainability into every project.
            </p>
          </Link>

          <Link href="/resources" className="border rounded-md p-6 hover:bg-gray-50 transition block">
            <h3 className="font-semibold text-lg text-black">Resources →</h3>
            <p className="text-sm mt-1 text-gray-700">
              Access brochures, guides, and resources to assist with planning your build.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
