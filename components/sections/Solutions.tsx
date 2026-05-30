const solutions = [
  {
    title: "Solution One",
    description:
      "Describe what this solution does and the value it delivers to your clients. Keep it benefit-focused.",
  },
  {
    title: "Solution Two",
    description:
      "Describe what this solution does and the value it delivers to your clients. Keep it benefit-focused.",
  },
  {
    title: "Solution Three",
    description:
      "Describe what this solution does and the value it delivers to your clients. Keep it benefit-focused.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-16 py-24 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-small font-semibold uppercase tracking-widest text-gray-400 mb-4">
            What We Offer
          </p>
          <h2 className="text-title font-bold text-black">Our Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-light-pink/20 bg-light-pink/10 p-8"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-light-pink" />
              <h3 className="text-body font-semibold text-black mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-500 text-small leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
