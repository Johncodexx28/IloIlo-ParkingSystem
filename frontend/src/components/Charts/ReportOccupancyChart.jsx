import React from 'react';
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';


const OccupancyChart = () => {
    
  const occupancyData = [
    { hour: '8AM', rate: 45 },
    { hour: '10AM', rate: 72 },
    { hour: '12PM', rate: 98 },
    { hour: '2PM', rate: 90 },
    { hour: '4PM', rate: 95 },
    { hour: '6PM', rate: 78 },
    { hour: '8PM', rate: 65 }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={occupancyData}>
        <XAxis dataKey="hour" axisLine={false} tickLine={false} />
        <YAxis 
          tickFormatter={(value) => `${value}%`}
          axisLine={false} 
          tickLine={false}
          domain={[0, 100]}
        />
        <Bar dataKey="rate" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OccupancyChart;