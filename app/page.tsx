import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sponsers from "./components/Sponsers"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0220] via-[#1b043c] to-[#0b0220] text-white overflow-hidden">
      <HeroSection />
      <Sponsers/>
    </div>
  );
}
