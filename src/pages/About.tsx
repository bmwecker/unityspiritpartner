import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Cpu, Target, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Security First", desc: "Every system we build starts with security architecture." },
  { icon: Cpu, title: "Production Grade", desc: "No prototypes. Every delivery is production-ready." },
  { icon: Target, title: "Execution Focused", desc: "We measure success by operational impact, not hours billed." },
  { icon: Users, title: "Long-Term Partners", desc: "We build systems that grow with your organization." },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unity Spirit Partners Inc.",
  url: "https://unityspiritpartners.com",
  description:
    "Operations technology partner specializing in security-first automation systems for modern organizations with 20–500 employees.",
  foundingDate: "2025",
  knowsAbout: [
    "AI Automation",
    "Custom Bots",
    "Data Extraction",
    "Cybersecurity",
    "Technical SEO",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-365-855-8777",
    contactType: "sales",
    email: "contact@unityspiritpartners.com",
  },
};

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About | Unity Spirit Partners</title>
        <meta
          name="description"
          content="Unity Spirit Partners is an operations technology partner building security-first automation systems for modern organizations."
        />
        <link rel="canonical" href="https://unityspiritpartners.com/about" />
        <meta property="og:title" content="About | Unity Spirit Partners" />
        <meta property="og:description" content="Operations technology partner building security-first automation systems for modern organizations." />
        <meta property="og:url" content="https://unityspiritpartners.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Unity Spirit Partners" />
        <meta name="twitter:description" content="Operations technology partner building security-first automation systems for modern organizations." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Unity Spirit <span className="text-gradient">Partners Inc.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are an operations technology partner specializing in security-first automation systems for modern organizations.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-24">
            <div className="glass-card rounded-lg p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                Most businesses do not need more software. They need better systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unity Spirit Partners helps growing companies reduce operational friction by improving how work actually moves through the business. We design security-first automation and workflow systems that reduce repetitive admin, improve speed and accuracy, and create better visibility across day-to-day operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work is built for companies where growth has started to expose process weaknesses: slow handoffs, scattered information, inconsistent follow-up, and too much manual effort holding the business together. We fix the structure behind the work so the business can run with more discipline, less drag, and greater control.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-lg p-6 text-center"
              >
                <v.icon className="text-primary mx-auto mb-4" size={28} />
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
