import React from 'react';
import RevenueChart from '../../components/Charts/PartnerRevenueChart';
import { 
  Bell, RefreshCw, DollarSign, TrendingUp, MapPin, Calendar, Star, 
  CreditCard, QrCode, Plus, FileDown 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's your parking business summary.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="text-sm">3 notifications</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">Refresh</span>
          </button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Earnings Today */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-600">Earnings Today</span>
            </div>
            <DollarSign className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">₱8,450</div>
            <div className="text-sm text-green-600">+12.5% from yesterday</div>
            <div className="text-xs text-gray-500">Commission: ₱1,268 (15%)</div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">Monthly Revenue</span>
            </div>
            <TrendingUp className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">₱234,680</div>
            <div className="text-sm text-green-600">+8.2% from last month</div>
            <div className="text-xs text-gray-500">
              Net: ₱199,478 (after commission)
            </div>
          </div>
        </div>

        {/* Active Parking Lots */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">
                Active Parking Lots
              </span>
            </div>
            <MapPin className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">1,250 total spots available</div>
            <div className="text-xs text-gray-500">87% average occupancy</div>
          </div>
        </div>

        {/* Bookings Today */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-600">
                Bookings Today
              </span>
            </div>
            <Calendar className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">156</div>
            <div className="text-sm text-green-600">+15.3% from yesterday</div>
            <div className="text-xs text-gray-500">12 pending confirmation</div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Commission Breakdown */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900">
              Commission Breakdown
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Transparent breakdown of system commission
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Gross Revenue (Today)</span>
              <span className="font-semibold text-gray-900">₱8,450</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <div className="text-gray-700">System Commission (15%)</div>
                <div className="text-xs text-gray-500">
                  Platform fee + Payment processing
                </div>
              </div>
              <span className="font-semibold text-red-600">-₱1,268</span>
            </div>

            <div className="flex justify-between items-center py-3 bg-green-50 px-3 rounded-lg">
              <span className="font-medium text-gray-900">Your Net Earnings</span>
              <span className="font-bold text-green-600 text-lg">₱7,182</span>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-yellow-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Customer Satisfaction
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">Feedback and ratings</p>

          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">Based on 342 reviews</div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cleanliness</span>
              <span className="text-sm font-medium text-gray-900">4.9</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Accessibility</span>
              <span className="text-sm font-medium text-gray-900">4.7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Security</span>
              <span className="text-sm font-medium text-gray-900">4.8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Pricing</span>
              <span className="text-sm font-medium text-gray-900">4.6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 -mt-4">
        {/* Revenue Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm flex flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Revenue Trend (Last 30 Days)
            </h2>
            <p className="text-sm text-gray-600">
              Daily revenue and booking performance
            </p>
          </div>
          <div className="flex-1">
            <div className="h-72">
              <RevenueChart />
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Notifications */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-5 shadow-sm flex-1">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Quick Actions
              </h2>
              <p className="text-sm text-gray-600">Manage your parking business</p>
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">Request Payout</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <QrCode className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Generate QR Code</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Plus className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Add New Lot</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <FileDown className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Download Report</span>
              </button>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-lg p-3 shadow-sm flex-1">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Recent Notifications
              </h2>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 text-sm">
                  New booking confirmed - Spot A-025
                </div>
                <div className="text-xs text-gray-500 mt-1">5 min ago</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 text-sm">
                  Weekly payout of ₱45,230 processed
                </div>
                <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 text-sm">
                  Gate sensor maintenance completed
                </div>
                <div className="text-xs text-gray-500 mt-1">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
