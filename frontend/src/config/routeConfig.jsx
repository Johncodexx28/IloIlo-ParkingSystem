import DashboardHome from "../pages/admin/DashboardHome.jsx";
import RevenueAnalytics from "../pages/admin/RevenueAnalytics.jsx";
import ParkingManagement from "../pages/admin/ParkingManagement.jsx";
import ReservationsManager from "../pages/admin/ReservationsManager.jsx";
import PartnersManager from "../pages/admin/PartnersManager.jsx";
import SystemMonitoring from "../pages/admin/SystemMonitoring.jsx";
import ActivityLogs from "../pages/admin/ActivityLogs.jsx";
import AdminSettings from "../pages/admin/AdminSettings.jsx";

export const adminRoutes = [
  { path: "/Admin", element: <DashboardHome /> }, // default /Admin
  { path: "revenue", element: <RevenueAnalytics /> },
  { path: "parking", element: <ParkingManagement /> },
  { path: "reservations", element: <ReservationsManager /> },
  { path: "partners", element: <PartnersManager /> },
  { path: "monitoring", element: <SystemMonitoring /> },
  { path: "logs", element: <ActivityLogs /> },
  { path: "settings", element: <AdminSettings /> },
];