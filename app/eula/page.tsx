import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'End User License Agreement (EULA) - Thevenin',
  description: 'Thevenin End User License Agreement: Review the terms and conditions for using our cloud platform software and services.',
  alternates: {
    canonical: 'https://thevenin.io/eula',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EULA() {
  return (
    <div className="min-h-screen bg-background mt-10">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <section className="bg-card/80 border border-border rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-2 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><circle cx="12" cy="12" r="12" fill="currentColor" /></svg>
            End User License Agreement
          </h1>
          <p className="text-muted-foreground text-lg mb-2">Last updated on 06 Dec 2024</p>
          <p className="text-base md:text-lg text-foreground mb-4">
            This End User License Agreement ("EULA") is a legal agreement between you ("User", "you", or "your") and Thevenin OÜ ("Thevenin", "we", "our", or "us") for the use of the Thevenin cloud platform and related software, applications, and services (collectively, the "Software").
          </p>
          <p className="text-base md:text-lg text-foreground mb-4">
            By accessing, downloading, installing, or using the Software, you agree to be bound by the terms of this EULA. If you do not agree to these terms, do not use the Software.
          </p>
        </section>

        {/* Section Cards */}
        <section className="space-y-8">
          {/* Grant of License */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              1. Grant of License
            </h2>
            <p className="mb-2 text-base text-foreground">Subject to your compliance with this EULA, Thevenin grants you a limited, non-exclusive, non-transferable, revocable license to:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Access and use the Software for your internal business purposes.</li>
              <li>Install and use any client applications provided by Thevenin on devices you own or control.</li>
              <li>Use the Software in accordance with our documentation and usage guidelines.</li>
            </ul>
            <p className="text-sm text-muted-foreground">This license does not transfer any ownership rights to you. All rights not expressly granted are reserved by Thevenin.</p>
          </div>

          {/* License Restrictions */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              2. License Restrictions
            </h2>
            <p className="mb-2 text-base text-foreground">You agree NOT to:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Copy, modify, adapt, translate, or create derivative works of the Software.</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to discover the source code of the Software.</li>
              <li>Rent, lease, sell, sublicense, distribute, or transfer the Software to any third party.</li>
              <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Software.</li>
              <li>Use the Software for any unlawful purpose or in violation of any applicable laws or regulations.</li>
              <li>Attempt to gain unauthorized access to any systems, networks, or data through the Software.</li>
              <li>Interfere with or disrupt the integrity or performance of the Software or its related systems.</li>
              <li>Use the Software to transmit viruses, malware, or other harmful code.</li>
            </ul>
          </div>

          {/* Demo and BYOC Model */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              3. Demo and BYOC Model
            </h2>
            <p className="mb-2 text-base text-foreground">The Software is available for demonstration and testing purposes under a Bring Your Own Cloud (BYOC) model. You acknowledge and agree that:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>The demo environment is provided for evaluation and testing of the Software's capabilities.</li>
              <li>Full production use requires deployment under the BYOC model, where you provide and manage your own cloud infrastructure.</li>
              <li>The Software may contain bugs, errors, or defects and may not function as intended during the demo phase.</li>
              <li>Features and functionality may be modified or discontinued at any time.</li>
              <li>You are responsible for your own cloud infrastructure, costs, and data management when using the BYOC model.</li>
              <li>The Software is provided "AS IS" without warranties of any kind.</li>
            </ul>
            <p className="text-sm text-muted-foreground">For production deployments using BYOC, we recommend implementing proper backup strategies and security measures within your own cloud infrastructure.</p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              4. Intellectual Property Rights
            </h2>
            <p className="mb-2 text-base text-foreground">Thevenin and its licensors retain all right, title, and interest in and to the Software, including all intellectual property rights. This includes:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>All software code, algorithms, architectures, and designs.</li>
              <li>Trademarks, service marks, logos, and brand names.</li>
              <li>Documentation, user interfaces, and visual designs.</li>
              <li>All modifications, updates, and derivative works.</li>
            </ul>
            <p className="text-sm text-muted-foreground">You retain ownership of your data and content that you upload or create using the Software.</p>
          </div>

          {/* User Data and Privacy */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              5. User Data and Privacy
            </h2>
            <p className="mb-2 text-base text-foreground">Your use of the Software is also governed by our Privacy Policy. You agree that:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Thevenin may collect and process your data as described in our <a href="/privacy-policy" className="link-primary-underline">Privacy Policy</a>.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You will only upload or process data that you have the right to use.</li>
              <li>You will comply with all applicable data protection and privacy laws (including GDPR).</li>
            </ul>
          </div>

          {/* Updates and Modifications */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              6. Updates and Modifications
            </h2>
            <p className="mb-2 text-base text-foreground">Thevenin may, at its sole discretion:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Provide updates, patches, or new versions of the Software.</li>
              <li>Modify, suspend, or discontinue any features or the entire Software.</li>
              <li>Change the terms of this EULA with or without notice.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Your continued use of the Software after any such changes constitutes acceptance of the modified terms.</p>
          </div>

          {/* Term and Termination */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              7. Term and Termination
            </h2>
            <p className="mb-2 text-base text-foreground">This EULA is effective until terminated. We may terminate or suspend your access immediately, without prior notice, if:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>You breach any provision of this EULA.</li>
              <li>We discontinue the Demo program or the Software.</li>
              <li>Required by law or regulation.</li>
            </ul>
            <p className="mb-2 text-base text-foreground">Upon termination:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Your license to use the Software immediately ceases.</li>
              <li>You must cease all use of the Software and destroy all copies.</li>
              <li>Thevenin may delete your account and associated data in accordance with our data retention policies.</li>
            </ul>
          </div>

          {/* Disclaimer of Warranties */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              8. Disclaimer of Warranties
            </h2>
            <p className="mb-2 text-base text-foreground font-semibold">THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
            <p className="mb-2 text-base text-foreground">To the maximum extent permitted by law, Thevenin disclaims all warranties, including but not limited to:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
              <li>Warranties regarding accuracy, reliability, or completeness of the Software.</li>
              <li>Warranties that the Software will be error-free, secure, or uninterrupted.</li>
              <li>Warranties regarding data loss prevention or backup reliability.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not fully apply to you.</p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              9. Limitation of Liability
            </h2>
            <p className="mb-2 text-base text-foreground font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW, THEVENIN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Loss of profits, revenue, data, or business opportunities.</li>
              <li>Service interruptions or system downtime.</li>
              <li>Costs of procurement of substitute goods or services.</li>
              <li>Any other damages arising out of or related to your use of the Software.</li>
            </ul>
            <p className="mb-2 text-base text-foreground">In no event shall Thevenin's total liability exceed the amount paid by you (if any) for access to the Software in the 12 months preceding the claim.</p>
            <p className="text-sm text-muted-foreground">Some jurisdictions do not allow the limitation or exclusion of liability, so the above limitations may not apply to you.</p>
          </div>

          {/* Indemnification */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              10. Indemnification
            </h2>
            <p className="mb-2 text-base text-foreground">You agree to indemnify, defend, and hold harmless Thevenin, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
            <ul className="list-disc pl-5 text-base space-y-2 mb-2">
              <li>Your use or misuse of the Software.</li>
              <li>Your violation of this EULA or any applicable laws.</li>
              <li>Your violation of any third-party rights, including intellectual property or privacy rights.</li>
              <li>Any data or content you upload, transmit, or process using the Software.</li>
            </ul>
          </div>

          {/* Export Compliance */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              11. Export Compliance
            </h2>
            <p className="mb-2 text-base text-foreground">You agree to comply with all applicable export and import control laws and regulations, including those of the European Union and your country of residence. You may not use or export the Software in violation of any embargo, sanction, or other legal restriction.</p>
          </div>

          {/* Governing Law and Jurisdiction */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              12. Governing Law and Jurisdiction
            </h2>
            <p className="mb-2 text-base text-foreground">This EULA shall be governed by and construed in accordance with the laws of Estonia, without regard to its conflict of law provisions. Any disputes arising under or in connection with this EULA shall be subject to the exclusive jurisdiction of the courts of Estonia.</p>
          </div>

          {/* Severability */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              13. Severability
            </h2>
            <p className="mb-2 text-base text-foreground">If any provision of this EULA is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be replaced with a valid provision that most closely approximates the intent of the original provision.</p>
          </div>

          {/* Entire Agreement */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              14. Entire Agreement
            </h2>
            <p className="mb-2 text-base text-foreground">This EULA, together with our Privacy Policy and Terms of Service, constitutes the entire agreement between you and Thevenin regarding the Software and supersedes all prior or contemporaneous agreements, communications, and understandings.</p>
          </div>

          {/* Contact Information */}
          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 shadow">
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block text-primary"><rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" /></svg>
              15. Contact Information
            </h2>
            <p className="mb-2 text-base text-foreground">If you have any questions about this EULA, please contact us:</p>
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
