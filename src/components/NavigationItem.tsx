import React, { ReactElement } from "react";
import { Link, Typography } from "@mui/material";

export default function NavigationItem(props: NavigationItemProperties): ReactElement {
  return (
    <Link href={props.destinationUrl}>
      <Typography variant="button">{props.children}</Typography>
    </Link>
  );
}

interface NavigationItemProperties {
  destinationUrl:string;
  children:string;
}

