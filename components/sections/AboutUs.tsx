export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="scroll-mt-16 py-24 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl bg-light-pink/20 aspect-square w-full flex items-center justify-center text-gray-400 text-small">
          Image placeholder
        </div>
        <div>
          <p className="text-small font-semibold uppercase tracking-widest text-gray-400 mb-4">
            About Us
          </p>
          <h2 className="text-title font-bold text-black leading-snug mb-6">
            A little bit about who we are
          </h2>
          <p className="text-body text-gray-500 leading-relaxed mb-4">
            This is a placeholder paragraph. Replace it with the story of your
            company — your mission, your values, and what makes you different
            from everyone else in the market.
          </p>
          <p className="text-body text-gray-500 leading-relaxed">
            Add a second paragraph here if needed. Keep it concise and focused
            on building trust with your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
