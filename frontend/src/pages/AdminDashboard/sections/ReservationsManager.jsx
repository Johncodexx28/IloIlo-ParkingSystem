import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  CheckCircle,
  X,
  Plus,
} from "lucide-react";

const ReservationsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [showFilters, setShowFilters] = useState(false);

  // Sample reservation data
  const reservations = [
    {
      id: "RES-001",
      customer: "Juan Dela Cruz",
      email: "juan@email.com",
      contact: "+63 912 345 6789",
      location: "SM City Iloilo",
      spot: "Spot A-025",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      amount: "₱200",
      status: "Confirmed",
    },
    {
      id: "RES-002",
      customer: "Maria Santos",
      email: "maria@email.com",
      contact: "+63 917 234 5678",
      location: "Robinsons Place",
      spot: "Spot B-012",
      date: "2024-01-15",
      time: "2:00 PM - 6:00 PM",
      amount: "₱180",
      status: "Pending",
    },
    {
      id: "RES-003",
      customer: "Carlos Rodriguez",
      email: "carlos@email.com",
      contact: "+63 905 123 4567",
      location: "Megaworld Center",
      spot: "Spot C-008",
      date: "2024-01-14",
      time: "6:00 PM - 10:00 PM",
      amount: "₱160",
      status: "Expired",
    },
    {
      id: "RES-004",
      customer: "Ana Garcia",
      email: "ana@email.com",
      contact: "+63 919 876 5432",
      location: "Ayala Malls",
      spot: "Spot D-017",
      date: "2024-01-15",
      time: "12:00 PM - 4:00 PM",
      amount: "₱220",
      status: "Cancelled",
    },
    {
      id: "RES-005",
      customer: "Roberto Morales",
      email: "roberto@email.com",
      contact: "+63 908 765 4321",
      location: "SM City Iloilo",
      spot: "Spot A-048",
      date: "2024-01-16",
      time: "8:00 AM - 12:00 PM",
      amount: "₱200",
      status: "Confirmed",
    },
  ];

  // Calculate status counts
  const statusCounts = {
    total: reservations.length,
    confirmed: reservations.filter((r) => r.status === "Confirmed").length,
    pending: reservations.filter((r) => r.status === "Pending").length,
    expired: reservations.filter((r) => r.status === "Expired").length,
    cancelled: reservations.filter((r) => r.status === "Cancelled").length,
  };

  // Filter reservations based on search and status
  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.contact.includes(searchTerm);

    const matchesStatus =
      statusFilter === "All Status" || reservation.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeStyle = (status) => {
    const styles = {
      Confirmed: "bg-green-500 text-white",
      Pending: "bg-yellow-500 text-white",
      Expired: "bg-red-500 text-white",
      Cancelled: "bg-gray-500 text-white",
    };
    return `px-3 py-1 rounded-full text-xs font-medium ${
      styles[status] || "bg-gray-300 text-gray-700"
    }`;
  };

  const getStatusColor = (status) => {
    const colors = {
      Confirmed: "text-green-600",
      Pending: "text-yellow-600",
      Expired: "text-red-600",
      Cancelled: "text-gray-600",
    };
    return colors[status] || "text-gray-600";
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-6">Reservations Management</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <Plus size={20} />
          Manual Reservation
        </button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total</h3>
          <p className="text-3xl font-bold text-gray-900">
            {statusCounts.total}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Confirmed</h3>
          <p className={`text-3xl font-bold ${getStatusColor("Confirmed")}`}>
            {statusCounts.confirmed}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Pending</h3>
          <p className={`text-3xl font-bold ${getStatusColor("Pending")}`}>
            {statusCounts.pending}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Expired</h3>
          <p className={`text-3xl font-bold ${getStatusColor("Expired")}`}>
            {statusCounts.expired}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Cancelled</h3>
          <p className={`text-3xl font-bold ${getStatusColor("Cancelled")}`}>
            {statusCounts.cancelled}
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border mb-6">
        <div className="p-4 flex items-center gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name, reservation ID, or phone..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Expired</option>
            <option>Cancelled</option>
          </select>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <Filter size={16} />
            Filters
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Reservation List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Reservation List
            </h2>
            <p className="text-gray-600">
              Manage and track all parking reservations
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Reservation ID
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Date & Time
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {reservation.id}
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          {reservation.customer}
                        </div>
                        <div className="text-sm text-gray-500">
                          {reservation.email}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {reservation.contact}
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          {reservation.location}
                        </div>
                        <div className="text-sm text-gray-500">
                          {reservation.spot}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          {reservation.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {reservation.time}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {reservation.amount}
                    </td>
                    <td className="py-4 px-4">
                      <span className={getStatusBadgeStyle(reservation.status)}>
                        {reservation.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
                          <CheckCircle size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredReservations.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No reservations found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationsManagement;
