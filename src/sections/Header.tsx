import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import QBLogo from "@/ui/QBLogo";
import Link from "@/ui/Link";
import GlobalNavigation from "@/ui/GlobalNavigation";
import NavigationItem from "@/ui/NavigationItem";

export default function Header(): ReactElement {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #E65C6A, #E6B678, #F3F39E, #338041, #5A5AE1, #7B3176)",
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <Box
        pt={{ xs: 1.2, sm: 1.5 }}
        display="flex"
        justifyContent="flex-end"
        sx={{ boxShadow: "0 2px 5px -4px black" }}
      >
        <Box
          flexGrow={1}
          sx={{ backgroundColor: "white" }}
          px={{ xs: 2, sm: 5 }}
        >
          <Link href="/">
            <QBLogo />
          </Link>
        </Box>
        <Box display="flex" alignItems="stretch">
          <GlobalNavigation>
            <NavigationItem destinationUrl="/" selected>
              Startseite
            </NavigationItem>
          </GlobalNavigation>
        </Box>
      </Box>
    </Box>
  );
}
