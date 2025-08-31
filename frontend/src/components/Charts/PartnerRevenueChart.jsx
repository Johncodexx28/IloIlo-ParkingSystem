import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

const revenueData = [
  { date: 'Jan 1', revenue: 7500 },
  { date: 'Jan 5', revenue: 8200 },
  { date: 'Jan 10', revenue: 7800 },
  { date: 'Jan 15', revenue: 9100 },
  { date: 'Jan 20', revenue: 8900 },
  { date: 'Jan 25', revenue: 9800 },
  { date: 'Jan 30', revenue: 8450 }
];

const RevenueChart = () => (
  <div style={{ width: "100%", height: 250 }}> {/* controls height */}
    <ResponsiveContainer>
      <AreaChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis
          tickFormatter={(value) => `₱${value.toLocaleString()}`}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
            formatter={(value) =>[ value.toLocaleString("en-PH", {style: "currency",currency: "PHP",}),"Revenue",
            ]
          }         
          labelFormatter={(label) => `Date: ${label}`}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#86efac" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
