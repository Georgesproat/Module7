// Login.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth(); // Use the useAuth hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = () => {
    if (email && password && name) {
      // Call the login function from useAuth
      login({ email, name });

      navigate("/home");
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <form>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
