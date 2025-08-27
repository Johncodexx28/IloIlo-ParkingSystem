import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

export default function App() {
  return (
<<<<<<< HEAD
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
=======
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AdminDashboard/*" element={<AdminDashboard />} />
    </Routes>
>>>>>>> 3a60f013f5259fd740b8ad6be3587f57f29d92f0
  );
}
