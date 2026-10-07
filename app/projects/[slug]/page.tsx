"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Smile,
  BarChart3,
  HeartHandshake,
  BookOpen,
  Wind,
  Moon,
  BellRing,
  Palette,
  CheckCircle2,
  Smartphone,
  X
} from "lucide-react";
import { projects } from "../../data/projects";
import AnimatedBackground from "../../components/AnimatedBackground";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../../components/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Smile,
  BarChart3,
  HeartHandshake,
  BookOpen,
  Wind,
  Moon,
  BellRing,
  Sparkles,
  Palette,
  Smartphone
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

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

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20">
        {/* Back navigation */}
        <motion.button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 mb-12 group cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -4 }}
        >
          <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm font-semibold tracking-wide uppercase">Back to Portfolio</span>
        </motion.button>

        {/* Hero Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10" style={{ color: project.color }}>
              {project.category}
            </span>
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

        {/* Mockup Showcase Banner */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-16 bg-black/40 group"
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </motion.div>
        </ScrollReveal>

        {/* Info Grid */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Details */}
          <div className="md:col-span-8 space-y-12">
            <ScrollReveal delay={0.15}>
              <h2
                className="text-2xl font-bold mb-4 flex items-center gap-3"
                style={{ fontFamily: "var(--font-heading), system-ui" }}
              >
                <span>Project Overview</span>
              </h2>
              <p className="text-white/80 leading-[1.85] text-base md:text-lg font-light">
                {project.description}
              </p>
            </ScrollReveal>

            {project.details && project.details.length > 0 && (
              <ScrollReveal delay={0.25}>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-heading), system-ui" }}
                >
                  Key Highlights & Architecture
                </h2>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {project.details.map((detail, idx) => (
                    <StaggerItem key={idx}>
                      <motion.div
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300 flex items-start gap-4 text-white/80 text-sm md:text-base leading-relaxed"
                        whileHover={{ x: 4 }}
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 flex-shrink-0"
                          style={{ color: project.color }}
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
          <aside className="md:col-span-4 space-y-6">
            {project.techStack && (
              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/[0.02]"
                        whileHover={{ scale: 1.05, borderColor: project.color }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.3}>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                  Category
                </h3>
                <p className="text-sm font-medium text-white/90">{project.category}</p>
              </div>
            </ScrollReveal>

            {project.liveUrl && (
              <ScrollReveal delay={0.35}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                    Live Demo
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

            {project.githubUrl && (
              <ScrollReveal delay={0.4}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                    Repository
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-300 font-semibold"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </ScrollReveal>
            )}
          </aside>
        </div>

        {/* Feature Cards Grid (if present) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-24">
            <ScrollReveal>
              <div className="mb-10">
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: project.color }}>
                  Core Capabilities
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-2"
                  style={{ fontFamily: "var(--font-heading), system-ui" }}
                >
                  What the App Offers<span style={{ color: project.color }}>.</span>
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
              {project.features.map((feat, idx) => {
                const IconComponent = (feat.icon && iconMap[feat.icon]) || Sparkles;
                return (
                  <StaggerItem key={idx}>
                    <motion.div
                      className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between group hover:bg-white/[0.04]"
                      whileHover={{ y: -4 }}
                    >
                      <div>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                            border: `1px solid ${project.color}30`
                          }}
                        >
                          <IconComponent size={22} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                          {feat.title}
                        </h3>
                        <p className="text-white/65 text-sm leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        )}

        {/* App Screenshots Showcase (if present) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-24">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: project.color }}>
                    Visual Tour
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold mt-2"
                    style={{ fontFamily: "var(--font-heading), system-ui" }}
                  >
                    Application Interface<span style={{ color: project.color }}>.</span>
                  </h2>
                </div>
                <p className="text-white/40 text-xs md:text-sm">
                  Click any screen to view in full resolution
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {project.screenshots.map((screen, idx) => (
                <ScrollReveal key={idx} delay={0.06 * idx}>
                  <motion.div
                    onClick={() => setSelectedScreenshot(screen.url)}
                    className="cursor-pointer group flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -6 }}
                  >
                    <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-black/60">
                      <Image
                        src={screen.url}
                        alt={screen.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-3 bg-white/[0.01]">
                      <h4 className="text-xs font-semibold text-white/90 truncate">{screen.title}</h4>
                      <p className="text-[10px] text-white/40 line-clamp-1 mt-0.5">{screen.caption}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Future Scope / Roadmap (if present) */}
        {project.roadmap && (
          <ScrollReveal>
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl mb-16">
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl -z-10 pointer-events-none opacity-20"
                style={{ backgroundColor: project.color }}
              />

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15" style={{ color: project.color }}>
                  🚀 Roadmap & Vision
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-heading), system-ui" }}
              >
                {project.roadmap.title}
              </h2>
              <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-3xl mb-8">
                {project.roadmap.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {project.roadmap.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-sm md:text-base text-white/80"
                    whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Bottom Navigation */}
        <div className="pt-10 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group text-sm font-semibold"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>All Projects</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}40`
            }}
          >
            <span>Let&apos;s Build Together</span>
          </Link>
        </div>
      </main>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreenshot(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full max-h-[90vh] aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            >
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <Image
                src={selectedScreenshot}
                alt="Enlarged screenshot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
