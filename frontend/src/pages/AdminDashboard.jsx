import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar.jsx";
import { adminRoutes } from "../config/routeConfig.jsx";
import { adminMenu } from "../config/navigationConfig.jsx";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
      links={adminMenu} 
      title="Admin Dashboard" />
      
      {/* Fixed main content area with responsive margins and padding */}
      <div className="lg:ml-64 pt-16 lg:pt-6 px-6 pb-6">
        <Routes>
          {adminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              index={route.index}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}