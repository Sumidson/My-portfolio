"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive || hoveredProject === null) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = 0;
    let y = 0;

    const updatePosition = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      rafRef.current = null;
    };

    const moveCursor = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, hoveredProject]);

  const activeProject =
    hoveredProject !== null ? projects[hoveredProject] : null;

  return (
    <section id="projects" className="section relative" ref={sectionRef}>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[450px] h-[320px] pointer-events-none z-40 rounded-2xl overflow-hidden transition-opacity duration-300 ease-out will-change-transform"
        style={{ opacity: activeProject ? 1 : 0 }}
        aria-hidden="true"
      >
        {activeProject && (
          <>
            <div
              className="absolute inset-0 z-0 scale-110"
              style={{
                background: `radial-gradient(circle at center, ${activeProject.color} 0%, transparent 70%)`,
                opacity: 0.6,
              }}
            />
            <div className="absolute inset-2 z-10 rounded-xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover opacity-80"
                sizes="450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-white font-bold text-xl drop-shadow-md">
                  {activeProject.title}
                </span>
                <span className="text-xs text-white/80 uppercase tracking-widest">
                  {activeProject.category}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
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
                        color: hoveredProject === i ? "transparent" : "white",
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
