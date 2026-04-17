import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "MR",
    name: "Marcus R.",
    role: "CISO · Series B SaaS Company",
    quote:
      "We went from spending 3 days on alert triage every week to under 4 hours. Unity Spirit's SOAR build was the most impactful security investment we've made in five years.",
  },
  {
    initials: "PL",
    name: "Priya L.",
    role: "VP Engineering · FinTech Platform",
    quote:
      "Our SOC 2 Type II used to take three months to prepare for. With Unity Spirit's compliance automation, our last audit took three weeks — and our auditors were genuinely stunned.",
  },
  {
    initials: "DW",
    name: "Derek W.",
    role: "Head of Infrastructure · Healthcare Tech",
    quote:
      "The cloud security posture work caught two critical misconfigurations before they became incidents. The ROI was clear within the first month.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">What Our Clients Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-lg p-8 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="absolute top-6 right-8 text-6xl font-heading text-primary/10 leading-none select-none">
                "
              </span>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
