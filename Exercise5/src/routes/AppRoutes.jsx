import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import PostDetail from "../pages/PostDetail";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/post/:id" element={<PostDetail />} />
      
    </Routes>
  );
}

export default AppRoutes;