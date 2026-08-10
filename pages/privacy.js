import { Layout, SiteFooter } from "../components/AppShell";

export default function PrivacyPage() {
  return (
    <Layout
      title="Ephemeris | Privacy Policy"
      description="How Ephemeris collects, uses, and protects data."
    >
      <main>
        <section className="page-wrap">
          <div className="page-hero">
            <h1>Privacy policy</h1>
            <p>Placeholder. Pending legal review. Last updated August 2026.</p>
          </div>
          <div style={{ maxWidth: 720, color: "var(--muted)", lineHeight: 1.8, display: "grid", gap: 20 }}>
            <p>
              Ephemeris is currently in design-partner testing.<br />
              A full privacy policy is coming before the product opens more broadly.<br />
              It will cover what data we collect, how it&rsquo;s stored, who we share it with, and how to request deletion.
            </p>
            <p>
              Until then, treat any data shared with Ephemeris as covered by your individual
              design-partner agreement. Questions go to{" "}
              <a href="mailto:EphemerisTech@gmail.com" style={{ color: "var(--accent-strong)" }}>
                EphemerisTech@gmail.com
              </a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </Layout>
  );
}
