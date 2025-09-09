import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TransformingParking from "../components/TransformingParking";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed only at the top */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Main content container */}
      <div className="flex-1">
        <Hero />
        <Features />
        <TransformingParking />
      </div>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default LandingPage;
