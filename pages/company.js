import Link from "next/link";
import { Layout, SiteFooter } from "../components/AppShell";

export default function CompanyPage() {
  return (
    <Layout
      title="Ephemeris | Company"
      description="Ephemeris is building the AI operating system for satellite maneuvering."
    >
      <main>
        <section className="page-wrap">
          <div className="page-hero">
            <h1>Company</h1>
            <p>
              Ephemeris is building the AI operating system for satellite maneuvering: turning
              orbital risk and mission data into prioritized, explainable maneuver decisions for
              satellite operators.
            </p>
          </div>
          <div style={{ maxWidth: 720, color: "var(--muted)", lineHeight: 1.8, display: "grid", gap: 20 }}>
            <p>
              We&rsquo;re starting with collision avoidance, the wedge where operators feel the
              decision bottleneck most acutely, and building toward a broader operating layer for
              maneuver decisions across a fleet&rsquo;s lifecycle.
            </p>
            <p>
              Today, we&rsquo;re working with a small number of design-partner operators to shape
              the product around real maneuver decisions rather than assumptions. If that&rsquo;s
              you, or you want to talk about what we&rsquo;re building, get in{" "}
              <Link href="/contact" style={{ color: "var(--accent-strong)" }}>touch</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </Layout>
  );
}
