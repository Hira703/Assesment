import React from "react";
import { TrendingUp } from "lucide-react";

const Chart = () => {
  // heights in percentage (simulate dynamic data)
  const data = [40, 25, 45, 40, 100, 30, 60]; 

  return (
    <div className="bg-white rounded-lg p-6 pt-12 w-full max-w-[700px] shadow-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2">
          <div className="bg-green-800 text-white p-1 rounded-full">
            <TrendingUp size={16} />
          </div>
          <p className="text-[#686868] font-medium">Total sales :</p>
          <p className="text-[#686868] font-semibold">$12,500</p>
        </div>
      </div>

      {/* Bars */}
      <div className="relative flex items-end justify-between gap-2 h-[40vh] min-h-[200px] overflow-visible">
        {data.map((value, idx) => (
          <div
            key={idx}
            className={`flex-1 max-w-[40px] rounded-t ${
              value === 100 ? "bg-green-900 relative" : "bg-green-200"
            }`}
            style={{ height: `${value}%` }}
          >
            {/* Tooltip for max bar */}
            {value === 100 && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-200 px-2 py-1 rounded-lg shadow text-center whitespace-nowrap">
                <p className="text-xs text-gray-700">Highest sale</p>
                <p className="font-bold text-gray-900">$2,450</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-sm text-gray-600">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
};

export default Chart;
