"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PortalTopbar from "@/components/portal/PortalTopbar";
import { usePortal } from "@/components/portal/PortalProvider";

const initialForm = {
  name: "",
  projectNumber: "",
  address: "",
  clientName: "",
  projectType: "",
  siteManager: "",
  status: "Pre-construction",
};

export default function NewProjectPageClient() {
  const router = useRouter();
  const { addProject } = usePortal();
  const [form, setForm] = useState(initialForm);

  function updateField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const project = addProject(form);
    router.push(`/portal/projects/${project.id}?created=1`);
  }

  return (
    <>
      <PortalTopbar
        eyebrow="New project"
        title="Set up a new project"
        description="Create the base project record first, then move straight into stage inspections, project files, and close-out records."
      />

      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Project name", "name"],
            ["Project number", "projectNumber"],
            ["Site address", "address"],
            ["Client name", "clientName"],
            ["Project type", "projectType"],
            ["Site manager", "siteManager"],
          ].map(([label, key]) => (
            <label key={key} className="block">
              <span className="text-sm font-medium text-gray-700">{label}</span>
              <input
                value={form[key]}
                onChange={(event) => updateField(key, event.target.value)}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#111827] outline-none"
                required
              />
            </label>
          ))}

          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-gray-700">Project status</span>
            <select
              value={form.status}
              onChange={(event) => updateField("status", event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#faf7f3] px-4 py-3 text-sm text-[#111827] outline-none"
            >
              <option>Pre-construction</option>
              <option>Construction</option>
              <option>Finishing</option>
              <option>Completed</option>
            </select>
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c45734]"
          >
            Create project
          </button>
          <Link
            href="/portal/projects"
            className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
