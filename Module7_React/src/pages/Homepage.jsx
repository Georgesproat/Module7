import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import ClockDisplay from "../components/Clock";
import { Outlet } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <h1>Home</h1>
      <ClockDisplay />
      <button onClick={() => navigate("/dash")}>Dashboard</button>
      <Outlet />
    </div>
  );
}
