import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'light',
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
});

export default theme;
