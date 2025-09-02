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
  Menu,
} from "lucide-react";

const ReservationsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    return `px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
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

  const StatusCard = ({ title, count, status }) => (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
      <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-1 sm:mb-2">{title}</h3>
      <p className={`text-xl sm:text-3xl font-bold ${status ? getStatusColor(status) : 'text-gray-900'}`}>
        {count}
      </p>
    </div>
  );

  const ReservationCard = ({ reservation }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="min-w-0 flex-1 pr-3">
          <h3 className="font-semibold text-gray-900 text-base">{reservation.customer}</h3>
          <p className="text-sm text-gray-600">{reservation.id}</p>
        </div>
        <div className="flex-shrink-0">
          <span className={getStatusBadgeStyle(reservation.status)}>
            {reservation.status}
          </span>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div>
            <div className="text-gray-600 text-xs mb-1">Contact:</div>
            <div className="font-medium text-gray-900 text-sm break-words">{reservation.contact}</div>
          </div>
          <div>
            <div className="text-gray-600 text-xs mb-1">Amount:</div>
            <div className="font-medium text-gray-900 text-sm">{reservation.amount}</div>
          </div>
          <div>
            <div className="text-gray-600 text-xs mb-1">Location:</div>
            <div className="font-medium text-gray-900 text-sm leading-tight">{reservation.location}</div>
            <div className="text-xs text-gray-500 mt-1">{reservation.spot}</div>
          </div>
          <div>
            <div className="text-gray-600 text-xs mb-1">Date:</div>
            <div className="font-medium text-gray-900 text-sm">{reservation.date}</div>
            <div className="text-xs text-gray-500 mt-1 leading-tight">{reservation.time}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-100">
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors flex flex-col items-center gap-1">
          <Eye size={16} />
          <span className="text-xs">View</span>
        </button>
        <button className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors flex flex-col items-center gap-1">
          <Edit size={16} />
          <span className="text-xs">Edit</span>
        </button>
        <button className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors flex flex-col items-center gap-1">
          <CheckCircle size={16} />
          <span className="text-xs">Confirm</span>
        </button>
        <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors flex flex-col items-center gap-1">
          <X size={16} />
          <span className="text-xs">Cancel</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-3 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Reservations Management</h1>
        
        {/* Desktop Controls */}
        <div className="hidden sm:flex gap-3">
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <Plus size={20} />
            Manual Reservation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={16} />
          <span className="text-sm">Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white rounded-lg p-4 mb-6 shadow-sm border space-y-3">
          <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <Plus size={20} />
            Manual Reservation
          </button>
        </div>
      )}

      {/* Status Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <StatusCard title="Total" count={statusCounts.total} />
        <StatusCard title="Confirmed" count={statusCounts.confirmed} status="Confirmed" />
        <StatusCard title="Pending" count={statusCounts.pending} status="Pending" />
        <StatusCard title="Expired" count={statusCounts.expired} status="Expired" />
        <StatusCard title="Cancelled" count={statusCounts.cancelled} status="Cancelled" />
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border mb-6">
        <div className="p-3 sm:p-4">
          {/* Mobile Search */}
          <div className="sm:hidden space-y-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search reservations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option>All Status</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Expired</option>
                <option>Cancelled</option>
              </select>
              
              <button className="px-3 py-2 border border-gray-300 rounded-lg flex items-center gap-1 hover:bg-gray-50 transition-colors">
                <Download size={14} />
                <span className="text-sm">Export</span>
              </button>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:flex items-center gap-4">
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
      </div>

      {/* Reservation List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Reservation List
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Manage and track all parking reservations
            </p>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden">
            {filteredReservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Reservation ID
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Date & Time
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
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
                    <td className="py-4 px-4 font-medium text-gray-900 text-sm">
                      {reservation.id}
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {reservation.customer}
                        </div>
                        <div className="text-xs text-gray-500">
                          {reservation.email}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700 text-sm">
                      {reservation.contact}
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {reservation.location}
                        </div>
                        <div className="text-xs text-gray-500">
                          {reservation.spot}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {reservation.date}
                        </div>
                        <div className="text-xs text-gray-500">
                          {reservation.time}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900 text-sm">
                      {reservation.amount}
                    </td>
                    <td className="py-4 px-4">
                      <span className={getStatusBadgeStyle(reservation.status)}>
                        {reservation.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
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
              <p className="text-gray-500 text-sm sm:text-base">
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