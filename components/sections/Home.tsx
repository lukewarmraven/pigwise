"use client";

import Image from "next/image";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-16 min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_550px] gap-8 items-center px-6 md:px-28 py-24 bg-white"
    >
      {/* Left side */}
      <div className="flex flex-col gap-6">
        {/* 1. Title */}
        <div>
          <h1 className="text-title font-bold leading-tight">
            <span className="block">
              <span className="text-light-pink">Smart</span>
              <span className="text-dark-pink"> Farming.</span>
            </span>
            <span className="block">
              <span className="text-light-pink">Safer</span>
              <span className="text-dark-pink"> Piglets.</span>
            </span>
          </h1>
        </div>

        {/* 2. Descriptor */}
        <div>
          <p className="text-body text-black leading-snug">
            PigletGuard Mobile uses on-device AI to detect crushing risks,
            distress calls, and farrowing emergencies in real time — so Filipino
            swine farms can act fast and save more piglets.
          </p>
        </div>

        {/* 3. Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <button
            onClick={() => scrollToSection("solutions")}
            className="inline-flex items-center justify-center rounded-full bg-hot-pink px-4 py-2 text-small text-white hover:bg-dark-pink transition-colors cursor-pointer"
          >
            Start Now!
          </button>
          <button
            onClick={() => scrollToSection("book-demo")}
            className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-small text-light-pink hover:border-dark-pink hover:text-dark-pink transition-colors cursor-pointer"
          >
            See How It Works
          </button>
        </div>

        {/* 4. Stats — 3 items horizontally, each with a large value and a label */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-semibold text-dark-pink">24/7</p>
            <p className="text-small text-black">Live Monitoring</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-semibold text-dark-pink">100%</p>
            <p className="text-small text-black">Real-Time & Secured</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-semibold text-dark-pink">AI Tech</p>
            <p className="text-small text-black">Guaranteed Future-Proof</p>
          </div>
        </div>
      </div>

      {/* Right side — image with rounded rectangle shadow */}
      <div className="relative h-90">
        {/* Shadow: offset rounded rectangle behind the image */}
        <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-hot-pink/30" />
        {/* Image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <Image
            src="/assets/Home/image%203.jpg"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Pill badge — centered on the top-left corner of the image */}
        <div className="absolute top-0 left-0 -translate-x-1 -translate-y-1/2 z-10 group relative w-fit">

          {/* Left whiskers — absolutely centered on the pill's midpoint */}
          <div className="absolute right-full top-[40%] -translate-y-1/2 pr-4 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-4 h-[3px] rounded-full bg-hot-pink rotate-15 origin-right" />
            <div className="w-5 h-[3px] rounded-full bg-hot-pink" />
            <div className="w-4 h-[3px] rounded-full bg-hot-pink rotate-[-15deg] origin-right" />
          </div>

          <span className="flex items-center gap-4 rounded-full bg-white border border-hot-pink px-5 py-1.5 text-small font-semibold text-hot-pink whitespace-nowrap [box-shadow:-2px_-2px_6px_rgba(0,0,0,0.3)]">
            <span className="h-1.5 w-1.5 rounded-full bg-hot-pink animate-pulse shrink-0" />
            Monitor your piglets 24/7!
          </span>

          {/* Right whiskers — absolutely centered on the pill's midpoint */}
          <div className="absolute left-full top-[40%] -translate-y-1/2 pl-4 flex flex-col items-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-4 h-[3px] rounded-full bg-hot-pink rotate-[-15deg] origin-left" />
            <div className="w-5 h-[3px] rounded-full bg-hot-pink" />
            <div className="w-4 h-[3px] rounded-full bg-hot-pink rotate-15 origin-left" />
          </div>

        </div>
      </div>
    </section>
  );
}
