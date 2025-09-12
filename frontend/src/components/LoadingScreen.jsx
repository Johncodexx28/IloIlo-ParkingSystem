import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react"; // Lucide spinner

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Lucide Spinner */}
      <Loader2 className="w-12 h-12 text-red-500 animate-spin" />

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
        <div
          className="h-[50px] bg-red-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Text */}
      <p className="mt-1 text-gray-600 font-medium">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
