"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { services } from "../../data/services";
import AnimatedBackground from "../../components/AnimatedBackground";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../../components/ScrollReveal";

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#070a0f] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  const colors = ["#00E5FF", "#CCFF00", "#FF3366", "#FF9900"];
  const serviceColor = colors[parseInt(service.num) - 1] || "#CCFF00";

  return (
    <div className="min-h-screen bg-[#070a0f] text-white font-sans selection:bg-[var(--accent)] selection:text-black">
      <AnimatedBackground color={serviceColor} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 py-20">
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
          <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            Service {service.num}
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-heading), system-ui" }}
          >
            {service.title}
            <span style={{ color: serviceColor }}>.</span>
          </h1>
        </ScrollReveal>

        {/* Info Grid */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mt-12">
          {/* Left Details */}
          <div className="md:col-span-8 space-y-12">
            <ScrollReveal delay={0.1}>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-heading), system-ui" }}>
                What It Is
              </h2>
              <p className="text-white/70 leading-[1.8] text-base md:text-lg">
                {service.description}
              </p>
            </ScrollReveal>

            {service.details && service.details.length > 0 && (
              <ScrollReveal delay={0.2}>
                <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading), system-ui" }}>
                  My Approach & Capabilities
                </h2>
                <StaggerContainer className="space-y-6" staggerDelay={0.08}>
                  {service.details.map((detail, idx) => {
                    const colonIndex = detail.indexOf(":");
                    const title = colonIndex !== -1 ? detail.substring(0, colonIndex) : detail;
                    const desc = colonIndex !== -1 ? detail.substring(colonIndex + 1).trim() : "";
                    return (
                      <StaggerItem key={idx}>
                        <motion.div
                          className="flex gap-4"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0"
                            style={{
                              border: `1px solid ${serviceColor}40`,
                              color: serviceColor,
                              backgroundColor: `${serviceColor}10`,
                            }}
                          >
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-white text-base mb-1">
                              {title}
                            </h4>
                            {desc && (
                              <p className="text-white/60 text-sm leading-relaxed">
                                {desc}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </ScrollReveal>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                  Core Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <motion.span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/[0.01]"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </main>
    </div>
  );
}
