import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Cpu, Database, Lock, Search } from "lucide-react";
import Hero3DBackground from "@/components/effects/Hero3DBackground";

const credibilityItems = [
  { icon: Cpu, label: "AI Automation" },
  { icon: Bot, label: "Custom Bots" },
  { icon: Database, label: "Data Extraction" },
  { icon: Lock, label: "Cybersecurity" },
  { icon: Search, label: "Technical SEO" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Hero3DBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(235_80%_65%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(270_70%_60%/0.1),transparent_50%)]" />

      <div className="container relative z-10 px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Security-First Operations Automation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-gradient-iridescent">
            Automate Operations.
            <br />
            <span className="text-gradient">Eliminate Risk.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We build secure automation systems for operations-driven organizations.
            First pilot delivered in 10–14 days. Production-grade. Monitored. Documented.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="gradient" size="lg" className="premium-button" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="gradient" size="lg" className="premium-button" asChild>
              <a href="tel:+13658558777">Call +1 (365) 855-8777</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 border-t border-border/50 pt-8"
        >
          {credibilityItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
              <item.icon size={18} className="text-primary" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
