import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

const occupancyData = [
  { hour: "7AM", occupancy: 15 },
  { hour: "8AM", occupancy: 35 },
  { hour: "9AM", occupancy: 55 },
  { hour: "10AM", occupancy: 70 },
  { hour: "11AM", occupancy: 85 },
  { hour: "12PM", occupancy: 95 },
  { hour: "1PM", occupancy: 98 },
  { hour: "2PM", occupancy: 92 },
  { hour: "3PM", occupancy: 88 },
  { hour: "4PM", occupancy: 85 },
  { hour: "5PM", occupancy: 90 },
  { hour: "6PM", occupancy: 82 },
  { hour: "7PM", occupancy: 65 },
  { hour: "8PM", occupancy: 45 },
  { hour: "9PM", occupancy: 25 },
  { hour: "10PM", occupancy: 12 },
];

const OccupancyChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={occupancyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis dataKey="hour" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
      <YAxis
        tickFormatter={(value) => `${value}%`}
        tick={{ fontSize: 12 }}
        axisLine={false}
        tickLine={false}
        domain={[0, 100]}
      />
      <Tooltip
        formatter={(value) => [`${value}%`, "Occupancy"]}
        labelFormatter={(label) => `Time: ${label}`}
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
      <Area type="monotone" dataKey="occupancy" stroke="#10b981" fill="#86efac" strokeWidth={2} />
    </AreaChart>
  </ResponsiveContainer>
);

export default OccupancyChart;
