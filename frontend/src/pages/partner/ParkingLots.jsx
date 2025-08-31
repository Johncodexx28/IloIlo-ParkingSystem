import React, { useState } from 'react';
import { Eye, Edit, Settings, Plus, RefreshCw, QrCode, Monitor, Camera } from 'lucide-react';

const ParkingLotsManagement = () => {
  const [selectedLot, setSelectedLot] = useState('All Parking Lots');

  const parkingLots = [
    {
      id: 1,
      name: 'SM City Iloilo - Main Parking',
      location: 'Ground Floor, Building A',
      occupancy: { current: 387, total: 450 },
      available: 63,
      rate: '₱50',
      todayRevenue: '₱4,250',
      peakHours: '12PM - 4PM',
      occupancyPercent: 86
    },
    {
      id: 2,
      name: 'SM City Iloilo - Level 2',
      location: 'Second Floor, Building A',
      occupancy: { current: 298, total: 380 },
      available: 82,
      rate: '₱45',
      todayRevenue: '₱2,800',
      peakHours: '2PM - 6PM',
      occupancyPercent: 78
    },
    {
      id: 3,
      name: 'SM City Iloilo - VIP Parking',
      location: 'Ground Floor, VIP Section',
      occupancy: { current: 42, total: 50 },
      available: 8,
      rate: '₱100',
      todayRevenue: '₱1,400',
      peakHours: '11AM - 3PM',
      occupancyPercent: 84
    }
  ];

  const integrationTools = [
    {
      id: 1,
      title: 'Entrance QR Code',
      description: 'Generate QR for lot entrance',
      icon: QrCode,
      action: 'Generate QR'
    },
    {
      id: 2,
      title: 'Auto-Gate Control',
      description: 'Automated entry/exit system',
      icon: Monitor,
      action: 'Configure'
    },
    {
      id: 3,
      title: 'License Plate Scanner',
      description: 'Automatic vehicle recognition',
      icon: Camera,
      action: 'Setup'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Parking Lots Management</h1>
        <div className="flex gap-4 items-center">
          <select 
            value={selectedLot}
            onChange={(e) => setSelectedLot(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
          >
            <option>All Parking Lots</option>
            {parkingLots.map(lot => (
              <option key={lot.id} value={lot.name}>{lot.name}</option>
            ))}
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
            <Plus size={20} />
            Add New Lot
          </button>
        </div>
      </div>

      {/* Parking Lots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {parkingLots.map((lot) => (
          <div key={lot.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{lot.name}</h3>
                <p className="text-sm text-gray-600">{lot.location}</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Occupancy</span>
                <span className="text-sm font-medium">{lot.occupancy.current}/{lot.occupancy.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gray-900 h-2 rounded-full" 
                  style={{width: `${(lot.occupancy.current / lot.occupancy.total) * 100}%`}}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Available</p>
                <p className="text-lg font-semibold text-green-600">{lot.available}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rate/Hour</p>
                <p className="text-lg font-semibold">{lot.rate}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">Today's Revenue</p>
                <p className="text-lg font-semibold">{lot.todayRevenue}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Peak Hours</p>
                <p className="text-lg font-semibold">{lot.peakHours}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                <Eye size={16} />
                View
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                <Edit size={16} />
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                <Settings size={16} />
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Integration Tools */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Integration Tools</h2>
            <p className="text-gray-600">QR codes and automated systems for your parking lots</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {integrationTools.map((tool) => (
              <div key={tool.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <tool.icon size={24} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{tool.title}</h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">
                    {tool.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Occupancy */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Real-time Occupancy</h2>
              <p className="text-gray-600">Live view of parking spot status</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
              <RefreshCw size={16} />
              Refresh Status
            </button>
          </div>

          <div className="space-y-4">
            {parkingLots.map((lot) => (
              <div key={lot.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{lot.name}</h3>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {lot.occupancyPercent}% occupied
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full" 
                    style={{width: `${lot.occupancyPercent}%`}}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Available: {lot.available}</span>
                  <span>Occupied: {lot.occupancy.current}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingLotsManagement;