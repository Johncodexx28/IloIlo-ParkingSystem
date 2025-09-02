import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import {
  Calendar,
  DollarSign,
  Heart,
  TrendingUp,
  MapPin,
  Clock,
  Phone,
  Navigation,
  Search,
  Bookmark,
  CreditCard,
  QrCode,
  Bell,
  Eye,
  ChevronRight,
} from "lucide-react";

const UserDashboard = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "Parking reminder: Your slot expires in 30 minutes",
      time: "5 min ago",
      type: "warning",
    },
    {
      id: 2,
      title: "Payment successful for ₱150 - SM City Iloilo",
      time: "2 hours ago",
      type: "success",
    },
    {
      id: 3,
      title: "Your RFID card is ready for pickup",
      time: "1 day ago",
      type: "info",
    },
  ]);

  const [recentBookings] = useState([
    {
      id: 1,
      location: "SM City Iloilo - Main",
      spot: "A-025",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      amount: "₱200",
      status: "active",
    },
    {
      id: 2,
      location: "Robinsons Place Iloilo",
      spot: "B-012",
      date: "2024-01-14",
      time: "2:00 PM - 4:00 PM",
      amount: "₱120",
      status: "completed",
    },
  ]);

  const { account } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Welcome back, {account?.fullname || User}
            <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening with your parking today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
          <span className="text-sm text-gray-600">2 new</span>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <Search className="w-4 h-4" />
            Find Parking
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Bookings */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-sm font-medium">
              Total Bookings
            </h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">1</p>
            <p className="text-sm text-green-600">+3 this month</p>
          </div>
        </div>

        {/* Total Spent */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-sm font-medium">Total Spent</h3>
            <DollarSign className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">₱4,800</p>
            <p className="text-sm text-gray-500">Average ₱200 per booking</p>
          </div>
        </div>

        {/* Favorite Spots */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-sm font-medium">
              Favorite Spots
            </h3>
            <Heart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-500">Saved for quick booking</p>
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-sm font-medium">
              Current Streak
            </h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">7 days</p>
            <p className="text-sm text-gray-500">Consecutive bookings</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Parking & Recent Bookings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Current Parking */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">
                Current Parking
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Your active parking sessions
              </p>
            </div>

            <div className="p-6">
              {/* Active Parking Session */}
              <div className="border border-green-200 rounded-lg p-4 bg-green-50 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      SM City Iloilo - Main Parking
                    </h3>

                    <div className="grid grid-cols-2 gap-8 mt-4">
                      <div>
                        <p className="text-sm text-gray-600">Spot:</p>
                        <p className="font-semibold text-gray-900">A-025</p>
                        <p className="text-sm text-gray-600 mt-3">Started:</p>
                        <p className="font-semibold text-gray-900">10:15 AM</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Time Remaining:</p>
                        <p className="font-semibold text-orange-600">1h 32m</p>
                        <p className="text-sm text-gray-600 mt-3">Amount:</p>
                        <p className="font-semibold text-gray-900">₱200</p>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <Clock className="w-4 h-4" />
                        Extend Time
                      </button>
                      <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <Navigation className="w-4 h-4" />
                        Navigate
                      </button>
                      <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <Phone className="w-4 h-4" />
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* No Other Sessions */}
              <div className="text-center py-8 text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-600 mb-4">
                  No other active parking sessions
                </p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Find Parking
                </button>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Bookings
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Your latest parking history
                </p>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Eye className="w-4 h-4" />
                View All
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        booking.status === "active"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {booking.location}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Spot {booking.spot} • {booking.date} • {booking.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {booking.amount}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          booking.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Frequently used features
              </p>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full bg-gray-900 text-white p-4 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
                Find Parking Now
              </button>
              <button className="w-full border border-gray-200 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <Bookmark className="w-5 h-5 text-gray-600" />
                Quick Book Favorite
              </button>
              <button className="w-full border border-gray-200 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <CreditCard className="w-5 h-5 text-gray-600" />
                Top Up Wallet
              </button>
              <button className="w-full border border-gray-200 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <QrCode className="w-5 h-5 text-gray-600" />
                Show QR Code
              </button>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Notifications
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All Messages
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`flex items-start gap-3 ${
                      notification.type === "warning"
                        ? "text-orange-600"
                        : notification.type === "success"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === "warning"
                          ? "bg-orange-500"
                          : notification.type === "success"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
