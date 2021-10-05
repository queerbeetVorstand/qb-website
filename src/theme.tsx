import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const creamcake = {
  fontFamily: 'CreamCake',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('Cream Cake'),
    url(/fonts/cream_cake.otf) format('otf')
  `
};

const hello = {
  fontFamily: 'Hello',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('Hello'),
    url(/fonts/hello.otf) format('otf')
  `
};

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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [creamcake, hello],
      },
    },
  },
});

export default theme;
