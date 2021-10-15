import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import QBLogo from "@/ui/QBLogo";
import Link from "@/ui/Link";
import GlobalNavigation from "@/ui/GlobalNavigation";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

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
          <GlobalNavigation
            mobileBackgroundColorOuter="white"
            mobileBackgroundColorInner="transparent"
          >
            {navigationEntries.map((entry: NavigationEntry, index) => {
              const selected = router.asPath === entry.destinationUrl;
              return (
                <Link
                  key={index}
                  href={entry.destinationUrl}
                  px={4}
                  alignItems="center"
                  underline="none"
                  sx={{
                    display: "flex",
                    height: "100%",
                    color: {
                      xs: "primary.main",
                      sm: selected ? "white" : undefined,
                    },
                    backgroundColor: selected ? "transparent" : "white",
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontSize: "1rem", color: "inherit" }}
                  >
                    {entry.label}
                  </Typography>
                </Link>
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
