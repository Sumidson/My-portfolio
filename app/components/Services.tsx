"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">What I Do</span>
          <h2 className="section-title mt-2">
            Services<span className="accent-text">.</span>
          </h2>
        </ScrollReveal>

        {/* Service List */}
        <StaggerContainer className="space-y-0" staggerDelay={0.1}>
          {services.map((s) => (
            <StaggerItem key={s.num}>
              <Link
                href={`/services/${s.slug}`}
                className="group block border-t border-[var(--border-subtle)] last:border-b py-10 md:py-12"
              >
                <motion.div
                  className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Number */}
                  <span className="text-[var(--text-muted)] text-sm font-mono w-12 flex-shrink-0 transition-colors duration-500 group-hover:text-[var(--accent)]">
                    {s.num}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight flex-1 transition-all duration-700 group-hover:text-[var(--accent)]"
                    style={{
                      fontFamily: "var(--font-heading), system-ui",
                      transitionTimingFunction: "var(--ease-out-expo)",
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs flex-shrink-0 hidden lg:block">
                    {s.description.length > 120
                      ? s.description.substring(0, 120) + "..."
                      : s.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:rotate-45">
                    <ArrowUpRight
                      size={16}
                      className="transition-colors duration-500 text-[var(--text-secondary)] group-hover:text-black"
                    />
                  </div>
                </motion.div>

                {/* Mobile description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-4 lg:hidden">
                  {s.description.length > 120
                    ? s.description.substring(0, 120) + "..."
                    : s.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-4 md:ml-24">
                  {s.tools.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[var(--text-tertiary)] px-3 py-1.5 rounded-full border border-[var(--border-subtle)] transition-all duration-500 group-hover:border-[var(--border-hover)] group-hover:text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                  {s.tools.length > 4 && (
                    <span className="text-xs text-[var(--text-muted)] px-3 py-1.5">
                      +{s.tools.length - 4} more
                    </span>
                  )}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
