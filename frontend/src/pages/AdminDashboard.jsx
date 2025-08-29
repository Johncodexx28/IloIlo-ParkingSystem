import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar";

// Sections
import DashboardHome from "./admin/DashboardHome";
import RevenueAnalytics from "./admin/RevenueAnalytics";
import ParkingManagement from "./admin/ParkingManagement";
import ReservationsManager from "./admin/ReservationsManager";
import PartnersManager from "./admin/PartnersManager";
import SystemMonitoring from "./admin/SystemMonitoring";
import ActivityLogs from "./admin/ActivityLogs";
import AdminSettings from "./admin/AdminSettings";

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
