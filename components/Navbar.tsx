"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-7 flex items-center justify-between text-sm sticky top-0 z-40 bg-[var(--bg-cream)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
      {/* Brand Wordmark */}
      <Link href="/" className="group flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5900] inline-block"></span>
        <div>
          <span className="font-bold tracking-tight text-base text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
            Amos O. Abu
          </span>
          <span className="text-xs text-[var(--slate-muted)] block font-mono">
            Digital Product Designer
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-5 sm:gap-7">
        <a
          href="#works"
          className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors"
        >
          Works
        </a>
        <a
          href="#capabilities"
          className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors"
        >
          Capabilities
        </a>
        <a
          href="#about"
          className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors"
        >
          Behind The Canvas
        </a>
        <a
          href="https://bit.ly/amos-abu-cv"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors"
        >
          Resume ↗
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-[#025f6e] text-white text-xs font-medium tracking-wide hover:bg-[#01434e] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center gap-1.5"
        >
          <span>Chat with me</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}
