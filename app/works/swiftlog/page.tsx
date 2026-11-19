import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SwiftLog Platform Case Study — Amos Osaze Abu",
  description: "On-demand parcel delivery and dispatch solution for SMEs designed for Zuri.",
};

export default function SwiftLogPage() {
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
            <span className="text-[var(--charcoal)] font-medium">B2B SaaS & SME Logistics</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--slate-muted)]">Zuri Logistics Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--charcoal)] leading-[1.15] mb-6">
            SwiftLog Platform
          </h1>
          <p className="text-lg sm:text-xl text-[var(--slate-muted)] leading-relaxed font-normal">
            Empowering small and medium-scale retailers across emerging markets with affordable on-demand parcel dispatch, real-time waypoint GPS tracking, and transparent courier communication.
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--border-subtle)] text-xs font-mono my-10">
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Client</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">Zuri</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">My Role</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Timeline</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">7 Weeks, 3 Days</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Platform</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">iOS & Android App</span>
          </div>
        </div>

        {/* Hero Full-Bleed Mockup */}
        <div className="w-full h-[360px] sm:h-[540px] md:h-[640px] mb-24 bg-[#f4f1ea] rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://framerusercontent.com/images/9rTYenpafgEE6KdztXmhNkGpM.jpg?width=2424&height=1881"
            alt="SwiftLog Hero Mockup"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Challenge Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            01 / The Challenge
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-6 leading-tight">
            Traditional delivery services were draining SME margins and <span className="font-serif-editorial text-[var(--deep-teal)]">destroying customer trust</span>.
          </h2>
          <p className="text-base sm:text-lg text-[var(--slate-muted)] leading-relaxed mb-8">
            For African e-commerce merchants and independent retailers, dispatching goods through regular post offices or informal commercial interstate transport was agonizingly slow and prohibitively expensive. Deliveries arrived damaged or days late, leaving customers frustrated and refusing repeat business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                01
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Exorbitant Shipping Rates</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Unregulated commercial drivers and post offices charged high fees that wiped out the profit margins of growing small businesses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                02
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Black-Hole Transit Times</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                With zero live tracking, merchants had no way of knowing where a package was once handed over, leading to constant customer complaints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                03
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Zero Customer Support</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                When packages were delayed or lost, merchants had no direct communication channel with couriers, directly harming their brand reputation.
              </p>
            </div>
          </div>
        </section>

        {/* Onboarding Overview */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              02 / The Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              Empathetic Onboarding & <span className="font-serif-editorial text-[var(--deep-teal)]">Frictionless Setup</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              Establishing confidence on first launch by clearly highlighting Swift Delivery, Direct Driver Communication, and Real-Time Tracking.
            </p>
          </div>

          <div className="w-full h-[460px] sm:h-[580px] bg-[#edf4f5] p-6 rounded-3xl flex items-center justify-center mb-8">
            <img
              src="https://framerusercontent.com/images/kga1rOgFTu0FvC9MP7aZHtWgA.jpg"
              alt="3-Screen Onboarding Flow"
              className="w-full h-full object-contain"
            />
          </div>
        </section>

        {/* 4-Stage Pipeline */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              03 / End-to-End Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              From Package Creation to <span className="font-serif-editorial text-[var(--deep-teal)]">Doorstep Delivery</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              A 4-stage logistics pipeline designed to reduce dispatch booking from 15 minutes of chaotic phone calls down to under 60 seconds.
            </p>
          </div>

          {/* Step 1: Package Configuration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eef4f5] text-[var(--deep-teal)] text-xs font-mono font-semibold">
                Stage 01: Package Configuration
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Dynamic Category & Size Selectors</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Replaces ambiguous freight categories with intuitive chips. Merchants pick their industry (<em>Gadgets</em>, <em>Fashion</em>, <em>Electronics</em>, <em>Groceries</em>), specify package vulnerability (<em>Fragile</em>, <em>Shatter Resistant</em>), and choose clear weight tiers (<em>1-3kg</em>, <em>3-6kg</em>, <em>6-10kg</em>).
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Smart package handling tags (Fragile flags)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Transparent tiered pricing based on weight</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Custom package description notes for riders</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[440px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
              <img src="https://framerusercontent.com/images/q5FTOq8aGKaQYz6RXlcr4qrKHgE.jpg" alt="Sending Package Configuration Screen" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Step 2: Order Summary & Checkout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-7 order-2 lg:order-1 h-[440px] rounded-2xl overflow-hidden bg-[#f4f1ea]">
              <img src="https://framerusercontent.com/images/Ch78v1O9UkJObNoQ7eMRRVrwXfI.jpg" alt="Order Summary & Checkout Screen" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f4f1ea] text-[#ff5900] text-xs font-mono font-semibold">
                Stage 02: Transparent Settlement
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Order Summary & Flat Rates</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Provides a full, scannable order breakdown before payment. Both sender and receiver addresses (e.g. Egbeda to Lekki Phase 1) are displayed alongside package specifics and a guaranteed flat delivery fee (₦3,500), eliminating surprise courier surcharges.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Inline edit triggers for rapid address corrections</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Verified recipient phone bridge</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Flat ₦3,500 rate with 25% promo code support</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Live Map Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eef4f5] text-[var(--deep-teal)] text-xs font-mono font-semibold">
                Stage 03: Live In-Transit Visibility
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Real-Time GPS Map & Rider Bridge</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Merchants and end-buyers watch the parcel progress along live road maps (e.g., Agege to Ikeja). Features a persistent bottom driver bar identifying the courier (<em>Obasogie Adeoye</em>) with direct 1-tap call and in-app chat buttons.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Turn-by-turn waypoint progress visualizer</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> In-app voice call & message bridge to driver</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Shareable web tracking link for end customers</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[440px] rounded-2xl overflow-hidden bg-[#edf4f5]">
              <img src="https://framerusercontent.com/images/quDVUL7pzJb8sgeNbiiCUe5Ks.jpg" alt="Live Map Tracking with Driver Card" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Step 4: Milestone Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-7 order-2 lg:order-1 h-[440px] rounded-2xl overflow-hidden bg-[#eaf4ef]">
              <img src="https://framerusercontent.com/images/dZW5XKZGkPeEfPXE43kQmO18c.jpg" alt="Order Details Milestone Timeline Screen" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eaf4ef] text-emerald-700 text-xs font-mono font-semibold">
                Stage 04: Audit & Confirmation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Timestamped Milestone Audits</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Detailed tracking under Order ID (<code>#123987</code>) with timestamped progress checkpoints: <strong>Order Confirmed</strong> → <strong>Order Processed</strong> → <strong>Out for Delivery</strong> → <strong>Delivered</strong>, paired with a permanent digital receipt.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Timestamped verification at every handover</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Itemized weight and price audit records</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Automated delivery confirmation SMS to recipient</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-3xl bg-[var(--surface-stone)]/50 border border-[var(--border-subtle)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            04 / Measurable SME Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--charcoal)] mb-6">
            Restoring customer trust and unlocking repeat orders for small retailers.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#ff5900] font-mono">-35%</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Dispatch Errors</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Categorized package configuration cut fragile handling damages and misrouting.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#025f6e] font-mono">4.8 / 5</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Buyer Satisfaction</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Direct driver communication and live map links turned delivery into a delight.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[var(--charcoal)] font-mono">2.5x</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Repeat Purchases</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Predictable delivery timelines restored shopper confidence in emerging online brands.</p>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <nav className="max-w-5xl mx-auto pt-16 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/works/whatsappfeatures" className="group flex items-center gap-4 text-left">
            <div>
              <span className="text-[11px] font-mono text-[var(--slate-muted)] uppercase tracking-wider block">
                ← Previous Case Study
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                WhatsApp Contextual Features
              </span>
            </div>
          </Link>
          <Link href="/works/powermanagement" className="group flex items-center gap-4 text-right">
            <div>
              <span className="text-[11px] font-mono text-[#ff5900] uppercase tracking-wider block font-semibold">
                Loop Back to Start
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                Power Management App ↗
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
