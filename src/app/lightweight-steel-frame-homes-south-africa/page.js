import Image from "next/image";
import Link from "next/link";

import ProjectProofGrid from "@/components/ProjectProofGrid";
import { basePackages, getFeaturedLocationPages } from "@/data/locationPages";

const pageUrl =
  "https://www.pequenohome.com/lightweight-steel-frame-homes-south-africa";

const faqs = [
  {
    question: "What is a lightweight steel frame home?",
    answer:
      "A lightweight steel frame home uses precision-made steel framing as the structural skeleton of the building. The frame is paired with insulation, sheathing, cladding, services, and finishes to create a complete home or building.",
  },
  {
    question: "Are LSF homes suitable for South African conditions?",
    answer:
      "Yes. Lightweight steel framing can work well across South Africa when the full building system is designed for the local climate, site, and brief. The important decisions include insulation, shading, ventilation, cladding, roof design, and service planning.",
  },
  {
    question: "Is lightweight steel framing only for small prefab houses?",
    answer:
      "No. LSF can be used for compact cabins, family homes, staff housing, guest units, and commercial structures. The system is flexible, and the outcome depends on the design and engineering behind it.",
  },
  {
    question: "How much does a lightweight steel frame home cost?",
    answer:
      "Cost depends on size, specification, site conditions, access, finishes, foundations, and services. Pequeno uses early budget ranges to help clients plan, then refines pricing once the site and brief are clearer.",
  },
];

export const metadata = {
  title: "Lightweight Steel Frame Homes South Africa | Pequeno",
  description:
    "Explore lightweight steel frame homes in South Africa. Learn how Pequeno designs LSF homes, cabins, staff housing, and commercial structures for local sites and climates.",
  keywords: [
    "lightweight steel frame homes South Africa",
    "LSF homes South Africa",
    "steel frame houses South Africa",
    "modular homes South Africa",
    "prefab homes South Africa",
    "off-grid homes South Africa",
    "Pequeno homes",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Lightweight Steel Frame Homes South Africa | Pequeno",
    description:
      "A practical guide to Pequeno lightweight steel frame homes, projects, locations, and building considerations in South Africa.",
    url: pageUrl,
    siteName: "Pequeño",
    locale: "en_ZA",
    type: "article",
    images: [
      {
        url: "/steel-framing.jpg",
        width: 1600,
        height: 900,
        alt: "Lightweight steel framing for South African homes",
      },
    ],
  },
};

function buildJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Lightweight Steel Frame Homes South Africa",
      url: pageUrl,
      description: metadata.description,
      about: [
        "Lightweight steel frame homes",
        "Modular homes South Africa",
        "Steel frame houses South Africa",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}

export default function LightweightSteelFrameHomesPage() {
  const featuredLocations = getFeaturedLocationPages(8);
  const jsonLd = buildJsonLd();

  return (
    <main className="pb-20 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full h-screen flex flex-col justify-between items-center px-4 text-center text-black">
        <div className="absolute left-6 right-6 top-24 bottom-6 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/steel-framing.jpg"
            alt="Lightweight steel frame home structure in South Africa"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 lg:px-14">
          <div className="flex flex-wrap justify-center gap-3 pt-20 text-xs uppercase tracking-[0.22em] text-white/80">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              South Africa
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Lightweight steel framing
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Architect-led homes
            </span>
          </div>

          <div className="mx-auto my-auto max-w-5xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/75">
              A practical guide to building smarter with LSF
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Lightweight Steel Frame Homes in{" "}
              <span className="font-serif italic text-[#ff8b6e]">
                South Africa
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-white/88 md:text-xl md:leading-8">
              Pequeno designs lightweight steel frame homes, cabins, staff
              accommodation, and commercial structures for South African sites,
              climates, and lifestyles.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/enquire"
                className="rounded-full bg-[#ff5c36] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#ff5c36]"
              >
                Talk about your project
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
              >
                View built projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 w-[95%] max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Designed for homes, cabins, staff housing, and commercial structures.",
            "Built around site conditions, climate, budget, and long-term use.",
            "A precise structural system that supports modern architecture.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-7 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid w-[95%] max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
            What It Is
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            A precise steel structure for modern South African buildings
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            A lightweight steel frame home uses engineered steel framing as the
            structural skeleton of the building. That structure is then paired
            with insulation, sheathing, cladding, roofing, services, and finishes
            to create a complete home or building.
          </p>
          <p>
            For Pequeno, LSF is not about producing generic boxes. It is a way
            to deliver architect-led spaces with greater precision, cleaner site
            coordination, and flexibility across very different South African
            conditions.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Why It Works Here
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Suited to South Africa's varied sites and climates
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              South Africa does not have one building condition. A home in the
              Lowveld, a staff compound in the bushveld, a coastal project, and
              a suburban family home all ask different questions of the building
              system.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Speed and coordination",
                text: "Precision-made framing can simplify site sequencing and reduce unnecessary delays when the design and supply chain are properly managed.",
              },
              {
                title: "Design flexibility",
                text: "LSF supports compact homes, larger family layouts, staff housing, guest units, and selected commercial structures.",
              },
              {
                title: "Comfort and performance",
                text: "The frame works with insulation, ventilation, shading, and cladding choices to create homes suited to local climate conditions.",
              },
              {
                title: "Cleaner site work",
                text: "A lighter, more precise structure can be helpful on estate sites, remote sites, and projects where access or disruption matters.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#f7f2ec] p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Built Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              See how the system performs in real projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5c36]"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-10">
          <ProjectProofGrid limit={2} compact />
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Common Uses
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What can you build with LSF?
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Lightweight steel framing can support more than one type of
              project. The right outcome depends on the brief, the site, and the
              level of architectural finish you want.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Primary family homes",
              "Bushveld and coastal retreats",
              "Guest units and rental cottages",
              "Staff accommodation",
              "Compact secondary dwellings",
              "Selected commercial structures",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f7f2ec] p-5">
                <p className="text-lg font-medium text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Budget Planning
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Indicative lightweight steel frame home costs
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              These ranges are a starting point for early planning. Final pricing
              depends on site access, foundations, design scope, finishes,
              services, transport, and specification.
            </p>
            <Link
              href="/articles/lightweight-steel-frame-home-cost-south-africa"
              className="mt-6 inline-block text-sm font-medium text-[#ff5c36] hover:underline"
            >
              Read the full cost guide →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {basePackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-[2rem] border p-6 shadow-sm ${
                  pkg.featured
                    ? "border-[#ff5c36] bg-[#fff5f1]"
                    : "border-black/10 bg-white"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  {pkg.featured ? "Most requested" : "Package"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {pkg.price}
                </p>
                <p className="mt-1 text-sm text-gray-500">{pkg.size}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Locations
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Explore LSF homes by region
            </h2>
          </div>
          <Link
            href="/locations"
            className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff5c36]"
          >
            View all locations
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}`}
              className="rounded-2xl bg-[#f7f2ec] p-5 transition hover:bg-[#efe6dc]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                {location.province}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Build in {location.place}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                {location.localContext}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Questions about lightweight steel frame homes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-black/10 bg-[#f7f2ec] p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-gray-900">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-[#ff5c36] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-gray-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,#111827,#1f2937)] px-8 py-12 text-white md:px-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Start Planning
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Considering a lightweight steel frame build?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              Tell us about your site, location, and intended use. We can help
              you understand whether a Pequeno lightweight steel frame approach
              is a good fit.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/enquire"
              className="rounded-full bg-[#ff5c36] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e44d28]"
            >
              Enquire about your project
            </Link>
            <Link
              href="/our-system"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Explore our system
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
