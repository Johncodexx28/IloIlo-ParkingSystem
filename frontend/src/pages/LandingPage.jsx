import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar fixed only at the top */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Page content (adds padding so it doesn't hide behind navbar) */}
      <div className="flex flex-1 items-center justify-center overflow-hidden pt-16">
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
