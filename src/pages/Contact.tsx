import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Unity Spirit Partners",
  url: "https://unityspiritpartners.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Unity Spirit Partners Inc.",
    telephone: "+1-365-855-8777",
    email: "contact@unityspiritpartners.com",
    url: "https://unityspiritpartners.com",
  },
};

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Unity Spirit Partners</title>
        <meta
          name="description"
          content="Get in touch with Unity Spirit Partners. Call, email, WhatsApp, or message us on Telegram for security-first automation solutions."
        />
        <link rel="canonical" href="https://unityspiritpartners.com/contact" />
        <meta property="og:title" content="Contact Us | Unity Spirit Partners" />
        <meta property="og:description" content="Get in touch with Unity Spirit Partners for security-first automation solutions. Call, email, WhatsApp, or Telegram." />
        <meta property="og:url" content="https://unityspiritpartners.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Unity Spirit Partners" />
        <meta name="twitter:description" content="Get in touch with Unity Spirit Partners for security-first automation solutions. Call, email, WhatsApp, or Telegram." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to reach us.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="tel:+13658558777"
              className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-300 block"
              data-contact-location="Contact Page"
            >
              <Phone className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-heading font-semibold text-sm mb-1">Call Us</h3>
              <p className="text-sm text-primary/80 font-semibold">+1 (365) 855-8777</p>
              <p className="text-xs text-muted-foreground mt-1">Mon-Fri 9am-6pm EST →</p>
            </a>
            <a
              href="mailto:contact@unityspiritpartners.com?subject=Contact%20Page%20Inquiry"
              className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-300 block"
              data-contact-location="Contact Page"
            >
              <Mail className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-heading font-semibold text-sm mb-1">Email Us</h3>
              <p className="text-sm text-primary/80 font-semibold">contact@unityspiritpartners.com</p>
              <p className="text-xs text-muted-foreground mt-1">24-hour response time →</p>
            </a>
            <a
              href="https://wa.me/13658558777"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-300 block"
              data-contact-location="Contact Page"
            >
              <MessageCircle className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-heading font-semibold text-sm mb-1">WhatsApp</h3>
              <p className="text-sm text-primary/80 font-semibold">+1 (365) 855-8777</p>
              <p className="text-xs text-muted-foreground mt-1">Chat with us instantly →</p>
            </a>
            <a
              href="https://t.me/unityspiritpartners"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] transition-all duration-300 block"
              data-contact-location="Contact Page"
            >
              <Send className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-heading font-semibold text-sm mb-1">Telegram</h3>
              <p className="text-sm text-primary/80 font-semibold">@unityspiritpartners</p>
              <p className="text-xs text-muted-foreground mt-1">Message us on Telegram →</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
