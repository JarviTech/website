// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed bg-transparent text-white px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-semibold">
        JarviTech<span className="text-white">.</span>
      </div>

      {/* Menu */}
      <div className="flex space-x-10 text-[15px]">
        <Link href="#features" className="hover:text-gray-400 transition">
          Features
        </Link>
        <Link href="#about" className="hover:text-gray-400 transition">
          About
        </Link>
        <Link href="#blog" className="hover:text-gray-400 transition">
          Blog
        </Link>
        <Link href="#contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </div>

      {/* Button */}
      <button className="border border-gray-600 px-6 py-2 rounded-xl font-semibold hover:bg-white hover:text-black transition">
        Buy Template
      </button>
    </nav>
  );
}
