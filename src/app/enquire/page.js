'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaCloudSun, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';


export default function EnquirePage() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "Can I customize a Pequeño structure?",
      answer: "Absolutely. We specialize in bespoke designs tailored to your lifestyle, site, and aesthetic vision.",
    },
    {
      question: "Do you offer off-grid or sustainable solutions?",
      answer: "Yes. Many of our structures incorporate off-grid features and sustainable materials by design.",
    },
    {
      question: "Where does Pequeño operate?",
      answer: "Our team operates across South Africa, with delivery and construction solutions available nationwide.",
    },
    {
      question: "How do I start the process?",
      answer: "Simply fill out the enquiry form and our team will guide you through the next steps.",
    },
  ];

  return (
   
    <main className="font-sans text-gray-800 px-6 py-20 bg-white">
      {/* Contact Header + Form */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="font-semibold tracking-widest uppercase text-black">Interested in working with us?</h1>
          <p className="font-thin tracking-widest uppercase text-black">
            Whether you're dreaming of a custom home, an off-grid cabin, or a tailored architectural solution — we’d love to hear from you.
            Simply fill out the form, and our team will be in touch.
          </p>
        </div>

        <form className="bg-gray-50 border rounded-lg p-6 space-y-4 w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition uppercase tracking-widest font-semibold"
          >
            Send Enquiry
          </button>
        </form>
      </section>

      {/* Support Details */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="font-semibold tracking-widest uppercase text-black">Contact Details</h2>
        <p className="font-thin tracking-widest uppercase text-black mb-6">
          Prefer to speak with someone? You can reach our team directly by phone.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-md flex items-start gap-4">
            <FaPhoneAlt className="text-2xl text-black mt-1" style={{ color: "#ff5c36" }} />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-gray-700">+27 82 846 4555</p>
            </div>
          </div>

          <div className="border p-4 rounded-md flex items-start gap-4">
            <FaCloudSun className="text-2xl mt-1" style={{ color: "#ff5c36" }} />
            <div>
              <p className="font-semibold">Office Hours</p>
              <p className="text-sm text-gray-700">
                Mon–Fri: 08:00–17:00<br />Sat–Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Frequently asked questions</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Learn more about how Pequeño can assist with your project.
          </p>

          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-md p-4 cursor-pointer"
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <FaChevronDown
                    className={`transition-transform ${
                      activeFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {activeFAQ === index && (
                  <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
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
