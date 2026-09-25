import PortalMobileNav from "@/components/portal/PortalMobileNav";
import PortalSidebar from "@/components/portal/PortalSidebar";
import { PortalProvider } from "@/components/portal/PortalProvider";

export const metadata = {
  title: "Project Portal | Pequeno",
  description:
    "Private project operations portal for inspections, project files, and stage-based sign-off records.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalLayout({ children }) {
  return (
    <PortalProvider>
      <div className="min-h-screen bg-[#f4efe9] px-4 py-4 text-[#111827] md:px-6 md:py-6">
        <div className="mx-auto mb-4 max-w-7xl lg:hidden">
          <PortalMobileNav />
        </div>
        <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
            <PortalSidebar />
          </div>
          <main className="space-y-4">{children}</main>
        </div>
      </div>
    </PortalProvider>
  );
}
