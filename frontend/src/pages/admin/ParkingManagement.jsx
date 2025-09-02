import React, { useState } from "react";
import { Eye, RefreshCcw, Search, Settings, SquarePen, TriangleAlert, Menu, X } from "lucide-react";

function ParkingManagement() {
  const [selectedFilter, setSelectedFilter] = useState("All Parking Lots");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("lots");

  // data for parking lots
  const parkingLots = [
    {
      name: "SM City Iloilo - Main",
      occupancy: "387/450",
      available: 63,
      revenue: "₱42,500",
      status: "active",
    },
    {
      name: "Robinsons Place - Level 2",
      occupancy: "278/320",
      available: 42,
      revenue: "₱35,200",
      status: "active",
    },
    {
      name: "Megaworld Center",
      occupancy: "218/280",
      available: 62,
      revenue: "₱28,700",
      status: "warning",
    },
    {
      name: "Ayala Malls",
      occupancy: "323/380",
      available: 57,
      revenue: "₱38,900",
      status: "active",
    },
  ];

  // data for parking spots
  const parkingSpots = [
    {
      spotId: "A-001",
      lot: "SM City Iloilo",
      status: "occupied",
      vehicle: "ABC-123",
      duration: "2h 15m",
      revenue: "₱125",
    },
    {
      spotId: "A-002",
      lot: "SM City Iloilo",
      status: "available",
      vehicle: "-",
      duration: "-",
      revenue: "₱0",
    },
    {
      spotId: "A-003",
      lot: "SM City Iloilo",
      status: "reserved",
      vehicle: "DEF-456",
      duration: "-",
      revenue: "₱0",
    },
    {
      spotId: "B-001",
      lot: "Robinsons Place",
      status: "occupied",
      vehicle: "GHI-789",
      duration: "45m",
      revenue: "₱75",
    },
    {
      spotId: "B-002",
      lot: "Robinsons Place",
      status: "maintenance",
      vehicle: "-",
      duration: "-",
      revenue: "₱0",
    },
    {
      spotId: "C-001",
      lot: "Megaworld Center",
      status: "occupied",
      vehicle: "JKL-012",
      duration: "3h 20m",
      revenue: "₱180",
    },
  ];

  function getStatusColor(status) {
    if (status === "active") return "bg-green-500";
    if (status === "warning") return "bg-yellow-500";
    return "bg-gray-500";
  }

  function getStatusBadge(status) {
    if (status === "occupied") return "bg-red-500 text-white";
    if (status === "available") return "bg-green-500 text-white";
    if (status === "reserved") return "bg-blue-500 text-white";
    if (status === "maintenance") return "bg-orange-500 text-white";
    return "bg-gray-500 text-white";
  }

  function handleFilterChange(event) {
    setSelectedFilter(event.target.value);
  }

  function handleStatusChange(event) {
    setStatusFilter(event.target.value);
  }

  function calculateProgress(occupancy) {
    const parts = occupancy.split("/");
    return (parseInt(parts[0]) / parseInt(parts[1])) * 100;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold">Parking Management</h1>
        
        {/* Desktop Controls */}
        <div className="hidden sm:flex gap-3 items-center">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option>All Parking Lots</option>
            <option>SM City Iloilo</option>
            <option>Robinsons Place</option>
            <option>Megaworld Center</option>
            <option>Ayala Malls</option>
          </select>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md flex items-center gap-2 text-sm">
            + Add New Lot
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          <span className="text-sm">Menu</span>
        </button>
      </div>

      {/* Mobile Controls */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white rounded-lg mx-4 mb-6 p-4 shadow-sm border border-gray-100 space-y-3">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option>All Parking Lots</option>
            <option>SM City Iloilo</option>
            <option>Robinsons Place</option>
            <option>Megaworld Center</option>
            <option>Ayala Malls</option>
          </select>
          <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md flex items-center justify-center gap-2 text-sm">
            + Add New Lot
          </button>
        </div>
      )}

      {/* Mobile Tabs */}
      <div className="lg:hidden bg-white border-b border-gray-200 mb-6">
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab("lots")}
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === "lots" 
                ? "border-gray-900 text-gray-900" 
                : "border-transparent text-gray-500"
            }`}
          >
            Parking Lots
          </button>
          <button
            onClick={() => setActiveTab("spots")}
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === "spots" 
                ? "border-gray-900 text-gray-900" 
                : "border-transparent text-gray-500"
            }`}
          >
            Spot Status
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === "analytics" 
                ? "border-gray-900 text-gray-900" 
                : "border-transparent text-gray-500"
            }`}
          >
            Analytics
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6">
        {/* Parking Lot Cards - Always show on desktop, show based on tab on mobile */}
        <div className={`${activeTab !== "lots" ? "lg:block hidden" : "block"} mb-6 lg:mb-10`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {parkingLots.map((lot, index) => (
              <div
                key={index}
                className="bg-white p-4 lg:p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm lg:text-base font-semibold truncate pr-2">{lot.name}</h3>
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(lot.status)}`}
                  ></div>
                </div>

                <div className="mb-3">
                  <div className="text-xs lg:text-sm text-gray-600 mb-2">Occupancy</div>
                  <div className="text-base lg:text-lg font-bold mb-2">{lot.occupancy}</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                    <div
                      className="bg-gray-800 h-1.5 rounded-full"
                      style={{ width: `${calculateProgress(lot.occupancy)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-xs lg:text-sm text-gray-600">Available</span>
                  <span className="text-sm lg:text-base font-semibold ml-2 text-green-600">
                    {lot.available}
                  </span>
                </div>

                <div className="mb-4 lg:mb-5">
                  <div className="text-xs lg:text-sm text-gray-600 mb-1">Today's Revenue</div>
                  <div className="text-base lg:text-lg font-bold">{lot.revenue}</div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 lg:flex-none px-3 py-1.5 bg-transparent text-gray-600 border border-gray-300 rounded text-xs lg:text-sm flex items-center justify-center gap-1">
                    <Eye className="w-3 h-3 lg:w-4 lg:h-4" /> View
                  </button>
                  <button className="flex-1 lg:flex-none px-3 py-1.5 bg-transparent text-gray-600 border border-gray-300 rounded text-xs lg:text-sm flex items-center justify-center gap-1">
                    <SquarePen className="w-3 h-3 lg:w-4 lg:h-4 text-blue-400" /> Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Parking Spots Table */}
          <div className={`${activeTab !== "spots" ? "lg:block hidden" : "block"} lg:col-span-2`}>
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 lg:p-5 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-base lg:text-lg font-bold mb-1">Parking Spots Status</h2>
                    <p className="text-xs lg:text-sm text-gray-600">
                      Real-time view of individual parking spots
                    </p>
                  </div>
                  <div className="flex gap-2 items-center w-full sm:w-auto">
                    <select
                      value={statusFilter}
                      onChange={handleStatusChange}
                      className="flex-1 sm:flex-none px-2 py-1.5 border border-gray-300 rounded text-xs lg:text-sm"
                    >
                      <option>All Status</option>
                      <option>Occupied</option>
                      <option>Available</option>
                      <option>Reserved</option>
                      <option>Maintenance</option>
                    </select>
                    <button className="px-2 py-1.5 border border-gray-300 rounded bg-white">
                      <Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="sm:hidden">
                {parkingSpots.map((spot, index) => (
                  <div key={index} className="p-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-gray-900">{spot.spotId}</div>
                        <div className="text-sm text-gray-600">{spot.lot}</div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                          spot.status
                        )}`}
                      >
                        {spot.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600">Vehicle:</span>
                        <span className="ml-1 font-medium">{spot.vehicle}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <span className="ml-1 font-medium">{spot.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Revenue:</span>
                        <span className="ml-1 font-medium">{spot.revenue}</span>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button className="p-1">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1">
                          <SquarePen className="w-4 h-4 text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Spot ID
                      </th>
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Lot
                      </th>
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Status
                      </th>
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Vehicle
                      </th>
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Duration
                      </th>
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Revenue
                      </th>
                      <th className="px-3 py-3 text-left font-semibold text-xs lg:text-sm">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {parkingSpots.map((spot, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="px-3 py-3 font-medium text-xs lg:text-sm">{spot.spotId}</td>
                        <td className="px-3 py-3 text-xs lg:text-sm">{spot.lot}</td>
                        <td className="px-3 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                              spot.status
                            )}`}
                          >
                            {spot.status}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-xs lg:text-sm">{spot.vehicle}</td>
                        <td className="px-3 py-3 text-xs lg:text-sm">{spot.duration}</td>
                        <td className="px-3 py-3 font-medium text-xs lg:text-sm">{spot.revenue}</td>
                        <td className="px-3 py-3">
                          <div className="flex gap-1">
                            <button className="p-1">
                              <Eye className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
                            </button>
                            <button className="p-1">
                              <SquarePen className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Side Panel */}
          <div className={`${activeTab !== "analytics" ? "lg:block hidden" : "block"} flex flex-col gap-4 lg:gap-5`}>
            {/* Occupancy Analytics */}
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm">
              <h3 className="text-sm lg:text-base font-bold mb-1">Occupancy Analytics</h3>
              <p className="text-xs lg:text-sm text-gray-600 mb-4 lg:mb-5">
                Usage patterns and trends
              </p>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs lg:text-sm text-gray-600">Peak Hours</span>
                  <span className="text-xs lg:text-sm font-semibold">2-4 PM</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-xs lg:text-sm text-gray-600">Avg Dwell Time</span>
                  <span className="text-xs lg:text-sm font-semibold">2h 15m</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-xs lg:text-sm text-gray-600">Turnover Rate</span>
                  <span className="text-xs lg:text-sm font-semibold">3.2x/day</span>
                </div>
              </div>
            </div>

            {/* Status Distribution */}
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm">
              <h3 className="text-sm lg:text-base font-bold mb-3 lg:mb-4">Status Distribution</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm">Occupied</span>
                  <span className="bg-red-500 text-white px-1.5 py-0.5 rounded text-xs">
                    68%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm">Available</span>
                  <span className="bg-green-500 text-white px-1.5 py-0.5 rounded text-xs">
                    25%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm">Reserved</span>
                  <span className="bg-blue-500 text-white px-1.5 py-0.5 rounded text-xs">
                    5%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs lg:text-sm">Maintenance</span>
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs">
                    2%
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm">
              <h3 className="text-sm lg:text-base font-bold mb-3 lg:mb-4">Quick Actions</h3>

              <div className="space-y-2 lg:space-y-2.5">
                <button className="w-full p-2.5 bg-transparent border border-gray-300 rounded text-left flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <TriangleAlert className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500"/> 
                  <span className="text-xs lg:text-sm">Report Issue</span>
                </button>

                <button className="w-full p-2.5 bg-transparent border border-gray-300 rounded text-left flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <Settings className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600"/> 
                  <span className="text-xs lg:text-sm">Bulk Update</span>
                </button>

                <button className="w-full p-2.5 bg-transparent border border-gray-300 rounded text-left flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <RefreshCcw className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400"/> 
                  <span className="text-xs lg:text-sm">Sync Status</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkingManagement;