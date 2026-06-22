import KeywordLandingPage, {
  getKeywordMetadata,
} from "@/components/KeywordLandingPage";
import { getKeywordLandingPage } from "@/data/keywordLandingPages";

const page = getKeywordLandingPage("luxury-cabins-south-africa");

export const metadata = getKeywordMetadata(page);

export default function LuxuryCabinsSouthAfricaPage() {
  return <KeywordLandingPage slug="luxury-cabins-south-africa" />;
}
