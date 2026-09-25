"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

export default function AppChrome({ children }) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal");

  if (isPortal) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "100vw", width: "100%", margin: "0 auto" }}>
        {children}
        <Footer />
      </div>
    </>
  );
}
