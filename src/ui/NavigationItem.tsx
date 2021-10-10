import React, { ReactElement } from "react";
import { Link, Typography } from "@mui/material";

export default function NavigationItem(
  props: NavigationItemProperties
): ReactElement {
  const desktopFontColor =
    props.fontColor !== undefined ? props.fontColor : "primary.main";
  const mobileFontColor =
    props.mobileFontColor !== undefined
      ? props.mobileFontColor
      : desktopFontColor;

  return (
    <Link
      href={props.destinationUrl}
      px={4}
      alignItems="center"
      underline="none"
      sx={{
        display: "flex",
        height: "100%",
        color: {
          xs: mobileFontColor,
          sm: desktopFontColor,
        },
        backgroundColor: props.backgroundColor,
      }}
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
  fontColor?: string;
  mobileFontColor?: string;
  backgroundColor?: string;
}
