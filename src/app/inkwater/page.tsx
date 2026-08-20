import type { Metadata } from "next";

const deployments = [
  "Singapore Changi Airport",
  "Tokyo Station",
  "Major commercial complexes in China",
];

const markets = [
  "Global maps and location services",
  "Physical AI and humanoid robotics",
  "Airports, hospitals, factories and malls",
  "Smart mobility and low-altitude economy",
  "Location Safety for children and older adults",
  "GPS-denied, underground and dual-use environments",
];

const newsItems = [
  {
    label: "Press Release",
    title:
      "Inkwater Advances Last-Meter Positioning Technology for GPS-Denied Environments",
    body: "Infrastructure-free, self-optimizing positioning requires no beacons or dedicated positioning hardware.",
  },
  {
    label: "Technology",
    title: "From Outdoor GPS to Spatial Intelligence",
    body: "Inkwater defines Last-Meter Positioning as the missing layer between satellite navigation and indoor or GPS-denied spaces.",
  },
  {
    label: "Partnerships",
    title: "Commercialization Across Large-Scale Venues",
    body: "The company is exploring strategic relationships across mapping, robotics, intelligent mobility, safety and infrastructure.",
  },
];

export const metadata: Metadata = {
  title: "Inkwater Last-Meter Positioning",
  description:
    "Infrastructure-free, self-optimizing positioning for GPS-denied environments. No GPS. No Beacon. No New Infrastructure.",
  alternates: {
    canonical: "/inkwater/",
  },
  openGraph: {
    title: "Inkwater Last-Meter Positioning",
    description:
      "Positioning Where GPS Can't. Spatial Intelligence for people, robots and machines.",
    url: "https://www.inkstonecapital.com/inkwater/",
    siteName: "Inkstone Capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkwater Last-Meter Positioning",
    description:
      "No GPS. No Beacon. No New Infrastructure. Built for GPS-denied Spatial Intelligence.",
  },
};

export default function InkwaterPage() {
  return (
    <main className="inkwater-page">
      <section className="inkwater-hero">
        <nav className="inkwater-nav" aria-label="Inkwater navigation">
          <a className="inkwater-brand" href="#top" aria-label="Inkwater home">
            <span className="inkwater-brand-mark">IW</span>
            <span>
              <strong>Inkwater</strong>
              <small>Last-Meter Positioning</small>
            </span>
          </a>
          <div className="inkwater-nav-links">
            <a href="#technology">Technology</a>
            <a href="#markets">Markets</a>
            <a href="#news">News</a>
            <a className="inkwater-nav-cta" href="mailto:corp@inkstonecapital.com">
              Partner
            </a>
          </div>
        </nav>

        <div className="inkwater-hero-grid" id="top">
          <div>
            <p className="inkwater-eyebrow">
              Spatial Intelligence for Humans and Machines
            </p>
            <h1>Positioning Where GPS Can&apos;t.</h1>
            <p className="inkwater-hero-lede">
              Inkwater Last-Meter Positioning is designed to extend location
              awareness from outdoor satellite navigation into airports,
              stations, commercial complexes and other GPS-denied environments.
            </p>

            <div className="inkwater-promise-row" aria-label="Core promise">
              <span>No GPS</span>
              <span>No Beacon</span>
              <span>No New Infrastructure</span>
            </div>

            <div className="inkwater-hero-actions">
              <a className="inkwater-primary-button" href="#contact">
                Discuss Partnership
              </a>
              <a className="inkwater-secondary-button" href="#news">
                View Press Brief
              </a>
            </div>
          </div>

          <div className="inkwater-signal-panel" aria-label="Last-meter visual">
            <div className="inkwater-signal-grid">
              <span className="inkwater-path inkwater-path-one" />
              <span className="inkwater-path inkwater-path-two" />
              <span className="inkwater-node inkwater-node-a">GPS</span>
              <span className="inkwater-node inkwater-node-b">X/Y</span>
              <span className="inkwater-node inkwater-node-c">Z</span>
              <span className="inkwater-node inkwater-node-d">AI</span>
              <span className="inkwater-position-dot" />
            </div>
            <div className="inkwater-panel-caption">
              <span>Outdoor GPS</span>
              <span>GPS-Denied</span>
              <span>Indoor X/Y/Z</span>
            </div>
          </div>
        </div>

        <div className="inkwater-deployment-strip" aria-label="Deployments">
          <span>Underlying technology deployed in</span>
          {deployments.map((deployment) => (
            <strong key={deployment}>{deployment}</strong>
          ))}
        </div>
      </section>

      <section className="inkwater-section" id="technology">
        <div className="inkwater-section-heading">
          <p className="inkwater-eyebrow">The Last Meter</p>
          <h2>
            GPS solved the world outside. Inkwater is focused on what happens
            after the signal disappears.
          </h2>
        </div>
        <div className="inkwater-two-column">
          <p>
            GPS and GNSS have transformed outdoor navigation. Yet satellite
            signals can deteriorate rapidly inside airports, shopping centers,
            hospitals, factories, underground parking structures, tunnels and
            large transportation hubs.
          </p>
          <p>
            Inkwater defines Last-Meter Positioning as the missing positioning
            layer between outdoor GPS and indoor or other GPS-denied
            environments, with a path toward continuous Spatial Intelligence in
            three-dimensional physical space.
          </p>
        </div>
      </section>

      <section className="inkwater-section inkwater-capability-section">
        <div className="inkwater-capability-grid">
          <article>
            <span>01</span>
            <h3>Infrastructure-free deployment</h3>
            <p>
              Designed to use wireless signals already present in the
              environment together with endpoint sensing capabilities, without
              requiring venues to install dedicated positioning hardware.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Self-optimizing positioning</h3>
            <p>
              Built to reduce dependence on repeated manual fingerprint
              collection, allowing positioning performance to improve as
              real-world usage and environmental data accumulate.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>X/Y/Z spatial awareness</h3>
            <p>
              Extends beyond two-dimensional location to help identify the
              right floor or vertical level across multi-level buildings,
              roads, stations and commercial spaces.
            </p>
          </article>
        </div>
      </section>

      <section className="inkwater-quote-band">
        <blockquote>
          &quot;GPS changed the way humanity understands location, but it did not
          complete the last meter of positioning.&quot;
        </blockquote>
        <p>I-Fa Chang, Chairman, Inkwater Holding Inc.</p>
      </section>

      <section className="inkwater-section" id="markets">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Market Direction</p>
          <h2>
            Built for people, robots and machines moving through the physical
            world.
          </h2>
        </div>
        <div className="inkwater-market-layout">
          <div className="inkwater-market-list">
            {markets.map((market) => (
              <div className="inkwater-market-item" key={market}>
                <span />
                <p>{market}</p>
              </div>
            ))}
          </div>
          <div className="inkwater-machine-card">
            <p>Physical AI question stack</p>
            <h3>Where am I?</h3>
            <h3>What is around me?</h3>
            <h3>What should I do next?</h3>
          </div>
        </div>
      </section>

      <section className="inkwater-section inkwater-quote-grid-section">
        <article className="inkwater-quote-card large">
          <blockquote>
            &quot;What excites me most about the Last-Meter technology Inkwater
            is advancing is that it does not require every venue to redeploy
            beacons or install dedicated positioning hardware. Just as
            importantly, positioning error can be continuously optimized,
            allowing the system to improve as it is used.&quot;
          </blockquote>
          <p>Dr. Jiangsen Tian, Chief AI Scientist, Yushan AI</p>
        </article>
        <article className="inkwater-quote-card">
          <blockquote>
            &quot;We see not only an indoor positioning market, but the unresolved
            last meter after GPS.&quot;
          </blockquote>
          <p>Allen Chiu, Head of Business Development, Inkwater</p>
        </article>
      </section>

      <section className="inkwater-section inkwater-safety-section">
        <div>
          <p className="inkwater-eyebrow">Location Safety</p>
          <h2>GPS can disappear. People shouldn&apos;t.</h2>
        </div>
        <p>
          Continuous positioning from outdoor GPS into indoor and GPS-denied
          spaces may support future safety services for children, older adults,
          emergency response and other situations where the moment someone most
          needs to be found may be the same moment GPS can no longer find them.
        </p>
      </section>

      <section className="inkwater-section inkwater-ecosystem-section">
        <div>
          <p className="inkwater-eyebrow">Corporate Ecosystem</p>
          <h2>Connected capabilities across Inkwater&apos;s technology portfolio.</h2>
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
            Docter Inc. is a wholly owned company under Inkwater Holding Inc.,
            supporting the broader technology and commercial ecosystem.
          </p>
          <small>Visit docter.one</small>
        </a>
      </section>

      <section className="inkwater-section" id="news">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Press &amp; News</p>
          <h2>Building the public record for Last-Meter Positioning.</h2>
        </div>
        <div className="inkwater-news-grid">
          {newsItems.map((item) => (
            <article key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-contact-section" id="contact">
        <div>
          <p className="inkwater-eyebrow">Partnership CTA</p>
          <h2>Explore Last-Meter Positioning with Inkwater.</h2>
          <p>
            For enterprise, infrastructure, robotics, mapping, mobility and
            strategic partnership discussions, contact the Inkwater team.
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
        <a
          className="inkwater-primary-button light"
          href="mailto:corp@inkstonecapital.com"
        >
          corp@inkstonecapital.com
        </a>
      </section>
    </main>
  );
}
