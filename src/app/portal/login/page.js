import Link from "next/link";

import PortalTopbar from "@/components/portal/PortalTopbar";

export default function PortalLoginPage() {
  return (
    <>
      <PortalTopbar
        eyebrow="Access"
        title="Staff access is the first production step"
        description="This screen is the placeholder for authentication in phase two. For now, it helps us shape the login flow and the private portal language before we wire real auth into the app."
      />

      <section className="mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Work email
            </label>
            <input
              type="email"
              placeholder="team@pequenohome.com"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#111827] outline-none"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#111827] outline-none"
              readOnly
            />
          </div>

          <div className="rounded-2xl bg-[#f7f2ec] p-4 text-sm leading-6 text-gray-600">
            Authentication is not live yet in this MVP. The next backend phase
            will add staff roles, secure sign-in, and protected project data.
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/portal/projects"
              className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
            >
              Continue to prototype
            </Link>
            <Link
              href="/portal"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
