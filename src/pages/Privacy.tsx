import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, FileText, Mail, Clock, BookOpen } from "lucide-react";

const navSections = [
{ id: "who-we-are", label: "1. Who We Are & Our Roles" },
{ id: "data-we-collect", label: "2. Data We Collect" },
{ id: "how-we-use", label: "3. How We Use Data" },
{ id: "cookies", label: "4. Cookies & Analytics" },
{ id: "sharing", label: "5. Sharing & Transfers" },
{ id: "security", label: "6. Security" },
{ id: "retention", label: "7. Retention" },
{ id: "your-rights", label: "8. Your Rights" },
{ id: "contact", label: "9. Contact Us" }];


export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy & Data Protection Policy | Unity Spirit Partners</title>
        <meta name="description" content="Unity Spirit Partners' Privacy & Data Protection Policy. Learn how we collect, use, share, and protect personal data, and how to exercise your privacy rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, personal data, security, Unity Spirit Partners" />
        <link rel="canonical" href="https://unityspiritpartners.com/privacy-policy" />
        <meta property="og:title" content="Privacy & Data Protection Policy | Unity Spirit Partners" />
        <meta property="og:description" content="Unity Spirit Partners' Privacy & Data Protection Policy. Learn how we collect, use, share, and protect personal data." />
        <meta property="og:url" content="https://unityspiritpartners.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy & Data Protection Policy | Unity Spirit Partners" />
        <meta name="twitter:description" content="Unity Spirit Partners' Privacy & Data Protection Policy. Learn how we collect, use, share, and protect personal data." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Legal & Compliance</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Privacy & Data Protection Policy</h1>
            <p className="text-lg text-muted-foreground mb-6">
              How Unity Spirit Partners collects, uses, shares, and protects personal data.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-12">
              <span className="flex items-center gap-1.5"><Clock size={14} /> Last Updated: March 3, 2026</span>
              <span>⏱️ ~8 min read</span>
              <span className="flex items-center gap-1.5"><Shield size={14} /> Security-first operations</span>
            </div>

            {/* Quick Navigation */}
            <div className="rounded-lg border border-border bg-card p-6 mb-12">
              <h2 className="text-base font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
                <FileText size={16} className="text-primary" /> Quick Navigation
              </h2>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navSections.map((s) =>
                <a key={s.id} href={`#${s.id}`} className="text-sm text-primary hover:text-primary/80 underline transition-colors">
                    {s.label}
                  </a>
                )}
              </nav>
            </div>

            {/* Body */}
            <div className="space-y-12 text-muted-foreground leading-relaxed">
              {/* Intro */}
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <p>
                  Unity Spirit Partners Inc. ("Unity Spirit," "we," "us") provides AI automation, agentic workflows, and practical security hardening services.
                  This policy explains how we handle personal data across our website, marketing, sales, and service delivery.
                </p>
                <p className="mt-3">
                  If you have a separate Data Processing Agreement (DPA) with us, the DPA governs processing performed on your behalf.
                </p>
              </div>

              {/* 1 */}
              <div id="who-we-are" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">1. Who We Are & Our Roles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Controller (Website, Sales, Marketing)</h3>
                    <p className="text-sm">
                      For personal data collected via our website, inbound forms, newsletter subscriptions, and sales communications, we typically act as the <strong className="text-foreground">data controller</strong>.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Processor (Client Service Delivery)</h3>
                    <p className="text-sm">
                      When we provide services and process personal data on your instructions (e.g., within your CRM, email, ERP, or ticketing tools), we act as a <strong className="text-foreground">data processor</strong>. Processing terms are governed by our contract and (where applicable) a DPA.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <strong className="text-foreground">Important:</strong> If you are our client and we process data about your customers, employees, or end users, you are usually the controller for that data. You must ensure you have a lawful basis to provide it to us and to instruct processing.
                </div>
              </div>

              {/* 2 */}
              <div id="data-we-collect" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">2. Personal Data We Collect</h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">📝 Data You Provide</h3>
                    <ul className="list-disc pl-6 space-y-1.5 text-sm">
                      <li>Contact details (name, business email, phone number, company, job title)</li>
                      <li>Sales and support communications (messages, meeting notes, attachments you send)</li>
                      <li>Billing and contracting details needed to provide services</li>
                      <li>Identity verification information only where legally required (minimized access and retention)</li>
                      <li>Call recordings where permitted by law and where we provide notice at the start of the call</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">💻 Data Collected Automatically</h3>
                    <ul className="list-disc pl-6 space-y-1.5 text-sm">
                      <li>Device and browser information; IP address (and approximate location derived from IP)</li>
                      <li>Usage data (pages visited, URLs, timestamps, navigation paths, referrers)</li>
                      <li>Cookie identifiers and preference data (subject to your consent choices)</li>
                      <li>Security and anti-abuse signals (e.g., rate-limiting, suspicious activity indicators)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                    <strong className="text-foreground">⚠️ Please don't send sensitive data unless necessary.</strong> Unless explicitly required for a specific engagement, do not submit sensitive personal information (e.g., government IDs, health data, biometrics). If processing sensitive data is required, we handle it under stricter contractual and security controls.
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div id="how-we-use" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">3. How We Use Your Data (and Lawful Bases)</h2>
                <div className="space-y-4">
                  {[
                  { icon: "🔧", title: "Service delivery & account administration", basis: "contract / steps prior to contract", desc: "We use data to provide services, manage accounts, coordinate with your team, and process invoices." },
                  { icon: "🛡️", title: "Security, fraud prevention, and platform integrity", basis: "legitimate interests and/or legal obligations", desc: "We protect accounts, investigate suspicious activity, and maintain logs where appropriate." },
                  { icon: "📧", title: "Marketing & communications", basis: "consent where required, otherwise legitimate interests (B2B), always subject to opt-out", desc: "You can unsubscribe anytime via links in emails or by contacting us." },
                  { icon: "⚖️", title: "Legal compliance", basis: "legal obligation", desc: "We may process data to comply with lawful requests, accounting rules, and applicable regulations." }].
                  map((item) =>
                  <div key={item.title} className="rounded-lg border border-border p-5 space-y-2">
                      <h3 className="text-base font-heading font-medium text-foreground">{item.icon} {item.title}</h3>
                      <p className="text-sm"><strong className="text-foreground">Basis:</strong> {item.basis}. {item.desc}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 4 */}
              <div id="cookies" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">4. Cookies & Analytics</h2>
                <p>
                  We use cookies and similar technologies for essential site functionality, security, and (if enabled) analytics and marketing. You can manage cookie preferences via our cookie banner or browser settings.
                </p>
                <p className="text-sm">If you disable certain cookies, some features may not function properly.</p>
                <p className="text-sm mt-2">
                  For full details on the cookies we use, how to manage them, and your consent choices, please see our{" "}
                  <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80 transition-colors">Cookie Policy</Link>.
                </p>
              </div>

              {/* 5 */}
              <div id="sharing" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">5. Sharing, Subprocessors & International Transfers</h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">We do not sell your personal information</h3>
                    <p className="text-sm">We do not sell personal data. We may share personal data only as needed to run our business and deliver services.</p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Service providers (subprocessors)</h3>
                    <p className="text-sm">We use vetted providers for hosting, email, billing, analytics, CRM, and security tooling. Providers are contractually required to protect data and use it only for agreed purposes.</p>
                    <p className="text-sm">If you are a client, you may request a list of key subprocessors relevant to your engagement.</p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">International transfers</h3>
                    <p className="text-sm">If personal data is transferred internationally, we use appropriate safeguards such as Standard Contractual Clauses (SCCs), adequacy decisions, or other lawful mechanisms, and implement supplementary measures where appropriate.</p>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div id="security" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">6. Security</h2>
                <p>
                  We use administrative, technical, and organizational safeguards designed to protect personal data against unauthorized access, alteration, disclosure, or destruction. Controls may include access control (least privilege), encryption in transit, logging, endpoint protection, secure development practices, and vendor risk review.
                </p>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <strong className="text-foreground">Incident notifications:</strong> Where required by law, we notify regulators and affected individuals in accordance with applicable timelines and risk thresholds. Under GDPR, notifiable breaches must be reported to the competent supervisory authority within 72 hours of awareness.
                </div>
              </div>

              {/* 7 */}
              <div id="retention" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">7. Data Retention</h2>
                <p>
                  We retain personal data only as long as necessary for the purposes described in this policy, including to provide services, comply with legal obligations, resolve disputes, and enforce agreements.
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm">
                  <li><strong className="text-foreground">Sales inquiries:</strong> typically up to 24 months after last interaction</li>
                  <li><strong className="text-foreground">Active client data:</strong> for the term of the agreement; post-termination retention varies by contract and legal requirements</li>
                  <li><strong className="text-foreground">Billing/tax records:</strong> retained as required by applicable law</li>
                  <li><strong className="text-foreground">Security logs:</strong> retained for a limited period appropriate to investigate incidents and maintain integrity</li>
                </ul>
              </div>

              {/* 8 */}
              <div id="your-rights" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">8. Your Rights</h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">GDPR/UK GDPR rights (where applicable)</h3>
                    <p className="text-sm">You may have rights including access, rectification, erasure, restriction, objection, portability, and withdrawal of consent (where processing is based on consent).</p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">CCPA/CPRA rights (if applicable)</h3>
                    <p className="text-sm">You may have rights to know/access, delete, correct, and opt-out of sale/share (we do not sell/share), and to not be discriminated against for exercising privacy rights. We may need to verify your request.</p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">How to exercise rights</h3>
                    <p className="text-sm">
                      Email us at{" "}
                      <a href="mailto:support@unityspiritpartners.com" className="text-primary underline hover:text-primary/80 transition-colors">
                        support@unityspiritpartners.com
                      </a>.
                      We typically respond within 30 days (or as required by law). We may request identity verification to protect you.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9 */}
              <div id="contact" className="scroll-mt-28 space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl font-heading font-semibold text-foreground">9. Contact Us</h2>
                <p>For questions about this policy or privacy requests, contact:</p>
                <div className="rounded-lg border border-border p-5 flex items-start gap-3">
                  <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:support@unityspiritpartners.com" className="text-foreground font-bold hover:text-primary transition-colors">support@unityspiritpartners.com</a>
                  </div>
                </div>
              </div>

              {/* Related */}
              <div className="rounded-lg border border-border bg-card/50 p-6 space-y-3">
                <h3 className="text-base font-heading font-semibold text-foreground flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" /> Related
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80 transition-colors">Terms of Service →</Link>
                  <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80 transition-colors">Cookie Policy →</Link>
                  <Link to="/security-compliance" className="text-primary underline hover:text-primary/80 transition-colors">Security Practices →</Link>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-center text-muted-foreground pt-4 border-t border-border">
                Last Updated: March 3, 2026 — We may update this policy. Material changes will be posted here and, where appropriate, notified to you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

}