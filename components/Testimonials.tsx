"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I had the privilege of working with Abu Amos, whose exceptional eye for detail and commitment to continuous learning stand out. He is proactive, open to feedback, and deeply detail-oriented.",
    name: "Chikezie Ekechukwu",
    role: "Team Lead, PMO",
  },
  {
    quote:
      "Abu Amos consistently demonstrates reliability, punctuality, and a strong sense of responsibility. His collaborative spirit and dedication make him an invaluable asset to any team.",
    name: "Mr. Abubakar Aliyu",
    role: "CEO, Bubetech",
  },
  {
    quote:
      "Abu's talent as a UI/UX designer is exceptional. His designs combine aesthetics with profound usability, delivering solutions with remarkable efficiency and strategic insight.",
    name: "Daniel Obasi",
    role: "Founder, ClauseCore",
  },
  {
    quote:
      "I had the pleasure of working with Osaze. His attention to detail, research-driven user journeys, and prompt delivery of high-quality UI/UX work made our collaboration truly impactful.",
    name: "Sunday Igbohun",
    role: "CEO, Emonie",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--surface-stone)]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-1">
              Social Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)]">
              Kind words from <span className="font-serif-editorial text-[var(--deep-teal)]">Clients</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-sm hover:border-[var(--deep-teal)] transition-all"
            >
              <p className="text-xs text-[var(--charcoal)] leading-relaxed mb-6 font-normal">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h5 className="text-xs font-bold text-[var(--charcoal)]">{item.name}</h5>
                <span className="text-[10px] font-mono text-[var(--slate-muted)]">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
