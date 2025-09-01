import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar";
import { partnerRoutes } from "../config/routeConfig.jsx";
import {partnerMenu} from "../config/navigationConfig.jsx";

export default function PartnerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        links={partnerMenu} 
        title="Partner Dashboard"
      />
      <div className="lg:ml-64 pt-16 lg:pt-6 px-6 pb-6">
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