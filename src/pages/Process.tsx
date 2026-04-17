import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import UnityMethod from "@/sections/UnityMethod";
import { Helmet } from "react-helmet-async";

export default function Process() {
  return (
    <Layout>
      <Helmet>
        <title>Our Process – The Unity Method | Unity Spirit Partners</title>
        <meta name="description" content="A proven methodology for delivering production-grade automation systems with security built in from day one." />
        <link rel="canonical" href="https://unityspiritpartners.com/process" />
        <meta property="og:title" content="Our Process – The Unity Method | Unity Spirit Partners" />
        <meta property="og:description" content="A proven methodology for delivering production-grade automation systems with security built in from day one." />
        <meta property="og:url" content="https://unityspiritpartners.com/process" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Process – The Unity Method | Unity Spirit Partners" />
        <meta name="twitter:description" content="A proven methodology for delivering production-grade automation systems with security built in from day one." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Process</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              The Unity <span className="text-gradient">Method</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering production-grade automation systems with security built in from day one.
            </p>
          </motion.div>
        </div>
      </section>
      <UnityMethod />
    </Layout>
  );
}
