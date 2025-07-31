'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 bg-white z-50 border-b border-gray-200">
      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-8" style={{ maxWidth: '85vw', width: '100%' }}>
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Pequeño Logo" className="h-8 cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-12 uppercase tracking-wide text-sm font-medium">
            <li><Link href="/architecture" className="hover:underline">Architecture</Link></li>
            <li><Link href="/resources" className="hover:underline">Resources</Link></li>
            <li><Link href="/enquire" className="hover:underline">Enquire</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 uppercase tracking-wide text-sm font-medium text-center">
            <li>
              <Link href="/architecture" onClick={closeMenu} className="block hover:underline">
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/resources" onClick={closeMenu} className="block hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/enquire" onClick={closeMenu} className="block hover:underline">
                Enquire
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
