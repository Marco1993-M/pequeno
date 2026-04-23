import Image from "next/image";
import Link from "next/link";

import { projectList } from "@/data/projects";

export default function ProjectProofGrid({ limit, compact = false }) {
  const projects = typeof limit === "number" ? projectList.slice(0, limit) : projectList;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.key}
          className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.featuredImage}
              alt={`${project.name} project in ${project.location}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
              {project.location}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">
              {project.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="rounded-full bg-[#f7f2ec] px-4 py-2">
                {project.projectType}
              </span>
              <span className="rounded-full bg-[#f7f2ec] px-4 py-2">
                {project.size}
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-gray-600">
              {compact ? project.trustLine : project.summary}
            </p>
            {project.bestForLocations.length > 0 ? (
              <Link
                href={`/${project.bestForLocations[0]}`}
                className="mt-6 inline-block text-sm font-medium text-[#ff5c36] hover:underline"
              >
                View related location →
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
