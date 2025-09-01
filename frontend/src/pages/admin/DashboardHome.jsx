import React from "react";
import { TriangleAlert, Eye, ShieldCheck } from "lucide-react";
import IncomeChart from "../../components/Charts/AdminIncomeCharts";
import OccupancyChart from "../../components/Charts/AdminOccupancyChart";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 p-6">Dashboard Overview</h1>

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

      {/* Income + Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold mb-1">Income Overview</h2>
          <p className="text-sm text-gray-500 mb-3">Revenue trends over the past 30 days</p>
          <div className="h-48">
            <IncomeChart />
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

      {/* Occupancy + Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-1">Hourly Occupancy Pattern</h2>
          <p className="text-sm text-gray-500 mb-3">Average occupancy throughout the day</p>
          <div className="h-48">
            <OccupancyChart />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-1">System Alerts</h2>
          <p className="text-sm text-gray-500 mb-3">Important notifications requiring attention</p>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-red-100 text-red-700 flex items-center gap-2">
              <TriangleAlert className="text-red-600" size={18} />
              Lot B sensor malfunction - 3 spots affected
            </div>
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-700 flex items-center gap-2">
              <Eye className="text-yellow-600" size={18} />
              Lot C approaching full capacity (95%)
            </div>
            <div className="p-3 rounded-lg bg-green-100 text-green-700 flex items-center gap-2">
              <ShieldCheck className="text-green-600" size={18} />
              All payment systems operational
            </div>
          </div>
        </div>
      </div>


      {/* Realtime Parking Status */}
      {/* keep same realtime cards from your code */}
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
