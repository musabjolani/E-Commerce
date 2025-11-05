import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    secondary: { main: "#44dbceff" },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
