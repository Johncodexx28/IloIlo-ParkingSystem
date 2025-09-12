import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

// Use process.env.NODE_ENV for environment detection
const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/user"
    : "/api/user";

axios.defaults.withCredentials = true;

const useUserStore = create((set) => ({
  user: null,
  bookings: [],
  requests: [],
  partners: [],
  bookingsCount: 0,
  loadingUser: false,
  loadingBookings: false,
  loadingBookingsCount: false,
  error: null,
  request: null,
  loading: false,

  // Actions
  fetchUserProfile: async () => {
    set({ loadingUser: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/profile`);
      set({ user: data });
    } catch (err) {
      console.error(err);
      set({ error: err.message });
    } finally {
      set({ loadingUser: false });
    }
  },

  fetchUserBookings: async () => {
    set({ loadingBookings: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/bookings`);
      set({ bookings: data });
    } catch (err) {
      console.error(err);
      set({ error: err.message });
    } finally {
      set({ loadingBookings: false });
    }
  },

  fetchBookingsQuantity: async () => {
    set({ loadingBookingsCount: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/bookings-quantity`);
      set({ bookingsCount: data.bookingsCount });
    } catch (err) {
      console.error(err);
      set({ error: err.message });
    } finally {
      set({ loadingBookingsCount: false });
    }
  },

  setUser: (userData) => set({ user: userData }),
  setBookings: (bookingsData) => set({ bookings: bookingsData }),
  clearUserData: () =>
    set({ user: null, bookings: [], bookingsCount: 0, error: null }),

  createRFIDRequest: async (partnerId, claimingSite) => {
    console.log("Sending RFID request:", { partnerId, claimingSite });
    set({ loading: true, error: null });

    try {
      const response = await axios.post(
        `${API_URL}/request_rfidTag`,
        { partnerId, claimingSite },
        { withCredentials: true }
      );

      const rfidRequest = response.data.data;

      set({
        request: rfidRequest,
        loading: false,
        error: null,
      });

      toast.success(
        response.data.message || "RFID request submitted successfully!"
      );

      return rfidRequest;
    } catch (err) {
      console.error("Failed to request RFID:", err);

      
      const message = err.response?.data?.message || err.message;

      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });

      toast.error(message);
      console.error("Failed to request RFID:", message);

      throw err;
    }
  },

  fetchPartners: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/getpartner-data`);
      set({ partners: data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Fetch all requests of the logged-in user
  fetchRequests: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/my-requests`);
      set({ requests: data });
    } catch (err) {
      console.error(err);
      set({ error: err.response?.data?.message || err.message });
    } finally {
      set({ loading: false });
    }
  },

  checkIfRequested: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/check`);
      set({ request: data }); // returns existing request if found
      return data;
    } catch (err) {
      console.error(err);
      set({ error: err.response?.data?.message || err.message });
      return null;
    } finally {
      set({ loading: false });
    }
  },

  // Cancel a request
  cancelRequest: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/cancel/${id}`);
      set((state) => ({
        requests: state.requests.filter((req) => req._id !== id),
        request: null,
      }));
    } catch (err) {
      console.error(err);
      set({ error: err.response?.data?.message || err.message });
    } finally {
      set({ loading: false });
    }
  },
  clearRequests: () => set({ requests: [], request: null, error: null }),
}));

export default useUserStore;
