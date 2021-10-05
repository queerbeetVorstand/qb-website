import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#12b3e3",
    },
    secondary: {
      main: "#ED6B1B",
    },
    error: {
      main: red.A400,
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true
      }
    }
  }
});

export default theme;
