import { create } from "zustand";
import axios from "axios";

// Use process.env.NODE_ENV for environment detection
const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/user"
    : "/api/user";

axios.defaults.withCredentials = true;

const useUserStore = create((set) => ({
  // State
  user: null,
  bookings: [],
  bookingsCount: 0,
  loadingUser: false,
  loadingBookings: false,
  loadingBookingsCount: false,
  error: null,

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

  // Manual setters
  setUser: (userData) => set({ user: userData }),
  setBookings: (bookingsData) => set({ bookings: bookingsData }),
  clearUserData: () =>
    set({ user: null, bookings: [], bookingsCount: 0, error: null }),
}));

export default useUserStore;
