"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { portalNavLinks } from "@/components/portal/portalNavLinks";

export default function PortalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full flex-col justify-between rounded-[2rem] border border-black/10 bg-[#111827] p-6 text-white shadow-sm lg:flex">
      <div>
        <Link href="/portal" className="block">
          <p className="text-xs uppercase tracking-[0.24em] text-white/55">
            Project Portal
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Pequeno Ops</h2>
        </Link>

        <nav className="mt-10 space-y-2">
          {portalNavLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/portal" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-white text-[#111827]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">
          Next
        </p>
        <p className="mt-2 text-sm leading-6 text-white/80">
          Real auth, file uploads, and PDF exports can drop into this structure
          without rewriting the route map later.
        </p>
      </div>
    </aside>
  );
}
