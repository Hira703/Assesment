import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    rate: "2%",
    rateLabel: "Discount Rate",
    description: "For businesses processing up to $10,000/month",
    bgColor: "bg-[#F2F2F2]",
    textColor: "text-gray-900",
    buttonStyle:
      "bg-white border border-gray-300 text-black hover:bg-gray-100",
  },
  {
    name: "Enterprise Plan",
    rate: "Custom Rate",
    rateLabel: "Tailored for high-volume businesses",
    description: "",
    bgColor: "bg-green-900 text-white",
    textColor: "text-white",
    buttonStyle: "bg-[#F1F68E] text-black hover:bg-yellow-400",
  },
  {
    name: "Growth Plan",
    rate: "1.5%",
    rateLabel: "Discount Rate",
    description: "For businesses processing up to $10,000 – $50,000/month",
    bgColor: "bg-gray-50",
    textColor: "text-gray-900",
    buttonStyle:
      "bg-white border border-gray-300 text-black hover:bg-gray-100",
  },
];

const features = [
  "Instant Fund Transfers",
  "Real-time Transaction Monitoring",
  "Seamless POS Integration",
  "24/7 Customer Support",
];

export default function Pricing() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm px-4 py-1 rounded-full">
          Pricing
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Simple, Transparent <br /> Pricing — No Hidden Fees!
        </h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-2xl">
          Trusted by Thousands of Business Owners. See what our satisfied
          customers have to say about CASA.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between ${plan.bgColor}`}
          >
            {/* Card Header */}
            <div className="flex flex-col gap-4">
              <h3 className={`text-lg sm:text-xl font-semibold ${plan.textColor}`}>
                {plan.name}
              </h3>
              <p className={`text-3xl sm:text-4xl font-bold ${plan.textColor}`}>
                {plan.rate}
              </p>
              <p className={`text-sm sm:text-base ${plan.textColor}`}>
                {plan.rateLabel}
              </p>
              <button
                className={`w-full rounded-full py-2 sm:py-3 mt-2 font-medium ${plan.buttonStyle}`}
              >
                Get Started
              </button>
              {plan.description && (
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                  {plan.description}
                </p>
              )}
            </div>

            {/* Features Section */}
            <ul className="mt-6 space-y-3 bg-white rounded-lg p-4 sm:p-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      plan.bgColor.includes("green")
                        ? "bg-[#F1F68E] text-green-900"
                        : "bg-[#F1F68E] text-green-600"
                    }`}
                  >
                    <FaCheck size={12} />
                  </span>
                  <span
                    className={
                      plan.name === "Enterprise Plan"
                        ? "text-gray-900"
                        : plan.textColor
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
