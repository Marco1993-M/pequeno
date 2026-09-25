import ProjectDetailPageClient from "@/components/portal/ProjectDetailPageClient";

export default async function PortalProjectDetailPage({ params }) {
  const { projectId } = await params;

  return <ProjectDetailPageClient projectId={projectId} />;
}
