import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, blueGrey } from "@mui/material/colors";

// Create a theme instance.
const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: "#ED6B1B",
    },
    secondary: {
      main: blueGrey[800],
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Hello';
          font-style: normal;
          font-weight: 400;
          src: local('Hello'), url(/fonts/hello.otf) format('opentype');
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
  },
}));

export default theme;
