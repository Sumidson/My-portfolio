"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["home", "about", "projects", "services", "skills", "experience", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4 glass-strong" : "py-6 bg-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight group"
          style={{ fontFamily: "var(--font-heading), system-ui" }}
        >
          <span className="text-white group-hover:text-[var(--accent)] transition-colors duration-500">Sumidson</span>
          <span className="accent-text">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-500 relative ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/Sumidson_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-[var(--accent)] rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:-translate-y-0.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[1.5px] bg-white transition-all duration-500 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
          <span className={`w-6 h-[1.5px] bg-white transition-all duration-500 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`w-6 h-[1.5px] bg-white transition-all duration-500 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-40 flex flex-col items-start justify-center px-10 gap-8 transition-all duration-700 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-4xl font-bold text-white hover:text-[var(--accent)] transition-all duration-500"
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s var(--ease-out-expo)",
              fontFamily: "var(--font-heading), system-ui",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Sumidson_Resume.pdf"
          download
          onClick={() => setMobileOpen(false)}
          className="btn-primary mt-4"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.6s var(--ease-out-expo) ${navLinks.length * 80}ms`,
          }}
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
