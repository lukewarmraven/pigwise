"use client";

import Image from "next/image";
import { useState } from "react";

const cardClass =
  "rounded-2xl bg-lighter-pink border border-dark-pink p-5 flex flex-col gap-2";

const cardTitleClass =
  "flex items-center gap-2 text-body text-dark-pink";

const iconClass = "shrink-0";

export default function ContactUs() {
  const [toast, setToast] = useState("");

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setToast("Copied!");
    setTimeout(() => setToast(""), 2000);
  }

  return (
    <>
    {toast && (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-dark-pink text-white text-small font-medium px-5 py-2.5 rounded-full shadow-lg animate-fade-in-up">
        {toast}
      </div>
    )}
    <section id="contact" className="scroll-mt-16 py-24 px-6 md:px-28 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="flex items-center justify-center gap-2 text-subtitle font-bold text-dark-pink leading-tight">
            Contact Us
            <div className="relative h-25 w-25 shrink-0">
              <Image
                src="/assets/Navbar/Gemini_Generated_Image_pnb6jzpnb6jzpnb6%20(1)%201.svg"
                alt="PigletGuard logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold">Piglet Guard</span>
          </h2>
          <p className="text-body text-black leading-snug">
            We would love to hear from you. Whether you are interested in
            learning more about our technology, scheduling a product
            demonstration, exploring partnership opportunities, or seeking
            technical support, our team is ready to assist you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="max-w-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3 h-full">
            {/* Business Information + Follow Us */}
            <div className={`${cardClass} flex-1`}>
              <p className={cardTitleClass}>
                <Image src="/assets/Contacts/business.svg" alt="" width={20} height={20} className={iconClass} />
                Business Information
              </p>
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-small font-semibold text-black">Business Office Hours</span>
                <span className="text-small text-black">Monday – Friday | 8:00AM – 5:00PM</span>
              </div>

              <p className={cardTitleClass}>
                <Image
                  src="/assets/Contacts/follow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={iconClass}
                />
                Follow Us
              </p>
              <p className="text-small text-black leading-snug">
                Below are the PigWise Philippines Inc. active social media
                accounts. For inquiries, you may proceed on the following
                accounts as well.
              </p>
              <div className="flex flex-col gap-2 mt-1">
                {[
                  { src: "/assets/Contacts/facebook.svg", alt: "Facebook", label: "PigWise Philippines" },
                  { src: "/assets/Contacts/insta.svg", alt: "Instagram", label: "@pigwiseph" },
                  { src: "/assets/Contacts/linkedin.svg", alt: "LinkedIn", label: "PigWise Philippines Inc." },
                ].map(({ src, alt, label }) => (
                  <button
                    key={alt}
                    onClick={() => copyToClipboard(label)}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-4 flex items-center justify-center shrink-0">
                      <Image src={src} alt={alt} width={14} height={14} className={iconClass} />
                    </div>
                    <span className="text-small text-black group-hover:text-hot-pink transition-colors">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3 h-full">
            {/* Address */}
            <div className={`${cardClass} flex-1`}>
              <p className={cardTitleClass}>
                <Image
                  src="/assets/Contacts/address.svg"
                  alt=""
                  width={15}
                  height={15}
                  className={iconClass}
                />
                Address
              </p>
              <span className="text-small text-black">
                Quezon City, Metro Manila, Philippines
              </span>
            </div>

            {/* Phone */}
            <div className={`${cardClass} flex-1`}>
              <p className={cardTitleClass}>
                <Image
                  src="/assets/Contacts/phone-contact.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={iconClass}
                />
                Phone Number
              </p>
              <button onClick={() => copyToClipboard("(+63) 964-983-4099")} className="text-small text-black hover:text-hot-pink transition-colors cursor-pointer text-left">
                (+63) 964-983-4099
              </button>
            </div>

            {/* Email */}
            <div className={`${cardClass} flex-1`}>
              <p className={cardTitleClass}>
                <Image
                  src="/assets/Contacts/mail-contact.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={iconClass}
                />
                Email
              </p>
              <button onClick={() => copyToClipboard("pigwisephilippines@gmail.com")} className="text-small text-black hover:text-hot-pink transition-colors cursor-pointer text-left">
                pigwisephilippines@gmail.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
