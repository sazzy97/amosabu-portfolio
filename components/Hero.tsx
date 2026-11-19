"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
      <div className="max-w-4xl">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-stone)] border border-[var(--border-subtle)] text-xs font-mono mb-8"
        >
          <span className="text-[#ff5900] font-bold">●</span>
          <span className="text-[var(--charcoal)] font-medium">This is Amos</span>
          <span className="opacity-40">•</span>
          <span className="text-[var(--slate-muted)]">I solve real problems through thoughtful designs!</span>
        </motion.div>

        {/* Refined Headline Scale with Increased Line Height and Bold Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem] font-medium tracking-tight text-[var(--charcoal)] leading-[1.42] sm:leading-[1.38] md:leading-[1.35] mb-8"
        >
          A <span className="font-serif-editorial text-[var(--deep-teal)] font-bold">Digital Product Designer</span> passionate about shaping digital solutions that drive impact, usability, and growth.
        </motion.h1>

        {/* Subtitle & Value Proposition Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-[var(--border-subtle)]"
        >
          <p className="md:col-span-8 text-base sm:text-lg text-[var(--slate-muted)] leading-relaxed font-normal">
            Whether it’s creating an MVP that converts or crafting solutions that address core user needs, my approach balances empathy with strategic impact, focusing on outcomes rather than just aesthetics.
          </p>

          {/* Quick Credentials Summary */}
          <div className="md:col-span-4 flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <span className="text-[var(--slate-muted)]">Location</span>
              <span className="text-[var(--charcoal)] font-semibold">Lagos, NG (Worldwide)</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <span className="text-[var(--slate-muted)]">Core Disciplines</span>
              <span className="text-[var(--charcoal)] font-semibold">UX, UI & Vibecoding</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--slate-muted)]">Client Trust</span>
              <span className="text-[var(--deep-teal)] font-semibold">100% Founder Recommended</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
