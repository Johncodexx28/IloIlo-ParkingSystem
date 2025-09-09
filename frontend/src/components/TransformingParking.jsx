import { motion } from "framer-motion";
import LeafletMap from "../components/map"; // adjust path if needed

const TransformingParking = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      className="px-6 py-16 w-full relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          className="text-center lg:text-left"
          variants={leftContentVariants}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight"
            variants={textVariants}
          >
            Transforming Parking in{" "}
            <motion.span
              className="text-error"
              whileHover={{
                textShadow: "0 0 8px rgba(239, 68, 68, 0.5)",
              }}
            >
              Iloilo City
            </motion.span>
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-600 leading-relaxed"
            variants={textVariants}
          >
            ParkLink is revolutionizing the way people find and pay for parking
            in Iloilo City. Our smart parking solution connects drivers with
            available spaces, reducing traffic congestion and making urban
            mobility more efficient.
          </motion.p>

          <motion.p
            className="mt-4 text-lg text-gray-600 leading-relaxed"
            variants={textVariants}
          >
            With partnerships across major commercial districts, we're building
            a comprehensive network that serves both locals and visitors to our
            beautiful city.
          </motion.p>

          <motion.div className="mt-8" variants={textVariants}>
            <motion.button
              className="btn btn-error text-white px-8 py-3 text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right map */}
        <motion.div
          className="flex justify-center lg:justify-end relative"
          variants={rightContentVariants}
        >
          <motion.div
            className="w-full max-w-md h-80 rounded-2xl shadow-lg overflow-hidden relative z-0"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            initial={{ opacity: 0, rotate: 5 }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LeafletMap />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TransformingParking;
