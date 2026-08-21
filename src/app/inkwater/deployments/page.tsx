import type { Metadata } from "next";

const deploymentCards = [
  {
    location: "Singapore Changi Airport",
    context: "A global aviation hub with terminals, transit flows, parking, retail and multi-level passenger movement.",
    proof: "Demonstrates relevance in high-density, multi-zone environments where outdoor GPS cannot carry the full journey.",
  },
  {
    location: "Tokyo Station",
    context: "One of the world's most complex rail environments, with dense flows, underground passages and vertical transitions.",
    proof: "Highlights the need for floor-level and path-aware positioning in stations where a wrong level can be as disruptive as a wrong coordinate.",
  },
  {
    location: "Major commercial complexes in China",
    context: "Large retail and mixed-use venues where indoor navigation, parking guidance and venue operations require practical spatial awareness.",
    proof: "Shows the commercial potential of a positioning layer that can scale across complex buildings without a heavy beacon-first model.",
  },
];

const proofThemes = [
  "High-density pedestrian movement",
  "Indoor and underground signal obstruction",
  "Multi-level X/Y/Z spatial context",
  "Parking-to-building continuity",
  "Venue-scale operations",
  "Real-world optimization loops",
];

const deploymentVideos = [
  {
    location: "Beijing MixC / Beijing Wanxianghui",
    context:
      "Reference videos for a major commercial complex environment, available in Traditional Chinese, Simplified Chinese, Japanese and English.",
    links: [
      { label: "繁中", href: "https://youtu.be/G0X47Q_Aa-4" },
      { label: "简中", href: "https://youtu.be/eAqNuPJ3ggY" },
      { label: "日本語", href: "https://youtu.be/FmsvyjvBRoY" },
      { label: "English", href: "https://youtu.be/EkkEl45uaCY" },
    ],
  },
  {
    location: "Tokyo Station",
    context:
      "Reference videos for a complex, high-density transit environment, available in Traditional Chinese, Simplified Chinese, Japanese and English.",
    links: [
      { label: "繁中", href: "https://youtu.be/YZbQF9u7YPo" },
      { label: "简中", href: "https://youtu.be/7dULHcqBpWw" },
      { label: "日本語", href: "https://youtu.be/RzASQt8axDo" },
      { label: "English", href: "https://youtu.be/Z03W1U0KAKc" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Deployments | Inkwater Last-Meter Positioning",
  description:
    "Deployment proof points and multilingual video references for Inkwater Last-Meter Positioning, including Singapore Changi Airport, Tokyo Station and major commercial complexes in China.",
  alternates: {
    canonical: "/inkwater/deployments/",
  },
  openGraph: {
    title: "Deployments | Inkwater Last-Meter Positioning",
    description:
      "Deployment proof points across complex, high-density GPS-denied environments.",
    images: ["/inkwater/last-meter-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deployments | Inkwater Last-Meter Positioning",
    description:
      "Proof in complex environments including Changi Airport, Tokyo Station and major commercial complexes in China.",
    images: ["/inkwater/last-meter-hero.jpg"],
  },
};

export default function InkwaterDeploymentsPage() {
  return (
    <main className="inkwater-page">
      <section className="inkwater-subhero">
        <nav className="inkwater-nav" aria-label="Inkwater navigation">
          <a className="inkwater-brand" href="/inkwater/" aria-label="Inkwater overview">
            <span className="inkwater-brand-mark">IW</span>
            <span>
              <strong>Inkwater</strong>
              <small>Deployments</small>
            </span>
          </a>
          <div className="inkwater-nav-links">
            <a href="/inkwater/">Overview</a>
            <a href="/inkwater/platform/">Platform</a>
            <a href="/inkwater/technology/">Technology</a>
            <a href="/inkwater/applications/">Applications</a>
            <a className="inkwater-nav-cta" href="/inkwater/partners/">Partners</a>
          </div>
        </nav>
        <div className="inkwater-subhero-inner">
          <p className="inkwater-eyebrow">Deployment Proof</p>
          <h1>Proof in complex, high-density environments.</h1>
          <p>
            The underlying technology associated with Inkwater&apos;s
            Last-Meter Positioning thesis has been deployed in environments
            where density, vertical structure and signal obstruction make
            positioning difficult.
          </p>
        </div>
      </section>

      <section className="inkwater-section inkwater-deployment-detail-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Known Environments</p>
          <h2>Airports, stations and commercial complexes create the right test conditions.</h2>
        </div>
        <figure className="inkwater-feature-image">
          <img
            src="/inkwater/last-meter-hero.jpg"
            alt="Large GPS-denied indoor transit environment with positioning paths"
          />
        </figure>
        <div className="inkwater-deployment-detail-grid">
          {deploymentCards.map((card) => (
            <article key={card.location}>
              <span>{card.location}</span>
              <h3>{card.context}</h3>
              <p>{card.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-proof-theme-section">
        <div>
          <p className="inkwater-eyebrow">What These Sites Prove</p>
          <h2>Last-meter positioning must survive the messy parts of the real world.</h2>
          <p>
            These environments matter because they combine the conditions that
            usually break simple location systems: dense movement, obstructed
            signals, multi-level paths and operational pressure.
          </p>
        </div>
        <div className="inkwater-proof-theme-list">
          {proofThemes.map((theme) => (
            <p key={theme}>{theme}</p>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-video-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Video References</p>
          <h2>Multilingual videos for buyer evaluation.</h2>
          <p>
            Potential buyers and strategic partners can review selected
            deployment reference videos in the language most relevant to their
            decision team.
          </p>
        </div>
        <div className="inkwater-video-grid">
          {deploymentVideos.map((group) => (
            <article key={group.location}>
              <h3>{group.location}</h3>
              <p>{group.context}</p>
              <div className="inkwater-video-links">
                {group.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-scale-section">
        <p className="inkwater-eyebrow">From Proof to Scale</p>
        <h2>Deployment proof supports a broader Spatial Intelligence platform.</h2>
        <p>
          Inkwater&apos;s commercialization path is to translate complex-site
          deployment knowledge into repeatable partnership models for operators,
          platforms and intelligent machines that need positioning continuity
          beyond GPS.
        </p>
      </section>

      <section className="inkwater-contact-section">
        <div>
          <p className="inkwater-eyebrow">Deployment Discussion</p>
          <h2>Evaluate a GPS-denied environment with Inkwater.</h2>
          <p>
            Contact the Inkwater team for venue, infrastructure, robotics,
            mobility or safety deployment conversations.
          </p>
        </div>
        <a className="inkwater-primary-button light" href="mailto:corp@inkstonecapital.com">
          corp@inkstonecapital.com
        </a>
      </section>
    </main>
  );
}
