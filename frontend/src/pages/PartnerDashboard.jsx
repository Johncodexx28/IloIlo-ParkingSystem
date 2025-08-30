import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar";
import { partnerRoutes } from "../config/routeConfig.jsx";
import {partnerMenu} from "../config/navigationConfig.jsx";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        links={partnerMenu} 
        title="Partner Dashboard"
      />
      <div className="flex-1 p-6">
        <Routes>
          {partnerRoutes.map((route, index) => (
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