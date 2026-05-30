"use client";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-16 min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight max-w-4xl">
        Your Headline Goes Here
      </h1>
      <p className="mt-6 text-xl text-gray-500 max-w-xl">
        A short, punchy description of what your company does and who it helps.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => scrollToSection("about")}
          className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Learn More
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
