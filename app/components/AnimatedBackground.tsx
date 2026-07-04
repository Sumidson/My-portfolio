import type { CSSProperties } from "react";

interface AnimatedBackgroundProps {
  color?: string;
}

export default function AnimatedBackground({
  color = "var(--accent)",
}: AnimatedBackgroundProps) {
  return (
    <div
      className="animated-bg fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="animated-bg-blob animated-bg-blob-1"
        style={{ "--blob-color": color } as CSSProperties}
      />
      <div className="animated-bg-blob animated-bg-blob-2" />
      <div className="animated-bg-blob animated-bg-blob-3" />
    </div>
  );
}
