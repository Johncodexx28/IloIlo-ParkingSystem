import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/parking-sign.png";
import { adminMenu, partnerMenu, userMenu } from "../config/navigationConfig";

const SideBar = () => {
  const location = useLocation();

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

  return (
    <aside className="w-64 h-screen bg-white text-gray-900 flex flex-col border-r border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-5 border-b border-gray-200">
        <img src={logo} alt="ParkLink Logo" className="w-8 h-8 object-contain" />
        <h1 className="text-lg font-bold">{title}</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition 
              ${isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`
            }
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
