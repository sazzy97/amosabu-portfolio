"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface SnapshotItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

const webSnapshots: SnapshotItem[] = [
  {
    id: "web-1",
    src: "/snapshots/clausecore_hero_section.jpg",
    title: "ClauseCore Hero Section",
    category: "Legal AI SaaS • Web Platform",
    badge: "Legal AI SaaS",
    description: "Modern contract intelligence & automated compliance workflow",
  },
  {
    id: "web-2",
    src: "/snapshots/lexa_hero_section_1.jpg",
    title: "Lexa AI Platform",
    category: "Product Marketing • Web Experience",
    badge: "Product Landing",
    description: "High-conversion hero section with dynamic interactive components",
  },
  {
    id: "web-3",
    src: "/snapshots/hero_1.jpg",
    title: "Azure Voyages",
    category: "Luxury Travel & Yacht Expeditions • Web Experience",
    badge: "Bespoke Travel",
    description: "Curated private yacht expeditions, island itineraries and bespoke bookings",
  },
  {
    id: "web-4",
    src: "/snapshots/hero_5.jpg",
    title: "VortexPay Platform",
    category: "Wealth Analytics & Treasury • Fintech Web",
    badge: "Fintech Wealth",
    description: "Real-time asset tracking, multi-asset liquidity and automated capital allocation",
  },
  {
    id: "web-5",
    src: "/snapshots/hero_9.jpg",
    title: "Elysian Estates",
    category: "Luxury Architecture & Real Estate • Web Experience",
    badge: "Architectural Real Estate",
    description: "Curated showcase of high-end residences and architectural landmarks",
  },
  {
    id: "web-6",
    src: "/snapshots/plugin_web_1.jpg",
    title: "Plugin Marketplace",
    category: "Professional Services Marketplace • Web Platform",
    badge: "Services Market",
    description: "Africa's first guaranteed professional services marketplace",
  },
  {
    id: "web-7",
    src: "/snapshots/dashboard_1.jpg",
    title: "Omni Master Dashboard",
    category: "Analytics • Data Visualization",
    badge: "Data Analytics",
    description: "Unified multi-tenant telemetry and metric drilldowns",
  },
];

const mobileSnapshots: SnapshotItem[] = [
  {
    id: "mob-1",
    src: "/snapshots/crust_personal.jpg",
    title: "Crust Bank",
    category: "Fintech • Mobile Banking",
    badge: "Fintech Mobile",
    description: "Personal accounts, multi-currency balances & tier management",
  },
  {
    id: "mob-2",
    src: "/snapshots/select_seat.jpg",
    title: "CinePass Seats",
    category: "Entertainment • Booking Flow",
    badge: "Booking Flow",
    description: "Interactive theater seat map and VIP lounge tiers",
  },
  {
    id: "mob-3",
    src: "/snapshots/home_bill_1.jpg",
    title: "Home Bill Hub",
    category: "Utility • Smart Payments",
    badge: "Utility FinTech",
    description: "Smart prepaid energy & gas monitor",
  },
  {
    id: "mob-4",
    src: "/snapshots/create_new_split_2.jpg",
    title: "SplitShare",
    category: "Social Fintech • Group Pay",
    badge: "Social Pay",
    description: "Dynamic percentage split engine and instant requests",
  },
  {
    id: "mob-5",
    src: "/snapshots/ticket.jpg",
    title: "Live Pass Ticket",
    category: "Ticketing • QR Handshake",
    badge: "Mobile Pass",
    description: "Verified barcode & digital seat token",
  },
  {
    id: "mob-6",
    src: "/snapshots/bill_1_1.jpg",
    title: "Instant Pay",
    category: "Checkout UX • Mobile Banking",
    badge: "Checkout UX",
    description: "Biometric transaction settlement with zero latency",
  },
  {
    id: "mob-7",
    src: "/snapshots/ayo_design_1.jpg",
    title: "Ayo App",
    category: "Lifestyle • Mobile Platform",
    badge: "Mobile Feed",
    description: "High-energy modular action cards and commerce feed",
  },
  {
    id: "mob-8",
    src: "/snapshots/workout.jpg",
    title: "Pulse Fit",
    category: "Health Tech • Activity Tracking",
    badge: "Health Tech",
    description: "Rep counters, cardiovascular zones & workout logging",
  },
  {
    id: "mob-9",
    src: "/snapshots/timx_3.jpg",
    title: "Timx Agenda",
    category: "Productivity • Time Management",
    badge: "Productivity",
    description: "Fluid time-blocking scheduler & task priority calendar",
  },
];

function DraggableRow({
  items,
  autoSpeed,
  isMobile,
  onItemClick,
}: {
  items: SnapshotItem[];
  autoSpeed: number;
  isMobile?: boolean;
  onItemClick: (item: SnapshotItem) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartXRef = useRef(0);
  const currentXRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;

    const getHalfWidth = () => track.scrollWidth / 2;

    const animate = () => {
      if (!isDraggingRef.current) {
        if (!isHoveredRef.current) {
          currentXRef.current += autoSpeed;
        }
        if (Math.abs(velocityRef.current) > 0.05) {
          currentXRef.current += velocityRef.current;
          velocityRef.current *= 0.94;
        }
      }

      const half = getHalfWidth();
      if (half > 0) {
        while (currentXRef.current <= -half) currentXRef.current += half;
        while (currentXRef.current > 0) currentXRef.current -= half;
      }

      track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, [autoSpeed]);

  const onPointerDown = (clientX: number) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = clientX;
    dragStartXRef.current = currentXRef.current;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const delta = clientX - startXRef.current;
    if (Math.abs(delta) > 5) {
      hasDraggedRef.current = true;
    }
    currentXRef.current = dragStartXRef.current + delta;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = ((clientX - lastXRef.current) / dt) * 12;
    }
    lastXRef.current = clientX;
    lastTimeRef.current = now;
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        onPointerUp();
      }}
      onWheel={(e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          currentXRef.current -= e.deltaX;
        }
      }}
    >
      {/* Contained edge gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--bg-cream)] to-transparent z-20"></div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--bg-cream)] to-transparent z-20"></div>

      <div
        ref={trackRef}
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={onPointerUp}
        onTouchStart={(e) => {
          if (e.touches.length === 1) onPointerDown(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 1) onPointerMove(e.touches[0].clientX);
        }}
        onTouchEnd={onPointerUp}
        className="flex gap-6 w-max cursor-grab select-none active:cursor-grabbing will-change-transform"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            onClick={() => {
              if (!hasDraggedRef.current) {
                onItemClick(item);
              }
            }}
            className={
              isMobile
                ? "w-[180px] sm:w-[220px] md:w-[240px] h-[360px] sm:h-[440px] md:h-[480px] rounded-[28px] sm:rounded-[32px] overflow-hidden relative cursor-pointer flex-shrink-0 group bg-[var(--surface-stone)] transition-transform duration-300 hover:scale-105 hover:-translate-y-2 shadow-md hover:shadow-2xl"
                : "w-[400px] sm:w-[480px] md:w-[540px] h-[260px] sm:h-[310px] md:h-[350px] rounded-2xl overflow-hidden relative cursor-pointer flex-shrink-0 group bg-[var(--surface-stone)] transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-sm hover:shadow-2xl"
            }
          >
            <img
              src={item.src}
              alt={item.title}
              draggable={false}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none bg-[var(--surface-stone)]"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono text-white tracking-wide">
                  {item.badge}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-1 mt-1 font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorksCarousel() {
  const [activeItem, setActiveItem] = useState<SnapshotItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-16 border-t border-[var(--border-subtle)] bg-[var(--surface-stone)]/30 overflow-hidden relative">
      {/* Clean Header — Only "Sneak peek of my works" */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5900] inline-block animate-pulse"></span>
          <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--charcoal)] font-semibold">
            Sneak peek of my works
          </h2>
        </div>
      </div>

      {/* ROW 1: Web Applications (Draggable Left/Right) */}
      <div className="mb-8 relative">
        <DraggableRow
          items={webSnapshots}
          autoSpeed={-0.75}
          onItemClick={(item) => setActiveItem(item)}
        />
      </div>

      {/* ROW 2: Mobile Applications (Draggable Left/Right) */}
      <div className="relative">
        <DraggableRow
          items={mobileSnapshots}
          autoSpeed={0.75}
          isMobile={true}
          onItemClick={(item) => setActiveItem(item)}
        />
      </div>

      {/* Interactive Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#192021] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="w-full px-6 py-4 bg-[#14191a] border-b border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5900]"></span>
                <span className="text-white/60 uppercase tracking-wider text-[11px]">
                  {activeItem.category}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white font-bold text-sm">{activeItem.title}</span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              >
                <span>Close</span>
                <span className="opacity-60">[Esc]</span>
                <X className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

            {/* Image */}
            <div className="w-full max-h-[78vh] overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[74vh] max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Footer */}
            <div className="w-full px-6 py-3 bg-[#14191a] border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
              <span className="line-clamp-1">{activeItem.description}</span>
              <span className="text-[11px] text-white/40">
                Click outside or press Esc to return
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
