import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata = {
  title: "WhatsApp Contextual Features Case Study — Amos Osaze Abu",
  description: "Status editing and direct status tag notifications concept for WhatsApp.",
};

export default function WhatsAppFeaturesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] text-[var(--charcoal)] relative transition-colors duration-300">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-sm sticky top-0 z-40 bg-[var(--bg-cream)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
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

        <div className="flex items-center gap-6">
          <Link
            href="/#works"
            className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Works</span>
          </Link>
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-[#025f6e] text-white text-xs font-medium tracking-wide hover:bg-[#01434e] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center gap-1.5"
          >
            <span>Chat with me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        {/* Title & Overview */}
        <div className="max-w-4xl mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-stone)] border border-[var(--border-subtle)] text-xs font-mono mb-6">
            <span className="text-[#ff5900] font-bold">●</span>
            <span className="text-[var(--charcoal)] font-medium">Consumer Messaging & Interaction</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--slate-muted)]">WhatsApp Concept Case</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--charcoal)] leading-[1.15] mb-6">
            WhatsApp Contextual Features
          </h1>
          <p className="text-lg sm:text-xl text-[var(--slate-muted)] leading-relaxed font-normal">
            Introducing in-place Status Editing and direct Status Tag Notifications to enhance user control, eliminate typo anxiety, and amplify social connection across 2 billion active users.
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--border-subtle)] text-xs font-mono my-10">
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Target Product</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">WhatsApp (Meta)</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">My Role</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Timeline</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">2 Weeks</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Platform</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">iOS & Android Mobile</span>
          </div>
        </div>

        {/* Hero Full-Bleed Mockup */}
        <div className="w-full h-[360px] sm:h-[540px] md:h-[640px] mb-24 bg-[#eaf4ef] rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://framerusercontent.com/images/DvIpMdUMxYmCMgOGBaHvLBE5EGI.jpg?width=3459&height=2145"
            alt="WhatsApp Concept Hero Hand Mockup"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Discovery & Friction Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            01 / The Origin & Friction
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-6 leading-tight">
            Born from real-world embarrassment and <span className="font-serif-editorial text-[var(--deep-teal)]">missed moments</span>.
          </h2>
          <p className="text-base sm:text-lg text-[var(--slate-muted)] leading-relaxed mb-8">
            Great feature design often comes from noticing small, acute moments of friction that millions experience silently every day. This concept stemmed from two specific, highly relatable user interactions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div className="p-8 rounded-3xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-sm mb-2">
                01
              </span>
              <h3 className="text-xl font-bold text-[var(--charcoal)]">The Typo Penalty: Status Editing</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                A friend frequently expressed frustration because his partner constantly spotted minor spelling mistakes in his status updates. Because WhatsApp lacked an edit option, fixing a single misplaced letter meant completely deleting the status—losing all accrued view counts, timing, and active reply threads.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-sm mb-2">
                02
              </span>
              <h3 className="text-xl font-bold text-[var(--charcoal)]">The Silent Mention: Missed Tags</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Following Barcelona’s defeat to PSG, friends playfully called out Osaze in their WhatsApp status updates. A few messaged him privately to look at their posts, but he later discovered that multiple others had tagged him without him ever knowing—because WhatsApp provided no notification when mentioned.
              </p>
            </div>
          </div>
        </section>

        {/* Feature 1: Edit Status */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              02 / Feature One
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              Seamless In-Place <span className="font-serif-editorial text-[var(--deep-teal)]">Status Editing</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              Allows users to quickly correct typos, adjust captions, or update facts on an active status without deleting and reposting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="h-[440px] rounded-2xl overflow-hidden bg-[#edf4f5]">
                <img src="https://framerusercontent.com/images/3uwqHyOnWvupj40vweTcZ1vW79c.jpg?scale-down-to=1024" alt="Status Action Overflow Menu" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5900] font-semibold block mb-1">Step 01: Status Action Menu</span>
                <h4 className="text-lg font-bold text-[var(--charcoal)]">Contextual Edit Action</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Tapping the status overflow trigger (<code>...</code>) reveals the new <strong>Edit</strong> option (with pencil icon) alongside Forward, Share, and Delete.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[440px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
                <img src="https://framerusercontent.com/images/beufBNgHTxNq3E4v4iRLouaNRQ.jpg?scale-down-to=1024" alt="Reopened Native Text Editor" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5900] font-semibold block mb-1">Step 02: In-Situ Text Re-Engagement</span>
                <h4 className="text-lg font-bold text-[var(--charcoal)]">Cursor Positioned at Typo</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Re-opens the native status composer pre-loaded with original text, color theme, typography style, and existing audience privacy settings intact.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-[440px] rounded-2xl overflow-hidden bg-[#f4f1ea]">
                <img src="https://framerusercontent.com/images/749BecN1iT4lBhPYzeMV4pDOe1Y.jpg?scale-down-to=1024" alt="Typo Corrected in Status" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5900] font-semibold block mb-1">Step 03: Precision Correction</span>
                <h4 className="text-lg font-bold text-[var(--charcoal)]">Instant Text Update</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  User corrects typo (<code>"momey"</code> → <code>"money"</code>) and taps send. Maintains all previous view timestamps and thread continuity.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[440px] rounded-2xl overflow-hidden bg-[#eaf4ef]">
                <img src="https://framerusercontent.com/images/J3GJtH335W9hkKxwGSXpxMdtmAE.jpg?scale-down-to=1024" alt="Success Toast Notification" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5900] font-semibold block mb-1">Step 04: Non-Intrusive Feedback</span>
                <h4 className="text-lg font-bold text-[var(--charcoal)]">Successful Edit Toast</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  User returns to the <strong>Updates</strong> tab accompanied by a floating reassurance toast: <em>"Successful! Status edited successfully."</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Status Mentions */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              03 / Feature Two
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              Direct Status <span className="font-serif-editorial text-[var(--deep-teal)]">Tag Notifications</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              Closing the awareness loop when friends tag you in their status through an automated private message bridge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="h-[460px] rounded-2xl overflow-hidden bg-[#eef4f5]">
                <img src="https://framerusercontent.com/images/GAwVMWkLwoXaeBamWVJ8hwYLcw.jpg?scale-down-to=1024" alt="Private DM Status Tag Notification" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5900] font-semibold block mb-1">Step 01: Automated DM Alert</span>
                <h4 className="text-lg font-bold text-[var(--charcoal)]">Contextual In-Chat Mention Card</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  When mentioned, an encrypted preview bubble arrives in the private chat: <em>"Osaze mentioned you on his status"</em> with a direct 1-tap view trigger.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[460px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
                <img src="https://framerusercontent.com/images/vSTXTSngL0iF4KQwnxbmUiLONx0.jpg?scale-down-to=1024" alt="Opened Status with Green Highlighted Tag" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#ff5900] font-semibold block mb-1">Step 02: Highlighted Mention Focus</span>
                <h4 className="text-lg font-bold text-[var(--charcoal)]">Immediate Context & Reply</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Opens the status directly with the recipient's <code>@handle</code> highlighted in WhatsApp green, enabling instant comprehension and contextual reply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Validation Section */}
        <section className="max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-3xl bg-[var(--surface-stone)]/50 border border-[var(--border-subtle)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            04 / Real-World Validation
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--charcoal)] mb-6">
            When the production platform officially rolls out your exact concept.
          </h2>
          <p className="text-sm sm:text-base text-[var(--slate-muted)] leading-relaxed mb-6 font-normal">
            Shortly after designing and publishing this unsolicited concept exploring status mention alerts, WhatsApp officially rolled out native Status Mention Notifications to its global user base. 
          </p>
          <div className="p-6 rounded-2xl bg-[var(--surface-card)] border-l-4 border-[var(--deep-teal)] text-xs sm:text-sm text-[var(--charcoal)] italic">
            "While I cannot claim direct influence on Meta's roadmap, seeing WhatsApp ship a feature addressing the exact user friction I identified was a massive validation of my product instinct, user research framing, and interface empathy."
            <span className="block mt-2 font-mono text-xs text-[var(--slate-muted)] font-normal">— Amos Osaze Abu</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[var(--border-subtle)]">
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#ff5900] font-mono">0</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Lost Status Views</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Eliminated the need to delete and repost statuses to fix minor typos.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#025f6e] font-mono">100%</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Mention Discovery</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Automated DM bridges ensure no tagged friend ever misses a callout.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[var(--charcoal)] font-mono">2B+</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Global Target Audience</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Designed within Meta's exact human interface guidelines for instant familiarity.</p>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <nav className="max-w-5xl mx-auto pt-16 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/works/gashub" className="group flex items-center gap-4 text-left">
            <div>
              <span className="text-[11px] font-mono text-[var(--slate-muted)] uppercase tracking-wider block">
                ← Previous Case Study
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                GasHub On-Demand
              </span>
            </div>
          </Link>
          <Link href="/works/swiftlog" className="group flex items-center gap-4 text-right">
            <div>
              <span className="text-[11px] font-mono text-[#ff5900] uppercase tracking-wider block font-semibold">
                Next Case Study
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                SwiftLog Platform ↗
              </span>
            </div>
          </Link>
        </nav>
      </article>

      <Footer />
      <ThemeToggle />
    </div>
  );
}
