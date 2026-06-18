"use client";

export default function AboutSection() {
  return (
    <section className="w-full mt-20">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Why clients choose
            <span className="font-serif italic"> architect-led </span>
            lightweight steel homes
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Many people love the idea of a faster, cleaner build process but still
            worry about whether a modular or lightweight steel home will feel
            durable, comfortable, or well resolved. Pequeño exists to close that
            gap, combining real architectural thinking with lightweight steel
            framing to create homes that are contemporary, resilient, and grounded
            in the realities of South African building.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            We are strongest on projects where the brief needs both clarity and
            flexibility: off-grid retreats, private homes, cabins, estate builds,
            and lightweight structures on demanding or remote sites. The value is
            not only in the steel frame itself, but in making better design and
            build decisions before expensive mistakes happen on site.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "A stronger fit for remote and climate-sensitive sites",
              "Cleaner coordination between design, structure, and delivery",
              "A calmer process from concept to build",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-700">
                {item}
              </div>
            ))}
          </div>
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
