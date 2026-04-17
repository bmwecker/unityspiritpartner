import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Key, Cloud, ClipboardCheck, GitBranch, Radar, ArrowRight } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const services = [
  {
    icon: Shield,
    title: "SecOps Automation",
    desc: "End-to-end SOAR implementation and playbook engineering. We design, build, and tune automated response workflows that cut MTTR dramatically.",
    tag: "SOAR · Playbooks · SIEM",
    href: "/services",
  },
  {
    icon: Key,
    title: "Identity & Access Management",
    desc: "Zero-trust identity architecture, privilege access automation, and lifecycle management that secures every account without slowing your business down.",
    tag: "IAM · PAM · Zero Trust",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Security Posture",
    desc: "Continuous monitoring and automated remediation of misconfigurations across AWS, Azure, and GCP. Stop cloud drift before it becomes a breach.",
    tag: "CSPM · AWS · Azure · GCP",
    href: "/services",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Automation",
    desc: "Automated evidence collection, control mapping, and gap analysis for SOC 2, ISO 27001, HIPAA, and FedRAMP. Turn audit prep from weeks to hours.",
    tag: "SOC 2 · ISO 27001 · HIPAA",
    href: "/services",
  },
  {
    icon: GitBranch,
    title: "DevSecOps Integration",
    desc: "Embed security into your CI/CD pipeline with automated SAST, DAST, container scanning, and policy-as-code — without slowing your release cadence.",
    tag: "CI/CD · SAST · DAST · IaC",
    href: "/services",
  },
  {
    icon: Radar,
    title: "Threat Detection Engineering",
    desc: "Custom detection rules, correlation logic, and threat models built for your environment. We tune signal-to-noise ratios until only real threats surface.",
    tag: "SIEM · Sigma · ATT&CK",
    href: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(235_80%_65%/0.08),transparent_60%)]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">What We Deliver</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gradient-iridescent">Services</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard>
                <Link
                  to={s.href}
                  className="glass-panel rounded-lg p-8 block group hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 h-full relative overflow-hidden"
                  style={{ borderColor: "transparent" }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <span className="inline-block text-xs text-muted-foreground bg-muted/50 rounded-full px-3 py-1 mb-4">
                    {s.tag}
                  </span>
                  <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
