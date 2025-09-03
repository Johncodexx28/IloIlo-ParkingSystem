import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/auth"
    : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  account: null,
  role: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password, fullname, phone) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        fullname,
        phone,
      });

      set({
        account: response.data.user,
        role: response.data.user.role,
        isAuthenticated: false,
        isLoading: false,
      });

      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Error signing up";
      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });

      if (!response.data.success) {
        throw new Error(response.data.message || "Verification failed");
      }

      set({
        account: response.data.user,
        role: response.data.user.role,
        isAuthenticated: true,
        isLoading: false,
      });

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Error verifying email";
      set({
        error: message,
        isLoading: false,
      });
      toast.error(message);
      throw error;
    }
  },

  login: async (
    email,
    password,
    { role = "driver", companyName = "" } = {}
  ) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
        role,
        companyName,
      });

      set({
        account: response.data.user,
        role: response.data.user.role,
        isAuthenticated: true,
        error: null,
        isLoading: false,
      });

      toast.success(response.data.message || "Login successful");
    } catch (error) {
      const message = error.response?.data?.message || "Error logging in";

      set({
        error: message,
        isLoading: false,
      });

      toast.error(message);
    }
  },

  //common  routes

  checkAuthStatus: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        isAuthenticated: true,
        role: response.data.role,
        account: response.data.account,
        isCheckingAuth: false,
      });
    } catch (err) {
      set({
        isAuthenticated: false,
        role: null,
        account: null,
        isCheckingAuth: false,
      });
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/logout`);

      set({
        account: null,
        role: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });

      toast.success(response.data?.message);
    } catch (error) {
      const message = error.response?.data?.message || "Error logging out";

      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },
}));

export default useAuthStore;
