import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { day: "Sun", value: 40 },
  { day: "Mon", value: 25 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 100 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 60 },
];

const Chart = () => {
  // find the highest sale value
  const maxValue = Math.max(...data.map((d) => d.value));

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

      {/* Recharts BarChart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#4B5563", fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FDE68A",
              borderRadius: "8px",
              border: "none",
              padding: "8px",
            }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [`$${value * 24.5}`, "Highest Sale"]}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value === maxValue ? "#166534" : "#BBF7D0"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
