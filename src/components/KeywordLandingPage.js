import Image from "next/image";
import Link from "next/link";

import ProjectProofGrid from "@/components/ProjectProofGrid";
import { getFeaturedLocationPages } from "@/data/locationPages";
import {
  getKeywordLandingPage,
  keywordLandingPageList,
} from "@/data/keywordLandingPages";

export function getKeywordMetadata(page) {
  const url = `https://www.pequenohome.com/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.keyword,
      page.shortTitle.toLowerCase(),
      "lightweight steel homes south africa",
      "architect-led homes south africa",
      "premium prefab homes south africa",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.ogDescription || page.description,
      url,
      siteName: "Pequeño",
      locale: "en_ZA",
      type: "article",
      images: [
        {
          url: page.image,
          width: 1600,
          height: 900,
          alt: page.shortTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.ogDescription || page.description,
      images: [page.image],
    },
  };
}

export function buildKeywordJsonLd(page) {
  const pageUrl = `https://www.pequenohome.com/${page.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.shortTitle,
      url: pageUrl,
      description: page.description,
      about: [
        page.keyword,
        "Lightweight steel homes South Africa",
        "Architect-led homes South Africa",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((item) => ({
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

export default function KeywordLandingPage({ slug }) {
  const page = getKeywordLandingPage(slug);

  if (!page) return null;

  const featuredLocations = getFeaturedLocationPages(4);
  const relatedPages = (page.related || [])
    .map((item) => getKeywordLandingPage(item))
    .filter(Boolean);
  const jsonLd = buildKeywordJsonLd(page);

  return (
    <main className="pb-20 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative flex h-screen w-full flex-col items-center justify-between px-4 text-center text-black">
        <div className="absolute left-6 right-6 top-24 bottom-6 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={page.image}
            alt={page.shortTitle}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-10 md:px-10 lg:px-14">
          <div className="flex flex-wrap justify-center gap-3 pt-20 text-xs uppercase tracking-[0.22em] text-white/80">
            {page.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mx-auto my-auto max-w-5xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/75">
              {page.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              {page.heroTitle}
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-white/88 md:text-xl md:leading-8">
              {page.heroIntro}
            </p>
            <p className="mx-auto max-w-3xl text-sm font-medium uppercase tracking-[0.22em] text-white/72 md:text-base">
              {page.heroProof}
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
            {
              title: "Broader search, better filter",
              text: `This page targets ${page.keyword} while helping the right clients understand what a more premium, architect-led route actually looks like.`,
            },
            {
              title: "Real South African proof",
              text: "Pretoria and Hoedspruit projects already give the brand built work that grounds the broader search terms in something credible.",
            },
            {
              title: "Connected next steps",
              text: "Every page links back into projects, locations, LSF guidance, and enquiry so this cluster strengthens the rest of the site as well.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
                {item.title}
              </p>
              <p className="mt-3 text-base leading-7 text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section
          key={section.title}
          className={`mx-auto mt-24 w-[95%] max-w-7xl ${
            index % 2 === 1
              ? "rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12"
              : ""
          }`}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
                {section.label}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                {section.title}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-gray-700">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="space-y-4 pt-2">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-7 text-gray-700"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff5c36]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto mt-24 w-[95%] max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Built Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built proof for a more premium interpretation of the keyword
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
              Helpful Internal Links
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Continue into the parts of the site that help qualify fit
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                href: "/lightweight-steel-frame-homes-south-africa",
                title: "Lightweight steel frame homes",
                text: "The main national pillar page for the system, process, and project fit.",
              },
              {
                href: "/articles/lightweight-steel-frame-home-cost-south-africa",
                title: "Cost planning",
                text: "Use pricing guidance to understand how scope and site affect the budget.",
              },
              {
                href: "/projects",
                title: "Built projects",
                text: "See real South African proof before you decide whether the keyword fit is genuine.",
              },
              {
                href: "/locations",
                title: "Locations",
                text: "Explore how climate, region, and site conditions change the right brief.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-[#f7f2ec] p-6 transition hover:bg-[#efe6dc]"
              >
                <p className="text-xl font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                {location.province}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                Build in {location.place}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Homes tailored to {location.region}, with local planning and
                climate considerations built into the page.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {relatedPages.length ? (
        <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
                Related Searches
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Closely related pages in this SEO cluster
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {relatedPages.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-2xl bg-[#f7f2ec] p-6 transition hover:bg-[#efe6dc]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  SEO landing page
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                  {item.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Common questions around {page.shortTitle.toLowerCase()}
            </h2>
          </div>
          <div className="space-y-4">
            {page.faqs.map((item) => (
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
              Looking for the right premium fit, not only the right keyword?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              Tell us about your land, your intended use, and the level of
              outcome you want. We can help decide whether Pequeno is the right
              design and construction partner for the brief.
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
              href="/architecture"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Explore architecture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function getKeywordStaticSlugs() {
  return keywordLandingPageList.map((page) => page.slug);
}
