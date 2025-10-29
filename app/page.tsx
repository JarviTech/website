import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sponsers from "./components/Sponsers"
import Services from "./components/Services"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-hidden">
      <HeroSection />
      <Sponsers/>
      <Services/>
    </div>
  );
}
