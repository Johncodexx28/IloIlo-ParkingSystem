import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300); // 🚀 finish after 300ms
          return 100;
        }
        return prev + 5; // faster increments
      });
    }, 50); // fast updates

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Car Lottie Animation */}
      <DotLottieReact
        src="https://lottie.host/0a93e78f-52e6-4365-ac1b-d5e05a3efc8f/R6gl8Dtj3o.lottie"
        autoplay
        style={{ width: 400, height:400 }}
      />

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Text */}
      <p className="mt-1 text-gray-600 font-medium">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
