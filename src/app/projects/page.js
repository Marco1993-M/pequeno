import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Selected Projects | Pequeño South Africa",
  description:
    "Explore Pequeño’s project experience: turnkey delivery of Coffee & Spa in Rayton, LSF structure supply and installation in Somerset West, and staff accommodation in Hoedspruit.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Selected Projects | Pequeño South Africa",
    description: "A closer look at completed work and Pequeño’s role in each project.",
    url: "https://www.pequenohome.com/projects",
    images: [{ url: "/projects/Coffee_spa_1.JPG", alt: "Coffee & Spa project in Rayton" }],
  },
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Pequeño / Selected work</p>
          <h1>Built work.<br /><em>Real experience.</em></h1>
          <div className={styles.headerBottom}><p>Every project begins with a different brief and a different scope. Here is what we built, where we worked, and what Pequeño delivered.</p><span>01 — 03 / South Africa</span></div>
        </div>
      </header>

      <section className={styles.feature} aria-labelledby="coffee-title">
        <div className={styles.featureImage}><Image src="/projects/Coffee_spa_1.JPG" alt="Completed Coffee & Spa building and outdoor terrace in Rayton" fill priority sizes="100vw" /><span>01 / Completed project</span></div>
        <div className={`${styles.wrap} ${styles.featureText}`}><div><p className={styles.eyebrow}>Rayton, Gauteng · 2024</p><h2 id="coffee-title">Coffee <em>&</em> Spa</h2></div><div><p>A 200 m² commercial building delivered turnkey by Pequeño. The finished space brings a glazed gable, pitched roof and timber terrace together in one welcoming setting.</p><Link href="/projects/coffee-spa" className={styles.textLink}>Explore the project <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className={styles.somerset} aria-labelledby="somerset-title">
        <div className={styles.wrap}><div className={styles.sectionHead}><p className={styles.eyebrow}>02 / Structure in focus</p><h2 id="somerset-title">Somerset <em>West.</em></h2><p>LSF structure supplied and installed by Pequeño. The photographs show the structure during our part of the project; other building works and the completed home were outside our scope.</p></div></div>
        <div className={styles.somersetImages} aria-label="Somerset West structure photographs">
          <figure className={styles.somersetWide}><Image src="/projects/Somerset_a.webp" alt="Wide view of the lightweight steel frame structure at Somerset West" fill sizes="(max-width: 700px) 100vw, 55vw" /><figcaption>01 / Structure on site</figcaption></figure>
          <figure className={styles.somersetDetail}><Image src="/projects/Somerset_b.webp" alt="Close view looking through the lightweight steel roof framing at Somerset West" fill sizes="(max-width: 700px) 100vw, 30vw" /><figcaption>02 / Roof geometry</figcaption></figure>
          <figure className={styles.somersetEnd}><Image src="/projects/Somerset_c.webp" alt="Another view of the installed lightweight steel frame structure at Somerset West" fill sizes="(max-width: 700px) 100vw, 45vw" /><figcaption>03 / The installed frame</figcaption></figure>
        </div>
        <div className={styles.wrap}><Link href="/projects/somerset-west" className={styles.textLink}>See the Somerset West project <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className={`${styles.wrap} ${styles.hoedspruit}`} aria-labelledby="hoedspruit-title"><div className={styles.hoedText}><p className={styles.eyebrow}>03 / Residential scale</p><h2 id="hoedspruit-title">Building in <em>Hoedspruit.</em></h2><p>A 950 m² staff accommodation project in the bushveld. It shows our experience working with lightweight steel framing at a larger residential scale.</p><p className={styles.scope}>Staff accommodation · Hoedspruit, Limpopo</p></div><figure><Image src="/projects/hoedspruit_4.jpg" alt="Exterior roof and cladding detail at the Hoedspruit staff accommodation project" fill sizes="(max-width: 700px) 100vw, 55vw" /><figcaption>03 / Built work in Hoedspruit</figcaption></figure></section>

      <section className={styles.cta}><p className={styles.eyebrow}>Your project begins here</p><h2>What could we<br /><em>build together?</em></h2><p>Tell us about your location, brief and intended scope. We’ll help you find the right next step.</p><Link href="/onboarding">Discuss your project <span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}
