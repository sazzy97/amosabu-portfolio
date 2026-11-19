"use client";

import { motion } from "framer-motion";

const disciplines = [
  "Product Design",
  "Vibecoding",
  "User Experience Design",
  "User Interface Design",
  "Design Systems",
  "User Research",
  "Interaction Design",
  "Visual Design",
  "Creativity",
  "Design Thinking",
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-20 border-t border-[var(--border-subtle)] bg-[var(--surface-stone)]/40"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-3">
          Core Disciplines
        </span>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
          The Value I <span className="font-serif-editorial text-[var(--deep-teal)]">Deliver</span>
        </h2>
        <p className="text-sm text-[var(--slate-muted)] max-w-xl mx-auto mb-12">
          Full-stack product design expertise spanning discovery, architecture, high-fidelity UI, scalable design systems, and rapid vibecoding.
        </p>

        {/* Core Disciplines Pill Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto">
          {disciplines.map((item, idx) => {
            const isVibecoding = item === "Vibecoding";
            return (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm cursor-default flex items-center gap-2 ${
                  isVibecoding
                    ? "bg-[var(--surface-card)] border border-[#ff5900]/40 text-[var(--charcoal)] hover:border-[#ff5900] hover:text-[#ff5900]"
                    : "bg-[var(--surface-card)] border border-[var(--border-subtle)] text-[var(--charcoal)] hover:border-[var(--deep-teal)] hover:text-[var(--deep-teal)]"
                }`}
              >
                {isVibecoding && <span className="text-[#ff5900] text-xs">⚡</span>}
                <span>{item}</span>
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
