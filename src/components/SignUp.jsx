import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";

const auth = getAuth(app);

const SignUp = () => {
  // to get and show error in form
  const [error, setError] = useState("");
  //
  const [success, setSuccess] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    //1. prevent refresh
    event.preventDefault();
    // empty after submit
    setSuccess("");

    // 2. collect form data
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    //3. create user in Firebase
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // clearing error message
        setError("");
        event.target.reset();
        setSuccess("User has been created");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">Sign Up </h1>

            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Signup"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Do You have an account?
              <Link className="text-orange-600 font-bold mx-2" to="/login">
                Login
              </Link>
            </p>
            <p className="bg-error">{error}</p>
            <p className="bg-success">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
