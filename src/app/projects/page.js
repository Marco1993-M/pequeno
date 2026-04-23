import ProjectProofGrid from "@/components/ProjectProofGrid";

export const metadata = {
  title: "Projects | Pequeno",
  description:
    "Explore Pequeno lightweight steel frame projects, including commercial, residential, and staff accommodation structures built for South African conditions.",
  alternates: {
    canonical: "https://www.pequenohome.com/projects",
  },
  openGraph: {
    title: "Projects | Pequeno",
    description:
      "Project examples from Pequeno lightweight steel frame builds.",
    url: "https://www.pequenohome.com/projects",
    siteName: "Pequeño",
    locale: "en_ZA",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pb-20 text-gray-900">
      <section className="px-4 pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,#111827,#263445)] px-8 py-14 text-white md:px-12 md:py-18">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            Projects
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Real projects built with lightweight steel framing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            See how Pequeno uses lightweight steel framing across commercial,
            residential, and accommodation projects designed for real South
            African sites and conditions.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-[95%] max-w-7xl">
        <ProjectProofGrid />
      </section>
    </main>
  );
}
