"use client";

import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0220] via-[#1b043c] to-[#0b0220] text-white overflow-hidden">
      {/* Background dotted pattern – layered for randomness */}
    <div className="opacity-60">
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[length:180px_180px] translate-x-4 translate-y-6 rotate-2" />
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[length:200px_190px] -translate-x-6 translate-y-8 rotate-1" />
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[length:160px_170px] translate-x-10 -translate-y-4 -rotate-1" />
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:210px_200px] -translate-x-12 translate-y-10 rotate-3" />
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[length:190px_180px] translate-x-8 -translate-y-6 -rotate-2" />
</div>


      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 mt-4 md:mt-40 z-10">
        <h1 className="flex justify-center items-center text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent opacity-50">
          SOFTWARE
        </h1>

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
