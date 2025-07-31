'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12 px-6 w-full">
      {/* Full-width wrapper */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-2">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/LogoWhite.png" alt="Pequeño Logo" width={50} height={50} />
            </Link>
            <p className="text-sm text-gray-300">
              Pequeño offers beautifully crafted compact homes that blend minimalist living with architectural design.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/architecture" className="hover:text-[#da1a33]">Architecture</Link></li>
              <li><Link href="/resources" className="hover:text-[#da1a33]">Resources</Link></li>
              <li><Link href="/enquire" className="hover:text-[#da1a33]">Enquire</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/resources#technical" className="hover:text-[#da1a33]">Technical Info</Link></li>
              <li><Link href="/resources#guides" className="hover:text-[#da1a33]">Guides</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">
              Email: <a href="mailto:info@pequenohome.com" className="hover:text-[#da1a33]">info@pequenohome.com</a>
            </p>
            <p className="text-sm text-gray-300 mb-6">
              Phone: <a href="tel:+27210000000" className="hover:text-[#da1a33]">+27 82 846 4555</a>
            </p>

            <div className="flex space-x-4 text-xl">
              <a href="https://www.facebook.com/profile.php?id=100091390116080" target="_blank" rel="noopener noreferrer" className="hover:text-[#da1a33]"><FaFacebookF /></a>
              <a href="https://www.instagram.com/pequeno_homes/" target="_blank" rel="noopener noreferrer" className="hover:text-[#da1a33]"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Pequeño. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
