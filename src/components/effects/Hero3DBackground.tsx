import { useReducedMotion } from "./useReducedMotion";

/**
 * CSS-only replacement for the former Three.js spiral galaxy hero background.
 * Layered radial gradients + a rotating star-ring create a cosmic feel
 * without any WebGL dependency.
 */
export default function Hero3DBackground() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ mixBlendMode: "screen", opacity: 0.7 }}
    >
      {/* Core galaxy glow */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(80vw, 600px)",
          height: "min(80vw, 600px)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--accent) / 0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "nebulaPulse 10s ease-in-out infinite",
        }}
      />

      {/* Rotating spiral arms (conic gradient) */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(90vw, 700px)",
          height: "min(90vw, 700px)",
          transform: "translate(-50%, -50%)",
          background:
            "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.08) 30deg, transparent 60deg, hsl(var(--accent) / 0.06) 120deg, transparent 150deg, hsl(var(--accent-pink) / 0.05) 210deg, transparent 240deg, hsl(var(--primary) / 0.07) 300deg, transparent 330deg)",
          borderRadius: "50%",
          filter: "blur(20px)",
          animation: "heroGalaxySpin 60s linear infinite",
        }}
      />

      {/* Outer halo ring */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(100vw, 800px)",
          height: "min(100vw, 800px)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, transparent 55%, hsl(var(--primary) / 0.06) 65%, transparent 75%)",
          filter: "blur(10px)",
          animation: "heroGalaxySpin 90s linear infinite reverse",
        }}
      />
    </div>
  );
}
