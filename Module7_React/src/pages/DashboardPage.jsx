import { useNavigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ActivityFinder from "../components/ActivityFinder";
import RefCounter from "../components/RefCounter";
import VideoPlayer from "../components/VideoPlayer";
import ReducerCounter from "../components/ReducerCounter";
import PostListReducer from "../components/PostListReducer";
import React from "react";


export default function DashboardPage() {
  
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <ActivityFinder />
      <RefCounter />
      <VideoPlayer />
      <ReducerCounter />
      <PostListReducer />
      <Outlet />
    </div>
  );
}

export function DashboardMessages(props) {
  const { currentUser } = useUserContext();
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentUser.name}</p>
    </div>
  );
}
export function DashboardTasks(props) {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" }
  ];

  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
