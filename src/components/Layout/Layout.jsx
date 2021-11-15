import React from "react";
import Box from "@mui/material/Box";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <Box component='main' height={1} display='flex' flexDirection='column'>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
