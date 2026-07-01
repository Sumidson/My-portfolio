"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <footer className="border-t border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading), system-ui" }}>
            <span className="text-white">Sumidson</span>
            <span className="accent-text">.</span>
          </a>

          {/* Nav */}
          <div className="flex flex-wrap gap-8">
            {["Home", "About", "Work", "Services", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase() === "work" ? "projects" : link.toLowerCase()}`}
                className="text-sm text-[var(--text-tertiary)] hover:text-white transition-colors duration-500">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {year} Sumidson S Henry. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with <span className="accent-text">♥</span> and Next.js
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-black hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-700 z-40 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  );
}
