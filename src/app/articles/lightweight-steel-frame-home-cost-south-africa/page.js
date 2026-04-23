import Link from "next/link";

import ProjectProofGrid from "@/components/ProjectProofGrid";
import { basePackages } from "@/data/locationPages";

const pageUrl =
  "https://www.pequenohome.com/articles/lightweight-steel-frame-home-cost-south-africa";

const faqs = [
  {
    question: "What is the starting cost of a lightweight steel frame home?",
    answer:
      "A compact Pequeno starter home can begin from around R850,000, depending on size, specification, site access, foundations, services, finishes, and location.",
  },
  {
    question: "Why do LSF home prices vary so much?",
    answer:
      "The frame is only one part of the build. Final cost is shaped by design complexity, site conditions, transport, foundations, insulation, cladding, roofing, windows, services, and interior finishes.",
  },
  {
    question: "Is LSF always cheaper than brick construction?",
    answer:
      "Not always. The value of LSF is usually in speed, precision, cleaner site work, design flexibility, and long-term performance. On some projects it may reduce cost, but it should not be treated as a cheap shortcut.",
  },
  {
    question: "When can Pequeno give an accurate quote?",
    answer:
      "A more accurate quote becomes possible once the site, access, size, design brief, specification level, and service requirements are understood.",
  },
];

export const metadata = {
  title: "How Much Does a Lightweight Steel Frame Home Cost in South Africa?",
  description:
    "Understand lightweight steel frame home costs in South Africa, including budget ranges, what affects pricing, and how Pequeno helps clients plan LSF builds.",
  keywords: [
    "lightweight steel frame home cost South Africa",
    "LSF home prices South Africa",
    "steel frame house cost South Africa",
    "modular home cost South Africa",
    "prefab home prices South Africa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How Much Does a Lightweight Steel Frame Home Cost in South Africa?",
    description:
      "A practical pricing guide for South Africans considering lightweight steel frame homes, cabins, staff housing, or modular structures.",
    url: pageUrl,
    siteName: "Pequeño",
    locale: "en_ZA",
    type: "article",
  },
};

function buildJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: metadata.title,
      description: metadata.description,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      author: {
        "@type": "Organization",
        name: "Pequeño",
        url: "https://www.pequenohome.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Pequeño",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pequenohome.com/logo.png",
        },
      },
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

export default function LsfCostArticlePage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="pb-20 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-6 py-24">
        <nav className="mb-10 text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:underline">
            Articles
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">LSF home costs</span>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
          Cost Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          How much does a lightweight steel frame home cost in South Africa?
        </h1>
        <p className="mt-6 text-xl leading-9 text-gray-600">
          The honest answer is that cost depends on more than the frame. A good
          LSF quote needs to account for the site, design, specification,
          foundations, services, finishes, and how the building will be used.
        </p>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-[#f7f2ec] p-6 md:p-8">
          <p className="text-lg leading-8 text-gray-700">
            As an early planning guide, Pequeno projects can range from compact
            starter homes around <strong>R850,000</strong> to larger custom homes
            and premium builds from <strong>R2.8m+</strong>. The right number
            comes from matching the building system to your actual brief, not
            from pricing per square metre in isolation.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold">Indicative budget ranges</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {basePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-6 ${
                  pkg.featured
                    ? "border-[#ff5c36] bg-[#fff5f1]"
                    : "border-black/10 bg-white"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  {pkg.featured ? "Most requested" : "Planning range"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-semibold">{pkg.price}</p>
                <p className="mt-1 text-sm text-gray-500">{pkg.size}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6 text-lg leading-8 text-gray-700">
          <h2 className="text-3xl font-semibold text-gray-900">
            What affects the cost of an LSF home?
          </h2>
          <p>
            The biggest mistake is treating lightweight steel framing as a single
            fixed product. In reality, the frame is part of a complete building
            system. Two homes with the same floor area can land at very different
            budgets if one has simple access and standard finishes while the
            other has complex foundations, premium glazing, off-grid services, or
            a more ambitious architectural brief.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "Site access, slope, soil, and foundation requirements",
              "Transport distance and installation logistics",
              "Glazing, insulation, cladding, roofing, and specification level",
              "Bathrooms, kitchens, services, solar readiness, and water systems",
              "Design complexity, spans, roof forms, and custom detailing",
              "Estate guidelines, approvals, and location-specific constraints",
            ].map((item) => (
              <li key={item} className="rounded-2xl bg-[#f7f2ec] p-5">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 space-y-6 text-lg leading-8 text-gray-700">
          <h2 className="text-3xl font-semibold text-gray-900">
            Is LSF cheaper than brick?
          </h2>
          <p>
            Sometimes, but that should not be the only reason to choose it. The
            stronger case for LSF is usually speed, precision, design flexibility,
            cleaner site work, and the ability to create a high-performance
            building envelope. If the brief is simply “the cheapest possible
            structure,” LSF may not be the right conversation. If the brief is a
            better-controlled modern build, it becomes much more compelling.
          </p>
          <p>
            In many projects, the value is found in fewer unknowns, better
            coordination, and a structure that supports modern layouts, efficient
            insulation, and faster assembly on site.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold">
            Real projects help make the numbers practical
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Cost planning is easier when you can compare your brief with built
            examples. These projects show how LSF can work across different
            scales and uses.
          </p>
          <div className="mt-8">
            <ProjectProofGrid limit={2} compact />
          </div>
        </section>

        <section className="mt-16 space-y-4">
          <h2 className="text-3xl font-semibold">
            Common cost questions
          </h2>
          {faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <summary className="cursor-pointer text-lg font-medium text-gray-900">
                {item.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] bg-[linear-gradient(135deg,#111827,#1f2937)] p-8 text-white md:p-10">
          <h2 className="text-3xl font-semibold">
            Want a realistic budget for your site?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/78">
            Tell us where you want to build, what you want to use the space for,
            and the level of finish you have in mind. We can help you understand
            whether lightweight steel framing is a good fit.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/enquire"
              className="rounded-full bg-[#ff5c36] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e44d28]"
            >
              Enquire about pricing
            </Link>
            <Link
              href="/lightweight-steel-frame-homes-south-africa"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Read the LSF guide
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
