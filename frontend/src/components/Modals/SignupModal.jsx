import { useState } from "react";
import { Mail, Lock, User, Phone, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReusableModal from "../../layouts/ReusableModal.jsx";
import Input from "../Input.jsx";
import { useAuthStore } from "../../store/authStore.js";

const SignUpModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const { signup, isLoading, error } = useAuthStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup({ fullname, phone, email, password });
  };

  return (
    <motion.div>
      {/* Trigger Button */}
      <button
        onClick={() => setModalIsOpen(true)}
        className="btn btn-error text-white lg:w-[100px]"
      >
        Sign Up
      </button>

      <ReusableModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        title="Sign Up"
      >
        <form className="space-y-4" onSubmit={handleSignup}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <Input
            icon={Phone}
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

          <motion.button
            type="submit"
            className="mt-5 w-full py-3 bg-green-600 text-white font-bold rounded-lg
              hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400
              focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              "Sign Up"
            )}
          </motion.button>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          {/* Link to Login */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </ReusableModal>
    </motion.div>
  );
};

export default SignUpModal;
