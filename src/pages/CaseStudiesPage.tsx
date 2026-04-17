import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, Truck, Briefcase, Shield, Clock, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const caseStudies = [
  {
    icon: Factory,
    industry: "Manufacturing",
    title: "PDF Order Processing → ERP Integration",
    client: "Mid-size packaging manufacturer",
    problem: "Customer orders arrived as PDF attachments via email. Staff manually re-typed order data into the ERP system — 40+ orders per day, each taking 8-12 minutes. Error rates exceeded 5%, causing production delays and customer complaints.",
    approach: "Built a secure automation pipeline: email monitoring → PDF extraction → data validation → ERP API integration. Included duplicate detection, format normalization, and exception handling for non-standard orders.",
    security: ["Encrypted email access with dedicated service account", "Least-privilege ERP API credentials in vault", "Full audit logging of every processed order", "Separate staging environment for testing"],
    results: ["85% reduction in order processing time", "Error rate reduced from 5% to under 0.5%", "40+ hours per week reclaimed for operations staff", "Same-day order processing achieved"],
    timeline: "Pilot: 12 days | Full production: 6 weeks",
    quote: "\"We went from dreading Monday morning order backlogs to having orders processed before the team arrives.\"",
  },
  {
    icon: Truck,
    industry: "Logistics",
    title: "Invoice Automation Pipeline",
    client: "Regional logistics provider",
    problem: "Accounts payable processed 200+ vendor invoices monthly. Each invoice required manual data entry, three-way matching, and approval routing. The process consumed 60+ hours monthly and payment delays strained vendor relationships.",
    approach: "Deployed end-to-end invoice automation: document capture → OCR extraction → data validation → PO matching → approval routing → payment scheduling. Built custom validation rules for each vendor format.",
    security: ["Financial data encrypted at rest and in transit", "Role-based access for approval workflows", "Complete audit trail for compliance", "Vendor credential isolation"],
    results: ["70% faster invoice processing", "98.5% extraction accuracy", "Payment cycle reduced from 30 to 12 days", "60 hours monthly returned to finance team"],
    timeline: "Pilot: 14 days | Full production: 8 weeks",
    quote: "\"Our vendor relationships improved overnight. On-time payments went from 60% to 95%.\"",
  },
  {
    icon: Briefcase,
    industry: "Professional Services",
    title: "Lead Automation & CRM Integration",
    client: "Growing professional services firm",
    problem: "Leads from website forms, email inquiries, and referral partners were manually tracked in spreadsheets. Response times averaged 48+ hours. Lead data was fragmented across email, spreadsheets, and sticky notes.",
    approach: "Built unified lead capture automation: multi-source ingestion → data enrichment → qualification scoring → CRM integration → automated follow-up sequences → pipeline reporting dashboard.",
    security: ["PII handling with encryption and access controls", "GDPR-friendly data processing pipeline", "Secured API integrations with all sources", "Automated data retention policies"],
    results: ["3x faster lead response time", "Lead-to-meeting conversion up 40%", "Single source of truth for all pipeline data", "Automated weekly pipeline reports"],
    timeline: "Pilot: 10 days | Full production: 5 weeks",
    quote: "\"We stopped losing leads in email threads. Every inquiry now gets a response within 2 hours.\"",
  },
];

export default function CaseStudiesPage() {
  return (
    <Layout>
      <Helmet>
        <title>Case Studies | Unity Spirit Partners</title>
        <meta name="description" content="See how operations-driven organizations eliminated manual work with secure automation. Real systems, real results." />
        <link rel="canonical" href="https://unityspiritpartners.com/case-studies" />
        <meta property="og:title" content="Case Studies – Real Systems, Real Results | Unity Spirit Partners" />
        <meta property="og:description" content="See how operations-driven organizations eliminated manual work with secure automation." />
        <meta property="og:url" content="https://unityspiritpartners.com/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Unity Spirit Partners" />
        <meta name="twitter:description" content="See how operations-driven organizations eliminated manual work with secure automation." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Case Studies</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Real Systems. <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how operations-driven organizations eliminated manual work with secure automation.
            </p>
          </motion.div>
        </div>
      </section>

      {caseStudies.map((cs) => (
        <section key={cs.title} className="py-16 border-t border-border/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <cs.icon className="text-primary" size={28} />
                <span className="text-sm uppercase tracking-wider text-muted-foreground">{cs.industry}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">{cs.title}</h2>
              <p className="text-sm text-muted-foreground mb-8">{cs.client}</p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">The Problem</h3>
                  <p className="text-muted-foreground">{cs.problem}</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">{cs.approach}</p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2 flex items-center gap-2">
                    <Shield size={16} /> Security Controls
                  </h3>
                  <ul className="space-y-2">
                    {cs.security.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={14} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-primary mb-3">Results</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cs.results.map((r) => (
                      <div key={r} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={14} />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} className="text-primary" />
                  {cs.timeline}
                </div>
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                  {cs.quote}
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready for Your Case Study?</h2>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
