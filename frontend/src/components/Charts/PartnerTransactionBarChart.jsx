import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {

    const revenueData = [
  { month: "Aug", commission: 22000, gross: 187000, net: 165000 },
  { month: "Sep", commission: 25000, gross: 210000, net: 185000 },
  { month: "Oct", commission: 28050, gross: 187000, net: 158950 },
  { month: "Nov", commission: 23000, gross: 220000, net: 197000 },
  { month: "Dec", commission: 26000, gross: 260000, net: 234000 },
  { month: "Jan", commission: 20000, gross: 190000, net: 170000 },
];



  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={revenueData} barGap={6}>
        <XAxis dataKey="month" />
        <YAxis />
       <Tooltip
            formatter={(value, name) => {
                  const peso = new Intl.NumberFormat("en-PH", {
                    style: "currency",
                    currency: "PHP",
                    minimumFractionDigits: 0,
                  }).format(value);

                  if (name === "commission") return [peso, "Commission"];
                  if (name === "gross") return [peso, "Gross Revenue"];
                  if (name === "net") return [peso, "Net Earnings"];
                  return [peso, name];
                }}
            />

        <Bar dataKey="commission" fill="#FF7F0E" />
        <Bar dataKey="gross" fill="#7B6DFF" />
        <Bar dataKey="net" fill="#3FBF77" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
