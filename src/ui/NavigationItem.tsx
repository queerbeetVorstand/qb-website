import React, { ReactElement } from "react";
import { Link, Typography } from "@mui/material";

export default function NavigationItem(
  props: NavigationItemProperties
): ReactElement {
  return (
    <Link
      href={props.destinationUrl}
      px={4}
      alignItems="center"
      underline="none"
      sx={{ display: "flex", height: "100%", color: props.textColor !== undefined ? `${props.textColor}` : "primary.main" }}
    >
      <Typography variant="button" sx={{ fontSize: "1rem", color: "inherit" }}>
        {props.children}
      </Typography>
    </Link>
  );
}

interface NavigationItemProperties {
  destinationUrl: string;
  children: string;
  selected?: boolean;
  textColor?: string;
}
