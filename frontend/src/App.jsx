import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";
import PartnerDashboard from "./pages/PartnerDashboard";
import UserDashboard from "./pages/UserDashboard";
import NotFoundPage from "./components/NotFoundPage.jsx";
import LoadingScreen from "./components/LoadingScreen"; // ⬅️ Import the loading screen

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        // Show loading screen first
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        // When loading is done, show routes
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Admin/*" element={<AdminDashboard />} />
          <Route path="/Partner/*" element={<PartnerDashboard />} />
          <Route path="/User/*" element={<UserDashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}  
    </>
  );
}
