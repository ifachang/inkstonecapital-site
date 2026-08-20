import type { Metadata } from "next";

const platformModules = [
  {
    title: "Positioning Engine",
    body: "The core engine is designed to transform existing environmental signals, endpoint sensing and spatial association into practical location awareness after GPS becomes unavailable.",
  },
  {
    title: "Spatial Intelligence Layer",
    body: "This layer connects coordinates to physical meaning: floors, zones, corridors, entrances, elevators, escalators, parking areas and transition paths.",
  },
  {
    title: "Self-Optimization Loop",
    body: "As real-world observations accumulate, the system can refine error patterns, reduce drift and improve environmental understanding over time.",
  },
  {
    title: "Location Safety Module",
    body: "A safety-oriented layer for future services involving children, older adults, staff, emergency response and other situations where indoor location matters.",
  },
  {
    title: "Robotics and Physical AI Interface",
    body: "A positioning interface for humanoids, AMRs and autonomous systems that need to answer where they are before they decide what action to take.",
  },
  {
    title: "Enterprise Deployment Model",
    body: "A commercialization path for venues, mapping platforms, infrastructure operators and strategic partners that need scalable GPS-denied positioning.",
  },
];

const flow = [
  "Existing Signals",
  "Endpoint Sensors",
  "Spatial Map",
  "X/Y/Z Inference",
  "Self-Optimizing Positioning",
];

const trustItems = [
  "Designed to avoid unnecessary new venue hardware.",
  "Built for enterprise deployment discussions and operational control.",
  "Positioned to support privacy-conscious implementations.",
  "Focused on safety, reliability and responsible Spatial Intelligence.",
];

export const metadata: Metadata = {
  title: "Platform | Inkwater Last-Meter Positioning",
  description:
    "Inkwater Last-Meter Positioning packaged as a Spatial Intelligence platform for GPS-denied environments, Location Safety, robotics, venues and enterprise partners.",
  alternates: {
    canonical: "/inkwater/platform/",
  },
  openGraph: {
    title: "Platform | Inkwater Last-Meter Positioning",
    description:
      "A Spatial Intelligence platform for GPS-denied environments, Location Safety, robotics and enterprise deployment.",
    images: ["/inkwater/positioning-architecture.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform | Inkwater Last-Meter Positioning",
    description:
      "From ambient signals to self-optimizing Spatial Intelligence.",
    images: ["/inkwater/positioning-architecture.jpg"],
  },
};

export default function InkwaterPlatformPage() {
  return (
    <main className="inkwater-page">
      <section className="inkwater-subhero">
        <nav className="inkwater-nav" aria-label="Inkwater navigation">
          <a className="inkwater-brand" href="/inkwater/" aria-label="Inkwater overview">
            <span className="inkwater-brand-mark">IW</span>
            <span>
              <strong>Inkwater</strong>
              <small>Platform</small>
            </span>
          </a>
          <div className="inkwater-nav-links">
            <a href="/inkwater/">Overview</a>
            <a href="/inkwater/technology/">Technology</a>
            <a href="/inkwater/applications/">Applications</a>
            <a className="inkwater-nav-cta" href="/inkwater/partners/">Partners</a>
          </div>
        </nav>
        <div className="inkwater-subhero-inner">
          <p className="inkwater-eyebrow">Product Platform</p>
          <h1>A Spatial Intelligence platform for GPS-denied environments.</h1>
          <p>
            Inkwater packages Last-Meter Positioning as a platform layer for
            venues, devices, robots and safety services that need continuity
            after GPS becomes weak, blocked or unavailable.
          </p>
        </div>
      </section>

      <section className="inkwater-section inkwater-detail-lede">
        <div>
          <p className="inkwater-eyebrow">Platform Thesis</p>
          <h2>Last-Meter Positioning is the layer between maps and machine action.</h2>
        </div>
        <p>
          Maps tell people where to go. Physical AI needs to understand where it
          is, what level it is on, what structure surrounds it and how movement
          can continue when satellite positioning disappears. Inkwater&apos;s
          platform direction is built around that missing spatial layer.
        </p>
      </section>

      <section className="inkwater-section inkwater-platform-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Platform Modules</p>
          <h2>Six modules that make the positioning thesis commercially legible.</h2>
        </div>
        <figure className="inkwater-feature-image">
          <img
            src="/inkwater/positioning-architecture.jpg"
            alt="Inkwater platform architecture visualization"
          />
        </figure>
        <div className="inkwater-platform-grid">
          {platformModules.map((module) => (
            <article key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-flow-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Product Flow</p>
          <h2>From signals to self-optimizing positioning.</h2>
        </div>
        <div className="inkwater-flow-row">
          {flow.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-trust-section">
        <div>
          <p className="inkwater-eyebrow">Trust and Governance</p>
          <h2>Enterprise positioning needs more than signal accuracy.</h2>
          <p>
            GPS-denied positioning may touch safety, operations, mobility and
            AI decision-making. Inkwater&apos;s platform story therefore needs
            to be credible for enterprise deployment, privacy review and
            responsible Spatial Intelligence.
          </p>
        </div>
        <div className="inkwater-trust-list">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="inkwater-contact-section">
        <div>
          <p className="inkwater-eyebrow">Platform Partnership</p>
          <h2>Discuss the Inkwater platform model.</h2>
          <p>
            Contact the Inkwater team for platform, venue, robotics, mapping,
            Location Safety or strategic investment conversations.
          </p>
        </div>
        <a className="inkwater-primary-button light" href="mailto:corp@inkstonecapital.com">
          corp@inkstonecapital.com
        </a>
      </section>
    </main>
  );
}
