import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <Link to="/manageuser"><li>Manage User</li></Link>
          <Link to="/addclass"><li>Add Class</li></Link>
          <Link to="/selectedclass"><li>Seleted Class</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;