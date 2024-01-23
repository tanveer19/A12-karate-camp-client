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
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Karate Camp | Dashboard </title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
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
                <NavLink to="/dashboard/adminhome">
                  <MdHome></MdHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <MdOutlineCalendarMonth></MdOutlineCalendarMonth>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <MdWallet></MdWallet>Manage Classes
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allusers">
                  <MdWallet></MdWallet>Manage Users
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
                <NavLink to="/order/japan"> Order class</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <MdHome></MdHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/"> Reservations</NavLink>
              </li>
              <li>
                <NavLink to="/"> Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <MdShoppingCart></MdShoppingCart> My Cart
                  <span className="badge badge-primary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/japan">Order Class</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
