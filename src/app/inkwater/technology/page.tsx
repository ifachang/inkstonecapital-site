import type { Metadata } from "next";

const layers = [
  {
    title: "Ambient signal layer",
    body: "Last-Meter Positioning starts from the signals already present in a venue, rather than assuming a new dedicated positioning network must be installed first.",
  },
  {
    title: "Endpoint sensing layer",
    body: "Phones, wearables, robots and other endpoint devices can contribute motion and sensor context that helps interpret how location changes inside complex spaces.",
  },
  {
    title: "Spatial association layer",
    body: "Positioning observations are associated with a venue's spatial structure, including entrances, corridors, vertical transitions, parking areas and floor-level context.",
  },
  {
    title: "X/Y/Z inference layer",
    body: "The system is designed to reason beyond horizontal coordinates, because identifying the correct floor or vertical level is often essential in real-world navigation.",
  },
  {
    title: "Optimization layer",
    body: "As real-world observations accumulate, the positioning model can refine error patterns, reduce drift and improve its understanding of each environment over time.",
  },
];

const principles = [
  "Do not require every venue to install beacons.",
  "Do not depend on GPS in environments where satellite signals cannot reliably reach.",
  "Reduce recurring manual fingerprint collection and calibration.",
  "Support people, vehicles, robots and machines with one positioning concept.",
  "Preserve enough architectural flexibility for edge, cloud and hybrid deployments.",
];

export const metadata: Metadata = {
  title: "Technology | Inkwater Last-Meter Positioning",
  description:
    "A deeper technical overview of Inkwater Last-Meter Positioning, including ambient signals, sensor fusion, X/Y/Z awareness and self-optimizing GPS-denied positioning.",
  alternates: {
    canonical: "/inkwater/technology/",
  },
  openGraph: {
    title: "Technology | Inkwater Last-Meter Positioning",
    description:
      "Ambient signals, sensor fusion, X/Y/Z awareness and self-optimizing GPS-denied positioning.",
    images: ["/inkwater/positioning-architecture.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology | Inkwater Last-Meter Positioning",
    description:
      "A deeper technical view of infrastructure-free GPS-denied positioning.",
    images: ["/inkwater/positioning-architecture.jpg"],
  },
};

export default function InkwaterTechnologyPage() {
  return (
    <main className="inkwater-page">
      <section className="inkwater-subhero">
        <nav className="inkwater-nav" aria-label="Inkwater navigation">
          <a className="inkwater-brand" href="/inkwater/" aria-label="Inkwater overview">
            <span className="inkwater-brand-mark">IW</span>
            <span>
              <strong>Inkwater</strong>
              <small>Technology</small>
            </span>
          </a>
          <div className="inkwater-nav-links">
            <a href="/inkwater/">Overview</a>
            <a href="/inkwater/platform/">Platform</a>
            <a href="/inkwater/applications/">Applications</a>
            <a href="/inkwater/deployments/">Deployments</a>
            <a className="inkwater-nav-cta" href="/inkwater/partners/">Partners</a>
          </div>
        </nav>
        <div className="inkwater-subhero-inner">
          <p className="inkwater-eyebrow">Technical Deep Dive</p>
          <h1>Infrastructure-free positioning for GPS-denied environments.</h1>
          <p>
            Inkwater Last-Meter Positioning is designed around a simple
            strategic premise: the next positioning layer should extend from
            outdoor GPS into indoor and obstructed environments without asking
            every venue to rebuild itself as a positioning network.
          </p>
        </div>
      </section>

      <section className="inkwater-section inkwater-detail-lede">
        <div>
          <p className="inkwater-eyebrow">Core Thesis</p>
          <h2>Accuracy matters, but deployment architecture decides whether the market can scale.</h2>
        </div>
        <p>
          Many indoor-positioning approaches have been technically interesting
          but operationally heavy. Inkwater&apos;s direction is to build a
          positioning layer that can use existing environmental signals,
          endpoint sensing and continuous optimization to reduce installation
          friction and long-term maintenance burden.
        </p>
      </section>

      <section className="inkwater-section inkwater-layer-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Architecture Layers</p>
          <h2>From ambient signals to self-optimizing spatial awareness.</h2>
        </div>
        <figure className="inkwater-feature-image">
          <img
            src="/inkwater/positioning-architecture.jpg"
            alt="Layered indoor positioning architecture with X/Y/Z spatial inference"
          />
        </figure>
        <div className="inkwater-layer-grid">
          {layers.map((layer, index) => (
            <article key={layer.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{layer.title}</h3>
              <p>{layer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-principle-section">
        <div>
          <p className="inkwater-eyebrow">Design Principles</p>
          <h2>No GPS. No Beacon. No New Infrastructure.</h2>
        </div>
        <div className="inkwater-principle-list">
          {principles.map((principle) => (
            <p key={principle}>{principle}</p>
          ))}
        </div>
      </section>

      <section className="inkwater-contact-section">
        <div>
          <p className="inkwater-eyebrow">Technical Discussion</p>
          <h2>Request a deeper technical conversation.</h2>
          <p>
            Inkwater is open to strategic and technical discussions with mapping,
            robotics, venue, mobility, infrastructure and safety partners.
          </p>
        </div>
        <a className="inkwater-primary-button light" href="mailto:corp@inkstonecapital.com">
          corp@inkstonecapital.com
        </a>
      </section>
    </main>
  );
}
