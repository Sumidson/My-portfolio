"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Projects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section id="projects" className="section relative">
      {/* Floating Image Cursor Effect */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[450px] h-[320px] pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden transition-all duration-500 ease-out flex items-center justify-center mix-blend-normal"
        style={{ opacity: hoveredProject !== null ? 1 : 0 }}
      >
        {projects.map((p, i) => (
          <div
            key={`glow-${i}`}
            className="absolute inset-0 transition-transform duration-700 ease-out z-0"
            style={{
              background: `radial-gradient(circle at center, ${p.color} 0%, transparent 70%)`,
              opacity: hoveredProject === i ? 0.8 : 0,
              transform:
                hoveredProject === i
                  ? "scale(1.2)"
                  : "scale(0.8) translateY(20px)",
              filter: "blur(40px)",
            }}
          />
        ))}

        {projects.map((p, i) => (
          <div
            key={`img-${i}`}
            className="absolute inset-2 z-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ease-out bg-black"
            style={{
              opacity: hoveredProject === i ? 1 : 0,
              transform:
                hoveredProject === i
                  ? "scale(1) rotate(-2deg)"
                  : "scale(0.8) rotate(5deg) translateY(20px)",
            }}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover opacity-80"
              sizes="450px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <span className="text-white font-bold text-xl drop-shadow-md">
                {p.title}
              </span>
              <span className="text-xs text-white/80 uppercase tracking-widest">
                {p.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title mt-2">
              Selected Work<span className="accent-text">.</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed hidden md:block">
            Hover over the project titles to see the preview photos in action.
            Click to see project details.
          </p>
        </ScrollReveal>

        {/* Projects List */}
        <StaggerContainer
          className="space-y-0 relative z-10"
          staggerDelay={0.08}
        >
          <div onMouseLeave={() => setHoveredProject(null)}>
            {projects.map((p, i) => (
              <StaggerItem key={p.title}>
                <Link
                  href={`/projects/${p.slug}`}
                  data-cursor-hover
                  onMouseEnter={() => setHoveredProject(i)}
                  className="group block border-t border-[var(--border-subtle)] last:border-b py-8 md:py-12"
                >
                  <motion.div
                    className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                    whileHover={{ x: 8 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="text-white/40 text-sm font-mono w-16 flex-shrink-0 transition-colors duration-700 group-hover:text-white">
                      {p.year}
                    </span>

                    <h3
                      className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] flex-1 transition-all duration-700"
                      style={{
                        fontFamily: "var(--font-heading), system-ui",
                        WebkitTextStroke:
                          hoveredProject === i
                            ? `1px ${p.color}`
                            : "0px transparent",
                        color:
                          hoveredProject === i ? "transparent" : "white",
                      }}
                    >
                      {p.title}
                    </h3>

                    <span className="hidden md:block text-xs text-white/40 uppercase tracking-[0.15em] flex-shrink-0 transition-colors duration-700 group-hover:text-white">
                      {p.category}
                    </span>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
