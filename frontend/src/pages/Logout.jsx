import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Logout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
        navigate("/");
      } catch (err) {
        console.error("Logout failed:", err);
        navigate("/");
      }
    };

    handleLogout();
  }, [logout, navigate]);

  return null;
};

export default Logout;
