"use client";

import Link from "next/link";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

export default function ProjectsPageClient() {
  const { projects, getFilesByProjectId, getInspectionsByProjectId } = usePortal();

  return (
    <>
      <PortalTopbar
        eyebrow="Projects"
        title="Projects ready for inspections, files, and close-out records"
        description="This page is the operational entry point. Each project becomes the container for inspections, corrective actions, safety file records, and later PDF exports."
        actions={
          <Link
            href="/portal/projects/new"
            className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
          >
            New project
          </Link>
        }
      />

      <section className="grid gap-4">
        {projects.map((project) => {
          const inspections = getInspectionsByProjectId(project.id);
          const files = getFilesByProjectId(project.id);
          const openCorrections = inspections.reduce(
            (count, inspection) =>
              count +
              inspection.correctiveActions.filter((item) => item.status !== "Closed").length,
            0,
          );

          return (
            <Link
              key={project.id}
              href={`/portal/projects/${project.id}`}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.22em] text-gray-500">
                      {project.projectNumber}
                    </span>
                    <StatusPill value={project.status} />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-[#111827] md:text-3xl">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {project.address} · {project.clientName} · {project.projectType}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[360px]">
                  {[
                    { label: "Inspections", value: inspections.length },
                    { label: "Open corrections", value: openCorrections },
                    { label: "Files", value: files.length },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-[#f8f4ef] p-4 text-center"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-[#111827]">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
