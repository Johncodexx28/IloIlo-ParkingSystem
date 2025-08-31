import React, { useState } from "react";
import { Eye, RefreshCcw, Search, Settings, SquarePen, TriangleAlert, TriangleAlertIcon } from "lucide-react";

function ParkingManagement() {
  const [selectedFilter, setSelectedFilter] = useState("All Parking Lots");
  const [statusFilter, setStatusFilter] = useState("All Status");

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
    if (status === "available") return "bg-gray-800 text-white";
    if (status === "reserved") return "bg-gray-500 text-white";
    if (status === "maintenance") return "bg-gray-500 text-white";
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
    <div className="  bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 p-6">
        <h1 className="text-2xl font-bold ">Parking Management</h1>
        <div className="flex gap-3 items-center">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option>All Parking Lots</option>
            <option>SM City Iloilo</option>
            <option>Robinsons Place</option>
            <option>Megaworld Center</option>
            <option>Ayala Malls</option>
          </select>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md flex items-center gap-2">
            + Add New Lot
          </button>
        </div>
      </div>

      {/* Parking Lot Cards */}
      <div className="grid grid-cols-4 gap-5 mb-10">
        {parkingLots.map((lot, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold">{lot.name}</h3>
              <div
                className={`w-2 h-2 rounded-full ${getStatusColor(lot.status)}`}
              ></div>
            </div>

            <div className="mb-3">
              <div className="text-sm text-gray-600 mb-2">Occupancy</div>
              <div className="text-lg font-bold mb-2">{lot.occupancy}</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div
                  className="bg-gray-800 h-1.5 rounded-full"
                  style={{ width: `${calculateProgress(lot.occupancy)}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-sm text-gray-600">Available</span>
              <span className="text-base font-semibold ml-2 text-green-600">
                {lot.available}
              </span>
            </div>

            <div className="mb-5">
              <div className="text-sm text-gray-600 mb-1">Today's Revenue</div>
              <div className="text-lg font-bold">{lot.revenue}</div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-transparent text-gray-600 border border-gray-300 rounded text-sm flex items-center gap-1">
                <Eye className="w-4 h-4 " /> View
              </button>
              <button className="px-3 py-1.5 bg-transparent text-gray-600 border border-gray-300 rounded text-sm flex items-center gap-1">
                <SquarePen className="w-4 h-4 text-blue-400" /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Parking Spots Table */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold mb-1">Parking Spots Status</h2>
                <p className="text-sm text-gray-600">
                  Real-time view of individual parking spots
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <select
                  value={statusFilter}
                  onChange={handleStatusChange}
                  className="px-2 py-1.5 border border-gray-300 rounded text-sm"
                >
                  <option>All Status</option>
                  <option>Occupied</option>
                  <option>Available</option>
                  <option>Reserved</option>
                  <option>Maintenance</option>
                </select>
                <button className="px-2 py-1.5 border border-gray-300 rounded bg-white">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Spot ID
                </th>
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Lot
                </th>
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Status
                </th>
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Vehicle
                </th>
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Duration
                </th>
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Revenue
                </th>
                <th className="px-3 py-3 text-left font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {parkingSpots.map((spot, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-3 py-3 font-medium">{spot.spotId}</td>
                  <td className="px-3 py-3">{spot.lot}</td>
                  <td className="px-3 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                        spot.status
                      )}`}
                    >
                      {spot.status}
                    </span>
                  </td>
                  <td className="px-3 py-3">{spot.vehicle}</td>
                  <td className="px-3 py-3">{spot.duration}</td>
                  <td className="px-3 py-3 font-medium">{spot.revenue}</td>
                  <td className="px-3 py-3">
                    <div className="flex gap-1">
                      <button className="p-1 border-0 bg-transparent cursor-pointer">
                        <Eye className="w-4 h-4 " />
                      </button>
                      <button className="p-1 border-0 bg-transparent cursor-pointer">
                        <SquarePen className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side Panel */}
        <div className="flex flex-col gap-5">
          {/* Occupancy Analytics */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-base font-bold mb-1">Occupancy Analytics</h3>
            <p className="text-sm text-gray-600 mb-5">
              Usage patterns and trends
            </p>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Peak Hours</span>
                <span className="text-sm font-semibold">2-4 PM</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Avg Dwell Time</span>
                <span className="text-sm font-semibold">2h 15m</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Turnover Rate</span>
                <span className="text-sm font-semibold">3.2x/day</span>
              </div>
            </div>
          </div>

          {/* Status Distribution */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-base font-bold mb-4">Status Distribution</h3>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Occupied</span>
                <span className="bg-red-500 text-white px-1.5 py-0.5 rounded text-xs">
                  68%
                </span>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Available</span>
                <span className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-xs">
                  25%
                </span>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Reserved</span>
                <span className="bg-gray-500 text-white px-1.5 py-0.5 rounded text-xs">
                  5%
                </span>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Maintenance</span>
                <span className="bg-gray-500 text-white px-1.5 py-0.5 rounded text-xs">
                  2%
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-base font-bold mb-4">Quick Actions</h3>

            <button className="w-full p-2.5 mb-2.5 bg-transparent border border-gray-300 rounded cursor-pointer text-left flex items-center gap-2">
            <TriangleAlertIcon className="w-5 h-5 text-warning"/> Report Issue
            </button>

            <button className="w-full p-2.5 mb-2.5 bg-transparent border border-gray-300 rounded cursor-pointer text-left flex items-center gap-2">
              <Settings className="w-5 h-5 text-black"/> Bulk Update
            </button>

            <button className="w-full p-2.5 bg-transparent border border-gray-300 rounded cursor-pointer text-left flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-blue-400"/> Sync Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkingManagement;
