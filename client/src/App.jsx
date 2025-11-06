import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import AdminForm from "./components/Admins/BasicAdminFrm";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import BasicAdminFrm from "./components/Admins/BasicAdminFrm";
import Categories from "./components/Admins/Categories";

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
          <Route path="/admin" element={<BasicAdminFrm />}>
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<div>Products</div>} />
            <Route path="customers" element={<div>Customers</div>} />
            <Route path="statistics" element={<div>Statistics</div>} />
          </Route>{" "}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
