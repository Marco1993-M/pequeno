import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const photos = {
  finished: "/projects/Coffee_spa_1.JPG",
  frame: "/projects/Coffee_spa_3.jpg",
  enclosure: "/projects/Coffee_spa_4.jpg",
  detail: "/projects/Coffee_spa_2.jpg",
  craft: "/projects/Coffee_spa_5.jpg",
};

export const metadata = {
  title: "Coffee & Spa | Rayton Project | Pequeño",
  description:
    "Explore Coffee & Spa, a 200 m² commercial project delivered turnkey by Pequeño in Rayton in 2024. See the completed building and the work behind it.",
  alternates: { canonical: "/projects/coffee-spa" },
  openGraph: {
    title: "Coffee & Spa | Rayton Project | Pequeño",
    description:
      "A 200 m² turnkey commercial project delivered by Pequeño in Rayton in 2024.",
    url: "https://www.pequenohome.com/projects/coffee-spa",
    images: [{ url: photos.finished, alt: "Completed Coffee & Spa project in Rayton" }],
  },
};

function Photo({ src, alt, className = "", sizes, priority = false }) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </figure>
  );
}

export default function CoffeeSpaPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Coffee & Spa",
    description: "A 200 m² commercial project delivered turnkey by Pequeño in Rayton in 2024.",
    image: `https://www.pequenohome.com${photos.finished}`,
    dateCreated: "2024",
    creator: { "@type": "Organization", name: "Pequeño" },
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/projects">Projects</Link><span aria-hidden="true">/</span><span>Coffee & Spa</span>
        </nav>
        <header className={styles.header}>
          <div><p className={styles.label}>Selected work <span>01 / 2024</span></p><h1>Coffee <em>&</em> Spa</h1></div>
          <p>A place to pause, gather, and experience the landscape. A commercial building delivered turnkey by Pequeño in Rayton.</p>
        </header>
      </div>

      <section className={styles.hero} aria-label="Completed Coffee and Spa building">
        <Photo src={photos.finished} alt="Completed Coffee & Spa building with a glazed gable and outdoor timber terrace" className={styles.heroPhoto} sizes="100vw" priority />
        <div className={styles.heroCaption}><span>01 / The completed building</span><span>Rayton, Gauteng</span></div>
      </section>

      <div className={styles.wrap}>
        <section className={styles.facts} aria-label="Project facts">
          <div><span>Location</span><strong>Rayton, Gauteng</strong></div>
          <div><span>Project</span><strong>Commercial · Coffee & Spa</strong></div>
          <div><span>Area</span><strong>200 m²</strong></div>
          <div><span>Completed</span><strong>2024</strong></div>
          <div><span>Pequeño scope</span><strong>Turnkey delivery</strong></div>
        </section>

        <section className={styles.story}>
          <div className={styles.sectionNumber}>01 / The place</div>
          <div><h2>Made for <em>connection.</em></h2><p>The finished building brings a café and spa setting together beneath one strong roofline. The glazed gable opens the interior to the landscape, while the timber terrace creates an inviting space to spend time outdoors.</p><p>Together, these elements make the building feel open and welcoming, while giving the café and spa a shared architectural identity.</p></div>
        </section>

        <section className={styles.collage} aria-label="Project imagery">
          <div className={styles.collageMain}>
            <Photo src={photos.finished} alt="Outdoor terrace and glazed entrance of the completed Coffee & Spa building" className={styles.terracePhoto} sizes="(max-width: 700px) 100vw, 60vw" />
            <p className={styles.caption}>A shaded outdoor room extends the building into its setting.</p>
          </div>
          <div className={styles.collageSide}>
            <Photo src={photos.detail} alt="Timber sheathing and lightweight steel framing detail during the Coffee & Spa build" className={styles.detailPhoto} sizes="(max-width: 700px) 75vw, 28vw" />
            <p className={styles.caption}>02 / Detail in the making</p>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.sectionNumber}>02 / How it came together</div>
          <div><h2>From frame<br />to <em>finished place.</em></h2><p>Pequeño delivered the project turnkey. These construction photographs trace the lightweight steel structure and the layers that enclosed it before the finished building took shape.</p></div>
        </section>
      </div>

      <section className={styles.process} aria-label="Construction sequence">
        <div className={styles.processItem}><Photo src={photos.frame} alt="Lightweight steel frame of Coffee & Spa standing on site" className={styles.processPhoto} sizes="(max-width: 700px) 85vw, 50vw" /><div><span>01 / Structure</span><p>The steel frame defines the building’s pitched form and interior volume.</p></div></div>
        <div className={styles.processItem}><Photo src={photos.enclosure} alt="Coffee & Spa structure during external sheathing and enclosure work" className={styles.processPhoto} sizes="(max-width: 700px) 85vw, 50vw" /><div><span>02 / Enclosure</span><p>The building envelope takes shape around the structure.</p></div></div>
        <div className={styles.processItem}><Photo src={photos.craft} alt="Installer working on a wall detail at the Coffee & Spa project" className={styles.processPhoto} sizes="(max-width: 700px) 85vw, 50vw" /><div><span>03 / Craft</span><p>The less visible work matters to the completed result.</p></div></div>
      </section>

      <section className={styles.finish}>
        <div className={styles.wrap}><span className={styles.sectionNumber}>03 / The result</span><h2>A building with a<br /><em>life beyond its walls.</em></h2><p>The terrace, glazed frontage, and compact form create a place that feels part of the landscape and ready to welcome people in.</p><Link href="/projects" className={styles.textLink}>Explore more work <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className={styles.cta}><span>Have a place in mind?</span><h2>Let’s talk about<br /><em>what it could become.</em></h2><Link href="/onboarding">Discuss your project <span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}
