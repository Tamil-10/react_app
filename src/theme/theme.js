import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    // primary: {
    //   main: "#1565c0"
    // },
    // secondary: { main: "#673ab7" },
    error: { main: "#ca0909" },
    status: {
      danger: "#b71c1c"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

export default theme;
