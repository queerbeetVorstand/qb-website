import { client } from "@/client";
import "@/faust.config";
import Footer from "@/sections/Footer";
import theme from "@/theme";
import { FaustProvider } from "@faustjs/next";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { ReactElement } from "react";

declare module "@mui/styles/defaultTheme" {
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
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Head>
          <title>Queerbeet Karlsruhe</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Box display="flex" flexDirection="column">
              <Box
                minHeight="100vh"
                sx={{
                  background: `linear-gradient(180deg,#fef9f9,#fff)`,
                }}
              >
                <Component {...pageProps} />
              </Box>
              <Footer />
            </Box>
          </ThemeProvider>
        </StyledEngineProvider>
      </FaustProvider>
    </>
  );
}
