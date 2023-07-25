import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./error-page";
import AuthProvider from "./providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import Instructors from "./components/Instructors";
import Classes from "./components/Classes";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Profile from "./components/Profile";
import AddAClass from "./components/AddAClass";
import Dashboard from "./Layout/Dashboard";
import MyClass from "./pages/Dashboard/MyCart/MyClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/AddAClass",
        element: (
          <PrivateRoute>
            <AddAClass></AddAClass>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
