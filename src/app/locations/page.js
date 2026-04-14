import Link from "next/link";

import { getFeaturedLocationPages, locationPageList } from "@/data/locationPages";

export const metadata = {
  title: "Locations We Serve | Pequeno",
  description:
    "Explore the South African towns and regions where Pequeno designs lightweight steel frame homes, with local pages tailored to climate, site conditions, and project type.",
  alternates: {
    canonical: "https://www.pequenohome.com/locations",
  },
  openGraph: {
    title: "Locations We Serve | Pequeno",
    description:
      "Explore local Pequeno pages for towns and regions across South Africa.",
    url: "https://www.pequenohome.com/locations",
    siteName: "Pequeño",
    locale: "en_ZA",
    type: "website",
  },
};

export default function LocationsPage() {
  const featured = getFeaturedLocationPages();

  return (
    <main className="pb-20 text-gray-900">
      <section className="px-4 pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,#131822,#233147)] px-8 py-14 text-white md:px-12 md:py-18">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            Locations
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            We design homes for every corner of South Africa
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Explore the places where Pequeno designs lightweight steel frame homes
            across South Africa. Each location page focuses on the realities that
            matter locally, including climate, site conditions, nearby service areas,
            and the kinds of homes people actually build there.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/enquire"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Let's Talk about your location
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-[95%] max-w-7xl">
        <div className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:grid-cols-3 md:p-8">
          {[
            "Explore homes designed around the realities of each location.",
            "See how climate, site conditions, and local context shape the right brief.",
            "Find the towns and regions where our lightweight steel system is a strong fit.",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-[#f7f2ec] p-5">
              <p className="text-sm leading-6 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              Featured Areas
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Popular locations to explore first
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-gray-600">
            These pages cover a mix of coastal, suburban, Lowveld, Winelands, and
            Garden Route markets so visitors can quickly find a relevant starting point.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}`}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                {location.province}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                Build in {location.place}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Homes shaped around {location.region}, with climate and planning
                notes tailored to the area.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-[95%] max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              All Locations
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Browse every location page
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore our full set of location pages to find the area that best
              matches your site, lifestyle, and project goals.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {locationPageList.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="rounded-2xl bg-[#f7f2ec] p-5 transition hover:bg-[#efe6dc]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  {location.province}
                </p>
                <p className="mt-2 text-xl font-medium text-gray-900">
                  {location.place}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {location.localContext}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
