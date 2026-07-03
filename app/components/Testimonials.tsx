"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    text: "Working with Sumidson was a game-changer. The design quality exceeded expectations, and the attention to detail was remarkable.",
    initials: "SC",
  },
  {
    name: "Michael Torres",
    role: "Product Manager, Innovate Co.",
    text: "Incredible ability to translate complex requirements into elegant interfaces. User engagement increased by 60% after the redesign.",
    initials: "MT",
  },
  {
    name: "Emily Johnson",
    role: "Founder, Creative Bloom",
    text: "The brand identity perfectly captures our essence. Every touchpoint feels cohesive and premium. Highly recommend.",
    initials: "EJ",
  },
  {
    name: "David Kim",
    role: "CTO, DataFlow Systems",
    text: "Exceptional frontend skills combined with a keen design eye. Delivered our dashboard project ahead of schedule with flawless quality.",
    initials: "DK",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-2">
            Kind Words<span className="accent-text">.</span>
          </h2>
        </ScrollReveal>

        {/* Featured Testimonial */}
        <ScrollReveal delay={0.2} className="max-w-4xl">
          <Quote size={40} className="text-[var(--accent)] opacity-30 mb-6" />

          {/* Big quote */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote
                  className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] tracking-tight text-white"
                  style={{ fontFamily: "var(--font-heading), system-ui" }}
                >
                  &ldquo;{testimonials[active].text}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Author + dots */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-[var(--border-subtle)] pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-black text-sm font-bold">
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonials[active].name}
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    {testimonials[active].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-700 ${
                    active === i
                      ? "bg-[var(--accent)] w-8"
                      : "bg-[var(--text-muted)] w-4 hover:bg-[var(--text-tertiary)]"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
