"use client";

import LagosClock from "./LagosClock";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-[#192021] text-[#f8f6f3] relative overflow-hidden">
      {/* Background Teal Ambient Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#025f6e]/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-4">
              Ready to turn ideas into impact?
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              I'd love to connect <span className="font-serif-editorial text-[#ebe9e4]">with you!</span>
            </h2>
          </div>

          {/* Proper Rounded Pill Email Button */}
          <div className="shrink-0">
            <a
              href="mailto:osazeabuhaymus@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff5900] text-white font-medium text-sm sm:text-base tracking-wide transform hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-[#e04e00] cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span>Send Email</span>
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

        {/* Links Grid (2x2 on Tablet, 4 columns on Desktop) */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Email</span>
            <a
              href="mailto:osazeabuhaymus@gmail.com"
              className="text-white hover:text-[#ff5900] transition-colors block mb-1 font-medium break-all sm:break-normal"
            >
              osazeabuhaymus@gmail.com
            </a>
            <span className="text-white/60 block">Click to open your mail client</span>
          </div>

          <div>
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Resume</span>
            <a
              href="https://bit.ly/amos-abu-cv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff5900] transition-colors block mb-1 font-medium"
            >
              Download Resume (CV) ↗
            </a>
            <span className="text-white/60 block">Google Drive PDF</span>
          </div>

          <div>
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Social Channels</span>
            <div className="flex flex-col gap-1.5">
              <a
                href="https://www.linkedin.com/in/amos-abu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5900] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://x.com/amososaze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5900] transition-colors"
              >
                Twitter / X ↗
              </a>
              <a
                href="https://www.tiktok.com/@sazzy_designz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5900] transition-colors"
              >
                TikTok ↗
              </a>
              <a
                href="https://www.instagram.com/sazzy_lee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5900] transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <div>
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Location & Time</span>
            <span className="text-white block font-medium">Lagos, Nigeria (WAT / GMT+1)</span>
            <div className="text-white/60 block mt-1">
              <LagosClock showSeconds={true} />
            </div>
          </div>
        </div>

        {/* Bottom Bar (with padding for mobile floating theme toggle) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4 pb-20 sm:pb-0 pr-16 sm:pr-0">
          <span>© 2026 Amos Osaze Abu. All rights reserved.</span>
          <span>Crafted with Next.js, Tailwind CSS & Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}
