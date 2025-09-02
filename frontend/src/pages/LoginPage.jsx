import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input.jsx";
import { useAuthStore } from "../store/authStore";
import logo from "../assets/parking-sign.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full  flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center justify-center gap-1">
              <img src={logo} alt="business-logo" className="h-8 w-8" />
              Login
            </h2>

            <form onSubmit={handleLogin}>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-end mb-6">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition duration-200"
                >
                  Forgot password?
                </Link>
              </div>

              {error && (
                <p className="text-red-600 text-sm mb-4 text-center font-medium">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-5 h-5 animate-spin mx-auto" />
                ) : (
                  "Login"
                )}
              </motion.button>
            </form>
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-900 font-medium hover:underline transition duration-200"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
