"use client";

import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Sept 2025 — Present",
    role: "Frontend Developer",
    company: "ElevenX",
    description:
      "Developed and maintained responsive web applications using modern Frontend technologies such as React, Next.js, and Tailwind CSS. Built reusable UI components and optimized website performance for overall user engagement.",
  },
  {
    period: "Feb 2025 — Aug 2026",
    role: "Marketing Lead",
    company: "EzLearn",
    description:
      "Led marketing initiatives, planned digital marketing campaigns, and analyzed performance to drive brand awareness and user acquisition. Collaborated with cross-functional teams.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">Career</span>
          <h2 className="section-title mt-2">
            Experience<span className="accent-text">.</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <StaggerContainer className="space-y-0" staggerDelay={0.15}>
          {experiences.map((exp) => (
            <StaggerItem key={exp.period}>
              <motion.div
                className="group border-t border-[var(--border-subtle)] last:border-b py-10 md:py-12"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Period */}
                  <div className="md:col-span-3">
                    <span className="text-sm text-[var(--text-tertiary)] font-mono transition-colors duration-700 group-hover:text-[var(--accent)] flex items-center gap-2">
                      <Briefcase size={14} className="opacity-50" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div className="md:col-span-4">
                    <h3
                      className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-700 group-hover:text-[var(--accent)]"
                      style={{ fontFamily: "var(--font-heading), system-ui" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-[var(--accent)] text-sm mt-1 opacity-70">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
