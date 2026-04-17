import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 85, suffix: "%", label: "Faster Mean Time to Respond", sub: "Across client environments post-deployment" },
  { value: 60, suffix: "%", label: "Reduction in Alert Volume", sub: "After AI triage tuning and deduplication" },
  { value: 3, suffix: "×", label: "Faster Compliance Cycles", sub: "Through automated evidence and control monitoring" },
  { value: 0, suffix: "", prefix: "$", label: "Client Breach Cost Post-Automation", sub: "No client breach post-implementation to date" },
];

function CountUp({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const duration = 1600;
          const animate = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * value));
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-heading text-gradient mb-2">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-accent opacity-[0.03]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Results</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">Proven Impact</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <CountUp value={m.value} suffix={m.suffix} prefix={m.prefix} />
              <div className="text-sm font-semibold text-foreground mb-1">{m.label}</div>
              <div className="text-xs text-muted-foreground">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
