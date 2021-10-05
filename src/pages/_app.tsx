import React, { ReactElement } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default function MyApp(props: AppProps): ReactElement {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Queerbeet Karlsruhe</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Box display="flex" flexDirection="column">
            <Box minHeight="100vh">
              <Component {...pageProps} />
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}
