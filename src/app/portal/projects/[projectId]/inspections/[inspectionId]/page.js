import InspectionDetailPageClient from "@/components/portal/InspectionDetailPageClient";

export default async function InspectionDetailPage({ params }) {
  const { projectId, inspectionId } = await params;

  return (
    <InspectionDetailPageClient
      projectId={projectId}
      inspectionId={inspectionId}
    />
  );
}
