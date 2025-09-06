import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams, Link } from "react-router-dom";
import Input from "../components/Input.jsx";
import { Lock } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/parking-sign.png";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, error, isLoading, message } = useAuthStore();

  const { role, token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(token, role, password);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center justify-center gap-1">
              <img src={logo} alt="app-logo" className="h-8 w-8" />
              Reset Password
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                icon={Lock}
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Input
                icon={Lock}
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
              >
                {isLoading ? "Resetting..." : "Set New Password"}
              </motion.button>
            </form>

            <Toaster position="top-center" />
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Remembered your password?{" "}
              <Link
                to="/login"
                className="text-red-900 font-medium hover:underline transition duration-200"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
