import KeywordLandingPage, {
  getKeywordMetadata,
} from "@/components/KeywordLandingPage";
import { getKeywordLandingPage } from "@/data/keywordLandingPages";

const page = getKeywordLandingPage("modular-homes-south-africa");

export const metadata = getKeywordMetadata(page);

export default function ModularHomesSouthAfricaPage() {
  return <KeywordLandingPage slug="modular-homes-south-africa" />;
}
