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
              Ephemeris is building the AI operating system for satellite maneuvering. We turn
              orbital risk and mission data into explainable maneuver decisions.
            </p>
          </div>
          <div style={{ maxWidth: 720, color: "var(--muted)", lineHeight: 1.8, display: "grid", gap: 20 }}>
            <p>
              We&rsquo;re starting with collision avoidance, the sharpest decision bottleneck
              operators feel today. From there, we&rsquo;re building toward maneuver decisions
              across a fleet&rsquo;s full lifecycle.
            </p>
            <p>
              Today, we&rsquo;re working with a small group of design-partner operators to shape
              the product. If that&rsquo;s you, or you&rsquo;d like to talk, get in{" "}
              <Link href="/contact" style={{ color: "var(--accent-strong)" }}>touch</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </Layout>
  );
}
