import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import yokuLogo from "../../assets/yoku.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/instructors">Instructors</NavLink></li>
      <li><NavLink to="/classes">Classes</NavLink></li>
      {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
    </>
  );

  return (
    <div className="w-full shadow bg-base-100 sticky top-0 z-50">

      <div className="navbar max-w-7xl mx-auto px-4 justify-between flex">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 bg-base-100 shadow rounded-box w-56 z-50">
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={yokuLogo} alt="logo" className="h-10 md:h-14 object-contain" />
          </Link>
        </div>

        {/* CENTER — Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold text-lg gap-4">
            {navLinks}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Avatar + Logout */}
          {user ? (
            <div className="flex items-center gap-2">

              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img
                  src={user.photoURL}
                  className="w-9 h-9 rounded-full border object-cover"
                  alt="User"
                />
              </div>

              <button
                onClick={logOut}
                className="btn btn-sm bg-green-500 text-white hover:bg-green-600 whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm bg-green-500 text-white hover:bg-green-600">
              Login
            </Link>
          )}

        </div>
      </div>

    </div>
  );
};

export default Navbar;
