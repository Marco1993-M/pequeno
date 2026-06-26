import KeywordLandingPage, {
  getKeywordMetadata,
} from "@/components/KeywordLandingPage";
import { getKeywordLandingPage } from "@/data/keywordLandingPages";

const page = getKeywordLandingPage("modular-homes-prices-south-africa");

export const metadata = getKeywordMetadata(page);

export default function ModularHomesPricesSouthAfricaPage() {
  return <KeywordLandingPage slug="modular-homes-prices-south-africa" />;
}
