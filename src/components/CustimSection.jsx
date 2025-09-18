import React from "react";
import { LuBanknote } from "react-icons/lu"; // Cash / Banknote
import { FiCreditCard } from "react-icons/fi"; // Credit Card
import { BsCashStack } from "react-icons/bs"; // Cash Stack

export default function CasaServiceSection() {
  return (
    <section className="w-full bg-white opacity-100">
      {/* Main container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col py-12 gap-12">
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6">
  {/* Left Side */}
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
    <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm rounded-full mb-4 px-3 py-1">
      About Casa Service
    </span>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
      Revolutionizing Cash Flow <br /> for Business Owners!
    </h2>
  </div>

  {/* Right Side */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
      Empowering businesses with faster cash access, CASA provides a secure,
      fast, and flexible solution to get early payments for credit card sales.
    </p>
    <button className="w-fit py-2 px-4 bg-[#0F4E23] text-white rounded-full hover:bg-green-800 transition">
      Join Now
    </button>
  </div>
</div>


        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 md:p-8 rounded-2xl shadow-sm bg-[#F8F8F8] flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Secure and Instant Cash Advances
            </h3>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E0F0E5] text-green-600 mb-4">
              <LuBanknote size={24} />
            </div>
            <p className="text-sm md:text-base text-gray-600">
              No more waiting weeks—convert daily credit card transactions into
              cash within 24 hours to keep your business running smoothly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 md:p-8 rounded-2xl shadow-sm bg-[#F8F8F8] flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Transparent and Fair Pricing Process
            </h3>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E0F0E5] text-green-600 mb-4">
              <FiCreditCard size={24} />
            </div>
            <p className="text-sm md:text-base text-gray-600">
              No Hidden Fees, No Surprises. Enjoy clear, upfront pricing with
              flexible funding options, so you always know what to expect.
            </p>
          </div>

          {/* Card 3 (Highlighted) */}
          <div className="p-6 md:p-8 rounded-2xl shadow-sm bg-[#0F4E23] text-white flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Flexible and Secure Payout Options
            </h3>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E0F0E5] text-green-600 mb-4">
              <BsCashStack size={24} />
            </div>
            <p className="text-sm md:text-base">
              We offer flexible and easy payout options tailored to your needs,
              ensuring quick access to your funds. Choose from multiple payment
              methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
