import { UserPlus, MapPin, Car, CreditCard, Search } from "lucide-react";
import ReserveModal from "./ReserveModal";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 md:pt-28 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full pd-20">

        {/* Left content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Find <span className="text-error">Reserve</span> & Pay <br className="hidden md:block" />
            for Parking in <span className="text-error">Iloilo City</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Connecting drivers, parking spaces, and businesses anytime, anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
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

      {/* Features Section */}
  
      <section className="px-6 py-16 mt-16 bg-gray-50 w-full">


        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose <span className="text-error">ParkLink?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Experience the future of parking with our comprehensive solution
            designed for modern urban mobility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Search className="w-12 h-12 mx-auto text-error mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Find Parking</h3>
            <p className="mt-2 text-gray-600">
              Instantly locate available parking spaces near your destination.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Car className="w-12 h-12 mx-auto text-error mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Reserve Ahead</h3>
            <p className="mt-2 text-gray-600">
              Book your parking spot in advance and avoid last-minute stress.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <CreditCard className="w-12 h-12 mx-auto text-error mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Pay Securely</h3>
            <p className="mt-2 text-gray-600">
              Enjoy cashless transactions with safe and fast online payments.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
