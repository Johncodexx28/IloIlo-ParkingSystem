import { motion } from "framer-motion";
import { Search, Car, CreditCard } from "lucide-react";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const features = [
    {
      icon: Search,
      title: "Find Parking",
      description:
        "Instantly locate available parking spaces near your destination.",
      color: "text-error",
    },
    {
      icon: Car,
      title: "Reserve Ahead",
      description:
        "Book your parking spot in advance and avoid last-minute stress.",
      color: "text-error",
    },
    {
      icon: CreditCard,
      title: "Pay Securely",
      description:
        "Enjoy cashless transactions with safe and fast online payments.",
      color: "text-error",
    },
  ];

  return (
    <motion.section
      className="px-6 py-16 mt-16 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        variants={headerVariants}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Choose{" "}
          <motion.span
            className="text-error"
            whileHover={{
              textShadow: "0 0 8px rgba(239, 68, 68, 0.5)",
            }}
          >
            P-Parking?
          </motion.span>
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Experience the future of parking with our comprehensive solution
          designed for modern urban mobility.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        variants={containerVariants}
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <IconComponent
                  className={`w-12 h-12 mx-auto ${feature.color} mb-4`}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Features;
