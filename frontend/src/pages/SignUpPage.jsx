import { motion } from "framer-motion";
import Input from "../components/Input.jsx";
import { Loader, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter.jsx";
import logo from "../assets/parking-sign.png";

const SignUpPage = () => {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, fullname, phone);
      navigate("/verify-email");
    } catch (error) {
      navigate("/signup");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center justify-center gap-1">
            <img src={logo} alt="business-logo" className="h-8 w-8" />
            Create Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
            />
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

            <Input
              icon={Phone}
              type="text"
              placeholder="09XXXXXXXXX"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhone(value);
                }
              }}
              pattern="^09\d{9}$"
              title="Phone number should start with 09 and be 11 digits long (e.g., 09123456789)"
              maxLength={11}
            />

            <PasswordStrengthMeter password={password} />

            <motion.button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 
                         transition duration-200 disabled:opacity-50"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="animate-spin mx-auto" size={24} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>

        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-900 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
