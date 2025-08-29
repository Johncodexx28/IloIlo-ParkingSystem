import { TriangleAlert, Eye, ShieldCheck } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const DashboardHome = () => {
  // Income data from your chart
  const incomeData = [
    { date: "Jan 1", income: 9000, day: 1 },
    { date: "Jan 2", income: 13000, day: 2 },
    { date: "Jan 3", income: 10500, day: 3 },
    { date: "Jan 4", income: 17000, day: 4 },
    { date: "Jan 5", income: 12000, day: 5 },
    { date: "Jan 6", income: 15000, day: 6 },
    { date: "Jan 7", income: 18000, day: 7 },
  ];

  // Hourly occupancy data from your chart
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

  const formatCurrency = (value) => {
    return `₱${(value / 1000).toFixed(0)}k`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-green-600">
            Income:{" "}
            <span className="font-bold">
              ₱{payload[0].value.toLocaleString()}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Total Income Today</p>
          <h2 className="text-2xl font-bold">₱12,350</h2>
          <p className="text-xs text-gray-400">+15% from yesterday</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Active Sessions</p>
          <h2 className="text-2xl font-bold">247</h2>
          <p className="text-xs text-gray-400">Currently parked</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Occupied Spots</p>
          <h2 className="text-2xl font-bold">1,247 / 1,500</h2>
          <p className="text-xs text-gray-400">83% occupancy rate</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Avg Dwell Time</p>
          <h2 className="text-2xl font-bold">2.4h</h2>
          <p className="text-xs text-gray-400">Average parking duration</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-2">
          <div className="mb-3">
            <h2 className="text-lg font-semibold">Income Overview</h2>
            <p className="text-sm text-gray-500">
              Revenue trends over the past 30 days
            </p>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={incomeData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
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
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Quick Stats</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">This Month:</span>
              <span className="font-bold">₱387,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Year to Date:</span>
              <span className="font-bold">₱2,847,320</span>
            </div>
            <div className="mt-4 pt-3 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Daily Average:</span>
                <span className="font-bold text-green-600">₱15,163</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-600">Peak Day:</span>
                <span className="font-bold text-blue-600">₱20,500</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap + System Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Hourly Occupancy Pattern */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-1">
            Hourly Occupancy Pattern
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            Average occupancy throughout the day
          </p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={occupancyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
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
                <Area
                  type="monotone"
                  dataKey="occupancy"
                  stroke="#10b981"
                  fill="#86efac"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-1">System Alerts</h2>
          <p className="text-sm text-gray-500 mb-3">
            Important notifications requiring attention
          </p>

          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-red-100 text-red-700 flex items-center gap-2">
              <TriangleAlert className="text-warning" />
              Lot B sensor malfunction - 3 spots affected
            </div>
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-700 flex items-center gap-2">
              <Eye className="text-black" />
              Lot C approaching full capacity (95%)
            </div>
            <div className="p-3 rounded-lg bg-green-100 text-green-700 flex items-center gap-2">
             <ShieldCheck className="text-green-600" />
              All payment systems operational
            </div>
          </div>
        </div>
      </div>

      {/* Realtime Parking Status Section */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-1">Realtime Parking Status</h2>
        <p className="text-sm text-gray-500 mb-6">
          Live view of all parking lots and current status
        </p>

        {/* Parking Lots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* SM City Iloilo */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="font-semibold">SM City Iloilo</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Available:</span>
                <span className="font-medium text-green-600">63</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Occupied:</span>
                <span className="font-medium text-red-600">387</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "86%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">86% occupied</p>
            </div>
          </div>

          {/* Robinsons Place */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <h3 className="font-semibold">Robinsons Place</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Available:</span>
                <span className="font-medium text-green-600">42</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Occupied:</span>
                <span className="font-medium text-red-600">278</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">87% occupied</p>
            </div>
          </div>

          {/* Megaworld Center */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <h3 className="font-semibold">Megaworld Center</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Available:</span>
                <span className="font-medium text-green-600">62</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Occupied:</span>
                <span className="font-medium text-red-600">218</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">78% occupied</p>
            </div>
          </div>

          {/* Ayala Malls */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="font-semibold">Ayala Malls</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Available:</span>
                <span className="font-medium text-green-600">57</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Occupied:</span>
                <span className="font-medium text-red-600">323</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">85% occupied</p>
            </div>
          </div>
        </div>

        {/* Status Legend */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Operational</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">High Occupancy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm">Maintenance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Offline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
