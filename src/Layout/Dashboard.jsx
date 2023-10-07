import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  MdHome,
  MdOutlineCalendarMonth,
  MdShoppingCart,
  MdWallet,
} from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/home">
              <MdHome></MdHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <MdOutlineCalendarMonth></MdOutlineCalendarMonth>Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <MdWallet></MdWallet>Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <MdShoppingCart></MdShoppingCart> My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <MdHome></MdHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/class"> Our Class</NavLink>
          </li>
          <li>
            <NavLink to="/order/japan"> Order class</NavLink>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
