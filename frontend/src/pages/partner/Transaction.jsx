import React, { useState } from 'react';
import { TrendingUp, TrendingDown,PhilippinePeso, Clock, Banknote } from 'lucide-react';
import TransactionBarChart from '../../components/Charts/PartnerTransactionBarChart';

const Transactions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  
  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Transactions / Earnings
        </h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <select 
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm sm:text-base order-2 sm:order-1"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors text-sm sm:text-base order-1 sm:order-2">
            <Banknote size={16} />
            <span className="hidden xs:inline">Request Payout</span>
            <span className="xs:hidden">Payout</span>
          </button>
        </div>
      </div>

      {/* Top Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Gross Revenue</h3>
            <PhilippinePeso  size={20} className="text-gray-400" />
          </div>
          <p className="text-xl sm:text-2xl font-bold text-black">₱234,680</p>
          <p className="text-xs text-gray-500 mt-1">This month</p>
        </div>

        <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Commission Deducted</h3>
            <TrendingDown size={20} className="text-red-500" />
          </div>
          <p className="text-xl sm:text-2xl font-bold text-red-600">₱35,202</p>
          <p className="text-xs text-gray-500 mt-1">15% platform fee</p>
        </div>

        <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Net Earnings</h3>
            <TrendingUp size={20} className="text-green-500" />
          </div>
          <p className="text-xl sm:text-2xl font-bold text-green-600">₱199,478</p>
          <p className="text-xs text-gray-500 mt-1">After commission</p>
        </div>

        <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Pending Payout</h3>
            <Clock size={20} className="text-blue-500" />
          </div>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">₱8,450</p>
          <p className="text-xs text-gray-500 mt-1">Available for withdrawal</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Revenue Breakdown</h3>
        <div className="w-full overflow-hidden">
          <TransactionBarChart />
        </div>
      </div>

      {/* Transactions & Payout History */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Transactions */}
        <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Transactions</h3>
          <div className="space-y-4">
            <div className="flex flex-col xs:flex-row xs:justify-between gap-2 xs:gap-0 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Juan Dela Cruz</p>
                <p className="text-xs text-gray-500 mt-1">2024-01-15 14:30 • SM Main</p>
              </div>
              <div className="text-left xs:text-right">
                <p className="font-bold text-gray-900">₱200</p>
                <p className="text-xs text-gray-500">Net: ₱170</p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between gap-2 xs:gap-0 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Maria Santos</p>
                <p className="text-xs text-gray-500 mt-1">2024-01-15 13:45 • SM Level 2</p>
              </div>
              <div className="text-left xs:text-right">
                <p className="font-bold text-gray-900">₱180</p>
                <p className="text-xs text-gray-500">Net: ₱153</p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between gap-2 xs:gap-0 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Carlos Rodriguez</p>
                <p className="text-xs text-gray-500 mt-1">2024-01-15 12:20 • SM VIP</p>
              </div>
              <div className="text-left xs:text-right">
                <p className="font-bold text-gray-900">₱400</p>
                <p className="text-xs text-gray-500">Net: ₱340</p>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full py-2.5 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            View All Transactions
          </button>
        </div>

        {/* Payout History */}
        <div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Payout History</h3>
          <div className="space-y-4">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 xs:gap-0 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="font-bold text-gray-900">₱45,230</p>
                <p className="text-xs text-gray-500 mt-1">2024-01-10 • Bank Transfer</p>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full w-fit">
                Completed
              </span>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 xs:gap-0 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="font-bold text-gray-900">₱38,650</p>
                <p className="text-xs text-gray-500 mt-1">2024-01-03 • GCash</p>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full w-fit">
                Completed
              </span>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 xs:gap-0 py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="font-bold text-gray-900">₱28,450</p>
                <p className="text-xs text-gray-500 mt-1">2023-12-28 • Maya</p>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full w-fit">
                Completed
              </span>
            </div>
          </div>
          <button className="mt-6 w-full py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Request New Payout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;