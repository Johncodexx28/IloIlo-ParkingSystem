import React, { useState } from "react";
import { Eye, Edit, Phone, Mail, Plus ,Download } from "lucide-react";

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
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-gray-100 text-gray-800";
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
      ? "bg-black text-white"
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            RFID Card Requests
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {stats.pending} pending requests
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-gray-900">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600">Total Requests</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600">
              {stats.pending}
            </div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">
              {stats.processing}
            </div>
            <div className="text-sm text-gray-600">Processing</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {stats.ready}
            </div>
            <div className="text-sm text-gray-600">Ready</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-gray-900">
              {stats.completed}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>

        {/* Request List */}
        <div className="bg-white rounded-lg shadow">
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
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <p className="text-sm text-gray-600 mb-4">
              Common RFID management tasks
            </p>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <Plus size={16} className="text-red-500" />
                <span className="font-medium">Manual RFID Request</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg">📋</span>
                <span className="font-medium">Bulk Card Assignment</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg">📥</span>
                <span className="font-medium">Export Card Database</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg">⚙️</span>
                <span className="font-medium">RFID Settings</span>
              </button>
            </div>
          </div>

          {/* Card Inventory */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Card Inventory</h3>
            <p className="text-sm text-gray-600 mb-4">Available RFID cards</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Standard Cards</span>
                <span className="font-semibold">247 available</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Premium Cards</span>
                <span className="font-semibold">89 available</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Corporate Cards</span>
                <span className="font-semibold">32 available</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-gray-200 mt-4">
                <span className="font-medium">Total Cards</span>
                <span className="text-lg font-bold">368</span>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                <span>➕</span>
                <span>Order More Cards</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <p className="text-sm text-gray-600 mb-4">
              Latest RFID assignments
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div>
                  <div className="font-medium text-sm">Carlos Rodriguez</div>
                  <div className="text-xs text-gray-600">RFID assigned</div>
                </div>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div>
                  <div className="font-medium text-sm">Ana Garcia</div>
                  <div className="text-xs text-gray-600">Card picked up</div>
                </div>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div>
                  <div className="font-medium text-sm">Maria Santos</div>
                  <div className="text-xs text-gray-600">Email sent</div>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center justify-center gap-2">
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
