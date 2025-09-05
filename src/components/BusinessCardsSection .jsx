import Chart from "./Chart";

// Import company logos
import CubynLogo from "../assets/images/Vector (1).png";
import BastionLogo from "../assets/images/Vector (2).png";
import DigitsLogo from "../assets/images/Vector (3).png";
import PipeLogo from "../assets/images/Vector.png";
import RampLogo from "../assets/images/Rectangle 42087.png";
import { FaChartBar, FaDollarSign, FaPlus } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";

const BusinessCardsSection = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center py-12">
      {/* Cards container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 h-full justify-center items-stretch">
          {/* Card 1 */}
          <div className="w-full md:flex-1 bg-green-50 rounded-2xl shadow p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-200 rounded-full">
                <FaChartBar size={20} className="text-green-800" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                Sales overview from <br /> Previous Day
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <Chart />
            </div>

            <div className="flex items-center gap-2 bg-[#BFE5A6] rounded-full p-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-[#0F4E23] p-2 flex items-center justify-center">
                <FaDollarSign size={16} className="text-green-100" />
              </div>
              <p className="text-sm text-green-900">
                Avg. sale:{" "}
                <span className="font-semibold">$104.16</span> / per transaction
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:flex-1 bg-[#DAFFC2] rounded-2xl shadow p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#BFE5A6] rounded-full">
                <FaSackDollar size={20} className="text-green-800" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                Factoring Possible <br /> Amount.
              </h2>
            </div>

            <div className="flex justify-center">
  <div className="bg-white rounded-lg p-4 mb-4 w-max">
    <h4 className="text-gray-800 font-semibold">Available amount</h4>
    <div className="flex justify-between font-bold">
      <h4 className="text-gray-500 font-semibold">$15,375</h4>
      <h4>USD</h4>
    </div>
  </div>
</div>



            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#BFE5A6] rounded-full">
                  <FaDollarSign size={20} className="text-green-800" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  Factored amount vs. <br /> remaining balance
                </h2>
              </div>

              <div className="bg-[#E0F0E5] rounded-lg p-4">
                <div className="flex justify-between mb-4">
                  <p className="text-gray-800 font-semibold">Factored balance</p>
                  <p className="text-gray-800 font-semibold">$11,531.25</p>
                </div>

                <div className="flex items-center justify-end mb-2">
                  <span className="text-sm text-gray-600">75%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-gray-300">
                  <div className="h-3 w-3/4 rounded-full bg-green-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:flex-1 bg-[#F1F68E] rounded-2xl shadow p-4 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#DEE385] rounded-full">
                <GiFeather size={30} className="text-black" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                Secure & Streamlined <br /> Workflow
              </h2>
            </div>

            <div className="bg-white rounded-lg p-4 mt-6 md:rotate-[-8deg]">
  <div className="flex justify-between items-center mb-2">
    <p className="font-semibold">Recent Users</p>
    <a
      href="#"
      className="text-sm text-[#686868] font-medium hover:text-green-900 hover:underline transition-colors duration-200"
    >
      View All
    </a>
  </div>

  <div className="avatar-group -space-x-4">
    {[1, 2, 3, 4, 5].map((num) => (
      <div className="avatar" key={num}>
        <div className="w-10 rounded-full">
          <img
            src={`https://i.pravatar.cc/100?img=${num}`}
            alt={`profile${num}`}
          />
        </div>
      </div>
    ))}

    <div className="avatar placeholder">
      <div className="w-10 bg-[#DAFFC2] text-black rounded-full p-2 flex items-center justify-center">
        <span>9+</span>
      </div>
    </div>
  </div>
</div>


            <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 md:rotate-[2deg] w-full sm:w-3/5 self-end">
              <p className="text-gray-700 font-medium">Total Balance</p>
              <p className="font-semibold">$10,000</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E0F0E5] rounded-full">
                  <FaPlus size={10} className="text-black" />
                </div>
                <h2 className="text-gray-900">Add Number</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow md:rotate-[4deg]">
              {/* Left: Avatar + Info */}
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://i.pravatar.cc/100?img=1" alt="profile1" />
                  </div>
                </div>
                
              </div>
              <div className="flex flex-col gap-1">
                  <p className="font-semibold text-gray-900">Online</p>
                  <p className="text-gray-600 text-sm">Tomy Restaurant</p>
                </div>
              {/* Right: Amount + Button */}
              <div className="flex items-center gap-4 mt-4 md:mt-0 flex-col md:flex-col">
                <p className="flex items-center  text-black font-semibold">
                  <FaPlus className="text-sm" />{" "}
                  <FaDollarSign className="text-sm" /> 10k
                </p>
                <button className="btn btn-sm rounded-full bg-[#E0F0E5] text-[#0F4E23] px-4 hover:bg-green-700">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Bottom: Trusted companies */}
<div className="bg-green-800 text-white w-full flex justify-center mt-8 md:mt-2 p-6 text-lg sm:text-xl">
  <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
    {/* Title with right border */}
    <div className="pr-6 md:pr-8 border-r border-[#BFE5A6] mb-4 md:mb-0 text-center md:text-left">
      <p >Trusted by Top Companies</p>
    </div>

    {/* Companies spread evenly */}
    <div className="flex flex-wrap justify-center md:justify-evenly items-center gap-6 flex-1 mt-4 md:mt-0">
      {[
        { name: "Cubyn", logo: CubynLogo },
        { name: "Bastion", logo: BastionLogo },
        { name: "Digits", logo: DigitsLogo },
        { name: "Pipe", logo: PipeLogo },
        { name: "Ramp", logo: RampLogo },
      ].map((company, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <img
            src={company.logo}
            alt={company.name}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="font-bold">{company.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default BusinessCardsSection;
