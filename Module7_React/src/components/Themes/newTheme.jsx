import { createTheme } from "@mui/material/styles";

export const newTheme = createTheme({
  palette: {
    primary: { main: "#FF0000", contrastText: "#efefef" }, 
    secondary: { main: "#3CA899", contrastText: "#ffffff" }
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 }
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } }
  }
});
