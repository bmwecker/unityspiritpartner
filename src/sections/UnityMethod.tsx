import { motion } from "framer-motion";
import { ClipboardCheck, Rocket, ShieldCheck, TestTube, TrendingUp } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, label: "Audit", desc: "Map workflows, identify opportunities, assess security" },
  { icon: Rocket, label: "Pilot", desc: "First automation delivered in 10–14 days" },
  { icon: ShieldCheck, label: "Secure Build", desc: "Production-grade build with security architecture" },
  { icon: TestTube, label: "Testing", desc: "Comprehensive testing, validation, and documentation" },
  { icon: TrendingUp, label: "Scaling", desc: "Expand automation across operations" },
];

export default function UnityMethod() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">The Unity Method</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-accent flex items-center justify-center">
                <s.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold mb-2">{s.label}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
