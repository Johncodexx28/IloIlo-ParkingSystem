import Revenuechart from "../../components/charts/PartnerRevenueChart";
import {
  Bell,
  RefreshCw,
  DollarSign,
  TrendingUp,
  MapPin,
  Calendar,
  Star,
  CreditCard,
  QrCode,
  Plus,
  FileDown,
  BarChart3,
  PhilippinePeso
} from "lucide-react";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Welcome back! Here's your parking business summary.
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
          <div className="flex items-center gap-2 text-gray-600">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm">3 notifications</span>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 sm:px-4 text-gray-600 hover:text-gray-900">
            <RefreshCw className="w-4 h-4" />
            <span className="text-xs sm:text-sm hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Earnings Today */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <PhilippinePeso className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">Earnings Today</span>
            </div>
            <PhilippinePeso className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              ₱8,450
            </div>
            <div className="text-xs sm:text-sm text-green-600">
              +12.5% from yesterday
            </div>
            <div className="text-xs text-gray-500">
              Commission: ₱1,268 (15%)
            </div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Monthly Revenue
              </span>
            </div>
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              ₱234,680
            </div>
            <div className="text-xs sm:text-sm text-green-600">
              +8.2% from last month
            </div>
            <div className="text-xs text-gray-500">
              Net: ₱199,478 (after commission)
            </div>
          </div>
        </div>

        {/* Active Parking Lots */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Active Parking Lots
              </span>
            </div>
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              3
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              1,250 total spots available
            </div>
            <div className="text-xs text-gray-500">87% average occupancy</div>
          </div>
        </div>

        {/* Bookings Today */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Bookings Today
              </span>
            </div>
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
              156
            </div>
            <div className="text-xs sm:text-sm text-green-600">
              +15.3% from yesterday
            </div>
            <div className="text-xs text-gray-500">12 pending confirmation</div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        {/* Commission Breakdown */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Commission Breakdown
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Transparent breakdown of system commission
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm sm:text-base text-gray-700">
                Gross Revenue (Today)
              </span>
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                ₱8,450
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <div className="text-sm sm:text-base text-gray-700">
                  System Commission (15%)
                </div>
                <div className="text-xs text-gray-500">
                  Platform fee + Payment processing
                </div>
              </div>
              <span className="font-semibold text-red-600 text-sm sm:text-base">
                -₱1,268
              </span>
            </div>

            <div className="flex justify-between items-center py-3 bg-green-50 px-3 rounded-lg">
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                Your Net Earnings
              </span>
              <span className="font-bold text-green-600 text-base sm:text-lg">
                ₱7,182
              </span>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Customer Satisfaction
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Feedback and ratings
          </p>

          <div className="text-center mb-4 sm:mb-6">
            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              4.8
            </div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Based on 342 reviews
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">
                Cleanliness
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-900">
                4.9
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">
                Accessibility
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-900">
                4.7
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Security</span>
              <span className="text-xs sm:text-sm font-medium text-gray-900">
                4.8
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Pricing</span>
              <span className="text-xs sm:text-sm font-medium text-gray-900">
                4.6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Revenue Trend Chart */}
        <div className="xl:col-span-2 bg-white rounded-lg p-4 sm:p-6 shadow-sm flex flex-col order-2 xl:order-1">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
              Revenue Trend (Last 30 Days)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Daily revenue and booking performance
            </p>
          </div>
          <div className="flex-1">
            <div className="h-64 sm:h-72">
              <Revenuechart />
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Notifications */}
        <div className="flex flex-col gap-4 sm:gap-6 order-1 xl:order-2">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm flex-1">
            <div className="mb-4 sm:mb-5">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                Quick Actions
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Manage your parking business
              </p>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-2">
              <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm xl:text-base">
                  Request Payout
                </span>
              </button>
              <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 text-xs sm:text-sm xl:text-base">
                  Generate QR
                </span>
              </button>
              <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 text-xs sm:text-sm xl:text-base">
                  Add New Lot
                </span>
              </button>
              <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 text-xs sm:text-sm xl:text-base">
                  Download Report
                </span>
              </button>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm flex-1">
            <div className="mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                Recent Notifications
              </h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 text-xs sm:text-sm">
                  New booking confirmed - Spot A-025
                </div>
                <div className="text-xs text-gray-500 mt-1">5 min ago</div>
              </div>
              <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 text-xs sm:text-sm">
                  Weekly payout of ₱45,230 processed
                </div>
                <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
              </div>
              <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 text-xs sm:text-sm">
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
