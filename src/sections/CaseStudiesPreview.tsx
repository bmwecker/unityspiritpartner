import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Truck, Briefcase } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const studies = [
  {
    icon: Factory,
    industry: "Manufacturing",
    title: "PDF Orders → ERP Integration",
    metric: "85% reduction in order processing time",
    desc: "Automated extraction of order data from PDF documents directly into ERP system.",
  },
  {
    icon: Truck,
    industry: "Logistics",
    title: "Invoice Automation Pipeline",
    metric: "70% faster invoice processing",
    desc: "End-to-end invoice capture, validation, and booking automation.",
  },
  {
    icon: Briefcase,
    industry: "Professional Services",
    title: "Lead Automation System",
    metric: "3x lead response speed",
    desc: "Automated lead capture, qualification, and CRM integration pipeline.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(235_80%_65%/0.04),transparent_50%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Case Studies</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">Real Results. Real Systems.</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="glass-panel rounded-lg p-8 group h-full">
                <s.icon className="text-primary mb-4" size={28} />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.industry}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="text-gradient font-heading font-bold text-sm mb-4">{s.metric}</div>
                <Link
                  to="/case-studies"
                  className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read case study <ArrowRight size={14} />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
