import { useEffect, useRef } from "react";
import { useReducedMotion, useIsMobileViewport } from "./useReducedMotion";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobileViewport();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let running = true;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!isMobile) window.addEventListener("mousemove", onMouse);

    // Layer 1: Static stars
    const staticCount = isMobile ? 120 : 300;
    const staticStars = Array.from({ length: staticCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.6 + 0.1,
      twinkleSpeed: Math.random() * 0.003 + 0.001,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Layer 2: Drifting stars
    const driftCount = isMobile ? 25 : 60;
    const driftStars = Array.from({ length: driftCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00015,
      size: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.5 + 0.2,
      twinkleSpeed: Math.random() * 0.005 + 0.002,
      twinkleOffset: Math.random() * Math.PI * 2,
      // Color: purple, blue, or white
      color: [
        "hsla(235,80%,75%,",
        "hsla(270,70%,70%,",
        "hsla(210,60%,80%,",
        "hsla(330,60%,70%,",
      ][Math.floor(Math.random() * 4)],
    }));

    // Layer 3: Nebula clouds (drawn as large radial gradients)
    const nebulaCount = isMobile ? 2 : 4;
    const nebulae = Array.from({ length: nebulaCount }, (_, i) => ({
      x: 0.15 + Math.random() * 0.7,
      y: 0.15 + Math.random() * 0.7,
      radius: 0.15 + Math.random() * 0.2,
      color: [
        [235, 80, 65],
        [270, 70, 60],
        [330, 80, 60],
        [210, 60, 70],
      ][i % 4],
      driftX: (Math.random() - 0.5) * 0.00003,
      driftY: (Math.random() - 0.5) * 0.00003,
    }));

    let time = 0;

    const draw = () => {
      if (!running) return;
      const w = canvas.width;
      const h = canvas.height;
      time++;

      ctx.clearRect(0, 0, w, h);

      // Parallax offsets
      const px1 = mouseX * 3;
      const py1 = mouseY * 3;
      const px2 = mouseX * 8;
      const py2 = mouseY * 8;
      const px3 = mouseX * 1.5;
      const py3 = mouseY * 1.5;

      // Layer 3: Nebula clouds (behind everything)
      for (const n of nebulae) {
        n.x += n.driftX;
        n.y += n.driftY;
        if (n.x < 0 || n.x > 1) n.driftX *= -1;
        if (n.y < 0 || n.y > 1) n.driftY *= -1;

        const nx = n.x * w + px3;
        const ny = n.y * h + py3;
        const nr = n.radius * Math.max(w, h);
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr);
        grad.addColorStop(0, `hsla(${n.color[0]},${n.color[1]}%,${n.color[2]}%,0.04)`);
        grad.addColorStop(0.5, `hsla(${n.color[0]},${n.color[1]}%,${n.color[2]}%,0.02)`);
        grad.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Layer 1: Static stars with twinkle
      for (const s of staticStars) {
        const twinkle = 0.5 + 0.5 * Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(s.x * w + px1, s.y * h + py1, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210,20%,90%,${alpha})`;
        ctx.fill();
      }

      // Layer 2: Drifting colored stars
      for (const s of driftStars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -0.05) s.x = 1.05;
        if (s.x > 1.05) s.x = -0.05;
        if (s.y < -0.05) s.y = 1.05;
        if (s.y > 1.05) s.y = -0.05;

        const twinkle = 0.4 + 0.6 * Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * twinkle;
        const sx = s.x * w + px2;
        const sy = s.y * h + py2;

        // Glow
        ctx.beginPath();
        ctx.arc(sx, sy, s.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = s.color + (alpha * 0.15) + ")";
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color + alpha + ")";
        ctx.fill();
      }

      // Occasional shooting star (desktop only)
      if (!isMobile && Math.random() < 0.002) {
        const sx = Math.random() * w;
        const sy = Math.random() * h * 0.5;
        const angle = Math.PI * 0.2 + Math.random() * 0.3;
        const len = 60 + Math.random() * 80;
        const grad = ctx.createLinearGradient(sx, sy, sx + Math.cos(angle) * len, sy + Math.sin(angle) * len);
        grad.addColorStop(0, "hsla(235,80%,80%,0.6)");
        grad.addColorStop(1, "hsla(235,80%,80%,0)");
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + Math.cos(angle) * len, sy + Math.sin(angle) * len);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        draw();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    draw();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced, isMobile]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none opacity-70"
    />
  );
}
