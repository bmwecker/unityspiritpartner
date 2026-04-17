import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import Hero from "@/sections/Hero";
import CosmicDivider from "@/components/effects/CosmicDivider";

// Below-the-fold sections — lazy-loaded to speed up initial paint
const CategoryDefinition = lazy(() => import("@/sections/CategoryDefinition"));
const OperationalProblems = lazy(() => import("@/sections/OperationalProblems"));
const ServicesGrid = lazy(() => import("@/sections/ServicesGrid"));
const FrameworkSection = lazy(() => import("@/sections/FrameworkSection"));
const UnityMethod = lazy(() => import("@/sections/UnityMethod"));
const ResultsSection = lazy(() => import("@/sections/ResultsSection"));
const Testimonials = lazy(() => import("@/sections/Testimonials"));
const CaseStudiesPreview = lazy(() => import("@/sections/CaseStudiesPreview"));
const SecuritySection = lazy(() => import("@/sections/SecuritySection"));
const FAQ = lazy(() => import("@/sections/FAQ"));
const FinalCTA = lazy(() => import("@/sections/FinalCTA"));

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unity Spirit Partners Inc.",
  url: "https://unityspiritpartners.com",
  logo: "https://unityspiritpartners.com/favicon.png",
  description:
    "Operations technology partner specializing in security-first AI automation, custom bots, data extraction, cybersecurity, and technical SEO for modern organizations.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-365-855-8777",
      contactType: "sales",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "contact@unityspiritpartners.com",
      contactType: "customer support",
    },
  ],
  sameAs: [],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Unity Spirit Partners",
  url: "https://unityspiritpartners.com",
};

const Index = () => (
  <Layout>
    <Helmet>
      <title>Unity Spirit Partners | Security-First AI Automation</title>
      <meta
        name="description"
        content="Unity Spirit Partners builds production-ready AI automation, custom bots, data extraction, cybersecurity, and technical SEO systems for operations-driven organizations."
      />
      <link rel="canonical" href="https://unityspiritpartners.com/" />
      <meta property="og:title" content="Unity Spirit Partners | Security-First AI Automation" />
      <meta property="og:description" content="Production-ready AI automation, custom bots, data extraction, cybersecurity, and technical SEO for operations-driven organizations." />
      <meta property="og:url" content="https://unityspiritpartners.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Unity Spirit Partners | Security-First AI Automation" />
      <meta name="twitter:description" content="Production-ready AI automation, custom bots, data extraction, cybersecurity, and technical SEO for operations-driven organizations." />
      <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
    </Helmet>
    <Hero />
    <CosmicDivider />
    <Suspense fallback={null}>
      <CategoryDefinition />
      <CosmicDivider />
      <OperationalProblems />
      <CosmicDivider />
      <ServicesGrid />
      <CosmicDivider />
      <FrameworkSection />
      <CosmicDivider />
      <UnityMethod />
      <CosmicDivider />
      <ResultsSection />
      <CosmicDivider />
      <Testimonials />
      <CosmicDivider />
      <CaseStudiesPreview />
      <CosmicDivider />
      <SecuritySection />
      <CosmicDivider />
      <FAQ />
      <CosmicDivider />
      <FinalCTA />
    </Suspense>
  </Layout>
);

export default Index;
