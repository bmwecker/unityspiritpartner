import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cookie, FileText, Mail, Clock, BookOpen, Shield } from "lucide-react";

const navSections = [
  { id: "what-are-cookies", label: "1. What Are Cookies" },
  { id: "cookies-we-use", label: "2. Cookies We Use" },
  { id: "third-party", label: "3. Third-Party Cookies" },
  { id: "managing-cookies", label: "4. Managing Cookies" },
  { id: "consent", label: "5. Consent & Preferences" },
  { id: "updates", label: "6. Updates to This Policy" },
  { id: "contact", label: "7. Contact Us" },
];

const cookieCategories = [
  {
    title: "Strictly Necessary Cookies",
    basis: "Legitimate interests / essential operation",
    desc: "These cookies are required for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting privacy preferences, logging in, or filling in forms.",
    examples: ["Session management", "Security tokens (CSRF)", "Cookie consent preferences", "Load balancing"],
  },
  {
    title: "Analytics & Performance Cookies",
    basis: "Consent",
    desc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve site performance and user experience.",
    examples: ["Page views and navigation paths", "Time spent on pages", "Bounce rates and exit pages", "Device and browser information"],
  },
  {
    title: "Functional Cookies",
    basis: "Consent",
    desc: "These cookies enable enhanced functionality and personalization, such as remembering your preferences or region. They may be set by us or by third-party providers whose services we have added to our pages.",
    examples: ["Language and region preferences", "Font size and display settings", "Previously viewed content"],
  },
  {
    title: "Marketing & Targeting Cookies",
    basis: "Consent",
    desc: "These cookies may be set through our site by advertising partners to build a profile of your interests and show you relevant ads on other sites. They do not store personal information directly but uniquely identify your browser and device.",
    examples: ["Ad relevance tracking", "Campaign performance measurement", "Cross-site behavioral profiling"],
  },
];

export default function CookiePolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy | Unity Spirit Partners</title>
        <meta name="description" content="Unity Spirit Partners' Cookie Policy. Learn about the cookies we use, how to manage them, and your choices regarding cookie-based data collection." />
        <meta name="keywords" content="cookie policy, cookies, tracking, analytics, consent, Unity Spirit Partners" />
        <link rel="canonical" href="https://unityspiritpartners.com/cookie-policy" />
        <meta property="og:title" content="Cookie Policy | Unity Spirit Partners" />
        <meta property="og:description" content="Learn about the cookies we use, how to manage them, and your choices regarding cookie-based data collection." />
        <meta property="og:url" content="https://unityspiritpartners.com/cookie-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy | Unity Spirit Partners" />
        <meta name="twitter:description" content="Learn about the cookies we use, how to manage them, and your choices regarding cookie-based data collection." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Legal & Compliance</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground mb-6">
              How Unity Spirit Partners uses cookies and similar technologies on our website.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-12">
              <span className="flex items-center gap-1.5"><Clock size={14} /> Last Updated: March 3, 2026</span>
              <span>⏱️ ~4 min read</span>
              <span className="flex items-center gap-1.5"><Shield size={14} /> Transparency-first</span>
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
                  Unity Spirit Partners Inc. ("Unity Spirit," "we," "us") uses cookies and similar tracking technologies on our website to ensure functionality, improve performance, and (with your consent) understand usage patterns and deliver relevant content.
                </p>
                <p className="mt-3">
                  This Cookie Policy should be read alongside our{" "}
                  <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">Privacy Policy</Link>, which explains how we process personal data more broadly.
                </p>
              </div>

              {/* 1 */}
              <div id="what-are-cookies" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Session Cookies</h3>
                    <p className="text-sm">Temporary cookies that expire when you close your browser. Used for essential functions like maintaining your session as you navigate between pages.</p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Persistent Cookies</h3>
                    <p className="text-sm">Remain on your device for a set period or until you delete them. Used to remember preferences and recognize returning visitors.</p>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div id="cookies-we-use" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">2. Cookies We Use</h2>
                <div className="space-y-4">
                  {cookieCategories.map((cat) => (
                    <div key={cat.title} className="rounded-lg border border-border p-5 space-y-3">
                      <h3 className="text-base font-heading font-medium text-foreground flex items-center gap-2">
                        <Cookie size={16} className="text-primary" /> {cat.title}
                      </h3>
                      <p className="text-sm"><strong className="text-foreground">Legal Basis:</strong> {cat.basis}</p>
                      <p className="text-sm">{cat.desc}</p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        {cat.examples.map((ex) => (
                          <li key={ex}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 */}
              <div id="third-party" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">3. Third-Party Cookies</h2>
                <p>
                  Some cookies on our site are placed by third-party services that appear on our pages. We do not control these cookies. Third parties may include analytics providers, advertising networks, and social media platforms.
                </p>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <strong className="text-foreground">Note:</strong> Third-party cookies are subject to the respective third party's privacy and cookie policies. We encourage you to review their policies for more information about how they use cookies.
                </div>
              </div>

              {/* 4 */}
              <div id="managing-cookies" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">4. Managing Cookies</h2>
                <p>
                  You can control and manage cookies in several ways. Please note that removing or blocking cookies may impact your user experience and some functionality may no longer be available.
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Browser Settings</h3>
                    <p className="text-sm">Most browsers allow you to view, manage, and delete cookies through the settings or preferences menu. You can configure your browser to block all cookies, accept all cookies, or notify you when a cookie is set.</p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Opt-Out Tools</h3>
                    <p className="text-sm">
                      You can opt out of interest-based advertising through industry tools such as the{" "}
                      <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">NAI Consumer Opt-Out</a>{" "}
                      or the{" "}
                      <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">DAA Opt-Out Page</a>.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5 space-y-2">
                    <h3 className="text-base font-heading font-medium text-foreground">Do Not Track (DNT)</h3>
                    <p className="text-sm">Some browsers offer a "Do Not Track" setting. There is currently no universal standard for how companies should respond to DNT signals, but we respect user preferences where technically feasible.</p>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div id="consent" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">5. Consent & Preferences</h2>
                <p>
                  When you first visit our website, you will be presented with a cookie banner allowing you to accept or decline non-essential cookies. Strictly necessary cookies do not require consent as they are essential for the website to function.
                </p>
                <p className="text-sm">
                  You can change your cookie preferences at any time by clearing your browser cookies and revisiting our site, or by using our cookie settings control (if available).
                </p>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <strong className="text-foreground">GDPR & ePrivacy:</strong> Where required by EU/UK law, we obtain consent before placing non-essential cookies. Under CCPA/CPRA, you have the right to opt out of the "sale" or "sharing" of personal information — we do not sell or share personal data collected via cookies.
                </div>
              </div>

              {/* 6 */}
              <div id="updates" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-heading font-semibold text-foreground">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The "Last Updated" date at the top of this page indicates when this policy was last revised.
                </p>
                <p className="text-sm">
                  We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* 7 */}
              <div id="contact" className="scroll-mt-28 space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl font-heading font-semibold text-foreground">7. Contact Us</h2>
                <p>For questions about this Cookie Policy or our use of cookies, contact:</p>
                <div className="rounded-lg border border-border p-5 flex items-start gap-3">
                  <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:support@unityspiritpartners.com" className="text-foreground font-bold hover:text-primary transition-colors">
                      support@unityspiritpartners.com
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
                  <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80 transition-colors">Terms of Service →</Link>
                  <Link to="/security-compliance" className="text-primary underline hover:text-primary/80 transition-colors">Security Practices →</Link>
                </div>
              </div>

              {/* Footer note */}
              <p className="text-xs text-center text-muted-foreground pt-4 border-t border-border">
                Last Updated: March 3, 2026 — We may update this policy. Material changes will be posted here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
