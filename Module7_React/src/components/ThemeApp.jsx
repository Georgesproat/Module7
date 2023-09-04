import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { newTheme } from "./Themes/newTheme";

function ThemedApp() {
  return (
    <ThemeProvider theme={newTheme}>
      <div>
        <h1>Red Theme Example</h1>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <TextField label="Red Input Field" />
        <p>
          This is some text with a <a href="#">red link</a>.
        </p>
      </div>
    </ThemeProvider>
  );
}

export default ThemedApp;
