import { Home } from "lucide-react";
import { useState, useEffect } from "react";

const Error404Page = () => {
  const [lightColor, setLightColor] = useState("red");

  // Traffic light animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLightColor((prev) => {
        if (prev === "red") return "yellow";
        if (prev === "yellow") return "green";
        return "red";
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg mx-auto">
          {/* Traffic Light */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 shadow-xl">
              <div className="space-y-2 sm:space-y-3">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-500 ${
                    lightColor === "red"
                      ? "bg-red-500 shadow-red-400 shadow-lg scale-110"
                      : "bg-red-300 opacity-50"
                  }`}
                ></div>
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-500 ${
                    lightColor === "yellow"
                      ? "bg-yellow-400 shadow-yellow-300 shadow-lg scale-110"
                      : "bg-yellow-300 opacity-50"
                  }`}
                ></div>
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-500 ${
                    lightColor === "green"
                      ? "bg-green-500 shadow-green-400 shadow-lg scale-110"
                      : "bg-green-300 opacity-50"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          

          {/* 404 Text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none mb-3 sm:mb-4">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Page Not Found
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Back Button */}
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
