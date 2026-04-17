import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";
import ScrollProgressBar from "./effects/ScrollProgressBar";
import CookieConsentBanner from "./CookieConsentBanner";
import QuantumFluidBackground from "./effects/QuantumFluidBackground";

// Canvas effects – lazy-loaded so they don't block first paint
const ParticleBackground = lazy(() => import("./effects/ParticleBackground"));
const ShootingStars = lazy(() => import("./effects/ShootingStars"));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background cosmic-star-pattern">
      {/* Quantum Fluid — CSS-only cosmic background */}
      <QuantumFluidBackground />

      {/* All cosmic effects grouped under one ID for toggle control */}
      <div id="cosmic-effects-root">
        <Suspense fallback={null}>
          <ParticleBackground />
          <ShootingStars />
        </Suspense>

        {/* Cosmic grid overlay — subtle tech feel */}
        <div
          className="fixed inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            zIndex: -9,
            opacity: 0.025,
            backgroundImage:
              "linear-gradient(hsl(235 80% 65% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(235 80% 65% / 0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            animation: "cosmicGridMove 25s linear infinite",
          }}
        />

        {/* Pulsing nebula core glow */}
        <div
          className="fixed pointer-events-none"
          aria-hidden="true"
          style={{
            zIndex: -7,
            top: "50%",
            left: "50%",
            width: "500px",
            height: "500px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, hsl(235 80% 65% / 0.12) 0%, transparent 70%)",
            animation: "nebulaPulse 8s ease-in-out infinite",
            filter: "blur(60px)",
          }}
        />

        {/* Floating cosmic gradient orbs */}
        <div className="fixed inset-0 -z-[5] pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, hsl(235 80% 65%), transparent 70%)",
              animation: "cosmic-drift-1 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[40%] -right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, hsl(270 70% 60%), transparent 70%)",
              animation: "cosmic-drift-2 30s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-[10%] left-[30%] w-[450px] h-[450px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, hsl(330 80% 60%), transparent 70%)",
              animation: "cosmic-drift-3 35s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Cinematic film grain overlay — premium texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 1,
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />

      <ScrollProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileCTA />
      <CookieConsentBanner />
    </div>
  );
}
