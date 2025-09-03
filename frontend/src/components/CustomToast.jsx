// CustomToast.jsx
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

const CustomToast = ({ t, message, type = "info", duration = 4000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (t.visible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 100 / (duration / 100);
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [t.visible, duration]);

  // ✅ choose color based on type
  const borderColor =
    type === "success"
      ? "border-green-500"
      : type === "error"
      ? "border-red-500"
      : "border-blue-500";

  const progressColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`bg-white shadow-lg border-l-4 ${borderColor} rounded-lg p-4 w-80 relative`}
    >
      <p className="text-gray-800">{message}</p>

      {/* Close button */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <div
          className={`h-1 ${progressColor}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CustomToast;
