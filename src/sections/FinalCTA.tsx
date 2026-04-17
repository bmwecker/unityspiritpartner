import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, Linkedin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(235_80%_65%/0.15),transparent_60%)]" />
      <div className="container relative mx-auto px-4 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-10 md:p-14 max-w-[900px] w-full text-center relative overflow-hidden"
        >
          {/* Cosmic orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[600px] h-[600px] rounded-full border border-primary/[0.06]"
              style={{ animation: "spin 40s linear infinite" }}
            />
            <div
              className="absolute w-[450px] h-[450px] rounded-full border border-accent/[0.05]"
              style={{ animation: "spin 30s linear infinite reverse" }}
            />
            <div
              className="absolute w-[300px] h-[300px] rounded-full border border-primary/[0.04]"
              style={{ animation: "spin 50s linear infinite" }}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(235_80%_65%/0.08),transparent_60%)]" />
          <div className="relative z-10">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-6">
              No Sales Pitch — Just a Working Session
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gradient-iridescent">
              Ready to automate your security operations?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 60-minute assessment with a senior engineer. Walk away with a prioritized
              automation roadmap — whether you work with us or not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="gradient" size="lg" className="premium-button shadow-[0_0_30px_hsl(235_80%_65%/0.25)] hover:shadow-[0_0_40px_hsl(235_80%_65%/0.4)] transition-shadow duration-300" asChild>
                <Link to="/contact">Request Your Free Assessment →</Link>
              </Button>
              <Button variant="outline" size="lg" className="premium-button" asChild>
                <a href="tel:+13658558777">
                  <Phone size={16} className="mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <a
                href="mailto:contact@unityspiritpartners.com"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail size={14} /> contact@unityspiritpartners.com
              </a>
              <a
                href="https://unityspiritpartners.com"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Globe size={14} /> unityspiritpartners.com
              </a>
              <a
                href="https://linkedin.com/company/unityspiritpartners"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
