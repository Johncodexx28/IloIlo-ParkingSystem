import { Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/SideBar";
import { userRoutes } from "../config/routeConfig.jsx";
import {userMenu} from "../config/navigationConfig.jsx";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        links={userMenu} 
        title="User Dashboard"
      />
      <div className="lg:ml-64 pt-16 lg:pt-6 px-6 pb-6">
        <Routes>
          {userRoutes.map((route, index) => (
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