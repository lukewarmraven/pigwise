export default function BookDemo() {
  return (
    <section
      id="book-demo"
      className="scroll-mt-16 py-24 px-6 bg-gray-50"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-small font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Get Started
          </p>
          <h2 className="text-title font-bold text-black">Book a Demo</h2>
          <p className="mt-4 text-body text-gray-500">
            See our product in action. Fill in your details and we&apos;ll reach
            out to schedule a time that works for you.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-small font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-small text-black placeholder-gray-400 outline-none focus:border-hot-pink transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-small font-medium text-gray-700 mb-1"
              >
                Work Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-small text-black placeholder-gray-400 outline-none focus:border-hot-pink transition-colors"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-small font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your company name"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-small text-black placeholder-gray-400 outline-none focus:border-hot-pink transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-small font-medium text-gray-700 mb-1"
            >
              What are you looking to solve?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us a bit about your needs..."
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-small text-black placeholder-gray-400 outline-none focus:border-hot-pink transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="self-start rounded-full bg-hot-pink px-8 py-3 text-small font-semibold text-white hover:bg-dark-pink transition-colors cursor-pointer"
          >
            Book My Demo
          </button>
        </form>
      </div>
    </section>
  );
}
