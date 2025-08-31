import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

const incomeData = [
  { date: "Jan 1", income: 9000, day: 1 },
  { date: "Jan 2", income: 13000, day: 2 },
  { date: "Jan 3", income: 10500, day: 3 },
  { date: "Jan 4", income: 17000, day: 4 },
  { date: "Jan 5", income: 12000, day: 5 },
  { date: "Jan 6", income: 15000, day: 6 },
  { date: "Jan 7", income: 18000, day: 7 },
];

const formatCurrency = (value) => `₱${(value / 1000).toFixed(0)}k`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-green-600">
          Income: <span className="font-bold">₱{payload[0].value.toLocaleString("en-PH", { style: "currency", currency: "PHP" })}</span>
        </p>
      </div>
    );
  }
  return null;
};

const IncomeChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis dataKey="date" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
      <YAxis
        tickFormatter={formatCurrency}
        tick={{ fontSize: 12 }}
        axisLine={false}
        tickLine={false}
        domain={["dataMin - 1000", "dataMax + 1000"]}
      />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="income"
        stroke="#10b981"
        strokeWidth={3}
        dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
        activeDot={{ r: 6, fill: "#10b981" }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default IncomeChart;
