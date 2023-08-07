import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/dashboard/">Dashboard</Link>
      </li>

      <li>
        <Link to="/Instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>

      <li>
        <Link to="/profile">Profile</Link>
      </li>

      <li>
        <Link to="/AddAClass">AddAClass</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaCartPlus></FaCartPlus>
            <div className="badge badge-primary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user && (
        <div>
          <img src={user.photoURL} alt="" style={{ width: "60px" }} />
        </div>
      )}

      <li>
        {user ? (
          <>
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="btn btn-xs self-center w-fit"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#06b6d4] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <Link to="/">
        <img src="/images/karate-camp.png" className="w-16" alt="" />
      </Link>
    </div>
  );
};

export default Header;
