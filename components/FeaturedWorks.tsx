"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "powermanagement",
    title: "Power Management App",
    category: "Fintech • Utility",
    image: "https://framerusercontent.com/images/E7kdxsmgsxh1cRz0Cjp6eOV8hLY.jpg?scale-down-to=1024",
  },
  {
    id: "gashub",
    title: "GasHub",
    category: "Commerce • Telemetry",
    image: "https://framerusercontent.com/images/quqyGUfCaeq5quBMslxJ54frZ7g.jpg?scale-down-to=1024",
  },
  {
    id: "whatsappfeatures",
    title: "Whatsapp New Features",
    category: "Messaging • Interaction",
    image: "https://framerusercontent.com/images/DvIpMdUMxYmCMgOGBaHvLBE5EGI.jpg?scale-down-to=1024",
  },
  {
    id: "swiftlog",
    title: "SwiftLog App",
    category: "SME Logistics • Dispatch",
    image: "https://framerusercontent.com/images/9rTYenpafgEE6KdztXmhNkGpM.jpg?scale-down-to=1024",
  },
];

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              Selected Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--charcoal)]">
              Design in <span className="font-serif-editorial text-[var(--deep-teal)]">action</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--slate-muted)] max-w-sm">
            Hover over each project to inspect details.
          </p>
        </div>

        {/* 2-Column Pure Mockup Grid (Olamide Oladehinde Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {caseStudies.map((study, idx) => (
            <motion.a
              key={study.id}
              href={
                study.id === "powermanagement"
                  ? "/works/powermanagement"
                  : study.id === "gashub"
                  ? "/works/gashub"
                  : study.id === "whatsappfeatures"
                  ? "/works/whatsappfeatures"
                  : "/works/swiftlog"
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative block h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-[var(--surface-stone)]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              {/* Pure Mockup Image */}
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay & Slide-up Project Title (Olamide Style) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-between">
                {/* Category Pill Tag */}
                <div className="flex justify-end">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono font-medium border border-white/20">
                    {study.category}
                  </span>
                </div>

                {/* Bottom Slide-up Title */}
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#ff5900] uppercase tracking-wider block font-semibold">
                      Case Study
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {study.title}
                    </h3>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white text-[#192021] flex items-center justify-center font-bold text-sm transform group-hover:rotate-45 transition-transform duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
