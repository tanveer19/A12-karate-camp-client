import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <Link to="/">
        <img src="/images/Ultimate-Gym-logo-2.png" className="w-16" alt="" />
      </Link>
      <li>
        <Link to="/">
          <h3 className="font-bold text-2xl">Ultimate Gym</h3>
        </Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/class">Class</Link>
      </li>

      <li>
        <Link to="/Instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/order/japan">Order</Link>
      </li>

      {user && (
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            Dashboard
          </Link>
        </li>
      )}

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
    <div className="navbar container">
      <div className="navbar-start">
        <div className="dropdown z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal px-1 items-center">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Header;
