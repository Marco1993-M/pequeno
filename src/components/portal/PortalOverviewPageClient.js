"use client";

import Link from "next/link";

import PortalTopbar from "@/components/portal/PortalTopbar";
import StatusPill from "@/components/portal/StatusPill";
import { usePortal } from "@/components/portal/PortalProvider";

export default function PortalOverviewPageClient() {
  const { getPortalStats, inspectionTemplates, inspections, projects } =
    usePortal();
  const stats = getPortalStats();
  const recentInspections = inspections.slice(0, 2);

  return (
    <>
      <PortalTopbar
        eyebrow="Portal MVP"
        title="Project operations, stage inspections, and files in one place"
        description="This first pass is built inside the Pequeno codebase as a portable MVP. It can already evolve into a real ops system before we wire in Supabase."
        actions={
          <>
            <Link
              href="/portal/projects"
              className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
            >
              View projects
            </Link>
            <Link
              href="/portal/login"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#c45734] hover:text-[#c45734]"
            >
              Access portal
            </Link>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Projects", value: stats.projects },
          { label: "Active projects", value: stats.activeProjects },
          { label: "Inspection records", value: stats.inspections },
          { label: "Open corrective items", value: stats.openCorrectiveActions },
        ].map((stat) => (
          <article
            key={stat.label}
            className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="mt-4 text-4xl font-semibold text-[#111827]">
              {stat.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
                Projects
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
                Current project board
              </h2>
            </div>
            <Link
              href="/portal/projects"
              className="text-sm font-medium text-[#c45734] hover:underline"
            >
              Open all projects →
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portal/projects/${project.id}`}
                className="block rounded-[1.5rem] bg-[#f9f6f1] p-5 transition hover:bg-[#f4ede4]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                      {project.projectNumber}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[#111827]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {project.address} · {project.clientName}
                    </p>
                  </div>
                  <StatusPill value={project.status} />
                </div>
              </Link>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
            Inspections
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
            Latest inspection activity
          </h2>

          <div className="mt-6 space-y-4">
            {recentInspections.map((inspection) => (
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
                <h3 className="mt-4 text-lg font-semibold text-[#111827]">
                  {inspection.stageKey === "predrywall"
                    ? "Pre-drywall inspection"
                    : inspection.stageKey === "framing"
                      ? "Framing inspection"
                      : inspection.stageKey}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {inspection.area} · {inspection.inspectionDate}
                </p>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c45734]">
              Checklists
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
              Stage library for site inspections
            </h2>
          </div>
          <Link
            href="/portal/checklists"
            className="text-sm font-medium text-[#c45734] hover:underline"
          >
            Open all checklists →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {inspectionTemplates.slice(0, 3).map((template) => (
            <Link
              key={template.stageKey}
              href={`/portal/checklists/${template.stageKey}`}
              className="block rounded-[1.5rem] bg-[#f9f6f1] p-5 transition hover:bg-[#f4ede4]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                {template.items.length} checklist items
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#111827]">
                {template.stageLabel}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {template.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
