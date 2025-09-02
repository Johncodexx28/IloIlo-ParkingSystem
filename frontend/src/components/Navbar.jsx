import logo from "../assets/parking-sign.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-[#ffffff] shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <img
              src={logo}
              alt="IloIlo ParkLink Logo"
              className="w-8 h-8 object-contain"
            />
            <h1 className="font-bold text-lg text-black  hidden sm:block">
              P-Parking IloIlo
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-medium">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link to="/Login" className="btn btn-neutral text-white lg:w-[80px]">
            Login
          </Link>
          <Link to="/Signup" className="btn btn-error text-white lg:w-[80px]">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
