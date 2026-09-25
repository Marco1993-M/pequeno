import NewInspectionPageClient from "@/components/portal/NewInspectionPageClient";

export default async function NewInspectionPage({ params }) {
  const { projectId } = await params;

  return <NewInspectionPageClient projectId={projectId} />;
}
