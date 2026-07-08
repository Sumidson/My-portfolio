"use client";

import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const skillCategories = [
  {
    title: "Languages & Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 93 },
      { name: "React Native", level: 80 },
      { name: "HTML5 / CSS3 / Tailwind", level: 90 },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js / Express.js", level: 88 },
      { name: "REST APIs & Lambda", level: 85 },
      { name: "PostgreSQL & Supabase", level: 80 },
      { name: "DynamoDB & AWS Cloud", level: 82 },
    ],
  },
  {
    title: "Tools & Core Concepts",
    skills: [
      { name: "Git / GitHub / VS Code", level: 90 },
      { name: "Figma / UI/UX Design", level: 85 },
      { name: "Postman / Vercel", level: 88 },
      { name: "DSA / OOP / DBMS", level: 82 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "JavaScript", "Python", "Java", "C++", "SQL",
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "REST APIs",
  "AWS Lambda", "AWS Cognito", "DynamoDB", "PostgreSQL", "Supabase", "Git", "GitHub",
  "Figma", "Postman", "Vercel", "UI/UX", "Data Structures", "OOP"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="section-label">My Arsenal</span>
          <h2 className="section-title mt-2">
            Tech Stack<span className="accent-text">.</span>
          </h2>
        </ScrollReveal>

        {/* Marquee */}
        <ScrollReveal className="mb-20 overflow-hidden" delay={0.2}>
          <div
            className="flex gap-4"
            style={{
              animation: "marquee 30s linear infinite",
              width: "max-content",
            }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-500"
              >
                {tech}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Bars Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={0.1 + ci * 0.15}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[var(--text-secondary)]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[var(--accent)] font-medium font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--accent), var(--accent-dim))",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + ci * 0.15 + si * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
