import React from "react";
import { Mail, Search, ShoppingBag, Settings, LogOut } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg select-none">
              D
            </div>
            <span className="font-semibold text-xl text-gray-800 select-none">
              Dashboard
            </span>
          </div>

          {/* Middle: Search */}
          <div className="flex-1 max-w-lg mx-6">
            <div className="relative text-gray-600 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} />
              </div>
              <input
                type="search"
                name="search"
                placeholder="Search..."
                className="block w-full bg-gray-100 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-600 focus:placeholder-gray-400"
              />
            </div>
          </div>

          {/* Right side: Icons */}
          <div className="flex items-center space-x-6 text-gray-600">
            {/* Email */}
            <button
              aria-label="Email"
              className="hover:text-red-600 transition-colors"
            >
              <Mail size={24} />
            </button>

            {/* Shopping Bag */}
            <button
              aria-label="Shopping Bag"
              className="hover:text-red-600 transition-colors"
            >
              <ShoppingBag size={24} />
            </button>

            {/* Settings */}
            <button
              aria-label="Settings"
              className="hover:text-red-600 transition-colors"
            >
              <Settings size={24} />
            </button>

            {/* Logout */}
            <button
              aria-label="Logout"
              className="hover:text-red-600 transition-colors"
            >
              <LogOut size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
