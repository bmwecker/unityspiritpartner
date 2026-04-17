import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, Truck, Heart, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const industries = [
  { icon: Factory, title: "Manufacturing", desc: "Automate order processing, production scheduling, quality reporting, and supply chain data management." },
  { icon: Truck, title: "Logistics", desc: "Streamline invoice processing, shipment tracking, carrier management, and warehouse operations." },
  { icon: Heart, title: "Healthcare Administration", desc: "Automate patient intake, claims processing, compliance reporting, and vendor management." },
  { icon: DollarSign, title: "Finance Operations", desc: "Eliminate manual reconciliation, reporting, invoice processing, and compliance workflows." },
  { icon: Briefcase, title: "Professional Services", desc: "Automate lead management, project intake, time tracking, and client reporting." },
];

export default function Industries() {
  return (
    <Layout>
      <Helmet>
        <title>Industries We Serve | Unity Spirit Partners</title>
        <meta name="description" content="We serve operations-driven organizations across manufacturing, logistics, healthcare, finance, and professional services with security-first automation." />
        <link rel="canonical" href="https://unityspiritpartners.com/industries" />
        <meta property="og:title" content="Industries We Serve | Unity Spirit Partners" />
        <meta property="og:description" content="We serve operations-driven organizations across manufacturing, logistics, healthcare, finance, and professional services with security-first automation." />
        <meta property="og:url" content="https://unityspiritpartners.com/industries" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | Unity Spirit Partners" />
        <meta name="twitter:description" content="We serve operations-driven organizations across manufacturing, logistics, healthcare, finance, and professional services with security-first automation." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Industries</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Built for <span className="text-gradient">Operations</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve operations-driven organizations across industries where manual processes create the biggest drag on growth.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-lg p-8 group"
              >
                <ind.icon className="text-primary mb-4" size={32} />
                <h3 className="font-heading font-semibold text-lg mb-3">{ind.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ind.desc}</p>
                <Link
                  to="/contact"
                  className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Get started <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
