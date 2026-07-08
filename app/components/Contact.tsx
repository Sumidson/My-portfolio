"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      } else {
        alert("Submission failed: " + (result.message || "Please check your access key."));
      }
    } catch {
      alert("An error occurred. Please check your internet connection.");
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/Sumidson/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sumidson-s-henry-508081322" },
    { name: "Twitter / X", href: "https://x.com/sumidsonhenry" },
  ];

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Big CTA heading */}
        <ScrollReveal className="mb-20">
          <span className="section-label">Contact</span>
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mt-4"
            style={{ fontFamily: "var(--font-heading), system-ui" }}
          >
            Let&apos;s work
            <br />
            <span className="accent-text">together</span>
            <span className="text-white">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="block text-xs text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-3">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-3">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-input resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                className="btn-primary w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Right — Info */}
          <ScrollReveal delay={0.4}>
            {/* Contact Info */}
            <div className="mb-12">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                <Mail size={12} />
                Contact Info
              </p>
              <a
                href="mailto:sumidsonshenry@gmail.com"
                className="block text-xl md:text-2xl text-white hover:text-[var(--accent)] transition-colors duration-500 font-light mb-2"
              >
                sumidsonshenry@gmail.com
              </a>
              <a
                href="tel:+919761987576"
                className="flex items-center gap-2 text-xl md:text-2xl text-white hover:text-[var(--accent)] transition-colors duration-500 font-light"
              >
                <Phone size={16} className="opacity-40" />
                +91 9761987576
              </a>
            </div>

            {/* Location */}
            <div className="mb-12">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                <MapPin size={12} />
                Location
              </p>
              <p className="text-xl md:text-2xl text-white font-light">
                Noida, India
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-4">
                Socials
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2 border-b border-[var(--border-subtle)] transition-all duration-500 hover:border-[var(--accent)]"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[var(--text-secondary)] group-hover:text-white transition-colors duration-500">
                      {s.name}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-all duration-500"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
