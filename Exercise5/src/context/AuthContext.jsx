// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // In a real implementation, you would validate user credentials
    // and obtain an authentication token from a server.
    // For simplicity, we're just setting a user object here.
    setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here and reset the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
