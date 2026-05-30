export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-24 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl bg-gray-200 aspect-square w-full flex items-center justify-center text-gray-400 text-sm">
          Image placeholder
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            A little bit about who we are
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            This is a placeholder paragraph. Replace it with the story of your
            company — your mission, your values, and what makes you different
            from everyone else in the market.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Add a second paragraph here if needed. Keep it concise and focused
            on building trust with your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
