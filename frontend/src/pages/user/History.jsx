import React, { useState } from 'react';
import { Download, TicketCheck, Heart, ChevronDown } from 'lucide-react';

const ParkingHistory = () => {
  const [timeFilter, setTimeFilter] = useState('All Time');
  
  const stats = [
    {
      title: 'Total Sessions',
      value: '24',
      subtitle: 'All time'
    },
    {
      title: 'Total Time',
      value: '72h',
      subtitle: 'Parked time'
    },
    {
      title: 'Total Spent',
      value: '₱4,800',
      subtitle: 'All time'
    },
    {
      title: 'Avg Session',
      value: '3h',
      subtitle: 'Average duration'
    }
  ];

  const parkingSessions = [
    {
      location: 'SM City Iloilo - Main Parking',
      spot: 'A-025',
      date: '2024-01-15',
      time: '10:00 AM - 2:00 PM',
      duration: '4h 0m',
      amount: '₱200',
      payment: 'GCash'
    },
    {
      location: 'Robinsons Place Iloilo',
      spot: 'B-012',
      date: '2024-01-14',
      time: '2:00 PM - 4:00 PM',
      duration: '2h 0m',
      amount: '₱90',
      payment: 'Wallet'
    },
    {
      location: 'Megaworld Center',
      spot: 'C-008',
      date: '2024-01-13',
      time: '9:00 AM - 12:30 PM',
      duration: '3h 30m',
      amount: '₱192.5',
      payment: 'Credit Card'
    }
  ];

  const getPaymentBadgeColor = (payment) => {
    switch (payment) {
      case 'GCash':
        return 'bg-blue-100 text-blue-800';
      case 'Wallet':
        return 'bg-green-100 text-green-800';
      case 'Credit Card':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parking History</h1>
          <div className="flex items-center gap-3">
            {/* Time Filter Dropdown */}
            <div className="relative">
              <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="text-gray-700">{timeFilter}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>
            </div>
            
            {/* Export Button */}
            <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Download size={16} className="text-gray-600" />
              <span className="text-gray-700">Export</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Parking Sessions Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Parking Sessions</h2>
            <p className="text-gray-600 mt-1">Complete history of your parking activities</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Location</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Spot</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Time</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Duration</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Amount</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Payment</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {parkingSessions.map((session, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">{session.location}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{session.spot}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{session.date}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{session.time}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{session.duration}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900">{session.amount}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentBadgeColor(session.payment)}`}>
                        {session.payment}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View Receipt">
                          <TicketCheck size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add to Favorites">
                          <Heart size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingHistory;