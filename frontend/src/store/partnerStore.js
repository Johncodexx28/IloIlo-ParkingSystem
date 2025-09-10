import { create } from "zustand";
import axios from "axios";

// Use process.env.NODE_ENV for environment detection
const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/partner"
    : "/api/partner";

axios.defaults.withCredentials = true;

const usePartnerStore = create((set) => ({
  // Partner info
  partnerId: null,
  companyName: "",
  claimingSites: [],

  // RFID requests
  rfidRequests: [],
  loading: false,
  error: null,

  // Actions
  setPartner: (data) =>
    set({
      partnerId: data.partnerId,
      companyName: data.companyName,
      claimingSites: data.claimingSites,
    }),

  fetchRFIDRequests: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${API_URL}/getRFIDrequest`);

      const formatted = res.data.map((r) => ({
        id: `REQ-${r._id.slice(-6)}`,
        userId: r.user?._id || "",
        customer: r.user?.fullname || "Unknown",
        email: r.user?.email || "",
        phone: "",
        vehicle: "",
        requestDate: new Date(r.requestedAt).toLocaleDateString(),
        time: new Date(r.requestedAt).toLocaleTimeString([], {
          hour: "2-digit",  
          minute: "2-digit",
        }),
        cardType: "Parking Access Card",
        status: r.status.charAt(0).toUpperCase() + r.status.slice(1),
        rfidNumber: r.user?.rfidTag || "",
        claimingSite: r.claimingSite,
        company: r.partner?.companyName || "",
        raw: r, // optional: keep raw data if needed
      }));

      set({ rfidRequests: formatted, loading: false });
    } catch (err) {
      console.error("Failed to fetch RFID requests", err);
      set({ error: err.message, loading: false });
    }
  },

  assignUserRFIDAction: async (userId, rfidNumber) => {
    set({ loading: true, error: null });
    try {
      await axios.put(`${API_URL}/assignRFID`, { userId, rfidNumber });
      const store = usePartnerStore.getState();
      await store.fetchRFIDRequests();
      console.log(userId, rfidNumber);
      set({ loading: false });
    } catch (err) {
      console.error("Failed to assign RFID:", err);
      set({ error: err.message, loading: false });
    }
  },
}));

export default usePartnerStore;
