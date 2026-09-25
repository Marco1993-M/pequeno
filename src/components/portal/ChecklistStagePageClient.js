"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

export default function ChecklistStagePageClient({ stageKey }) {
  const { getTemplateByStage, inspections, projects } = usePortal();
  const template = getTemplateByStage(stageKey);

  if (!template) {
    notFound();
  }

  const relatedInspections = inspections.filter(
    (inspection) => inspection.stageKey === stageKey,
  );

  return (
    <>
      <PortalTopbar
        eyebrow="Stage checklist"
        title={template.stageLabel}
        description={template.description}
        actions={
          <>
            <Link
              href="/portal/checklists"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
            >
              All checklists
            </Link>
            <Link
              href="/portal/projects"
              className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
            >
              Use on a project
            </Link>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Stage summary
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[#f9f6f1] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Hold point
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {template.holdPoint}
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f9f6f1] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Inspection items
              </p>
              <p className="mt-3 text-3xl font-semibold text-[#111827]">
                {template.items.length}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[#fcfaf7] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Typical use on site
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              Use this checklist before the work is concealed or covered, then
              capture any corrections and release decision against the specific
              project inspection record.
            </p>
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[#fcfaf7] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Existing inspection records
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#111827]">
                  {relatedInspections.length}
                </p>
              </div>
              <StatusPill value={`${projects.length} projects`} />
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Checklist items
          </p>
          <div className="mt-6 space-y-4">
            {template.items.map((item, index) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-black/10 bg-[#fcfaf7] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Item {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-[#111827]">
                      {item.label}
                    </h2>
                  </div>
                  <StatusPill value="Pass / Corrections / N/A" />
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-700">
                  {item.acceptanceCriteria}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
                Recent uses
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
                Recorded inspections using this checklist
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {relatedInspections.length ? (
              relatedInspections.map((inspection) => (
                <Link
                  key={inspection.id}
                  href={`/portal/projects/${inspection.projectId}/inspections/${inspection.id}`}
                  className="block rounded-[1.5rem] border border-black/10 bg-[#fcfaf7] p-5 transition hover:border-[#c45734]/30"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <StatusPill value={inspection.releaseDecision} />
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      {inspection.inspectionRequestNo}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                    {projects.find((project) => project.id === inspection.projectId)
                      ?.name || inspection.projectId}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {inspection.area} · {inspection.inspectionDate}
                  </p>
                </Link>
              ))
            ) : (
              <p className="rounded-2xl bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-600">
                No inspection records use this checklist yet. Start from a
                project to create the first stage draft.
              </p>
            )}
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Next step
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
            Turn this into a live project inspection
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            The checklist page gives the standard. When you are ready to use it
            on a real job, open the relevant project and create a new inspection
            draft for this stage.
          </p>
          <div className="mt-6 space-y-3">
            <Link
              href="/portal/projects"
              className="block rounded-full bg-[#111827] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#c45734]"
            >
              Open projects
            </Link>
            <Link
              href="/portal/checklists"
              className="block rounded-full border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold text-[#111827]"
            >
              Back to checklist library
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
