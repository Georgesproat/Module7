import { useState } from "react";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import MyThemeProvider from "./context/MyThemeContext";
import { MoodProvider } from "./context/MoodContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoodProvider>
        <UserProvider>
          <MyThemeProvider>
            <NavBar />
            <AppRoutes />
          </MyThemeProvider>
        </UserProvider>
      </MoodProvider>
    </>
  );
}

export default App;
