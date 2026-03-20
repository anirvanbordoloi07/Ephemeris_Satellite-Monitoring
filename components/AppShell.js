import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const metrics = [
  ["47", "Active Conjunctions Tracked"],
  ["24", "Fleet Satellites"],
  ["4.2h", "Avg Response Time"],
  ["87%", "Alert Noise Reduced"]
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
          <a href="/#features">Features</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#pricing">Pricing</a>
        </nav>
        <div className="topbar-actions">
          <Link className="btn btn-ghost" href="/login">Sign In</Link>
          <Link className="btn btn-primary" href="/login">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export function Layout({ title, description, children }) {
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
        <Header />
        {children}
      </div>
    </>
  );
}

export function HomePage() {
  return (
    <Layout
      title="Ephemeris - Satellite Collision Avoidance Intelligence"
      description="Decision intelligence for satellite safety with a seamlessly integrated product bridge into the Nolan ephemeris experience."
    >
      <main>
        <section className="hero">
          <div className="section hero-centered">
            <div className="eyebrow">Real-time conjunction analysis</div>
            <h1>Decision Intelligence for <span>Satellite Safety</span></h1>
            <p>
              Ephemeris transforms raw conjunction data into prioritized, actionable intelligence.
              Our AI engine cuts through alert noise so your team can focus on decisions that matter
              with full audit trails for compliance.
            </p>
            <div className="hero-actions hero-actions-centered">
              <Link className="btn btn-primary" href="/dashboard">Launch Dashboard</Link>
              <a className="btn btn-product" href="https://ephemeris-nine.vercel.app/" target="_blank" rel="noreferrer">PRODUCT</a>
              <a className="btn btn-secondary" href="#how-it-works">See How It Works</a>
            </div>
            <div className="hero-stats">
              {metrics.map(([value, label]) => (
                <div className="metric-card" key={label}>
                  <span className="metric-value">{value}</span>
                  <span className="metric-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <h2>The Analysis-to-Action Layer</h2>
            <p>
              Ephemeris sits between raw data and critical decisions. We close the gap that existing tools leave open
              and turn data overload into decision clarity.
            </p>
          </div>
          <div className="features-grid">
            {[
              ["AI", "AI Alert Prioritization", "Focus operators on the conjunctions most likely to escalate instead of drowning them in raw alert volume."],
              ["CDM", "Risk Evolution Tracking", "Track how probability and miss distance evolve across updates so the team sees risk momentum, not just snapshots."],
              ["OPS", "Fleet-Wide Analytics", "Monitor constellation health, maneuver history, and response metrics from one coherent mission-control surface."],
              ["LOG", "Audit-Ready Compliance", "Capture decision context with timestamps and generate insurance- and regulator-friendly audit trails."],
              ["DV", "Maneuver Decision Support", "Pair operator workflows with delta-v framing, timing windows, and clean escalation language."],
              ["INT", "Integrated Product Experience", "The new product bridge folds the Nolan ephemeris tool into this experience instead of leaving it disconnected."]
            ].map(([badge, title, body]) => (
              <article className="feature-card" key={title}>
                <div className="icon-badge">{badge}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-heading">
            <h2>From Raw Data to Confident Decisions</h2>
            <p>
              Four steps from CDM ingestion to audit-logged action. No manual sorting, no alert fatigue, no compliance gaps.
            </p>
          </div>
          <div className="flow-grid">
            {[
              ["01", "Ingest", "CDMs from Space-Track, LeoLabs, and commercial providers flow into Ephemeris in real time. Every data point is parsed, normalized, and correlated with your fleet."],
              ["02", "Analyze", "Our AI engine scores each conjunction event using multiple risk factors: object type, maneuverability, covariance realism, trajectory history, and time-to-TCA."],
              ["03", "Prioritize", "Alerts are ranked by risk escalation likelihood. Your team sees a focused queue of actionable events instead of hundreds of unfiltered warnings."],
              ["04", "Decide", "Approve, defer, or initiate maneuvers through structured workflows. Every decision is logged with full context for compliance and insurance records."]
            ].map(([step, title, body]) => (
              <article className="flow-card" key={step}>
                <div className="step-badge">{step}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading">
            <h2>Protect Your Fleet</h2>
            <p>Transparent per-fleet pricing. No per-CDM charges, no hidden fees.</p>
          </div>
          <div className="pricing-grid">
            {[
              ["Starter", "For operators with small constellations", "$2,500", "/mo", ["Up to 5 satellites", "Real-time CDM ingestion", "AI alert prioritization", "Basic audit logging", "Email notifications"]],
              ["Professional", "For growing fleet operators", "$8,000", "/mo", ["Up to 50 satellites", "Advanced risk evolution analytics", "Maneuver decision workflows", "Full audit trail with PDF export", "API access"], true],
              ["Enterprise", "For large constellations and insurers", "Custom", "", ["Unlimited satellites", "SSO / SAML integration", "Insurance-grade compliance reports", "Ground system API integration", "Dedicated support"]]
            ].map(([title, desc, price, suffix, bullets, featured]) => (
              <article className={`pricing-card${featured ? " featured" : ""}`} key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="price">{price} {suffix ? <span>{suffix}</span> : null}</div>
                <ul>
                  {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-wrap footer-card glass-card">
          <div>
            <strong>Ephemeris</strong>
            <div className="muted">Satellite Collision Avoidance Intelligence. Built for operators, trusted by insurers.</div>
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

export function DashboardPage() {
  return (
    <Layout
      title="Ephemeris Mission Control"
      description="Mission control dashboard for the migrated Ephemeris product experience."
    >
      <div className="dashboard-shell">
        <aside className="sidebar glass-card">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true"><SatelliteMark /></span>
            <span className="brand-text" style={{ fontSize: "1.45rem" }}>Ephemeris</span>
          </Link>
          <nav>
            <Link className="active" href="/dashboard">Overview</Link>
            <Link href="/">Alerts</Link>
            <Link href="/">Fleet</Link>
            <Link href="/">Analytics</Link>
            <Link href="/">Audit Log</Link>
            <Link href="/">Settings</Link>
          </nav>
          <div className="profile">
            <div className="muted">3 Notifications</div>
            <strong>Sarah Chen</strong>
            <div className="muted">Fleet Manager</div>
          </div>
        </aside>

        <main className="dashboard-main">
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
                <Link className="muted" href="/">View all</Link>
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
        </main>
      </div>
    </Layout>
  );
}
