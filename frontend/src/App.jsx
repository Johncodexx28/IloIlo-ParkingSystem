import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";
import PartnerDashboard from "./pages/PartnerDashboard";



export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/Admin/*" element={<AdminDashboard />} />
      <Route path="/Partner/*" element={<PartnerDashboard />} />
    </Routes>
  );
}
