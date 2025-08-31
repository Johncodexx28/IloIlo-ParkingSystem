import DashboardHome from "../pages/admin/DashboardHome.jsx";
import RevenueAnalytics from "../pages/admin/RevenueAnalytics.jsx";
import ParkingManagement from "../pages/admin/ParkingManagement.jsx";
import ReservationsManager from "../pages/admin/ReservationsManager.jsx";
import PartnersManager from "../pages/admin/PartnersManager.jsx";
import SystemMonitoring from "../pages/admin/SystemMonitoring.jsx";
import ActivityLogs from "../pages/admin/ActivityLogs.jsx";
import AdminSettings from "../pages/admin/AdminSettings.jsx";
import PartnerDashboardHome from "../pages/partner/PartnerDashboardHome.jsx";
import ParkingLots from "../pages/partner/ParkingLots.jsx";  
import Reservation from "../pages/partner/Reservation.jsx";
import Transaction from "../pages/partner/Transaction.jsx";
import Customers from "../pages/partner/Customers.jsx";
import RfidCard from "../pages/partner/RfidCard.jsx";
import Reports from "../pages/partner/Reports.jsx";
import Support from "../pages/partner/Support.jsx";
import ProfileSettings from "../pages/partner/ProfileSettings.jsx";
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
  { path: "lots", element: <ParkingLots /> },
  { path: "reservation", element: <Reservation /> },
  { path: "transaction", element: <Transaction /> },
  { path: "customers", element: <Customers /> },
  { path: "rfid-card", element: <RfidCard /> },
  { path: "reports", element: <Reports /> },
  { path: "support", element: <Support /> },
  { path: "profile-settings", element: <ProfileSettings /> },
]

export const userRoutes = [
  { path: "/", element: <UserDashboard /> }, // default /User
  { path: "logs", element: <Userlogs /> },
  { path: "settings", element: <UserSettings /> },
];