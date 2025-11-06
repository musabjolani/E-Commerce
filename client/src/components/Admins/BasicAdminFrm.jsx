import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // added

const BasicAdminFrm = () => {
  const [value, setValue] = useState("1");
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(String(newValue));
  };

  const Pages = ["Categories", "Products", "Customers", "Statistics"];
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <nav>
          {Pages.map((page, index) => (
            <Link
              key={page}
              to={`/admin/${page.toLowerCase()}`}
              style={{
                textDecoration: "none",
                padding: "12px 16px",
                color:
                  value === String(index + 1)
                    ? theme.palette.secondary.main // use theme color
                    : "inherit",
                borderBottom:
                  value === String(index + 1)
                    ? `2px solid ${theme.palette.secondary.main}` // use theme color
                    : "none",
              }}
              onClick={() => setValue(String(index + 1))}
            >
              {page}
            </Link>
          ))}
        </nav>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default BasicAdminFrm;
