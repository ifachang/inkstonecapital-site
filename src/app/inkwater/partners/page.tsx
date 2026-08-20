import type { Metadata } from "next";

const partnerPaths = [
  {
    title: "Mapping and location platforms",
    body: "Extend outdoor navigation into indoor, underground and obstructed spaces where users still expect location continuity.",
  },
  {
    title: "Robotics and Physical AI companies",
    body: "Give humanoids, AMRs and autonomous equipment a GPS-denied positioning layer that supports movement through human spaces.",
  },
  {
    title: "Venue and infrastructure operators",
    body: "Explore indoor navigation, asset visibility, parking guidance, crowd movement and Location Safety without a heavy beacon-first deployment model.",
  },
  {
    title: "Mobility and low-altitude economy partners",
    body: "Investigate positioning continuity for autonomous mobility and drone-adjacent operations near buildings, stations and dense infrastructure.",
  },
  {
    title: "Safety and care service providers",
    body: "Build services around child safety, elder safety, staff safety and emergency response where indoor location can be mission-critical.",
  },
  {
    title: "Strategic investors and ecosystem partners",
    body: "Participate in the commercialization of Last-Meter Positioning as a Spatial Intelligence layer for the next physical AI cycle.",
  },
];

const discussionTopics = [
  "Strategic partnership and licensing",
  "Venue or infrastructure pilot evaluation",
  "Robotics and embodied AI integration",
  "Safety-service collaboration",
  "Commercialization and investment discussion",
];

export const metadata: Metadata = {
  title: "Partners | Inkwater Last-Meter Positioning",
  description:
    "Partnership opportunities for Inkwater Last-Meter Positioning across maps, robotics, venues, mobility, Location Safety, infrastructure and strategic investors.",
  alternates: {
    canonical: "/inkwater/partners/",
  },
  openGraph: {
    title: "Partners | Inkwater Last-Meter Positioning",
    description:
      "Partnership opportunities across maps, robotics, venues, mobility, Location Safety, infrastructure and strategic investors.",
    images: ["/inkwater/physical-ai-applications.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Inkwater Last-Meter Positioning",
    description:
      "Commercialize GPS-denied Spatial Intelligence with Inkwater.",
    images: ["/inkwater/physical-ai-applications.jpg"],
  },
};

export default function InkwaterPartnersPage() {
  return (
    <main className="inkwater-page">
      <section className="inkwater-subhero">
        <nav className="inkwater-nav" aria-label="Inkwater navigation">
          <a className="inkwater-brand" href="/inkwater/" aria-label="Inkwater overview">
            <span className="inkwater-brand-mark">IW</span>
            <span>
              <strong>Inkwater</strong>
              <small>Partners</small>
            </span>
          </a>
          <div className="inkwater-nav-links">
            <a href="/inkwater/">Overview</a>
            <a href="/inkwater/platform/">Platform</a>
            <a href="/inkwater/technology/">Technology</a>
            <a href="/inkwater/applications/">Applications</a>
            <a href="/inkwater/deployments/">Deployments</a>
          </div>
        </nav>
        <div className="inkwater-subhero-inner">
          <p className="inkwater-eyebrow">Partner With Inkwater</p>
          <h1>Commercialize GPS-denied Spatial Intelligence.</h1>
          <p>
            Inkwater is seeking strategic conversations with companies and
            operators that need reliable positioning after GPS becomes
            unavailable, weak or incomplete.
          </p>
        </div>
      </section>

      <section className="inkwater-section inkwater-partner-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Partnership Paths</p>
          <h2>Six practical routes into the Last-Meter Positioning ecosystem.</h2>
        </div>
        <figure className="inkwater-feature-image">
          <img
            src="/inkwater/physical-ai-applications.jpg"
            alt="Enterprise indoor positioning environment for robotics and venue partnerships"
          />
        </figure>
        <div className="inkwater-partner-grid">
          {partnerPaths.map((path) => (
            <article key={path.title}>
              <h3>{path.title}</h3>
              <p>{path.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-ecosystem-section">
        <div>
          <p className="inkwater-eyebrow">Corporate Ecosystem</p>
          <h2>Inkwater Holding Inc. also owns Docter Inc.</h2>
          <p>
            Docter Inc. is a 100% owned subsidiary of Inkwater Holding Inc.,
            supporting the broader technology and commercial ecosystem.
          </p>
        </div>
        <a
          className="inkwater-ecosystem-card"
          href="https://www.docter.one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>100% owned subsidiary</span>
          <strong>Docter Inc.</strong>
          <p>
            Visit Docter&apos;s website for more information about the company
            and its related technology ecosystem.
          </p>
          <small>Visit docter.one</small>
        </a>
      </section>

      <section className="inkwater-section inkwater-discussion-section">
        <div>
          <p className="inkwater-eyebrow">Discussion Scope</p>
          <h2>Start with the business problem, then map the positioning layer.</h2>
          <p>
            Good partnership discussions begin with the environment, device
            class, operational workflow and user safety requirement before
            selecting the right technical integration path.
          </p>
        </div>
        <div className="inkwater-discussion-list">
          {discussionTopics.map((topic) => (
            <p key={topic}>{topic}</p>
          ))}
        </div>
      </section>

      <section className="inkwater-contact-section">
        <div>
          <p className="inkwater-eyebrow">Contact</p>
          <h2>Explore partnership with Inkwater.</h2>
          <p>
            Inkwater Holding Inc. welcomes strategic partnership, enterprise
            deployment, technical integration and investor conversations.
          </p>
          <div className="inkwater-contact-details">
            <p>
              <strong>Address</strong>
              <span>221 W 9th St, PMB 235, Wilmington, Delaware 19801</span>
            </p>
            <p>
              <strong>Phone</strong>
              <a href="tel:+14253659666">+1 425-365-9666</a>
            </p>
          </div>
        </div>
        <a className="inkwater-primary-button light" href="mailto:corp@inkstonecapital.com">
          corp@inkstonecapital.com
        </a>
      </section>
    </main>
  );
}
