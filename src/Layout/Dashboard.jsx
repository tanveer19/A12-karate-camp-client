import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  MdClass,
  MdHome,
  MdOutlineCalendarMonth,
  MdShoppingCart,
  MdWallet,
} from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;

  const [isAdmin] = useAdmin();

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

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <MdHome></MdHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">
                  <MdHome></MdHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <MdOutlineCalendarMonth></MdOutlineCalendarMonth>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <MdWallet></MdWallet>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <MdWallet></MdWallet>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <MdWallet></MdWallet>All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <MdShoppingCart></MdShoppingCart> My Cart
                  <span className="badge badge-primary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <MdClass></MdClass> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/japan"> Order class</NavLink>
              </li>
            </>
          ) : (
            <>
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
              <li>
                <NavLink to="/dashboard/allusers">
                  <MdWallet></MdWallet>All Users
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
