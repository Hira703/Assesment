import React from "react";

const CTASection = () => {
  return (
    <section className="bg-[#0F4E23] w-[90%] max-w-[1440px] mx-auto rounded-2xl py-12 sm:py-16 px-6 sm:px-12 flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
        Unlock Instant Cash <br /> Flow for Your Business!
      </h2>
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        Running a business shouldn’t mean waiting weeks for credit card payments to clear.
        With CASA, you can convert your daily transactions into instant cash and focus on growing your business.
      </p>
      <button className="bg-[#F1F68E] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 shadow-md">
        Get Started
      </button>
    </section>
  );
};

export default CTASection;
