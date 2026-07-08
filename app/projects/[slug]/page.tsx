"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import AnimatedBackground from "../../components/AnimatedBackground";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../../components/ScrollReveal";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070a0f] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070a0f] text-white font-sans selection:bg-[var(--accent)] selection:text-black">
      <AnimatedBackground color={project.color} />

      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-20">
        {/* Back navigation */}
        <motion.button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 mb-12 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -4 }}
        >
          <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm font-semibold tracking-wide uppercase">Back</span>
        </motion.button>

        {/* Hero Section */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-heading), system-ui" }}
          >
            {project.title}
            <span style={{ color: project.color }}>.</span>
          </h1>
        </ScrollReveal>

        {/* Image mockup showcase */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-16 bg-black/40"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </motion.div>
        </ScrollReveal>

        {/* Info Grid */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Details */}
          <div className="md:col-span-8 space-y-8">
            <ScrollReveal delay={0.2}>
              <h2
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading), system-ui" }}
              >
                Overview
              </h2>
              <p className="text-white/70 leading-[1.8] text-base md:text-lg">
                {project.description}
              </p>
            </ScrollReveal>

            {project.details && project.details.length > 0 && (
              <ScrollReveal delay={0.3}>
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-heading), system-ui" }}
                >
                  Key Achievements & Responsibilities
                </h2>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {project.details.map((detail, idx) => (
                    <StaggerItem key={idx}>
                      <motion.div
                        className="flex gap-3 text-white/70 text-sm md:text-base leading-relaxed"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        <span>{detail}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </ScrollReveal>
            )}
          </div>

          {/* Right Info Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            {project.techStack && (
              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/[0.01]"
                        whileHover={{ scale: 1.05, borderColor: project.color }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.4}>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                  Role
                </h3>
                <p className="text-sm text-white/80">{project.category}</p>
              </div>
            </ScrollReveal>

            {project.liveUrl && (
              <ScrollReveal delay={0.45}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                    Website
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-white transition-colors duration-300 font-semibold"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </ScrollReveal>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
