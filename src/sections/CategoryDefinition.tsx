import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const failures = [
  "Scripts break without warning",
  "No security architecture",
  "No monitoring or logging",
  "No documentation or ownership",
  "No scalability path",
];

export default function CategoryDefinition() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">The Category We Define</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gradient-iridescent">
            What Is Security-First
            <br />
            Operations Automation?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            It's the discipline of building secure automation infrastructure and structured data pipelines
            that become operational systems for modern organizations. Not scripts. Not workarounds.
            Production-grade systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-8"
          >
            <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-3">
              <AlertTriangle className="text-destructive" size={22} />
              Why Traditional Automation Fails
            </h3>
            <ul className="space-y-4">
              {failures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-8"
            style={{ borderColor: "hsl(var(--primary) / 0.3)" }}
          >
            <h3 className="font-heading font-semibold text-xl mb-6">The Unity Spirit Model</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every automation we build includes production monitoring, security controls,
              documentation, and ongoing support. Your automation becomes infrastructure —
              reliable, secure, and scalable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We didn't join a market. We define how automation should be done.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
