import React from "react";
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function HomePage() {
  return (
    <div>
      <h1>Media Post App</h1>
      <PostList /> 
      <Outlet/>
      
    </div>
  );
}

export default HomePage;
