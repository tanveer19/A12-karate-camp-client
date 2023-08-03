import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
    </div>
  );
};

export default AdminHome;
