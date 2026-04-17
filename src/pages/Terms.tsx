import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FileText, Mail, Clock, Scale, BookOpen } from "lucide-react";

const navSections = [
  { id: "agreement", label: "1. Agreement to Terms" },
  { id: "services", label: "2. Services" },
  { id: "client-obligations", label: "3. Client Obligations" },
  { id: "intellectual-property", label: "4. Intellectual Property" },
  { id: "confidentiality", label: "5. Confidentiality" },
  { id: "payment", label: "6. Payment & Billing" },
  { id: "warranties", label: "7. Warranties & Disclaimers" },
  { id: "limitation", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Termination" },
  { id: "governing-law", label: "10. Governing Law" },
  { id: "contact", label: "11. Contact Us" },
];

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Unity Spirit Partners</title>
        <meta name="description" content="Unity Spirit Partners' Terms of Service. Read the terms governing the use of our website, AI automation, and consulting services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, consulting agreement, Unity Spirit Partners" />
        <link rel="canonical" href="https://unityspiritpartners.com/terms-of-service" />
        <meta property="og:title" content="Terms of Service | Unity Spirit Partners" />
        <meta property="og:description" content="Unity Spirit Partners' Terms of Service governing the use of our website, AI automation, and consulting services." />
        <meta property="og:url" content="https://unityspiritpartners.com/terms-of-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Unity Spirit Partners" />
        <meta name="twitter:description" content="Unity Spirit Partners' Terms of Service governing the use of our website, AI automation, and consulting services." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Legal & Compliance</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mb-6">
              The terms governing your use of the Unity Spirit Partners website and services.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-12">
              <span className="flex items-center gap-1.5"><Clock size={14} /> Last Updated: March 3, 2026</span>
              <span>⏱️ ~6 min read</span>
              <span className="flex items-center gap-1.5"><Scale size={14} /> Legally binding</span>
            </div>

            {/* Quick Navigation */}
            <div className="rounded-lg border border-border bg-card p-6 mb-12">
              <h2 className="text-base font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
                <FileText size={16} className="text-primary" /> Quick Navigation
              </h2>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navSections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-sm text-primary hover:text-primary/80 underline transition-colors">
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Body */}
            <div className="space-y-12 text-muted-foreground leading-relaxed">
              {/* Intro */}
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you") and Unity Spirit Partners Inc. ("Unity Spirit," "we," "us").
                  By accessing our website or engaging our services, you agree to these Terms in full. If you do not agree, please do not use our website or services.
                </p>
                <p className="mt-3">
                  Specific engagements may be governed by a separate Statement of Work (SOW) or Master Services Agreement (MSA). In case of conflict, the SOW/MSA takes precedence over these Terms.
                </p>
              </div>

              {/* 1 */}
              <div id="agreement" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">1. Agreement to Terms</h2>
                <p>
                  By accessing or using our website, submitting a contact form, or signing a service agreement, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{" "}
                  <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">Privacy Policy</Link>.
                </p>
                <p className="text-sm">
                  If you are entering into these Terms on behalf of a company or organization, you represent that you have the authority to bind that entity.
                </p>
              </div>

              {/* 2 */}
              <div id="services" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">2. Services</h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">🔧 What We Provide</h3>
                    <p className="text-sm">
                      Unity Spirit Partners provides AI automation consulting, agentic workflow implementation, data extraction, technical SEO, cybersecurity hardening, and related professional services. Specific deliverables, timelines, and fees are defined in individual client agreements (SOW/MSA).
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">📋 Service Modifications</h3>
                    <p className="text-sm">
                      We reserve the right to modify, suspend, or discontinue any aspect of our services or website at any time. Material changes to active engagements will be communicated to affected clients in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div id="client-obligations" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">3. Client Obligations</h2>
                <div className="rounded-lg border border-border p-5 space-y-2">
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    <li>Provide accurate, complete, and timely information necessary for service delivery</li>
                    <li>Ensure you have lawful authority to share any data, credentials, or access provided to us</li>
                    <li>Maintain the confidentiality of any account credentials or access tokens</li>
                    <li>Comply with all applicable laws and regulations in connection with your use of our services</li>
                    <li>Designate a primary point of contact for project communications</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <strong className="text-foreground">Important:</strong> Failure to meet client obligations (e.g., delayed access, incomplete data) may affect project timelines and deliverables. We are not liable for delays caused by client-side dependencies.
                </div>
              </div>

              {/* 4 */}
              <div id="intellectual-property" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">4. Intellectual Property</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Our IP</h3>
                    <p className="text-sm">
                      All content on this website—including text, graphics, logos, frameworks, methodologies, and software—is the property of Unity Spirit Partners Inc. and is protected by intellectual property laws.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Client Deliverables</h3>
                    <p className="text-sm">
                      Ownership of client-specific deliverables (e.g., custom automations, scripts, configurations) is governed by the applicable SOW or MSA. Unless otherwise agreed, clients receive a perpetual, non-exclusive license to use deliverables.
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  Pre-existing tools, libraries, and frameworks developed by Unity Spirit Partners remain our property. We may use anonymized learnings and methodologies across engagements.
                </p>
              </div>

              {/* 5 */}
              <div id="confidentiality" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">5. Confidentiality</h2>
                <p>
                  Both parties agree to treat as confidential any non-public information exchanged during the engagement, including business strategies, technical configurations, credentials, and proprietary data.
                </p>
                <div className="rounded-lg border border-border p-5 space-y-2">
                  <h3 className="text-base font-heading font-medium text-foreground">Exceptions</h3>
                  <ul className="list-disc pl-6 space-y-1.5 text-sm">
                    <li>Information that is or becomes publicly available through no fault of the receiving party</li>
                    <li>Information independently developed without reference to confidential materials</li>
                    <li>Information required to be disclosed by law, regulation, or court order (with reasonable prior notice where permitted)</li>
                  </ul>
                </div>
              </div>

              {/* 6 */}
              <div id="payment" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">6. Payment & Billing</h2>
                <div className="space-y-4">
                  {[
                    { icon: "💳", title: "Invoicing", desc: "Fees, payment schedules, and billing terms are specified in the applicable SOW or MSA. Unless otherwise agreed, invoices are due within 30 days of issuance." },
                    { icon: "⏰", title: "Late payments", desc: "Overdue invoices may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law. We reserve the right to suspend services for accounts more than 30 days past due." },
                    { icon: "💰", title: "Taxes", desc: "All fees are exclusive of applicable taxes. You are responsible for any sales, use, VAT, or similar taxes arising from the engagement, except for taxes based on our net income." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-lg border border-border p-5 space-y-2">
                      <h3 className="text-base font-heading font-medium text-foreground">{item.icon} {item.title}</h3>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7 */}
              <div id="warranties" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">7. Warranties & Disclaimers</h2>
                <p>
                  We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards.
                </p>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <strong className="text-foreground">Disclaimer:</strong> Except as expressly stated above, our services and website are provided "AS IS" and "AS AVAILABLE." We disclaim all other warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee specific results, ROI, or outcomes from our services.
                </div>
              </div>

              {/* 8 */}
              <div id="limitation" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">8. Limitation of Liability</h2>
                <div className="rounded-lg border border-border p-5 space-y-3">
                  <p className="text-sm">
                    <strong className="text-foreground">Cap:</strong> To the maximum extent permitted by law, Unity Spirit Partners' total aggregate liability for any claims arising from or related to these Terms or our services shall not exceed the total fees paid by you in the twelve (12) months preceding the claim.
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Exclusions:</strong> In no event shall Unity Spirit Partners be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, regardless of the theory of liability.
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Exceptions:</strong> Nothing in these Terms limits liability for fraud, gross negligence, willful misconduct, or any liability that cannot be excluded by applicable law.
                  </p>
                </div>
              </div>

              {/* 9 */}
              <div id="termination" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">9. Termination</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">By Either Party</h3>
                    <p className="text-sm">
                      Either party may terminate an engagement by providing 30 days' written notice, unless a different notice period is specified in the SOW/MSA.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">For Cause</h3>
                    <p className="text-sm">
                      Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to cure within 15 days of receiving notice.
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  Upon termination, you remain responsible for fees accrued through the termination date. Sections on IP, confidentiality, limitation of liability, and governing law survive termination.
                </p>
              </div>

              {/* 10 */}
              <div id="governing-law" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">10. Governing Law & Dispute Resolution</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to conflict of law principles.
                </p>
                <div className="rounded-lg border border-border p-5 space-y-2">
                  <h3 className="text-base font-heading font-medium text-foreground">Dispute Resolution</h3>
                  <p className="text-sm">
                    The parties agree to first attempt to resolve disputes through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in accordance with the rules of the ADR Institute of Canada, with proceedings held in Ontario. Each party bears its own costs unless the arbitrator directs otherwise.
                  </p>
                </div>
              </div>

              {/* 11 */}
              <div id="contact" className="scroll-mt-28 space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl font-heading font-semibold text-foreground">11. Contact Us</h2>
                <p>For questions about these Terms or our services, contact:</p>
                <div className="rounded-lg border border-border p-5 flex items-start gap-3">
                  <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:contact@unityspiritpartners.com" className="text-foreground font-bold hover:text-primary transition-colors">
                      contact@unityspiritpartners.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Related */}
              <div className="rounded-lg border border-border bg-card/50 p-6 space-y-3">
                <h3 className="text-base font-heading font-semibold text-foreground flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" /> Related
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">Privacy Policy →</Link>
                  <Link to="/security-compliance" className="text-primary underline hover:text-primary/80 transition-colors">Security Practices →</Link>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-center text-muted-foreground pt-4 border-t border-border">
                Last Updated: March 3, 2026 — We may update these Terms. Material changes will be posted here and, where appropriate, notified to affected clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
