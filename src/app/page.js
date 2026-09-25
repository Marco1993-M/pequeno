import HomePageClient from "@/components/HomePageClient";

const homeTitle = "Luxury Home Design & Build South Africa | Pequeño";
const homeDescription = "Bespoke luxury home design-and-build in South Africa. Explore Pequeño’s built work, plan your budget, or discuss LSF structure supply and installation.";
const faqItems = [
  { question: "What does Pequeño offer?", answer: "Our focus is bespoke luxury home design-and-build. We also offer lightweight steel frame (LSF) structures as supply only or supply and installation, for clients managing the remaining building works." },
  { question: "Where do you work?", answer: "We consider projects across South Africa, assessing each location, scope, and delivery requirements. Our project experience includes Rayton, Hoedspruit, and LSF structure supply and installation in Somerset West." },
  { question: "Who handles the architectural documentation?", answer: "We coordinate the design-and-build journey with specialist professionals. Architectural partners undertake contract documentation, with professional appointments and responsibilities agreed for each project." },
  { question: "Does an LSF structure package include a finished shell?", answer: "No. It covers the LSF structure, either supplied only or supplied and installed. Other building works, the weatherproof envelope, and finishes are outside that structure-only scope unless explicitly included in your quotation." },
  { question: "How do we establish a realistic budget?", answer: "Start with your location, land status, approximate floor area, and intended investment. We discuss the scope, site conditions, and finish expectations before developing project-specific pricing. A steel-frame structure price should not be treated as the total cost of a completed home." },
];

export const metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: ["luxury home design and build South Africa", "bespoke homes South Africa", "Pequeño", "LSF structure supply and installation"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "https://www.pequenohome.com",
  },
  twitter: {
    title: homeTitle,
    description: homeDescription,
  },
};

export default function Page() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pequeño",
    alternateName: ["Pequeno", "Pequeno Home", "Pequeño Home"],
    url: "https://www.pequenohome.com",
    logo: "https://www.pequenohome.com/logo.png",
    email: "info@pequenohome.com",
    telephone: "+27 82 846 4555",
    sameAs: [
      "https://www.instagram.com/pequeno_homes/",
      "https://www.facebook.com/profile.php?id=100091390116080",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pequeño",
    url: "https://www.pequenohome.com",

  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <HomePageClient faqItems={faqItems} />
    </>
  );
}
