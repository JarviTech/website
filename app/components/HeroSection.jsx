"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import Star from "./Star";

export default function HeroSection() {
  const stars = Array.from({ length: 100 });
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background dotted pattern – layered for randomness */}
    <div className="opacity-60">
  {stars.map((_, i) => (
        <Star
          key={i}
          size={Math.random() * 4}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
        />
      ))}
</div>


      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 mt-4 md:mt-40 z-10">
   <div className="flex justify-center w-[40%] mb-5 h-full">
  <h1 className="flex justify-center items-center text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-transparent  to-blue-500 ">
    SOFTWARE
  </h1>
</div>

        <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
          16+ High-Impact Presentations
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          High-Performance Webflow <br />
          <span className="italic font-light">Template For AI SaaS</span>
        </h1>

        <Link
          href="#"
          className="mt-10 bg-yellow-400 text-black font-medium px-8 py-3 rounded-full hover:bg-yellow-500 transition"
        >
          Explore Demos
        </Link>
      </div>
    </div>
  );
}
