import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import PostsPage from "../pages/PostsPage";
import BitcoinPage from "../pages/BitcoinPage";
import LoginPage from "../pages/LoginPage";
import { PostList } from "../pages/PostsPage";
import { Post } from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage {...props} />} />

      <Route path="/home" element={<Homepage {...props} />} />

      <Route path="/dash" element={<DashboardPage {...props} />} />

      <Route path="posts/*" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>

      <Route path="/bitcoin" element={<BitcoinPage {...props} />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;












