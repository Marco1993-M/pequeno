"use client";

export default function AboutSection() {
  return (
    <section className="w-full mt-20">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            <span className="font-serif italic">Design</span> Meets{" "}
            <span className="font-serif italic">Durability</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Quality modular homes often face challenges with longevity and adaptability
            across South Africa's diverse landscapes. Pequeño is trusted by landowners,{" "}
            <strong>architects, engineers, steel fabricators,</strong> and{" "}
            <strong>construction companies</strong> to deliver architect-designed,
            prefabricated, and lightweight steel homes that are modern, resilient, and
            fast to construct. Our steel-framed, sustainable homes are fully scalable
            and built to last — combining sleek design with durability to create living
            spaces that thrive in any environment.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you’re an <strong>architect</strong> shaping new communities, an{" "}
            <strong>engineer</strong> ensuring structural integrity, a{" "}
            <strong>steel fabricator</strong> driving precision, or a{" "}
            <strong>construction company</strong> bringing designs to life — Pequeño is
            your trusted partner in creating exceptional, enduring spaces.
          </p>
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-200">
          <div className="relative w-full aspect-[16/9] overflow-hidden group">
            {/* Default image */}
            <img
              src="/banner3.jpg"
              alt="Modern unit"
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* Hover image */}
            <img
              src="/banner3-hover.jpg"
              alt="Modern unit alternate"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-800 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
