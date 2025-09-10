import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Car,
  Plus,
  Eye,
  Settings,
  ParkingCircle,
  Navigation,
  QrCode,
} from "lucide-react";

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
  const cardNumber = "0000-0000-0000-000";
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            RFID Card Management
          </h1>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Plus size={20} />
            Request Card
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
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-left p-8">
            {/* Front Side */}
            <div className="relative">
              <div className="text-xs text-gray-600 mb-2 text-center">
                Front Side
              </div>
              <div className="relative w-80 h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #B71C1C 0%, #D32F2F 50%, #B71C1C 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 1px,
                rgba(255,255,255,0.1) 1px,
                rgba(255,255,255,0.1) 2px
              )`,
                  }}
                />

                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0,0,0,0.2) 0%, transparent 50%)`,
                  }}
                />

                <div className="relative z-10 h-full flex flex-col justify-center text-white">
                  <div className="absolute top-4 left-4 text-sm font-bold font-mono tracking-wider bg-black/30 px-2 py-1 rounded">
                    {cardNumber}
                  </div>

                  <div className="flex items-center gap-3 justify-center">
                    <ParkingCircle
                      size={32}
                      className="text-white drop-shadow-lg"
                    />
                    <div
                      className="text-3xl font-bold tracking-wide drop-shadow-lg"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      P Parking
                    </div>
                  </div>

                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    }}
                  />
                </div>

                <div className="absolute inset-0 rounded-2xl border border-white/20" />
              </div>
            </div>

            {/* Back Side */}
            {/* <div className="relative">
              <div className="text-xs text-gray-600 mb-2 text-center">
                Back Side
              </div>
              <div className="relative w-80 h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #B71C1C 0%, #D32F2F 50%, #B71C1C 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 1px,
                rgba(255,255,255,0.1) 1px,
                rgba(255,255,255,0.1) 2px
              )`,
                  }}
                />

                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-6 grid-rows-4 h-full w-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-center">
                        <Car size={16} className="text-white" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">RFID PARKING CARD</div>
                    <div className="text-xs leading-relaxed opacity-90">
                      Hold card near reader to access parking facilities.
                      <br />
                      Keep card secure and report if lost or stolen.
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="text-xs opacity-75">
                        Card ID: {cardNumber}
                      </div>
                      <div className="text-xs opacity-75">
                        Valid until: 01/01/2026
                      </div>
                    </div>

                    <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                      <QrCode size={20} className="text-red-800" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border border-white/20" />
              </div>
            </div> */}
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
          {/* Modals */}
          <AnimatePresence>
            {isOpen && (
              <Dialog
                static
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/10 "
                />

                {/* Modal container */}
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg space-y-6"
                  >
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                      Request a Card
                    </DialogTitle>

                    <Description className="text-sm text-gray-500">
                      Fill out the details below to request your new card.
                    </Description>

                    {/* Form Fields */}
                    <form className="space-y-4">
                      {/* Dropdown: Site Claiming */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Site Claiming
                        </label>
                        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                          <option value="">Select a site</option>
                          <option value="iloilo">Iloilo Branch</option>
                          <option value="manila">Manila Branch</option>
                          <option value="cebu">Cebu Branch</option>
                        </select>
                      </div>

                      {/* Payment Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Payment Amount
                        </label>
                        <input
                          type="number"
                          placeholder="Enter payment amount"
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>

                      {/* Actions */}
                      <div className="flex justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700"
                        >
                          Submit Request
                        </button>
                      </div>
                    </form>
                  </DialogPanel>
                </div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RFIDCardManagement;
