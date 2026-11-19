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
    <section className="py-12 border-t border-[rgba(2,95,110,0.12)] overflow-hidden bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-xs font-mono uppercase tracking-widest text-[#5e6667]">
        <span>Brands I've Worked With</span>
      </div>
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee-track flex items-center gap-16 text-2xl font-bold tracking-tight text-[#192021] opacity-70">
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
