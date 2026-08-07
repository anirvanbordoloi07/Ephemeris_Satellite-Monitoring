import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronLeft, Mail, Send } from "lucide-react";

function BrandMark(props) {
  return (
    <svg viewBox="0 0 110 95" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2 64.12L60.4638 60.6675C67.4189 60.2568 73.3087 55.3925 75.0266 48.6403L78.2843 35.8357L82.0071 49.2562C83.5082 54.6677 87.7365 58.8961 93.148 60.3972L106.569 64.12L93.148 67.8428C87.7365 69.3439 83.5082 73.5723 82.0071 78.9838L78.2843 92.4043L75.0266 79.5997C73.3087 72.8475 67.4189 67.9832 60.4638 67.5725L2 64.12Z" />
    </svg>
  );
}

/* Domain-derived marks for the capability grid — orbit arcs, TCA brackets,
   gauges — rather than generic icon-library glyphs. */
function FleetMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="20.3" cy="10.1" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="4.2" cy="14.6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PriorityMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h11" />
      <path d="M4 18h6" />
      <path d="M18 15l3 3-3 3" />
    </svg>
  );
}
function TrendMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 4v16h18" />
      <path d="M6.5 15.5l4-4.5 3 3 5.5-7" />
    </svg>
  );
}
function VectorMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 18L18 4" />
      <path d="M18 4h-6" />
      <path d="M18 4v6" />
      <circle cx="4" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LedgerMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M7.5 8h9M7.5 12h9" />
      <path d="M7.5 16.5l2 2 4-4.5" />
    </svg>
  );
}
function BridgeMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 8v8" />
      <path d="M21 8v8" />
      <path d="M7 12h7" />
      <path d="M11.5 8.5L15 12l-3.5 3.5" />
    </svg>
  );
}

function useTcaCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function TcaClock({ initialSeconds }) {
  const formatted = useTcaCountdown(initialSeconds);
  return <span suppressHydrationWarning>{formatted}</span>;
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const heroStat = ["87%", "Alert noise reduced"];
const supportStats = [
  ["47", "Active conjunctions"],
  ["24", "Fleet satellites"],
  ["4.2h", "Avg response time"]
];

const readoutQueue = [
  ["EphSat-1A", "COSMOS 2251 DEB", "caution", "1d 03h"],
  ["EphSat-2A", "SL-16 R/B", "nominal", "1d 17h"]
];

const capabilityGroups = [
  {
    label: "Input",
    cols: 1,
    items: [
      [FleetMark, "Fleet-Wide Oversight", "Keep fleet health, response load, maneuver posture, and unresolved events visible in one operating surface."]
    ]
  },
  {
    label: "Process",
    cols: 3,
    items: [
      [PriorityMark, "AI Alert Prioritization", "Surface the conjunctions most likely to require action first so operators spend time on decisions, not sorting."],
      [TrendMark, "Risk Evolution Tracking", "Show how miss distance, probability, and urgency change across updates to reveal momentum, not just snapshots."],
      [VectorMark, "Maneuver Framing", "Present timing windows and decision implications in a way that supports fast operator judgment under pressure."]
    ]
  },
  {
    label: "Output",
    cols: 2,
    items: [
      [LedgerMark, "Audit-Ready Decisions", "Capture review context, escalation paths, and outcomes in a log that stands up to compliance scrutiny."],
      [BridgeMark, "Direct Product Access", "One click from this page into the live product — no separate sign-up flow."]
    ]
  }
];

const rawFeedRows = [
  ["CDM-2026-04850", "STARLINK-3214", "recv 02:14"],
  ["CDM-2026-04790", "IRIDIUM 33 DEB", "recv 03:41"],
  ["CDM-2026-04835", "SL-16 R/B", "recv 04:02"],
  ["CDM-2026-04821", "COSMOS 2251 DEB", "recv 04:55"],
  ["CDM-2026-04842", "FENGYUN 1C DEB", "recv 05:30"]
];

const triagedQueueRows = [
  ["EphSat-3 / IRIDIUM 33 DEB", "critical", "TCA 7h 30m"],
  ["EphSat-1A / COSMOS 2251 DEB", "critical", "TCA 1d 03h"],
  ["EphSat-2A / SL-16 R/B", "caution", "TCA 1d 17h"],
  ["EphSat-4A / FENGYUN 1C DEB", "caution", "TCA 1d 11h"],
  ["EphSat-1B / STARLINK-3214", "nominal", "TCA 2d 22h"]
];

const operatorPanels = [
  ["Prioritized Queue", "See the events that actually need action first, with risk momentum and maneuverability surfaced immediately."],
  ["Risk Evolution", "Track how probability, miss distance, and urgency shift across updates instead of comparing snapshots manually."],
  ["Decision Support", "Frame maneuver timing, fuel cost, and decision windows in a format operators can act on quickly."],
  ["Mission Oversight", "Monitor fleet health, unresolved alerts, and team response posture from a single operating surface."]
];

const workflowSteps = [
  ["01", "Ingest operational data", "Bring in conjunction messages, orbit updates, and fleet context so every event starts from normalized operational data."],
  ["02", "Score real mission risk", "Rank events using escalation likelihood, object characteristics, time-to-TCA, and decision urgency rather than raw probability alone."],
  ["03", "Focus the operator queue", "Push the most consequential conjunctions to the top while lower-signal events remain visible without overwhelming the team."],
  ["04", "Decide with traceability", "Move from review to action with complete context, documented rationale, and compliance-ready recordkeeping."]
];

const dashboardMetrics = [
  ["22/24", "Fleet Satellites", "operational"],
  ["47", "Active Conjunctions", "being tracked"],
  ["3", "Critical Alerts", "require action"],
  ["4.2 hrs", "Avg Response Time", "to acknowledge"],
  ["12.4%", "Fuel Budget Used", "this quarter"],
  ["8", "Days Since Critical", "last incident"]
];

const eventRows = [
  ["CDM-2026-04790", "EphSat-3", "IRIDIUM 33 DEB", "critical", "96", "6.8e-4", "85 m", "7h 30m", "active"],
  ["CDM-2026-04821", "EphSat-1A", "COSMOS 2251 DEB", "critical", "94", "1.2e-3", "45 m", "1d 3h", "active"],
  ["CDM-2026-04835", "EphSat-2A", "SL-16 R/B", "critical", "91", "4.5e-4", "120 m", "1d 17h", "maneuver-planned"],
  ["CDM-2026-04842", "EphSat-4A", "FENGYUN 1C DEB", "high", "78", "8.7e-5", "210 m", "1d 11h", "active"],
  ["CDM-2026-04850", "EphSat-1B", "STARLINK-3214", "medium", "52", "2.1e-5", "580 m", "2d 22h", "monitoring"]
];

const alerts = [
  ["Critical", "Critical Conjunction: EphSat-3 / IRIDIUM 33 DEB", "TCA in 7.5 hours. Probability escalated to 6.8e-4. Immediate review required."],
  ["Critical", "Maneuver Window Closing: EphSat-1A", "Decision required within 2 hours for CDM-2026-04821. Miss distance 45m."],
  ["High", "Rising Risk: EphSat-4A / FENGYUN 1C DEB", "Probability increased 3x over the last 24 hours. AI score now 78."],
  ["Medium", "New CDM Received: EphSat-1B / STARLINK-3214", "CDM #3 received. Miss distance stable at 580m. Low co-orbital relative velocity."]
];

const dashboardNav = [
  ["/dashboard", "Overview"],
  ["/alerts", "Alerts"],
  ["/fleet", "Fleet"],
  ["/analytics", "Analytics"],
  ["/audit-log", "Audit Log"],
  ["/settings", "Settings"]
];

const fleetRows = [
  ["EphSat-1A", "LEO Imaging", "Healthy", "11", "22 kg", "1 open event"],
  ["EphSat-1B", "LEO Imaging", "Monitor", "14", "21 kg", "2 open events"],
  ["EphSat-2A", "LEO Relay", "Maneuver Planned", "9", "18 kg", "Burn approved"],
  ["EphSat-3", "LEO Broadband", "Critical Watch", "5", "26 kg", "TCA 7h 30m"],
  ["EphSat-4A", "LEO Science", "Healthy", "28", "19 kg", "Nominal"]
];

const analyticsHighlights = [
  ["Noise Reduction", "87%", "Compared with unfiltered conjunction review"],
  ["Median Review Time", "18 min", "From alert creation to operator acknowledgement"],
  ["Escalations Closed", "31", "High-risk events resolved this month"],
  ["Maneuver Windows Saved", "6", "Cases where prioritization preserved decision time"]
];

const analyticsRows = [
  ["Critical to review", "12 min", "14 min", "-14%"],
  ["High-risk assessment", "21 min", "34 min", "-38%"],
  ["Cross-team escalation", "32 min", "47 min", "-32%"],
  ["Audit package prep", "9 min", "28 min", "-68%"]
];

const auditRows = [
  ["2026-03-20 10:32 UTC", "Sarah Chen", "Approved maneuver review", "CDM-2026-04790", "Logged"],
  ["2026-03-20 09:58 UTC", "Marcus Hill", "Raised risk severity", "CDM-2026-04821", "Logged"],
  ["2026-03-20 09:11 UTC", "Autoprioritizer", "Re-ranked conjunction queue", "Fleet Queue", "System"],
  ["2026-03-20 08:47 UTC", "Alicia Gomez", "Closed monitor-only alert", "CDM-2026-04850", "Logged"],
  ["2026-03-19 21:03 UTC", "Mission Control", "Published end-of-day summary", "Daily Ops", "Archived"]
];

const settingsCards = [
  ["Notification policy", "Critical events page on-call immediately. High-risk alerts notify fleet manager and analyst queue."],
  ["Conjunction scoring", "Events are ranked by time to closest approach, object type, tracking accuracy, and available maneuver margin."],
  ["Audit retention", "Decision records retained for 7 years with export-ready summaries and change history."],
  ["Data sources", "Demo environment simulates CDM ingestion, orbit updates, and operator comments across a 24-satellite fleet."]
];

function SatelliteMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m13.5 6.5-3.15-3.15a1.2 1.2 0 0 0-1.7 0L6.35 5.65a1.2 1.2 0 0 0 0 1.7L9.5 10.5"></path>
      <path d="M16.5 7.5 19 5"></path>
      <path d="m17.5 10.5 3.15 3.15a1.2 1.2 0 0 1 0 1.7l-2.3 2.3a1.2 1.2 0 0 1-1.7 0L13.5 14.5"></path>
      <path d="M9 21a6 6 0 0 0-6-6"></path>
      <path d="M9.35 10.65a1.2 1.2 0 0 0 0 1.7l2.3 2.3a1.2 1.2 0 0 0 1.7 0l4.3-4.3a1.2 1.2 0 0 0 0-1.7l-2.3-2.3a1.2 1.2 0 0 0-1.7 0z"></path>
    </svg>
  );
}

function useStars() {
  useEffect(() => {
    const canvas = document.querySelector(".stars");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.25,
      a: Math.random() * 0.8 + 0.2
    }));

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(191, 219, 254, ${star.a})`;
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <div className="legend-strip" aria-hidden="true">
        <span className="legend-item"><span className="legend-dot critical"></span>Critical</span>
        <span className="legend-item"><span className="legend-dot caution"></span>Monitor</span>
        <span className="legend-item"><span className="legend-dot nominal"></span>Nominal</span>
      </div>
      <div className="topbar-inner">
        <Link className="brand brand-wordmark" href="/" onClick={close}>
          <BrandMark style={{ width: 22, height: 19 }} />
          <span className="brand-text">Ephemeris</span>
        </Link>
        <nav className="topnav" aria-label="Primary">
          <a href="/#platform">Platform</a>
          <a href="/#operator-view">Operator View</a>
          <a href="/#workflow">Workflow</a>
          <a href="/#trust">Trust</a>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="topbar-actions">
          <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">PRODUCT</a>
          <Link className="btn btn-ghost btn-desktop-only" href="/contact">CONTACT US</Link>
          <Link className="btn btn-ghost btn-desktop-only" href="/signup">Get Started</Link>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/#platform" onClick={close}>Platform</a>
          <a href="/#operator-view" onClick={close}>Operator View</a>
          <a href="/#workflow" onClick={close}>Workflow</a>
          <a href="/#trust" onClick={close}>Trust</a>
          <div className="mobile-nav-divider" />
          <Link href="/contact" onClick={close}>Contact Us</Link>
          <Link href="/signup" onClick={close} className="mobile-nav-cta">Get Started</Link>
        </nav>
      )}
    </header>
  );
}

export function Layout({ title, description, children, showHeader = true }) {
  useStars();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="site-shell">
        <canvas className="stars" aria-hidden="true"></canvas>
        {showHeader ? <Header /> : null}
        {children}
      </div>
    </>
  );
}

export function HomePage() {
  return (
    <Layout
      title="Ephemeris - Satellite Collision Avoidance Intelligence"
      description="Decision intelligence for satellite safety with a polished mission-control experience and direct access to the live product."
    >
      <main>
        <section className="hero">
          <div className="section hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Real-time conjunction intelligence</div>
              <h1>Decision Intelligence for <span>Satellite Safety</span></h1>
              <p>
                Ephemeris turns raw conjunction data into a focused operator workflow: review the
                highest-risk events first, see how risk is changing, and act with a clear audit trail.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/dashboard">Launch Dashboard</Link>
                <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">PRODUCT</a>
                <a className="btn btn-secondary" href="#workflow">See Workflow</a>
              </div>
              <div className="hero-note">Built for satellite operators, mission teams, and collision-risk review workflows.</div>
              <div className="stat-row">
                <div className="stat-hero">
                  <span className="stat-hero-value">{heroStat[0]}</span>
                  <span className="stat-hero-label">{heroStat[1]}</span>
                </div>
                <div className="stat-support-list">
                  {supportStats.map(([value, label]) => (
                    <div className="stat-support" key={label}>
                      <span className="stat-support-value">{value}</span>
                      <span className="stat-support-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="readout-card">
              <div className="readout-head">
                <div>
                  <div className="readout-head-label">Live conjunction readout</div>
                  <div className="readout-head-event">EphSat-3 / IRIDIUM 33 DEB</div>
                </div>
                <span className="risk-badge critical">Critical</span>
              </div>
              <div className="readout-rows">
                <div className="readout-row">
                  <span className="readout-row-label">Time to closest approach</span>
                  <span className="readout-value countdown"><TcaClock initialSeconds={27000} /></span>
                </div>
                <div className="readout-row">
                  <span className="readout-row-label">Miss distance</span>
                  <span className="readout-value">85 m</span>
                </div>
                <div className="readout-row">
                  <span className="readout-row-label">Collision probability</span>
                  <span className="readout-value">6.8e-4</span>
                </div>
              </div>
              <div className="readout-queue">
                <div className="readout-queue-label">Next in queue</div>
                {readoutQueue.map(([sat, target, tier, tca]) => (
                  <div className="queue-row" key={sat}>
                    <span className="queue-row-id">{sat} / {target}</span>
                    <span className={`risk-badge ${tier}`}>{tier}</span>
                    <span className="queue-row-tca">{tca}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section conjunction-section" id="conjunction">
          <div className="section-heading">
            <h2>Conjunction Analysis in Action</h2>
            <p>
              Real-time orbital propagation with live TCA computation, miss distance scoring, and
              animated satellite tracks — all rendered on a 3D Cesium globe.
            </p>
          </div>
          <div className="conjunction-frame reveal-on-scroll">
            <img
              src="/conjunction-analyzer.png"
              alt="Ephemeris conjunction analysis — Cesium globe showing two satellite tracks converging at TCA"
              className="conjunction-img"
            />
            <div className="conjunction-overlay">
              <div className="conjunction-stat"><span>3,732 km</span><small>Miss Distance at TCA</small></div>
              <div className="conjunction-stat"><span>T+3.51 hrs</span><small>Time to Close Approach</small></div>
              <div className="conjunction-stat"><span>NOMINAL</span><small>Risk Level</small></div>
            </div>
          </div>
        </section>

        <section className="section" id="platform">
          <div className="section-heading">
            <h2>The Analysis-to-Action Layer</h2>
            <p>
              Ephemeris sits between raw orbital data and mission decisions. The interface is designed
              to feel like a working control surface, not a generic SaaS dashboard.
            </p>
          </div>
          <div className="capability-groups">
            {capabilityGroups.map((group) => (
              <div key={group.label}>
                <div className="capability-group-label">{group.label}</div>
                <div className={`capability-grid cols-${group.cols}`}>
                  {group.items.map(([Mark, title, body]) => (
                    <article className="capability-card" key={title}>
                      <Mark className="capability-mark" />
                      <div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="operator-view">
          <div className="section-heading">
            <h2>What Operators See</h2>
            <p>
              The homepage now previews the actual working posture of the product: a triaged queue,
              risk-aware views, decision framing, and fleet-wide oversight.
            </p>
          </div>
          <div className="operator-grid">
            {operatorPanels.map(([title, body]) => (
              <article className="operator-card" key={title}>
                <div className="operator-line" aria-hidden="true"></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="workflow">
          <div className="section-heading">
            <h2>From Raw Data to Confident Decisions</h2>
            <p>
              A cleaner, guided workflow from ingestion to action, with a clear path into the live
              product and no dead-end pages.
            </p>
          </div>
          <div className="pipeline-rail reveal-on-scroll">
            {workflowSteps.map(([step, title, body]) => (
              <div className="pipeline-step" key={step}>
                <div className="pipeline-index">{step}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="workflow-cta glass-card">
            <div>
              <strong>Ready to open the live product?</strong>
              <div className="muted">Jump directly into the operational Ephemeris experience from the homepage.</div>
            </div>
            <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">Open PRODUCT</a>
          </div>
        </section>

        <section className="section" id="trust">
          <div className="section-heading">
            <h2>Why This Interface Works Better</h2>
            <p>
              Same conjunction data, two views: the feed as it arrives, and the queue after
              Ephemeris scores and orders it.
            </p>
          </div>
          <div className="contrast-grid reveal-on-scroll">
            <div className="contrast-panel raw">
              <div className="contrast-panel-head">Raw feed — arrival order</div>
              {rawFeedRows.map(([id, target, recv]) => (
                <div className="contrast-row" key={id}>
                  <span>{id} / {target}</span>
                  <span>{recv}</span>
                </div>
              ))}
              <div className="contrast-note">Five CDMs, no ranking. An operator has to read every row to find what matters.</div>
            </div>
            <div className="contrast-panel triaged">
              <div className="contrast-panel-head">Triaged queue — by risk</div>
              {triagedQueueRows.map(([label, tier, tca]) => (
                <div className="contrast-row" key={label}>
                  <span>{label}</span>
                  <span className={`risk-badge ${tier}`}>{tier}</span>
                  <span>{tca}</span>
                </div>
              ))}
              <div className="contrast-note">Same five events, ranked by urgency with time-to-TCA attached. Critical events are unmissable.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </Layout>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="footer-top">
          <div>
            <Link className="brand brand-wordmark" href="/">
              <BrandMark style={{ width: 20, height: 17 }} />
              <span className="brand-text" style={{ fontSize: "1.2rem" }}>Ephemeris</span>
            </Link>
            <p className="footer-brand-blurb">Satellite collision avoidance intelligence, built around how operators actually review and act on conjunction risk.</p>
          </div>
          <div>
            <div className="footer-col-label">Site</div>
            <div className="footer-col-links">
              <a className="footer-link" href="/#platform">Platform</a>
              <a className="footer-link" href="/#operator-view">Operator View</a>
              <a className="footer-link" href="/#workflow">Workflow</a>
              <a className="footer-link" href="/#trust">Trust</a>
            </div>
          </div>
          <div>
            <div className="footer-col-label">Contact</div>
            <div className="footer-col-links">
              <a className="footer-link" href="mailto:EphemerisTech@gmail.com">EphemerisTech@gmail.com</a>
              <Link className="footer-link" href="/contact">Contact form</Link>
              <a className="footer-link" href="https://www.linkedin.com/company/ephemeristech/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Ephemeris</span>
          <a className="btn btn-ghost" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer" style={{ letterSpacing: "0.04em" }}>PRODUCT</a>
        </div>
      </div>
    </footer>
  );
}

export function LoginPage() {
  return (
    <Layout
      title="Sign in to Ephemeris"
      description="Demo login for the migrated Ephemeris mission-control experience."
    >
      <main className="login-wrap">
        <section className="login-card glass-card">
          <Link href="/" className="auth-back-link"><ChevronLeft size={16} strokeWidth={2.2} />Back to Home</Link>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <img src="/logo.svg" alt="Ephemeris" style={{ height: 32, width: "auto" }} />
          </div>
          <div className="page-hero" style={{ marginBottom: 22 }}>
            <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Sign in to Ephemeris</h1>
            <p style={{ textAlign: "center" }}>Satellite collision avoidance intelligence with product migration built in.</p>
          </div>
          <form action="/dashboard">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" defaultValue="sarah@ephemeris.space" required />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" defaultValue="password123" required />
            </div>
            <button className="btn btn-primary" type="submit">Sign In</button>
          </form>
          <div className="login-note">
            Demo credentials are pre-filled. This preserves the frictionless v0 login concept while routing users toward the integrated product flow.
          </div>
        </section>
      </main>
    </Layout>
  );
}

export function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { window.location.href = "https://ephemeris-nine.vercel.app/"; }, 1800);
  }

  return (
    <Layout
      title="Get Early Access — Ephemeris"
      description="Sign up for early access to Ephemeris satellite collision avoidance intelligence."
    >
      <main className="login-wrap">
        <section className="login-card glass-card">
          <Link href="/" className="auth-back-link"><ChevronLeft size={16} strokeWidth={2.2} />Back to Home</Link>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <img src="/logo.svg" alt="Ephemeris" style={{ height: 32, width: "auto" }} />
          </div>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 14, color: "var(--primary)" }}>✓</div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: 10 }}>You&rsquo;re in!</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>Opening the live product now&hellip;</p>
            </div>
          ) : (
            <>
              <div className="page-hero" style={{ marginBottom: 22 }}>
                <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Get early access</h1>
                <p style={{ textAlign: "center", color: "var(--muted)" }}>
                  Leave your details and we&rsquo;ll take you straight to the live product.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "flex", gap: 10 }}>
                  <div className="field" style={{ flex: 1 }}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field" style={{ flex: 1 }}>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" placeholder="Last name" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="signupEmail">Work Email</label>
                  <input id="signupEmail" type="email" placeholder="you@company.com" required />
                </div>
                <button className="btn btn-primary" type="submit" style={{ width: "100%", marginTop: 4 }}>
                  Access the Product →
                </button>
              </form>
              <div className="login-note" style={{ marginTop: 16 }}>
                Already have an account?{" "}
                <Link href="/login" style={{ color: "var(--accent, #38bdf8)", textDecoration: "underline" }}>Sign in</Link>
              </div>
            </>
          )}
        </section>
      </main>
    </Layout>
  );
}

function DashboardSidebar({ activePath }) {
  return (
    <aside className="sidebar glass-card">
      <Link className="brand" href="/">
        <img src="/logo.svg" alt="Ephemeris" style={{ height: 26, width: "auto" }} />
      </Link>
      <nav>
        {dashboardNav.map(([href, label]) => (
          <Link className={activePath === href ? "active" : ""} href={href} key={href}>{label}</Link>
        ))}
      </nav>
      <div className="profile">
        <div className="muted">3 Notifications</div>
        <strong>Sarah Chen</strong>
        <div className="muted">Fleet Manager</div>
      </div>
    </aside>
  );
}

function DashboardFrame({ activePath, title, description, children }) {
  const isOverview = activePath === "/dashboard";
  const backHref = isOverview ? "/" : "/dashboard";
  const backLabel = isOverview ? "Home" : "Overview";
  const pageTitle = title.replace("Ephemeris ", "").replace(" — Ephemeris", "");

  return (
    <Layout title={title} description={description} showHeader={false}>
      <div className="dashboard-shell">
        <DashboardSidebar activePath={activePath} />
        <main className="dashboard-main">
          <div className="mobile-page-header">
            <Link href={backHref} className="mobile-back-btn">
              <ChevronLeft size={18} strokeWidth={2.2} />
              {backLabel}
            </Link>
            <span className="mobile-page-title">{pageTitle}</span>
          </div>
          {children}
        </main>
      </div>
    </Layout>
  );
}

export function DashboardPage() {
  return (
    <DashboardFrame
      activePath="/dashboard"
      title="Ephemeris Mission Control"
      description="Mission control dashboard for the migrated Ephemeris product experience."
    >
        <>
          <section className="dashboard-card glass-card">
            <div className="page-hero" style={{ marginBottom: 0 }}>
              <h1 style={{ fontSize: "2rem" }}>Mission Control</h1>
              <p>Fleet-wide collision risk monitoring across all active satellites. Last updated 10:30 UTC.</p>
            </div>
          </section>

          <section className="metrics-grid">
            {dashboardMetrics.map(([value, label, detail]) => (
              <div className="metric-card" key={label}>
                <span className="metric-label">{label}</span>
                <span className="metric-value">{value}</span>
                <span className="metric-label">{detail}</span>
              </div>
            ))}
          </section>

          <section className="dashboard-grid">
            <div className="dashboard-card glass-card orbital-stage">
              <div className="panel-header">
                <div>
                  <div className="panel-title">Orbital View</div>
                  <div className="panel-subtitle">Live migration framing</div>
                </div>
                <a className="btn btn-product btn-pill" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">Open Product</a>
              </div>
              <div className="orbit-preview" style={{ minHeight: 260 }}>
                <div className="earth" aria-hidden="true"></div>
                <div className="orbit one" aria-hidden="true"></div>
                <div className="orbit two" aria-hidden="true"></div>
                <div className="orbit-dot primary" aria-hidden="true"></div>
                <div className="orbit-dot alert" aria-hidden="true"></div>
              </div>
            </div>

            <div className="dashboard-card glass-card">
              <div className="panel-header">
                <div className="panel-title">Alert Queue</div>
                <Link className="muted" href="/alerts">View all</Link>
              </div>
              <div className="alert-list">
                {alerts.map(([level, title, body]) => (
                  <article className="alert-item" key={title}>
                    <div className={`alert-pill ${level.toLowerCase()}`}>{level}</div>
                    <h3>{title}</h3>
                    <p className="muted">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="table-card glass-card">
            <div className="panel-header">
              <div className="panel-title">Top Conjunction Events</div>
              <a className="muted" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">View product</a>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Event ID</th>
                    <th>Primary</th>
                    <th>Secondary</th>
                    <th>Risk</th>
                    <th>AI Score</th>
                    <th>Prob.</th>
                    <th>Miss Dist.</th>
                    <th>TCA</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {eventRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => {
                        let className = "";
                        if (index === 3) className = `risk-${cell}`;
                        if (index === 8) className = cell === "maneuver-planned" ? "status-maneuver" : `status-${cell}`;
                        return <td className={className} key={`${row[0]}-${index}`}>{cell}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
    </DashboardFrame>
  );
}

export function AlertsPage() {
  return (
    <DashboardFrame
      activePath="/alerts"
      title="Ephemeris Alerts"
      description="Active alert queue for the Ephemeris collision monitoring interface."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Alerts</h1>
            <p>Active alert queue with severity triage, operator notes, and recommended next steps.</p>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card glass-card">
            <div className="panel-header">
              <div className="panel-title">Active Alert Queue</div>
              <span className="muted">4 unresolved</span>
            </div>
            <div className="alert-list">
              {alerts.map(([level, title, body]) => (
                <article className="alert-item" key={title}>
                  <div className={`alert-pill ${level.toLowerCase()}`}>{level}</div>
                  <h3>{title}</h3>
                  <p className="muted">{body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="dashboard-card glass-card">
            <div className="panel-header">
              <div className="panel-title">Operator Guidance</div>
              <span className="muted">Recommended steps</span>
            </div>
            <div className="features-grid single-column-grid">
              {[
                ["Triage", "Confirm event ownership and review the top two critical conjunctions within the next 30 minutes."],
                ["Coordinate", "Share maneuver plans with flight dynamics and flag any tracking data concerns."],
                ["Decide", "Document whether the event remains monitoring-only, requires escalation, or is entering maneuver review."]
              ].map(([title, body]) => (
                <article className="feature-card" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="table-card glass-card">
          <div className="panel-header">
            <div className="panel-title">Alert History Snapshot</div>
            <span className="muted">Past 24 hours</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Severity</th>
                  <th>Owner</th>
                  <th>Latest Action</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CDM-2026-04790", "Critical", "Sarah Chen", "Maneuver review opened", "7 min ago"],
                  ["CDM-2026-04821", "Critical", "Marcus Hill", "Waiting on tracking data review", "12 min ago"],
                  ["CDM-2026-04842", "High", "Alicia Gomez", "Escalated after probability rise", "39 min ago"],
                  ["CDM-2026-04850", "Medium", "Autoprioritizer", "Remains monitor-only", "1h ago"]
                ].map((row) => (
                  <tr key={row[0]}>{row.map((cell) => <td key={`${row[0]}-${cell}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    </DashboardFrame>
  );
}

export function FleetPage() {
  return (
    <DashboardFrame
      activePath="/fleet"
      title="Ephemeris Fleet"
      description="Fleet status overview for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Fleet</h1>
            <p>Mission-level visibility across the demo constellation, including health status, propellant posture, and open conjunction activity.</p>
          </div>
        </section>

        <section className="metrics-grid">
          {[
            ["24", "Tracked Spacecraft", "across 4 mission groups"],
            ["5", "Satellites Under Watch", "open conjunction attention"],
            ["1", "Planned Maneuver", "within 24 hours"],
            ["92%", "Fleet Availability", "across active satellites"],
            ["18.6 kg", "Median Fuel Reserve", "remaining across fleet"],
            ["3", "High-Priority Owners", "currently assigned"]
          ].map(([value, label, detail]) => (
            <div className="metric-card" key={label}>
              <span className="metric-label">{label}</span>
              <span className="metric-value">{value}</span>
              <span className="metric-label">{detail}</span>
            </div>
          ))}
        </section>

        <section className="table-card glass-card">
          <div className="panel-header">
            <div className="panel-title">Fleet Status Board</div>
            <span className="muted">Sample constellation data</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Satellite</th>
                  <th>Mission</th>
                  <th>Status</th>
                  <th>Days Since Burn</th>
                  <th>Fuel Reserve</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {fleetRows.map((row) => (
                  <tr key={row[0]}>{row.map((cell) => <td key={`${row[0]}-${cell}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    </DashboardFrame>
  );
}

export function AnalyticsPage() {
  return (
    <DashboardFrame
      activePath="/analytics"
      title="Ephemeris Analytics"
      description="Performance analytics for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Analytics</h1>
            <p>Performance metrics showing how smarter prioritization reduces review time, closes high-risk events faster, and improves team response.</p>
          </div>
        </section>

        <section className="metrics-grid">
          {analyticsHighlights.map(([label, value, detail]) => (
            <div className="metric-card" key={label}>
              <span className="metric-label">{label}</span>
              <span className="metric-value">{value}</span>
              <span className="metric-label">{detail}</span>
            </div>
          ))}
        </section>

        <section className="table-card glass-card">
          <div className="panel-header">
            <div className="panel-title">Operational Efficiency</div>
            <span className="muted">Month-to-date</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Current</th>
                  <th>Baseline</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {analyticsRows.map((row) => (
                  <tr key={row[0]}>{row.map((cell) => <td key={`${row[0]}-${cell}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    </DashboardFrame>
  );
}

export function AuditLogPage() {
  return (
    <DashboardFrame
      activePath="/audit-log"
      title="Ephemeris Audit Log"
      description="Decision audit log for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Audit Log</h1>
            <p>Complete record of operator actions, system updates, and decisions across the mission workflow — ready for compliance review.</p>
          </div>
        </section>

        <section className="table-card glass-card">
          <div className="panel-header">
            <div className="panel-title">Decision History</div>
            <span className="muted">Last 48 hours</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Actor</th>
                  <th>Action</th>
                  <th>Scope</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {auditRows.map((row) => (
                  <tr key={`${row[0]}-${row[2]}`}>{row.map((cell) => <td key={`${row[0]}-${cell}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    </DashboardFrame>
  );
}

export function SettingsPage() {
  return (
    <DashboardFrame
      activePath="/settings"
      title="Ephemeris Settings"
      description="Configuration settings for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Settings</h1>
            <p>Configuration for notifications, event scoring, data sources, and audit retention — all in one place.</p>
          </div>
        </section>

        <section className="operator-grid">
          {settingsCards.map(([title, body]) => (
            <article className="operator-card" key={title}>
              <div className="operator-line" aria-hidden="true"></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </section>
      </>
    </DashboardFrame>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    setSubmitted(true);
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    setTimeout(() => {
      window.location.href = `mailto:EphemerisTech@gmail.com?subject=${subject}&body=${body}`;
    }, 400);
  }

  return (
    <Layout
      title="Contact — Ephemeris"
      description="Get in touch with the Ephemeris team. Questions, partnerships, or early access requests."
    >
      <main>
        <section className="section contact-section">
          <div className="contact-hero">
            <div className="eyebrow">Get in touch</div>
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-subheading">
              Have a question, want to explore a partnership, or need early access? We&rsquo;d love to hear from you.
            </p>
          </div>

          <div className="contact-grid">
            <aside className="contact-info glass-card">
              <h2>Reach us directly</h2>
              <a className="contact-link-item" href="mailto:EphemerisTech@gmail.com">
                <span className="contact-link-icon"><Mail size={18} strokeWidth={1.8} /></span>
                <span>EphemerisTech@gmail.com</span>
              </a>
              <a
                className="contact-link-item"
                href="https://www.linkedin.com/company/ephemeristech/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon"><LinkedinIcon /></span>
                <span>Ephemeris on LinkedIn</span>
              </a>
              <div className="contact-note">
                We typically respond within one business day.
              </div>
            </aside>

            <div className="contact-form-card glass-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon"><Send size={28} strokeWidth={1.6} /></div>
                  <h3>Message sent!</h3>
                  <p>Your email client is opening with the pre-filled message. We&rsquo;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="field">
                    <label htmlFor="c-name">Name <span className="required-mark">*</span></label>
                    <input id="c-name" name="name" type="text" placeholder="Your full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="c-email">Email <span className="required-mark">*</span></label>
                    <input id="c-email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="field">
                    <label htmlFor="c-message">Message <span className="required-mark">*</span></label>
                    <textarea id="c-message" name="message" placeholder="Tell us about your mission, use case, or question..." rows={5} required />
                  </div>
                  <button className="btn btn-primary contact-submit" type="submit">
                    <Send size={16} strokeWidth={2} />
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </Layout>
  );
}
