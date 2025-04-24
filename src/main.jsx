import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import AuthProvider from "./providers/AuthProvider";
import Home from "./components/Home";
import Instructors from "./components/Instructors";
import Classes from "./components/Classes";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Profile from "./components/Profile";
import Dashboard from "./Layout/Dashboard";
import AllUsers from "./pages/Dashboard/AllUsers/AllUsers";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminHome from "./pages/Dashboard/AdminHome/AdminHome";
import Payment from "./pages/Dashboard/Payment/Payment";
import Order from "./pages/Order/Order";
import MyCart from "./pages/Dashboard/MyCart/MyCart";
import ClassCard from "./components/ClassCard";
import Class from "./components/Class";
import Main from "./Layout/Main";
import AddItem from "./pages/Dashboard/AddItem/AddItem.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";
import ManageItems from "./pages/Dashboard/ManageItems/ManageItems.jsx";
import UserHome from "./pages/Dashboard/UserHome/UserHome.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@smastrom/react-rating/style.css";
import UpdateItem from "./pages/Dashboard/UpdateItem/UpdateItem.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/class",
        element: <Class></Class>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
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
        path: "/additem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // admin routes

      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>,
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://2-21-a12-summer-camp-server.vercel.app/classes/${params.id}`
          ),
      },
      {
        path: "classcard",
        element: <ClassCard></ClassCard>,
      },

      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
