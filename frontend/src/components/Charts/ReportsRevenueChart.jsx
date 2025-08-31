import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const RevenueChart = () => {
  const revenueData = [
    { month: 'Feb', revenue: 140000 },
    { month: 'Mar', revenue: 165000 },
    { month: 'Apr', revenue: 180000 },
    { month: 'May', revenue: 155000 },
    { month: 'Jun', revenue: 195000 },
    { month: 'Jul', revenue: 235000 },
    { month: 'Aug', revenue: 205000 },
    { month: 'Sep', revenue: 210000 },
    { month: 'Oct', revenue: 185000 },
    { month: 'Nov', revenue: 250000 },
    { month: 'Dec', revenue: 280000 },
    { month: 'Jan', revenue: 230000 }
  ];



  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={revenueData}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis 
          tickFormatter={(value) => `₱${(value / 1000).toFixed(0)}k`}
          axisLine={false} 
          tickLine={false} 
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#8b5cf6" 
          strokeWidth={3}
          dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;