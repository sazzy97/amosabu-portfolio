"use client";

import LagosClock from "./LagosClock";
import MagneticButton from "./MagneticButton";

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

          {/* Action CTAs: Chat with me (WhatsApp) + Send Email */}
          <div className="shrink-0 flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticButton strength={0.35}>
              <a
                href="https://wa.me/2348138265592?text=Hi%20Amos!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#25D366] text-black font-semibold text-sm sm:text-base tracking-wide transform hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-[#20ba5a] cursor-pointer shrink-0 whitespace-nowrap"
              >
                <span>Chat with me</span>
                <span className="text-base sm:text-lg">↗</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <a
                href="mailto:osazeabuhaymus@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full border border-white/20 text-white font-medium text-sm sm:text-base tracking-wide transform hover:scale-105 active:scale-95 transition-all shadow-lg hover:bg-white/10 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <span>Send Email</span>
                <span className="text-base sm:text-lg">↗</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Links Grid (3 columns on Tablet & Desktop) */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-xs font-mono">
          <div>
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Resume</span>
            <a
              href="/Amos-Osaze-Abu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff5900] transition-colors block mb-1 font-medium text-sm"
            >
              Download Resume (CV) ↗
            </a>
            <span className="text-white/60 block">Official PDF • 4 Yrs Exp</span>
          </div>

          <div>
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Connect & Socials</span>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/2348138265592?text=Hi%20Amos!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#25D366] transition-colors"
              >
                WhatsApp ↗
              </a>
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
                href="https://www.tiktok.com/@amos_abu"
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
            <span className="text-white/40 block mb-3 uppercase tracking-wider">Current Time</span>
            <div className="text-white text-base font-semibold">
              <LagosClock showSeconds={true} />
            </div>
            <span className="text-white/60 block mt-1">Available for global remote work</span>
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
