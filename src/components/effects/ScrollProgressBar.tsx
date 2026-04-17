import { useEffect, useState } from "react";
import { useReducedMotion, useIsMobileViewport } from "./useReducedMotion";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  const isMobile = useIsMobileViewport();

  useEffect(() => {
    if (reduced || isMobile) return;
    const handler = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [reduced, isMobile]);

  if (reduced || isMobile) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[100]" aria-hidden="true">
      <div
        className="h-full bg-gradient-accent transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
