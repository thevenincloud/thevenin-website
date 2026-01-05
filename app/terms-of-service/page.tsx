import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Legal Agreement',
  description: 'Thevenin Terms of Service: Review our legal terms, conditions, and user agreements for using the Thevenin cloud platform and services.',
  alternates: {
    canonical: 'https://thevenin.io/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background mt-10">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <section className="bg-card/80 border border-border rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-2 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><circle cx="12" cy="12" r="12" fill="currentColor" /></svg>
            Terms Of Service
          </h1>
          <p className="text-muted-foreground text-lg mb-2">Last updated on 06 Oct 2025</p>
          <p className="text-base md:text-lg text-foreground mb-4">
            Welcome to Thevenin (the “Platform”, “we”, “us”, or “our”). These Terms & Conditions (“Terms”) govern your access to and use of <a href="https://thevenin.io" className="link-primary-underline">https://thevenin.io</a>, including our demo, software, applications, and related services (collectively, the “Services”).
          </p>
          <p className="text-base md:text-lg text-foreground mb-4">
            By accessing or using our Services, you agree to these Terms. If you do not agree, do not use the Platform.
          </p>
        </section>

        {/* Section Card */}
        <section className="space-y-8">
          {/* Demo Disclaimer */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              1. Demo Disclaimer & Licensing
            </h2>
            <p className="mb-2 text-base text-foreground">Thevenin provides this online Demo for evaluation purposes only. The Demo is provided "as is" and lacks any guarantees, warranties, or support. The full Thevenin solution is designed to be installed in the client's Cloud environment and is offered under a separate proprietary license agreement.</p>
            <p className="text-sm text-muted-foreground">Your use of the Demo's Services is at your own risk, and you acknowledge that performance, availability, and data persistence are not guaranteed.</p>
          </div>

          {/* Eligibility & Accounts */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              2. Eligibility & Accounts
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>You must be at least 18 years old (or of legal age in your jurisdiction) to use the Services.</li>
              <li>You must register an Account to access most features.</li>
              <li>You agree to provide accurate and complete information during registration and keep it current.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials and any activity under your Account.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Users can access a limited dashboard after login. To unlock main features, two-factor authentication (2FA) is required.</p>
          </div>

          {/* Acceptable Use */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              3. Acceptable Use
            </h2>
            <p className="mb-2 text-base text-foreground">You agree not to:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Use the Platform for unlawful, harmful, or fraudulent purposes.</li>
              <li>Interfere with the security, performance, or integrity of the Services.</li>
              <li>Attempt to reverse-engineer, copy, or exploit the Services.</li>
              <li>Upload or transmit viruses or malicious code.</li>
              <li>Circumvent authentication or access controls.</li>
            </ul>
            <p className="text-sm text-muted-foreground">We reserve the right to suspend or terminate any account that violates these Terms or threatens the integrity of the Platform.</p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              4. Intellectual Property
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>The Platform, including its software, designs, interfaces, text, and code, are owned by or licensed to Thevenin OÜ and protected by intellectual property laws.</li>
              <li>You retain ownership of any content or data you upload (“User Data”).</li>
              <li>You grant Thevenin a limited right to store, process, and use User Data solely to operate and improve the Services.</li>
              <li>The Platform integrates open-source third-party components under their respective licenses, which remain the property of their authors.</li>
            </ul>
          </div>

          {/* Third-Party Services */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              5. Third-Party Services
            </h2>
            <p className="mb-2 text-base text-foreground">Thevenin uses the following third-party services:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Amazon Web Services (AWS) – hosting and infrastructure.</li>
              <li>Brevo (formerly Sendinblue) – email delivery for notifications and verification messages.</li>
              <li>Ory – identity, authentication, and 2FA management.</li>
              <li>Various open-source libraries and frameworks.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Each third party operates under its own terms and privacy policy. Thevenin ensures data processing agreements (DPAs) or appropriate safeguards are in place when applicable.</p>
          </div>

          {/* Privacy & Data */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              6. Privacy & Data
            </h2>
            <p className="mb-2 text-base text-foreground">Your use of the Services is subject to our <a href="/privacy-policy" className="link-primary-underline">Privacy Policy</a>, which explains how we collect, store, and use your data. We implement encryption, 2FA, and access control to protect user information.</p>
            <p className="text-sm text-muted-foreground">While we strive for high security standards, you acknowledge that no online system is completely immune from risk.</p>
          </div>

          {/* Availability & Support */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              7. Availability & Support
            </h2>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>The Platform's Demo may experience downtime, updates, or maintenance.</li>
              <li>We do not guarantee continuous availability or error-free operation.</li>
              <li>We may collect usage metrics and feedback to improve service reliability.</li>
              <li>No dedicated support is provided for the Demo version.</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              8. Limitation of Liability
            </h2>
            <p className="mb-2 text-base text-foreground">The Services are provided “as is” and “as available”, without warranties of any kind. To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Thevenin disclaims all warranties, express or implied, including merchantability, fitness for purpose, and non-infringement.</li>
              <li>Thevenin is not liable for indirect, incidental, or consequential damages, including data loss, downtime, or system errors.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Because this is a Demo service, you agree to use it at your own risk and discretion.</p>
          </div>

          {/* Termination */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              9. Termination
            </h2>
            <p className="mb-2 text-base text-foreground">We may suspend or terminate your access if:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>You breach these Terms,</li>
              <li>We detect unauthorized activity, or</li>
              <li>The Demo access concludes.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Upon termination, we may delete or anonymize your account and related data after a reasonable retention period.</p>
          </div>

          {/* Modifications to Terms */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              10. Modifications to Terms
            </h2>
            <p className="mb-2 text-base text-foreground">We may update these Terms from time to time. Changes will be posted on our website with a new “Last updated” date. Continued use after an update means you accept the revised Terms.</p>
          </div>

          {/* Governing Law */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              11. Governing Law
            </h2>
            <p className="mb-2 text-base text-foreground">These Terms are governed by and construed in accordance with the laws of Estonia. Any disputes will be resolved in the competent courts of Tallinn, Estonia.</p>
          </div>

          {/* Contact */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              12. Contact
            </h2>
            <p className="mb-2 text-base text-foreground">Thevenin OÜ</p>
            <p className="mb-2 text-base text-foreground">Tallinn, Estonia</p>
            <p className="mb-2 text-base text-foreground">
              <a href="mailto:support@thevenin.io" className="link-primary-underline">support@thevenin.io</a>
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
