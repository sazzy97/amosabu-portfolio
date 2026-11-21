"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const WHATSAPP_URL =
  "https://wa.me/2348138265592?text=Hi%20Amos!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--bg-cream)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between text-sm">
          {/* Brand Wordmark */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5900] inline-block shrink-0"></span>
            <div className="leading-tight">
              <span className="font-bold tracking-tight text-sm sm:text-base text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap block">
                Amos O. Abu
              </span>
              <span className="text-[11px] sm:text-xs text-[var(--slate-muted)] hidden sm:block font-mono whitespace-nowrap">
                Digital Product Designer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#works"
              className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
            >
              Works
            </a>
            <a
              href="#capabilities"
              className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
            >
              Capabilities
            </a>
            <a
              href="#about"
              className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
            >
              Behind The Canvas
            </a>
            <a
              href="/Amos-Osaze-Abu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
            >
              Resume ↗
            </a>
            <MagneticButton strength={0.25}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#025f6e] text-white text-xs font-medium tracking-wide hover:bg-[#01434e] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <span>Chat with me</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile Right Controls: Compact Chat Button + Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#025f6e] text-white text-xs font-medium tracking-wide flex items-center gap-1 shadow-sm shrink-0"
            >
              <span>Chat</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-stone)] flex items-center justify-center text-[var(--charcoal)] hover:bg-[var(--surface-stone)] active:scale-95 transition-all"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dimmer (Sitting underneath the menu at z-40) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="md:hidden fixed inset-0 z-40 bg-black/60"
              style={{ top: "4rem" }}
            />

            {/* Slide-Down Menu Content (Sitting on top at z-50, solid opaque background, crisp text) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden fixed top-16 sm:top-20 left-0 right-0 z-50 bg-[var(--bg-cream)] border-b border-[var(--border-subtle)] shadow-2xl px-6 py-6 overflow-y-auto max-h-[calc(100vh-4.5rem)] text-[var(--charcoal)] transition-colors"
            >
              <div className="flex flex-col gap-1 divide-y divide-[var(--border-subtle)]">
                <a
                  href="#works"
                  onClick={closeMenu}
                  className="py-3.5 flex items-center justify-between group"
                >
                  <div>
                    <span className="text-base font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors block">
                      Works
                    </span>
                    <span className="text-[11px] font-mono text-[var(--slate-muted)]">
                      Featured Case Studies & Selected Projects
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--slate-muted)] group-hover:text-[var(--deep-teal)] transition-colors">
                    01
                  </span>
                </a>

                <a
                  href="#capabilities"
                  onClick={closeMenu}
                  className="py-3.5 flex items-center justify-between group"
                >
                  <div>
                    <span className="text-base font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors block">
                      Capabilities
                    </span>
                    <span className="text-[11px] font-mono text-[var(--slate-muted)]">
                      UX, UI, Design Systems & Vibecoding
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--slate-muted)] group-hover:text-[var(--deep-teal)] transition-colors">
                    02
                  </span>
                </a>

                <a
                  href="#about"
                  onClick={closeMenu}
                  className="py-3.5 flex items-center justify-between group"
                >
                  <div>
                    <span className="text-base font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors block">
                      Behind The Canvas
                    </span>
                    <span className="text-[11px] font-mono text-[var(--slate-muted)]">
                      Design Philosophy, Story & Working Style
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--slate-muted)] group-hover:text-[var(--deep-teal)] transition-colors">
                    03
                  </span>
                </a>

                <a
                  href="/Amos-Osaze-Abu-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="py-3.5 flex items-center justify-between group"
                >
                  <div>
                    <span className="text-base font-bold text-[var(--charcoal)] group-hover:text-[#ff5900] transition-colors flex items-center gap-1.5">
                      Resume (CV) ↗
                    </span>
                    <span className="text-[11px] font-mono text-[var(--slate-muted)]">
                      Official PDF • 4 Yrs Product Design Exp
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[var(--surface-stone)] border border-[var(--border-subtle)] text-[var(--charcoal)]">
                    PDF
                  </span>
                </a>

                <a
                  href="mailto:osazeabuhaymus@gmail.com"
                  onClick={closeMenu}
                  className="py-3.5 flex items-center justify-between group"
                >
                  <div>
                    <span className="text-base font-bold text-[var(--charcoal)] group-hover:text-[#ff5900] transition-colors flex items-center gap-1.5">
                      Send Email ↗
                    </span>
                    <span className="text-[11px] font-mono text-[var(--slate-muted)]">
                      Formal briefs, RFPs & inquiries
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--slate-muted)]">
                    ✉
                  </span>
                </a>
              </div>

              {/* Bottom Availability Status */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--slate-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Availability: Worldwide (Remote)</span>
                </div>
                <span>© 2026</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
