import React, { useState } from "react";
import { Eye, Edit, Phone, Mail, Plus, Download, Menu, X } from "lucide-react";

const RfidCardManagement = () => {
  const [requests] = useState([
    {
      id: "RFID-001",
      customer: "Juan Dela Cruz",
      email: "juan@email.com",
      phone: "+63 912 345 6789",
      vehicle: "ABC-123",
      requestDate: "2024-01-15",
      time: "10:30 AM",
      cardType: "Standard",
      status: "Pending",
      rfidNumber: null,
    },
    {
      id: "RFID-002",
      customer: "Maria Santos",
      email: "maria@email.com",
      phone: "+63 917 654 3210",
      vehicle: "XYZ-456",
      requestDate: "2024-01-14",
      time: "2:15 PM",
      cardType: "Premium",
      status: "Processing",
      rfidNumber: "RF001234567",
    },
    {
      id: "RFID-003",
      customer: "Carlos Rodriguez",
      email: "carlos@email.com",
      phone: "+63 920 987 6543",
      vehicle: "DEF-789",
      requestDate: "2024-01-13",
      time: "9:45 AM",
      cardType: "Standard",
      status: "Ready for Pickup",
      rfidNumber: "RF007654321",
    },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-800";
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Ready for Pickup":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-gray-600 text-white";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCardTypeColor = (type) => {
    return type === "Premium"
      ? "bg-purple-600 text-white"
      : "bg-gray-600 text-white";
  };

  const stats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === "Pending").length,
    processing: requests.filter((r) => r.status === "Processing").length,
    ready: requests.filter((r) => r.status === "Ready for Pickup").length,
    completed: requests.filter((r) => r.status === "Completed").length,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-4"> 
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              RFID Card Requests
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <span className="text-sm text-gray-600 whitespace-nowrap">
              {stats.pending} pending requests
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {stats.total}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Total</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <div className="text-lg sm:text-2xl font-bold text-orange-600">
              {stats.pending}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <div className="text-lg sm:text-2xl font-bold text-blue-600">
              {stats.processing}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Processing</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <div className="text-lg sm:text-2xl font-bold text-green-600">
              {stats.ready}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Ready</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow col-span-2 sm:col-span-1">
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {stats.completed}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Completed</div>
          </div>
        </div>

        {/* Request List - Mobile Cards View */}
        <div className="lg:hidden space-y-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">RFID Card Requests</h2>
          </div>
          {requests.map((req) => (
            <div key={req.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-semibold text-gray-900">{req.id}</div>
                  <div className="text-sm text-gray-600">{req.requestDate}</div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(
                    req.status
                  )}`}
                >
                  {req.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Customer:</span>
                  <span className="text-sm font-medium">{req.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Vehicle:</span>
                  <span className="text-sm">{req.vehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Card Type:</span>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded ${getCardTypeColor(
                      req.cardType
                    )}`}
                  >
                    {req.cardType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">RFID Number:</span>
                  <span className="text-sm">{req.rfidNumber || "-"}</span>
                </div>
                <div className="text-xs text-gray-500">
                  <div>{req.email}</div>
                  <div>{req.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-end gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Eye size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Phone size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Request List - Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">RFID Card Request List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Request ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Vehicle
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Card Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    RFID Number
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.map((req) => (
                  <tr key={req.id}>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">
                      {req.id}
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm font-medium">{req.customer}</div>
                      <div className="text-sm text-gray-500">{req.email}</div>
                      <div className="text-sm text-gray-500">{req.phone}</div>
                    </td>
                    <td className="px-4 py-4 text-sm">{req.vehicle}</td>
                    <td className="px-4 py-4 text-sm">{req.requestDate}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${getCardTypeColor(
                          req.cardType
                        )}`}
                      >
                        {req.cardType}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(
                          req.status
                        )}`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      {req.rfidNumber || "-"}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Phone size={16} />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Mail size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Quick Actions */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <p className="text-sm text-gray-600 mb-4">
              Common RFID management tasks
            </p>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <Plus size={16} className="text-red-500 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Manual RFID Request</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg flex-shrink-0">📋</span>
                <span className="font-medium text-sm sm:text-base">Bulk Card Assignment</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg flex-shrink-0">📥</span>
                <span className="font-medium text-sm sm:text-base">Export Card Database</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg flex-shrink-0">⚙️</span>
                <span className="font-medium text-sm sm:text-base">RFID Settings</span>
              </button>
            </div>
          </div>

          {/* Card Inventory */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Card Inventory</h3>
            <p className="text-sm text-gray-600 mb-4">Available RFID cards</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Standard Cards</span>
                <span className="font-semibold">247</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Premium Cards</span>
                <span className="font-semibold">89</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Corporate Cards</span>
                <span className="font-semibold">32</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-gray-200 mt-4">
                <span className="font-medium">Total Cards</span>
                <span className="text-lg font-bold">368</span>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm">
                <span>➕</span>
                <span>Order More Cards</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <p className="text-sm text-gray-600 mb-4">
              Latest RFID assignments
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">Carlos Rodriguez</div>
                  <div className="text-xs text-gray-600">RFID assigned</div>
                </div>
                <div className="text-xs text-gray-500 ml-2 flex-shrink-0">2h ago</div>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">Ana Garcia</div>
                  <div className="text-xs text-gray-600">Card picked up</div>
                </div>
                <div className="text-xs text-gray-500 ml-2 flex-shrink-0">4h ago</div>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">Maria Santos</div>
                  <div className="text-xs text-gray-600">Email sent</div>
                </div>
                <div className="text-xs text-gray-500 ml-2 flex-shrink-0">6h ago</div>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center justify-center gap-2 text-sm">
                <Eye size={16} />
                <span>View All Activity</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RfidCardManagement;