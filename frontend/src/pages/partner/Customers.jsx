import React, { useState } from 'react';
import { Search, Download, Eye, Phone, Mail, Star, Menu, X } from 'lucide-react';

const CustomerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sample customer data
  const customers = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      email: 'juan@email.com',
      phone: '+63 912 345 6789',
      memberSince: '2023-08-15',
      bookings: 24,
      totalSpent: 4800,
      frequency: 'Regular',
      rating: 4.8,
      lastVisit: '2024-01-15'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '+63 917 234 5678',
      memberSince: '2023-09-22',
      bookings: 18,
      totalSpent: 3600,
      frequency: 'VIP',
      rating: 4.6,
      lastVisit: '2024-01-14'
    },
    {
      id: 3,
      name: 'Carlos Rodriguez',
      email: 'carlos@email.com',
      phone: '+63 905 678 9012',
      memberSince: '2023-07-10',
      bookings: 32,
      totalSpent: 6400,
      frequency: 'VIP',
      rating: 4.9,
      lastVisit: '2024-01-16'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const formatCurrency = (amount) => {
    return `₱${amount.toLocaleString()}`;
  };

  const getFrequencyBadgeColor = (frequency) => {
    switch (frequency.toLowerCase()) {
      case 'vip':
        return 'bg-black text-white';
      case 'frequent':
        return 'bg-blue-100 text-blue-800';
      case 'regular':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Customers</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-sm text-gray-600 order-2 sm:order-1">{filteredCustomers.length} total customers</span>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 order-1 sm:order-2">
              <Download size={16} />
              <span className="hidden sm:inline">Export List</span>
              <span className="sm:hidden">Export</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Total Customers</h3>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">2,847</div>
            <div className="text-xs text-green-600 mt-1">+125 this month</div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Regular Customers</h3>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">1,234</div>
            <div className="text-xs text-gray-500 mt-1">10+ visits</div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Avg Rating</h3>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">4.8</div>
            <div className="text-xs text-gray-500 mt-1">Customer satisfaction</div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Avg Spend</h3>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">₱187</div>
            <div className="text-xs text-gray-500 mt-1">Per customer/month</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Customer Directory - Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{customer.name}</h3>
                  <p className="text-sm text-gray-500">Member since {formatDate(customer.memberSince)}</p>
                </div>
                <span className={`px-2 py-1 text-xs leading-5 font-semibold rounded-full ${getFrequencyBadgeColor(customer.frequency)} ml-2 flex-shrink-0`}>
                  {customer.frequency}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Email:</span>
                  <span className="text-sm text-gray-900 truncate ml-2">{customer.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Phone:</span>
                  <span className="text-sm text-gray-900">{customer.phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Bookings:</span>
                  <span className="text-sm font-medium text-gray-900">{customer.bookings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Spent:</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(customer.totalSpent)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Rating:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-900">{customer.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Last Visit:</span>
                  <span className="text-sm text-gray-900">{formatDate(customer.lastVisit)}</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 pt-3 border-t border-gray-100">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                  <Eye size={16} />
                  <span className="text-sm">View</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
                  <Phone size={16} />
                  <span className="text-sm">Call</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                  <Mail size={16} />
                  <span className="text-sm">Email</span>
                </button>
              </div>
            </div>
          ))}
          
          {filteredCustomers.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">No customers found matching your search.</p>
            </div>
          )}
        </div>

        {/* Customer Directory - Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Customer Directory</h2>
            <p className="text-sm text-gray-500">Customer information and booking history</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Visit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {customer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Member since {formatDate(customer.memberSince)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.email}</div>
                      <div className="text-sm text-gray-500">{customer.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.bookings}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(customer.totalSpent)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getFrequencyBadgeColor(customer.frequency)}`}>
                        {customer.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900">{customer.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(customer.lastVisit)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Eye size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Phone size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Mail size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCustomers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No customers found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;