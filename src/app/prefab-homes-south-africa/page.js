import KeywordLandingPage, {
  getKeywordMetadata,
} from "@/components/KeywordLandingPage";
import { getKeywordLandingPage } from "@/data/keywordLandingPages";

const page = getKeywordLandingPage("prefab-homes-south-africa");

export const metadata = getKeywordMetadata(page);

export default function PrefabHomesSouthAfricaPage() {
  return <KeywordLandingPage slug="prefab-homes-south-africa" />;
}
