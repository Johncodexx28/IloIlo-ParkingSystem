import { useState } from "react";
import { Plus, Eye, Settings, Navigation } from "lucide-react";

const RFIDCardManagement = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "ParkLink Standard",
      rfidNumber: "RFID-123456789",
      balance: 500,
      expires: "2025-01-10",
      status: "active",
    },
  ]);

  const [requests] = useState([
    {
      id: 1,
      type: "Premium Card Request",
      requestedDate: "2024-01-12",
      pickup: "SM City Iloilo - Customer Service",
      status: "Ready for Pickup",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            RFID Card Management
          </h1>
          <button
            onClick={() => alert("testing:")}
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Plus size={20} />
            Request New Card
          </button>
        </div>

        {/* My RFID Cards Section */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              My RFID Cards
            </h2>
            <p className="text-gray-600">Manage your active parking cards</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">{cards[0].name}</h3>
                <p className="text-blue-100 opacity-90">
                  {cards[0].rfidNumber}
                </p>
              </div>
              <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">
                {cards[0].status}
              </span>
            </div>

            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-blue-100 opacity-90 text-sm mb-1">Balance</p>
                <p className="text-3xl font-bold">₱{cards[0].balance}</p>
              </div>
              <div className="text-right">
                <p className="text-blue-100 opacity-90 text-sm mb-1">Expires</p>
                <p className="text-lg font-semibold">{cards[0].expires}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex gap-3">
                <button className="bg-transparent backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all">
                  <Plus size={16} />
                  Top Up
                </button>
                <button className="bg-transparent backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all">
                  <Eye size={16} />
                  History
                </button>
                <button className="bg-transparent backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all">
                  <Settings size={16} />
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Requests Section */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Card Requests
            </h2>
            <p className="text-gray-600">Track your RFID card requests</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {request.type}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Requested on {request.requestedDate}
                  </p>
                  <p className="text-sm text-gray-600">
                    Pickup: {request.pickup}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {request.status}
                  </span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <Navigation size={16} />
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFIDCardManagement;
