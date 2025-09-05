import React from "react";
import Chart from "./Chart";
import { FaMoneyBillAlt, FaRegCreditCard } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { FaShield } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

export default function WhyCasaDifferent() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-10 flex flex-col gap-10">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center gap-4">
        <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm px-4 py-1 rounded-full">
          Why casa different
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Why CASA Stands Out <br /> from the Rest
        </h2>
        <p className="text-base md:text-lg text-[#686868] max-w-2xl">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 bg-[#F8F8F8] rounded-lg p-6">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row lg:w-3/4 gap-6 relative">
          {/* Chart Card */}
          <div className="bg-[#E0F0E5] p-6 rounded-lg flex flex-col gap-6 w-full lg:w-3/4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1F68E]">
                <GiFeather size={20} className="text-black" />
              </div>
              <div>
                <p className="font-semibold">Receive Money from Card</p>
                <p className="text-sm text-[#686868]">
                  Cash Deposited Within 24 Hours
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <Chart />
            </div>
          </div>

          {/* Top Users Card */}
          {/* ✅ Show as normal card on small/medium, overlap only on lg+ */}
          <div className="w-full lg:w-[300px] bg-white rounded-lg p-4 shadow-lg mt-6 lg:mt-0 lg:absolute lg:top-1/2 lg:left-[70%] lg:-translate-y-1/2">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
              Top Users
            </h3>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i}`}
                    alt={`profile${i}`}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-4 bg-[#F8F8F8] rounded-lg p-4">
              <h4 className="text-medium text-[#686868]">Enter Amount</h4>
              <div className="flex justify-between items-center">
                <p className="font-semibold">$10000</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-bold italic text-xl bg-gradient-to-r from-[#222357] to-[#254AA5] bg-clip-text text-transparent transition-all duration-300 hover:gap-3"
                >
                  Visa <span>›</span>
                </a>
              </div>
              <p className="text-medium text-[#686868]">
                Discount rate: 10%
              </p>
            </div>

            <button className="bg-[#BFE5A6] rounded-full py-2 mt-4 w-full text-black font-medium">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/5 flex flex-col gap-4">
          <h2 className="text-lg md:text-xl font-bold text-black mb-2">
            CASA offers instant, flexible funding from card transactions.
          </h2>
          <p className="text-medium text-[#0F4E23]">
            CASA stands out by offering fast, flexible, and transparent funding
            for business owners who need immediate cash flow from credit card
            transactions. Here’s what makes us unique:
          </p>

          {/* CASA Features */}
          <div className="flex flex-col gap-4 mt-4">
            {[
              {
                icon: <FaMoneyBillAlt size={20} className="text-[#0F4E23]" />,
                text: "Instant Cash, No Waiting",
              },
              {
                icon: <FaShield size={20} className="text-[#0F4E23]" />,
                text: "No Hidden Fees, No Surprises",
              },
              {
                icon: <FaRegCreditCard size={20} className="text-[#0F4E23]" />,
                text: "Seamless POS & Payment Processor",
              },
              {
                icon: <MdVerified size={20} className="text-[#0F4E23]" />,
                text: "Secure & Compliant Transactions",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#DFEDE3] flex items-center justify-center">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
            <button className="w-fit py-2 px-6 bg-[#0F4E23] text-white rounded-full hover:bg-green-800 transition">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
