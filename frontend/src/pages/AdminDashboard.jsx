import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar.jsx";
import { adminRoutes } from "../config/routeConfig.jsx";
import { adminMenu } from "../config/navigationConfig.jsx";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar links={adminMenu} title="Admin Dashboard" />
      <div className="flex-1 p-6">
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
