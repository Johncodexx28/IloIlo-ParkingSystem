import { UserPlus, MapPin } from "lucide-react";
import ReserveModal from "./ReserveModal";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            IloIlo <span className="text-error">ParkLink</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 ">
            Connecting drivers, parking spaces, and businesses anytime,
            anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              className="btn btn-error text-white flex items-center"
              onClick={() => setModalIsOpen(true)}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Reserve a Spot
            </button>
            <button className="btn btn-neutral flex items-center gap-2">
              <UserPlus size={20} />
              Partner with us
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://cdn.pixabay.com/animation/2024/10/25/13/15/13-15-04-397_512.gif"
            alt="Parking illustration"
            className="max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
