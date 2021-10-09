import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, blueGrey } from "@mui/material/colors";

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#b337a2",
      },
      secondary: {
        main: blueGrey[800],
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 400
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 400
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 400
      },
      h4: {
        fontSize: "1.2rem",
        fontWeight: 400
      },
      h5: {
        fontSize: "1.0rem",
        fontWeight: 400
      },
      h6: {
        fontSize: "1.0rem",
        fontWeight: 400
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
      MuiButton: {
        defaultProps: {
          variant: "outlined",
          color: "primary",
        },
      },
    },
  })
);

export default theme;
