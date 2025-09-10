import { useState } from "react";
import {
  Eye,
  Edit,
  Settings,
  Plus,
  RefreshCw,
  QrCode,
  Monitor,
  Camera,
  Menu,
  X,
} from "lucide-react";

const ParkingLotsManagement = () => {
  const [selectedLot, setSelectedLot] = useState("All Parking Lots");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const parkingLots = [
    {
      id: 1,
      name: "SM City Iloilo - Main Parking",
      location: "Ground Floor, Building A",
      occupancy: { current: 387, total: 450 },
      available: 63,
      rate: "₱50",
      todayRevenue: "₱4,250",
      peakHours: "12PM - 4PM",
      occupancyPercent: 86,
    },
    {
      id: 2,
      name: "SM City Iloilo - Level 2",
      location: "Second Floor, Building A",
      occupancy: { current: 298, total: 380 },
      available: 82,
      rate: "₱45",
      todayRevenue: "₱2,800",
      peakHours: "2PM - 6PM",
      occupancyPercent: 78,
    },
    {
      id: 3,
      name: "SM City Iloilo - VIP Parking",
      location: "Ground Floor, VIP Section",
      occupancy: { current: 42, total: 50 },
      available: 8,
      rate: "₱100",
      todayRevenue: "₱1,400",
      peakHours: "11AM - 3PM",
      occupancyPercent: 84,
    },
  ];

  const integrationTools = [
    {
      id: 1,
      title: "Entrance QR Code",
      description: "Generate QR for lot entrance",
      icon: QrCode,
      action: "Generate QR",
    },
    {
      id: 2,
      title: "Auto-Gate Control",
      description: "Automated entry/exit system",
      icon: Monitor,
      action: "Configure",
    },
    {
      id: 3,
      title: "License Plate Scanner",
      description: "Automatic vehicle recognition",
      icon: Camera,
      action: "Setup",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">
            Parking Management
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-3">
            <select
              value={selectedLot}
              onChange={(e) => setSelectedLot(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option>All Parking Lots</option>
              {parkingLots.map((lot) => (
                <option key={lot.id} value={lot.name}>
                  {lot.name}
                </option>
              ))}
            </select>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              <Plus size={20} />
              Add New Lot
            </button>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center mb-6 xl:mb-8">
          <h1 className="text-2xl xl:text-3xl font-bold text-gray-900">
            Parking Lots Management
          </h1>
          <div className="flex gap-4 items-center">
            <select
              value={selectedLot}
              onChange={(e) => setSelectedLot(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white min-w-0"
            >
              <option>All Parking Lots</option>
              {parkingLots.map((lot) => (
                <option key={lot.id} value={lot.name}>
                  {lot.name}
                </option>
              ))}
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 whitespace-nowrap">
              <Plus size={20} />
              <span className="hidden xl:inline">Add New Lot</span>
              <span className="xl:hidden">Add</span>
            </button>
          </div>
        </div>

        {/* Parking Lots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {parkingLots.map((lot) => (
            <div
              key={lot.id}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base truncate">
                    {lot.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {lot.location}
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 ml-2"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Occupancy
                  </span>
                  <span className="text-xs sm:text-sm font-medium">
                    {lot.occupancy.current}/{lot.occupancy.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        (lot.occupancy.current / lot.occupancy.total) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Available</p>
                  <p className="text-base sm:text-lg font-semibold text-green-600">
                    {lot.available}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Rate/Hour</p>
                  <p className="text-base sm:text-lg font-semibold">
                    {lot.rate}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Today's Revenue
                  </p>
                  <p className="text-base sm:text-lg font-semibold">
                    {lot.todayRevenue}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Peak Hours</p>
                  <p className="text-base sm:text-lg font-semibold">
                    {lot.peakHours}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Eye size={14} className="sm:hidden" />
                  <Eye size={16} className="hidden sm:block" />
                  <span className="hidden sm:inline">View</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Edit size={14} className="sm:hidden" />
                  <Edit size={16} className="hidden sm:block" />
                  <span className="hidden sm:inline">Edit</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Settings size={14} className="sm:hidden" />
                  <Settings size={16} className="hidden sm:block" />
                  <span className="hidden sm:inline">Manage</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Stacked on mobile, side by side on desktop */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 xl:grid-cols-2 lg:gap-8">
          {/* Integration Tools */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Integration Tools
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                QR codes and automated systems for your parking lots
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {integrationTools.map((tool) => (
                <div
                  key={tool.id}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex-shrink-0">
                        <tool.icon
                          size={20}
                          className="sm:hidden text-gray-600"
                        />
                        <tool.icon
                          size={24}
                          className="hidden sm:block text-gray-600"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          {tool.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                    <button className="px-3 sm:px-4 py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-800 whitespace-nowrap ml-2">
                      {tool.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Occupancy */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
              <div className="mb-3 sm:mb-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Real-time Occupancy
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Live view of parking spot status
                </p>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg self-start sm:self-auto">
                <RefreshCw size={14} className="sm:hidden" />
                <RefreshCw size={16} className="hidden sm:block" />
                <span className="hidden sm:inline">Refresh Status</span>
                <span className="sm:hidden">Refresh</span>
              </button>
            </div>

            <div className="space-y-4">
              {parkingLots.map((lot) => (
                <div
                  key={lot.id}
                  className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                >
                  <div className="flex justify-between items-start sm:items-center mb-2">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base min-w-0 flex-1 mr-2">
                      {lot.name}
                    </h3>
                    <span className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                      {lot.occupancyPercent}% occupied
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${lot.occupancyPercent}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                    <span>Available: {lot.available}</span>
                    <span>Occupied: {lot.occupancy.current}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingLotsManagement;
