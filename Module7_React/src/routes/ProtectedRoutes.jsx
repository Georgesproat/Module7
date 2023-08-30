import { Outlet, Navigate, Route } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import React from "react";

function ProtectedRoute({ redirectPath = "/", children }) {
  const { currentUser } = useUserContext();

  if (!currentUser.name) {
    return <Navigate to={redirectPath} replace />;
  }

  // Works for both nested and standalone routes
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
