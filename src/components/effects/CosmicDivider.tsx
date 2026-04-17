export default function CosmicDivider() {
  return (
    <div className="relative flex items-center justify-center py-4" aria-hidden="true">
      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute w-3 h-3 rounded-full bg-primary/60 shadow-[0_0_12px_hsl(235_80%_65%/0.5),0_0_30px_hsl(235_80%_65%/0.2)] animate-pulse" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent/40 shadow-[0_0_8px_hsl(270_70%_60%/0.4)] translate-x-16 animate-pulse [animation-delay:0.5s]" />
      <div className="absolute w-1 h-1 rounded-full bg-accent-pink/40 shadow-[0_0_6px_hsl(330_80%_60%/0.3)] -translate-x-12 animate-pulse [animation-delay:1s]" />
    </div>
  );
}
