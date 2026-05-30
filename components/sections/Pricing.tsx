const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals getting started.",
    features: ["Feature one", "Feature two", "Feature three"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams that need more.",
    features: ["Everything in Starter", "Feature four", "Feature five", "Feature six"],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: ["Everything in Pro", "Custom integrations", "Dedicated support"],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 py-24 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-small font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Pricing
          </p>
          <h2 className="text-title font-bold text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-body text-gray-500 max-w-xl mx-auto">
            Choose the plan that works best for you. Upgrade or downgrade at any time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-hot-pink text-white"
                  : "bg-white border border-gray-100"
              }`}
            >
              <p className="text-small font-semibold uppercase tracking-widest mb-2 text-white/70">
                {plan.name}
              </p>
              <p className={`text-title font-bold mb-2 ${plan.highlighted ? "text-white" : "text-black"}`}>
                {plan.price}
              </p>
              <p className={`text-small mb-6 ${plan.highlighted ? "text-white/70" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-small flex items-center gap-2 ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${plan.highlighted ? "bg-white/60" : "bg-gray-400"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`rounded-full px-6 py-3 text-small font-semibold transition-colors cursor-pointer ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-light-pink/20"
                    : "bg-black text-white hover:bg-black/80"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
