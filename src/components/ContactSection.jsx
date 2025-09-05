import { FaPlus } from "react-icons/fa";

export default function ContactSectionOverlapping() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm px-4 py-1 rounded-full">
          Contact
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          We’re Here to Help – Get in <br /> Touch with CASA
        </h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-2xl">
          Trusted by Thousands of Business Owners. See what our satisfied
          customers have to say about CASA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* LEFT: FORM */}
        <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Have Questions? Feel Free to <br /> Reach Out!
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Business Name</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message*</label>
              <textarea
                rows={4}
                placeholder="Write your opinion"
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <button
              type="button"
              className="w-full bg-green-900 text-white py-3 rounded-full font-medium hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: OVERLAPPING CARDS */}
        <div className="relative flex justify-center md:justify-end md:min-h-[520px] mt-10 md:mt-0">
          <div className="flex flex-col items-center md:items-end gap-6 md:gap-0">
            {/* Yellow Base Card */}
            <div className="bg-[#F1F68E] rounded-3xl shadow p-6 sm:p-8 w-full max-w-md md:h-[400px] relative z-0">
              <div className="bg-white rounded-lg p-5 shadow-sm h-[250px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-green-700 text-lg">👥</span>
                    </span>
                    <h3 className="font-semibold text-gray-900">Total Users</h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-between mt-5">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex flex-col items-center justify-center text-sm font-semibold">
                    25k+
                    <span className="text-xs text-gray-500">Users</span>
                  </div>

                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
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
                </div>

                <div className="mt-6 bg-[#BFE5A6] rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800">
                      Monthly user
                    </span>
                    <span className="text-sm text-gray-600">50%</span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-gray-200">
                    <div className="h-4 w-1/2 rounded-full bg-green-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left: Consultation Card */}
            <div className="bg-green-50 rounded-3xl shadow p-6 sm:p-8 text-center w-full max-w-[250px] md:absolute md:left-0 md:bottom-[10%] z-20">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-900 text-white mb-4">
                ☎️
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Call for consultation
              </h4>
              <p className="text-gray-500 my-3">or</p>
              <button className="mx-auto bg-[#F1F68E] px-6 py-2 rounded-full font-medium hover:bg-yellow-400">
                Let’s connect
              </button>
            </div>

            {/* Right Tilted Balance Card */}
            <div className="bg-white rounded-2xl shadow p-4 sm:p-5 w-52 md:absolute md:right-[15%] md:top-[40%] md:rotate-[-6deg] z-30">
              <p className="text-xs text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">23,576.00</p>
              <button className="mt-2 inline-flex items-center gap-1 text-sm text-black hover:underline">
                <span className="inline-block rounded-full bg-[#BFE5A6] p-1">
                  <FaPlus size={12} />
                </span>{" "}
                Add Number
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
