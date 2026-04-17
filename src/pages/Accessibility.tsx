import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Accessibility, Eye, Keyboard, Monitor, MessageSquare, Mail } from "lucide-react";

const commitments = [
  {
    icon: Eye,
    title: "Perceivable",
    desc: "We provide text alternatives for non-text content, captions for multimedia, and ensure content can be presented in different ways without losing meaning. Our color contrast ratios meet or exceed WCAG AA standards.",
  },
  {
    icon: Keyboard,
    title: "Operable",
    desc: "All functionality is available via keyboard. We provide clear navigation, sufficient time to read content, and avoid content that could cause seizures or physical reactions.",
  },
  {
    icon: Monitor,
    title: "Understandable",
    desc: "Text is readable and predictable. Our pages operate in consistent ways, and we help users avoid and correct mistakes through clear labels and error messages.",
  },
  {
    icon: MessageSquare,
    title: "Robust",
    desc: "Our content is compatible with current and future assistive technologies. We use valid, semantic HTML and follow ARIA best practices to maximize compatibility.",
  },
];

const measures = [
  "Semantic HTML5 elements for proper document structure",
  "ARIA landmarks, labels, and roles where appropriate",
  "Keyboard-navigable menus, forms, and interactive components",
  "Color contrast ratios meeting WCAG 2.1 Level AA (minimum 4.5:1 for text)",
  "Responsive design supporting zoom up to 200% without loss of content",
  "Descriptive alt text on all meaningful images",
  "Focus indicators on all interactive elements",
  "Skip-to-content links for screen reader users",
  "Form inputs with associated labels and clear error messages",
  "Motion-reduced alternatives via prefers-reduced-motion media query",
];

export default function AccessibilityPage() {
  return (
    <Layout>
      <Helmet>
        <title>Accessibility Statement | Unity Spirit Partners</title>
        <meta
          name="description"
          content="Unity Spirit Partners is committed to digital accessibility. Learn about our WCAG 2.1 AA compliance efforts and how to report accessibility issues."
        />
        <link rel="canonical" href="https://unityspiritpartners.com/accessibility" />
        <meta property="og:title" content="Accessibility Statement | Unity Spirit Partners" />
        <meta property="og:description" content="Unity Spirit Partners is committed to digital accessibility and WCAG 2.1 AA compliance." />
        <meta property="og:url" content="https://unityspiritpartners.com/accessibility" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accessibility Statement | Unity Spirit Partners" />
        <meta name="twitter:description" content="Unity Spirit Partners is committed to digital accessibility and WCAG 2.1 AA compliance." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Inclusion & Compliance
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Accessibility Statement
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Unity Spirit Partners is committed to ensuring digital accessibility for people of all
              abilities. We continually improve the user experience for everyone and apply the
              relevant accessibility standards.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
              <Accessibility className="size-4 text-primary" />
              <span>Targeting WCAG 2.1 Level AA conformance</span>
              <span className="mx-2">·</span>
              <span>Last reviewed March 2025</span>
            </div>

            {/* POUR Principles */}
            <h2 className="text-2xl font-bold font-heading mb-6">Our Guiding Principles</h2>
            <p className="text-muted-foreground mb-8">
              We follow the four principles of the Web Content Accessibility Guidelines (WCAG) 2.1
              to ensure our digital content is accessible to as many people as possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {commitments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card/60 p-6"
                >
                  <item.icon className="size-6 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Measures */}
            <h2 className="text-2xl font-bold font-heading mb-6">
              Accessibility Measures We Take
            </h2>
            <p className="text-muted-foreground mb-6">
              We employ the following technical and design practices across our website:
            </p>
            <ul className="space-y-3 mb-16">
              {measures.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 block size-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Conformance status */}
            <h2 className="text-2xl font-bold font-heading mb-4">Conformance Status</h2>
            <div className="rounded-xl border border-border bg-card/60 p-6 mb-16">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We aim to conform to <strong className="text-foreground">WCAG 2.1 Level AA</strong>.
                While we strive for full conformance, there may be areas where compliance is still in
                progress. We regularly audit our website and work to remediate any identified issues
                promptly.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our accessibility efforts are ongoing. We test with a combination of automated tools,
                manual keyboard and screen reader testing, and user feedback.
              </p>
            </div>

            {/* Feedback */}
            <h2 className="text-2xl font-bold font-heading mb-4">Feedback & Contact</h2>
            <div className="rounded-xl border border-border bg-card/60 p-6 mb-16">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any
                barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="flex items-center gap-2 text-sm mb-3">
                <Mail className="size-4 text-primary shrink-0" />
                <a
                  href="mailto:support@unityspiritpartners.com"
                  className="text-primary hover:underline font-medium"
                >
                  support@unityspiritpartners.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We aim to respond to accessibility feedback within <strong className="text-foreground">2 business days</strong> and
                to resolve identified issues within <strong className="text-foreground">30 days</strong> where technically feasible.
              </p>
            </div>

            {/* Related links */}
            <div className="border-t border-border/50 pt-8">
              <p className="text-sm text-muted-foreground mb-3">Related policies:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Service", href: "/terms-of-service" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
