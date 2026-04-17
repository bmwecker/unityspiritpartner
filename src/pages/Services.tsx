import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const serviceDetails = [
  {
    title: "AI Automation",
    href: "/services/ai-automation",
    desc: "Production-ready AI automation systems built with security-first architecture. We automate complex business processes including order processing, data entry, document handling, and workflow management.",
    features: ["Workflow automation", "Document processing", "System integration", "Real-time monitoring", "Error handling", "Performance optimization"],
  },
  {
    title: "Custom Bots",
    href: "/services/custom-bots",
    desc: "Intelligent bots designed for your specific operational needs. From data collection to customer interaction automation, our bots operate 24/7 with built-in monitoring and security controls.",
    features: ["Data collection bots", "Process automation bots", "Integration bots", "Monitoring bots", "Alert systems", "Reporting automation"],
  },
  {
    title: "Data Extraction",
    href: "/services/data-extraction",
    desc: "Transform unstructured data from any source into structured, actionable operational data. PDF to ERP. Email to CRM. Forms to database. Web to dashboard.",
    features: ["PDF extraction", "Email parsing", "Form processing", "Web scraping", "OCR processing", "Data validation"],
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    desc: "Security architecture that protects your automation infrastructure. We build security into every layer, from credential management to audit logging.",
    features: ["Security architecture", "Access control", "Audit logging", "Credential management", "Encryption", "Compliance support"],
  },
  {
    title: "Technical SEO",
    href: "/services/technical-seo",
    desc: "Technical search optimization integrated with your digital infrastructure. Automated monitoring, reporting, and optimization at scale.",
    features: ["Technical audits", "Performance optimization", "Schema markup", "Monitoring automation", "Reporting dashboards", "Competitive analysis"],
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Unity Spirit Partners Services",
  itemListElement: serviceDetails.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      url: `https://unityspiritpartners.com${service.href}`,
      provider: {
        "@type": "Organization",
        name: "Unity Spirit Partners Inc.",
      },
    },
  })),
};

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Services | Unity Spirit Partners</title>
        <meta
          name="description"
          content="Explore our security-first automation services: AI Automation, Custom Bots, Data Extraction, Cybersecurity, and Technical SEO."
        />
        <link rel="canonical" href="https://unityspiritpartners.com/services" />
        <meta property="og:title" content="Services | Unity Spirit Partners" />
        <meta property="og:description" content="Security-first automation services: AI Automation, Custom Bots, Data Extraction, Cybersecurity, and Technical SEO." />
        <meta property="og:url" content="https://unityspiritpartners.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Unity Spirit Partners" />
        <meta name="twitter:description" content="Security-first automation services: AI Automation, Custom Bots, Data Extraction, Cybersecurity, and Technical SEO." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-gradient-iridescent">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-grade automation systems designed for security, reliability, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {serviceDetails.map((service) => (
        <section key={service.title} className="py-16 border-t border-border/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-3xl font-bold font-heading mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <Button variant="gradient" size="sm" className="premium-button" asChild>
                  <Link to={service.href}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
              <div className="glass-panel rounded-lg p-8">
                <h3 className="font-heading font-semibold mb-4">Capabilities</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to Automate?</h2>
          <Button variant="gradient" size="lg" className="premium-button" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
