import { AboutSection } from "../components/AboutSection";
import { Destinations } from "../components/Destinations";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8ed] text-[#17324d]">
      <Hero />
      <Destinations />
      <AboutSection />
      <Footer />
    </main>
  );
}
