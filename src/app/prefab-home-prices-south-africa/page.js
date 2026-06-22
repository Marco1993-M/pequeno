import KeywordLandingPage, {
  getKeywordMetadata,
} from "@/components/KeywordLandingPage";
import { getKeywordLandingPage } from "@/data/keywordLandingPages";

const page = getKeywordLandingPage("prefab-home-prices-south-africa");

export const metadata = getKeywordMetadata(page);

export default function PrefabHomePricesSouthAfricaPage() {
  return <KeywordLandingPage slug="prefab-home-prices-south-africa" />;
}
