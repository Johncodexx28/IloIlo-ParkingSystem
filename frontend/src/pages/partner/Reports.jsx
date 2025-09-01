import React, { useState } from 'react';
import { Download } from 'lucide-react';
import RevenueChart from '../../components/Charts/ReportsRevenueChart';
import OccupancyChart from '../../components/Charts/ReportOccupancyChart';

const ReportsAnalytics = () => {
  const [selectedReport, setSelectedReport] = useState('Revenue Report');

  const reportTypes = [
    'Revenue Report',
    'Occupancy Report',
    'Customer Report',
    'Performance Report'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reports / Analytics</h1>
          <div className="flex items-center gap-4">
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
            >
              {reportTypes.map((report) => (
                <option key={report} value={report}>{report}</option>
              ))}
            </select>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Download size={16} />
              Export Report
            </button>
          </div>
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Revenue Trend */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Revenue Trend</h2>
              <p className="text-sm text-gray-500">Revenue performance over the last 12 months</p>
            </div>
            <div className="h-80">
              <RevenueChart />
            </div>
          </div>

          {/* Occupancy Rates by Hour */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Occupancy Rates by Hour</h2>
              <p className="text-sm text-gray-500">Peak hours analysis</p>
            </div>
            <div className="h-80">
              <OccupancyChart />
            </div>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Peak Performance */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Peak Performance</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Best Revenue Day</div>
                  <div className="text-lg font-semibold text-gray-900">₱12,450 (Dec 24)</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Highest Occupancy</div>
                  <div className="text-lg font-semibold text-gray-900">98% (Dec 23)</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Most Bookings</div>
                  <div className="text-lg font-semibold text-gray-900">234 (Dec 22)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Insights */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Insights</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Avg Visit Duration</div>
                  <div className="text-lg font-semibold text-gray-900">2.4 hours</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Repeat Customers</div>
                  <div className="text-lg font-semibold text-gray-900">68%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Customer Retention</div>
                  <div className="text-lg font-semibold text-gray-900">74%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Efficiency */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Operational Efficiency</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Spot Utilization</div>
                  <div className="text-lg font-semibold text-gray-900">87%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Revenue Per Spot</div>
                  <div className="text-lg font-semibold text-gray-900">₱156/day</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">System Uptime</div>
                  <div className="text-lg font-semibold text-gray-900">99.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;