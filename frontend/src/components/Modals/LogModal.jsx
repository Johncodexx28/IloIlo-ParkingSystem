import { useState } from "react";
import { Mail, Lock, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReusableModal from "../../layouts/ReusableModal.jsx";
import Input from "../Input.jsx";
import { useAuthStore } from "../../store/authStore.js";

const LoginModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div>
      {/* Trigger Button */}
      <button
        onClick={() => setModalIsOpen(true)}
        className="btn btn-neutral text-white lg:w-[80px]"
      >
        Login
      </button>

      <ReusableModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        title="Login"
      >
        <form className="space-y-4" onSubmit={handleLogin}>
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

          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="mt-5 w-full py-3 bg-blue-600 text-white font-bold rounded-lg
              hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400
              focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              "Login"
            )}
          </motion.button>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </form>
      </ReusableModal>
    </motion.div>
  );
};

export default LoginModal;
