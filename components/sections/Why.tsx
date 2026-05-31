const reasons = [
  {
    number: "01",
    title: "Built for Filipino Swine Farms",
    description:
      "PigletGuard is designed around the realities of small and mid-scale Filipino farrowing operations — affordable hardware, intermittent connectivity, and mobile-first workflows.",
  },
  {
    number: "02",
    title: "On-Device AI — No Cloud Delay",
    description:
      "Detection runs directly on the phone. Even without internet, PigletGuard reacts in real time so no critical seconds are lost waiting for a server response.",
  },
  {
    number: "03",
    title: "Proven Intervention Logic",
    description:
      "Our crushing detection uses computer vision models trained on actual sow behavior, not generic object detection. Fewer false alarms, more real saves.",
  },
  {
    number: "04",
    title: "One App, Full Picture",
    description:
      "Live video, AI alerts, distress audio detection, and farm analytics — all in a single mobile app. No juggling separate tools or dashboards.",
  },
  {
    number: "05",
    title: "Instant Farmer Alerts",
    description:
      "Push notifications reach you in seconds the moment a risk is detected, whether you're in the next room or kilometers away from the farm.",
  },
  {
    number: "06",
    title: "Grows With Your Farm",
    description:
      "Start with one pen and one camera. Scale to multiple farrowing houses without replacing hardware or switching platforms.",
  },
];

export default function Why() {
  return (
    <section
      id="why"
      className="scroll-mt-16 py-24 px-6 md:px-28 bg-white"
    >
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <p className="text-small font-semibold uppercase tracking-widest text-light-pink mb-3">
          Why PigletGuard
        </p>
        <h2 className="text-title font-bold text-hot-pink leading-tight">
          Why Choose PigletGuard?
        </h2>
        <p className="text-body text-black mt-4 leading-snug">
          Other surveillance tools are generic. PigletGuard is purpose-built for the
          one job that matters most during farrowing season — keeping every piglet alive.
        </p>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className="group rounded-2xl border border-light-pink/40 bg-light-pink/5 p-7 flex flex-col gap-4 hover:border-hot-pink/60 hover:bg-light-pink/10 transition-colors"
          >
            <span className="text-4xl font-bold text-hot-pink/20 group-hover:text-hot-pink/40 transition-colors leading-none">
              {reason.number}
            </span>
            <h3 className="text-small font-bold text-dark-pink leading-snug">
              {reason.title}
            </h3>
            <p className="text-small text-black leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
