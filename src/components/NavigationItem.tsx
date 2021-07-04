import React, { ReactElement } from "react";
import { Link } from "@material-ui/core";

export default function NavigationItem(props: NavigationItemProperties): ReactElement {
  return (
    <Link href={props.destinationUrl}>{props.children}</Link>
  );
}

interface NavigationItemProperties {
  destinationUrl:string;
  children:string;
}

