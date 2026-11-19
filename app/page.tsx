import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorksCarousel from "@/components/WorksCarousel";
import FeaturedWorks from "@/components/FeaturedWorks";
import Capabilities from "@/components/Capabilities";
import BehindTheCanvas from "@/components/BehindTheCanvas";
import Testimonials from "@/components/Testimonials";
import BrandsMarquee from "@/components/BrandsMarquee";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] text-[var(--charcoal)] relative transition-colors duration-300">
      <Navbar />
      <Hero />
      <WorksCarousel />
      <FeaturedWorks />
      <Capabilities />
      <BehindTheCanvas />
      <Testimonials />
      <BrandsMarquee />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
