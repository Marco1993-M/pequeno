"use client";

import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

const secondaryReleaseOptions = [
  "Draft in progress",
  "Accepted with minor corrections",
  "Partial release",
  "Reinspection required",
];

const itemStatusOptions = ["Pass", "Corrections", "N/A"];

const itemStatusToneMap = {
  Pass: {
    active: "border-[#2f7a4b] bg-[#2f7a4b] text-white",
    inactive: "border-[#bfe2c8] bg-[#eef8f1] text-[#2f7a4b]",
  },
  Corrections: {
    active: "border-[#b14a2f] bg-[#b14a2f] text-white",
    inactive: "border-[#f0c7b8] bg-[#fff3ed] text-[#b14a2f]",
  },
  "N/A": {
    active: "border-[#6b7280] bg-[#6b7280] text-white",
    inactive: "border-[#d6dae0] bg-[#f3f4f6] text-[#4b5563]",
  },
};

export default function InspectionDetailPageClient({
  projectId,
  inspectionId,
}) {
  const router = useRouter();
  const {
    getInspectionById,
    getProjectById,
    getTemplateByStage,
    addCorrectiveAction,
    addPhotoPlaceholder,
    updateInspectionField,
    updateInspectionItem,
  } = usePortal();
  const [actionForm, setActionForm] = useState({
    title: "",
    owner: "",
    dueDate: "",
  });
  const [photoForm, setPhotoForm] = useState({
    caption: "",
  });

  const project = getProjectById(projectId);
  const inspection = getInspectionById(inspectionId);

  if (!project || !inspection || inspection.projectId !== project.id) {
    notFound();
  }

  const template = getTemplateByStage(inspection.stageKey);

  function handleCorrectiveActionSubmit(event) {
    event.preventDefault();
    addCorrectiveAction(inspection.id, actionForm);
    setActionForm({
      title: "",
      owner: "",
      dueDate: "",
    });
  }

  function handlePhotoSubmit(event) {
    event.preventDefault();
    addPhotoPlaceholder(inspection.id, photoForm);
    setPhotoForm({ caption: "" });
  }

  function handlePassStage() {
    updateInspectionField(inspection.id, {
      releaseDecision: "Accepted",
    });
    router.push(
      `/portal/projects/${project.id}?completedStage=${inspection.stageKey}`,
    );
  }

  return (
    <>
      <PortalTopbar
        eyebrow={inspection.inspectionRequestNo}
        title={template?.stageLabel || inspection.stageKey}
        description={`${project.name} · ${inspection.area} · ${inspection.inspectionDate}`}
        actions={
          <>
            <StatusPill value={inspection.releaseDecision} />
            <Link
              href={`/portal/projects/${project.id}`}
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
            >
              Back to project
            </Link>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Inspection metadata
          </p>
          {template ? (
            <div className="mt-6 rounded-[1.5rem] bg-[#fcfaf7] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Stage brief
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {template.description}
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Hold point: {template.holdPoint}
              </p>
            </div>
          ) : null}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Inspector", "inspectorName"],
              ["Weather", "weather"],
              ["Drawing revision", "drawingRevision"],
              ["Area", "area"],
            ].map(([label, key]) => (
              <div key={label} className="rounded-2xl bg-[#f9f6f1] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {label}
                </p>
                <input
                  value={inspection[key]}
                  onChange={(event) =>
                    updateInspectionField(inspection.id, {
                      [key]: event.target.value,
                    })
                  }
                  className="mt-3 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium text-[#111827] outline-none"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[#fcfaf7] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Overall outcome
            </p>
            <textarea
              value={inspection.overallOutcome}
              onChange={(event) =>
                updateInspectionField(inspection.id, {
                  overallOutcome: event.target.value,
                })
              }
              className="mt-3 min-h-24 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm leading-6 text-gray-700 outline-none"
            />
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[#fcfaf7] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Summary notes
            </p>
            <textarea
              value={inspection.summaryNotes}
              onChange={(event) =>
                updateInspectionField(inspection.id, {
                  summaryNotes: event.target.value,
                })
              }
              className="mt-3 min-h-28 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm leading-6 text-gray-700 outline-none"
            />
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Checklist
          </p>
          <div className="mt-6 space-y-4">
            {inspection.items.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="rounded-[1.5rem] border border-black/10 bg-[#fcfaf7] p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-semibold text-[#111827]">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.acceptanceCriteria}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 md:min-w-[18rem]">
                    {itemStatusOptions.map((option) => {
                      const tone = itemStatusToneMap[option];
                      const active = item.status === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            updateInspectionItem(inspection.id, index, {
                              status: option,
                            })
                          }
                          className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                            active ? tone.active : tone.inactive
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <textarea
                  value={item.comments}
                  onChange={(event) =>
                    updateInspectionItem(inspection.id, index, {
                      comments: event.target.value,
                    })
                  }
                  className="mt-4 min-h-20 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm leading-6 text-gray-700 outline-none"
                  placeholder="Add inspection notes for this item"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#35589a]/10 bg-[#f4f8ff] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Stage release
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#111827]">
                  Decide what happens after this inspection
                </h3>
              </div>
              <StatusPill value={inspection.releaseDecision} />
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Primary outcome
              </p>
              <button
                type="button"
                onClick={handlePassStage}
                className={`mt-3 w-full rounded-2xl px-4 py-4 text-left text-sm font-semibold transition ${
                  inspection.releaseDecision === "Accepted"
                    ? "bg-[#111827] text-white"
                    : "bg-[#eaf8ef] text-[#2f7a4b]"
                }`}
              >
                Pass this stage and unlock the next one
              </button>
            </div>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Other outcomes
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {secondaryReleaseOptions.map((option) => {
                  const active = inspection.releaseDecision === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        updateInspectionField(inspection.id, {
                          releaseDecision: option,
                        })
                      }
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                        active
                          ? "border-[#111827] bg-[#111827] text-white"
                          : "border-black/10 bg-white text-[#111827]"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Corrective actions
          </p>
          <div className="mt-6 space-y-4">
            <form
              onSubmit={handleCorrectiveActionSubmit}
              className="rounded-[1.5rem] border border-dashed border-black/10 bg-[#fcfaf7] p-5"
            >
              <p className="text-sm font-medium text-[#111827]">
                Add corrective action
              </p>
              <div className="mt-4 grid gap-3">
                <input
                  value={actionForm.title}
                  onChange={(event) =>
                    setActionForm((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                  placeholder="Corrective action title"
                  className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                  required
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    value={actionForm.owner}
                    onChange={(event) =>
                      setActionForm((current) => ({
                        ...current,
                        owner: event.target.value,
                      }))
                    }
                    placeholder="Owner"
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                    required
                  />
                  <input
                    type="date"
                    value={actionForm.dueDate}
                    onChange={(event) =>
                      setActionForm((current) => ({
                        ...current,
                        dueDate: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c45734]"
              >
                Add action
              </button>
            </form>

            {inspection.correctiveActions.length ? (
              inspection.correctiveActions.map((action) => (
                <div
                  key={action.id}
                  className="rounded-[1.5rem] bg-[#f9f6f1] p-5"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <StatusPill value={action.status} />
                    <p className="text-sm text-gray-500">Due {action.dueDate}</p>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                    {action.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Owner: {action.owner}
                  </p>
                </div>
              ))
            ) : (
              <p className="rounded-2xl bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-600">
                No corrective actions logged on this draft yet.
              </p>
            )}
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Photo placeholders
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <form
              onSubmit={handlePhotoSubmit}
              className="rounded-[1.5rem] border border-dashed border-black/10 bg-[#fcfaf7] p-5 sm:col-span-2"
            >
              <p className="text-sm font-medium text-[#111827]">
                Add photo slot
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  value={photoForm.caption}
                  onChange={(event) =>
                    setPhotoForm({ caption: event.target.value })
                  }
                  placeholder="Photo caption"
                  className="flex-1 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#111827] outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c45734]"
                >
                  Add photo slot
                </button>
              </div>
            </form>

            {inspection.photos.length ? (
              inspection.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-[1.5rem] border border-dashed border-black/10 bg-[#fcfaf7] p-5"
                >
                  <div className="flex h-28 items-center justify-center rounded-2xl bg-[#f3ede5] text-sm font-medium text-gray-500">
                    Photo slot
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {photo.caption}
                  </p>
                </div>
              ))
            ) : (
              <p className="rounded-2xl bg-[#f9f6f1] p-4 text-sm leading-6 text-gray-600">
                Photo uploads are still placeholder-only in this phase.
              </p>
            )}
          </div>
        </article>
      </section>

      <div className="sticky bottom-3 z-20 mt-4">
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-black/10 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Current release decision
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <StatusPill value={inspection.releaseDecision} />
                <p className="text-sm leading-6 text-gray-600">
                  Finish the checklist, then use the pass action here when the
                  stage is ready to move forward.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handlePassStage}
              className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
            >
              Pass stage and return
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
