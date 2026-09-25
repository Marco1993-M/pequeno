"use client";

import Link from "next/link";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

export default function PortalChecklistsPageClient() {
  const { inspectionTemplates, inspections } = usePortal();

  return (
    <>
      <PortalTopbar
        eyebrow="Checklist library"
        title="Stage-by-stage inspection checklists"
        description="Review the standard for each build stage, see what each inspection needs to cover, and open the right checklist before you go to site."
        actions={
          <Link
            href="/portal/projects"
            className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
          >
            Open projects
          </Link>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {inspectionTemplates.map((template) => {
          const records = inspections.filter(
            (inspection) => inspection.stageKey === template.stageKey,
          );

          return (
            <Link
              key={template.stageKey}
              href={`/portal/checklists/${template.stageKey}`}
              className="block rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:border-[#c45734]/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c45734]">
                  Stage checklist
                </p>
                <StatusPill value={`${template.items.length} items`} />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-[#111827]">
                {template.stageLabel}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {template.description}
              </p>
              <div className="mt-5 grid gap-3 rounded-[1.5rem] bg-[#f9f6f1] p-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Inspection items
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#111827]">
                    {template.items.length}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Recorded uses
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#111827]">
                    {records.length}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-gray-500">
                Hold point: {template.holdPoint}
              </p>
              <p className="mt-5 text-sm font-medium text-[#c45734]">
                Open checklist →
              </p>
            </Link>
          );
        })}
      </section>
    </>
  );
}
