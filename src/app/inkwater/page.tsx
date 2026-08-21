import type { Metadata } from "next";

const deployments = [
  "Singapore Changi Airport",
  "Tokyo Station",
  "Major commercial complexes in China",
];

const deepPages = [
  {
    title: "Platform",
    href: "/inkwater/platform/",
    body: "How Inkwater packages Last-Meter Positioning as a Spatial Intelligence platform for venues, devices and machines.",
  },
  {
    title: "Technology",
    href: "/inkwater/technology/",
    body: "A deeper view of the signal layer, sensor fusion, X/Y/Z inference and self-optimizing architecture.",
  },
  {
    title: "Applications",
    href: "/inkwater/applications/",
    body: "How Last-Meter Positioning may support airports, malls, hospitals, factories, robotics, safety and mobility.",
  },
  {
    title: "Deployments",
    href: "/inkwater/deployments/",
    body: "Real-world proof points across Changi Airport, Tokyo Station and major commercial complexes in China.",
  },
  {
    title: "Partners",
    href: "/inkwater/partners/",
    body: "Partnership paths for mapping platforms, robotics companies, venue operators, mobility and safety providers.",
  },
];

const platformModules = [
  {
    title: "Positioning Engine",
    body: "Transforms ambient signals, endpoint sensing and spatial association into a GPS-denied location layer.",
  },
  {
    title: "Spatial Intelligence Layer",
    body: "Connects X/Y/Z location context to floors, zones, corridors, entrances, parking areas and vertical transitions.",
  },
  {
    title: "Self-Optimization Loop",
    body: "Uses repeated real-world observations to refine positioning performance and reduce recurring calibration burden.",
  },
  {
    title: "Location Safety Module",
    body: "Frames future services for child safety, elder safety, staff workflows and emergency response in GPS-denied spaces.",
  },
];

const whyNowItems = [
  {
    title: "GPS is mature, but incomplete",
    body: "Outdoor navigation has become universal, yet the user journey often breaks inside airports, stations, malls, hospitals, parking structures and underground spaces.",
  },
  {
    title: "Physical AI needs spatial context",
    body: "Humanoid robots, AMRs and autonomous equipment need to understand where they are before they can reason about what is nearby or what to do next.",
  },
  {
    title: "Venues need scalable deployment models",
    body: "Beacon-first approaches can become hardware projects. Infrastructure-free positioning creates a more practical path for large operators and platforms.",
  },
];

const partnershipPackages = [
  {
    title: "Venue Pilot",
    body: "Evaluate GPS-denied positioning in airports, stations, malls, hospitals, campuses, factories or parking structures.",
  },
  {
    title: "Robotics Integration",
    body: "Explore how Last-Meter Positioning can support humanoids, AMRs and embodied AI systems operating around people.",
  },
  {
    title: "Mapping Platform Partnership",
    body: "Extend outdoor navigation into the indoor, underground and obstructed environments where users still need continuity.",
  },
  {
    title: "Location Safety Commercialization",
    body: "Develop safety-oriented services for children, older adults, staff, emergency response and vulnerable-location workflows.",
  },
];

const buyerVideoGroups = [
  {
    location: "Beijing MixC / Beijing Wanxianghui",
    body: "Multilingual reference videos for a major commercial complex environment.",
    links: [
      { label: "繁中", href: "https://youtu.be/G0X47Q_Aa-4" },
      { label: "简中", href: "https://youtu.be/eAqNuPJ3ggY" },
      { label: "日本語", href: "https://youtu.be/FmsvyjvBRoY" },
      { label: "English", href: "https://youtu.be/EkkEl45uaCY" },
    ],
  },
  {
    location: "Tokyo Station",
    body: "Multilingual reference videos for one of the world's most complex transit environments.",
    links: [
      { label: "繁中", href: "https://youtu.be/YZbQF9u7YPo" },
      { label: "简中", href: "https://youtu.be/7dULHcqBpWw" },
      { label: "日本語", href: "https://youtu.be/RzASQt8axDo" },
      { label: "English", href: "https://youtu.be/Z03W1U0KAKc" },
    ],
  },
];

const markets = [
  "Global maps and location services",
  "Physical AI and humanoid robotics",
  "Airports, hospitals, factories and malls",
  "Smart mobility and low-altitude economy",
  "Location Safety for children and older adults",
  "GPS-denied, underground and dual-use environments",
];

const workflowSteps = [
  {
    step: "01",
    title: "Sense existing signals",
    body: "Use wireless signals already present in the venue, together with endpoint sensor inputs, as the environmental reference layer.",
  },
  {
    step: "02",
    title: "Estimate X/Y/Z position",
    body: "Translate signal and sensing observations into horizontal position and floor-level awareness for complex indoor and GPS-denied spaces.",
  },
  {
    step: "03",
    title: "Self-optimize over time",
    body: "Improve positioning performance as real-world observations accumulate, reducing dependence on recurring manual fingerprint surveys.",
  },
];

const legacySystems = [
  {
    title: "Bluetooth beacons",
    body: "Can require venue-by-venue hardware installation, battery maintenance and ongoing operational management.",
  },
  {
    title: "UWB anchors",
    body: "Can deliver precision, but often require dedicated infrastructure, installation planning and higher deployment cost.",
  },
  {
    title: "Manual Wi-Fi fingerprinting",
    body: "Can depend on repeated site surveys, map association and recalibration as RF environments change.",
  },
  {
    title: "GPS-only navigation",
    body: "Works well outdoors, but cannot reliably carry people, vehicles or robots through indoor, underground and obstructed environments.",
  },
];

const architectureItems = [
  "Existing wireless-signal environment",
  "Endpoint sensor fusion",
  "Spatial map association",
  "Floor-level and Z-axis inference",
  "Adaptive error correction",
  "Edge and cloud learning loop",
];

const useCases = [
  {
    title: "Airports and stations",
    body: "Guide passengers, staff and assets through terminals, platforms, concourses, parking structures and transfer paths.",
  },
  {
    title: "Commercial complexes",
    body: "Enable indoor navigation, customer flow intelligence, parking-to-store guidance and large venue operations.",
  },
  {
    title: "Hospitals and elder care",
    body: "Support Location Safety, staff workflows, patient movement and emergency response in buildings where GPS is unreliable.",
  },
  {
    title: "Factories and warehouses",
    body: "Help autonomous equipment, workers and assets maintain spatial awareness across dense industrial environments.",
  },
  {
    title: "Humanoid robotics",
    body: "Give mobile machines a positioning layer before they decide where to go, what is around them and what to do next.",
  },
  {
    title: "Low-altitude economy",
    body: "Explore continuity for drones, autonomous mobility platforms and GPS-denied operations near buildings and infrastructure.",
  },
];

const proofPoints = [
  {
    location: "Singapore Changi Airport",
    challenge: "Multi-level transportation, terminal and passenger movement complexity.",
  },
  {
    location: "Tokyo Station",
    challenge: "Dense transit flows, underground paths and challenging vertical-position context.",
  },
  {
    location: "Major commercial complexes in China",
    challenge: "Large indoor retail and mixed-use spaces where GPS cannot support precise last-meter navigation.",
  },
];

const faqs = [
  {
    question: "Does Inkwater Last-Meter Positioning replace GPS?",
    answer:
      "No. The strategy is to complement GPS by extending positioning continuity into environments where satellite signals become weak, blocked or unavailable.",
  },
  {
    question: "Does it require Bluetooth beacons or new venue hardware?",
    answer:
      "The core positioning strategy is designed around No GPS, No Beacon and No New Infrastructure, using signals already present in the environment and endpoint sensing capabilities.",
  },
  {
    question: "Can it support floor-level awareness?",
    answer:
      "The technology direction includes X/Y/Z spatial awareness, because determining the correct level can be as important as horizontal location in airports, stations, malls and parking structures.",
  },
  {
    question: "Is this only indoor navigation?",
    answer:
      "No. Inkwater frames the opportunity as GPS-denied positioning and Spatial Intelligence, spanning indoor, underground, obstructed, robotics, mobility, safety and selected dual-use environments.",
  },
  {
    question: "What partners is Inkwater seeking?",
    answer:
      "Inkwater is open to strategic discussions with mapping platforms, robotics companies, venue operators, mobility providers, infrastructure owners and safety-service partners.",
  },
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

const chineseMediaCoverage = [
  {
    source: "Anue 鉅亨網",
    title: "Inkwater布局「最後一公尺」空間定位技術：GPS消失 定位仍可繼續",
    href: "https://m.cnyes.com/news/id/6583287",
  },
  {
    source: "Yahoo 股市",
    title: "Inkwater布局「最後一公尺」空間定位技術：GPS消失 定位仍可繼續",
    href: "https://tw.stock.yahoo.com/share/18a5207c-1583-3467-aec3-ef7feeb4de48",
  },
  {
    source: "CMoney",
    title: "Inkwater布局「最後一公尺」空間定位技術：GPS消失 定位仍可繼續",
    href: "https://www.cmoney.tw/forum/article/182757704",
  },
  {
    source: "永豐金證券 Rich Club",
    title: "Inkwater布局「最後一公尺」空間定位技術：GPS消失 定位仍可繼續",
    href: "https://www.sinotrade.com.tw/richclub/news/6a87b121b17ee73678069417",
  },
  {
    source: "LINE TODAY",
    title: "Inkwater布局「最後一公尺」空間定位技術：GPS消失 定位仍可繼續",
    href: "https://liff.line.me/1454987169-1WAXAP3K/v3/article/RBq1XyM?utm_source=lineshare",
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
    images: [
      {
        url: "/inkwater/last-meter-hero.jpg",
        width: 1536,
        height: 864,
        alt: "Inkwater Last-Meter Positioning visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkwater Last-Meter Positioning",
    description:
      "No GPS. No Beacon. No New Infrastructure. Built for GPS-denied Spatial Intelligence.",
    images: ["/inkwater/last-meter-hero.jpg"],
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
            <a href="/inkwater/platform/">Platform</a>
            <a href="/inkwater/technology/">Technology</a>
            <a href="/inkwater/applications/">Applications</a>
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

          <div className="inkwater-signal-panel inkwater-photo-panel" aria-label="Last-meter positioning visual">
            <img
              src="/inkwater/last-meter-hero.jpg"
              alt="Premium interior positioning visualization in a GPS-denied transit environment"
            />
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

      <section className="inkwater-section inkwater-deepnav-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Explore Deeper</p>
          <h2>Inkwater Last-Meter Positioning is now organized as a deeper technical site.</h2>
        </div>
        <div className="inkwater-deepnav-grid">
          {deepPages.map((page) => (
            <a href={page.href} key={page.title}>
              <span>{page.title}</span>
              <p>{page.body}</p>
              <small>Open section</small>
            </a>
          ))}
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

      <section className="inkwater-section inkwater-platform-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Platform Model</p>
          <h2>More than indoor navigation: a Spatial Intelligence layer for the physical world.</h2>
        </div>
        <div className="inkwater-platform-grid">
          {platformModules.map((module) => (
            <article key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.body}</p>
            </article>
          ))}
        </div>
        <a className="inkwater-inline-link" href="/inkwater/platform/">
          Explore the platform
        </a>
      </section>

      <section className="inkwater-section inkwater-demo-reference-section">
        <div>
          <p className="inkwater-eyebrow">AI Engine Demo</p>
          <h2>Existing signals flow into an AI core, then become position and floor awareness.</h2>
        </div>
        <p>
          The Inkwater platform story now includes a clearer animated model of
          how Wi-Fi, 5G, Bluetooth, UWB and endpoint sensing converge through
          one AI core before becoming indoor X/Y/Z positioning, floor awareness
          and route context.
          <a href="/inkwater/platform/"> View the platform explanation.</a>
        </p>
      </section>

      <section className="inkwater-section inkwater-workflow-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">How It Works</p>
          <h2>From ambient signals to a continuously improving location layer.</h2>
        </div>
        <div className="inkwater-workflow-grid">
          {workflowSteps.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-legacy-section">
        <div>
          <p className="inkwater-eyebrow">Why No Beacon Matters</p>
          <h2>Indoor positioning has often failed to scale because each venue became a deployment project.</h2>
          <p>
            Inkwater&apos;s strategy is not only about accuracy. It is about
            reducing the infrastructure, maintenance and recalibration burden
            that has historically slowed broad adoption of indoor and
            GPS-denied positioning.
          </p>
        </div>
        <div className="inkwater-legacy-list">
          {legacySystems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-architecture-section">
        <div className="inkwater-section-heading">
          <p className="inkwater-eyebrow">Technical Architecture</p>
          <h2>A high-level architecture for GPS-denied Spatial Intelligence.</h2>
        </div>
        <figure className="inkwater-feature-image">
          <img
            src="/inkwater/positioning-architecture.jpg"
            alt="Multi-level Last-Meter Positioning architecture visualization"
          />
        </figure>
        <div className="inkwater-architecture-layout">
          <div className="inkwater-architecture-stack" aria-label="Technical architecture layers">
            {architectureItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="inkwater-architecture-copy">
            <p>
              The architecture is designed to transform existing environmental
              signals and endpoint sensing into a location layer that can
              support navigation, floor-level awareness and future machine
              spatial intelligence.
            </p>
            <p>
              As deployments scale, the learning loop can use real-world
              positioning observations to improve performance and reduce the
              cost of maintaining accuracy over time.
            </p>
          </div>
        </div>
      </section>

      <section className="inkwater-quote-band">
        <blockquote>
          &quot;GPS changed the way humanity understands location, but it did not
          complete the last meter of positioning.&quot;
        </blockquote>
        <p>I-Fa Chang, Chairman, Inkwater Holding Inc.</p>
      </section>

      <section className="inkwater-section inkwater-why-now-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Why Now</p>
          <h2>The market is moving from map location to machine-level Spatial Intelligence.</h2>
        </div>
        <div className="inkwater-why-now-grid">
          {whyNowItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
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

      <section className="inkwater-section inkwater-package-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Partnership Packages</p>
          <h2>Clear starting points for enterprise and strategic conversations.</h2>
        </div>
        <div className="inkwater-package-grid">
          {partnershipPackages.map((item) => (
            <article key={item.title}>
              <span>{item.title}</span>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-usecase-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Applications</p>
          <h2>One positioning layer across people, assets and autonomous systems.</h2>
        </div>
        <figure className="inkwater-feature-image compact">
          <img
            src="/inkwater/physical-ai-applications.jpg"
            alt="Humanoid robot and people moving through an indoor positioning environment"
          />
        </figure>
        <div className="inkwater-usecase-grid">
          {useCases.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-proof-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Deployment Proof</p>
          <h2>Validated in complex real-world environments.</h2>
        </div>
        <div className="inkwater-proof-grid">
          {proofPoints.map((item) => (
            <article key={item.location}>
              <span>{item.location}</span>
              <p>{item.challenge}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inkwater-section inkwater-video-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">Buyer Video References</p>
          <h2>Multilingual deployment videos for potential buyers and partners.</h2>
        </div>
        <div className="inkwater-video-grid">
          {buyerVideoGroups.map((group) => (
            <article key={group.location}>
              <h3>{group.location}</h3>
              <p>{group.body}</p>
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

      <section className="inkwater-section inkwater-faq-section">
        <div className="inkwater-section-heading compact">
          <p className="inkwater-eyebrow">FAQ</p>
          <h2>Technical and partnership questions.</h2>
        </div>
        <div className="inkwater-faq-list">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
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
        <div className="inkwater-media-coverage">
          <div className="inkwater-media-heading">
            <p className="inkwater-eyebrow">Chinese Media Coverage</p>
            <h3>Inkwater&apos;s Last-Meter Positioning story in Chinese-language financial media.</h3>
          </div>
          <div className="inkwater-media-list">
            {chineseMediaCoverage.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item.source}</span>
                <strong>{item.title}</strong>
                <small>Read coverage</small>
              </a>
            ))}
          </div>
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
