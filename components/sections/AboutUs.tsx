"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "About PigWise Philippines Inc.",
    icon: (
      <Image src="/assets/AboutUs/about.svg" alt="" width={20} height={20} />
    ),
    content:
      "PigWise Philippines Inc. is an agricultural technology company dedicated to improving swine farm productivity through artificial intelligence and smart monitoring solutions. Our mission is to reduce piglet mortality, improve animal welfare, and empower farmers with data-driven tools that make farm management more efficient and effective.\n\nFounded with a vision to modernize the Philippine hog industry, PigWise combines computer vision, cloud technology, and real-time monitoring to address one of the most common causes of piglet mortality—accidental crushing by sows. Through our flagship solution, PigletGuard, farmers receive instant alerts and actionable insights that help protect livestock and maximize operational performance.",
  },
  {
    title: "What Pigwise Philippines Inc. Do?",
    icon: (
      <Image src="/assets/AboutUs/what.svg" alt="" width={20} height={20} />
    ),
    content:
      "PigWise develops intelligent monitoring systems designed specifically for swine farms. Our platform leverages artificial intelligence and computer vision to continuously monitor farrowing pens, detect potential risks, and notify farmers in real time.",
  },
  {
    title: "Our Core Values",
    icon: (
      <Image src="/assets/AboutUs/values.svg" alt="" width={20} height={20} />
    ),
    content: "",
    values: [
      {
        title: "Innovation",
        description:
          "We continuously explore emerging technologies to create smarter and more effective agricultural solutions.",
      },
      {
        title: "Sustainability",
        description:
          "We support efficient farming practices that promote animal welfare and long-term industry growth.",
      },
      {
        title: "Reliability",
        description:
          "We develop dependable systems that farmers can trust to operate around the clock.",
      },
      {
        title: "Integrity",
        description:
          "We uphold transparency, accountability, and ethical standards in all aspects of our operations.",
      },
      {
        title: "Customer Success",
        description:
          "Our success is measured by the success of the farmers and agricultural businesses we serve.",
      },
    ],
  },
  {
    title: "Our Vision & Mission",
    icon: (
      <Image src="/assets/AboutUs/mission.svg" alt="" width={20} height={20} />
    ),
    content: "",
    sections: [
      { title: "Vision", description: "To become the leading smart farming technology provider in Southeast Asia, helping farms embrace digital transformation and sustainable agricultural practices." },
      { title: "Mission", description: "To revolutionize livestock management by providing innovative AI-powered solutions that enhance animal welfare, reduce preventable losses, and improve farm productivity." },
    ],
  },
];

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="about-us"
      className="scroll-mt-16 py-24 px-6 md:px-28 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-title font-bold text-dark-pink mb-10">About Us</h2>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl bg-lighter-pink border border-light-pink/30 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-dark-pink">
                  <span className="shrink-0">{item.icon}</span>
                  <span className="text-small font-semibold">{item.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-dark-pink shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[600px] pb-5" : "max-h-0"}`}
              >
                {"values" in item && item.values ? (
                  <div className="flex flex-col gap-5">
                    {item.values.map((v) => (
                      <div key={v.title} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Image src="/assets/Why/check.svg" alt="" width={18} height={18} className="shrink-0" />
                          <span className="text-body font-bold text-dark-pink">{v.title}</span>
                        </div>
                        <p className="text-small text-black leading-relaxed pl-6">{v.description}</p>
                      </div>
                    ))}
                  </div>
                ) : "sections" in item && item.sections ? (
                  <div className="flex flex-col gap-5">
                    {item.sections.map((s) => (
                      <div key={s.title} className="flex flex-col gap-1">
                        <span className="text-body font-bold text-dark-pink">{s.title}</span>
                        <p className="text-small text-black leading-relaxed">{s.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {item.content.split("\n\n").map((para, j) => (
                      <p key={j} className="text-small text-black leading-relaxed">{para}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
