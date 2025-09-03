import { Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";
import PartnerDashboard from "./pages/PartnerDashboard";
import UserDashboard from "./pages/UserDashboard";
import NotFoundPage from "./components/NotFoundPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignupPage.jsx";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";

import { useEffect } from "react";
import { useAuthStore } from "./store/authStore.js";
import Logout from "./pages/Logout.jsx";

export default function App() {
  useEffect(() => {
    useAuthStore.getState().checkAuthStatus();
  }, []);

  const ProtectedRoute = ({ children, role }) => {
    const { isAuthenticated, account, role: userRole } = useAuthStore();

    if (!isAuthenticated) {
      if (role === "admin") return <Navigate to="/login_admin" replace />;
      if (role === "partner") return <Navigate to="/login_partner" replace />;
      return <Navigate to="/login" replace />; // regular user
    }

    if (!account?.isVerified) {
      return <Navigate to="/verify-email" replace />;
    }

    if (role && userRole !== role) {
      return <Navigate to="/" replace />;
    }

    return children;
  };
  const RedirectAuthenticatedUser = ({ children }) => {
    const {
      isAuthenticated,
      account,
      role: userRole,
      isCheckingAuth,
    } = useAuthStore();

    if (isCheckingAuth) return null;

    if (isAuthenticated && account?.isVerified) {
      switch (userRole) {
        case "admin":
          return <Navigate to="/Admin" replace />;
        case "partner":
          return <Navigate to="/Partner" replace />;
        case "user":
          return <Navigate to="/User" replace />;
        default:
          return <Navigate to="/" replace />;
      }
    }

    return children;
  };

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/Login"
        element={
          <RedirectAuthenticatedUser>
            <LoginPage />
          </RedirectAuthenticatedUser>
        }
      />
      <Route
        path="/Signup"
        element={
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
        }
      />
      <Route path="/verify-email" element={<EmailVerificationPage />} />

      {/* Protected Dashboards */}
      <Route
        path="/Admin/*"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Partner/*"
        element={
          <ProtectedRoute role="partner">
            <PartnerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/User/*"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/logout" element={<Logout />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
