"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between text-sm sticky top-0 z-40 bg-[var(--bg-cream)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] transition-all">
      {/* Brand Wordmark */}
      <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
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

      {/* Navigation Links */}
      <nav className="flex items-center gap-3 sm:gap-6">
        <a
          href="#works"
          className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
        >
          Works
        </a>
        <a
          href="#capabilities"
          className="hidden md:inline-block text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
        >
          Capabilities
        </a>
        <a
          href="#about"
          className="hidden lg:inline-block text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
        >
          Behind The Canvas
        </a>
        <a
          href="/Amos-Osaze-Abu-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors whitespace-nowrap"
        >
          Resume ↗
        </a>
        <MagneticButton strength={0.25}>
          <a
            href="#contact"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#025f6e] text-white text-xs font-medium tracking-wide hover:bg-[#01434e] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap"
          >
            <span>Chat with me</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </MagneticButton>
      </nav>
    </header>
  );
}
