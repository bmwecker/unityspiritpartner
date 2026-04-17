import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

export interface ServicePageData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  capabilities: { title: string; desc: string; icon: string }[];
  useCases: { label: string; before: string; after: string; impact: string }[];
  processSteps: { step: string; days: string; desc: string }[];
  techStack: { title: string; items: string[] }[];
  whyChoose: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const location = useLocation();
  const canonicalUrl = `https://unityspiritpartners.com${location.pathname}`;
  const pageTitle = `${data.title} ${data.titleHighlight} | Unity Spirit Partners`;

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={data.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={data.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={data.subtitle} />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(235_80%_65%/0.15),transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              {data.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-gradient-iridescent">
              {data.title} <span className="text-gradient">{data.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {data.subtitle}
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-10">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="premium-button" asChild>
                <Link to="/contact">Book a Workflow Assessment <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="gradient" size="lg" className="premium-button" asChild>
                <a href="tel:+13658558777" data-contact-location="Service Page">
                  <Phone size={16} /> Call +1 (365) 855-8777
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">Key Capabilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {data.capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard className="glass-panel rounded-lg p-6">
                  <span className="text-3xl mb-4 block">{cap.icon}</span>
                  <h3 className="font-heading font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">Before & After</h2>
          </motion.div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {data.useCases.map((uc, i) => (
              <motion.div
                key={uc.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-lg p-6"
              >
                <h3 className="font-heading font-semibold mb-4">{uc.label}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wider text-destructive mb-2 font-semibold">Before</p>
                    <p className="text-sm text-muted-foreground">{uc.before}</p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wider text-primary mb-2 font-semibold">After</p>
                    <p className="text-sm text-muted-foreground">{uc.after}</p>
                  </div>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2 inline-block">
                  <p className="text-sm font-semibold text-accent">{uc.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Process */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">5-Step Pilot Timeline</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            {data.processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 pb-8 relative"
              >
                {i < data.processSteps.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-px bg-primary/20" />
                )}
                <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading font-semibold">{step.step}</h3>
                    <span className="text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5">{step.days}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">Technology Stack</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {data.techStack.map((ts, i) => (
              <AccordionItem key={i} value={`tech-${i}`} className="glass-panel rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading text-left hover:no-underline py-4">
                  {ts.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {ts.items.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">
              Why Choose <span className="text-gradient">Unity Spirit</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard className="glass-panel rounded-lg p-6">
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">Common Questions</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-panel rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading text-left hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gradient-iridescent">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Start with a single automation pilot. See results in 10–14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="premium-button" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="gradient" size="lg" className="premium-button" asChild>
                <a href="tel:+13658558777" data-contact-location="Service Page CTA">
                  <Phone size={16} /> +1 (365) 855-8777
                </a>
              </Button>
              <Button variant="gradient" size="lg" className="premium-button" asChild>
                <a href="mailto:contact@unityspiritpartners.com" data-contact-location="Service Page CTA">
                  Email Us
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">Trusted by operations-driven organizations across industries</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
