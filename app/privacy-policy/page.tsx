import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & Security',
  description: 'Thevenin Privacy Policy: Learn how we protect your data, ensure GDPR compliance, and maintain the highest security standards for your information.',
  alternates: {
    canonical: 'https://thevenin.io/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background mt-10">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <section className="bg-card/80 border border-border rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-2 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><circle cx="12" cy="12" r="12" fill="currentColor" /></svg>
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg mb-2">Last updated on 06 Oct 2025</p>
          <p className="text-base md:text-lg text-foreground mb-4">
            This Privacy Policy describes how Thevenin OÜ (“Thevenin”, “we”, “our”, “us”) collects, processes, and protects your personal data when you use our website and beta services at <a href="https://thevenin.io" className="text-primary underline">https://thevenin.io</a> (the “Platform”).
          </p>
          <p className="text-base md:text-lg text-foreground mb-4">
            We are committed to protecting your privacy and complying with the EU General Data Protection Regulation (GDPR) and Estonian data protection laws.
          </p>
        </section>

        {/* Section Card */}
        <section className="space-y-8">
          {/* Data We Collect */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              1. Data We Collect
            </h2>
            <p className="mb-2 text-base text-foreground">We may collect the following categories of data:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-1 text-primary">Account Data</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Email address</li>
                  <li>Encrypted password (managed by our self-hosted Ory Kratos instance)</li>
                  <li>Two-factor authentication (2FA) setup details (e.g., secret keys or verification tokens)</li>
                  <li>Account status and session information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-primary">Usage Data</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>IP address, browser type, device information</li>
                  <li>Login timestamps, dashboard activity, and feature interactions</li>
                  <li>Error logs for debugging and performance improvement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-primary">Communication Data</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Support inquiries and feedback messages</li>
                  <li>Transactional emails and service updates sent via Brevo (Sendinblue)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">We do not collect payment data, as no paid features are available during Beta.</p>
          </div>

          {/* How We Use Your Data */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Create and manage your user account via Ory Kratos.</li>
              <li>Authenticate users and 2FA for secure access.</li>
              <li>Provide, maintain, and improve the Platform.</li>
              <li>Send service-related notifications and status updates (via Brevo).</li>
              <li>Diagnose technical issues and enhance reliability.</li>
              <li>Comply with legal obligations and ensure system integrity.</li>
            </ul>
            <p className="text-sm text-muted-foreground">We do not use your data for advertising or profiling.</p>
          </div>

          {/* Data Storage & Security */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              3. Data Storage & Security
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>All data is securely stored on AWS servers located in the European Union.</li>
              <li>Ory - identity, so no user credentials or personal data are shared with Ory GmbH.</li>
              <li>We implement encryption, 2FA, and strict access control policies.</li>
              <li>Access to production data is limited to authorized personnel.</li>
            </ul>
            <p className="text-sm text-muted-foreground">While we maintain strong safeguards, no online service is entirely immune from security risks.</p>
          </div>

          {/* Data Sharing */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              4. Data Sharing
            </h2>
            <p className="mb-2 text-base text-foreground">We do not sell or rent personal data. Limited data may be shared with:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>AWS – for hosting and storage.</li>
              <li>Brevo (Sendinblue) – for sending account and system emails.</li>
              <li>Open-source components – used internally under applicable licenses.</li>
            </ul>
            <p className="text-sm text-muted-foreground">All third parties are required to comply with GDPR and data protection agreements.</p>
          </div>

          {/* Data Retention */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              5. Data Retention
            </h2>
            <p className="mb-2 text-base text-foreground">We retain your data only as long as necessary to operate the Beta Services, improve functionality, or comply with legal requirements. When Beta testing ends or your account is deleted, we will anonymize or erase your data within a reasonable timeframe.</p>
          </div>

          {/* Your Rights (GDPR) */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              6. Your Rights (GDPR)
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Access your data and receive a copy.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Request deletion of your data (“right to be forgotten”).</li>
              <li>Restrict or object to processing.</li>
              <li>Data portability (export your data).</li>
              <li>Lodge a complaint with the Estonian Data Protection Inspectorate.</li>
            </ul>
            <p className="text-sm text-muted-foreground">You can exercise your rights by contacting: <a href="mailto:support@thevenin.io" className="text-primary underline">support@thevenin.io</a></p>
          </div>

          {/* Cookies */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              7. Cookies
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Authentication and session management.</li>
              <li>Security and CSRF protection.</li>
            </ul>
            <p className="text-sm text-muted-foreground">We do not use marketing or tracking cookies during the Beta phase.</p>
          </div>

          {/* International Data Transfers */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              8. International Data Transfers
            </h2>
            <p className="mb-2 text-base text-foreground">All data is primarily processed and stored in the EU (AWS EU regions). If any data transfer outside the EU becomes necessary, we ensure adequate safeguards in compliance with GDPR Articles 45–46 (e.g., Standard Contractual Clauses).</p>
          </div>

          {/* Updates to This Policy */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              9. Updates to This Policy
            </h2>
            <p className="mb-2 text-base text-foreground">We may revise this Privacy Policy from time to time. Any updates will be posted on this page with a new “Last updated” date.</p>
          </div>

          {/* Contact Us */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              10. Contact Us
            </h2>
            <p className="mb-2 text-base text-foreground">Thevenin OÜ</p>
            <p className="mb-2 text-base text-foreground">Tallinn, Estonia</p>
            <p className="mb-2 text-base text-foreground">
              <a href="mailto:support@thevenin.io" className="text-primary underline">support@thevenin.io</a>
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Thevenin OÜ, a company registered in Estonia under Registration Number: EE102770885 and with Registered Address at Harju maakond, Tallinn, Põhja-Tallinna linnaosa, Tööstuse tn 75-71, 10416, Estonia.
          </p>
        </footer>
      </main>
      <Footer />
    </div>
  )
}
