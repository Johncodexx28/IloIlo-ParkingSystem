import React, { useState } from 'react';
import { Plus, Car, Clock, Edit, X, Navigation, MessageCircle, ChevronDown } from 'lucide-react';

const MyBookings = () => {
  const [filterBy, setFilterBy] = useState('All Bookings');
  
  const stats = {
    active: { count: 1, label: 'Currently parked' },
    upcoming: { count: 1, label: 'Confirmed bookings' },
    thisMonth: { count: 8, label: 'Total bookings' },
    totalSpent: { amount: 1440, label: 'This month' }
  };

  const bookings = [
    {
      id: 'BK-001',
      location: 'SM City Iloilo - Main Parking',
      spotNumber: 'A-025',
      plateNumber: 'ABC-123',
      status: 'Active',
      date: '2024-01-15',
      time: '10:00 AM - 2:00 PM',
      bookedOn: '2024-01-14',
      cost: 200,
      duration: '4 hours',
      statusColor: 'bg-green-500'
    },
    {
      id: 'BK-002',
      location: 'Robinsons Place Iloilo',
      spotNumber: 'B-012',
      plateNumber: 'ABC-123',
      status: 'Confirmed',
      date: '2024-01-16',
      time: '2:00 PM - 6:00 PM',
      bookedOn: '2024-01-15',
      cost: 180,
      duration: '4 hours',
      statusColor: 'bg-blue-500'
    }
  ];

  const handleExtend = (bookingId) => {
    console.log('Extend booking:', bookingId);
  };

  const handleModify = (bookingId) => {
    console.log('Modify booking:', bookingId);
  };

  const handleCancel = (bookingId) => {
    console.log('Cancel booking:', bookingId);
  };

  const handleNavigate = (bookingId) => {
    console.log('Navigate to:', bookingId);
  };

  const handleContact = (bookingId) => {
    console.log('Contact for booking:', bookingId);
  };

  const handleNewBooking = () => {
    console.log('Create new booking');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <button
            onClick={handleNewBooking}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Booking
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">{stats.active.count}</div>
            <div className="text-sm text-gray-600">{stats.active.label}</div>
            <div className="text-xs text-gray-500 mt-1">Active</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">{stats.upcoming.count}</div>
            <div className="text-sm text-gray-600">{stats.upcoming.label}</div>
            <div className="text-xs text-gray-500 mt-1">Upcoming</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.thisMonth.count}</div>
            <div className="text-sm text-gray-600">{stats.thisMonth.label}</div>
            <div className="text-xs text-gray-500 mt-1">This Month</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl font-bold text-gray-900 mb-1">₱{stats.totalSpent.amount.toLocaleString()}</div>
            <div className="text-sm text-gray-600">{stats.totalSpent.label}</div>
            <div className="text-xs text-gray-500 mt-1">Total Spent</div>
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-6">
          <div className="relative inline-block">
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Bookings</option>
              <option>Active</option>
              <option>Confirmed</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6">
              {/* Booking Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{booking.location}</h3>
                    <p className="text-gray-600 text-sm">
                      Spot {booking.spotNumber} • {booking.plateNumber}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${booking.statusColor}`}>
                    {booking.status}
                  </span>
                  <div className="text-right">
                    <div className="text-xl font-bold">₱{booking.cost}</div>
                    <div className="text-sm text-gray-600">{booking.duration}</div>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="grid grid-cols-3 gap-6 mb-6 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Date & Time</p>
                  <p className="font-medium">{booking.date}</p>
                  <p className="text-gray-600">{booking.time}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Booked On</p>
                  <p className="font-medium">{booking.bookedOn}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Booking ID</p>
                  <p className="font-medium">{booking.id}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {booking.status === 'Active' && (
                    <>
                      <button
                        onClick={() => handleExtend(booking.id)}
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
                      >
                        <Clock className="w-4 h-4" />
                        Extend
                      </button>
                      <button
                        onClick={() => handleNavigate(booking.id)}
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
                      >
                        <Navigation className="w-4 h-4" />
                        Navigate
                      </button>
                    </>
                  )}
                  
                  {booking.status === 'Confirmed' && (
                    <>
                      <button
                        onClick={() => handleModify(booking.id)}
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
                      >
                        <Edit className="w-4 h-4" />
                        Modify
                      </button>
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2 text-sm"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => handleContact(booking.id)}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (when no bookings) */}
        {bookings.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600 mb-6">You don't have any parking bookings yet.</p>
            <button
              onClick={handleNewBooking}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              Create Your First Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;