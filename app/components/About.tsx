"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const stats = [
  { label: "Years\nExperience", value: 2, suffix: "+" },
  { label: "Projects\nCompleted", value: 10, suffix: "+" },
  { label: "Happy\nClients", value: 5, suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return (
    <motion.span
      className="text-4xl md:text-5xl font-bold text-white"
      style={{ fontFamily: "var(--font-heading), system-ui" }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, target, { duration: 2, ease: "easeOut" });
      }}
    >
      {display}
      <span className="accent-text">{suffix}</span>
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Label */}
        <ScrollReveal>
          <span className="section-label">About Me</span>
        </ScrollReveal>

        {/* Photo + Heading Row */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 mt-8">
          {/* Left — Photo */}
          <ScrollReveal delay={0.1} className="md:col-span-2">
            <motion.div
              className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Placeholder — replace /profile.jpg with your actual photo */}
              <Image
                src="/Photo.jpg"
                alt="Sumidson S Henry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              {/* Accent corner decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#070a0f]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading), system-ui" }}>
                  Sumidson S Henry
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  Frontend Developer
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right — Text Content */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <ScrollReveal delay={0.15}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-heading), system-ui" }}
              >
                I build digital products that people{" "}
                <span className="accent-text">love</span> to use
                <span className="accent-text">.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[var(--text-secondary)] leading-[1.8] mb-6">
                Hey! I&apos;m Sumidson, a Frontend Developer at ElevenX who enjoys
                bringing ideas to life through code. I specialize in building
                responsive web applications with React, Next.js, and TypeScript
                while leveraging AWS cloud services to create scalable backend
                solutions. Previously, as a Marketing Lead Intern at EZ Learn, I
                combined technical and strategic skills to drive user engagement. I
                love solving real-world problems, learning new technologies, and
                crafting experiences that are simple, fast, and intuitive. When
                I&apos;m not coding, you&apos;ll probably find me exploring AI,
                working on personal projects, or planning my next adventure.
              </p>

              {/* Resume link */}
              <motion.a
                href="/Sumidson_Resume.pdf"
                download
                className="inline-flex items-center gap-3 text-[var(--accent)] font-medium group transition-all duration-500"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <span className="border-b border-[var(--accent)] pb-0.5 group-hover:border-transparent transition-all duration-500">
                  Download my resume
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:translate-y-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.a>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats Row */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-[var(--border-subtle)]"
          staggerDelay={0.15}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center md:text-left">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-xs text-[var(--text-tertiary)] mt-2 uppercase tracking-[0.15em] whitespace-pre-line leading-relaxed">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
