"use client";

import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { Briefcase, Download } from "lucide-react";

const experiences = [
  {
    period: "Sep 2025 — May 2026",
    role: "Full Stack Developer",
    company: "ElevenX AI",
    description:
      "Developed responsive business web applications using Next.js, React.js, and modern frontend technologies. Collaborated with designers and backend teams to implement scalable, pixel-perfect, and cross-browser compatible interfaces. Optimized performance through component-based architecture and integrated REST APIs to build end-to-end digital solutions.",
  },
  {
    period: "Feb 2025 — Aug 2025",
    role: "Marketing Lead Intern",
    company: "Ez Learn",
    description:
      "Led digital marketing campaigns across social media to increase brand visibility and drive user engagement. Collaborated with cross-functional teams to execute marketing strategies and promotional campaigns. Analyzed metrics to optimize content strategy and audience reach, while coordinating with creators to deliver consistent brand messaging.",
    attachment: {
      label: "Offer Letter",
      url: "/Ez Learn Offer Letter.pdf",
    },
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
                    {exp.attachment && (
                      <a
                        href={exp.attachment.url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-black/20 dark:bg-white/5 border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 backdrop-blur-sm"
                      >
                        <Download size={14} />
                        {exp.attachment.label}
                      </a>
                    )}
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
