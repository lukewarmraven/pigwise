"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Solutions", id: "solutions" },
  { label: "About Us", id: "about-us" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.5;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = link.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-100 flex items-center px-6 md:px-12">
      {/* Left: logo + title */}
      <button
        onClick={() => scrollToSection("home")}
        className="flex items-center gap-2 cursor-pointer shrink-0"
      >
        <div className="relative h-8 w-8">
          <Image
            src="/assets/Navbar/Gemini_Generated_Image_pnb6jzpnb6jzpnb6%20(1)%201.svg"
            alt="PigletGuard logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold text-dark-pink">PigletGuard</span>
      </button>

      {/* Center: nav links — absolute so they're truly centered */}
      <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className={`relative pb-1 text-small font-medium transition-colors cursor-pointer ${
                activeId === link.id
                  ? "text-dark-pink"
                  : "text-light-pink hover:text-dark-pink"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-dark-pink rounded-full transition-all duration-300 ${
                  activeId === link.id ? "w-[140%]" : "w-0"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Right: Book Demo CTA */}
      <div className="ml-auto shrink-0">
        <button
          onClick={() => scrollToSection("book-demo")}
          className="rounded-full bg-hot-pink px-4 py-1.5 text-small text-white hover:bg-dark-pink transition-colors cursor-pointer"
        >
          Book Demo
        </button>
      </div>
    </nav>
  );
}
