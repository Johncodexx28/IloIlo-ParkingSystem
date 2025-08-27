import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* KUNG MAG ADD KA D ANOTHER PAGE LIKE DASHBOARD SUNDON MO NA ANG ARA SA BABAW ANG PATH IS 
        /dashboard tapos iimport mo ang dashboard diri na component tapos and element ya is and variable pag import mo like for example LANDINGPAGE sulod mo sa element */}
      </Routes>
    </div>
  );
}

export default App;
