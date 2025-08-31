import React, { useState } from 'react';
import {PhilippinePeso} from 'lucide-react';
import RevenueChart from "../../components/Charts/PartnerTransactionBarChart";

const Transactions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  return (
    <div className="p-6 space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transactions / Earnings</h1>
          <div className="flex items-center gap-4">
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
            <button className="px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800">
              <PhilippinePeso size={16} />
              Request Payout
            </button>
          </div>
        </div>
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-4 bg-white rounded-2xl shadow">
          <h3 className="text-sm font-semibold">Gross Revenue</h3>
          <p className="text-2xl font-bold text-black">₱234,680</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow">
          <h3 className="text-sm font-semibold">Commission Deducted</h3>
          <p className="text-2xl font-bold text-red-600">₱35,202</p>
          <p className="text-xs text-gray-500">15% platform fee</p>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow">
          <h3 className="text-sm font-semibold">Net Earnings</h3>
          <p className="text-2xl font-bold text-green-600">₱199,478</p>
          <p className="text-xs text-gray-500">After commission</p>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow">
          <h3 className="text-sm font-semibold">Pending Payout</h3>
          <p className="text-2xl font-bold text-blue-600">₱8,450</p>
          <p className="text-xs text-gray-500">Available for withdrawal</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
        <RevenueChart />
      </div>

      {/* Transactions & Payout History */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Juan Dela Cruz</p>
                <p className="text-xs text-gray-500">2024-01-15 14:30 • SM Main</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₱200</p>
                <p className="text-xs text-gray-500">Net: ₱170</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium">Maria Santos</p>
                <p className="text-xs text-gray-500">2024-01-15 13:45 • SM Level 2</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₱180</p>
                <p className="text-xs text-gray-500">Net: ₱153</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium">Carlos Rodriguez</p>
                <p className="text-xs text-gray-500">2024-01-15 12:20 • SM VIP</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₱400</p>
                <p className="text-xs text-gray-500">Net: ₱340</p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full py-2 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-100">
            View All Transactions
          </button>
        </div>

        {/* Payout History */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Payout History</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">₱45,230</p>
                <p className="text-xs text-gray-500">2024-01-10 • Bank Transfer</p>
              </div>
              <span className="text-green-600 text-sm font-medium">Completed</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">₱38,650</p>
                <p className="text-xs text-gray-500">2024-01-03 • GCash</p>
              </div>
              <span className="text-green-600 text-sm font-medium">Completed</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Request New Payout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
