"use client";

import Link from "next/link";
import { notFound, useRouter, useSearchParams } from "next/navigation";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

export default function NewInspectionPageClient({ projectId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createInspectionDraft, getProjectById, getProjectStagePlan } =
    usePortal();

  const project = getProjectById(projectId);
  const selectedStageKey = searchParams.get("stage");
  const sortedStages = [...getProjectStagePlan(projectId)].sort((a, b) => {
    if (a.stageKey === selectedStageKey) return -1;
    if (b.stageKey === selectedStageKey) return 1;
    return 0;
  });

  if (!project) {
    notFound();
  }

  return (
    <>
      <PortalTopbar
        eyebrow="New inspection"
        title={`Choose a stage for ${project.name}`}
        description={
          selectedStageKey
            ? "The selected stage has been brought to the top so you can create that inspection record quickly."
            : "Only the next valid stage is fully actionable. Later stages stay locked until the workflow reaches them."
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sortedStages.map((stage) => (
          <article
            key={stage.stageKey}
            className={`rounded-[2rem] border bg-white p-6 shadow-sm ${
              stage.stageKey === selectedStageKey
                ? "border-[#c45734]/40 ring-1 ring-[#c45734]/15"
                : stage.workflowStatus === "Locked"
                  ? "border-black/5 bg-[#f6f4f1] opacity-75"
                  : stage.workflowStatus === "Not applicable"
                    ? "border-[#d8c9bb]/60 bg-[#f8f2eb]"
                    : "border-black/10"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c45734]">
              {stage.stageKey === selectedStageKey
                ? "Selected stage"
                : "Stage workflow"}
            </p>
            <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-2xl font-semibold text-[#111827]">
                {stage.stageLabel}
              </h2>
              <StatusPill value={stage.workflowStatus} />
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {stage.description}
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Hold point: {stage.holdPoint}
            </p>
            <div className="mt-5 rounded-2xl bg-[#f9f6f1] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Checklist items
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#111827]">
                {stage.items.length}
              </p>
            </div>
            <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Checklist preview
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                {stage.items.slice(0, 3).map((item) => (
                  <li key={item.label}>• {item.label}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {stage.scopeState === "Not applicable"
                ? "This stage is currently out of scope for this project."
                : stage.workflowStatus === "Locked"
                  ? "Complete the previous in-scope stage before starting this one."
                  : stage.workflowStatus === "Completed"
                    ? "This stage already has a completed record. Open it from the project page if you need to review it."
                    : "This stage is available to create or continue as the live inspection record."}
            </p>
            <button
              onClick={() => {
                if (stage.latestInspection) {
                  router.push(
                    `/portal/projects/${project.id}/inspections/${stage.latestInspection.id}`,
                  );
                  return;
                }

                const draft = createInspectionDraft(project.id, stage.stageKey);
                if (draft) {
                  router.push(
                    `/portal/projects/${project.id}/inspections/${draft.id}`,
                  );
                }
              }}
              disabled={
                stage.workflowStatus === "Locked" ||
                stage.workflowStatus === "Not applicable"
              }
              className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                stage.workflowStatus === "Locked" ||
                stage.workflowStatus === "Not applicable" ||
                stage.workflowStatus === "Completed"
                  ? "bg-[#d8dadd] text-white"
                  : "bg-[#111827] text-white hover:bg-[#c45734]"
              }`}
            >
              {stage.workflowStatus === "Ready"
                ? "Create stage draft"
                : stage.workflowStatus === "In progress"
                  ? "Open active inspection"
                  : stage.workflowStatus === "Blocked"
                    ? "Open blocked inspection"
                    : stage.workflowStatus === "Completed"
                      ? "Open completed record"
                      : "Unavailable"}
            </button>
          </article>
        ))}
      </section>

      <div className="flex justify-start">
        <Link
          href={`/portal/projects/${project.id}`}
          className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
        >
          Back to project
        </Link>
      </div>
    </>
  );
}
