import type { Metadata } from "next";

const applicationGroups = [
  {
    title: "Airports, stations and transport hubs",
    body: "Support passengers, staff, service vehicles and assets as they move through concourses, transfer corridors, parking structures, platforms and underground passages.",
    points: ["Terminal-to-gate guidance", "Indoor transfer continuity", "Staff and asset location context"],
  },
  {
    title: "Commercial complexes and mixed-use venues",
    body: "Enable parking-to-store navigation, floor-level awareness, customer flow intelligence and operational visibility in large retail and commercial buildings.",
    points: ["Parking and mall navigation", "Floor-level routing", "Venue operations intelligence"],
  },
  {
    title: "Hospitals, elder care and Location Safety",
    body: "Extend positioning into buildings where GPS can fail at the moment location matters most for vulnerable people, staff workflows and emergency response.",
    points: ["Child and elder safety", "Emergency response support", "Patient and staff movement"],
  },
  {
    title: "Factories, warehouses and industrial sites",
    body: "Help workers, autonomous equipment and high-value assets maintain spatial awareness across dense industrial environments where satellite signals are unreliable.",
    points: ["Asset visibility", "Worker safety context", "Autonomous equipment navigation"],
  },
  {
    title: "Humanoid robotics and Physical AI",
    body: "Provide robots and embodied AI systems with a practical answer to where they are before they decide what is nearby and what action should happen next.",
    points: ["Robot localization", "X/Y/Z environment context", "Human-machine spatial coordination"],
  },
  {
    title: "Mobility and low-altitude economy",
    body: "Explore positioning continuity for smart mobility, autonomous platforms and GPS-denied operations around dense buildings, infrastructure and semi-indoor areas.",
    points: ["GPS-denied mobility", "Drone-adjacent positioning", "Infrastructure-aware operations"],
  },
];

const questions = [
  "Where is the person, asset or machine now?",
  "Which level, zone or transition path are they on?",
  "How can movement continue after GPS disappears?",
  "What can the system learn from repeated real-world observations?",
];

export const metadata: Metadata = {
  title: "Applications | Inkwater Last-Meter Positioning",
  description:
    "Application areas for Inkwater Last-Meter Positioning across airports, commercial complexes, hospitals, robotics, Physical AI, Location Safety and low-altitude economy use cases.",
  alternates: {
    canonical: "/inkwater/applications/",
  },
};

export default function InkwaterApplicationsPage() {
  return (
    <main className="inkwater-page">
      <section className="inkwater-subhero">
        <nav className="inkwater-nav" aria-label="Inkwater navigation">
          <a className="inkwater-brand" href="/inkwater/" aria-label="Inkwater overview">
            <span className="inkwater-brand-mark">IW</span>
            <span>
              <strong>Inkwater</strong>
              <small>Applications</small>
            </span>
          </a>
          <div className="inkwater-nav-links">
            <a href="/inkwater/">Overview</a>
            <a href="/inkwater/technology/">Technology</a>
            <a href="/inkwater/deployments/">Deployments</a>
            <a className="inkwater-nav-cta" href="/inkwater/partners/">Partners</a>
          </div>
        </nav>
        <div className="inkwater-subhero-inner">
          <p className="inkwater-eyebrow">Application Map</p>
          <h1>One positioning layer for people, assets and autonomous systems.</h1>
          <p>
            Inkwater&apos;s Last-Meter Positioning direction connects indoor
            navigation, Location Safety, venue operations and Physical AI under
            one GPS-denied Spatial Intelligence thesis.
          </p>
        </div>
      </section>

      <section className="inkwater-section inkwater-detail-lede">
        <div>
          <p className="inkwater-eyebrow">Operating Context</p>
          <h2>The last meter is where digital location meets physical decisions.</h2>
        </div>
        <p>
          The most valuable positioning problems often happen after outdoor
          navigation ends: inside a terminal, below a station, within a hospital
          wing, between parking and retail, or around robots operating close to
          people. Inkwater is positioning this layer as a shared foundation for
          human and machine spatial awareness.
        </p>
      </section>

      <section className="inkwater-section inkwater-application-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Use Case Families</p>
          <h2>From navigation to safety to machine autonomy.</h2>
        </div>
        <div className="inkwater-application-grid">
          {applicationGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.body}</p>
              <ul>
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-question-section">
        <div>
          <p className="inkwater-eyebrow">Spatial Intelligence</p>
          <h2>Physical AI starts with location context.</h2>
          <p>
            For people, location is often a convenience. For robots and
            autonomous systems, it becomes a prerequisite for action.
          </p>
        </div>
        <div className="inkwater-question-list">
          {questions.map((question) => (
            <p key={question}>{question}</p>
          ))}
        </div>
      </section>

      <section className="inkwater-contact-section">
        <div>
          <p className="inkwater-eyebrow">Application Partnership</p>
          <h2>Discuss a sector-specific opportunity.</h2>
          <p>
            Inkwater is open to partnership conversations across venue
            operations, mobility, safety, robotics, maps and infrastructure.
          </p>
        </div>
        <a className="inkwater-primary-button light" href="mailto:corp@inkstonecapital.com">
          corp@inkstonecapital.com
        </a>
      </section>
    </main>
  );
}
