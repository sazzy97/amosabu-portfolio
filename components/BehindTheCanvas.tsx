"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function BehindTheCanvas() {
  return (
    <section id="about" className="py-24 bg-[#07181c] text-[#f8f6f3] relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#025f6e]/20 blur-3xl pointer-events-none"></div>

      {/* Authentic Perspective Grid from Live Site */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/5bSgVOjwR5iEdfk692ONl843us.svg?width=2046&height=729')",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Narrative */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-3 font-semibold">
              About Me
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Behind the <span className="font-serif-editorial text-[#ebe9e4]">canvas</span>.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              <p>
                Designing solutions that not only enhance usability but also advance business growth and success. Whether it’s creating an MVP that converts or crafting solutions that address user needs, my approach balances empathy with strategic impact, focusing on outcomes rather than just aesthetics.
              </p>
              <p>
                When we collaborate, expect clear communication, purposeful designs, and a zero-ego process. Off the pitch, you’ll find me catching the latest football matches, exploring visual arts, or enjoying quality music.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <MagneticButton strength={0.3}>
                <a
                  href="https://wa.me/2348138265592?text=Hi%20Amos!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-[#07181c] text-xs font-bold tracking-wide hover:bg-[#ebe9e4] transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-1.5"
                >
                  <span>Chat with me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
              <a
                href="/Amos-Osaze-Abu-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Amos-Osaze-Abu-Resume.pdf"
                className="px-5 py-3 rounded-full border border-white/20 text-white text-xs font-mono hover:bg-white/10 transition-colors"
              >
                Download CV ↗
              </a>
            </div>
          </div>

          {/* 3 Personal Photo Cards (Authentic Images from Live Site) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {/* Photo 1: A happy person */}
            <motion.div
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              className="rounded-2xl bg-white p-3 shadow-xl transform sm:-rotate-2 transition-transform duration-300"
            >
              <div className="w-full h-56 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <img
                  src="https://framerusercontent.com/images/zeJolt3RLWIKItXJVj0PbNucKg.jpeg?scale-down-to=512"
                  alt="A happy person"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] font-mono text-[#192021] text-center font-medium">
                A happy person
              </p>
            </motion.div>

            {/* Photo 2: Enjoy Football */}
            <motion.div
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              className="rounded-2xl bg-white p-3 shadow-xl transform sm:translate-y-4 sm:rotate-1 transition-transform duration-300"
            >
              <div className="w-full h-56 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <img
                  src="https://framerusercontent.com/images/1HHnr6MLSfsIMTfN25yMbT4Hqk.png?scale-down-to=512"
                  alt="Enjoy Football"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] font-mono text-[#192021] text-center font-medium">
                Enjoy Football
              </p>
            </motion.div>

            {/* Photo 3: Work Mode */}
            <motion.div
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              className="rounded-2xl bg-white p-3 shadow-xl transform sm:-rotate-1 transition-transform duration-300"
            >
              <div className="w-full h-56 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <img
                  src="https://framerusercontent.com/images/yK3dLcAxFLFUNP96SPfC0w80dAg.jpeg?scale-down-to=512"
                  alt="Work Mode"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] font-mono text-[#192021] text-center font-medium">
                Work Mode
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
