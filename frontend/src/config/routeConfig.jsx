import DashboardHome from "../pages/admin/DashboardHome.jsx";
import RevenueAnalytics from "../pages/admin/RevenueAnalytics.jsx";
import ParkingManagement from "../pages/admin/ParkingManagement.jsx";
import ReservationsManager from "../pages/admin/ReservationsManager.jsx";
import PartnersManagement from "../pages/admin/PartnersManagement.jsx";
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
import FindParking from "../pages/user/FindParking.jsx";
import MyBookings from "../pages/user/MyBooking.jsx";
import Payment from "../pages/user/Payment.jsx";
import Rfid from "../pages/user/Rfid.jsx";
import History from "../pages/user/History.jsx";
import HelpSupport from "../pages/user/Help&Support.jsx";
import UserProfileSettings from "../pages/user/ProfileSetting.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";

export const adminRoutes = [
  { path: "/", element: <DashboardHome /> }, // default /Admin
  { path: "revenue", element: <RevenueAnalytics /> },
  { path: "parking", element: <ParkingManagement /> },
  { path: "reservations", element: <ReservationsManager /> },
  { path: "partners", element: <PartnersManagement /> },
  { path: "monitoring", element: <SystemMonitoring /> },
  { path: "logs", element: <ActivityLogs /> },
  { path: "settings", element: <AdminSettings /> },
  { path: "*", element: <NotFoundPage /> },
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
  { path: "*", element: <NotFoundPage /> },
];

export const userRoutes = [
  { path: "/", element: <UserDashboard /> }, // default /User
  { path: "find-parking", element: <FindParking /> },
  { path: "my-bookings", element: <MyBookings /> },
  { path: "payment", element: <Payment /> },
  { path: "rfid", element: <Rfid /> },
  { path: "history", element: <History /> },
  { path: "help-support", element: <HelpSupport /> },
  { path: "profile-settings", element: <UserProfileSettings /> },
  { path: "*", element: <NotFoundPage /> },
];
