import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import {   FaUsers, FaHome } from 'react-icons/fa';

const DashBoard = () => {
  return (
   

    <div className="drawer lg:drawer-open bg-orange-200 py-12">
      <input id="my-drawer-2 " type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center px-12">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><NavLink to="/dashboard/manageuser"><FaUsers></FaUsers>Manage User</NavLink></li>
          <li><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
          <li><NavLink to="/dashboard/selectedclass">Seleted Class</NavLink></li>
          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;