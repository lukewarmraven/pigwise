"use client";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-sm border-b border-gray-100 flex items-center px-6 md:px-12">
      <button
        onClick={() => scrollToSection("hero")}
        className="text-xl font-bold text-gray-900 mr-auto cursor-pointer"
      >
        Company Name
      </button>
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
