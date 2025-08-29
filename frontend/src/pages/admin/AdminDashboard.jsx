import { Routes, Route } from "react-router-dom";
import Sidebar from "../../layouts/SideBar";

// Sections
import DashboardHome from "./sections/DashboardHome";
import RevenueAnalytics from "./sections/RevenueAnalytics";
import ParkingManagement from "./sections/ParkingManagement";
import ReservationsManager from "./sections/ReservationsManager";
import PartnersManager from "./sections/PartnersManager";
import SystemMonitoring from "./sections/SystemMonitoring";
import ActivityLogs from "./sections/ActivityLogs";
import AdminSettings from "./sections/AdminSettings";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          {/* Default child at /dashboard */}
          <Route index element={<DashboardHome />} />
          <Route path="revenue" element={<RevenueAnalytics />} />
          <Route path="parking" element={<ParkingManagement />} />
          <Route path="reservations" element={<ReservationsManager />} />
          <Route path="partners" element={<PartnersManager />} />
          <Route path="monitoring" element={<SystemMonitoring />} />
          <Route path="logs" element={<ActivityLogs />} />
          <Route path="settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
}
