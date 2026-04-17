import { useEffect, useRef } from "react";
import { useReducedMotion, useIsMobileViewport } from "./useReducedMotion";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobileViewport();

  useEffect(() => {
    if (reduced || isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let running = true;

    const trail: { x: number; y: number; age: number }[] = [];
    const maxAge = 30; // frames

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      trail.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (trail.length > 20) trail.shift();
    };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age++;
        if (trail[i].age > maxAge) {
          trail.splice(i, 1);
          continue;
        }
        const t = trail[i];
        const life = 1 - t.age / maxAge;
        const size = 6 * life;
        const alpha = 0.3 * life;

        const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, size * 3);
        grad.addColorStop(0, `hsla(235,80%,70%,${alpha})`);
        grad.addColorStop(0.5, `hsla(270,70%,65%,${alpha * 0.4})`);
        grad.addColorStop(1, `hsla(235,80%,70%,0)`);

        ctx.beginPath();
        ctx.arc(t.x, t.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, isMobile]);

  if (reduced || isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9998 }}
    />
  );
}
