import { useEffect, useRef, useCallback } from "react";
import { useReducedMotion, useIsMobileViewport } from "./useReducedMotion";

interface Star {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  opacity: number;
  progress: number;
  active: boolean;
}

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobileViewport();

  const createStar = useCallback((w: number, h: number): Star => {
    const angle = (Math.PI / 6) + Math.random() * (Math.PI / 5); // 30-66 degrees
    return {
      x: Math.random() * w,
      y: Math.random() * h * 0.5,
      angle,
      speed: 0.008 + Math.random() * 0.012,
      length: 80 + Math.random() * 120,
      opacity: 0.6 + Math.random() * 0.4,
      progress: 0,
      active: true,
    };
  }, []);

  useEffect(() => {
    if (reduced || isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let running = true;
    const stars: Star[] = [];
    let lastSpawn = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (timestamp: number) => {
      if (!running) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Spawn new star every 5-12 seconds
      if (timestamp - lastSpawn > 5000 + Math.random() * 7000) {
        stars.push(createStar(w, h));
        lastSpawn = timestamp;
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          stars.splice(i, 1);
          continue;
        }

        const headX = s.x + Math.cos(s.angle) * s.length * s.progress * 4;
        const headY = s.y + Math.sin(s.angle) * s.length * s.progress * 4;
        const tailLen = s.length * (1 - s.progress);
        const tailX = headX - Math.cos(s.angle) * tailLen;
        const tailY = headY - Math.sin(s.angle) * tailLen;

        // Fade in then out
        const fade = s.progress < 0.2
          ? s.progress / 0.2
          : s.progress > 0.7
            ? (1 - s.progress) / 0.3
            : 1;

        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, `hsla(235,80%,80%,0)`);
        grad.addColorStop(0.6, `hsla(235,80%,85%,${s.opacity * fade * 0.4})`);
        grad.addColorStop(1, `hsla(210,60%,95%,${s.opacity * fade})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(headX, headY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210,60%,95%,${s.opacity * fade * 0.8})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    // Seed initial spawn time
    lastSpawn = performance.now();
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        lastSpawn = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, isMobile, createStar]);

  if (reduced || isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -8 }}
    />
  );
}
