import { NavLink } from "react-router-dom";
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
import logo from "../../assets/parking-sign.png"; // ✅ FIXED PATH

const links = [
  { name: "Dashboard Home", path: "/AdminDashboard", icon: <Home size={18} /> },
  { name: "Revenue & Analytics", path: "/AdminDashboard/revenue", icon: <BarChart2 size={18} /> },
  { name: "Parking Management", path: "/AdminDashboard/parking", icon: <Car size={18} /> },
  { name: "Reservations", path: "/AdminDashboard/reservations", icon: <Calendar size={18} /> },
  { name: "Partners", path: "/AdminDashboard/partners", icon: <Users size={18} /> },
  { name: "System Monitoring", path: "/AdminDashboard/monitoring", icon: <Activity size={18} /> },
  { name: "Activity Logs", path: "/AdminDashboard/logs", icon: <Clock size={18} /> },
  { name: "Settings", path: "/AdminDashboard/settings", icon: <Settings size={18} /> },
];

const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-white text-gray-900 flex flex-col border-r  border-gray-200 ">
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-5 border-b  border-gray-200">
        <img src={logo} alt="ParkLink Logo" className="w-8 h-8 object-contain" />
        <h1 className="text-lg font-bold">ParkLink Admin</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition 
              ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
