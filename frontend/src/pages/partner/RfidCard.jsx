import { useState, useEffect } from "react";
import {
  Eye,
  Edit,
  Phone,
  Mail,
  Plus,
  Download,
  Menu,
  X,
  CircleCheck,
} from "lucide-react";
import ModalForm from "../../components/Modals/ModalForm";
import usePartnerStore from "../../store/partnerStore.js";

const RfidCardManagement = () => {
  const { rfidRequests, fetchRFIDRequests, loading, assignUserRFIDAction } =
    usePartnerStore();
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    fetchRFIDRequests();
  }, []);

  if (loading) return <p>Loading...</p>;

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
    return type === "Parking Access Card"
      ? "bg-green-100 text-green-800"
      : "bg-gray-600 text-white";
  };

  const stats = {
    total: rfidRequests.length,
    pending: rfidRequests.filter((r) => r.status === "Pending").length,
    processing: rfidRequests.filter((r) => r.status === "Processing").length,
    ready: rfidRequests.filter((r) => r.status === "Ready for Pickup").length,
    completed: rfidRequests.filter((r) => r.status === "Completed").length,
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
          {rfidRequests.map((req) => (
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
                {rfidRequests.map((req) => (
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
                        <button
                          className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                          onClick={() => {
                            setSelectedRequest({
                              ...req,
                              userId: req.userId,
                            });
                            setActiveModal("UpdateUserRFID");
                          }}
                        >
                          <Edit size={16} />
                        </button>

                        <button
                          className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                          onClick={() => {
                            window.location.href = `tel:${require.phone}`;
                          }}
                        >
                          <Phone size={16} />
                        </button>

                        {/* Email User */}
                        <button
                          className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                          onClick={() => {
                            window.location.href = `mailto:${req.email}`;
                          }}
                        >
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
                <span className="font-medium text-sm sm:text-base">
                  Manual RFID Request
                </span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg flex-shrink-0">📋</span>
                <span className="font-medium text-sm sm:text-base">
                  Bulk Card Assignment
                </span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg flex-shrink-0">📥</span>
                <span className="font-medium text-sm sm:text-base">
                  Export Card Database
                </span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left">
                <span className="text-lg flex-shrink-0">⚙️</span>
                <span className="font-medium text-sm sm:text-base">
                  RFID Settings
                </span>
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
                  <div className="font-medium text-sm truncate">
                    Carlos Rodriguez
                  </div>
                  <div className="text-xs text-gray-600">RFID assigned</div>
                </div>
                <div className="text-xs text-gray-500 ml-2 flex-shrink-0">
                  2h ago
                </div>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">Ana Garcia</div>
                  <div className="text-xs text-gray-600">Card picked up</div>
                </div>
                <div className="text-xs text-gray-500 ml-2 flex-shrink-0">
                  4h ago
                </div>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-100">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">
                    Maria Santos
                  </div>
                  <div className="text-xs text-gray-600">Email sent</div>
                </div>
                <div className="text-xs text-gray-500 ml-2 flex-shrink-0">
                  6h ago
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center justify-center gap-2 text-sm">
                <Eye size={16} />
                <span>View All Activity</span>
              </button>
            </div>
          </div>
        </div>

        {/* Assign RFID Modal */}
        <ModalForm
          isOpen={activeModal === "UpdateUserRFID"}
          onClose={() => setActiveModal(null)}
          title="Assign RFID Number"
          description="Fill in the RFID number to register and enable user access."
          showDefaultActions={false}
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const rfidNumber = e.target.rfidNumber.value;

              try {
                await assignUserRFIDAction(selectedRequest.userId, rfidNumber);

                // Optionally refresh the list after assignment
                fetchRFIDRequests();

                setActiveModal(null);
              } catch (err) {
                console.error("Failed to assign RFID:", err);
              }
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Request ID */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Request ID
                </label>
                <input
                  type="text"
                  name="requestId"
                  value={selectedRequest?.id || ""}
                  readOnly
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Customer */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Customer
                </label>
                <input
                  type="text"
                  name="customer"
                  value={selectedRequest?.customer || ""}
                  readOnly
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Vehicle
                </label>
                <input
                  type="text"
                  name="vehicle"
                  defaultValue={selectedRequest?.vehicle || ""}
                  readOnly
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  defaultValue={selectedRequest?.requestDate || ""}
                  readOnly
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Card Type */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Card Type
                </label>
                <input
                  type="text"
                  name="cardType"
                  defaultValue={selectedRequest?.cardType || ""}
                  readOnly
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  defaultValue={selectedRequest?.status || ""}
                  readOnly
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* RFID Number (editable) */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-2 tracking-wide">
                  RFID Number
                </label>
                <div className="relative">
                  {/* Input field */}
                  <input
                    type="text"
                    name="rfidNumber"
                    placeholder="Enter or scan RFID number"
                    defaultValue={selectedRequest?.rfidNumber || ""}
                    autoFocus
                    className="w-full rounded-xl border border-green-400 bg-green-50 px-4 py-3 text-sm shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:ring-offset-1 transition"
                  />
                  {/* Decorative icon */}
                  <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Scan or type the RFID number to assign it to this user.
                </p>
              </div>
            </div>
            {/* custom actions */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-medium rounded-lg bg-green-600 text-white shadow-md hover:bg-green-700"
              >
                Assign RFID
              </button>
            </div>
          </form>
        </ModalForm>
      </div>
    </div>
  );
};

export default RfidCardManagement;
