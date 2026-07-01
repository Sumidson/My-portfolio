"use client";

import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  color?: string;
}

export default function AnimatedBackground({ color = "var(--accent)" }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large orbiting blob 1 */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.04]"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: "blur(80px)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large orbiting blob 2 */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.03]"
        style={{
          background: `radial-gradient(circle, #FF3366 0%, transparent 70%)`,
          filter: "blur(100px)",
          bottom: "-15%",
          left: "-10%",
        }}
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Smaller accent blob */}
      <motion.div
        className="absolute w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full opacity-[0.05]"
        style={{
          background: `radial-gradient(circle, #00E5FF 0%, transparent 70%)`,
          filter: "blur(60px)",
          top: "40%",
          left: "50%",
        }}
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
