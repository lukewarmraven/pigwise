"use client";

import Image from "next/image";

const columnHeaderClass =
  "text-small font-semibold uppercase tracking-widest text-black/60";

const linkClass =
  "text-small text-black hover:text-dark-pink transition-colors cursor-pointer";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-lighter-pink px-6 md:px-28 pt-8 pb-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <div className="relative h-14 w-14 shrink-0">
          <Image
            src="/assets/Navbar/Gemini_Generated_Image_pnb6jzpnb6jzpnb6%20(1)%201.svg"
            alt="PigletGuard logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-2xl font-semibold text-dark-pink">
          Piglet Guard
        </span>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-10 mb-3">
        {/* Contact Information */}
        <div className="flex flex-col gap-2">
          <p className={columnHeaderClass}>Contact Information</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-hot-pink shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-small text-black">
                pigwisephilippines@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-hot-pink shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-small text-black">(+63) 964-983-4099</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className={columnHeaderClass}>Company</p>
          <ul className="flex flex-col">
            {[
              { label: "Features", id: "solutions" },
              { label: "About Us", id: "about-us" },
              { label: "Contact", id: "contact" },
              { label: "Pricing", id: "pricing" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={linkClass}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <p className={columnHeaderClass}>Help</p>
          <ul className="flex flex-col">
            {["FAQ", "Help Center", "Support"].map((item) => (
              <li key={item}>
                <span className={linkClass}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-4">
          <p className={columnHeaderClass}>Follow Us</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook">
              <Image
                src="/assets/footer/black-fb.svg"
                alt="Facebook"
                width={15}
                height={15}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/assets/footer/black-ig.svg"
                alt="Instagram"
                width={15}
                height={15}
              />
            </a>
            <a href="#" aria-label="TikTok">
              <Image
                src="/assets/footer/black-tiktok.svg"
                alt="TikTok"
                width={15}
                height={15}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-1.5 border-hot-pink mb-2" />

      {/* Bottom bar */}
      <div className="flex items-center justify-between">
        <p className="text-small text-black italic">
          2026 Pigwise Philippines Inc. All Rights Reserved.
        </p>
        <div className="flex gap-4 items-center">
          <span className="text-small text-black cursor-pointer hover:text-dark-pink transition-colors">
            Privacy
          </span>
          <span className="text-small text-black cursor-pointer hover:text-dark-pink transition-colors">
            Terms &amp; Condition
          </span>
        </div>
      </div>
    </footer>
  );
}
