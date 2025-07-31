'use client';

import { useEffect } from 'react';
import Head from 'next/head';

export default function OurSystem() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const sections = [
    { id: 'structure', title: 'The Framework of the Building' },
    { id: 'envelope', title: 'Sheathing & Insulation' },
    { id: 'cladding', title: 'Exterior Cladding Options' },
  ];

  return (
    <>
      <Head>
        <title>Our Building System | Smart Steel</title>
        <meta
          name="description"
          content="Discover how Smart Steel structures are engineered – from precision steel framing to high-performance insulation and durable cladding. Fast, sustainable, and built to last."
        />
      </Head>

      <main className="px-6 py-20 max-w-7xl mx-auto flex gap-12">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 self-start">
          <nav className="space-y-4 border-l border-gray-200 pl-4">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Sections</h3>
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-gray-700 hover:text-black transition font-medium"
              >
                {`${index + 1}. ${section.title}`}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Page Header */}
          <header className="mb-16">
            <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">
              Our Building System
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Our modern steel construction method combines engineered strength, sustainable materials, and flexible finishes to deliver smart, durable, and efficient structures – built for life and location.
            </p>
          </header>

          {/* Section: Structure */}
          <section id="structure" className="mb-24 scroll-mt-32">
            <h2 className="text-2xl font-semibold mb-4">1. The Framework of the Building</h2>
            <img
              src="/system-structure.jpg"
              alt="Lightweight Steel Frame Structure"
              className="w-full h-72 object-cover rounded-xl mb-6"
            />
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { src: 'images/structure-a.jpg', alt: 'Natural Timber' },
                { src: 'images/structure-b.jpg', alt: 'Concealed Fix Steel' },
                { src: 'images/structure-c.jpg', alt: 'Fiber Cement Board' },
                { src: 'images/structure-d.jpg', alt: 'Composite Panels' },
                { src: 'images/structure-e.jpg', alt: 'Brick Finishes' },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover rounded-xl"
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg">
              At the core of our system lies a lightweight steel framework — precision-cut and manufactured off-site for fast, efficient assembly. Unlike traditional timber, steel framing is immune to rot, termites, and warping. It is incredibly strong, dimensionally stable, and 100% recyclable.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Our modular approach means we can deliver and assemble buildings quickly with minimal waste and disruption. The result: a structurally sound, adaptable skeleton designed to stand the test of time.
            </p>
          </section>

          {/* Section: Envelope */}
          <section id="envelope" className="mb-24 scroll-mt-32">
            <h2 className="text-2xl font-semibold mb-4">2. Sheathing & Insulation</h2>
            <img
              src="/system-insulation.jpg"
              alt="Wall Insulation and Sheathing"
              className="w-full h-72 object-cover rounded-xl mb-6"
            />
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { src: 'images/cladding-timber.jpg', alt: 'Natural Timber' },
                { src: 'images/cladding-steel.jpg', alt: 'Concealed Fix Steel' },
                { src: 'images/cladding-cement.jpg', alt: 'Fiber Cement Board' },
                { src: 'images/cladding-composite.jpg', alt: 'Composite Panels' },
                { src: 'images/cladding-brick.jpg', alt: 'Brick Finishes' },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover rounded-xl"
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg">
              A high-performance building envelope is key to indoor comfort and energy efficiency. We use breathable wall wraps, reflective barriers, and insulation materials with high R-values to regulate temperature, reduce moisture build-up, and block external noise.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              Whether you are building in a coastal, dry, or mountainous region, our layered wall system ensures protection from the elements and helps lower heating and cooling costs long-term.
            </p>
          </section>

          {/* Section: Cladding */}
          <section id="cladding" className="mb-24 scroll-mt-32">
            <h2 className="text-2xl font-semibold mb-4">3. Exterior Cladding Options</h2>
            <p className="text-gray-700 text-lg mb-4">
              Finishing a building is about more than aesthetics — it iss about protection, personality, and longevity. We offer a curated selection of cladding materials to suit every climate and style.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { src: 'images/cladding-timber.jpg', alt: 'Natural Timber' },
                { src: 'images/cladding-steel.jpg', alt: 'Concealed Fix Steel' },
                { src: 'images/cladding-cement.jpg', alt: 'Fiber Cement Board' },
                { src: 'images/cladding-composite.jpg', alt: 'Composite Panels' },
                { src: 'images/cladding-brick.jpg', alt: 'Brick Finishes' },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover rounded-xl"
                />
              ))}
            </div>

            <p className="text-gray-700 text-lg">
              From concealed-fix steel panels to eco-friendly fiber cement and warm timber tones, each option is chosen for its durability, weather resistance, and architectural appeal. Every finish can be customized to suit your site and brand identity.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
