import { motion } from "framer-motion";
import TiltCard from "@/components/effects/TiltCard";

const problems = [
  {
    num: "01",
    title: "Alert Fatigue Is Real",
    desc: "Hundreds of alerts every day. Manual triage doesn't scale. The one event that matters gets buried under noise.",
  },
  {
    num: "02",
    title: "Compliance Takes Weeks",
    desc: "SOC 2, ISO 27001, HIPAA — every audit cycle pulls your best engineers away from real security work.",
  },
  {
    num: "03",
    title: "Tools Don't Talk to Each Other",
    desc: "Your SIEM, EDR, and cloud logs are siloed. Correlating events across platforms means hours of manual effort.",
  },
  {
    num: "04",
    title: "Incidents Escalate Too Slowly",
    desc: "By the time a critical alert reaches the right person, the damage window has grown. Every minute of lag is risk.",
  },
];

export default function OperationalProblems() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270_70%_60%/0.05),transparent_60%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why Teams Call Us</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">
            Your security team is drowning in manual work
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="glass-panel rounded-lg p-6 border-t-2 border-t-primary/40 hover:border-t-primary transition-all duration-300 h-full">
                <span className="text-4xl font-heading font-bold text-muted-foreground/20 mb-3 block">
                  {p.num}
                </span>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
