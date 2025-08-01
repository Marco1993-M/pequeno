import Head from "next/head";
import ModularArticleClient from "./ModularArticleClient";

export const metadata = {
  title: "Exploring Modular Architecture — Pequeño",
  description:
    "A look at how modular structures are reshaping the South African landscape — fast, sustainable, and beautiful.",
  openGraph: {
    title: "Exploring Modular Architecture — Pequeño",
    description:
      "Discover how modular structures are transforming South Africa with speed, sustainability, and design innovation.",
    url: "https://www.pequenohome.com/articles/modular-architecture",
    siteName: "Pequeño",
    images: [
      {
        url: "https://www.pequenohome.com/images/modular-home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Modern modular home in South Africa",
      },
    ],
    locale: "en_ZA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exploring Modular Architecture — Pequeño",
    description:
      "Discover how modular structures are transforming South Africa with speed, sustainability, and design innovation.",
    images: ["https://www.pequenohome.com/images/modular-home-hero.jpg"],
    creator: "@pequeno",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.pequenohome.com/articles/modular-architecture",
  },
  headline: "Exploring Modular Architecture: Reshaping the South African Landscape",
  description:
    "A deep dive into how modular structures are transforming South Africa with speed, sustainability, and design innovation.",
  image: "https://www.pequenohome.com/images/modular-home-hero.jpg",
  author: {
    "@type": "Organization",
    name: "Pequeño Homes",
    url: "https://www.pequenohome.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Pequeño Homes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.pequenohome.com/images/logo-icon.png",
    },
  },
  datePublished: "2025-08-01",
  dateModified: "2025-08-01",
};

export default function ModularArchitecturePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <ModularArticleClient />
    </>
  );
}
