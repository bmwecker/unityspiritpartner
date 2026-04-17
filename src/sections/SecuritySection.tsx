import { motion } from "framer-motion";
import { Shield, Key, FileSearch, Monitor, Lock, Layers } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const features = [
  { icon: Shield, title: "NDA Friendly", desc: "We work under NDA for all engagements" },
  { icon: Key, title: "Least Privilege Access", desc: "Minimal permissions, maximum security" },
  { icon: FileSearch, title: "Audit Logging", desc: "Complete audit trail for all automated actions" },
  { icon: Monitor, title: "Continuous Monitoring", desc: "24/7 system monitoring and alerting" },
  { icon: Lock, title: "Encryption", desc: "Data encrypted in transit and at rest" },
  { icon: Layers, title: "Environment Separation", desc: "Isolated development, staging, and production" },
];

export default function SecuritySection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(235_80%_65%/0.04),transparent_50%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Security</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">Security-First Architecture</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Security isn't an afterthought. It's built into every layer of our automation architecture.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard className="glass-card rounded-lg p-6 flex gap-4 h-full">
                <f.icon className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
