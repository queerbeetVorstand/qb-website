import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import QBLogo from "@/ui/QBLogo";
import Link from "@/ui/Link";
import GlobalNavigation from "@/ui/GlobalNavigation";
import NavigationItem from "@/ui/NavigationItem";
import { useRouter } from "next/router";

export default function Header(): ReactElement {
  const navigationEntries: NavigationEntry[] = [
    { destinationUrl: "/", label: "Startseite" },
    { destinationUrl: "/q-phase-21", label: "Q-Phase" },
    { destinationUrl: "/contact", label: "Kontakt" },
  ];

  const router = useRouter();
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
        pt={{ xs: 1.5, sm: 2 }}
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
            {navigationEntries.map((entry: NavigationEntry, index) => {
              const selected = router.asPath === entry.destinationUrl;
              return (
                <NavigationItem
                  key={index}
                  destinationUrl={entry.destinationUrl}
                  selected={selected}
                >
                  {entry.label}
                </NavigationItem>
              );
            })}
          </GlobalNavigation>
        </Box>
      </Box>
    </Box>
  );
}

interface NavigationEntry {
  destinationUrl: string;
  label: string;
}
