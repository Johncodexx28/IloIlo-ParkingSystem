import { motion } from "framer-motion";
import { UserPlus, MapPin } from "lucide-react";
import ParkingLot from "../assets/road.jpg";

const Hero = () => {
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

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:pt-28 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ParkingLot})`,
      }}
    >
      <motion.div
        className="items-center min-h-screen max-w-6xl mx-auto w-full pd-20 relative mt-20"
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
              className="inline-flex items-center mb-2 px-4 py-2 rounded-full bg-blue-100 text-red-400 text-sm font-medium"
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
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
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
            className="mt-6 text-lg text-gray-200"
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
            >
              <UserPlus size={20} />
              Partner with us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
