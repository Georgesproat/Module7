import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { MyThemeContext } from "../context/MyThemeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/bitcoin">Bitcoin</NavLink>
        </li>
        <li>
          <NavLink to="/MUIPage">MUI</NavLink>
        </li>

        <ThemeSwitcher />
      </ul>
    </nav>
  );
}
