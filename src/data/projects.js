function inferProjectSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function createProject({
  key,
  name,
  slug,
  location,
  region,
  projectType,
  size,
  summary,
  highlights,
  trustLine,
  gallery,
  featuredImage,
  bestForLocations = [],
}) {
  return [
    key,
    {
      key,
      name,
      slug: slug || inferProjectSlug(name),
      location,
      region,
      projectType,
      size,
      summary,
      highlights,
      trustLine,
      gallery,
      featuredImage: featuredImage || gallery[0],
      bestForLocations,
    },
  ];
}

export const projects = Object.fromEntries([
  createProject({
    key: "coffee-spa",
    name: "Coffee & Spa",
    location: "Rayton, Gauteng",
    region: "Rayton",
    projectType: "Double-storey commercial structure",
    size: "200 sqm",
    summary:
      "Coffee & Spa is a 200 sqm commercial project delivered turnkey by Pequeño in Rayton in 2024. The completed building brings together a glazed gable, a pitched roof and an outdoor timber terrace. Project images show its lightweight steel structure and enclosure during construction.",
    highlights: [
      "200 sqm commercial project in Rayton",
      "Delivered turnkey by Pequeño in 2024",
      "Lightweight steel structure and construction process documented",
    ],
    trustLine:
      "A completed commercial project delivered turnkey by Pequeño in Rayton in 2024.",
    gallery: [
      "/projects/Coffee_spa_1.JPG",
      "/projects/Coffee_spa_2.jpg",
      "/projects/Coffee_spa_3.jpg",
      "/projects/Coffee_spa_4.jpg",
      "/projects/Coffee_spa_5.jpg",
    ],
    bestForLocations: ["build-in-pretoria"],
  }),
  createProject({
    key: "somerset-west",
    name: "Somerset West LSF Structure",
    location: "Somerset West, Western Cape",
    region: "Somerset West",
    projectType: "LSF structure supply and installation",
    size: "Structure scope only",
    summary:
      "Pequeño supplied and installed the lightweight steel frame structure in Somerset West. The building envelope, fit-out and completed home were outside our scope.",
    highlights: [
      "LSF structure supplied and installed by Pequeño",
      "Roof trusses and wall frames shown during construction",
      "Other building works were outside Pequeño's scope",
    ],
    trustLine:
      "A documented LSF structure supply and installation project in Somerset West.",
    gallery: [
      "/projects/Somerset_a.webp",
      "/projects/Somerset_b.webp",
      "/projects/Somerset_c.webp",
    ],
  }),
  createProject({
    key: "staff-compound",
    name: "Staff Compound",
    location: "Hoedspruit",
    region: "the Hoedspruit bushveld",
    projectType: "Residential project for staff housing",
    size: "950 sqm",
    summary:
      "Staff Compound was developed in Hoedspruit as a substantial residential staff-housing project shaped around durability, efficiency, and everyday livability in a demanding bushveld setting. The brief called for accommodation that could be delivered at scale without losing order, comfort, or long-term practicality. Lightweight steel framing was a strong fit because it supported a cleaner construction process, repeatable quality across a larger footprint, and a robust structure suited to warm conditions and hard-working daily use. The result is a 950 sqm housing project that shows how LSF can perform not only in custom homes, but also in larger residential programmes where consistency and durability matter.",
    highlights: [
      "950 sqm residential staff-housing project",
      "Lightweight steel framing used for repeatable quality at scale",
      "Planned for durability and practical day-to-day use in Hoedspruit",
      "A strong fit for larger residential accommodation programmes",
    ],
    trustLine:
      "A strong example of lightweight steel framing working well for large-format residential accommodation in warm bushveld conditions, where consistency, speed, and durability all matter.",
    gallery: [
      "/projects/hoedspruit_2.jpg",
      "/projects/hoedspruit_3.jpg",
      "/projects/hoedspruit_4.jpg",
      "/projects/hoedspruit_5.jpg",
      "/projects/hoedspruit_6.jpg",
      "/projects/hoedspruit_7.jpg",
    ],
    bestForLocations: ["build-in-hoedspruit"],
  }),
]);

export const projectList = Object.values(projects);

export function getProjectByKey(key) {
  return projects[key] || null;
}
