import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaUsers,
  FaHome,
  FaPlusCircle,
  FaCheckCircle,
  FaChalkboardTeacher,
} from "react-icons/fa";

import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const linkStyle =
    "flex items-center gap-3 px-4 py-3 font-semibold rounded-lg transition-all duration-200 text-base";

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ----------- MAIN CONTENT ----------- */}
      <div className="drawer-content flex flex-col p-4 md:p-10">

        {/* Mobile button */}
        <label
          htmlFor="dashboard-drawer"
          className="btn bg-orange-600 text-white border-none hover:bg-orange-700 drawer-button lg:hidden mb-4"
        >
          Menu
        </label>

        {/* Page Body */}
        <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 min-h-[70vh] w-full overflow-hidden">
          <Outlet />
        </div>
      </div>

      {/* ----------- SIDE DRAWER MENU ----------- */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu p-6 w-72 md:w-80 min-h-full bg-white border-r border-orange-200 shadow-xl space-y-2">

          <h1 className="text-2xl font-extrabold text-orange-600 mb-4">
            Dashboard
          </h1>

          {/* ---- ADMIN LINKS ---- */}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageuser"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-200"
                    }`
                  }
                >
                  <FaUsers /> Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addclass"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-200"
                    }`
                  }
                >
                  <FaPlusCircle /> Add Class
                </NavLink>
              </li>
            </>
          )}

          {/* ---- INSTRUCTOR LINKS ---- */}
          {!isAdmin && isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/addclass"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-200"
                    }`
                  }
                >
                  <FaChalkboardTeacher /> Add Class
                </NavLink>
              </li>
            </>
          )}

          {/* ---- STUDENT LINKS ---- */}
          {!isAdmin && !isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/selectedclass"
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-200"
                    }`
                  }
                >
                  <FaCheckCircle /> Selected Class
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          {/* ---- HOME ---- */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-200"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
