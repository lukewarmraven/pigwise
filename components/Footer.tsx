"use client";

import Image from "next/image";

const columnHeaderClass =
  "text-small font-semibold uppercase tracking-widest text-black/40 mb-4";

const linkClass =
  "text-small text-black hover:text-dark-pink transition-colors cursor-pointer";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-lighter-pink px-6 md:px-28 pt-12 pb-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/assets/Navbar/Gemini_Generated_Image_pnb6jzpnb6jzpnb6%20(1)%201.svg"
              alt="PigletGuard logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-body font-bold text-dark-pink">Piglet Guard</span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div>
            <p className={columnHeaderClass}>Contact Information</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hot-pink shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-small text-black">pigwisephilippines@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hot-pink shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-small text-black">(+63) 964-983-4099</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className={columnHeaderClass}>Company</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Features", id: "solutions" },
                { label: "About Us", id: "about-us" },
                { label: "Contact", id: "contact" },
                { label: "Pricing", id: "pricing" },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className={linkClass}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className={columnHeaderClass}>Help</p>
            <ul className="flex flex-col gap-3">
              {["FAQ", "Help Center", "Support"].map((item) => (
                <li key={item}>
                  <span className={linkClass}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <p className={columnHeaderClass}>Follow Us</p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-black hover:text-dark-pink transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-black hover:text-dark-pink transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="text-black hover:text-dark-pink transition-colors">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-dark-pink/30" />

        {/* Bottom bar */}
        <div className="flex items-center justify-between">
          <p className="text-small text-black/50 italic">
            2026 Pigwise Philippines Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-small text-black cursor-pointer hover:text-dark-pink transition-colors">Privacy</span>
            <span className="text-small text-black cursor-pointer hover:text-dark-pink transition-colors">Terms &amp; Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
