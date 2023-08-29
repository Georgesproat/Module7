import React, { useState, useContext } from "react"; 
import { useUserContext } from "../context/UserContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { MyThemeContext } from "../context/MyThemeContext";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme, darkMode } = useContext(MyThemeContext); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ name: userName });
    }
  };

  if (currentUser.name) {
    return (
      <>
        <p>Welcome {currentUser.name}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );
  }

  return (
    <div
      className="LoginForm componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <ThemeSwitcher />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
        {submitResult && <p>{submitResult}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
