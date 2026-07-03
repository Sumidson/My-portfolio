"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const magnifier = magnifierRef.current;
    const container = containerRef.current;
    if (!magnifier || !container) return;

    let x = 0;
    let y = 0;

    const updatePosition = () => {
      magnifier.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      rafRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const showSpotlight = () => {
      magnifier.style.opacity = "1";
    };
    const hideSpotlight = () => {
      magnifier.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", showSpotlight);
    container.addEventListener("mouseleave", hideSpotlight);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", showSpotlight);
      container.removeEventListener("mouseleave", hideSpotlight);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={containerRef}
      style={{
        background:
          "linear-gradient(135deg, #070a0f 0%, #151e2a 50%, #070a0f 100%)",
      }}
    >
      <div
        ref={magnifierRef}
        className="pointer-events-none fixed w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-700 ease-out z-0 will-change-transform"
        style={{
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(229, 169, 61, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20 flex flex-col items-center text-center">
        <h1
          className="flex flex-col items-center justify-center mt-12"
          style={{ fontFamily: "var(--font-heading), system-ui" }}
        >
          <motion.span
            className="block text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white"
            custom={0}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Digital
          </motion.span>
          <span className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2 sm:mt-0">
            <motion.span
              className="block text-[clamp(3.5rem,8vw,7rem)] font-serif italic font-medium leading-[0.9] text-[var(--accent)] drop-shadow-sm"
              custom={1}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              product
            </motion.span>
            <motion.span
              className="block text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white"
              custom={2}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              developer
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mt-32 md:mt-40 text-xs font-semibold uppercase tracking-widest text-white/50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-6 text-left">
            <p className="max-w-[200px] leading-relaxed">
              Web Development / AWS Cloud / Full-Stack
            </p>
            <p className="max-w-[200px] leading-relaxed">
              Currently available for freelance worldwide
            </p>
          </div>
          <div className="flex flex-col gap-6 text-left mt-8 sm:mt-0">
            <p className="max-w-[150px] leading-relaxed">
              Based
              <br />
              in India
            </p>
            <p className="max-w-[150px] leading-relaxed">
              Studied from Bennett University
            </p>
          </div>
          <div className="hidden md:flex h-20 w-px bg-white/20 mt-8 sm:mt-0 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white/60"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ height: "50%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
