
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="mx-auto flex items-center" style={{ maxWidth: '85vw', width: '100%' }}>
        
        {/* Left logo */}
       <div className="py-6 flex-shrink-0">
  <Link href="/">
    <img src="/logo.png" alt="Pequeño Logo" className="h-8 cursor-pointer" />
  </Link>
</div>

        {/* Spacer to push nav links to center */}
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-12 tracking-wide text-sm text-black font-medium">
            <li>
              <Link href="/architecture" className="hover:underline">
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/enquire" className="hover:underline">
                Enquire
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
