import DashboardHome from "../pages/admin/DashboardHome.jsx";
import RevenueAnalytics from "../pages/admin/RevenueAnalytics.jsx";
import ParkingManagement from "../pages/admin/ParkingManagement.jsx";
import ReservationsManager from "../pages/admin/ReservationsManager.jsx";
import PartnersManager from "../pages/admin/PartnersManager.jsx";
import SystemMonitoring from "../pages/admin/SystemMonitoring.jsx";
import ActivityLogs from "../pages/admin/ActivityLogs.jsx";
import AdminSettings from "../pages/admin/AdminSettings.jsx";
import PartnerDashboardHome from "../pages/partner/PartnerDashboardHome.jsx";
import PartnerLogs from "../pages/partner/PartnerLogs.jsx";
import PartnerSettings from "../pages/partner/PartnerSettings.jsx";
import UserDashboard from "../pages/user/UserDashboard.jsx";
import Userlogs from "../pages/user/UserLogs.jsx";
import UserSettings from "../pages/user/UserSettings.jsx";

export const adminRoutes = [
  { path: "/", element: <DashboardHome /> }, // default /Admin
  { path: "revenue", element: <RevenueAnalytics /> },
  { path: "parking", element: <ParkingManagement /> },
  { path: "reservations", element: <ReservationsManager /> },
  { path: "partners", element: <PartnersManager /> },
  { path: "monitoring", element: <SystemMonitoring /> },
  { path: "logs", element: <ActivityLogs /> },
  { path: "settings", element: <AdminSettings /> },
];

export const partnerRoutes = [
  { path: "/", element: <PartnerDashboardHome /> }, // default /Partner
  { path: "logs", element: <PartnerLogs /> },
  { path: "settings", element: <PartnerSettings /> },
]

export const userRoutes = [
  { path: "/", element: <UserDashboard /> }, // default /User
  { path: "logs", element: <Userlogs /> },
  { path: "settings", element: <UserSettings /> },
];