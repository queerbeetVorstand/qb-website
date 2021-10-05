import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import QBLogo from "./QBLogo";
import makeStyles from "@mui/styles/makeStyles";
import Link from "@/components/Link";

const borderBottomStyling = makeStyles({
  root: {
    borderBottom: "4pt solid",
    borderImageSource:
      "linear-gradient(to right, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)",
    borderImageSlice: "0% 0% 100% 0%",
  },
});

export default function Header(): ReactElement {
  const borderBottom = borderBottomStyling();
  return (
    <Box display="flex" justifyContent="flex-end" className={borderBottom.root} sx={{mb: {xs: 3, sm: 5}}}>
      <Box flexGrow={1} position="relative" top={8}>
        <Link href="/">
          <QBLogo />
        </Link>
      </Box>
    </Box>
  );
}
