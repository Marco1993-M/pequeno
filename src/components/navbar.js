"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
const links = [["Homes", "/#homes"], ["Projects", "/projects"], ["Costs", "/articles/lightweight-steel-frame-home-cost-south-africa"], ["Enquire", "/onboarding"]];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav aria-label="Main navigation" className="absolute inset-x-0 top-0 z-50 text-[#292b26]">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-8 px-[6vw]">
      <Link href="/" aria-label="Pequeño home" className="flex items-center gap-2"><Image src="/logo.png" alt="" width={36} height={36} /><span className="text-xl tracking-[-0.04em]">pequeño</span></Link>
      <div className="hidden items-center gap-10 text-sm md:flex">{links.map(([label, href]) => <Link key={label} href={href} className="border-b border-transparent py-2 transition hover:border-current">{label}{label === "Enquire" && <span aria-hidden="true" className="ml-4">↗</span>}</Link>)}</div>
      <button type="button" className="rounded p-2 md:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)} onKeyDown={e => { if (e.key === "Escape") setIsOpen(false); }}>{isOpen ? <X /> : <Menu />}</button>
    </div>
    {isOpen && <div id="mobile-navigation" className="border-y border-black/10 bg-[#f3efea] px-[6vw] py-4 shadow-lg md:hidden" onKeyDown={e => { if (e.key === "Escape") setIsOpen(false); }}>{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setIsOpen(false)} className="block py-4 text-lg">{label}</Link>)}</div>}
  </nav>;
}
