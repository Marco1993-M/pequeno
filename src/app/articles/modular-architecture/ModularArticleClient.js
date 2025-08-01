"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm text-gray-600 mb-8 max-w-5xl mx-auto px-6"
    >
      <ol className="list-reset flex">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>
          <Link href="/articles" className="hover:underline">
            Articles
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li aria-current="page" className="text-gray-900 font-semibold">
          Exploring Modular Architecture
        </li>
      </ol>
    </nav>
  );
}

function ImageWithCaption({ src, alt, caption }) {
  return (
    <figure className="mb-12 max-w-4xl mx-auto">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="rounded-lg shadow-lg w-full"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left font-semibold text-lg focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
}

export default function ModularArticleClient() {
  return (
    <>
      <Breadcrumbs />

      <article className="max-w-5xl mx-auto px-6 py-16 font-sans text-gray-900 leading-relaxed">
        <h1 className="text-4xl font-bold mb-6">
          Exploring Modular Architecture: Reshaping the South African Landscape
        </h1>

        <Image
          src="/images/modular-hero.jpg"
          alt="Modular steel home in South Africa"
          width={1200}
          height={630}
          className="rounded-lg shadow-lg w-full mb-10"
        />

        <p className="text-lg mb-8 leading-relaxed">
          Modular architecture is rapidly becoming a symbol of innovation,
          sustainability, and efficiency across South Africa. As urban growth
          accelerates and housing demands intensify, modular structures provide
          a fast, beautiful, and eco-conscious building solution.
        </p>

        <blockquote className="border-l-4 border-black pl-6 italic mb-12 text-xl text-gray-700 max-w-3xl">
          “Modular design is not about limitation — it&apos;s about liberation. It
          allows us to rethink how we live, build, and adapt to the world around
          us.” — Pequeño Team
        </blockquote>

        <hr className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">What Is Modular Architecture?</h2>
          <p className="mb-6 max-w-3xl">
            Modular architecture involves constructing buildings from prefabricated
            sections manufactured off-site, then assembled onsite. This method
            speeds up construction, reduces waste, and allows high precision and
            flexibility.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Key Benefits:</h3>
          <ul className="list-disc list-inside max-w-3xl space-y-2">
            <li><strong>Speed:</strong> Up to 50% faster than conventional builds.</li>
            <li><strong>Sustainability:</strong> Less waste, fewer site disturbances, and lower emissions.</li>
            <li><strong>Cost-Efficiency:</strong> Reduced labour and time expenses.</li>
            <li><strong>Scalability:</strong> Easily expanded or adapted as needs evolve.</li>
          </ul>
        </section>

        <hr className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Why It Matters in South Africa</h2>
          <p className="mb-6 max-w-3xl">
            South Africa faces challenges such as housing shortages, urban population
            growth, and climate resilience needs. Modular architecture addresses
            these by providing:
          </p>
          <ul className="list-disc list-inside max-w-3xl space-y-2 mb-6">
            <li><strong>Quick-deploy housing</strong> for underserved communities.</li>
            <li><strong>Eco-friendly alternatives</strong> for developers and local governments.</li>
            <li><strong>Custom, beautiful designs</strong> reflecting local climate and culture.</li>
          </ul>
        </section>

        <hr className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Pequeño&apos;s Approach to Modular Living</h2>
          <p className="mb-6 max-w-3xl">
            At Pequeño, small means smarter. Our lightweight steel modular homes
            are crafted for:
          </p>
          <ul className="list-disc list-inside max-w-3xl space-y-2 mb-6">
            <li>Precision manufacturing for exacting quality.</li>
            <li>Minimal site impact to preserve natural surroundings.</li>
            <li>Off-grid ready options for sustainable living.</li>
            <li>Modern architectural flair that stands out.</li>
          </ul>
          <blockquote className="border-l-4 border-black pl-6 italic text-gray-700 text-lg max-w-3xl">
            “We don&apos;t just build homes. We build systems that evolve with your life.” — Pequeño Team
          </blockquote>
        </section>

        <hr className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Real-World Examples</h2>
          <ul className="list-disc list-inside max-w-3xl space-y-4 mb-6">
            <li>
              <strong>Coastal Retreats:</strong> Off-site built modular homes delivered to remote coastal sites with minimal environmental disruption.
            </li>
            <li>
              <strong>Urban Infill Projects:</strong> Backyard units and gap housing in metropolitan areas like Cape Town and Johannesburg.
            </li>
            <li>
              <strong>Community Projects:</strong> Temporary classrooms and clinics in rural areas, constructed rapidly.
            </li>
          </ul>
        </section>

        <hr className="my-12" />

        <section className="mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>

          <FAQItem
            question="Are modular homes durable?"
            answer="Yes. Pequeño homes use high-quality, lightweight steel engineered to endure South Africa&apos;s diverse climates."
          />
          <FAQItem
            question="Can I customise the design?"
            answer="Absolutely. Each home is tailored to your lifestyle, land conditions, and budget."
          />
          <FAQItem
            question="Are modular homes more affordable than traditional homes?"
            answer="Modular homes often result in cost savings due to streamlined processes and reduced labour time."
          />
          <FAQItem
            question="Do they meet South African building codes?"
            answer="Yes. All Pequeño homes comply fully with local building regulations."
          />
        </section>

        <section className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Join the Modular Movement</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Whether you&apos;re a homeowner, developer, or municipality, modular architecture opens up a world of opportunity. It&apos;s time to build smarter, faster, and more sustainably.
          </p>
          <Link
            href="https://www.pequenohome.com"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Explore Our Modular Living Solutions
          </Link>
        </section>
      </article>
    </>
  );
}
