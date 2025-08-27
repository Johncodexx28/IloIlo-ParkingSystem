import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AdminDashboard/*" element={<AdminDashboard />} />
    </Routes>
  );
}
