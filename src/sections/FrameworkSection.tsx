import { motion } from "framer-motion";

const steps = [
  { label: "Inputs", desc: "Orders, invoices, emails, PDFs, forms, web data" },
  { label: "Extraction", desc: "AI-powered data extraction from any format" },
  { label: "Validation", desc: "Rules-based verification and error detection" },
  { label: "Automation", desc: "Secure workflow execution and system integration" },
  { label: "Monitoring", desc: "Real-time logging, alerts, and uptime tracking" },
  { label: "Intelligence", desc: "Analytics, insights, and continuous optimization" },
];

export default function FrameworkSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.08),transparent_70%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Framework</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gradient-iridescent">
            Security-First Operations
            <br />
            <span className="text-gradient">Automation Framework</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-accent-pink opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-6 mb-8 last:mb-0"
            >
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-accent text-primary-foreground font-heading font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="glass-card rounded-lg p-6 flex-1">
                <h3 className="font-heading font-semibold text-lg mb-1">{step.label}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
