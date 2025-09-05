import React from "react";
import { TrendingUp } from "lucide-react";

const Chart = () => {
  return (
    <div className="bg-white rounded-lg p-6 pt-12 w-[90%] shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
      <div className="mb-6 flex flex-row">
        <div className="bg-green-800 text-white p-1 rounded-full">
          <TrendingUp size={16} />
        </div>
      
       <p className="text-[#686868] font-medium">Total sales :</p>
        <p className="text-[#686868] font-semibold">$12,500</p>
       </div>
      </div>

      {/* Bars */}
      <div className="flex items-end justify-between h-40 gap-2 relative p-6">
        <div className="w-8 bg-green-200 rounded-t" style={{ height: "40%" }}></div>
        <div className="w-8 bg-green-200 rounded-t" style={{ height: "25%" }}></div>
        <div className="w-8 bg-green-200 rounded-t" style={{ height: "45%" }}></div>
        <div className="w-8 bg-green-200 rounded-t" style={{ height: "40%" }}></div>
        <div className="relative w-8 bg-green-900 rounded-t" style={{ height: "100%" }}>
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-200 px-2 py-1 rounded-lg shadow text-center">
            <p className="text-xs text-gray-700">Highest sale</p>
            <p className="font-bold text-gray-900">$2,450</p>
          </div>
        </div>
        <div className="w-8 bg-green-200 rounded-t" style={{ height: "30%" }}></div>
        <div className="w-8 bg-green-200 rounded-t" style={{ height: "60%" }}></div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  );
};

export default Chart;
