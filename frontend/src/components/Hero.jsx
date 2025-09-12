import { motion } from "framer-motion";
import { useState } from "react";
import ParkingSpace from "../assets/space.jpg";
import { Select } from "@headlessui/react";
import {
  UserPlus,
  MapPin,
  Calendar,
  Clock,
  Tag,
  Search,
  Shield,
  Car,
  CreditCard,
} from "lucide-react";

const Hero = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const bookingFormVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleBookNow = () => {
    console.log("Booking details:", {
      location: selectedLocation,
      checkIn: { date: checkInDate, time: checkInTime },
      checkOut: { date: checkOutDate, time: checkOutTime },
      promoCode: promoCode,
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center px-6 md:pt-28 pb-32 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ParkingSpace})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="items-center max-w-6xl mx-auto lg:w-[900px] p-10 rounded-2xl relative 
        bg-gray-600/20 backdrop-blur-sm "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-center">
            {/* Smart Parking Solution Badge */}
            <motion.div
              className="mb-2 flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center mb-2 px-4 py-2 rounded-full 
             bg-white/20 backdrop-blur-3xl 
             border border-white/30 
             text-white text-sm font-medium 
             shadow-lg"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                }}
              >
                <motion.span
                  className="mr-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  🚀
                </motion.span>
                Smart Parking Solution
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl  font-extrabold text-white leading-tight"
              variants={itemVariants}
            >
              Find{" "}
              <motion.span
                className="text-red-400"
                whileHover={{
                  textShadow: "0 0 8px rgba(248, 113, 113, 0.8)",
                }}
              >
                Reserve
              </motion.span>{" "}
              & Pay <br className="hidden md:block" />
              for Parking in{" "}
              <motion.span
                className="text-red-400"
                whileHover={{
                  textShadow: "0 0 8px rgba(248, 113, 113, 0.8)",
                }}
              >
                Iloilo City
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-200 mb-12"
              variants={itemVariants}
            >
              Connecting drivers, parking spaces, and businesses anytime,
              anywhere.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-error text-white flex items-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Reserve a Spot
              </motion.button>
              <motion.button
                className="btn btn-neutral flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => console.log("Navigate to partnership request")}
              >
                <UserPlus size={20} />
                Partner with us
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Booking Form - Overlapping */}
      <motion.div
        className="relative z-0 -mt-24 px-6"
        variants={bookingFormVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="shadow-lg p-6 md:p-8 bg-gray-100 backdrop-blur-2xl text-black rounded-lg"
            whileHover={{
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
              scale: 1.01,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Book Now</h2>
              <p className="text-gray-700">
                Reserve your parking spot instantly
              </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-start">
              {/* Location Selection */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium mb-2">
                  SELECT LOCATION
                </label>
                <select
                  name="status"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-black rounded-md bg-white text-black focus:ring-2 focus:ring-red-600 outline-none text-sm transition"
                >
                  <option value="">Iloilo City</option>
                  <option value="sm-city">SM City Iloilo</option>
                  <option value="robinsons">Robinsons Place Iloilo</option>
                  <option value="ayala">Atria Park District</option>
                  <option value="downtown">Downtown Iloilo</option>
                </select>
              </div>

              {/* Check In */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium mb-2">
                  CHECK IN
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="lg:w-full flex-1 px-3 py-2 border border-black rounded-md bg-white text-black focus:ring-2 focus:ring-red-600 outline-none text-sm"
                  />
                  <select
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                    className="lg:w-30 px-3 py-2 border border-black rounded-md bg-white text-black focus:ring-2 focus:ring-red-600 outline-none text-sm"
                  >
                    <option value="">10:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Check Out */}
              <div className="lg:col-span-1 ">
                <label className="block text-sm font-medium mb-2">
                  CHECK OUT
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="lg:w-full flex-1 px-3 py-2 border border-black rounded-md bg-white text-black focus:ring-2 focus:ring-red-600 outline-none text-sm"
                  />
                  <select
                    value={checkOutTime}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                    className="lg:w-30 px-3 py-2 border border-black rounded-md bg-white text-black focus:ring-2 focus:ring-red-600 outline-none text-sm"
                  >
                    <option value="">06:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="lg:col-start-5 flex lg:justify-start md:justify-end  mt-6  ">
                <motion.button
                  onClick={handleBookNow}
                  className="w-full md:w-[160px] bg-red-600 text-white font-semibold py-2 px-6  transition-colors duration-200 flex items-center  gap-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5" />
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
