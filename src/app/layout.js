// app/layout.js or app/layout.tsx (depending on your setup)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pequeño — Lightweight Steel Homes",
  description:
    "Pequeño designs and builds sustainable, lightweight steel homes with precision and purpose. Engineered for speed, strength, and beautiful simplicity.",
  keywords: [
    "Pequeño",
    "lightweight steel homes",
    "steel construction",
    "eco-friendly housing",
    "affordable steel homes",
    "Pequeño homes",
    "modern prefab",
  ],
  authors: [{ name: "Pequeño Team", url: "https://www.pequenohome.com" }],
  creator: "Pequeño",
  metadataBase: new URL("https://www.pequenohome.com"),
  openGraph: {
    title: "Pequeño — Lightweight Steel Homes",
    description:
      "Discover beautifully crafted, prefabricated lightweight steel homes designed for smart living.",
    url: "https://www.pequenohome.com",
    siteName: "Pequeño",
    images: [
      {
        url: "https://www.pequenohome.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Pequeño steel home exterior",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pequeño — Lightweight Steel Homes",
    description:
      "Discover beautifully crafted, prefabricated lightweight steel homes designed for smart living.",
    images: ["https://www.pequenohome.com/og-image.jpg"], // Replace with actual image
    creator: "@pequeno", // Add your handle or remove if not applicable
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-gray-900`}
      >
        <Navbar />
        <div style={{ maxWidth: "100vw", width: "100%", margin: "0 auto" }}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
