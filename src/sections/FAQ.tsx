import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical engagement take?",
    a: "Most clients see their first automations live within 30–45 days. A full security operations transformation typically runs 60–90 days depending on stack complexity and number of integrations involved.",
  },
  {
    q: "Do you replace our existing security tools?",
    a: "No — we are tool-agnostic. We work between the tools you already have: Splunk, CrowdStrike, Okta, Palo Alto, SentinelOne, and more. Our value is in the orchestration layer, not in selling new licenses.",
  },
  {
    q: "What size companies do you work with?",
    a: "From 50-person startups preparing for their first SOC 2 audit to enterprise organizations with dedicated 20+ person security teams looking to scale efficiency. The right fit is any company that has invested in security tooling and wants to operationalize it properly.",
  },
  {
    q: "What does the free assessment include?",
    a: "A 60-minute working session with one of our senior engineers. We review your tooling, walk through your incident response process, and identify your top 3–5 automation opportunities with estimated impact. No sales pitch — you leave with a roadmap regardless.",
  },
  {
    q: "Who owns the playbooks and automations you build?",
    a: "You do — 100%. All playbooks, integrations, and documentation are yours from day one. We build capability, not dependency.",
  },
  {
    q: "Do you offer ongoing managed services?",
    a: "Yes. After the build phase, many clients move to an optional retainer where we maintain automation health, update detections as the threat landscape evolves, and provide ongoing advisory.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gradient-iridescent">
            Questions we hear before every engagement
          </h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-panel rounded-lg px-6 border-none"
            >
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
  );
}
