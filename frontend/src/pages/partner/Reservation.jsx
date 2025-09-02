import React, { useState } from 'react';
import { Download, Search, Eye, Phone, ChevronDown, Calendar, MapPin, Clock, User, Car } from 'lucide-react';

const ReservationsBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const bookings = [
    {
      id: 'BK-001',
      customer: 'Juan Dela Cruz',
      phone: '+63 912 345 6789',
      vehicle: 'ABC-123',
      location: 'SM City Iloilo - Main',
      spot: 'Spot A-025',
      timeSlot: '10:00 AM - 2:00 PM',
      date: '2024-01-15',
      amount: '₱200',
      status: 'Completed'
    },
    {
      id: 'BK-002',
      customer: 'Maria Santos',
      phone: '+63 915 987 6543',
      vehicle: 'XYZ-789',
      location: 'Ayala Center Iloilo',
      spot: 'Spot B-012',
      timeSlot: '2:00 PM - 6:00 PM',
      date: '2024-01-15',
      amount: '₱250',
      status: 'Ongoing'
    },
    {
      id: 'BK-003',
      customer: 'Robert Garcia',
      phone: '+63 920 123 4567',
      vehicle: 'DEF-456',
      location: 'Robinsons Place Iloilo',
      spot: 'Spot C-033',
      timeSlot: '8:00 AM - 12:00 PM',
      date: '2024-01-15',
      amount: '₱180',
      status: 'Cancelled'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Reservations / Bookings</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="text-sm text-gray-600 order-2 sm:order-1">{filteredBookings.length} active bookings</div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 w-full sm:w-auto order-1 sm:order-2">
            <Download className="w-4 h-4" />
            <span className="text-sm">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Today's Bookings</h3>
          <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">156</div>
          <div className="text-xs sm:text-sm text-gray-500">+12 from yesterday</div>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Ongoing</h3>
          <div className="text-xl sm:text-3xl font-bold text-blue-600 mb-1">42</div>
          <div className="text-xs sm:text-sm text-gray-500">Currently active</div>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Completed</h3>
          <div className="text-xl sm:text-3xl font-bold text-green-600 mb-1">98</div>
          <div className="text-xs sm:text-sm text-gray-500">Today</div>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Cancelled</h3>
          <div className="text-xl sm:text-3xl font-bold text-red-600 mb-1">16</div>
          <div className="text-xs sm:text-sm text-gray-500">Today</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name, plate, or booking ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>
        <div className="relative sm:min-w-[140px]">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-sm sm:text-base"
          >
            <option>All Status</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
          <p className="text-sm text-gray-600 mt-1">Manage all customer reservations</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Slot
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                      <div className="text-sm text-gray-500">{booking.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.vehicle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{booking.location}</div>
                      <div className="text-sm text-gray-500">{booking.spot}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{booking.timeSlot}</div>
                      <div className="text-sm text-gray-500">{booking.date}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-4">
        <div className="bg-white rounded-lg p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
          <p className="text-sm text-gray-600 mt-1">Manage all customer reservations</p>
        </div>
        
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              {/* Main Info */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="font-medium text-gray-900 text-sm sm:text-base">{booking.id}</div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full self-start ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                    <div className="text-xs text-gray-500">{booking.phone}</div>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-gray-400" />
                  <div className="text-sm text-gray-900">{booking.vehicle}</div>
                </div>

                {/* Location Info */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-900">{booking.location}</div>
                    <div className="text-xs text-gray-500">{booking.spot}</div>
                  </div>
                </div>

                {/* Time Info */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-900">{booking.timeSlot}</div>
                    <div className="text-xs text-gray-500">{booking.date}</div>
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <div className="text-sm font-medium text-gray-900">{booking.amount}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-2 pt-2 sm:pt-0">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <Eye className="w-4 h-4" />
                  <span className="sm:hidden">View</span>
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <Phone className="w-4 h-4" />
                  <span className="sm:hidden">Call</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBookings.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ReservationsBookings;