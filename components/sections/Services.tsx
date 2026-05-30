const services = [
  {
    title: "Service One",
    description:
      "Describe what this service does and the value it delivers to your clients. Keep it benefit-focused.",
  },
  {
    title: "Service Two",
    description:
      "Describe what this service does and the value it delivers to your clients. Keep it benefit-focused.",
  },
  {
    title: "Service Three",
    description:
      "Describe what this service does and the value it delivers to your clients. Keep it benefit-focused.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-16 py-24 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-gray-200" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
