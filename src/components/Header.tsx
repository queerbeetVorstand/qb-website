import React, { ReactElement } from "react";
import Box from '@material-ui/core/Box';
import GlobalNavigation from "./GlobalNavigation";
import NavigationItem from "./NavigationItem";

export default function Header(): ReactElement {
  return (
    <Box display="flex" justifyContent="flex-end">
        <Box display="flex" alignItems="center">
          <GlobalNavigation>
            <NavigationItem destinationUrl="/">Startseite</NavigationItem>
            <NavigationItem destinationUrl="/about">Über uns</NavigationItem>
          </GlobalNavigation>
        </Box>
    </Box>
  );
}
