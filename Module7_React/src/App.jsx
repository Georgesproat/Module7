import { useState } from "react";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import MyThemeProvider from "./context/MyThemeContext";
import { MoodProvider } from "./context/MoodContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { newTheme } from "./components/Themes/newTheme";
import { tealTheme } from "./components/Themes/tealTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={newTheme}>
        <MoodProvider>
          <UserProvider>
            <MyThemeProvider>
              <NavBar />
              <AppRoutes />
            </MyThemeProvider>
          </UserProvider>
        </MoodProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
