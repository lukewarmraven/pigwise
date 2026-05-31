import Image from "next/image";

const bullets = [
  "Specialized focus on swine farm technology.",
  "AI-powered monitoring and detection systems.",
  "Real-Time alerts for critical incidents.",
  "Scalable solutions for farms of all sizes.",
  "Cloud-based accessibility from anywhere.",
  "Commitment to improving animal welfare and farm productivity.",
];

export default function Why() {
  return (
    <section id="why" className="scroll-mt-16 py-24 px-6 md:px-28 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: text content */}
        <div className="flex flex-col gap-4">
          <div>
            {/* Pill badge */}
            <div className="w-fit">
              <span className="flex items-center gap-3 rounded-full bg-lighter-pink border border-dark-pink px-5 py-1.5 text-small font-semibold text-dark-pink whitespace-nowrap [box-shadow:-2px_-2px_6px_rgba(0,0,0,0.08)]">
                <span className="h-1.5 w-1.5 rounded-full bg-hot-pink animate-pulse shrink-0" />
                Why PigletGuard?
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-title font-bold leading-tight">
              <span className="text-dark-pink">Build For Farmers,</span>
              <br />
              <span className="text-light-pink">Powered with AI.</span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-body text-black leading-tight mb-3">
            Every feature is designed for the realities of Philippine swine
            production — humid pens, busy farmhands, and tight margins.
          </p>

          {/* Bullet list */}
          <ul className="flex flex-col gap-5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-6">
                <Image
                  src="/assets/Why/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <span className="text-body text-black">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: camera image */}
        <div className="relative h-[520px] w-full">
          <Image
            src="/assets/Why/Gemini_Generated_Image_5l3rax5l3rax5l3r%201.png"
            alt="PigletGuard surveillance camera"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
