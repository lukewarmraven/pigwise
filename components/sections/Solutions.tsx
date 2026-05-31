"use client";

import Image from "next/image";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const features = [
  {
    title: "AI Piglet Crushing Detection",
    description:
      "Using advanced computer vision, PigletGuard instantly detects if a sow lies down on her piglets and triggers immediate countermeasures. This cutting-edge AI intervention minimizes accidental crushing.",
    icon: "/assets/Solutions/stars.svg",
  },
  {
    title: "Real-Time Emergency AI",
    description:
      "The moment a high-risk event or distress cry is detected, the app sends instant push notifications to your smartphone. This ensures you can react in seconds, saving lives even when you are away from the farrowing house.",
    icon: "/assets/Solutions/clock.svg",
  },
  {
    title: "24/7 Smart Surveillance",
    description:
      "Continuous, automated video feeds keep a vigilant eye on your livestock day and night without requiring constant human monitoring. The system intelligently filters normal behavior from actual threats.",
    icon: "/assets/Solutions/cam.svg",
  },
  {
    title: "Farm Analytics And Reporting",
    description:
      "Check in on your barn's live conditions and piglet activity from anywhere in the world via our intuitive mobile app. You no longer need to be physically present in the pen to ensure your herd is safe and thriving.",
    icon: "/assets/Solutions/analytics.svg",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-16 py-24 px-6 md:px-28 bg-white"
    >
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-title font-bold text-dark-pink">Solutions</h2>
        <p className="text-body text-black  max-w-auto leading-snug">
          PigletGuard is an AI-powered surveillance and monitoring platform
          designed to assist farmers in protecting newborn piglets during the
          critical farrowing period.
        </p>
      </div>

      {/* Two-column: image left, cards right */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center ">
        {/* Left: phone mockup image */}
        <div className="flex items-center w-120 h-120 justify-center">
          <Image
            src="/assets/Solutions/Gemini_Generated_Image_g30yhg30yhg30yhg%201.png"
            alt="PigletGuard app mockup"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>

        {/* Right: 2×2 feature cards */}
        <div className="grid grid-cols-2 gap-6 min-w-xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-light-pink/10 border-2 border-light-pink/40 p-8 aspect-square overflow-hidden flex flex-col gap-4"
            >
              <div className="flex items-start gap-6">
                <Image
                  src={feature.icon}
                  alt=""
                  width={35}
                  height={35}
                  className="shrink-0 mt-0.5"
                />
                <h3 className="text-body font-semibold text-dark-pink leading-snug">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-black leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-end mt-10">
        <button
          onClick={() => scrollToSection("why")}
          className="rounded-full bg-hot-pink px-6 py-2.5 text-small font-semibold text-white hover:bg-dark-pink transition-colors cursor-pointer"
        >
          Why Choose PigletGuard?
        </button>
      </div>
    </section>
  );
}
