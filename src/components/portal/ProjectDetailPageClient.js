"use client";

import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { useState } from "react";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

function stageActionLabel(stage) {
  if (stage.workflowStatus === "Ready") return "Start this stage";
  if (stage.workflowStatus === "In progress") return "Continue this stage";
  if (stage.workflowStatus === "Blocked") return "Resolve this stage";
  if (stage.workflowStatus === "Completed") return "View completed stage";
  return "Stage unavailable";
}

function stageCardTone(stage) {
  if (stage.workflowStatus === "Locked") {
    return "border-black/5 bg-[#f6f4f1] opacity-70";
  }
  if (stage.workflowStatus === "Not applicable") {
    return "border-[#d8c9bb]/60 bg-[#f8f2eb]";
  }
  if (stage.workflowStatus === "Ready") {
    return "border-[#35589a]/15 bg-[#f4f8ff]";
  }
  if (stage.workflowStatus === "Blocked") {
    return "border-[#b14a2f]/20 bg-[#fff6f2]";
  }
  return "border-black/10 bg-[#f9f6f1]";
}

function stageSummary(stage) {
  if (stage.workflowStatus === "Locked") {
    return "Locked until the prior in-scope stage is released.";
  }
  if (stage.workflowStatus === "Not applicable") {
    return "Removed from this project's workflow.";
  }
  if (stage.workflowStatus === "Completed") {
    return "Completed and recorded.";
  }
  if (stage.workflowStatus === "Ready") {
    return "Next available stage.";
  }
  if (stage.workflowStatus === "Blocked") {
    return "Needs corrections or reinspection.";
  }
  return "Inspection record in progress.";
}

const stageFilters = [
  { id: "all", label: "All stages" },
  { id: "active", label: "Upcoming" },
  { id: "done", label: "Completed" },
  { id: "out", label: "N/A" },
];

export default function ProjectDetailPageClient({ projectId }) {
  const {
    getFilesByProjectId,
    getInspectionsByProjectId,
    getProjectById,
    getProjectNextAction,
    getProjectStagePlan,
    addProjectFile,
    setProjectStageScope,
  } = usePortal();
  const searchParams = useSearchParams();
  const [fileForm, setFileForm] = useState({
    category: "Safety file",
    fileName: "",
    uploadedBy: "",
  });
  const [stageFilter, setStageFilter] = useState("all");

  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const inspections = getInspectionsByProjectId(project.id);
  const files = getFilesByProjectId(project.id);
  const stagePlan = getProjectStagePlan(project.id);
  const nextAction = getProjectNextAction(project.id);
  const completedStageKey = searchParams.get("completedStage");
  const completedStage = completedStageKey
    ? stagePlan.find((stage) => stage.stageKey === completedStageKey)
    : null;
  const nextActionHref = nextAction
    ? nextAction.latestInspection
      ? `/portal/projects/${project.id}/inspections/${nextAction.latestInspection.id}`
      : `/portal/projects/${project.id}/inspections/new?stage=${nextAction.stageKey}`
    : null;
  const wasJustCreated = searchParams.get("created") === "1";
  const isEmptyProject = inspections.length === 0 && files.length === 0;
  const filteredStagePlan = stagePlan.filter((stage) => {
    if (stageFilter === "active") {
      return ["Ready", "In progress", "Blocked", "Locked"].includes(
        stage.workflowStatus,
      );
    }
    if (stageFilter === "done") {
      return stage.workflowStatus === "Completed";
    }
    if (stageFilter === "out") {
      return stage.workflowStatus === "Not applicable";
    }
    return true;
  });

  function handleFileSubmit(event) {
    event.preventDefault();
    addProjectFile(project.id, fileForm);
    setFileForm({
      category: "Safety file",
      fileName: "",
      uploadedBy: "",
    });
  }

  return (
    <>
      <PortalTopbar
        eyebrow={project.projectNumber}
        title={project.name}
        description={`${project.address} · ${project.clientName} · ${project.projectType}`}
        actions={
          <>
            <a
              href="#project-files"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-semibold text-[#111827] transition hover:border-[#c45734] hover:text-[#c45734]"
              aria-label="Jump to project files"
              title="Jump to project files"
            >
              +
            </a>
            {nextAction ? (
              <Link
                href={nextActionHref}
                className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
              >
                {nextAction.workflowStatus === "Ready"
                  ? `Start ${nextAction.stageLabel}`
                  : `Open ${nextAction.stageLabel}`}
              </Link>
            ) : null}
            <Link
              href="/portal/projects"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
            >
              All projects
            </Link>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill value={project.status} />
            <p className="text-sm text-gray-500">
              Site manager: {project.siteManager}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {stageFilters.map((filter) => {
              const active = stageFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setStageFilter(filter.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-[#111827] text-white"
                      : "border border-black/10 bg-white text-[#111827]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {nextAction ? (
            <div className="mt-6 rounded-[1.5rem] border border-[#35589a]/10 bg-[#f4f8ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#35589a]">
                Next recommended action
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#111827]">
                {nextAction.stageLabel}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {nextAction.workflowStatus === "Ready"
                  ? "This is the next stage in the build sequence. Complete it before the following stage becomes available."
                  : nextAction.workflowStatus === "In progress"
                    ? "This stage already has a live inspection record. Finish the checklist and release decision before moving on."
                    : "This stage has unresolved items. Close them out before the next stage is unlocked."}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={nextActionHref}
                  className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                >
                  {nextAction.workflowStatus === "Ready"
                    ? "Start stage inspection"
                    : "Open stage workflow"}
                </Link>
                <Link
                  href={`/portal/checklists/${nextAction.stageKey}`}
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
                >
                  Review checklist
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-[1.5rem] border border-[#2f7a4b]/10 bg-[#eef8f1] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f7a4b]">
                Project progress
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#111827]">
                All in-scope stages are complete
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                This project has no further stage actions waiting in the current
                sequence.
              </p>
            </div>
          )}

          {completedStage ? (
            <div className="mt-6 rounded-[1.5rem] border border-[#2f7a4b]/10 bg-[#eef8f1] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f7a4b]">
                Stage completed
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#111827]">
                {completedStage.stageLabel} has been passed
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                The workflow has been updated and the next valid stage is now
                highlighted below.
              </p>
              {nextAction ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={nextActionHref}
                    className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                  >
                    Start next stage
                  </Link>
                  <Link
                    href={`/portal/checklists/${nextAction.stageKey}`}
                    className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
                  >
                    Review next checklist
                  </Link>
                </div>
              ) : null}
            </div>
          ) : null}

          {wasJustCreated || isEmptyProject ? (
            <div className="mt-6 rounded-[1.5rem] border border-[#c45734]/15 bg-[#fcf4ee] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c45734]">
                Project setup
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#111827]">
                This project is ready for its first inspection record
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                The workflow now guides the team through the next valid stage.
                If part of the standard sequence does not apply to this project,
                mark that stage as not applicable below.
              </p>
            </div>
          ) : null}

          <div className="mt-8">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
                  Stage sequence
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                  Workflow overview
                </h2>
              </div>
              <p className="text-sm text-gray-500">
                Condensed to keep the field dashboard easier to scan.
              </p>
            </div>

            <div className="space-y-3">
            {filteredStagePlan.map((stage) => (
              <div
                key={stage.stageKey}
                className={`rounded-[1.5rem] border p-4 ${stageCardTone(stage)}`}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Stage workflow
                      </p>
                      <StatusPill value={stage.workflowStatus} />
                      <StatusPill value={stage.scopeState} />
                      {stage.latestInspection ? (
                        <StatusPill value={stage.latestInspection.releaseDecision} />
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-[#111827]">
                      {stage.stageLabel}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {stage.items.length} checklist items · {stageSummary(stage)}
                    </p>
                    {stage.openCorrectiveActions ? (
                      <p className="mt-1 text-sm leading-6 text-[#b14a2f]">
                        {stage.openCorrectiveActions} open corrective item
                        {stage.openCorrectiveActions === 1 ? "" : "s"}.
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {stage.scopeState === "Not applicable" ? (
                      <button
                        onClick={() =>
                          setProjectStageScope(project.id, stage.stageKey, "in_scope")
                        }
                        className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                      >
                        Return to scope
                      </button>
                    ) : stage.workflowStatus === "Locked" ? (
                      <button
                        disabled
                        className="rounded-full bg-[#d8dadd] px-4 py-2 text-sm font-semibold text-white"
                      >
                        {stageActionLabel(stage)}
                      </button>
                    ) : stage.latestInspection ? (
                      <Link
                        href={`/portal/projects/${project.id}/inspections/${stage.latestInspection.id}`}
                        className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                      >
                        {stageActionLabel(stage)}
                      </Link>
                    ) : (
                      <Link
                        href={`/portal/projects/${project.id}/inspections/new?stage=${stage.stageKey}`}
                        className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                      >
                        {stageActionLabel(stage)}
                      </Link>
                    )}

                    <Link
                      href={`/portal/checklists/${stage.stageKey}`}
                      className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#111827]"
                    >
                      Checklist
                    </Link>

                    {stage.scopeState === "In scope" &&
                    !stage.latestInspection &&
                    stage.workflowStatus !== "Completed" ? (
                      <button
                        onClick={() =>
                          setProjectStageScope(
                            project.id,
                            stage.stageKey,
                            "not_applicable",
                          )
                        }
                        className="rounded-full border border-[#d8c9bb] bg-[#fffaf6] px-4 py-2 text-sm font-semibold text-[#7a6252]"
                      >
                        N/A
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
            {!filteredStagePlan.length ? (
              <div className="rounded-[1.5rem] bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-600">
                No stages match this filter yet.
              </div>
            ) : null}
            </div>
          </div>
        </article>

        <div className="space-y-4">
          <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
                  Inspection records
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
                  Latest inspections
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {inspections.length ? (
                inspections.map((inspection) => (
                  <Link
                    key={inspection.id}
                    href={`/portal/projects/${project.id}/inspections/${inspection.id}`}
                    className="block rounded-[1.5rem] border border-black/10 bg-[#fcfaf7] p-5 transition hover:border-[#c45734]/30"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <StatusPill value={inspection.releaseDecision} />
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        {inspection.inspectionRequestNo}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                      {stagePlan.find(
                        (stage) => stage.stageKey === inspection.stageKey,
                      )?.stageLabel || inspection.stageKey}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {inspection.area} · {inspection.inspectionDate}
                    </p>
                  </Link>
                ))
              ) : (
                <p className="rounded-2xl bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-600">
                  No inspections recorded yet for this project.
                </p>
              )}
            </div>
          </article>

          <article
            id="project-files"
            className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
              Project files
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
              Safety and admin records
            </h2>

            <div className="mt-6 space-y-3">
              <form
                onSubmit={handleFileSubmit}
                className="rounded-[1.5rem] border border-dashed border-black/10 bg-[#fcfaf7] p-4"
              >
                <p className="text-sm font-medium text-[#111827]">
                  Add project file
                </p>
                <div className="mt-4 grid gap-3">
                  <select
                    value={fileForm.category}
                    onChange={(event) =>
                      setFileForm((current) => ({
                        ...current,
                        category: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                  >
                    <option>Safety file</option>
                    <option>Drawings</option>
                    <option>Certificates</option>
                  </select>
                  <input
                    value={fileForm.fileName}
                    onChange={(event) =>
                      setFileForm((current) => ({
                        ...current,
                        fileName: event.target.value,
                      }))
                    }
                    placeholder="File name"
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                    required
                  />
                  <input
                    value={fileForm.uploadedBy}
                    onChange={(event) =>
                      setFileForm((current) => ({
                        ...current,
                        uploadedBy: event.target.value,
                      }))
                    }
                    placeholder="Uploaded by"
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                >
                  Add file
                </button>
              </form>

              {files.length ? (
                files.map((file) => (
                  <div
                    key={file.id}
                    className="rounded-[1.5rem] bg-[#f9f6f1] p-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <StatusPill value={file.category} />
                      <p className="text-sm font-medium text-[#111827]">
                        {file.fileName}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Uploaded by {file.uploadedBy} on {file.uploadedAt}
                    </p>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-600">
                  No files stored against this project yet.
                </p>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
