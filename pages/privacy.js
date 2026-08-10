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
              Ephemeris is currently in design-partner testing. This page will be replaced with a
              full privacy policy covering what data we collect from operators and their fleets,
              how conjunction data messages and account information are stored, who we share data
              with, and how to request deletion, before the product opens beyond design partners.
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
