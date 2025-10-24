"use client";

import { FaApple, FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";

export default function Sponsors() {
  const brands = [
    { name: "Apple", icon: <FaApple className="text-gray-400" /> },
    { name: "Google", icon: <FaGoogle className="text-gray-400" /> },
    { name: "Microsoft", icon: <FaMicrosoft className="text-gray-400" /> },
    { name: "Amazon", icon: <FaAmazon className="text-gray-400" /> },
  ];

  return (
    <div className="relative bg-black w-full h-[20vh] flex flex-col items-center justify-around px-6 overflow-hidden">
      {/* Neon radial background */}


      {/* Heading */}
      <h1 className="relative z-10 text-3xl font-extrabold text-white">
        Our Sponsors
      </h1>

      {/* Brand list */}
      <div className="relative z-10 flex flex-row gap-16">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center gap-2">
            {brand.icon}
            <h2 className="text-gray-400 text-2xl font-bold">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
