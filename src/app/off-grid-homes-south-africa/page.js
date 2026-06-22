import KeywordLandingPage, {
  getKeywordMetadata,
} from "@/components/KeywordLandingPage";
import { getKeywordLandingPage } from "@/data/keywordLandingPages";

const page = getKeywordLandingPage("off-grid-homes-south-africa");

export const metadata = getKeywordMetadata(page);

export default function OffGridHomesSouthAfricaPage() {
  return <KeywordLandingPage slug="off-grid-homes-south-africa" />;
}
