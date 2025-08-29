import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity, CreditCard, BarChart3, Download, ChevronDown } from 'lucide-react';

const RevenueAnalytics = () => {
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');
  const [lotFilter, setLotFilter] = useState('All Lots');
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isLotDropdownOpen, setIsLotDropdownOpen] = useState(false);

  const timeOptions = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last Year'];
  const lotOptions = ['All Lots', 'Active Lots', 'Premium Lots', 'Standard Lots'];

  const partners = [
    {
      name: 'SM City Iloilo',
      monthlyRevenue: 385000,
      occupancy: 92,
      growthRate: 15.2,
      isPositive: true
    },
    {
      name: 'Robinsons Place',
      monthlyRevenue: 312000,
      occupancy: 87,
      growthRate: 8.7,
      isPositive: true
    },
    {
      name: 'Megaworld Center',
      monthlyRevenue: 287000,
      occupancy: 78,
      growthRate: 12.3,
      isPositive: true
    },
    {
      name: 'Ayala Malls',
      monthlyRevenue: 245000,
      occupancy: 85,
      growthRate: -2.1,
      isPositive: false
    },
    {
      name: 'Gaisano Capital',
      monthlyRevenue: 198000,
      occupancy: 73,
      growthRate: 6.8,
      isPositive: true
    }
  ];

  const Currency = (amount) => {
    return `₱${amount.toLocaleString()}`;
  };

  const MetricCard = ({ title, value, change, changeText, icon: Icon, isPositive }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <Icon size={16} />
            <span>{title}</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
          <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{change} {changeText}
          </div>
        </div>
      </div>
    </div>
  );

  const Dropdown = ({ value, options, isOpen, setIsOpen, onChange }) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
      >
        {value}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold ">Revenue & Analytics</h1>
        <div className="flex items-center gap-4">
          <Dropdown
            value={timeFilter}
            options={timeOptions}
            isOpen={isTimeDropdownOpen}
            setIsOpen={setIsTimeDropdownOpen}
            onChange={setTimeFilter}
          />
          <Dropdown
            value={lotFilter}
            options={lotOptions}
            isOpen={isLotDropdownOpen}
            setIsOpen={setIsLotDropdownOpen}
            onChange={setLotFilter}
          />
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Revenue"
          value="₱2,847,320"
          change="12.5%"
          changeText="from last month"
          icon={DollarSign}
          isPositive={true}
        />
        <MetricCard
          title="Avg Revenue/Day"
          value="₱15,680"
          change="8.2%"
          changeText="from last month"
          icon={TrendingUp}
          isPositive={true}
        />
        <MetricCard
          title="Total Transactions"
          value="18,734"
          change="15.3%"
          changeText="from last month"
          icon={Activity}
          isPositive={true}
        />
        <MetricCard
          title="Avg Transaction"
          value="₱152"
          change="-2.1%"
          changeText="from last month"
          icon={CreditCard}
          isPositive={false}
        />
      </div>

      {/* Partners Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Top Partners by Revenue
          </h2>
          <p className="text-gray-600 text-sm">Partner performance ranking</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                  Partner Name
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                  Monthly Revenue
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                  Avg Occupancy
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                  Growth Rate
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-25 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">
                      {partner.name}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">
                      {Currency(partner.monthlyRevenue)}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-24">
                        <div
                          className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${partner.occupancy}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 min-w-8">
                        {partner.occupancy}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        partner.isPositive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {partner.isPositive ? (
                        <TrendingUp size={12} />
                      ) : (
                        <TrendingDown size={12} />
                      )}
                      {partner.isPositive ? "+" : ""}
                      {partner.growthRate}%
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;