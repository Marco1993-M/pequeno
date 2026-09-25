import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Somerset West LSF Structure | Pequeño",
  description: "Pequeño supplied and installed the lightweight steel frame structure for a project in Somerset West. Explore three photographs of the installed frame and our scope.",
  alternates: { canonical: "/projects/somerset-west" },
  openGraph: {
    title: "Somerset West LSF Structure | Pequeño",
    description: "Lightweight steel frame structure supplied and installed by Pequeño in Somerset West.",
    url: "https://www.pequenohome.com/projects/somerset-west",
    images: [{ url: "/projects/Somerset_a.webp", alt: "LSF structure in Somerset West" }],
  },
};

export default function SomersetWestPage() {
  return <main className={styles.page}>
    <div className={styles.wrap}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/projects">Projects</Link><span aria-hidden="true">/</span><span>Somerset West</span></nav><header><p className={styles.eyebrow}>LSF structure / Supply & installation</p><h1>Somerset <em>West.</em></h1><p className={styles.lead}>A lightweight steel frame structure supplied and installed by Pequeño in the Western Cape.</p></header></div>
    <figure className={styles.hero}><Image src="/projects/Somerset_a.webp" alt="Wide view of Pequeño's installed LSF structure in Somerset West" fill priority sizes="100vw" /><figcaption>01 / Structure on site</figcaption></figure>
    <div className={styles.wrap}><section className={styles.facts}><div><span>Location</span><strong>Somerset West, Western Cape</strong></div><div><span>Pequeño scope</span><strong>LSF structure supply and installation</strong></div><div><span>Project stage shown</span><strong>Installed frame</strong></div></section><section className={styles.story}><span className={styles.eyebrow}>The work</span><div><h2>Structure as the<br /><em>starting point.</em></h2><p>These photographs show the lightweight steel frame that Pequeño supplied and installed. The roof trusses, wall frames and overall form are visible before the next construction trades enclose the building.</p><p>Our scope here was the LSF structure. The building envelope, fit-out and completed home were outside Pequeño’s work on this project.</p></div></section></div>
    <section className={styles.details} aria-label="Structure photographs"><figure><Image src="/projects/Somerset_b.webp" alt="Close view through LSF roof trusses at the Somerset West project" fill sizes="(max-width: 700px) 100vw, 45vw" /><figcaption>02 / Roof framing</figcaption></figure><figure><Image src="/projects/Somerset_c.webp" alt="Angle showing the installed roof and wall framing in Somerset West" fill sizes="(max-width: 700px) 100vw, 55vw" /><figcaption>03 / Frame from another angle</figcaption></figure></section>
    <section className={styles.cta}><p className={styles.eyebrow}>Planning your own project?</p><h2>Let’s define<br /><em>the right scope.</em></h2><Link href="/onboarding">Discuss your project <span aria-hidden="true">↗</span></Link><Link href="/projects" className={styles.back}>See all projects</Link></section>
  </main>;
}
