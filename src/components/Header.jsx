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
        <img src="/images/karate-camp-logo.png" className="w-16" alt="" />
      </Link>
      <li>
        <Link to="/">
          <h3 className="font-bold text-2xl">Karate Camp</h3>
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

      {user && (
        <li>
          <Link to="/dashboard/mycart">
            <button className="btn gap-2">
              <FaCartPlus></FaCartPlus>
              <div className="badge badge-primary">+{cart?.length || 0}</div>
            </button>
          </Link>
        </li>
      )}

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
    <div className="navbar md:justify-center max-w-7xl mx-auto">
      {/* mobile */}
      <div className="navbar-start sm:hidden">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
      </div>
      {/* desktop */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 items-center">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Header;
