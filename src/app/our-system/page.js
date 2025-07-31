'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import {
  FaDraftingCompass,
  FaPencilRuler,
  FaCogs,
  FaIndustry,
  FaHardHat,
  FaCheckCircle,
} from 'react-icons/fa';

export default function BuildingSystemPage() {
  const processStages = [
    {
      title: 'Design Brief',
      desc: 'We work with you to understand your site, needs, and goals.',
      icon: <FaDraftingCompass className="w-6 h-6 text-white" />,
      paraId: 'para-design-brief',
    },
    {
      title: 'Concept Design',
      desc: 'Our team develops a tailored design that suits your site and vision.',
      icon: <FaPencilRuler className="w-6 h-6 text-white" />,
      paraId: 'para-concept-design',
    },
    {
      title: 'Detailed Engineering',
      desc: 'We produce engineered plans for approval and manufacture.',
      icon: <FaCogs className="w-6 h-6 text-white" />,
      paraId: 'para-detailed-engineering',
    },
    {
      title: 'Manufacturing',
      desc: 'Components are precision-cut in our facility for fast on-site assembly.',
      icon: <FaIndustry className="w-6 h-6 text-white" />,
      paraId: 'para-manufacturing',
    },
    {
      title: 'Installation',
      desc: 'Our team assembles and constructs your building – start to finish.',
      icon: <FaHardHat className="w-6 h-6 text-white" />,
      paraId: 'para-installation',
    },
    {
      title: 'Final Handover',
      desc: 'We complete finishing touches and hand over your fully built structure.',
      icon: <FaCheckCircle className="w-6 h-6 text-white" />,
      paraId: 'para-final-handover',
    },
  ];

  const [activeStage, setActiveStage] = useState(0);
  const [hoverStage, setHoverStage] = useState(null);
  const [highlightedPara, setHighlightedPara] = useState(null);
  const stageRefs = useRef([]);
  const paraRefs = useRef([]);

  useEffect(() => {
    // Update active stage on scroll to highlight current section
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = 0;
      stageRefs.current.forEach((el, idx) => {
        if (el && scrollPos >= el.offsetTop) current = idx;
      });
      setActiveStage(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to paragraph & highlight it when a stage is clicked
  const onStageClick = (index) => {
  const paraEl = paraRefs.current[index];
  if (paraEl) {
    const yOffset = -100; // height of fixed header or desired padding
    const y = paraEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveStage(index);
    setHighlightedPara(index);
    setTimeout(() => setHighlightedPara(null), 3000);
  }
};


  const fillStage = hoverStage !== null ? hoverStage : activeStage;
  const fillPercent = ((fillStage + 1) / processStages.length) * 100;

  return (
    <>
      <Head>
        <title>Our Building System | Smart Steel</title>
        <meta
          name="description"
          content="Explore our innovative building system from design to handover with our interactive construction timeline."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 font-sans px-6 py-20 max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-20 px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-black tracking-tight">
            Our Building System
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            From concept to completion, Pequeño designs and constructs every stage with precision,
            quality, and sustainability in mind. Our modular steel framework ensures strength and speed without compromise.
          </p>
        </header>

        {/* Interactive Timeline Section */}
        <section
          id="process"
          aria-label="Construction Process Timeline"
          className="mb-32 scroll-mt-32"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-orange-600">
            How We Deliver: Stage 1 to Stage 6
          </h2>

          {/* Progress Bar */}
          <div className="relative mb-12 px-6">
            <div className="w-full h-3 bg-gray-300 rounded-full">
              <div
                className="h-3 bg-orange-600 rounded-full transition-all duration-300"
                style={{ width: `${fillPercent}%` }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center px-6">
            {processStages.map((stage, i) => {
              const isActive = i === activeStage;
              const isFilled = i <= fillStage;
              return (
                <div
                  key={i}
                  ref={(el) => (stageRefs.current[i] = el)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  onClick={() => onStageClick(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onStageClick(i);
                    }
                  }}
                  onMouseEnter={() => setHoverStage(i)}
                  onMouseLeave={() => setHoverStage(null)}
                  className={`group relative cursor-pointer outline-none focus:ring-2 focus:ring-orange-600 rounded`}
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isFilled ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Stage ${i + 1} icon: ${stage.title}`}
                  >
                    {stage.icon}
                  </div>
                  <h3
                    className={`font-semibold mb-1 text-sm ${
                      isActive ? 'text-orange-600' : 'text-gray-700'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-xs text-gray-600">{stage.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

 {/* Expanded Content - SEO Rich */}
<section className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8 px-6">
  <h2 className="text-3xl font-semibold mb-6 text-black text-center">
    Why Choose Our Steel Building System?
  </h2>

  {processStages.map((stage, i) => (
    <div
      key={i}
      id={stage.paraId}
      ref={(el) => (paraRefs.current[i] = el)}
      className={`flex items-start gap-4 transition-shadow duration-300 ${
        highlightedPara === i
          ? 'shadow-lg shadow-black-400/50 rounded-md bg-white-50 px-4 py-3'
          : ''
      }`}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 text-orange-800">
        {stage.icon}
      </div>

      {/* Text */}
      <p className="flex-1">
        <span className="font-semibold text-gray-900 block mb-1">
          {stage.title}
        </span>
        {(() => {
          switch (stage.title) {
            case 'Design Brief':
              return `At the Design Brief stage, we collaborate closely with you to understand your land, lifestyle needs, and vision — ensuring your project begins on a strong foundation.`;
            case 'Concept Design':
              return `During Concept Design, our architects create innovative, sustainable plans tailored to your site and preferences, blending aesthetics with functionality.`;
            case 'Detailed Engineering':
              return `Detailed Engineering produces precise steel framing and component plans, ensuring safety, durability, and compliance with regulations.`;
            case 'Manufacturing':
              return `In Manufacturing, our in-house facility cuts and prepares steel components with laser precision, minimizing waste and speeding assembly.`;
            case 'Installation':
              return `Our Installation team erects your building efficiently and expertly, maintaining quality control through every bolt and panel.`;
            case 'Final Handover':
              return `Finally, the Final Handover includes a thorough walkthrough, quality checks, and delivering your ready-to-use, sustainable steel building.`;
            default:
              return '';
          }
        })()}
      </p>
    </div>
  ))}
</section>


        {/* Call To Action Footer */}
<footer className="mt-24 py-20 bg-white text-center rounded-lg px-6 max-w-4xl mx-auto">
  <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build with Pequeño?</h2>
  <p className="mb-8 max-w-xl mx-auto text-gray-700">
    Start your project with us today and experience a streamlined, professional building process from design through installation.
  </p>
  <a
    href="/onboarding"
    className="inline-block px-10 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition"
  >
    Get Started
  </a>
</footer>

      </main>
    </>
  );
}
