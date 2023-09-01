import React from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useAuth(); // Replace this with your authentication logic
  const navigate = useNavigate();
  const location = useLocation();

  if (!auth.user) {
    // Redirect to the /login page and save the current location
    // for a smoother user experience after login.
    navigate("/login", { state: { from: location } });
    return null; // You can also return a loading spinner or message here
  }

  return children;
}

export default RequireAuth;
