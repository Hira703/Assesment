import React from "react";
import { FaCheck } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center gap-4">
          <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm px-4 py-1 rounded-full">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Simple & Fast — Receive Your <br /> Payment in 3 Steps!
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Empowering businesses with faster cash access, CASA provides a
            secure, fast, and flexible solution to get early payments for credit
            card sales.
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Step 1 */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#DAFFC2] p-6 rounded-xl flex flex-col gap-4 min-h-[280px] md:min-h-[300px]">
              <h3 className="text-xl font-semibold">Sign Up</h3>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-full bg-white focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full p-3 rounded-full bg-white focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-full bg-white focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <h3 className="text-xl font-semibold">Connect Your Business</h3>
            <p className="text-gray-600 text-base">
              Sign up and link your credit card processor or POS system with CASA.
              We support all major payment providers.
            </p>

            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                  <FaCheck className="text-green-600 text-xs" />
                </div>
                Fast approval & easy integration
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                  <FaCheck className="text-green-600 text-xs" />
                </div>
                No impact on your credit score
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#F1F68E] p-6 rounded-xl flex flex-col gap-4 min-h-[280px] md:min-h-[300px]">
              <div className="flex items-center bg-white rounded-lg p-4 justify-between">
                <div>
                  <h4 className="font-semibold">Maria Kosta</h4>
                  <p className="text-sm text-gray-500">Maria@gmail.com</p>
                </div>
                <span className="text-green-600 font-bold">+$10K</span>
              </div>

              <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Total balance</span>
                    <p className="text-green-600 font-bold text-lg">$12,000.00</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-200 text-black font-medium">
                      10%
                    </span>
                    <span className="text-xs text-gray-500 mt-1">discount</span>
                  </div>
                </div>
                <button className="w-full bg-green-100 text-black py-2 rounded-lg hover:bg-green-200 transition">
                  See detail
                </button>
              </div>
            </div>

            <h3 className="text-xl font-semibold">Transactions for Early Payment</h3>
            <p className="text-gray-600 text-base">
              Every morning, your previous day's credit card transactions are
              automatically submitted for funding.
            </p>

            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                  <FaCheck className="text-green-600 text-xs" />
                </div>
                No waiting for 30–60 day settlements
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                  <FaCheck className="text-green-600 text-xs" />
                </div>
                Transparent discount rates
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#DAFFC2] p-6 rounded-xl flex flex-col gap-4 min-h-[280px] md:min-h-[300px]">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                  <GiFeather size={20} className="text-black" />
                </div>
                <div>
                  <p className="font-semibold">Receive Money from Card</p>
                  <p className="text-sm text-gray-500">
                    Cash Deposited Within 24 Hours
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mt-auto">
                <p className="font-semibold mb-2">Recent Users</p>
                <div className="avatar-group -space-x-4">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.pravatar.cc/100?img=1" alt="profile1" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.pravatar.cc/100?img=2" alt="profile2" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.pravatar.cc/100?img=3" alt="profile3" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-10 bg-neutral text-neutral-content rounded-full">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold">Receive Funds & Grow</h3>
            <p className="text-gray-600 text-base">
              Get access to cash faster with same-day or next-day payouts to keep
              your business moving forward.
            </p>

            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                  <FaCheck className="text-green-600 text-xs" />
                </div>
                Same-day or next-day payouts
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                  <FaCheck className="text-green-600 text-xs" />
                </div>
                Flexible repayment from future sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
