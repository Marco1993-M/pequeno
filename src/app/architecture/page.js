import Image from "next/image";
import Link from "next/link";

import ProjectProofGrid from "@/components/ProjectProofGrid";
import { getFeaturedLocationPages } from "@/data/locationPages";

const pageUrl = "https://www.pequenohome.com/architecture";

const faqs = [
  {
    question: "Do you only design compact cabins?",
    answer:
      "No. Pequeno works across a range of architectural scales, including family homes, retreats, staff accommodation, and selected commercial structures. The right solution depends on the brief, the site, and how the building needs to perform.",
  },
  {
    question: "How does architecture work with lightweight steel framing?",
    answer:
      "Architecture and lightweight steel framing work together when the design is resolved around structure, climate, services, and material performance from the start. The frame supports the design, but the full architectural outcome comes from how the whole building is planned.",
  },
  {
    question: "Can Pequeno design for off-grid or remote sites?",
    answer:
      "Yes. Many South African projects need to respond to remote access, strong climate exposure, solar readiness, water systems, or estate requirements. Those considerations should shape the architecture early, not be added later.",
  },
];

export const metadata = {
  title: "Architecture | Pequeno",
  description:
    "Explore Pequeno's architecture approach for lightweight steel frame homes, cabins, staff accommodation, and design-led structures built for South African conditions.",
  keywords: [
    "architecture South Africa",
    "lightweight steel frame architecture",
    "architect designed modular homes South Africa",
    "Pequeno architecture",
    "LSF architecture South Africa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Architecture | Pequeno",
    description:
      "Architect-led design for lightweight steel frame homes and buildings in South Africa.",
    url: pageUrl,
    siteName: "Pequeño",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/modular-hero.jpg",
        width: 1600,
        height: 900,
        alt: "Pequeño architecture for lightweight steel frame homes",
      },
    ],
  },
};

function buildJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Architecture | Pequeno",
      url: pageUrl,
      description: metadata.description,
      about: [
        "Architect-designed homes",
        "Lightweight steel frame architecture",
        "Residential and commercial design in South Africa",
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

export default function ArchitecturePage() {
  const featuredLocations = getFeaturedLocationPages(4);
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
            src="/images/architecture-hero.jpg"
            alt="Pequeño architecture for lightweight steel frame homes"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 lg:px-14">
          <div className="flex flex-wrap justify-center gap-3 pt-20 text-xs uppercase tracking-[0.22em] text-white/80">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Architecture
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Lightweight steel framing
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              South African sites
            </span>
          </div>

          <div className="mx-auto my-auto max-w-5xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/75">
              Design shaped by site, climate, and the way you want to live
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Architecture that feels{" "}
              <span className="font-serif italic text-[#ff8b6e]">
                intentional
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-white/88 md:text-xl md:leading-8">
              Pequeno designs homes and buildings that respond to South African
              conditions with clarity, comfort, and a strong architectural point
              of view. Our work combines thoughtful planning with lightweight
              steel framing to create spaces that are practical, durable, and
              beautiful to live in.
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
            "Architecture that responds to climate, orientation, and daily use.",
            "Designs shaped around lightweight steel framing from the outset.",
            "A clear process from concept thinking to a buildable outcome.",
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
            Our Approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Architecture that starts with the real brief
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-gray-600">
          <p>
            Good architecture is not only about appearance. It begins with the
            realities of the site, the climate, the budget, the approvals, and
            the way people actually want to use the building day to day.
          </p>
          <p>
            For Pequeno, design means resolving those realities into spaces that
            feel calm, efficient, and well-proportioned. Lightweight steel
            framing supports that process by giving us a precise structural
            system that works well with contemporary design, performance-led
            envelopes, and cleaner coordination on site.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              What We Design
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Different briefs, one consistent design standard
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our architecture work spans residential, retreat, accommodation,
              and selected commercial briefs. The common thread is careful
              planning and a strong fit between the building and the site.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Family homes",
                text: "Permanent homes designed for comfort, flow, and long-term daily use.",
              },
              {
                title: "Cabins and retreats",
                text: "Compact or mid-scale spaces shaped for privacy, landscape, and escape.",
              },
              {
                title: "Staff accommodation",
                text: "Larger accommodation programmes designed for consistency, durability, and efficient delivery.",
              },
              {
                title: "Commercial spaces",
                text: "Selected hospitality or lifestyle-oriented buildings where design quality matters.",
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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Design Priorities
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              What matters most in our architecture process
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Orientation, light, and heat gain",
              "Outdoor living and sheltered transition spaces",
              "Material honesty and long-term durability",
              "Layout efficiency and everyday practicality",
              "Climate response and insulation strategy",
              "A clear relationship between structure and design",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <p className="text-lg font-medium text-gray-900">{item}</p>
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
              Architecture grounded in built work
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Architecture + LSF
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Why design and structure should be resolved together
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              The best results come when the architecture is developed with the
              building system in mind from the start, not when structure is
              treated as an afterthought.
            </p>
          </div>

          <div className="space-y-5 text-lg leading-8 text-gray-700">
            <p>
              Lightweight steel framing works especially well for modern layouts,
              clean lines, careful detailing, and projects that need clearer
              coordination across design, manufacture, and site delivery.
            </p>
            <p>
              That does not mean every project should look the same. It means
              the design can be more deliberate because the structural system is
              precise and predictable.
            </p>
            <Link
              href="/lightweight-steel-frame-homes-south-africa"
              className="inline-block text-sm font-medium text-[#ff5c36] hover:underline"
            >
              Read more about lightweight steel frame homes →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              By Location
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Explore architecture shaped around different regions
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Climate, landscape, estate rules, and site conditions all change
              how a good building should be designed. These location pages show
              how that thinking changes from one place to another.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="rounded-2xl bg-[#f7f2ec] p-5 transition hover:bg-[#efe6dc]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  {location.province}
                </p>
                <p className="mt-2 text-xl font-medium text-gray-900">
                  Build in {location.place}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {location.localContext}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Common architecture questions
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
              Planning a home or building with Pequeno?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              Tell us about your site, your intended use, and the kind of space
              you want to create. We can help shape the brief and decide whether
              a lightweight steel frame approach is the right fit.
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
              href="/projects"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              View built work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
