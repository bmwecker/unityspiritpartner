import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Services = lazy(() => import("./pages/Services"));
const FrameworkPage = lazy(() => import("./pages/FrameworkPage"));
const Contact = lazy(() => import("./pages/Contact"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const About = lazy(() => import("./pages/About"));
const Industries = lazy(() => import("./pages/Industries"));
const Process = lazy(() => import("./pages/Process"));
const Resources = lazy(() => import("./pages/Resources"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const AiAutomation = lazy(() => import("./pages/services/AiAutomation"));
const CustomBots = lazy(() => import("./pages/services/CustomBots"));
const DataExtraction = lazy(() => import("./pages/services/DataExtraction"));
const Cybersecurity = lazy(() => import("./pages/services/Cybersecurity"));
const TechnicalSeo = lazy(() => import("./pages/services/TechnicalSeo"));
const BlogPostPage = lazy(() => import("./pages/BlogPost"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const AccessibilityPage = lazy(() => import("./pages/Accessibility"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai-automation" element={<AiAutomation />} />
              <Route path="/services/custom-bots" element={<CustomBots />} />
              <Route path="/services/data-extraction" element={<DataExtraction />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/technical-seo" element={<TechnicalSeo />} />
              <Route path="/framework" element={<FrameworkPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/security-compliance" element={<SecurityPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/process" element={<Process />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/terms-of-service" element={<Terms />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
