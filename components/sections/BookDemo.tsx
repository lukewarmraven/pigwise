"use client";

import { useState } from "react";
import Image from "next/image";

const inputClass =
  "w-full rounded-xl border border-light-pink/50 bg-white px-4 py-3 text-body text-black placeholder-light-pink/70 outline-none focus:border-dark-pink transition-colors";

const labelClass = "block text-body font-medium text-black mb-1";

export default function BookDemo() {
  const [form, setForm] = useState({
    fullName: "",
    farmName: "",
    email: "",
    phone: "",
    about: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <section
        id="book-demo"
        className="scroll-mt-16 py-24 px-6 md:px-28 bg-white"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            {/* Pill */}
            <div className="w-fit">
              <span className="flex items-center gap-3 rounded-full bg-lighter-pink border border-dark-pink px-5 py-1.5 text-body font-semibold text-dark-pink whitespace-nowrap [box-shadow:-2px_-2px_6px_rgba(0,0,0,0.08)]">
                <Image
                  src="/assets/BookDemo/calendar.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                Book a Demo
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-subtitle font-bold text-dark-pink leading-tight">
              See PigletGuard
              <br />
              live on your farm.
            </h2>

            {/* Description */}
            <p className="text-body text-black leading-snug">
              Schedule a free 30-minute walkthrough with our team. We&apos;ll
              show you how PigletGuard fits your farrowing setup.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/BookDemo/mail.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                <span className="text-small text-black">
                  pigwisephilippines@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/BookDemo/phone.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                <span className="text-small text-black">
                  (+63) 964-983-4099
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 flex flex-col gap-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full name</label>
                <input
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Martin Mendez"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Farm name</label>
                <input
                  name="farmName"
                  required
                  value={form.farmName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Sunrise Swine Farm"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Email</label>
                <input
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@farm.ph"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+63 9XX XXX XXXX"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Tell us about your farm</label>
              <textarea
                name="about"
                required
                value={form.about}
                onChange={handleChange}
                rows={4}
                placeholder="Number of sows, location, current monitoring setup..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <p className="text-footnote text-black/50 leading-snug italic">
              By submitting this form, you agree to the collection and use of
              your information to process your demo request and communicate with
              you about PigletGuard services.
            </p>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-hot-pink px-6 py-3 text-small font-semibold text-white hover:bg-hot-pink transition-colors cursor-pointer"
              >
                Request Demo
                <span className="text-base">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl border-2 border-dark-pink max-w-md w-full p-8 flex flex-col items-center gap-5 shadow-xl">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/assets/Navbar/Gemini_Generated_Image_pnb6jzpnb6jzpnb6%20(1)%201.svg"
                  alt="PigletGuard logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-small font-bold text-dark-pink">
                PigletGuard
              </span>
            </div>

            {/* Thank you message */}
            <div className="text-center flex flex-col gap-1">
              <p className="text-body font-bold text-dark-pink">
                Thank you for requesting a demo,
              </p>
              <p className="text-body font-bold text-dark-pink">
                {form.fullName} of {form.farmName}!
              </p>
            </div>

            {/* About box */}
            <div className="w-full rounded-xl border border-light-pink/40 bg-lighter-pink px-5 py-4">
              <p className="text-small text-black italic leading-relaxed">
                &ldquo;{form.about}&rdquo;
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-row px-8 justify-between w-full">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-dark-pink shrink-0"
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
                <span className="text-small text-black">{form.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-dark-pink shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-small text-black">{form.phone}</span>
              </div>
            </div>

            {/* OK button */}
            <button
              onClick={() => {
                setShowModal(false);
                setForm({
                  fullName: "",
                  farmName: "",
                  email: "",
                  phone: "",
                  about: "",
                });
              }}
              className="w-full rounded-full bg-dark-pink px-6 py-3 text-small font-semibold text-white hover:bg-dark-pink transition-colors cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
