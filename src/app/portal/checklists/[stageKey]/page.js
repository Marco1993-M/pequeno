import ChecklistStagePageClient from "@/components/portal/ChecklistStagePageClient";

export default async function ChecklistStagePage({ params }) {
  const { stageKey } = await params;

  return <ChecklistStagePageClient stageKey={stageKey} />;
}
