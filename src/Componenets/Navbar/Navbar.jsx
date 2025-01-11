import { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { TiWeatherSunny } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const { user, logout } = UseAuth();
  const [darkMode, setDarkMode] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await setTimeout(() => navigate("/"), 2000);
      await logout();
    } catch (err) {}
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold px-3 py-2 rounded ${
              isActive
                ? "bg-gradient-to-r from-red-500 to-yellow-500 text-white"
                : "text-base-content hover:bg-orange-500 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-foods"
          className={({ isActive }) =>
            `font-semibold px-3 py-2 rounded ${
              isActive
                ? "bg-gradient-to-r from-red-500 to-yellow-500 text-white"
                : "text-base-content hover:bg-orange-500 hover:text-white"
            }`
          }
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `font-semibold px-3 py-2 rounded ${
              isActive
                ? "bg-gradient-to-r from-red-500 to-yellow-500 text-white"
                : "text-base-content hover:bg-orange-500 hover:text-white"
            }`
          }
        >
          Gallery
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 sticky top-0 z-50 text-white">
      <div className="navbar mx-auto container px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 bg-base-100 rounded-box shadow-lg gap-2 z-20">
              {links}
            </ul>
          </div>
          <p className="normal-case text-xl md:text-3xl lg:text-4xl font-bold text-base-content logo bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent w-[142px]">
            Flavor Tale
          </p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <button
            className="text-2xl cursor-pointer text-base-content btn hover:bg-base-300 btn-circle btn-ghost hover:text-orange-500"
            onClick={toggleDarkMode}
          >
            {darkMode ? <BsMoon /> : <TiWeatherSunny />}
          </button>

          {user ? (
            <>
              <div className="dropdown dropdown-bottom dropdown-end rounded-full">
                <div tabIndex={0} role="button" className="">
                <img
                    src={`${user?.photoURL}`}
                    alt={user?.displayName}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                      <NavLink
                        to="/my-foods"
                        className="block px-4 py-2 text-base-content hover:bg-orange-500 hover:text-white rounded-md"
                      >
                        My Foods
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/add-food"
                        className="block px-4 py-2 text-base-content hover:bg-orange-500 hover:text-white rounded-md"
                      >
                        Add Food
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/my-orders"
                        className="block px-4 py-2 text-base-content hover:bg-orange-500 hover:text-white rounded-md"
                      >
                        My Orders
                      </NavLink>
                    </li>
                </ul>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-orange-600 text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-orange-600 text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-orange-600 text-white"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
