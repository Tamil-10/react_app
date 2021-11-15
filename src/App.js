import React, { Component } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Box component='main' height={1} display='flex' flexDirection='column'>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <User />
        </Box>
      </Box>
    );
  }
}
