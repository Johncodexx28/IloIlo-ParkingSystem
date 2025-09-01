import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/parking-sign.png";

import { adminMenu, partnerMenu, userMenu } from "../config/navigationConfig";

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  let menu = [];
  let title = "";

  if (location.pathname.startsWith("/Admin")) {
    menu = adminMenu;
    title = "ParkLink Admin";
  } else if (location.pathname.startsWith("/Partner")) {
    menu = partnerMenu;
    title = "ParkLink Partner";
  } else if (location.pathname.startsWith("/User")) {
    menu = userMenu;
    title = "ParkLink User";
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-20 lg:hidden bg-white p-2 rounded-md shadow-md border border-gray-200"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-15 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-white text-gray-900 flex flex-col border-r border-gray-200 z-16 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 p-5 border-b border-gray-200">
          <img src={logo} alt="ParkLink Logo" className="w-8 h-8 object-contain" />
          <h1 className="text-lg font-bold">{title}</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              onClick={closeSidebar} // Close sidebar when nav item is clicked on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition 
                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;