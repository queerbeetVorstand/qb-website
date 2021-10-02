import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import Logo from "resources/qb_text.svg";

export default function QBLogo(): ReactElement {
  return (
    <Box m={1}>
      <Logo height={50}/>
    </Box>
  );
}