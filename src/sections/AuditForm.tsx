import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const deliverables = [
  "Automation ROI map",
  "Automation opportunities identified",
  "Pilot roadmap",
  "Security assessment",
  "Integration plan",
  "Timeline estimate",
];

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="audit" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(235_80%_65%/0.1),transparent_60%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Free Assessment</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Get Your Free Automation Audit
            </h2>
            <p className="text-muted-foreground mb-8">
              Discover exactly where automation will have the biggest impact on your operations.
            </p>
            <h3 className="font-heading font-semibold mb-4">What You'll Receive:</h3>
            <ul className="space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="glass-card rounded-lg p-12 text-center">
                <CheckCircle2 className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-heading font-semibold text-xl mb-2">Thank You</h3>
                <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="glass-card rounded-lg p-8 space-y-4"
              >
                <Input placeholder="Full Name" required className="bg-background/50" />
                <Input type="email" placeholder="Work Email" required className="bg-background/50" />
                <Input placeholder="Company Name" required className="bg-background/50" />
                <Input placeholder="Your Role" required className="bg-background/50" />
                <Textarea
                  placeholder="Biggest operational bottleneck"
                  rows={3}
                  required
                  className="bg-background/50"
                />
                <Input placeholder="Current systems (e.g., SAP, Salesforce)" className="bg-background/50" />
                <Input placeholder="Monthly transaction volume (approximate)" className="bg-background/50" />
                <Button variant="gradient" className="w-full" type="submit">
                  Get Free Automation Audit
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No obligation. No spam. Just actionable insights.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
