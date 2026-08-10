import { Layout, SiteFooter } from "../components/AppShell";

export default function TermsPage() {
  return (
    <Layout
      title="Ephemeris | Terms of Service"
      description="Terms governing use of Ephemeris."
    >
      <main>
        <section className="page-wrap">
          <div className="page-hero">
            <h1>Terms of service</h1>
            <p>Placeholder. Pending legal review. Last updated August 2026.</p>
          </div>
          <div style={{ maxWidth: 720, color: "var(--muted)", lineHeight: 1.8, display: "grid", gap: 20 }}>
            <p>
              Ephemeris works with a small group of design-partner operators today.<br />
              Full terms of service, covering acceptable use, availability, and liability, are coming before wider release.
            </p>
            <p>
              Until then, use of Ephemeris is governed by your individual design-partner agreement.
              Questions go to{" "}
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
