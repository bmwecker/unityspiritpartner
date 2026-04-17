import { useRef, useCallback } from "react";
import { useCanHover, useReducedMotion } from "./useReducedMotion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

export default function TiltCard({ children, className = "", as: Tag = "div", ...rest }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();
  const reduced = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (!canHover || reduced || !ref.current) return;
      if (rafRef.current) return; // throttle
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current!;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
        rafRef.current = null;
      });
    },
    [canHover, reduced]
  );

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} transition-transform duration-300 ease-out`}
      style={{ willChange: canHover && !reduced ? "transform" : undefined, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
