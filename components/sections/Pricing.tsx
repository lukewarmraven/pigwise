"use client";

import Image from "next/image";

function handleBookDemo(planName: string) {
  window.dispatchEvent(new CustomEvent("select-plan", { detail: planName }));
  document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
}

const plans = [
  {
    name: "Starter Plan",
    price: "₱999",
    period: "/ month",
    description: "For small backyard farms.\nRecommended: 1-5 farrowing pens.",
    includesLabel: "Includes",
    features: [
      "1 Camera Connection",
      "AI Piglet Crushing Detection",
      "Real-Time Mobile Alerts",
      "Incident History (30 Days)",
      "Basic Analytics Dashboard",
      "Email Support",
    ],
  },
  {
    name: "Professional Plan",
    price: "₱2,499",
    period: "/ month",
    description:
      "For growing commercial farms.\nRecommended: 5-20 farrowing pens.",
    includesLabel: "Includes everything in Starter, plus",
    features: [
      "Up to 5 Cameras",
      "Advanced Analytics",
      "Unlimited Alert History",
      "Incident Video Playback",
      "Multi-Pen Monitoring",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom Pricing",
    period: "",
    description:
      "For large-scale swine operations.\nRecommended: Commercial farms and cooperatives.",
    includesLabel: "Includes everything in Professional, plus",
    features: [
      "Up to 20 Cameras",
      "Multi-Farm Monitoring",
      "Dedicated Account Manager",
      "API Integration",
      "Custom Reports",
      "On-Site Training",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-24 px-6 md:px-28 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-title font-bold text-dark-pink">Pricing Plans</h2>
          <p className="mt-3 text-body text-black max-w-xl mx-auto">
            Choose the perfect plan to protect your herd and optimize your
            operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group rounded-2xl bg-white border border-light-pink/40 p-7 flex flex-col gap-4 hover:bg-lighter-pink transition-colors duration-200 cursor-default select-none"
            >
              {/* Plan name with star icon */}
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/Pricing/price-star.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <span className="text-body font-bold text-dark-pink">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div>
                <span className="text-3xl font-bold text-black group-hover:text-hot-pink transition-colors duration-200">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-small text-black ml-1">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="flex flex-col">
                {plan.description.split("\n").map((line, i) => (
                  <span key={i} className="text-small text-black">
                    {line}
                  </span>
                ))}
              </div>

              {/* Includes label */}
              <p className="text-small font-semibold text-dark-pink/70">
                {plan.includesLabel}
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Image
                      src="/assets/Why/check.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    <span className="text-small text-black">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleBookDemo(plan.name)}
                className="mt-2 w-full rounded-full bg-hot-pink px-6 py-3 text-small font-semibold text-white hover:bg-dark-pink transition-colors cursor-pointer"
              >
                Book a Demo
              </button>
            </div>
          ))}
        </div>

        {/* Hardware Package */}
        <div className="group mt-6 rounded-2xl bg-white border border-light-pink/40 p-7 flex flex-col md:flex-row gap-8 hover:bg-lighter-pink transition-colors duration-200 cursor-default select-none">
          {/* Left */}
          <div className="flex flex-col gap-3 md:w-80 shrink-0">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Pricing/price-star.svg"
                alt=""
                width={20}
                height={20}
                className="shrink-0"
              />
              <span className="text-body font-bold text-dark-pink">
                Hardware Package
              </span>
            </div>
            <div>
              <span className="text-3xl font-bold text-black group-hover:text-hot-pink transition-colors duration-200">
                Starting at ₱6,000
              </span>
            </div>
            <p className="text-small text-black">Ideal for 1 farrowing pen</p>
            <p className="text-small text-hot-pink font-medium">
              Hardware purchase is required before subscribing to any software
              plan.
            </p>
            <button
              onClick={() => handleBookDemo("Hardware Package")}
              className="mt-2 w-full rounded-full bg-hot-pink px-6 py-3 text-small font-semibold text-white hover:bg-dark-pink transition-colors cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-small font-semibold text-black/60">
              One time purchase includes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3">
              {[
                "AI Processing Device",
                "Installation Assistance",
                "HD Surveillance Camera",
                "Mobile App Access",
                "Protective Housing",
                "Initial AI Configuration",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Image
                    src="/assets/Why/check.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="text-small text-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
