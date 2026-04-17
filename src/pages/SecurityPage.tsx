import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import SecuritySection from "@/sections/SecuritySection";
import FinalCTA from "@/sections/FinalCTA";
import { Helmet } from "react-helmet-async";

const securityDetails = [
  { title: "Data Handling", desc: "All data is processed with strict access controls and encryption. We handle your data with the same rigor we'd apply to our own critical systems." },
  { title: "Access Models", desc: "Least-privilege access is enforced across all systems. Service accounts receive only the permissions required for their specific function." },
  { title: "Credential Management", desc: "All credentials are stored in encrypted vaults with rotation policies. No credentials are ever stored in code or logs." },
  { title: "Environment Separation", desc: "Development, staging, and production environments are fully isolated. Changes are promoted through controlled deployment pipelines." },
  { title: "Support Structure", desc: "Dedicated support with defined SLAs, incident response procedures, and regular security reviews." },
];

export default function SecurityPage() {
  return (
    <Layout>
      <Helmet>
        <title>Security & Compliance | Unity Spirit Partners</title>
        <meta name="description" content="Every automation system we build is architected with enterprise-grade security controls from the ground up." />
        <link rel="canonical" href="https://unityspiritpartners.com/security-compliance" />
        <meta property="og:title" content="Security & Compliance | Unity Spirit Partners" />
        <meta property="og:description" content="Every automation system we build is architected with enterprise-grade security controls from the ground up." />
        <meta property="og:url" content="https://unityspiritpartners.com/security-compliance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security & Compliance | Unity Spirit Partners" />
        <meta name="twitter:description" content="Every automation system we build is architected with enterprise-grade security controls from the ground up." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Security & Compliance</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Security-First <span className="text-gradient">By Design</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every automation system we build is architected with enterprise-grade security controls from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      <SecuritySection />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold font-heading">Our Security Approach</h2>
            {securityDetails.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
            <p className="text-xs text-muted-foreground border-t border-border/50 pt-4">
              Disclaimer: This page describes our security approach and practices. It does not constitute legal advice or regulatory compliance certification.
              Specific compliance requirements should be discussed during engagement.
            </p>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
}
