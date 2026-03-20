import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const metrics = [
  ["47", "Active Conjunctions Tracked"],
  ["24", "Fleet Satellites"],
  ["4.2h", "Avg Response Time"],
  ["87%", "Alert Noise Reduced"]
];

const signalCards = [
  ["Live TCA Window", "7h 30m", "Critical event EphSat-3 vs IRIDIUM 33 debris is already triaged with maneuver review in progress."],
  ["Decision Confidence", "94%", "Operator-facing recommendations surface why an event is urgent instead of just exposing raw CDM volume."],
  ["Audit Completeness", "100%", "Every action, escalation, and rationale is preserved in a mission-ready decision trail."]
];

const operatorPanels = [
  ["Prioritized Queue", "See the events that actually need action first, with risk momentum and maneuverability surfaced immediately."],
  ["Risk Evolution", "Track how probability, miss distance, and urgency shift across updates instead of comparing snapshots manually."],
  ["Decision Support", "Frame maneuver timing, delta-v implications, and review windows in a format operators can act on quickly."],
  ["Mission Oversight", "Monitor fleet health, unresolved alerts, and team response posture from a single operating surface."]
];

const workflowSteps = [
  ["01", "Ingest operational data", "Bring in conjunction messages, orbit updates, and fleet context so every event starts from normalized operational data."],
  ["02", "Score real mission risk", "Rank events using escalation likelihood, object characteristics, time-to-TCA, and decision urgency rather than raw probability alone."],
  ["03", "Focus the operator queue", "Push the most consequential conjunctions to the top while lower-signal events remain visible without overwhelming the team."],
  ["04", "Decide with traceability", "Move from review to action with complete context, documented rationale, and compliance-ready recordkeeping."]
];

const comparisonRows = [
  ["Raw CDM monitoring", "Operators manually sort high-volume alerts with limited decision context.", "Ephemeris surfaces a prioritized queue with urgency, timing, and rationale."],
  ["Snapshot-only tools", "Teams compare updates by hand and infer escalation from scattered data points.", "Risk evolution is visible directly in the workflow with trend-aware framing."],
  ["Fragmented operations", "Alert review, maneuver planning, and audit logging live in separate tools.", "Analysis, action, and traceability live in one integrated mission-control surface."]
];

const trustPoints = [
  "Mission-control visual layer built for operators, not generic dashboards.",
  "Structured decision workflows with audit-ready logging and review context.",
  "Clear separation between active threats, monitor-only events, and planned maneuvers.",
  "Direct bridge into the live product through the homepage PRODUCT action."
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
  ["Conjunction scoring", "Current weighting favors time-to-TCA, secondary object type, covariance realism, and maneuverability."],
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
}

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            <SatelliteMark />
          </span>
          <span className="brand-text">Ephemeris</span>
        </Link>
        <nav className="topnav" aria-label="Primary">
          <a href="/#platform">Platform</a>
          <a href="/#operator-view">Operator View</a>
          <a href="/#workflow">Workflow</a>
          <a href="/#trust">Trust</a>
        </nav>
        <div className="topbar-actions">
          <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">PRODUCT</a>
          <Link className="btn btn-ghost" href="/login">Sign In</Link>
          <Link className="btn btn-primary" href="/login">Get Started</Link>
        </div>
      </div>
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
                Ephemeris turns raw conjunction data into a focused operator workflow. Review the
                highest-risk events first, understand how risk is evolving, and move from alert to
                action with clear audit trails and product-grade mission context.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/dashboard">Launch Dashboard</Link>
                <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">PRODUCT</a>
                <a className="btn btn-secondary" href="#workflow">See Workflow</a>
              </div>
              <div className="hero-note">Built for satellite operators, mission teams, and collision-risk review workflows.</div>
              <div className="hero-stats">
                {metrics.map(([value, label]) => (
                  <div className="metric-card" key={label}>
                    <span className="metric-value">{value}</span>
                    <span className="metric-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-panel glass-card">
              <div className="panel-header">
                <div>
                  <div className="panel-title">Live Operator Snapshot</div>
                  <div className="panel-subtitle">What the team sees when a conjunction starts to escalate</div>
                </div>
                <div className="alert-pill critical">Critical</div>
              </div>
              <div className="orbit-preview">
                <div className="earth" aria-hidden="true"></div>
                <div className="orbit one" aria-hidden="true"></div>
                <div className="orbit two" aria-hidden="true"></div>
                <div className="orbit-dot primary" aria-hidden="true"></div>
                <div className="orbit-dot alert" aria-hidden="true"></div>
              </div>
              <div className="panel-grid">
                {signalCards.map(([label, value, body]) => (
                  <div className="mini-card" key={label}>
                    <span className="metric-label">{label}</span>
                    <strong>{value}</strong>
                    <span className="muted">{body}</span>
                  </div>
                ))}
              </div>
            </aside>
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
          <div className="features-grid">
            {[
              ["AI", "AI Alert Prioritization", "Surface the conjunctions most likely to require action first so operators spend time on decisions, not sorting."],
              ["CDM", "Risk Evolution Tracking", "Show how miss distance, probability, and urgency change across updates to reveal momentum, not just snapshots."],
              ["OPS", "Fleet-Wide Oversight", "Keep fleet health, response load, maneuver posture, and unresolved events visible in one coherent operating surface."],
              ["LOG", "Audit-Ready Decisions", "Capture review context, escalation paths, and outcomes in a traceable log that stands up to compliance scrutiny."],
              ["DV", "Maneuver Framing", "Present timing windows and decision implications in a way that supports fast operator judgment under pressure."],
              ["INT", "Direct Product Access", "A prominently integrated PRODUCT action takes users straight into the live operational experience."]
            ].map(([badge, title, body]) => (
              <article className="feature-card" key={title}>
                <div className="icon-badge">{badge}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
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
          <div className="flow-grid">
            {workflowSteps.map(([step, title, body]) => (
              <article className="flow-card" key={step}>
                <div className="step-badge">{step}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
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
              The product story is sharper when we show the operational difference clearly:
              fewer manual comparisons, less alert noise, and better decision visibility.
            </p>
          </div>
          <div className="comparison-grid">
            {comparisonRows.map(([title, before, after]) => (
              <article className="comparison-card" key={title}>
                <div className="comparison-label">{title}</div>
                <div className="comparison-body">
                  <div>
                    <span className="comparison-heading">Without Ephemeris</span>
                    <p>{before}</p>
                  </div>
                  <div>
                    <span className="comparison-heading accent">With Ephemeris</span>
                    <p>{after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="trust-strip">
            {trustPoints.map((point) => (
              <div className="trust-item" key={point}>{point}</div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-wrap footer-card glass-card">
          <div>
            <strong>Ephemeris</strong>
            <div className="muted">Satellite collision avoidance intelligence designed around real operator workflow.</div>
          </div>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <a className="btn btn-ghost" href="/">Privacy</a>
            <a className="btn btn-ghost" href="/">Terms</a>
            <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">PRODUCT</a>
          </div>
        </div>
      </footer>
    </Layout>
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
          <div className="brand" style={{ justifyContent: "center", marginBottom: 22 }}>
            <span className="brand-mark" aria-hidden="true"><SatelliteMark /></span>
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

function DashboardSidebar({ activePath }) {
  return (
    <aside className="sidebar glass-card">
      <Link className="brand" href="/dashboard">
        <span className="brand-mark" aria-hidden="true"><SatelliteMark /></span>
        <span className="brand-text" style={{ fontSize: "1.45rem" }}>Ephemeris</span>
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
  return (
    <Layout title={title} description={description} showHeader={false}>
      <div className="dashboard-shell">
        <DashboardSidebar activePath={activePath} />
        <main className="dashboard-main">{children}</main>
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
              <p>Fleet-wide collision avoidance intelligence with a direct bridge into the live Nolan ephemeris product. Last updated 10:30 UTC.</p>
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
      description="Dummy alert queue for the Ephemeris collision monitoring interface."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Alerts</h1>
            <p>Live-style dummy alert queue with severity-based triage, operator notes, and recommended next actions.</p>
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
              <span className="muted">Dummy workflow</span>
            </div>
            <div className="features-grid single-column-grid">
              {[
                ["Triage", "Confirm event ownership and review the top two critical conjunctions within the next 30 minutes."],
                ["Coordinate", "Share maneuver assumptions with flight dynamics and mark any object covariance concerns."],
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
                  ["CDM-2026-04821", "Critical", "Marcus Hill", "Waiting on covariance check", "12 min ago"],
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
      description="Dummy fleet status view for the Ephemeris dashboard."
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
            ["92%", "Fleet Availability", "based on dummy uptime"],
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
            <span className="muted">Dummy operational data</span>
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
      description="Dummy analytics view for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Analytics</h1>
            <p>Dummy performance analytics showing how prioritization improves review speed, escalations, and mission response quality.</p>
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
            <span className="muted">Dummy month-to-date trend</span>
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
      description="Dummy audit log for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Audit Log</h1>
            <p>Traceable dummy records for operator actions, system updates, and queue changes across the mission-control workflow.</p>
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
      description="Dummy settings view for the Ephemeris dashboard."
    >
      <>
        <section className="dashboard-card glass-card">
          <div className="page-hero" style={{ marginBottom: 0 }}>
            <h1 style={{ fontSize: "2rem" }}>Settings</h1>
            <p>Dummy configuration panels for notifications, scoring logic, data sources, and audit retention policy.</p>
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
