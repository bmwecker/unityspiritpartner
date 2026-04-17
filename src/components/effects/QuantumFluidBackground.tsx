import { useReducedMotion } from "./useReducedMotion";

/**
 * CSS-only replacement for the former Three.js Quantum Fluid background.
 * Renders layered radial-gradient nebula blobs with drift animations.
 * Zero JS overhead after mount — all animation via CSS @keyframes.
 */
export default function QuantumFluidBackground() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -2 }}
      aria-hidden="true"
    >
      {/* Base dark */}
      <div className="absolute inset-0 bg-background" />

      {/* Nebula blob 1 — purple */}
      <div
        className="absolute rounded-full"
        style={{
          width: "60vmax",
          height: "60vmax",
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "cosmic-drift-1 25s ease-in-out infinite",
        }}
      />

      {/* Nebula blob 2 — accent violet */}
      <div
        className="absolute rounded-full"
        style={{
          width: "50vmax",
          height: "50vmax",
          top: "40%",
          right: "-8%",
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.09) 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: "cosmic-drift-2 30s ease-in-out infinite",
        }}
      />

      {/* Nebula blob 3 — pink accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: "55vmax",
          height: "55vmax",
          bottom: "-10%",
          left: "25%",
          background:
            "radial-gradient(circle, hsl(var(--accent-pink) / 0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "cosmic-drift-3 35s ease-in-out infinite",
        }}
      />

      {/* Central glow pulse */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "40vmax",
          height: "40vmax",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "nebulaPulse 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
