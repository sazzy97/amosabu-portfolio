import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Power Management App Case Study — Amos Osaze Abu",
  description: "Smart prepaid electricity meter management system designed for BuyPower.",
};

export default function PowerManagementPage() {
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
            <span className="text-[var(--charcoal)] font-medium">Energy Tech & Fintech</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--slate-muted)]">BuyPower Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--charcoal)] leading-[1.15] mb-6">
            Power Management App
          </h1>
          <p className="text-lg sm:text-xl text-[var(--slate-muted)] leading-relaxed font-normal">
            A smart prepaid meter management system that provides real-time visibility into unit balances, eliminates unexpected blackouts, and introduces emergency unit borrowing.
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--border-subtle)] text-xs font-mono my-10">
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Client</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">BuyPower</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">My Role</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Timeline</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">4 Weeks (Q1 2024)</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Platform</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">iOS & Android App</span>
          </div>
        </div>

        {/* Hero Full-Bleed Mockup */}
        <div className="w-full h-[360px] sm:h-[540px] md:h-[640px] mb-24 bg-[#eef4f5] rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://framerusercontent.com/images/E7kdxsmgsxh1cRz0Cjp6eOV8hLY.jpg?width=3459&height=2145"
            alt="Power Management App Hero Mockup"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Challenge Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            01 / The Challenge
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-6 leading-tight">
            Prepaid electricity was a continuous source of <span className="font-serif-editorial text-[var(--deep-teal)]">anxiety</span>.
          </h2>
          <p className="text-base sm:text-lg text-[var(--slate-muted)] leading-relaxed mb-8">
            For millions of households across emerging markets, prepaid electricity meters operate as black boxes. Users have little to no real-time insight into remaining unit balances, causing unexpected outages in the middle of work, night routines, or critical tasks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                01
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Zero Real-Time Visibility</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Users had to physically inspect wall-mounted hardware meters to check remaining units, leading to sudden power cuts without warning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                02
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">No Emergency Alternatives</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                When units ran out late at night or during cash-flow shortfalls, households were left stranded with zero immediate credit or backup options.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                03
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Complex Multi-Meter Chaos</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Managing power tokens across rental properties, family homes, or secondary meters involved fragmented tracking and manual errors.
              </p>
            </div>
          </div>
        </section>

        {/* The Core Three */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              02 / The Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              The <span className="font-serif-editorial text-[var(--deep-teal)]">"Core Three"</span> Ecosystem
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              I designed a smart utility dashboard centered on meter autonomy. We organized the product around three fundamental user actions: Buy, Share, and Borrow.
            </p>
          </div>

          {/* Buy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eef4f5] text-[var(--deep-teal)] text-xs font-mono font-semibold">
                Feature 01: Instant Purchase
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">BUY: Frictionless Checkout</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Emphasizes speed and absolute clarity. The live conversion calculator instantly translates stored fiat wallet value (₦) into kilowatt-hour electrical units (kWh), cutting cognitive friction during checkout.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Smart meter autofill with verification</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dynamic preset chips (₦1,000 to ₦50,000)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 2-second token generation pipeline</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden bg-[#f2efe9]">
              <img src="https://framerusercontent.com/images/Wo57Z4WFIQXs2hR8HdmEzF06Yk.jpg" alt="Buy Unit Interface" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Share */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-7 order-2 lg:order-1 h-[420px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
              <img src="https://framerusercontent.com/images/ybb5T3XUnWRYFj3n5yUmFUjUm8.jpg" alt="Share Unit Interface" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f9f2ec] text-[#ff5900] text-xs font-mono font-semibold">
                Feature 02: Social Energy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">SHARE: Peer-to-Peer Power</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                A social-fintech mechanism allowing users to transfer electricity units directly to friends, tenants, or family members. It directly solves emergencies when a loved one is offline or unable to process bank transactions.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Instant meter-to-meter balance transfer</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Personalized greeting message support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Zero service fee for community transfers</li>
              </ul>
            </div>
          </div>

          {/* Borrow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eaf4ef] text-emerald-700 text-xs font-mono font-semibold">
                Feature 03: Emergency Resilience
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">BORROW: Emergency Units</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Engineered for financial inclusion. When a household's balance drops to zero, they can unlock an "Emergency Unit" buffer (20 to 55 kWh) with flexible 31-day or 62-day repayment terms, automatically settled on their next top-up.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Algorithmic credit scoring based on meter history</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Transparent repayment terms (31 vs 62 days)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Early repayment credit incentives</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden bg-[#eaf4ef]">
              <img src="https://framerusercontent.com/images/exUJWUMTR7UALdJGpf26tP4Oc.jpg" alt="Borrow Unit Interface" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Detailed Solutions Showcase */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              03 / End-to-End Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              Crafting the <span className="font-serif-editorial text-[var(--deep-teal)]">Edge Cases</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              Real products live in the edge cases. We designed transparent loan schedules, empathetic ineligibility states, and instant receipt generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-[420px] rounded-2xl overflow-hidden bg-[#edf4f5]">
                <img src="https://framerusercontent.com/images/Mee9KIEQaR6T1Fubipc2OPSdbVw.jpg" alt="Home Dashboard Closeup" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Unified Energy Dashboard</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Provides live unit counters, meter number chips, fast top-up triggers, and recent transaction audits in a single glance.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[420px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
                <img src="https://framerusercontent.com/images/BVlXUldumPfZyrqNwvANjeDSK0.jpg" alt="Repayment Terms Interface" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Transparent Repayment Terms</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Clear side-by-side comparison between 31-day one-off repayment (15% interest) and 62-day split monthly installments (20% interest).
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[420px] rounded-2xl overflow-hidden bg-[#f4f1ea]">
                <img src="https://framerusercontent.com/images/QXThjJ3umZFMuVUfOprEqIeFF28.jpg" alt="Ineligibility Toast State" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Empathetic Ineligibility Handling</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Instead of a generic rejection screen, the system provides an informative modal detailing the exact criteria needed to unlock emergency borrowing.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[420px] rounded-2xl overflow-hidden bg-[#eaf4ef]">
                <img src="https://framerusercontent.com/images/CK2Nb0GD3aamhk6FAQbNPEqjk8.jpg" alt="Success Token Generation" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Instant 20-Digit Meter Token</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Generated in under 2 seconds with one-tap copy, WhatsApp receipt export, and itemized transaction settlement receipts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-3xl bg-[var(--surface-stone)]/50 border border-[var(--border-subtle)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            04 / Impact & Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--charcoal)] mb-6">
            Measurable impact on user retention and emergency resilience.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#ff5900] font-mono">+42%</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Top-Up Completion</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Streamlined live conversion calculations reduced checkout drop-offs.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#025f6e] font-mono">1.8M</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Emergency Units Lent</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Prevented blackouts for over 24,000 households within initial pilot testing.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[var(--charcoal)] font-mono">98.4%</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Repayment Rate</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Automatic deduction on next top-up created near-zero default risk.</p>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <nav className="max-w-5xl mx-auto pt-16 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/#works" className="text-xs font-mono uppercase tracking-wider text-[var(--slate-muted)] hover:text-[var(--deep-teal)] transition-colors">
            ← Back to Overview
          </Link>
          <Link href="/works/gashub" className="group flex items-center gap-4 text-right">
            <div>
              <span className="text-[11px] font-mono text-[#ff5900] uppercase tracking-wider block font-semibold">
                Next Case Study
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                GasHub On-Demand ↗
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
