import { AboutSection } from "../components/AboutSection";
import { Destinations } from "../components/Destinations";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040b14] px-2 py-3 sm:px-4 lg:px-6">
      <div className="browser-shell mx-auto max-w-[1400px] overflow-hidden rounded-[18px] border border-[#dfe6ee] bg-[#eef1f3] shadow-[0_24px_80px_rgba(5,16,26,0.45)]">
        <div className="browser-content bg-[#f4f0ea]">
          <Hero />
          <Destinations />
          <AboutSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
