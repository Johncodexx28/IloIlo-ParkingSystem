import { 
  Home, 
  BarChart2, 
  Car, 
  Calendar, 
  Users, 
  Activity, 
  Clock, 
  Settings 
  
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
  { name: "Activity Logs", path: "/Partner/logs", icon: <Clock size={18} /> },
  { name: "Settings", path: "/Partner/settings", icon: <Settings size={18} /> },
];

export const userMenu = [
  { name: "Dashboard Home", path: "/User", icon: <Home size={18} /> },
  { name: "Activity Logs", path: "/User/logs", icon: <Clock size={18} /> },
  { name: "Settings", path: "/User/settings", icon: <Settings size={18} /> },
]