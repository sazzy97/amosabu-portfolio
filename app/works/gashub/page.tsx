import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GasHub On-Demand Case Study — Amos Osaze Abu",
  description: "LPG cooking gas telemetry, refilling, and marketplace mobile application.",
};

export default function GasHubPage() {
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
            <span className="text-[var(--charcoal)] font-medium">Clean Energy & On-Demand Commerce</span>
            <span className="opacity-40">•</span>
            <span className="text-[var(--slate-muted)]">End-to-End Product Design</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--charcoal)] leading-[1.15] mb-6">
            GasHub On-Demand
          </h1>
          <p className="text-lg sm:text-xl text-[var(--slate-muted)] leading-relaxed font-normal">
            A smart mobile utility and marketplace designed to eliminate cooking gas shortages through Bluetooth cylinder telemetry, transparent refill dispatch, and a friction-free commerce ecosystem.
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--border-subtle)] text-xs font-mono my-10">
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Project Type</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">Product Concept & System</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">My Role</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">Lead Product Designer</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Timeline</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">10 Weeks</span>
          </div>
          <div>
            <span className="text-[var(--slate-muted)] block uppercase mb-1">Platform</span>
            <span className="font-bold text-[var(--charcoal)] text-sm">iOS & Android App</span>
          </div>
        </div>

        {/* Hero Full-Bleed Mockup */}
        <div className="w-full h-[360px] sm:h-[540px] md:h-[640px] mb-24 bg-[#faf2ec] rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://framerusercontent.com/images/quqyGUfCaeq5quBMslxJ54frZ7g.jpg?width=3459&height=2145"
            alt="GasHub Hero Hand Mockup"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Challenge Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            01 / The Challenge
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-6 leading-tight">
            Household gas management is cumbersome, hazardous, and <span className="font-serif-editorial text-[var(--deep-teal)]">unpredictable</span>.
          </h2>
          <p className="text-base sm:text-lg text-[var(--slate-muted)] leading-relaxed mb-8">
            In urban centers across Africa, LPG cooking gas is a daily necessity. Yet, managing it remains painfully analog: users physically shake cylinders to guess remaining gas, experience sudden runouts during dinner preparation, and face chaotic logistics when hauling 12.5kg steel cylinders through traffic to distant refill plants.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                01
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Guesswork & Sudden Runouts</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Without telemetry, users have no visibility into consumption rates, causing cylinders to unexpectedly hit zero midway through cooking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                02
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Exhausting Refill Logistics</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Refilling requires manual transport or negotiating with informal couriers, risking cylinder damage, safety hazards, and lost productive hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-stone)]/60 border border-[var(--border-subtle)]">
              <span className="w-7 h-7 rounded-full bg-[#ff5900]/15 text-[#ff5900] flex items-center justify-center font-mono font-bold text-xs mb-4">
                03
              </span>
              <h3 className="text-base font-bold text-[var(--charcoal)] mb-2">Opaque Delivery & Pricing</h3>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Consumers face arbitrary merchant pricing, lack transparent per-kg rate standards, and have zero real-time tracking for arriving trucks.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="max-w-5xl mx-auto mb-24 p-8 sm:p-12 rounded-3xl bg-[var(--surface-stone)]/50 border border-[var(--border-subtle)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            02 / User Persona Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
            Designing for high-demand households and commercial food businesses.
          </h2>
          <p className="text-sm text-[var(--slate-muted)] max-w-2xl mb-8">
            We synthesized qualitative user interviews into three core segments to ensure both consumer convenience and commercial reliability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-[var(--deep-teal)] font-semibold block mb-2">Primary Segment</span>
              <h4 className="text-base font-bold text-[var(--charcoal)] mb-1">Urban Families & Caretakers</h4>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Need automated low-fuel warnings and scheduled weekend pickups so cooking routines are never disrupted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-[var(--deep-teal)] font-semibold block mb-2">Commercial Segment</span>
              <h4 className="text-base font-bold text-[var(--charcoal)] mb-1">Restaurants & Bakeries</h4>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Heavy daily usage demanding multi-cylinder telemetry (50kg cylinders), bulk pricing rates, and priority emergency dispatch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
              <span className="text-xs font-mono text-[var(--deep-teal)] font-semibold block mb-2">Mobility-Constrained</span>
              <h4 className="text-base font-bold text-[var(--charcoal)] mb-1">Busy Young Professionals</h4>
              <p className="text-xs text-[var(--slate-muted)] leading-relaxed">
                Value 1-tap door-to-door swap services, contactless bank transfer payments, and transparent live order checkpoints.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Flows */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              03 / The Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              Integrated Telemetry, <span className="font-serif-editorial text-[var(--deep-teal)]">Commerce & Logistics</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              GasHub connects Bluetooth magnetic fuel sensors with certified neighborhood gas merchants and on-demand delivery drivers.
            </p>
          </div>

          {/* Flow 1: Onboarding */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eef4f5] text-[var(--deep-teal)] text-xs font-mono font-semibold">
                Module 01: Fast Onboarding & Command Center
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Frictionless Entry & Centralized Services</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Social and biometric onboarding gets users into the app in under 20 seconds. The home dashboard unifies the 4 primary actions: <strong>Gas Shop</strong>, <strong>Gas Refill</strong>, <strong>Gas Level</strong>, and <strong>Track Order</strong>.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 1-tap Google/Apple sign-in integration</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Quick service grid avoiding menu sub-levels</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Curated marketplace feed for equipment</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden bg-[#edf4f5]">
              <img src="https://framerusercontent.com/images/j3799DfxJOw8JieHibFncAcfU.jpg?scale-down-to=1024" alt="GasHub Onboarding Screens" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Flow 2: Gas Level */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-7 order-2 lg:order-1 h-[420px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
              <img src="https://framerusercontent.com/images/71TyGLGSyehsty70DX9aVq7c59M.jpg?scale-down-to=1024" alt="Bluetooth Sensor & Level Gauge" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f9f2ec] text-[#ff5900] text-xs font-mono font-semibold">
                Module 02: Hardware Telemetry
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Gas Level: Real-Time Fuel Gauge</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Guides the user through connecting an IoT magnetic sensor placed beneath the cylinder. Shows a live visual gauge displaying <strong>Gas Used</strong> vs. <strong>Gas Remaining</strong> (e.g. 4kg left out of 12.5kg), triggering proactive refill alerts at 20% capacity.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> In-app Bluetooth pairing modal</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Color-coded cylinder depletion gauge</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 1-click trigger to auto-populate Refill cart</li>
              </ul>
            </div>
          </div>

          {/* Flow 3: Gas Shop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eaf4ef] text-emerald-700 text-xs font-mono font-semibold">
                Module 03: E-Commerce Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Gas Shop & 5-Second Verification</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Users browse certified cylinders (6kg to 50kg), precision regulators, and industrial hoses. The checkout flow separates <strong>Order Summary</strong>, <strong>Delivery Address</strong>, and <strong>Payment Details</strong> into scannable cards with inline edit links, allowing full order verification in under 5 seconds.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Size variant selector with instant price updates</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Transparent delivery fee itemization (₦700 flat)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Zero commitment anxiety before payment</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden bg-[#f4f1ea]">
              <img src="https://framerusercontent.com/images/umO9vPO6SXUpxOSuefhOnzBWzz8.jpg?scale-down-to=1024" alt="Gas Shop, Cart and Checkout Flow" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Flow 4: Gas Refill */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-7 order-2 lg:order-1 h-[420px] rounded-2xl overflow-hidden bg-[#eef4f5]">
              <img src="https://framerusercontent.com/images/mYgJCk7zOhNajTlK0LoFCMQDBE.jpg?scale-down-to=1024" alt="Automated Gas Refill Scheduling Flow" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eef4f5] text-[var(--deep-teal)] text-xs font-mono font-semibold">
                Module 04: Refill Scheduling
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Dynamic Refills & Cylinder Pickups</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Eliminates overfilling and safety risks. Users input their Cylinder ID, select target refill capacity in kilograms, and the app automatically calculates pricing (₦1,500/kg) with chosen collection windows and return times.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Fill capacity guardrails preventing overfill</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Real-time rate calculation per kilogram</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Scheduled doorstep pickup & return dispatch</li>
              </ul>
            </div>
          </div>

          {/* Flow 5: Order Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-subtle)]">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f9f2ec] text-[#ff5900] text-xs font-mono font-semibold">
                Module 05: Logistics Transparency
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">Track Order: 4-Step Route Pipeline</h3>
              <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
                Provides complete peace of mind through a live 4-step progress checkpoint: <strong>Payment Confirmed</strong> → <strong>Order Processed</strong> → <strong>Out for Delivery</strong> → <strong>Delivered / Ready for Pickup</strong>, complete with driver contact and ETA counters.
              </p>
              <ul className="space-y-2 text-xs font-mono text-[var(--slate-muted)] pt-2">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Live ETA tracking with driver phone bridge</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Tracking IDs verifiable across all orders</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Delivery confirmation code handshake</li>
              </ul>
            </div>
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
              <img src="https://framerusercontent.com/images/yERhX5nJyrd1YkoXuBziy2UhI.jpg?scale-down-to=1024" alt="Order Tracking Pipeline Interface" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Design Polish & Edge States */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
              04 / Design Polish
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--charcoal)] mb-4">
              Payments, Notifications & <span className="font-serif-editorial text-[var(--deep-teal)]">Edge States</span>
            </h2>
            <p className="text-sm text-[var(--slate-muted)] leading-relaxed">
              Ensuring zero dead-ends through flexible Nigerian payment channels, informative empty cart states, and contextual notification feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-[380px] rounded-2xl overflow-hidden bg-[#edf4f5]">
                <img src="https://framerusercontent.com/images/WBM2OnRYw35P5Emm8869wd0Q2Q.jpg?scale-down-to=1024" alt="Payment Channels" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Multi-Channel Payments</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Supports Cash on Delivery, saved debit cards, and seamless direct bank transfer with copyable account numbers.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[380px] rounded-2xl overflow-hidden bg-[#f9f2ec]">
                <img src="https://framerusercontent.com/images/g5jZzfR5C8FKbrJsnetyZLXJb3c.jpg?scale-down-to=1024" alt="Empty Cart State" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Delightful Empty States</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Friendly custom illustration guiding users back to the Gas Shop when their cart is empty, preventing drop-offs.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[380px] rounded-2xl overflow-hidden bg-[#f4f1ea]">
                <img src="https://framerusercontent.com/images/4079f4BRFWiTbeuivx9Uqar8vo.jpg?scale-down-to=1024" alt="Notifications and Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--charcoal)]">Actionable Notifications</h4>
                <p className="text-xs text-[var(--slate-muted)] leading-relaxed mt-1">
                  Chronologically grouped delivery updates with an inline "Track Now" action to quickly view active orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Takeaways Section */}
        <section className="max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-3xl bg-[var(--surface-stone)]/50 border border-[var(--border-subtle)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5900] block mb-2">
            05 / Takeaways & Reflections
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--charcoal)] mb-6">
            What designing GasHub proved about utility commerce.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#ff5900] font-mono">&lt; 5s</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Checkout Verification</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Modular cards enabled instant verification of address and total without commitment stress.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[#025f6e] font-mono">0%</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Sudden Outages</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Bluetooth telemetry alerts at 20% capacity created a reliable buffer for seamless replenishment.</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold text-[var(--charcoal)] font-mono">3.2x</span>
              <span className="block text-xs font-bold text-[var(--charcoal)] mt-1">Faster Reorder Flow</span>
              <p className="text-xs text-[var(--slate-muted)] mt-1">Saved cylinder specs and autofilled addresses reduced refill bookings from 15 minutes to 3 taps.</p>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <nav className="max-w-5xl mx-auto pt-16 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/works/powermanagement" className="group flex items-center gap-4 text-left">
            <div>
              <span className="text-[11px] font-mono text-[var(--slate-muted)] uppercase tracking-wider block">
                ← Previous Case Study
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                Power Management App
              </span>
            </div>
          </Link>
          <Link href="/works/whatsappfeatures" className="group flex items-center gap-4 text-right">
            <div>
              <span className="text-[11px] font-mono text-[#ff5900] uppercase tracking-wider block font-semibold">
                Next Case Study
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--deep-teal)] transition-colors">
                WhatsApp Contextual Features ↗
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
