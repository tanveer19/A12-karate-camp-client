import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaFistRaised, FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  //TODO: load users from server to have dynamic isAdmin based on data
  const isAdmin = true;
  // const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/">
                    <FaHome></FaHome>Myclass
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers>All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <FaHome></FaHome>Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/">
                    <FaFistRaised></FaFistRaised>Class
                  </NavLink>
                </li>
              </>
            )}
            {/* Sidebar content here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
