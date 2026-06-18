"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

import AboutSection from "@/components/AboutSection";
import ProjectProofGrid from "@/components/ProjectProofGrid";
import SocialProofStrip from "@/components/SocialProofStrip";
import { getFeaturedLocationPages } from "@/data/locationPages";

export default function HomePageClient({ faqItems }) {
  const featuredLocations = getFeaturedLocationPages(8);

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <main className="w-full px-0 py-0">
        <section className="relative flex h-screen w-full flex-col items-center justify-between px-4 text-center text-black">
          <div className="absolute inset-x-6 bottom-6 top-18 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/heroC.jpg"
              alt="Architect-designed lightweight steel home in South Africa"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 m-6 rounded-3xl bg-gradient-to-t from-black/70 via-black/0 to-transparent" />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
            <p className="text-sm font-light tracking-wider text-black">
              Architect-led homes shaped for South African sites, climates, and
              off-grid living.
            </p>

            <h1 className="mb-32 text-5xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-lg md:text-8xl">
              Lightweight Steel
              <span className="font-serif italic text-[#ff5c36]">
                {" "}
                Homes
              </span>
              <span className="block">Designed for South Africa</span>
              <span className="block text-3xl md:text-6xl">
                <Typewriter
                  words={[
                    "Tailored",
                    "Off-grid-ready",
                    "Built To Love",
                    "Built To Last",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <div className="absolute bottom-[5%] flex w-full flex-col items-center px-4">
              <p className="text-base text-white md:text-lg">
                Architect-designed private homes, cabins, modular buildings, and
                off-grid retreats.
              </p>
              <p className="text-base text-white md:text-lg">
                Lightweight steel framing with a calmer process and a stronger
                end result.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <a href="/free-3d-mockup">
                  <button className="rounded-full bg-[#ff5c36] px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-white hover:text-[#ff5c36]">
                    Free 3D Mockup
                  </button>
                </a>

                <a href="/onboarding">
                  <button className="rounded-full bg-white px-8 py-3 font-semibold text-[#ff5c36] shadow-md transition duration-300 hover:scale-105 hover:bg-[#ff5c36] hover:text-white">
                    Get Started
                  </button>
                </a>

                <a href="/recent">
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black/90 shadow-md transition duration-300 hover:bg-white hover:text-[#ff5c36]">
                    <span className="text-lg">→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <SocialProofStrip />
        <AboutSection />

        <section className="mx-auto mt-24 w-[95%]">
          <div className="rounded-3xl border p-8 shadow-sm md:p-12">
            <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  How We Build Lightweight Steel Homes
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  Lightweight steel framing, modular components, and curated
                  finishes designed for South African conditions.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link
                  href="/our-system"
                  className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#ff5c36]"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  img: "/system-structure.jpg",
                  label: "Structure",
                  title: "The Framework of the Building",
                  desc: "Precision-engineered steel frames form the durable, rust-resistant skeleton of each unit, built off-site and assembled efficiently on location.",
                },
                {
                  img: "/system-insulation.jpg",
                  label: "Envelope",
                  title: "Sheathing & Insulation",
                  desc: "Breathable wall systems, weatherproofing layers, and high R-value insulation help each home stay efficient and protected in demanding climates.",
                },
                {
                  img: "/system-cladding.jpg",
                  label: "Finish",
                  title: "Exterior Cladding Options",
                  desc: "Choose from natural timber, concealed-fix steel, or fibre cement panels, all selected to suit the site, architecture, and long-term performance.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:shadow-md"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <h4 className="mb-1 text-sm uppercase tracking-wide text-gray-500">
                      {item.label}
                    </h4>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-sm text-gray-600">
                      {item.desc}
                    </p>
                    <a
                      href="/our-system"
                      className="mt-4 text-sm font-medium text-[#ff5c36] hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 w-[95%]">
          <div className="grid items-center gap-12 rounded-3xl border border-transparent p-8 md:grid-cols-2 md:p-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Realise your home
                <br />
                with lightweight steel framing
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Frames are lightweight, durable, strong, and versatile in design.
                Lightweight steel&apos;s high strength-to-weight ratio suits modern
                homes, open-plan spaces, remote sites, and carefully detailed
                architectural work.
              </p>

              <Link
                href="/lightweight-steel-frame-homes-south-africa"
                className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#ff5c36]"
              >
                Explore LSF Homes
              </Link>
            </div>

            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/steel-framing.jpg"
                alt="Lightweight steel framing for a South African home"
                className="h-auto w-full rounded-2xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 w-[95%]">
          <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  See what we have built
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  Explore completed lightweight steel frame projects shaped around
                  real South African sites, climates, and client briefs.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#ff5c36]"
              >
                View Projects
              </Link>
            </div>
            <ProjectProofGrid limit={2} compact />
          </div>
        </section>

        <section className="mx-auto mt-24 w-[95%]">
          <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  Explore the towns and regions we serve
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  Browse local pages built around real climate, site, and planning
                  considerations across South Africa.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/locations"
                  className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#ff5c36]"
                >
                  View All Locations
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${location.slug}`}
                  className="rounded-2xl bg-[#f7f2ec] p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    {location.province}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                    Build in {location.place}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    Homes designed around {location.region}, with locally grounded
                    planning and climate notes.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 w-[95%]">
          <div className="rounded-3xl border p-8 shadow-sm space-y-12 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Catch up on the latest news
                </h2>
                <p className="text-sm text-gray-600 md:text-base">
                  Insights, updates, and behind-the-scenes content from our
                  design and construction process, all built around lightweight
                  steel framing.
                </p>
              </div>
              <a
                href="/articles"
                className="mt-6 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#ff5c36] md:mt-0"
              >
                View More Articles
              </a>
            </div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: "Exploring Modular Architecture",
                  desc: "A look at how modular structures are reshaping the South African landscape with a faster, more sustainable way to build well.",
                  link: "/articles/modular-architecture",
                  img: "/images/modular.jpg",
                },
                {
                  title: "Designing for Harsh Environments",
                  desc: "See how we engineer steel-frame homes that withstand the heat, wind, and weather extremes of remote locations.",
                  link: "/our-system",
                  img: "/images/harsh.jpg",
                },
                {
                  title: "Off-Grid Building: Our Approach",
                  desc: "Our off-grid ready designs include solar, rainwater harvesting, and passive design principles from the earliest stages.",
                  link: "/resources",
                  img: "/images/off-grid.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:shadow-md"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-grow flex-col p-6">
                    <h4 className="mb-1 text-sm uppercase text-gray-500">News</h4>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 md:text-xl">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-sm text-gray-600">
                      {item.desc}
                    </p>
                    <a
                      href={item.link}
                      className="mt-4 text-sm font-medium text-[#ff5c36] hover:underline"
                    >
                      Read article →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 w-[95%]">
          <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
                Common Questions
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Helpful answers before you enquire
              </h2>
              <p className="mt-4 text-base text-gray-600 md:text-lg">
                These are some of the first questions clients ask when comparing
                lightweight steel homes, off-grid planning, and architect-led
                modular building in South Africa.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl bg-[#f9f6f1] p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold">Have a project in mind?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-700">
              Whether you&apos;re planning a private home, an off-grid retreat, a
              compact cabin, or a lightweight steel structure for a remote site,
              we can help shape the brief and the next step.
            </p>
            <a
              href="/onboarding"
              className="inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#ff5c36]"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
