import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  ChevronDown,
  Car,
  CreditCard,
  LogOut,
  Calendar,
  AlertCircle,
  CheckCircle,
  XCircle,
  Menu,
  X,
  Clock,
  User,
  MapPin,
  DollarSign,
} from "lucide-react";

const ActivityLogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Activities");
  const [timeFilter, setTimeFilter] = useState("Today");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sample activity data
  const activities = [
    {
      id: 1,
      timestamp: "1/15/2024, 3:30:45 PM",
      type: "Entry",
      vehicleId: "ABC-123",
      user: "Juan Dela Cruz",
      location: "SM City Iloilo - Gate A",
      spot: "Spot: A-025",
      amount: null,
      status: "Success",
      details: "Vehicle entered parking lot",
      icon: Car,
      iconColor: "text-green-600",
    },
    {
      id: 2,
      timestamp: "1/15/2024, 3:30:45 PM",
      type: "Exit",
      vehicleId: "ABC-123",
      user: "Juan Dela Cruz",
      location: "SM City Iloilo - Gate A",
      spot: "Spot: A-025",
      amount: "₱50.00",
      status: "Failed",
      details: "Payment failed - insufficient funds",
      icon: Car,
      iconColor: "text-red-600",
    },
    {
      id: 3,
      timestamp: "1/15/2024, 2:15:22 PM",
      type: "Payment",
      vehicleId: "XYZ-789",
      user: "Maria Santos",
      location: "Ayala Center Cebu - B2",
      spot: "Spot: B-142",
      amount: "₱75.00",
      status: "Success",
      details: "Payment processed successfully",
      icon: CreditCard,
      iconColor: "text-green-600",
    },
    {
      id: 4,
      timestamp: "1/15/2024, 1:45:10 PM",
      type: "Reservation",
      vehicleId: "DEF-456",
      user: "Carlos Rodriguez",
      location: "Robinson's Mall - Level 3",
      spot: "Spot: C-089",
      amount: "₱25.00",
      status: "Success",
      details: "Reservation confirmed for 2 hours",
      icon: Calendar,
      iconColor: "text-green-600",
    },
  ];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    if (status === "Success") {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else if (status === "Failed") {
      return `${baseClasses} bg-red-100 text-red-800`;
    }
    return `${baseClasses} bg-gray-100 text-gray-800`;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Entry":
        return <Car className="w-4 h-4" />;
      case "Exit":
        return <LogOut className="w-4 h-4" />;
      case "Payment":
        return <CreditCard className="w-4 h-4" />;
      case "Reservation":
        return <Calendar className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Entry":
        return "text-green-600 bg-green-50";
      case "Exit":
        return "text-blue-600 bg-blue-50";
      case "Payment":
        return "text-purple-600 bg-purple-50";
      case "Reservation":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const filteredActivities = activities.filter(
    (activity) =>
      activity.vehicleId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold">Activity Logs</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="w-full sm:w-auto appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
            <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2">
              Total Activities
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">8</p>
            <p className="text-xs text-gray-500 mt-1">Last 24 hours</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
            <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2">Entries</h3>
            <p className="text-2xl lg:text-3xl font-bold text-green-600">2</p>
            <p className="text-xs text-gray-500 mt-1">Vehicles entered</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
            <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2">Exits</h3>
            <p className="text-2xl lg:text-3xl font-bold text-blue-600">2</p>
            <p className="text-xs text-gray-500 mt-1">Vehicles exited</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
            <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2">Payments</h3>
            <p className="text-2xl lg:text-3xl font-bold text-purple-600">2</p>
            <p className="text-xs text-gray-500 mt-1">Payment attempts</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100 col-span-2 lg:col-span-1">
            <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2">Failed</h3>
            <p className="text-2xl lg:text-3xl font-bold text-red-600">2</p>
            <p className="text-xs text-gray-500 mt-1">Failed operations</p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-6 lg:mb-8 border border-gray-100">
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by vehicle ID, user, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Activities</option>
                  <option>Entries</option>
                  <option>Exits</option>
                  <option>Payments</option>
                  <option>Reservations</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <Filter className="w-4 h-4" />
                Advanced
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
            <p className="text-sm text-gray-500">
              Real-time log of all system activities
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredActivities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {activity.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                          activity.type
                        )}`}
                      >
                        {getTypeIcon(activity.type)}
                        {activity.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {activity.vehicleId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {activity.user}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div>
                        <div className="font-medium">{activity.location}</div>
                        <div className="text-gray-500 text-xs">
                          {activity.spot}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {activity.amount || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadge(activity.status)}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {activity.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
            <span className="text-sm text-gray-500">
              {filteredActivities.length} activities
            </span>
          </div>
          
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                    activity.type
                  )}`}
                >
                  {getTypeIcon(activity.type)}
                  {activity.type}
                </div>
                <span className={getStatusBadge(activity.status)}>
                  {activity.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Car className="w-4 h-4 text-gray-400" />
                  <span className="font-medium">{activity.vehicleId}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>{activity.user}</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{activity.location}</div>
                    <div className="text-xs text-gray-500">{activity.spot}</div>
                  </div>
                </div>
                
                {activity.amount && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">{activity.amount}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{activity.timestamp}</span>
                </div>
                
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 lg:px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Live Activity Feed
            </h2>
            <p className="text-sm text-gray-500">
              Real-time updates from all parking locations
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {activities.slice(0, 4).map((activity) => (
              <div
                key={activity.id}
                className="px-4 lg:px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-full flex-shrink-0 ${getTypeColor(
                      activity.type
                    )}`}
                  >
                    {getTypeIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      {activity.details}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-gray-500">
                      <span>{activity.user}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="truncate">{activity.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{activity.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={getStatusBadge(activity.status)}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;