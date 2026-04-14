import { notFound } from "next/navigation";

import LocationLandingPage from "@/components/LocationLandingPage";
import {
  getLocationMetadata,
  getLocationPage,
  locationPageList,
} from "@/data/locationPages";

export function generateStaticParams() {
  return locationPageList.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    return {};
  }

  return getLocationMetadata(location);
}

export default async function DynamicLocationPage({ params }) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    notFound();
  }

  return <LocationLandingPage location={location} />;
}
