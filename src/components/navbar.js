"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="mx-auto flex items-center justify-between px-4 py-4" style={{ maxWidth: "85vw", width: "100%" }}>
        
        {/* Left logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/logo.png" alt="Pequeño Logo" className="h-8 cursor-pointer" />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-12 tracking-wide text-sm text-black font-medium">
          <Link href="/architecture" className="hover:underline">Architecture</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
          <Link href="/enquire" className="hover:underline">Enquire</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-black">
            <li>
              <Link href="/architecture" className="hover:underline" onClick={() => setIsOpen(false)}>
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline" onClick={() => setIsOpen(false)}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/enquire" className="hover:underline" onClick={() => setIsOpen(false)}>
                Enquire
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
