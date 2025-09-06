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

  login: async (email, password, { role = "user", companyName = "" } = {}) => {
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

  forgotPassword: async (email, role) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password/${role}`, {
        email,
      });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      const message =
        error.response?.data?.message || "Error sending reset password email";
      set({
        isLoading: false,
        error: message,
      });
      toast.error(message);
      throw error;
    }
  },

  resetPassword: async (token, role, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `${API_URL}/reset-password/${role}/${token}`,
        { password }
      );
      set({ message: response.data.message, isLoading: false });
      toast.success(response.data.message); // success toast
    } catch (error) {
      const message =
        error.response?.data?.message || "Error resetting password";

      set({
        isLoading: false,
        error: message,
      });

      toast.error(message); // 👈 always show backend message
      throw error;
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
