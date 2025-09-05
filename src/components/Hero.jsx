import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full flex justify-center mt-36 px-4">
      <div className="flex flex-col items-center text-center max-w-6xl space-y-6">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 bg-[#E6F0DF] text-[#0F4E23] rounded-full text-sm font-medium">
          Fast. secure. hassle-free
        </div>

        {/* Heading with Overlapped Circles */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center flex flex-col gap-4">
          {/* First line: Get Paid Faster + circles + Instant Cash */}
          <span className="flex items-center justify-center gap-3 flex-wrap">
            <span>Get Paid Faster</span>

            {/* Overlapped Circles */}
            <div className="flex items-center justify-center relative">
              {/* Yellow background circle with tilted arrow */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F1F68E] rounded-full shadow-lg flex items-center justify-center relative z-10 overflow-hidden">
                <FaArrowUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#0F4E23] rotate-12" />
              </div>

              {/* Blue gradient circle overlapped */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0F4E23] rounded-full shadow-lg -ml-10 relative z-0"></div>
            </div>

            <span>Instant Cash</span>
          </span>

          {/* Second line */}
          <span>for Businesses!</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl">
          Stop waiting months for credit card payments. CASA helps business
          owners access cash instantly by converting card transactions into
          immediate funds.
        </p>

        {/* Get Started Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-4 px-8 py-3 rounded-full bg-[#0F4E23] text-white text-lg font-medium
                     transition-all duration-300 flex items-center justify-center gap-2
                     hover:bg-[#0b3a17] hover:scale-105 hover:shadow-lg"
        >
          Get Started
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isHovered ? "translate-x-2 rotate-12" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
