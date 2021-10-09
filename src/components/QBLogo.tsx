import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import Logo from "@/resources/qb_text.svg";

export default function QBLogo(): ReactElement {
  return (
    <Box m={1} mb={0}>
      <Logo height={50} />
    </Box>
  );
}
