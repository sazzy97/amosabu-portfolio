export default function BrandsMarquee() {
  const brands = [
    "FINFLOW",
    "BUBETECH",
    "CLAUSECORE",
    "EMONIE",
    "SWIFTLOG",
    "FINFLOW",
    "BUBETECH",
    "CLAUSECORE",
    "EMONIE",
    "SWIFTLOG",
  ];

  return (
    <section className="py-12 border-t border-[var(--border-subtle)] overflow-hidden bg-[var(--bg-cream)] transition-colors">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-xs font-mono uppercase tracking-widest text-[var(--slate-muted)]">
        <span>Brands I've Worked With</span>
      </div>
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee-track flex items-center gap-16 text-2xl font-bold tracking-tight text-[var(--charcoal)] opacity-70">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-16 flex-shrink-0">
              <span>{brand}</span>
              <span className="text-[#ff5900] text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
