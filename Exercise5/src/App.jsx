import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
