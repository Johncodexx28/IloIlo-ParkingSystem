import { useState } from "react";
import ActionMenu from "../../components/ActionMenu.jsx";
import ModalForm from "../../components/Modals/ModalForm";
import useUserStore from "../../store/userStore.js";
import {
  Car,
  Plus,
  Eye,
  Settings,
  ParkingCircle,
  Navigation,
  QrCode,
  Loader,
  EllipsisVertical,
} from "lucide-react";
import { useEffect } from "react";

const RFIDCardManagement = () => {
  const {
    loading,
    fetchRequests,
    createRFIDRequest,
    error,
    request,
    partners,
    fetchPartners,
  } = useUserStore();
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

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
            onClick={() => setActiveModal("RequestRFID")}
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
                  <button className=" text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 ">
                    <ActionMenu />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Modals */}

          <ModalForm
            isOpen={activeModal === "RequestRFID"}
            onClose={() => setActiveModal(null)}
            title="Request RFID Card"
            description="Fill in the details below to request an RFID card."
            showDefaultActions={false}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const siteValue = e.target.claimingSite.value; // e.g., "partnerId|SiteName"
                const [partnerId, claimingSite] = siteValue.split("|");

                if (!partnerId || !claimingSite) {
                  console.error("Invalid claiming site value");
                  return;
                }

                try {
                  await createRFIDRequest(partnerId, claimingSite); // pass explicitly
                  setActiveModal(null);
                } catch (err) {
                  console.error("Failed to request RFID:", err);
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Customer Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-400"
                  />
                </div>

                {/* Vehicle */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Vehicle
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="Enter vehicle model / plate number"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-400"
                  />
                </div>

                {/* Company Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Company Name
                  </label>
                  <select
                    name="partnerId"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white
               focus:border-red-500 focus:ring-2 focus:ring-red-400"
                  >
                    <option value="">Select a Company</option>
                    {partners.map((partner) => (
                      <option key={partner._id} value={partner._id}>
                        {partner.companyName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Claiming Site Type */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Claiming Site
                  </label>
                  <select
                    name="claimingSite"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:border-red-500 focus:ring-2 focus:ring-red-400"
                  >
                    <option value="">Select a claiming site</option>
                    {partners.flatMap((partner) =>
                      partner.claimingSites.map((site) => (
                        <option
                          key={`${partner._id}-${site}`}
                          value={`${partner._id}|${site}`}
                        >
                          {partner.companyName} – {site}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              {/* custom actions */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 text-sm font-medium rounded-lg bg-red-600 text-white shadow-md hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    "Request RFID"
                  )}
                </button>
              </div>
            </form>
          </ModalForm>
        </div>
      </div>
    </div>
  );
};

export default RFIDCardManagement;
