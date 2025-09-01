import { 
  Home, 
  BarChart2, 
  Car, 
  Calendar, 
  Users, 
  Activity, 
  Clock, 
  Settings, 
  Square,
  CalendarCheck2,
  PhilippinePeso,
  CreditCard,
  LifeBuoy
  
} from "lucide-react";

export const adminMenu = [
  { name: "Dashboard Home", path: "/Admin", icon: <Home size={18} /> },
  { name: "Revenue & Analytics", path: "/Admin/revenue", icon: <BarChart2 size={18} /> },
  { name: "Parking Management", path: "/Admin/parking", icon: <Car size={18} /> },
  { name: "Reservations", path: "/Admin/reservations", icon: <Calendar size={18} /> },
  { name: "Partners", path: "/Admin/partners", icon: <Users size={18} /> },
  { name: "System Monitoring", path: "/Admin/monitoring", icon: <Activity size={18} /> },
  { name: "Activity Logs", path: "/Admin/logs", icon: <Clock size={18} /> },
  { name: "Settings", path: "/Admin/settings", icon: <Settings size={18} /> },
];

export const partnerMenu = [
  { name: "Dashboard Home", path: "/Partner", icon: <Home size={18} /> },
  { name: "Parking Lots", path: "/Partner/lots", icon: <Square size={18} /> },
  { name: "Reservation", path: "/Partner/reservation", icon: <CalendarCheck2 size={18} /> },
  { name: "Transaction", path: "/Partner/transaction", icon: <PhilippinePeso size={18} /> },
  { name: "Customers", path: "/Partner/customers", icon: <Users size={18} /> },
  { name: "RFID Card", path: "/Partner/rfid-card", icon: <CreditCard size={18} /> },
  { name: "Reports", path: "/Partner/reports", icon: <BarChart2 size={18} /> },
  { name: "Support", path: "/Partner/support", icon: <LifeBuoy size={18} /> },
  { name: "Profile Settings", path: "/Partner/profile-settings", icon: <Settings size={18} /> },
];

export const userMenu = [
  { name: "Dashboard Home", path: "/User", icon: <Home size={18} /> },
  { name: "Find Parking", path: "/User/find-parking", icon: <Clock size={18} /> },
  { name: "My Bookings", path: "/User/my-bookings", icon: <Settings size={18} /> },
  { name: "Payment & Wallets", path: "/User/payment", icon: <Settings size={18} /> },
  { name: "RFID Card", path: "/User/rfid", icon: <Settings size={18} /> },
  { name: "History", path: "/User/history", icon: <Settings size={18} /> },
  { name: "Help & Support", path: "/User/help-support", icon: <Settings size={18} /> },
  { name: "Profile Settings", path: "/User/profile-settings", icon: <Settings size={18} /> },

]