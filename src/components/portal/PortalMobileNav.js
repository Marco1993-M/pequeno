"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { portalNavLinks } from "@/components/portal/portalNavLinks";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

export default function PortalMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="rounded-[1.75rem] border border-black/10 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <Link href="/portal" className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">
              Project Portal
            </p>
            <h2 className="mt-1 truncate text-lg font-semibold text-[#111827]">
              Pequeno Ops
            </h2>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#111827] text-white"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[#111827]/30" onClick={() => setOpen(false)}>
          <div
            className="absolute right-4 top-4 w-[min(86vw,22rem)] rounded-[2rem] border border-black/10 bg-white p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="rounded-[1.5rem] bg-[#f8f4ef] p-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">
                Navigate
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Open the part of the portal you need without leaving the field workflow.
              </p>
            </div>

            <nav className="mt-4 space-y-2">
              {portalNavLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/portal" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-[#111827] text-white"
                        : "bg-[#f8f4ef] text-[#111827]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
