import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import FrameworkSection from "@/sections/FrameworkSection";
import FinalCTA from "@/sections/FinalCTA";
import { Helmet } from "react-helmet-async";

export default function FrameworkPage() {
  return (
    <Layout>
      <Helmet>
        <title>The Framework | Unity Spirit Partners</title>
        <meta name="description" content="Our six-layer architecture ensures every automation is secure, monitored, and production-ready." />
        <link rel="canonical" href="https://unityspiritpartners.com/framework" />
        <meta property="og:title" content="The Framework | Unity Spirit Partners" />
        <meta property="og:description" content="Our six-layer architecture ensures every automation is secure, monitored, and production-ready." />
        <meta property="og:url" content="https://unityspiritpartners.com/framework" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Framework | Unity Spirit Partners" />
        <meta name="twitter:description" content="Our six-layer architecture ensures every automation is secure, monitored, and production-ready." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Framework</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              The <span className="text-gradient">Framework</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our six-layer architecture ensures every automation is secure, monitored, and production-ready.
            </p>
          </motion.div>
        </div>
      </section>
      <FrameworkSection />
      <FinalCTA />
    </Layout>
  );
}
